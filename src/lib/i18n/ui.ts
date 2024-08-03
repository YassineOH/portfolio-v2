export const languages = {
  ar: 'العربية',
  en: 'English',
};

export const defaultLanguage = 'en';

export const ui = {
  en: {
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.projects': 'projects',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات',
    'nav.projects': 'مشاريع',
  },
} as const;

export type UILang = typeof ui;
