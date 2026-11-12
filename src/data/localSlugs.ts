import type { Langs } from '@/i18n/ui';

/** Slug of the local-business page in each language. */
export const localSlugs: Record<Langs, string> = {
  es: 'paginas-web-gipuzkoa',
  eu: 'web-orriak-gipuzkoa',
  en: 'web-design-gipuzkoa',
};

export const localPath = (lang: Langs) => `/${lang}/${localSlugs[lang]}`;

export const localAlternates = {
  en: localPath('en'),
  es: localPath('es'),
  eu: localPath('eu'),
};
