import { animateSections } from '~/lib/animation/content-paragraph';

const trigger = document.querySelector('#journey')!;

document.querySelectorAll('#journey > *').forEach((child) => {
  animateSections(child, child);
});
