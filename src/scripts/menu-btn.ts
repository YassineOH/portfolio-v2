import { BtnAnimation } from '~/lib/animation/menu-btn';

const mobileMenu = document.querySelector('#menu')!;
const btnMenu = document.querySelector('#btn-menu')!;

btnMenu.addEventListener('click', () => {
  const isClose = mobileMenu.getAttribute('data-state') === 'close';
  console.log(isClose);
  if (isClose) {
    mobileMenu.setAttribute('data-state', 'open');
    BtnAnimation().play();
  } else {
    mobileMenu.setAttribute('data-state', 'close');
    BtnAnimation().play().reverse(1);
  }
});
