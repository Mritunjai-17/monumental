import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Download, FileText, LucideIcon } from 'lucide-react';

export type ResourceTileVariant = 'teal-panel' | 'mint-icon' | 'ice-icon' | 'dark-alert';

export interface ResourceTileProps {
  variant?: ResourceTileVariant;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  download?: boolean | string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export const ResourceTile: React.FC<ResourceTileProps> = ({
  variant = 'mint-icon',
  eyebrow,
  title,
  description,
  href,
  isExternal = false,
  download,
  icon: CustomIcon,
  className = '',
  onClick,
}) => {
  const IconComponent = CustomIcon || FileText;

  // Determine container and link attributes
  const isLinkExternal = isExternal || href.startsWith('http://') || href.startsWith('https://');
  const commonLinkProps = {
    onClick,
    download: download ? (typeof download === 'string' ? download : true) : undefined,
    target: isLinkExternal ? '_blank' : undefined,
    rel: isLinkExternal ? 'noopener noreferrer' : undefined,
  };

  // 1. Variant: Full-height Teal Topographic Panel
  if (variant === 'teal-panel') {
    return (
      <div data-reveal="card" className={`h-full ${className}`}>
        {isLinkExternal ? (
          <a
            href={href}
            {...commonLinkProps}
            className="group bg-white rounded-2xl border border-[#DDE3E3] flex relative overflow-hidden shadow-[0_2px_12px_-2px_rgba(11,31,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.12)] hover:border-[#1F6F78]/50 h-full"
          >
            {renderTealPanel()}
          </a>
        ) : (
          <Link
            href={href}
            {...commonLinkProps}
            className="group bg-white rounded-2xl border border-[#DDE3E3] flex relative overflow-hidden shadow-[0_2px_12px_-2px_rgba(11,31,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.12)] hover:border-[#1F6F78]/50 h-full"
          >
            {renderTealPanel()}
          </Link>
        )}
      </div>
    );
  }

  // 2. Variant: Dark News/Alert Card with Landscape
  if (variant === 'dark-alert') {
    return (
      <div data-reveal="card" className={`h-full ${className}`}>
        {isLinkExternal ? (
          <a
            href={href}
            {...commonLinkProps}
            className="group bg-[#0B1F2A] rounded-2xl border border-[#1D3B4C] p-3.5 sm:p-4 flex items-center gap-3 relative overflow-hidden shadow-[0_8px_24px_-4px_rgba(11,31,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(11,31,42,0.35)] hover:border-[#B7E34A]/50 h-full text-white"
          >
            {renderDarkAlert()}
          </a>
        ) : (
          <Link
            href={href}
            {...commonLinkProps}
            className="group bg-[#0B1F2A] rounded-2xl border border-[#1D3B4C] p-3.5 sm:p-4 flex items-center gap-3 relative overflow-hidden shadow-[0_8px_24px_-4px_rgba(11,31,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(11,31,42,0.35)] hover:border-[#B7E34A]/50 h-full text-white"
          >
            {renderDarkAlert()}
          </Link>
        )}
      </div>
    );
  }

  // 3. Variant: Mint or Ice-Blue Inset Icon Box
  const isIce = variant === 'ice-icon';
  const iconBoxBg = isIce ? 'bg-[#E8F1F3]' : 'bg-[#E8F3F1]';

  const content = (
    <>
      {/* Left Inset Icon Box */}
      <div
        className={`w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-xl ${iconBoxBg} border border-[#1F6F78]/15 shrink-0 flex items-center justify-center text-[#1F6F78] shadow-sm`}
      >
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Content Panel */}
      <div className="flex-1 min-w-0 pr-8">
        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#1F6F78] block mb-0.5">
          {eyebrow}
        </span>
        <h3 className="font-heading font-bold text-[14px] sm:text-[15px] text-[#0B1F2A] leading-snug mb-1 group-hover:text-[#1F6F78] transition-colors">
          {title}
        </h3>
        <p className="text-[11px] sm:text-xs text-[#5B6B73] leading-snug line-clamp-2">
          {description}
        </p>
      </div>

      {/* Action Button Top Right */}
      <div
        className="absolute top-3.5 right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EBF2EE] text-[#1F6F78] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1F6F78] group-hover:text-white group-hover:scale-105"
        aria-hidden="true"
      >
        {isLinkExternal ? (
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : download ? (
          <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        ) : (
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        )}
      </div>
    </>
  );

  return (
    <div data-reveal="card" className={`h-full ${className}`}>
      {isLinkExternal ? (
        <a
          href={href}
          {...commonLinkProps}
          className="group bg-white rounded-2xl border border-[#DDE3E3] p-3.5 sm:p-4 flex items-center gap-3 relative overflow-hidden shadow-[0_2px_12px_-2px_rgba(11,31,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.12)] hover:border-[#1F6F78]/50 h-full"
        >
          {content}
        </a>
      ) : (
        <Link
          href={href}
          {...commonLinkProps}
          className="group bg-white rounded-2xl border border-[#DDE3E3] p-3.5 sm:p-4 flex items-center gap-3 relative overflow-hidden shadow-[0_2px_12px_-2px_rgba(11,31,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.12)] hover:border-[#1F6F78]/50 h-full"
        >
          {content}
        </Link>
      )}
    </div>
  );

  // Helper renderers for teal and dark variants
  function renderTealPanel() {
    return (
      <>
        {/* Left Panel: Deep teal with contour lines */}
        <div className="w-[68px] sm:w-[76px] bg-[#124E56] shrink-0 flex items-center justify-center relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M-10 18 C 30 8, 50 58, 110 38" stroke="#FFFFFF" strokeWidth="1.2" />
            <path d="M-10 42 C 40 28, 60 78, 110 64" stroke="#FFFFFF" strokeWidth="1.2" />
            <path d="M-10 68 C 35 58, 55 92, 110 82" stroke="#FFFFFF" strokeWidth="1.2" />
            <path d="M-10 88 C 20 84, 70 104, 110 98" stroke="#FFFFFF" strokeWidth="1.2" />
          </svg>
          <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 text-white shadow-sm">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Content Panel */}
        <div className="flex-1 p-3.5 sm:p-4 pr-11 flex flex-col justify-center min-w-0 relative">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#1F6F78] block mb-0.5">
            {eyebrow}
          </span>
          <h3 className="font-heading font-bold text-[14px] sm:text-[15px] text-[#0B1F2A] leading-snug mb-1 group-hover:text-[#1F6F78] transition-colors">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#5B6B73] leading-snug line-clamp-2">
            {description}
          </p>

          {/* Action Button Top Right */}
          <div
            className="absolute top-3.5 right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EBF2EE] text-[#1F6F78] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1F6F78] group-hover:text-white group-hover:scale-105"
            aria-hidden="true"
          >
            {isLinkExternal ? (
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            ) : download ? (
              <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            )}
          </div>
        </div>
      </>
    );
  }

  function renderDarkAlert() {
    return (
      <>
        {/* Subtle landscape background in the right half */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            sizes="(min-width: 1200px) 320px, 100vw"
            className="object-cover object-right opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2A] via-[#0B1F2A]/85 to-transparent" />
        </div>

        {/* Left Inset Icon Box: Dark square with lime icon */}
        <div className="relative z-10 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-xl bg-[#0E2836] border border-[#1D3B4C] shrink-0 flex items-center justify-center text-[#B7E34A] shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Content Panel */}
        <div className="relative z-10 flex-1 min-w-0 pr-10">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#B7E34A] block mb-0.5">
            {eyebrow}
          </span>
          <h3 className="font-heading font-bold text-[14px] sm:text-[15px] text-white leading-snug mb-1 group-hover:text-[#B7E34A] transition-colors">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#DDE3E3]/80 leading-snug line-clamp-2">
            {description}
          </p>
        </div>

        {/* Right Action Button: Centered Vibrant Lime Pill */}
        <div
          className="relative z-10 absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B7E34A] text-[#0B1F2A] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#A3CF36] group-hover:scale-105 shadow-md shadow-[#B7E34A]/25"
          aria-hidden="true"
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </>
    );
  }
};
