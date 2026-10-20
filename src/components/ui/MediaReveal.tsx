import React from 'react';

interface MediaRevealProps {
  /** A next/image with `fill`. */
  children: React.ReactNode;
  /** Parallax speed (e.g. 0.08). Omit for no parallax. */
  parallax?: number;
  /** Clip-mask reveal when scrolled into view. */
  reveal?: boolean;
}

/**
 * Wraps a fill image placed inside an existing positioned, overflow-hidden
 * frame. Adds an optional clip-mask reveal and an optional parallax layer
 * without touching the frame's size, ratio or anything layered above it.
 */
export const MediaReveal: React.FC<MediaRevealProps> = ({ children, parallax, reveal = true }) => (
  <div className="absolute inset-0" data-reveal={reveal ? 'clip' : undefined}>
    <div className="absolute inset-0" data-parallax={parallax}>
      {children}
    </div>
  </div>
);
