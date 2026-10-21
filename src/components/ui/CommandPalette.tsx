'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, FileText, MapPin, ExternalLink, ArrowRight, X, Newspaper, Shield, Download } from 'lucide-react';

interface SearchItem {
  id: string;
  category: 'Documents' | 'Assets' | 'Pages' | 'News';
  title: string;
  subtitle: string;
  href: string;
  isExternal?: boolean;
  download?: boolean;
  badge?: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Documents
  {
    id: 'deck-pdf',
    category: 'Documents',
    title: '2026 Corporate Investor Presentation',
    subtitle: 'Official corporate deck, asset development roadmap & valuation drivers',
    href: '/documents/investor-presentation.pdf',
    download: true,
    badge: 'PDF',
  },
  {
    id: 'deck-view',
    category: 'Documents',
    title: 'Interactive Presentation Viewer',
    subtitle: 'Browse presentation slides and strategic thesis online',
    href: '/investors/presentation',
    badge: 'Deck',
  },
  {
    id: 'agm-notice',
    category: 'Documents',
    title: 'Notice of AGM & Management Information Circular',
    subtitle: 'Statutory shareholder meeting circular filed on SEDAR+',
    href: 'https://www.sedarplus.ca',
    isExternal: true,
    badge: 'SEDAR+',
  },
  {
    id: 'agm-proxy',
    category: 'Documents',
    title: 'Form of Proxy (Registered Shareholders)',
    subtitle: 'Computershare shareholder voting portal',
    href: 'https://www.investorcentre.com',
    isExternal: true,
    badge: 'Computershare',
  },
  {
    id: 'agm-vif',
    category: 'Documents',
    title: 'Voting Instruction Form (VIF for Beneficial Holders)',
    subtitle: 'ProxyVote portal for beneficial shareholders holding via brokers',
    href: 'https://www.proxyvote.com',
    isExternal: true,
    badge: 'ProxyVote',
  },
  {
    id: 'sedar-depository',
    category: 'Documents',
    title: 'SEDAR+ Regulatory Depository Archive',
    subtitle: 'Statutory continuous disclosure filings under Canadian CSA rules',
    href: 'https://www.sedarplus.ca',
    isExternal: true,
    badge: 'External',
  },

  // Assets
  {
    id: 'nz-project',
    category: 'Assets',
    title: 'New Zealand Oil & Gas Investment',
    subtitle: 'Taranaki Basin onshore workover optimization & Joint Venture',
    href: '/projects/new-zealand',
    badge: 'Oil & Gas',
  },
  {
    id: 'chile-project',
    category: 'Assets',
    title: 'Salar de Turi Lithium Royalty',
    subtitle: '8,500 hectares in Chile with unencumbered 2% NSR royalty',
    href: '/projects/salar-de-turi',
    badge: 'Lithium',
  },
  {
    id: 'projects-all',
    category: 'Assets',
    title: 'Asset Portfolio Overview',
    subtitle: 'Dual-pillar corporate model balancing cash flow with transition metals',
    href: '/projects',
    badge: 'Portfolio',
  },

  // Pages
  {
    id: 'page-investors',
    category: 'Pages',
    title: 'Investor Centre Hub',
    subtitle: 'Shareholder central, capital structure, market info & filings',
    href: '/investors',
  },
  {
    id: 'page-agm',
    category: 'Pages',
    title: 'Annual General Meeting (AGM) Hub',
    subtitle: 'Shareholder voting guidelines, meeting materials & cutoff dates',
    href: '/investors/agm',
  },
  {
    id: 'page-about',
    category: 'Pages',
    title: 'About Monumental Energy',
    subtitle: 'Corporate leadership, board of directors, and strategic principles',
    href: '/about',
  },
  {
    id: 'page-esg',
    category: 'Pages',
    title: 'ESG & Responsible Stewardship',
    subtitle: 'Environmental baselines, water care, and community engagement',
    href: '/esg',
  },
  {
    id: 'page-contact',
    category: 'Pages',
    title: 'Investor Relations Contact',
    subtitle: 'Management briefing requests and corporate communications',
    href: '/contact',
  },

  // News
  {
    id: 'news-hub',
    category: 'News',
    title: 'News & Market Releases Feed',
    subtitle: 'Verified corporate announcements and operational updates',
    href: '/news',
    badge: 'Press',
  },
];

export const CommandPalette: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter items
  const filtered = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Handle arrow key navigation and Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((idx) => (idx + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((idx) => (idx - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[selectedIndex];
      if (item) {
        handleSelect(item);
      }
    }
  };

  const handleSelect = (item: SearchItem) => {
    onClose();
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (item.download) {
      const a = document.createElement('a');
      a.href = item.href;
      a.download = 'Monumental-Energy-Presentation-2026.pdf';
      a.click();
    } else {
      router.push(item.href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#0B1F2A] border border-[#1D3B4C] text-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#1D3B4C] bg-[#07161F]">
          <Search className="w-5 h-5 text-[#B7E34A] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search documents, filings, assets, news..."
            className="w-full bg-transparent text-sm text-white placeholder-[#87969F] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#87969F] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-[#87969F] bg-white/5 border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#87969F] text-xs">
              No matching filings or resources found for &quot;{query}&quot;.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#124E56]/40 text-white' : 'hover:bg-white/5 text-[#DDE3E3]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#B7E34A] text-[#0B1F2A]'
                          : 'bg-[#122B38] text-[#1F6F78] border border-[#1D3B4C]'
                      }`}
                    >
                      {item.category === 'Documents' ? (
                        <FileText className="w-4 h-4" />
                      ) : item.category === 'Assets' ? (
                        <MapPin className="w-4 h-4" />
                      ) : item.category === 'News' ? (
                        <Newspaper className="w-4 h-4" />
                      ) : (
                        <Shield className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-semibold text-xs sm:text-sm text-white truncate">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#B7E34A] border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#87969F] truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-white/50">
                    {item.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : item.download ? (
                      <Download className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[#07161F] border-t border-[#1D3B4C] flex items-center justify-between text-[11px] text-[#87969F]">
          <span>Use ↑ ↓ to navigate</span>
          <span>Press Enter to select</span>
        </div>
      </div>
    </div>
  );
};
