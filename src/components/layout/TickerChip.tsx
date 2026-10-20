import React from 'react';
import { siteConfig } from '@/data/site';
import { TrendingUp } from 'lucide-react';

export const TickerChip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <a
      href="https://money.tmx.com/en/quote/MNRG"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162F3F] border border-[#27485F] text-xs font-medium text-white/90 hover:border-[#1F6F78] hover:text-[#B7E34A] transition-colors duration-200 group ${className}`}
      title="View TSX Venture: MNRG Quote"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#B7E34A] animate-pulse" />
      <span className="font-semibold tracking-wider">{siteConfig.exchange}: {siteConfig.ticker}</span>
      <TrendingUp className="w-3 h-3 text-[#1F6F78] group-hover:text-[#B7E34A] transition-colors" />
    </a>
  );
};
