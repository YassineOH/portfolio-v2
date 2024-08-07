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
    'form.error': 'Something went wrong!',
    'form.sent': 'Your message is sent',
    'form.missingName': 'Please provide your full name.',
    'form.missingEmail': 'Please provide your email.',
    'form.missingMessage': 'Please provide your message.',
    'footer.title': 'Yassine ofqir-hamma',
    'footer.mail': 'Email',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات',
    'nav.showcases': 'مشاريع',
    'form.name': 'الاسم',
    'form.email': 'البريد  الإلكتروني',
    'form.message': 'الرسالة',
    'form.send': 'إرسال',
    'form.error': 'حدث خظأ ما, المرجو المحاولة لاحقا!',
    'form.sent': 'تم إرسال رسالتك بنجاح',
    'form.missingName': '.المرجو إدخال اسمك الكامل',
    'form.missingEmail': '.المرجو إدخال بريدك الإلكتروني',
    'form.missingMessage': '.المرجو إدخال رسالتك',
    'footer.title': 'ياسين أفقير حما',
    'footer.mail': 'البريد الإلكتروني',
  },
} as const;

export type UILang = typeof ui;
