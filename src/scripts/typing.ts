import { typingTextAnimation } from '~/lib/animation/typing';

const sentences_en = [
  'fullstack developer',
  'Next.js developer',
  'NestJS developer',
  'React.js developer',
  'cloud engineer',
  'Astro.js developer',
];

const sentences_ar = [
  'مطور متكامل',
  'مطور Next.js',
  'مطور NestJS',
  'مطور React.js',
  'مهندس سحابي',
  'مطور Astro.js',
];

document.addEventListener('astro:page-load', () => {
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
});
