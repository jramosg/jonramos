import { ui, defaultLang } from './ui';
import type { Langs, UIKeys } from './ui';

export function getLangFromUrl(url: URL): Langs {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Langs;
  return defaultLang;
}

export function useTranslations(lang: Langs) {
  return function t(key: UIKeys) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteFromUrl(url: URL): string {
  const [, lang, ...rest] = url.pathname.split('/');
  if (lang in ui) {
    return `/${rest.join('/')}`;
  }
  return url.pathname;
}

export function getLangPath(url: URL, lang: string): string {
  const route = getRouteFromUrl(url);
  // Remove trailing slash if present to avoid double slashes
  const cleanRoute = route.replace(/\/$/, '');
  return `/${lang}${cleanRoute}`;
}
