import React from 'react';
import { cn } from '@/lib/utils';

interface KineticHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  text: string;
  className?: string;
  /** Words revealed together per step. */
  groupSize?: number;
}

/**
 * Heading that rises in small word groups when scrolled into view
 * (data-reveal="words", see globals.css). Every word is its own inline-block
 * span, so line wrapping matches the plain text; groupSize only staggers the
 * timing. The accessible name is the unsplit text.
 */
export const KineticHeading: React.FC<KineticHeadingProps> = ({
  as: Tag = 'h2',
  text,
  className,
  groupSize = 2,
}) => {
  const words = text.split(' ');
  return (
    <Tag data-reveal="words" aria-label={text} className={cn(className)}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span
            aria-hidden="true"
            className="kw"
            style={{ '--g': Math.floor(i / groupSize) } as React.CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
};
