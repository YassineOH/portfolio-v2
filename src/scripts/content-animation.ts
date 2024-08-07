import { animateSections } from '~/lib/animation/content-popup';

document.querySelectorAll('#journey > p').forEach((child) => {
  animateSections(child, child);
});

document.querySelectorAll('#content-contact > *').forEach((child) => {
  animateSections(child, child);
});
