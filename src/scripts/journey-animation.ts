import { animateSections } from '~/lib/animation/content-paragraph';

document.querySelectorAll('#journey > p').forEach((child) => {
  animateSections(child, child);
});
