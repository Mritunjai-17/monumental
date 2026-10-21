'use client';

import { useEffect } from 'react';

/** Delay between cards that become visible in the same frame. */
const STAGGER_MS = 140;
/** Cap per batch, so large grids reveal in small groups instead of one long chain. */
const MAX_STEPS = 3;
/** An element is revealed once its top crosses this fraction of the viewport height. */
const TRIGGER = 0.9;


declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

/**
 * Reveals elements marked with [data-reveal] once, the first time they reach
 * the viewport, by setting [data-revealed]. They are never hidden again.
 *
 * Elements that reach the viewport in the same frame form a batch, revealed in
 * reading order (row, then column). Within a batch, [data-reveal="card"]
 * elements get --reveal-delay = position x 180ms (max 3 steps); a card that
 * scrolls in alone appears immediately. Anything already scrolled past (e.g.
 * after a fast scroll or an anchor jump) is revealed with no delay.
 *
 * Hidden states live in globals.css and only apply when <html> has the
 * `motion-ok` class (set before first paint unless reduced motion is
 * preferred). lib/motion.ts removes that class if this component has not
 * started within 4s, so content can never stay hidden if JS fails.
 */
export const RevealObserver: React.FC = () => {
  useEffect(() => {
    window.__revealReady = true;
    if (!document.documentElement.classList.contains('motion-ok')) return;

    let pending: HTMLElement[] = [];
    let frame = 0;

    const check = () => {
      frame = 0;
      if (!pending.length) return;
      const limit = window.innerHeight * TRIGGER;
      const due: { el: HTMLElement; row: number; left: number; onScreen: boolean }[] = [];
      const rest: HTMLElement[] = [];

      for (const el of pending) {
        const r = el.getBoundingClientRect();
        if (r.top < limit) {
          // Rows: tops within 8px count as the same row.
          due.push({ el, row: Math.round(r.top / 8), left: r.left, onScreen: r.bottom > 0 });
        } else {
          rest.push(el);
        }
      }
      if (!due.length) return;
      pending = rest;

      due.sort((a, b) => a.row - b.row || a.left - b.left);
      let step = 0;
      for (const { el, onScreen } of due) {
        if (el.dataset.reveal === 'card') {
          const delay = onScreen ? Math.min(step++, MAX_STEPS) * STAGGER_MS : 0;
          el.style.setProperty('--reveal-delay', `${delay}ms`);
        }
        el.setAttribute('data-revealed', '');
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    const collect = () => {
      pending = Array.from(
        document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')
      );
      schedule();
    };
    collect();

    // New elements after client-side navigation; layout changes without scrolling.
    const mo = new MutationObserver(collect);
    mo.observe(document.body, { childList: true, subtree: true });
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      mo.disconnect();
      ro.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
};
