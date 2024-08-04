import { initializeTheme } from '~/lib/theme';
import { animateStars } from '~/lib/animation/stars';
import './btn-theme';
import './btn-language';
import './menu-btn';
import './typing';
import './astrolab';

window.onload = () => {
  initializeTheme();
  animateStars();
};
