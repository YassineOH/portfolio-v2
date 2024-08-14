import { toggleTheme } from '~/lib/theme';

document.addEventListener('astro:page-load', () => {
  const btn = document.querySelector('#btn-theme')!;
  btn.addEventListener('click', toggleTheme);
});
