import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  /** "View all" style link rendered on the same row as the heading. */
  action?: { label: string; shortLabel?: string; href: string };
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className,
  action,
}) => {
  const heading = (
    <div className={cn(align === 'center' && !action ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl')}>
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
          'text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading tracking-[-0.02em] leading-[1.18]',
          description && 'mb-4',
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

  if (!action) {
    return (
      <div data-reveal className={cn('mb-12 sm:mb-16', className)}>
        {heading}
      </div>
    );
  }

  // Heading and "View all" share one row at every breakpoint; the link
  // aligns to the heading's last line.
  return (
    <div data-reveal className={cn('mb-12 sm:mb-16 flex flex-row items-end justify-between gap-4', className)}>
      {heading}
      <Link
        href={action.href}
        className="text-link text-sm font-semibold shrink-0 inline-flex items-center gap-1.5 pb-1.5"
      >
        <span className={action.shortLabel ? 'hidden sm:inline' : undefined}>{action.label}</span>
        {action.shortLabel && <span className="sm:hidden">{action.shortLabel}</span>}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
