import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateSections = (trigger: Element, children: Element) => {
  const tl = gsap.timeline();
  gsap.set(children, {
    opacity: 0,
    translateY: '10px',
    scale: 0.9,
  });

  tl.to(children, {
    scrollTrigger: {
      trigger,
      start: '0% 100%',
      end: '100% 100%',
      scrub: true,
      markers: true,
    },
    opacity: 1,
    scale: 1,
    translateY: 0,
    duration: 3,
  });
};
