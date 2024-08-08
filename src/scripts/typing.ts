import { typingTextAnimation } from '~/lib/animation/typing';

const sentences_en = [
  'web developer',
  'frontend developer',
  'Next.js developer',
  'React.js developer',
  'Astro.js developer',
  'solar engineer',
];

const sentences_ar = [
  'مبرمج ويب',
  'مبرمج واجهة المستخدم',
  'مبرمج React.js',
  'مبرمج Next.js',
  'مبرمج Astro.js',
  'مهندس طاقة شمسية',
];

const text = document.querySelector('#text')!;
const cursor = document.querySelector('#cursor')!;

const lang = document.documentElement.lang;

if (text !== null) {
  typingTextAnimation(
    text,
    cursor,
    lang === 'ar' ? sentences_ar : sentences_en,
  );
}
