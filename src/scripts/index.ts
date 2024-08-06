import Lenis from 'lenis';
import { initializeTheme } from '~/lib/theme';
import { animateStars } from '~/lib/animation/stars';
import './btn-theme';
import './btn-language';
import './menu-btn';
import './typing';
import './astrolab';
import './journey-animation';

const lenis = new Lenis();

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// window.onload = () => {
initializeTheme();
animateStars();
// };
