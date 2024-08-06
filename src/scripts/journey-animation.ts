import { animateSections } from '~/lib/animation/content-paragraph';

document.querySelectorAll('#journey > *').forEach((child) => {
  animateSections(child, child);
});
