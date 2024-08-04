import { gsap } from 'gsap';

const l1 = document.querySelector('#btn-menu #l1');
const l2 = document.querySelector('#btn-menu #l2');
const l3 = document.querySelector('#btn-menu #l3');

export const BtnAnimation = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    l1,
    {
      rotate: 0,
      translateX: 0,
      translateY: 0,
    },
    {
      rotate: 45,
      translateX: 2,
      translateY: 0.5,
    },
    0,
  );

  tl.fromTo(
    l2,
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
    0,
  );

  tl.fromTo(
    l3,
    {
      rotate: 0,
      translateX: 0,
      translateY: 0,
    },
    {
      rotate: -45,
      translateX: 2,
      translateY: 0,
      // opacity: 0,
    },
    0,
  );
  return tl;
};
