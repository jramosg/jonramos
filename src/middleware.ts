import { defineMiddleware } from 'astro:middleware';
import { ui } from './i18n/ui';
import { logger } from './logger';

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const path = context.originPathname;

  const isHealthcheck = new URL(context.url).searchParams.get('health') === '1';

  // Skip logging and rewrites for container healthchecks
  if (isHealthcheck) {
    return next();
  }

  logger.info('request: %s %s', context.request.method, path);
  // Allow common Astro/static internals to pass through untouched
  if (
    path.startsWith('/_image') ||
    path.startsWith('/_astro') ||
    path.startsWith('/assets') ||
    path.startsWith('/sitemap.xml')
  ) {
    return next();
  }

  // Build supported language set from i18n ui keys
  const supported = new Set(Object.keys(ui));

  // Extract first URL segment as potential lang prefix
  const segments = path.split('/');
  const urlLang = (segments[1] || '').toLowerCase();

  // Parse Accept-Language header into ordered language prefs
  const acceptLang = context.request.headers.get('accept-language') || '';
  const preferredLangs = acceptLang
    .split(',')
    .map((entry) => entry.split(';')[0].trim().toLowerCase())
    .map((code) => code.split('-')[0]);

  // Resolve language: use URL prefix, else first supported header, else default
  const headerLang = preferredLangs.find((l) => supported.has(l));
  const resolvedLang = supported.has(urlLang) ? urlLang : headerLang || 'en';

  // Expose the resolved language to downstream code
  if (!context.locals.lang) {
    context.locals.lang = resolvedLang;
  }

  const hasSupportedPrefix = supported.has(urlLang);

  // If no supported prefix, rewrite to a language-prefixed path.
  if (!hasSupportedPrefix) {
    const target =
      segments.filter(Boolean).length === 1
        ? `/${resolvedLang}`
        : path === '/'
          ? `/${resolvedLang}`
          : `/${resolvedLang}${path}`;
    const withQuery = `${target}${context.url.search || ''}`;
    return context.rewrite(withQuery);
  }

  return next();
});
