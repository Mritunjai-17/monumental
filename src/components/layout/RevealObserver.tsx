'use client';

import { useEffect } from 'react';

/**
 * Reveals elements marked with [data-reveal] once, the first time they enter
 * the viewport, by setting [data-revealed]. Hidden/visible states live in
 * globals.css and only apply when <html> has the `motion-ok` class (set before
 * first paint unless the user prefers reduced motion), so content is never
 * hidden without JS or with reduced motion.
 */
export const RevealObserver: React.FC = () => {
  useEffect(() => {
    const revealAll = () =>
      document
        .querySelectorAll('[data-reveal]:not([data-revealed])')
        .forEach((el) => el.setAttribute('data-revealed', ''));

    if (!document.documentElement.classList.contains('motion-ok')) return;
    if (!('IntersectionObserver' in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          io.unobserve(entry.target); // animate once only
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );

    // Observe current elements, plus any rendered later by client navigation.
    let frame = 0;
    const scan = () => {
      frame = 0;
      document
        .querySelectorAll('[data-reveal]:not([data-revealed])')
        .forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
};
