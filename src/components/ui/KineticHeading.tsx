import React from 'react';
import { cn } from '@/lib/utils';

interface KineticHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  /** Use "\n" for a line break from the sm breakpoint up (mobile wraps naturally). */
  text: string;
  className?: string;
  id?: string;
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
  id,
  groupSize = 2,
}) => {
  const label = text.replace(/\s*\n\s*/g, ' ');
  const lines = text.split('\n').map((line) => line.trim().split(' '));
  let index = 0;

  return (
    <Tag id={id} data-reveal="words" aria-label={label} className={cn(className)}>
      {lines.map((words, l) => (
        <React.Fragment key={l}>
          {l > 0 && (
            <>
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
            </>
          )}
          {words.map((word, i) => {
            const g = Math.floor(index++ / groupSize);
            return (
              <React.Fragment key={i}>
                <span className="kw-mask inline-block overflow-hidden align-top">
                  <span
                    aria-hidden="true"
                    className="kw inline-block"
                    style={{ '--g': g } as React.CSSProperties}
                  >
                    {word}
                  </span>
                </span>
                {i < words.length - 1 && ' '}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ))}
    </Tag>
  );
};
