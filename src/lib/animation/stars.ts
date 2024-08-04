import { gsap } from 'gsap';

export const animateStars = () => {
  const box = document.querySelector('#stars')!;
  const stars = Array.from(box.querySelectorAll('.star')!);
  if (box == null || stars == null) return;

  const { height, width } = box.getBoundingClientRect();

  const tl = gsap.timeline({
    repeat: -1,
  });
  stars.forEach((s, i) => {
    const randX = Math.random() * width * 0.95;
    const randY = Math.random() * height;

    tl.fromTo(
      s,
      {
        opacity: 0.3,
        scale: 0.5,
        x: randX,
        y: randY,
        display: 'block',
      },
      {
        opacity: 1,
        scale: 3,
        x: randX,
        y: randY - 1 * Math.random(),
        duration: 2,
        rotate: 0,
        ease: 'power2.out',
        delay: i,
      },
    ).to(s, {
      opacity: 0.3,
      scale: 0.5,
      rotate: 180,
      x: randX,
      y: randY - 1 * Math.random(),
      delay: Math.random() * 1,
      ease: 'power2.out',
      duration: 0.5,
    });
  });
};
