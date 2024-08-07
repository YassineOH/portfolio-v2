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
    'form.name': 'name',
    'form.email': 'email',
    'form.message': 'message',
    'form.send': 'send',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات',
    'nav.showcases': 'مشاريع',
    'form.name': 'الاسم',
    'form.email': 'البريد  الإلكتروني',
    'form.message': 'الرسالة',
    'form.send': 'إرسال',
  },
} as const;

export type UILang = typeof ui;
