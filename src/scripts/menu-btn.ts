import { BtnAnimation, menuAnimation } from '~/lib/animation/menu-btn';

document.addEventListener('astro:page-load', () => {
  const mobileMenu = document.querySelector('#menu')!;
  const btnMenu = document.querySelector('#btn-menu')!;

  btnMenu.addEventListener('click', () => {
    const isClose = mobileMenu.getAttribute('data-state') === 'close';
    if (isClose) {
      mobileMenu.setAttribute('data-state', 'open');
      BtnAnimation().play();
      menuAnimation().play();
    } else {
      mobileMenu.setAttribute('data-state', 'close');
      BtnAnimation().play().reverse(1);
      menuAnimation().play().reverse(1);
    }
  });
});
