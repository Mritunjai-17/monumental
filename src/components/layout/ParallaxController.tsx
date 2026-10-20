'use client';

import { useEffect } from 'react';

/**
 * Drives [data-parallax="<speed>"] layers. Each layer is oversized by CSS
 * (globals.css, desktop + motion-ok only) and shifted within that overflow by
 * --parallax-y, so the shift can never expose an edge. Pages have only a few
 * layers, so every frame simply updates those within reach of the viewport.
 * Off on < 1024px and when reduced motion is preferred.
 */
export const ParallaxController: React.FC = () => {
  useEffect(() => {
    if (!document.documentElement.classList.contains('motion-ok')) return;

    const desktop = window.matchMedia('(min-width: 1024px)');
    let layers: HTMLElement[] = [];
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!desktop.matches) return;
      const vh = window.innerHeight;
      for (const layer of layers) {
        const frameEl = layer.parentElement;
        if (!frameEl) continue;
        const rect = frameEl.getBoundingClientRect();
        if (rect.bottom < -vh * 0.5 || rect.top > vh * 1.5) continue;
        const speed = parseFloat(layer.dataset.parallax || '0');
        const max = Math.max(0, (layer.offsetHeight - frameEl.offsetHeight) / 2);
        const offset = -(rect.top + rect.height / 2 - vh / 2) * speed;
        const y = Math.max(-max, Math.min(max, offset));
        layer.style.setProperty('--parallax-y', `${y.toFixed(1)}px`);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Re-collect layers when the DOM changes (client navigation).
    const collect = () => {
      layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
      schedule();
    };
    collect();
    const mo = new MutationObserver(collect);
    mo.observe(document.body, { childList: true, subtree: true });

    const onBreakpoint = () => {
      if (!desktop.matches) layers.forEach((el) => el.style.removeProperty('--parallax-y'));
      schedule();
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      mo.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      desktop.removeEventListener('change', onBreakpoint);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
};
