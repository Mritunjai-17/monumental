'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  Download,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  chapterNumber: string;
  shortTitle: string;
  category: string;
  headline: string;
  summary: string;
  image: string;
  imageCaption: string;
  assetLocation?: string;
  kpis: { label: string; value: string }[];
  takeaways: string[];
  regulatoryRef: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    chapterNumber: '01',
    shortTitle: 'Executive Briefing',
    category: 'Corporate Overview',
    headline: 'Monumental Energy: Better Energy For Tomorrow and Today',
    summary:
      'A disciplined Canadian natural resource issuer listed on the TSX Venture Exchange (TSX-V: MNRG), balancing near-term conventional energy cash flow with long-duration critical mineral royalty upside in South America.',
    image: '/images/about-hero.jpg',
    imageCaption: 'Monumental Energy Corporate & Field Operations',
    assetLocation: 'Corporate HQ: Vancouver, BC',
    kpis: [
      { label: 'Primary Ticker', value: 'TSX-V: MNRG' },
      { label: 'Secondary Quotations', value: 'OTCQB: MNMRF | Frankfurt: ZA6' },
      { label: 'Operating Model', value: 'Dual-Pillar Cash Flow + Royalty' },
      { label: 'Transfer Agent', value: 'Computershare Trust Co.' },
    ],
    takeaways: [
      'Strategic corporate pivot pairing predictable hydrocarbon net revenue with zero-capex lithium upside.',
      'Experienced Canadian resource management team with deep capital markets and technical execution track record.',
      'Tight capital structure with high insider alignment and institutional shareholder support.',
    ],
    regulatoryRef: 'Corporate Information Circular & Continuous Disclosure Filings on SEDAR+',
  },
  {
    id: 2,
    chapterNumber: '02',
    shortTitle: 'Capital Model',
    category: 'Strategy & Capital Allocation',
    headline: 'Near-Term Cash Flow Coupled With Zero-CAPEX Royalty Exposure',
    summary:
      'Our financial model allocates capital strictly toward low-risk, high-deliverability uphole recompletions while holding non-dilutive royalty rights that require zero ongoing development expenditure.',
    image: '/images/corporate-office.jpg',
    imageCaption: 'Executive Boardroom & Joint-Venture Governance',
    assetLocation: 'Governance: British Columbia, Canada',
    kpis: [
      { label: 'Pillar 1 Strategy', value: 'NZ Recompletions (Near-term cash flow)' },
      { label: 'Pillar 2 Strategy', value: 'Chile Lithium 2.0% NSR Royalty' },
      { label: 'Ongoing Cash Calls', value: '$0 (Royalty structure eliminates CAPEX)' },
      { label: 'Statutory Standard', value: 'NI 51-101 / NI 43-101 Guidelines' },
    ],
    takeaways: [
      'Eliminates the high exploration burn rate typical of early-stage junior resource exploration companies.',
      'New Zealand cash flows are slated to self-fund corporate overhead and balance sheet liquidity.',
      'Uncapped upside on battery-grade lithium price appreciation through unencumbered royalty stream.',
    ],
    regulatoryRef: 'TSX Venture Exchange Corporate Policy 4.1 Compliance',
  },
  {
    id: 3,
    chapterNumber: '03',
    shortTitle: 'NZ Oil & Gas',
    category: 'Pillar 1: Production',
    headline: 'High-Deliverability Recompletions in the Proven Taranaki Basin',
    summary:
      'Partnership and strategic equity stake in New Zealand Energy Corp. (NZEC), targeting rapid uphole recompletions across shut-in or bypassed petroleum intervals connected to existing gathering pipelines.',
    image: '/images/project-new-zealand.jpg',
    imageCaption: 'Waihapa Production Station & Pipeline Interconnect, Taranaki',
    assetLocation: 'Taranaki Basin, North Island, New Zealand',
    kpis: [
      { label: 'Primary Target', value: 'Copper Moki-1 & Copper Moki-2' },
      { label: 'Infrastructure Access', value: 'Fully Connected to Waihapa Station' },
      { label: 'Operational Role', value: 'Strategic Joint-Venture & Equity Partner' },
      { label: 'Environmental Status', value: 'Comprehensive Baseline Water Stewardship' },
    ],
    takeaways: [
      'Established petroleum basin with multiple decades of commercial export history and regulatory stability.',
      'Low re-entry cost per barrel relative to greenfield drilling, dramatically shortening payback periods.',
      'Direct pipeline connection to regional refining and domestic gas distribution networks.',
    ],
    regulatoryRef: 'NI 51-101 Standards of Disclosure for Oil and Gas Activities',
  },
  {
    id: 4,
    chapterNumber: '04',
    shortTitle: 'Chile Lithium',
    category: 'Pillar 2: Critical Minerals',
    headline: '8,500 Hectares of Prime Claims in South American Lithium Triangle',
    summary:
      'Monumental holds an unencumbered 2% Net Smelter Return (NSR) royalty covering 8,500 hectares of exploration claims in the Antofagasta Region, positioned directly in the heart of global brine production.',
    image: '/images/project-salar-de-turi.jpg',
    imageCaption: 'Salar de Turi Concession Claims, Antofagasta Region, Chile',
    assetLocation: 'Antofagasta Region, Chile (Lithium Triangle)',
    kpis: [
      { label: 'Royalty Percentage', value: '2.0% Net Smelter Return (NSR)' },
      { label: 'Concession Area', value: '8,500 Hectares' },
      { label: 'Target Commodity', value: 'Lithium Brine & Potassium By-products' },
      { label: 'Logistics Access', value: 'Highways & High-Voltage Grid Proximity' },
    ],
    takeaways: [
      'Located within the world’s lowest-cost lithium production quadrant (Atacama-Turi structural corridor).',
      'No operational liabilities, capital contribution requirements, or reclamation obligations for Monumental.',
      'Direct leverage to long-term global automotive electrification and grid battery energy storage deployment.',
    ],
    regulatoryRef: 'NI 43-101 Standards of Disclosure for Mineral Projects',
  },
  {
    id: 5,
    chapterNumber: '05',
    shortTitle: 'Catalysts',
    category: 'Value Catalysts & Milestones',
    headline: 'Clear Operational Milestones & Near-Term Value Inflection Points',
    summary:
      'Structured execution pathway with verified operational triggers expected across both business pillars, backed by robust regulatory compliance and Canadian reporting transparency.',
    image: '/images/news-taranaki-workover.jpg',
    imageCaption: 'Taranaki Field Workover Rig Rigged Up on Location',
    assetLocation: 'Taranaki Operations & Corporate Disclosures',
    kpis: [
      { label: 'Recompletion Permits', value: 'Regulatory Lodgements & Approvals' },
      { label: 'Field Mobilization', value: 'Workover Rig Scheduling & Perforating' },
      { label: 'Production Testing', value: 'Initial Flow Rates & Net Revenue Run-Rate' },
      { label: 'Statutory Verification', value: 'Official SEDAR+ Filings' },
    ],
    takeaways: [
      'Near-term field updates on New Zealand recompletion operations and production testing results.',
      'Potential upside from exploration advances conducted by operators across the Chilean lithium royalty claims.',
      'Continuous quarterly financial reporting and ongoing corporate governance updates for public markets.',
    ],
    regulatoryRef: 'TSX Venture Exchange Timely Disclosure Guidelines',
  },
];

