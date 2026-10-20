import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-[16px] border transition-all duration-300 overflow-hidden',
        dark
          ? 'bg-[#0E2836] border-[#1D3B4C] text-white'
          : 'bg-white border-[#DDE3E3] text-[#16232B] shadow-[0_4px_20px_-2px_rgba(11,31,42,0.05),0_2px_6px_-1px_rgba(11,31,42,0.03)]',
        hoverEffect &&
          'hover:-translate-y-1 hover:shadow-[0_12px_32px_-4px_rgba(11,31,42,0.12),0_4px_12px_-2px_rgba(11,31,42,0.06)] hover:border-[#1F6F78]/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
