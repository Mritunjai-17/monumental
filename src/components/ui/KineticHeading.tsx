import React from 'react';
import { cn } from '@/lib/utils';

interface KineticHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  text: string;
  className?: string;
  /** Words revealed together per step. Default 2. */
  groupSize?: number;
}

/**
 * Premium masked text reveal: words slide up from behind an overflow mask
 * with a staggered delay as the heading enters the viewport.
 * Uses [data-reveal="words"] for viewport intersection detection.
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
          <span className="kw-mask inline-block overflow-hidden align-top">
            <span
              aria-hidden="true"
              className="kw inline-block"
              style={{ '--g': Math.floor(i / groupSize) } as React.CSSProperties}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Tag>
  );
};

