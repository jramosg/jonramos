import { languages } from '@/i18n/ui';
import { logger } from '@/logger';
import type { AstroGlobal } from 'astro';

export function resolveLanguage(Astro: AstroGlobal): string {

  const [, urlLang] = Astro.url.pathname.split('/');

  const supported = new Set(Object.keys(languages));

  const acceptLang = Astro.request.headers.get('accept-language') || '';

  const preferredLangs = acceptLang
    .split(',')
    .map((entry) => entry.split(';')[0].trim().toLowerCase())
    .map((code) => code.split('-')[0]);

  const headerLang = preferredLangs.find((l) => supported.has(l));

  const resolvedLang = supported.has(urlLang) ? urlLang : headerLang || 'en';

  return resolvedLang;
}
