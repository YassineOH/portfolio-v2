import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateSections = (trigger: Element, children: Element) => {
  const tl = gsap.timeline();
  gsap.set(children, {
    opacity: 0,
    translateY: '100px',
    scale: 0.95,
  });

  tl.to(children, {
    scrollTrigger: {
      trigger,
      start: '0% 70%',
      end: '100% 70%',
      scrub: true,
      // markers: true,
    },
    opacity: 1,
    scale: 1,
    translateY: 0,
    duration: 3,
  });
};
