import React from 'react';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';

interface EyebrowProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

/** Uppercase label above a heading, matching the homepage sections. */
export const Eyebrow: React.FC<EyebrowProps> = ({ children, dark = false, className }) => (
  <span className={cn(type.eyebrow, dark ? tone.eyebrowDark : tone.eyebrowLight, className)}>
    {children}
  </span>
);
