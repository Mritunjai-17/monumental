'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { TrendingUp, ExternalLink, Download, FileText, ChevronDown, X, ShieldCheck } from 'lucide-react';

export const TickerChip: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Ticker Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="h-9 inline-flex items-center gap-2 px-3.5 rounded-full bg-[#162F3F] border border-[#27485F] text-xs font-medium text-white/90 hover:border-[#1F6F78] hover:text-[#B7E34A] transition-colors duration-200 group select-none shrink-0"
        title="View Market Information & Exchange Quotes"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#B7E34A] animate-pulse shrink-0" />
        <span className="font-semibold tracking-wider whitespace-nowrap">
          {siteConfig.exchange}: {siteConfig.ticker}
        </span>
        <TrendingUp className="w-3.5 h-3.5 shrink-0 text-[#1F6F78] group-hover:text-[#B7E34A] transition-colors" />
        <ChevronDown
          className={`w-3 h-3 text-[#94A3B8] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#B7E34A]' : ''
          }`}
        />
      </button>

      {/* Market Telemetry Popover HUD */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Stock Quote and Market Telemetry"
          className="absolute right-0 top-full mt-2 w-[340px] sm:w-[380px] rounded-2xl bg-[#0B1F2A] border border-[#1D3B4C] text-white shadow-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1D3B4C]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7E34A] animate-pulse" />
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                Market Information
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#87969F]">TSX Venture Exchange</span>
          </div>

          {/* Exchanges Grid */}
          <div className="space-y-2 mb-4">
            <div className="p-2.5 rounded-xl bg-[#07161F] border border-[#1D3B4C] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#87969F] block">Primary Listing (Canada)</span>
                <span className="font-heading font-bold text-sm text-white">TSX-V: MNRG</span>
              </div>
              <a
                href="https://money.tmx.com/en/quote/MNRG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#162F3F] hover:bg-[#1F6F78] text-[11px] font-semibold text-[#B7E34A] hover:text-white transition-colors"
              >
                <span>TMX Quote</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#07161F] border border-[#1D3B4C]">
                <span className="text-[10px] font-mono text-[#87969F] block">US Listing</span>
                <span className="font-semibold text-white">OTCQB: MNMRF</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#07161F] border border-[#1D3B4C]">
                <span className="text-[10px] font-mono text-[#87969F] block">Germany Listing</span>
                <span className="font-semibold text-white">Frankfurt: ZA6</span>
              </div>
            </div>
          </div>

          {/* Identifier Metadata */}
          <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#07161F]/60 border border-[#1D3B4C]/60 text-[11px] text-[#87969F] mb-4">
            <div>
              <span className="block text-[10px] uppercase font-mono">CUSIP</span>
              <span className="font-mono text-white font-medium">61534D108</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-mono">ISIN</span>
              <span className="font-mono text-white font-medium">CA61534D1087</span>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="space-y-1.5 pt-3 border-t border-[#1D3B4C]">
            <Link
              href="/investors"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-[#DDE3E3] hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Full Investor Centre</span>
              <span className="text-[#1F6F78]">→</span>
            </Link>

            <a
              href="https://www.sedarplus.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-[#DDE3E3] hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>SEDAR+ Continuous Filings</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#87969F]" />
            </a>

            <a
              href="/documents/investor-presentation.pdf"
              download="Monumental-Energy-Presentation-2026.pdf"
              className="w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-[#B7E34A] hover:bg-white/5 transition-colors"
            >
              <span>Download 2026 Deck (PDF)</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Regulatory Note */}
          <p className="mt-3 text-[10px] text-[#87969F] leading-tight text-center">
            Quotes via TMX Money are delayed by ≥ 15 mins.
          </p>
        </div>
      )}
    </div>
  );
};
