import { ui, defaultLanguage, showDefaultLang } from './ui';

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/');

  if (lang in ui) {
    return lang as keyof typeof ui;
  }

  return defaultLanguage;
};

export const useTranslation = (lang: keyof typeof ui) => {
  return function t(key: keyof (typeof ui)[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  };
};

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLanguage ? path : `/${l}${path}`;
  };
}
