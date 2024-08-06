export const languages = {
  ar: 'العربية',
  en: 'English',
};

export const defaultLanguage = 'en';

export const ui = {
  en: {
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.showcases': 'showcases',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات',
    'nav.showcases': 'مشاريع',
  },
} as const;

export type UILang = typeof ui;
