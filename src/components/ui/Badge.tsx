import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'teal' | 'lime' | 'navy' | 'outline' | 'neutral' | 'unverified';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  className,
  ...props
}) => {
  const variantStyles = {
    teal: 'bg-[#1F6F78]/10 text-[#1F6F78] border border-[#1F6F78]/25',
    lime: 'bg-[#B7E34A] text-[#0B1F2A] font-semibold border border-[#A3CF36]',
    navy: 'bg-[#0B1F2A] text-white border border-[#1D3B4C]',
    outline: 'bg-transparent text-[#1F6F78] border border-[#1F6F78]',
    neutral: 'bg-white/80 text-[#5B6B73] border border-[#DDE3E3]',
    unverified: 'bg-amber-50 text-amber-800 border border-amber-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
