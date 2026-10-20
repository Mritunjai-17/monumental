import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-dark' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      icon = false,
      children,
      className,
      external = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'group inline-flex items-center justify-center font-medium font-body transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-sm px-4 py-2 rounded-[8px] gap-1.5',
      md: 'text-[15px] sm:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-[10px] gap-2',
      lg: 'text-base sm:text-lg px-8 py-4 rounded-[10px] gap-2.5',
    };

    let variantStyles = '';

    if (variant === 'primary') {
      // Lime background, navy text, 600 weight, radius 10px, subtle lift + color change on hover, visible focus ring
      variantStyles =
        'bg-[#B7E34A] text-[#0B1F2A] font-semibold hover:bg-[#A3CF36] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[#B7E34A] active:translate-y-0 active:shadow-sm disabled:opacity-70 disabled:pointer-events-none border border-transparent';
    } else if (variant === 'secondary') {
      // Transparent with a 1.5px teal border, fills with teal on hover
      variantStyles =
        'bg-transparent text-[#1F6F78] border-[1.5px] border-[#1F6F78] hover:bg-[#1F6F78] hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-[#1F6F78]';
    } else if (variant === 'secondary-dark') {
      // White border on dark sections, fills with teal on hover
      variantStyles =
        'bg-transparent text-white border-[1.5px] border-white/80 hover:bg-[#1F6F78] hover:border-[#1F6F78] hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-white focus-visible:ring-offset-[#0B1F2A]';
    } else if (variant === 'link') {
      return (
        <Link
          href={href || '#'}
          className={cn('text-link', className)}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          <span>{children}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      );
    }

    const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles, className);

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          <span className="inline-flex items-center gap-2">{children}</span>
          {icon && <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        <span className="inline-flex items-center gap-2">{children}</span>
        {icon && <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
