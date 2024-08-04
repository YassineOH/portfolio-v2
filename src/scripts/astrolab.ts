import { gsap } from 'gsap';

const container = document.querySelector('#hero') as HTMLDivElement;
const axe = document.querySelector('#axe') as HTMLDivElement | null;
if (axe !== null) {
  container.addEventListener('mousemove', (e) => {
    const currentX = e.clientX;
    const currentY = e.clientY;
    const { height, width, x, y } = axe.getBoundingClientRect();
    const disX = Math.ceil(currentX - (x + width / 2));
    const disY = Math.ceil(currentY - (y + height / 2));

    const angle = (Math.atan(disY / disX) * 180) / Math.PI;
    gsap.to(axe, {
      rotate: angle,
      duration: 0.1,
    });
  });
}
