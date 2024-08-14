import { gsap } from 'gsap';
document.addEventListener('astro:page-load', () => {
  const container = document.querySelector('body')!;
  const axe = document.querySelector('#axe') as HTMLDivElement | null;
  if (axe !== null) {
    container.addEventListener('mousemove', (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      const { height, width, x, y } = axe.getBoundingClientRect();
      const disX = currentX - (x + width / 2);
      const disY = currentY - (y + height / 2);

      const angle = Math.atan2(disY, disX) * (180 / Math.PI);
      gsap.to(axe, {
        rotate: angle,
        duration: 0.1,
      });
    });
  }
});
