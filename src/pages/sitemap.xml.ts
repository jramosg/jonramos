export const prerender = false;

import { languages } from '@/i18n/ui';
import { localSlugs } from '@/data/localSlugs';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site?.toString();

  const urls: Array<{
    loc: string;
    lastmod?: string;
    changefreq?: string;
    priority?: number;
    alternateRefs?: Array<{ hreflang: string; href: string }>;
  }> = [];

  // Main pages for each language
  Object.entries(languages).forEach(([langCode]) => {
    // Homepage
    urls.push({
      loc: `${site}${langCode}`,
      changefreq: 'weekly',
      priority: 1.0,
      alternateRefs: Object.entries(languages)
        .map(([altLangCode]) => ({
          hreflang: altLangCode,
          href: `${site}${altLangCode}`,
        }))
        .concat([
          {
            hreflang: 'x-default',
            href: `${site}en`,
          },
        ]),
    });

    // Contributions page for each language
    urls.push({
      loc: `${site}${langCode}/contributions`,
      changefreq: 'monthly',
      priority: 0.8,
      alternateRefs: Object.entries(languages)
        .map(([altLangCode]) => ({
          hreflang: altLangCode,
          href: `${site}${altLangCode}/contributions`,
        }))
        .concat([
          {
            hreflang: 'x-default',
            href: `${site}en/contributions`,
          },
        ]),
    });
  });

  // Local-business landing: a different slug per language
  const localAlternates = Object.entries(localSlugs)
    .map(([l, slug]) => ({ hreflang: l, href: `${site}${l}/${slug}` }))
    .concat([{ hreflang: 'x-default', href: `${site}es/${localSlugs.es}` }]);
  Object.entries(localSlugs).forEach(([l, slug]) => {
    urls.push({
      loc: `${site}${l}/${slug}`,
      changefreq: 'monthly',
      priority: 0.9,
      alternateRefs: localAlternates,
    });
  });

  // Demo pages (language-neutral)
  urls.push(
    {
      loc: `${site}demos/jon-nested-menu/cljs/`,
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      loc: `${site}demos/jon-nested-menu/react/`,
      changefreq: 'weekly',
      priority: 0.7,
    },
  );

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls
  .map(
    (url) => `<url>
  <loc>${url.loc}</loc>
  ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
  ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
  ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  ${
    url.alternateRefs
      ? url.alternateRefs
          .map(
            (ref) =>
              `<xhtml:link rel="alternate" hreflang="${ref.hreflang}" href="${ref.href}" />`,
          )
          .join('\n  ')
      : ''
  }
</url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
