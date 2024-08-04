import { initializeTheme } from '~/lib/theme';
import { animateStars } from '~/lib/animation/stars';
import './btn-theme';
import './btn-language';
import './menu-btn';
import './typing';

window.onload = () => {
  initializeTheme();
  animateStars();
};
