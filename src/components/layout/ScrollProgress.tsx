'use client';

import { useEffect, useRef } from 'react';

/**
 * Thin lime bar fixed to the top of the viewport showing document scroll
 * progress. Sits above the sticky header (z-40) but below the mobile menu
 * (z-50), and takes no layout space. Updated via rAF with a direct style write,
 * so scrolling never re-renders React.
 */
export const ScrollProgress: React.FC = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // Page height changes (client navigation, images, reveals) move the max.
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[45] h-[3px] pointer-events-none">
      <div
        ref={bar}
        className="h-full w-full origin-left bg-[#B7E34A]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
