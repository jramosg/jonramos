export const prerender = false;

import type { APIContext } from 'astro';
import { logger } from '@/logger';

/**
 * Mobile PageSpeed score of a visitor's current website, for the
 * "measure your site" form on the local-business page. Google does the
 * fetching; this only validates the address, keeps the API key on the
 * server, and stops one visitor from burning the daily quota.
 */

const PSI = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const WINDOW_MS = 10 * 60 * 1000;
const PER_IP = 5;
const CACHE_MS = 60 * 60 * 1000;
const MAX_ENTRIES = 2000;

interface Score {
  host: string;
  score: number;
  lcp: string | null;
}

const hits = new Map<string, number[]>();
const cache = new Map<string, { at: number; body: Score }>();

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });

/** A public http(s) address, or null. Bare domains get https://. */
function publicUrl(raw: string): URL | null {
  const text = raw.trim();
  if (!text || text.length > 300) return null;
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`);
  } catch {
    return null;
  }
  const host = url.hostname;
  const isName = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(host);
  if (!isName || url.username || url.password || url.port) return null;
  return url;
}

function allowed(ip: string, now: number): boolean {
  if (hits.size > MAX_ENTRIES) hits.clear();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= PER_IP) {
    hits.set(ip, recent);
    return false;
  }
  hits.set(ip, [...recent, now]);
  return true;
}

function clientIp(context: APIContext): string {
  const forwarded = context.request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  try {
    return context.clientAddress;
  } catch {
    return 'unknown';
  }
}

export async function POST(context: APIContext) {
  const key = process.env.PSI_API_KEY ?? import.meta.env.PSI_API_KEY;
  if (!key) return json({ error: 'unavailable' }, 503);

  const body = await context.request.json().catch(() => null);
  const url = publicUrl(typeof body?.url === 'string' ? body.url : '');
  if (!url) return json({ error: 'invalid' }, 400);

  const now = Date.now();
  const target = `${url.origin}${url.pathname}`;
  const cached = cache.get(target);
  if (cached && now - cached.at < CACHE_MS) return json(cached.body);

  if (!allowed(clientIp(context), now)) return json({ error: 'busy' }, 429);

  const query = new URLSearchParams({
    url: target,
    strategy: 'mobile',
    category: 'performance',
    key,
  });

  try {
    const res = await fetch(`${PSI}?${query}`, {
      signal: AbortSignal.timeout(60_000),
    });
    const data = await res.json();
    const result = data?.lighthouseResult;
    const perf = result?.categories?.performance?.score;
    if (!res.ok || typeof perf !== 'number') {
      // Google answers 4xx/5xx for addresses it cannot load
      const unreachable = res.status === 400 || res.status === 500;
      if (!unreachable) {
        logger.warn('PageSpeed request failed: %O', { status: res.status });
      }
      return json({ error: unreachable ? 'invalid' : 'busy' }, 502);
    }
    const score: Score = {
      host: url.hostname.replace(/^www\./, ''),
      score: Math.round(perf * 100),
      lcp: result.audits?.['largest-contentful-paint']?.displayValue ?? null,
    };
    if (cache.size > MAX_ENTRIES) cache.clear();
    cache.set(target, { at: now, body: score });
    return json(score);
  } catch {
    return json({ error: 'busy' }, 504);
  }
}
