import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  /** Use "\n" for a line break from the sm breakpoint up. */
  title: string;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  titleClassName?: string;
  /** Heading level. Default h2. */
  as?: 'h1' | 'h2' | 'h3';
  /** "compact" for narrow columns and CTA bands. */
  size?: 'default' | 'compact';
  id?: string;
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
  titleClassName,
  as = 'h2',
  size = 'default',
  id,
  action,
}) => {
  const heading = (
    <div className={cn(align === 'center' && !action ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl')}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <KineticHeading
        as={as}
        id={id}
        text={title}
        className={cn(
          size === 'compact' ? type.h2Compact : type.h2,
          description && 'mb-4',
          dark ? tone.headingDark : tone.headingLight,
          titleClassName
        )}
      />
      {description && (
        <p
          className={cn(
            type.lead,
            dark ? 'text-[#DDE3E3]/80' : tone.mutedLight
          )}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (!action) {
    return (
      <div data-reveal="fade" className={cn('mb-12 sm:mb-16', className)}>
        {heading}
      </div>
    );
  }

  // Heading and "View all" share one row at every breakpoint; the link
  // aligns to the heading's last line.
  return (
    <div data-reveal="fade" className={cn('mb-12 sm:mb-16 flex flex-row items-end justify-between gap-4', className)}>
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
