export const prerender = false;

import { languages } from "@/i18n/ui";
import { logger } from "@/logger";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {

  const site = context.site?.toString();

  const urls: Array<{
    loc: string;
    changefreq?: string;
    priority?: number;
    alternateRefs?: Array<{ hreflang: string; href: string }>;
  }> = [];

  Object.entries(languages).forEach(([langCode]) => {
    urls.push({
      loc: `${site}${langCode}`,
      priority: 1,
      alternateRefs: Object.entries(languages)
        .map(([altLangCode]) => ({
          hreflang: altLangCode,
          href: `${site}${altLangCode}`,
        }))
        .concat([
          {
            hreflang: "x-default",
            href: `${site}en`,
          },
        ]),
    });
  });

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
  ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
  ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ""}
  ${
    url.alternateRefs
      ? url.alternateRefs
          .map(
            (ref) =>
              `<xhtml:link rel="alternate" hreflang="${ref.hreflang}" href="${ref.href}" />`
          )
          .join("\n  ")
      : ""
  }
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
