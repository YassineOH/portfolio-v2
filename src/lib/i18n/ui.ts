export const languages = {
  ar: 'العربية',
  en: 'English',
};

export const showDefaultLang = false;

export const defaultLanguage = 'en';

export const ui = {
  en: {
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.showcase': 'showcase',
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
    'leetcode.easy': 'Easy',
    'leetcode.medium': 'Medium',
    'leetcode.hard': 'Hard',
    'leetcode.rate': 'rate',
    'leetcode.title': 'LeetCode Summary',
    'showcase.links': 'Links',
    'showcase.built': 'Built using',
    'showcase.demo': 'Live Demo',
    'showcase.github': 'Github Repo',
    'showcase.screens': 'See screenshots',
    '404.title': "404!! there's no page here",
    '404.button': 'Go Back',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة',
    'nav.showcase': 'معرض',
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
    'leetcode.easy': 'سهل',
    'leetcode.medium': 'متوسط',
    'leetcode.hard': 'صعب',
    'leetcode.rate': 'القبول',
    'leetcode.title': 'ملخص LeetCode',
    'showcase.links': 'روابط',
    'showcase.built': 'تم التطوير بواسطة',
    'showcase.demo': 'عرض مباشر',
    'showcase.github': 'مستودع GitHub',
    'showcase.screens': 'أنطر لقطات الشاشة',
    '404.title': '404!! لا توجد صفحة هنا',
    '404.button': 'الرجوع للرئيسية',
  },
} as const;

export type UILang = typeof ui;
