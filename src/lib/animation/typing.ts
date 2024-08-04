import { gsap } from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

export const typingTextAnimation = (
  s: Element,
  cursor: Element,
  sentences: string[],
) => {
  const tl = gsap.timeline({
    repeat: -1,
  });

  const cursorTL = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5,
  });

  cursorTL
    .to(cursor, {
      opacity: 1,
      duration: 0,
    })
    .to(cursor, {
      opacity: 0,
      duration: 0,
      delay: 0.5,
    });

  sentences.forEach((sentence) => {
    const textTL = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 5,
      delay: 1,
    });
    textTL.to(s, {
      text: sentence,
      duration: 1,

      onUpdate: () => {
        cursorTL.restart();
        cursorTL.pause();
      },
      onComplete: () => {
        cursorTL.play(0);
      },
    });

    tl.add(textTL);
  });
};