export const PresentationViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((idx) => (idx > 0 ? idx - 1 : SLIDES.length - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((idx) => (idx < SLIDES.length - 1 ? idx + 1 : 0));
  };

  return (
    <div className={isFullscreen ? 'fixed inset-4 sm:inset-8 z-50 overflow-y-auto bg-[#F5F6F1] p-4 sm:p-8 rounded-2xl shadow-2xl' : 'relative'}>
      {/* Chapter Tabs Navigation - Exact Website Design Language */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white border border-[#DDE3E3] shadow-xs">
          {SLIDES.map((s, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                className={cn(
                  'flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all duration-200',
                  isActive
                    ? 'bg-[#0B1F2A] text-white shadow-sm'
                    : 'text-[#5B6B73] hover:text-[#0B1F2A] hover:bg-[#F5F6F1]'
                )}
              >
                <span className={cn('text-xs font-bold', isActive ? 'text-[#B7E34A]' : 'text-[#1F6F78]')}>
                  {s.chapterNumber}
                </span>
                <span>{s.shortTitle}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button
            type="button"
            onClick={() => setIsFullscreen((f) => !f)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#DDE3E3] text-[#5B6B73] hover:text-[#0B1F2A] hover:border-[#1F6F78] font-heading font-medium text-xs transition-colors shadow-xs"
            title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="bg-white rounded-[20px] border border-[#DDE3E3] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left 6 Cols: Operational Asset Visual */}
        <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] bg-[#0B1F2A] overflow-hidden flex flex-col justify-end">
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-center transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/90 via-[#0B1F2A]/30 to-transparent pointer-events-none" />

          {/* Context Badge on Visual */}
          <div className="relative z-10 p-6 sm:p-8 text-white space-y-1.5">
            {slide.assetLocation && (
              <div className="inline-flex items-center gap-1.5 text-xs text-[#B7E34A] font-heading font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{slide.assetLocation}</span>
              </div>
            )}
            <p className="text-xs sm:text-sm text-[#DDE3E3] font-body font-normal max-w-md">
              {slide.imageCaption}
            </p>
          </div>
        </div>

        {/* Right 6 Cols: Editorial Briefing & Data */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-[#DDE3E3]">
          <div>
            {/* Standard Site Eyebrow */}
            <span className="eyebrow block mb-2 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm text-[#1F6F78]">
              {slide.category}
            </span>

            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.2] mb-3">
              {slide.headline}
            </h3>

            <p className="text-xs sm:text-sm leading-[1.6] text-[#5B6B73] font-body mb-6">
              {slide.summary}
            </p>

            {/* Key Metric Snapshot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] mb-6">
              {slide.kpis.map((kpi, idx) => (
                <div key={idx}>
                  <span className="text-[10px] sm:text-[11px] text-[#87969F] font-heading font-semibold uppercase tracking-wider block mb-0.5">
                    {kpi.label}
                  </span>
                  <span className="text-xs sm:text-sm font-heading font-bold text-[#0B1F2A]">
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Strategic Takeaways */}
            <div className="space-y-2.5 mb-6">
              <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#87969F] block">
                Key Strategic Elements
              </span>
              {slide.takeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5B6B73] font-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation & Controls */}
          <div className="pt-5 border-t border-[#DDE3E3] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-[#DDE3E3] bg-[#F5F6F1] text-[#0B1F2A] hover:bg-[#0B1F2A] hover:text-white hover:border-[#0B1F2A] flex items-center justify-center transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <span className="text-xs sm:text-sm font-heading font-semibold text-[#0B1F2A]">
                Slide {currentSlideIndex + 1} of {SLIDES.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-[#DDE3E3] bg-[#F5F6F1] text-[#0B1F2A] hover:bg-[#0B1F2A] hover:text-white hover:border-[#0B1F2A] flex items-center justify-center transition-all duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#87969F] font-body">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F6F78]" />
              <span className="hidden sm:inline">Disclosed under</span>
              <a
                href="https://www.sedarplus.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1F6F78] hover:underline font-heading font-semibold inline-flex items-center gap-1"
              >
                <span>SEDAR+ Standards</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
