import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'eyebrow block mb-3 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm',
            dark ? 'text-[#B7E34A]' : 'text-[#1F6F78]'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading tracking-[-0.02em] leading-[1.18] mb-4',
          dark ? 'text-white' : 'text-[#0B1F2A]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base sm:text-lg leading-[1.6]',
            dark ? 'text-[#DDE3E3]/80' : 'text-[#5B6B73]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
