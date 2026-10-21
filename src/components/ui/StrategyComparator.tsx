'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Droplets, Layers, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  nzValue: string;
  chileValue: string;
  badgeNz?: string;
  badgeChile?: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'Core Corporate Role',
    nzValue: 'Immediate production recompletion & conventional cash-flow generation.',
    chileValue: 'Capital-light exposure to macro critical battery mineral transition.',
    badgeNz: 'Cash Flow',
    badgeChile: 'Royalty Upside',
  },
  {
    dimension: 'Capital Requirement (CAPEX)',
    nzValue: 'Low-cost workovers utilizing existing wellbores & processing plants.',
    chileValue: 'Zero direct exploration cash call liabilities or operational spend.',
    badgeNz: 'Low CAPEX',
    badgeChile: 'Zero Direct Spend',
  },
  {
    dimension: 'Jurisdiction & Governance',
    nzValue: 'Taranaki Basin, New Zealand (Established OECD petroleum regime).',
    chileValue: 'Antofagasta Region, Chile (Premier South American mining jurisdiction).',
    badgeNz: 'OECD Tier-1',
    badgeChile: 'Lithium Triangle',
  },
  {
    dimension: 'Regional Infrastructure',
    nzValue: 'Direct pipeline tie-ins, refinery connections & deepwater port access.',
    chileValue: 'Close to international highways, SEN power grid & northern Pacific ports.',
    badgeNz: 'Turnkey Tie-In',
    badgeChile: 'Highway & Power',
  },
  {
    dimension: 'Ownership Structure',
    nzValue: 'Strategic equity holding in NZEC & joint-venture participation.',
    chileValue: '2.0% Net Smelter Return (NSR) royalty across 8,500 hectares.',
    badgeNz: 'Equity & JV',
    badgeChile: '2% NSR Royalty',
  },
];

export const StrategyComparator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'nz' | 'chile'>('both');

  return (
    <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-7 sm:p-10 shadow-sm">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DDE3E3]">
        <div>
          <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-1.5">
            Strategic Comparison
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1F2A]">
            Dual-Pillar Exploration Matrix
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-1 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'both' ? 'bg-[#0B1F2A] text-white shadow-sm' : 'text-[#5B6B73] hover:text-[#0B1F2A]'
            }`}
          >
            Side-by-Side
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nz')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'nz' ? 'bg-[#124E56] text-white shadow-sm' : 'text-[#5B6B73] hover:text-[#0B1F2A]'
            }`}
          >
            New Zealand
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('chile')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'chile' ? 'bg-[#1F6F78] text-white shadow-sm' : 'text-[#5B6B73] hover:text-[#0B1F2A]'
            }`}
          >
            Chile Royalty
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="space-y-4">
        {COMPARISON_DATA.map((row) => (
          <div
            key={row.dimension}
            className="p-4 sm:p-5 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            {/* Dimension Label (4 Cols) */}
            <div className="md:col-span-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#1F6F78] block mb-1">
                Criteria
              </span>
              <span className="text-sm sm:text-base font-bold font-heading text-[#0B1F2A]">
                {row.dimension}
              </span>
            </div>

            {/* Pillar 1 NZ (4 Cols) */}
            {(activeTab === 'both' || activeTab === 'nz') && (
              <div
                className={`${
                  activeTab === 'nz' ? 'md:col-span-8' : 'md:col-span-4'
                } p-3.5 rounded-lg bg-white border border-[#DDE3E3]`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#124E56]">
                    New Zealand
                  </span>
                  {row.badgeNz && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#124E56]/10 text-[#124E56]">
                      {row.badgeNz}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#0B1F2A] leading-relaxed">
                  {row.nzValue}
                </p>
              </div>
            )}

            {/* Pillar 2 Chile (4 Cols) */}
            {(activeTab === 'both' || activeTab === 'chile') && (
              <div
                className={`${
                  activeTab === 'chile' ? 'md:col-span-8' : 'md:col-span-4'
                } p-3.5 rounded-lg bg-white border border-[#DDE3E3]`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#1F6F78]">
                    Salar de Turi
                  </span>
                  {row.badgeChile && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#B7E34A]/25 text-[#0B1F2A]">
                      {row.badgeChile}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#0B1F2A] leading-relaxed">
                  {row.chileValue}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-8 pt-6 border-t border-[#DDE3E3] flex flex-wrap items-center justify-between gap-4 text-xs">
        <span className="text-[#5B6B73]">
          Dual-pillar model designed to provide balance between steady hydrocarbon income and battery metal upside.
        </span>

        <div className="flex items-center gap-4 font-semibold">
          <Link href="/projects/new-zealand" className="text-[#1F6F78] hover:text-[#0B1F2A] inline-flex items-center gap-1">
            <span>NZ Operations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/projects/salar-de-turi" className="text-[#1F6F78] hover:text-[#0B1F2A] inline-flex items-center gap-1">
            <span>Chile Royalty</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
