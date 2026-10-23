'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  investorCapitalData,
  corporateDeck,
  lifeOfferingDoc,
  sedarFilings,
  professionalAdvisory,
} from '@/data/investors';
import { MarketPerformanceCard } from '@/components/ui/MarketPerformanceCard';
import {
  Download,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Clock,
  Building,
  CheckCircle2,
  Mail,
  Phone,
  Layers,
  ChevronRight,
  PieChart,
  Calendar,
} from 'lucide-react';

/*
 * Download links need the native `download` attribute, which <Button href>
 * does not forward, so they reuse the Button "md" styles on a plain <a>.
 */
const btnBase =
  'group inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] sm:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-[10px] border transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] active:translate-y-0';
const btnPrimary = cn(
  btnBase,
  'bg-[#B7E34A] text-[#0B1F2A] border-transparent hover:bg-[#A3CF36] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[#B7E34A]'
);
const btnNavy = cn(
  btnBase,
  'bg-[#0B1F2A] text-white border-transparent hover:bg-[#1F6F78] hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-[#0B1F2A]'
);

const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

/* Dark panel inside the navy capital-structure section. */
const darkPanel = 'rounded-[16px] bg-[#07161F]/60 border border-[#1D3B4C]';
const darkPanelHover = 'transition-colors duration-300 hover:border-[#2DD4BF]/40';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'warrants', label: 'Warrants & Options' },
  { id: 'shareholders', label: 'Holders & Float' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const METRICS = [
  { label: 'Issued & Outstanding', value: '62.4M', note: 'Common voting equity shares' },
  { label: 'Cash & Liquidity', value: '$1.5M', note: 'Unrestricted treasury reserves' },
  { label: 'Marketable Securities', value: '1.2M', note: 'Common shares held in NZEC' },
  { label: 'Fully Diluted Total', value: '91.1M', note: 'Including all options & warrants' },
];

const FLOAT_SEGMENTS = [
  {
    swatch: 'bg-[#B7E34A]',
    title: '40% Insiders & Associates',
    text: '38.2M shares held by management and founders; subject to voluntary lock-up & escrow.',
  },
  {
    swatch: 'bg-[#1F6F78]',
    title: '40% Institutional Funds',
    text: 'Strategic natural resource and critical mineral investment funds.',
  },
  {
    swatch: 'bg-[#87969F]',
    title: '20% Retail Float',
    text: 'Liquid public market tradeable float on TSX-V, OTCQB, and Frankfurt.',
  },
];

export function InvestorCentreView() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="page-intro-y relative overflow-hidden">
        {/* Topographical Elevation Contour Background (Top Left) */}
        <div
          className="absolute top-0 left-0 w-[550px] sm:w-[650px] lg:w-[750px] h-[550px] pointer-events-none opacity-[0.07] select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <svg viewBox="0 0 700 600" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
            <path d="M180 0 C 260 90, 320 170, 500 190 C 600 200, 640 280, 700 320" />
            <path d="M220 0 C 290 100, 360 180, 530 210 C 620 225, 660 320, 700 370" />
            <path d="M260 0 C 330 120, 400 200, 560 230 C 630 245, 670 360, 700 420" />
            <path d="M300 0 C 370 140, 440 220, 590 250 C 650 270, 680 400, 700 470" />
            <path d="M340 0 C 410 160, 480 240, 620 270 C 670 290, 700 440, 700 520" />
            <path d="M380 0 C 450 180, 520 260, 650 290" />
            <path d="M140 30 C 220 110, 280 190, 460 210 C 560 220, 600 290, 650 330" />
            <path d="M100 70 C 180 150, 240 230, 420 250 C 520 260, 560 330, 610 380" />
            <path d="M60 120 C 140 200, 200 280, 380 300 C 480 310, 520 380, 570 430" />
          </svg>
        </div>

        {/* Desktop Split Background Image with Soft Fade */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/corporate-office.jpg"
            alt="Monumental Energy Vancouver Corporate Boardroom"
            fill
            sizes="50vw"
            className="object-cover object-[center_35%]"
            priority
          />
          {/* Seamless gradient fade into off-white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/45 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[400px]">
            {/* Left Column (Copy & Actions) */}
            <div className="lg:col-span-6 lg:pr-6 min-w-0">
              <Eyebrow className="hero-eyebrow">SHAREHOLDER HUB</Eyebrow>

              <KineticHeading
                as="h1"
                text="Investor Centre"
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl mb-8', type.lead, tone.mutedLight)}>
                Official regulatory disclosures, audited financial reporting, verified corporate presentation materials, and capital structure transparency for Monumental Energy Corp. (TSX-V: MNRG).
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="/documents/investor-presentation.pdf"
                  download="Monumental-Energy-Presentation-2026.pdf"
                  className={btnPrimary}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download 2026 Presentation</span>
                </a>

                <Button href="/investors/presentation" variant="secondary" size="md">
                  <Layers className="w-4 h-4" aria-hidden="true" />
                  Interactive Slide Deck
                </Button>
              </div>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/corporate-office.jpg"
                  alt="Monumental Energy Vancouver Boardroom"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. LIVE MARKET PERFORMANCE & DETAILED QUOTE (QuoteMedia Chart)
          Follows the hero on the same background, so no top padding;
          the card carries its own bottom margin.
         ========================================================= */}
      <section>
        <Container>
          <MarketPerformanceCard />
        </Container>
      </section>

      {/* =========================================================
          3. FINANCIAL TERMINAL & CAPITAL STRUCTURE (Interactive Tabs)
         ========================================================= */}
      <section className="section-y relative overflow-hidden bg-[#0B1F2A] text-white border-y border-[#1D3B4C]">
        {/* Background glow */}
        <div
          className="absolute top-1/3 right-0 w-96 h-96 bg-[#1F6F78]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Header: Trading Symbols & Title */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div data-reveal="fade" className="min-w-0 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07161F] border border-[#2DD4BF]/30 text-white text-xs font-heading font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#B7E34A] animate-pulse" />
                  <span>TSX-V: MNRG</span>
                </span>

                {investorCapitalData.crossListings.map((cross) => (
                  <span
                    key={cross.exchange}
                    className="px-2.5 py-1 rounded-full bg-white/10 text-[#DDE3E3] text-xs font-heading font-medium"
                  >
                    {cross.exchange}: {cross.symbol}
                  </span>
                ))}
              </div>

              <Eyebrow dark>SHARE CAPITALIZATION</Eyebrow>
              <KineticHeading
                text="Capital Structure & Share Ownership"
                className={cn(type.h2, tone.headingDark)}
              />
            </div>

            <a
              href="https://money.tmx.com/en/quote/MNRG"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start lg:self-auto inline-flex items-center gap-2 min-h-11 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-heading font-semibold transition-colors shrink-0"
            >
              <TrendingUp className="w-4 h-4 text-[#B7E34A]" aria-hidden="true" />
              <span>TMX Money Quote</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2DD4BF]" aria-hidden="true" />
            </a>
          </div>

          {/* Tab Buttons: scroll horizontally on narrow screens */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-6 mb-8 border-b border-white/10">
            <div
              role="tablist"
              aria-label="Capital structure views"
              className="inline-flex items-center gap-1 bg-[#07161F]/70 p-1 rounded-full border border-white/15 whitespace-nowrap"
            >
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'min-h-11 px-5 rounded-full text-sm font-heading font-semibold transition-all shrink-0',
                      isActive
                        ? 'bg-[#B7E34A] text-[#0B1F2A] shadow-sm'
                        : 'text-[#DDE3E3]/75 hover:text-white'
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              TAB 1: OVERVIEW & KEY METRICS
             ========================================================= */}
          {activeTab === 'overview' && (
            <div role="tabpanel" className="space-y-6 lg:space-y-8">
              {/* 4 Metric Tiles */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {METRICS.map((metric) => (
                  <div key={metric.label} className={cn(darkPanel, darkPanelHover, 'p-4 sm:p-6 min-w-0')}>
                    <span className="text-xs text-[#DDE3E3]/75 font-heading font-semibold uppercase tracking-wider block mb-2">
                      {metric.label}
                    </span>
                    <span className="font-heading font-bold text-3xl sm:text-4xl text-white block mb-1.5 tracking-[-0.02em]">
                      {metric.value}
                    </span>
                    <span className="text-sm text-[#DDE3E3]/75 block leading-snug">
                      {metric.note}
                    </span>
                  </div>
                ))}
              </div>

              {/* Float Distribution Breakdown */}
              <div className={cn(darkPanel, 'p-5 sm:p-6')}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-[#B7E34A] shrink-0" aria-hidden="true" />
                    <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                      Share Ownership &amp; Float Concentration
                    </h3>
                  </div>
                  <span className="text-sm text-[#DDE3E3]/75">
                    Tight Capital Structure (40% Insiders • 40% Institutional • 20% Retail)
                  </span>
                </div>

                {/* 3-Segment Proportional Distribution Bar */}
                <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-white/10 mb-5 p-0.5">
                  <div
                    style={{ width: '40%' }}
                    className="h-full bg-[#B7E34A] rounded-l-full"
                    title="40% Insiders & Close Associates"
                  />
                  <div
                    style={{ width: '40%' }}
                    className="h-full bg-[#1F6F78]"
                    title="40% Institutional Funds"
                  />
                  <div
                    style={{ width: '20%' }}
                    className="h-full bg-[#87969F] rounded-r-full"
                    title="20% Tradeable Retail Float"
                  />
                </div>

                {/* Distribution Legend */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {FLOAT_SEGMENTS.map((seg) => (
                    <div key={seg.title} className="p-4 rounded-xl bg-black/30 border border-white/5 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={cn('w-2.5 h-2.5 rounded-sm shrink-0', seg.swatch)} />
                        <span className="font-heading font-bold text-white text-sm">{seg.title}</span>
                      </div>
                      <span className="text-[#DDE3E3]/75 block text-sm leading-relaxed">{seg.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 2: WARRANTS & OPTIONS SCHEDULE
             ========================================================= */}
          {activeTab === 'warrants' && (
            <div role="tabpanel" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Warrants Table */}
              <div className={cn(darkPanel, 'p-5 sm:p-6 min-w-0')}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B7E34A]" />
                    Outstanding Warrants Schedule
                  </h3>
                  <span className="text-xs font-semibold text-[#B7E34A] bg-[#B7E34A]/10 px-2.5 py-1 rounded-full">
                    Total: {investorCapitalData.totalWarrants}
                  </span>
                </div>

                <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
                  <table className="w-full min-w-[460px] text-sm text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-[#DDE3E3]/75">
                        <th scope="col" className="py-2.5 pr-4 font-medium">Tranche</th>
                        <th scope="col" className="py-2.5 px-2 font-medium text-right whitespace-nowrap">Quantity</th>
                        <th scope="col" className="py-2.5 px-2 font-medium text-right whitespace-nowrap">Exercise Price</th>
                        <th scope="col" className="py-2.5 pl-2 font-medium text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {investorCapitalData.warrants.map((w) => (
                        <tr key={w.tranche} className="hover:bg-white/5">
                          <td className="py-3 pr-4 font-semibold text-white">{w.tranche}</td>
                          <td className="py-3 px-2 text-right font-mono text-[#DDE3E3] whitespace-nowrap">{w.quantity}</td>
                          <td className="py-3 px-2 text-right font-mono text-[#B7E34A] font-semibold whitespace-nowrap">{w.strikePrice}</td>
                          <td className="py-3 pl-2 text-right text-[#DDE3E3]/75">{w.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Stock Options Table */}
              <div className={cn(darkPanel, 'p-5 sm:p-6 min-w-0')}>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1F6F78]" />
                    Stock Incentive Options
                  </h3>
                  <span className="text-xs font-semibold text-[#2DD4BF] bg-[#1F6F78]/20 px-2.5 py-1 rounded-full">
                    Total: {investorCapitalData.totalOptions}
                  </span>
                </div>

                <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
                  <table className="w-full min-w-[460px] text-sm text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-[#DDE3E3]/75">
                        <th scope="col" className="py-2.5 pr-4 font-medium">Incentive Plan</th>
                        <th scope="col" className="py-2.5 px-2 font-medium text-right whitespace-nowrap">Options</th>
                        <th scope="col" className="py-2.5 px-2 font-medium text-right whitespace-nowrap">Strike Price</th>
                        <th scope="col" className="py-2.5 pl-2 font-medium text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {investorCapitalData.options.map((opt) => (
                        <tr key={opt.tranche} className="hover:bg-white/5">
                          <td className="py-3 pr-4 font-semibold text-white">{opt.tranche}</td>
                          <td className="py-3 px-2 text-right font-mono text-[#DDE3E3] whitespace-nowrap">{opt.quantity}</td>
                          <td className="py-3 px-2 text-right font-mono text-[#B7E34A] font-semibold whitespace-nowrap">{opt.strikePrice}</td>
                          <td className="py-3 pl-2 text-right text-[#DDE3E3]/75">{opt.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 3: SIGNIFICANT SHAREHOLDERS & ESCROW
             ========================================================= */}
          {activeTab === 'shareholders' && (
            <div role="tabpanel" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                {investorCapitalData.significantShareholders.map((holder) => (
                  <div key={holder.name} className={cn(darkPanel, darkPanelHover, 'p-5 sm:p-6 min-w-0')}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
                      <span className="text-xs uppercase tracking-wider text-[#B7E34A] font-heading font-semibold">
                        {holder.stakeType}
                      </span>
                      <span className="font-heading font-bold text-xl text-white">
                        {holder.shares} Shares
                      </span>
                    </div>
                    <h4 className={cn(type.h4, tone.headingDark, 'mb-2')}>
                      {holder.name}
                    </h4>
                    <p className="text-sm text-[#DDE3E3]/75 leading-relaxed">
                      {holder.notes}
                    </p>
                  </div>
                ))}
              </div>

              {/* Escrow Disclosure Callout */}
              <div className="p-5 sm:p-6 rounded-[16px] bg-[#162F3F]/60 border border-[#1F6F78]/50 text-sm text-[#DDE3E3] leading-relaxed">
                <div className="flex items-center gap-2 text-white font-semibold mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B7E34A] shrink-0" aria-hidden="true" />
                  <span>Statutory Escrow &amp; Voluntary Lock-Up Notice</span>
                </div>
                <p>{investorCapitalData.escrowNotice}</p>
              </div>
            </div>
          )}

          {/* Footer / Attribution Notice */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#DDE3E3]/75">
            <div className="flex items-start sm:items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
              <span>Data Source: TMX Group (TSX Venture Exchange) • Delayed 15 minutes</span>
            </div>
            <div className="break-words">
              <span>Securities Identifiers: CUSIP {investorCapitalData.identifiers.cusip} • ISIN {investorCapitalData.identifiers.isin}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. CORE SHAREHOLDER DOCUMENTS (Dual Featured Cards)
         ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Official Corporate Presentation */}
            <div data-reveal="card" className="lg:col-span-7 min-w-0">
              <div className={cn('h-full bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-8 shadow-sm flex flex-col justify-between', cardHover)}>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] text-xs font-heading font-semibold">
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      <span>Verified Corporate Deck • Q1 2026</span>
                    </span>
                    <span className="text-xs text-[#5B6B73] font-heading font-medium">
                      28 Slides (PDF)
                    </span>
                  </div>

                  <h3 className={cn(type.h3, tone.headingLight, 'mb-3')}>
                    {corporateDeck.title}
                  </h3>

                  <p className={cn(type.body, tone.mutedLight, 'mb-6')}>
                    {corporateDeck.summary}
                  </p>

                  {/* Document Metadata Strip */}
                  <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] text-sm mb-6">
                    <div className="min-w-0">
                      <dt className="text-[#5B6B73] text-xs">Format</dt>
                      <dd className="font-semibold text-[#0B1F2A] break-words">{corporateDeck.format}</dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[#5B6B73] text-xs">Release</dt>
                      <dd className="font-semibold text-[#0B1F2A] break-words">{corporateDeck.releaseDate}</dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[#5B6B73] text-xs">File Size</dt>
                      <dd className="font-semibold text-[#0B1F2A] break-words">{corporateDeck.fileSize}</dd>
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[#5B6B73] text-xs">Disclosure</dt>
                      <dd className="font-semibold text-[#1F6F78] break-words">TSX-V Compliant</dd>
                    </div>
                  </dl>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={corporateDeck.downloadUrl}
                    download="Monumental-Energy-Presentation-2026.pdf"
                    className={btnPrimary}
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>Download Deck (PDF)</span>
                  </a>

                  <Button href="/investors/presentation" variant="secondary" size="md">
                    View Slides Online
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2: LIFE Offering Document */}
            <div data-reveal="card" className="lg:col-span-5 min-w-0">
              <div className={cn('h-full bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-8 shadow-sm flex flex-col justify-between', cardHover)}>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B7E34A]/20 text-[#0B1F2A] text-xs font-heading font-bold uppercase tracking-wider">
                      Statutory Offering Document
                    </span>
                    <span className="text-xs text-[#5B6B73] font-heading font-medium">
                      NI 45-106
                    </span>
                  </div>

                  <h3 className={cn(type.h3, tone.headingLight, 'mb-2')}>
                    Listed Issuer Financing Exemption (LIFE)
                  </h3>

                  <span className="text-xs font-semibold text-[#1F6F78] block mb-4">
                    {lifeOfferingDoc.amendedDate}
                  </span>

                  <ul className="space-y-2.5 text-sm text-[#5B6B73] mb-6">
                    {lifeOfferingDoc.keyTerms.map((term, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] mt-2 shrink-0" />
                        <span className="leading-relaxed">{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={lifeOfferingDoc.downloadUrl}
                    download="Monumental-Energy-LIFE-Offering.pdf"
                    className={cn(btnNavy, 'w-full')}
                  >
                    <Download className="w-4 h-4 text-[#B7E34A]" aria-hidden="true" />
                    <span>Download LIFE Document</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. DUAL SECTION: SEDAR+ FILINGS & ADVISORY DIRECTORY
          Same background as the documents section above: no top padding.
         ========================================================= */}
      <section className="section-y pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Regulatory Filings (SEDAR+ Archive) */}
            <div className="lg:col-span-8 min-w-0">
              <div
                data-reveal="fade"
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-8 sm:mb-10"
              >
                <KineticHeading
                  text="Continuous Disclosures & SEDAR+ Archive"
                  className={cn(type.h2Compact, tone.headingLight, 'min-w-0')}
                />

                <a
                  href="https://www.sedarplus.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] inline-flex items-center gap-1.5 min-h-11 sm:min-h-0 sm:pb-1.5 transition-colors group shrink-0"
                >
                  <span>SEDAR+ Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>

              {/* Filings List */}
              <div data-reveal="card" className="mb-6">
                <div className="bg-white rounded-[16px] border border-[#DDE3E3] shadow-sm divide-y divide-[#DDE3E3] overflow-hidden">
                  {sedarFilings.map((filing) => (
                    <div
                      key={filing.id}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:bg-[#F9FAF7] transition-colors"
                    >
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-xs font-heading font-semibold text-[#1F6F78] uppercase tracking-wider">
                            {filing.date}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[#87969F]" />
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F5F6F1] text-[#5B6B73] font-medium border border-[#DDE3E3]">
                            {filing.documentType}
                          </span>
                        </div>
                        <h3 className={cn(type.h4, tone.headingLight)}>
                          {filing.title}
                        </h3>
                      </div>

                      <a
                        href={filing.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-11 text-sm font-heading font-semibold text-[#0B1F2A] hover:text-[#1F6F78] shrink-0 transition-colors"
                      >
                        <span>View Filing</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#1F6F78]" aria-hidden="true" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Governance Links (AGM & Computershare) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                <div data-reveal="card" className="min-w-0">
                  <Link
                    href="/investors/agm"
                    className={cn('h-full p-5 sm:p-6 rounded-[16px] bg-white border border-[#DDE3E3] shadow-sm flex items-center justify-between gap-3 group', cardHover)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0">
                        <Calendar className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs text-[#5B6B73] block">Shareholder Voting</span>
                        <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                          2026 Annual General Meeting
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                  </Link>
                </div>

                <div data-reveal="card" className="min-w-0">
                  <a
                    href="https://www.investorcentre.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('h-full p-5 sm:p-6 rounded-[16px] bg-white border border-[#DDE3E3] shadow-sm flex items-center justify-between gap-3 group', cardHover)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-[#B7E34A]/20 flex items-center justify-center text-[#0B1F2A] shrink-0">
                        <Building className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs text-[#5B6B73] block">Transfer Registry</span>
                        <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                          Computershare Investor Portal
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Corporate Directory & Professional Advisory (Dark Card) */}
            <div data-reveal="card" className="lg:col-span-4 min-w-0">
              <div className="relative rounded-[16px] bg-[#0B1F2A] text-white p-6 sm:p-7 border border-[#1D3B4C] shadow-xl overflow-hidden">
                <h3 className={cn(type.h3, tone.headingDark, 'mb-5')}>
                  Corporate Directory
                </h3>

                <div className="divide-y divide-white/10 space-y-4">
                  {professionalAdvisory.map((adv) => (
                    <div key={adv.role} className="pt-4 first:pt-0 min-w-0">
                      <span className="text-[11px] text-[#B7E34A] uppercase tracking-wider font-heading font-semibold block mb-1">
                        {adv.role}
                      </span>
                      <span className="text-sm font-semibold text-white block mb-0.5">
                        {adv.name}
                      </span>
                      <span className="text-sm text-[#DDE3E3]/75 block leading-relaxed mb-1.5">
                        {adv.address}
                      </span>
                      {adv.phone && (
                        <div className="flex items-center gap-2 text-sm text-[#DDE3E3] mt-1">
                          <Phone className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" aria-hidden="true" />
                          <span>{adv.phone}</span>
                        </div>
                      )}
                      {adv.email && (
                        <div className="flex items-center gap-2 text-sm text-[#DDE3E3] mt-1 min-w-0">
                          <Mail className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" aria-hidden="true" />
                          <span className="break-all">{adv.email}</span>
                        </div>
                      )}
                      {adv.website && (
                        <a
                          href={adv.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 min-h-11 text-sm text-[#2DD4BF] hover:text-[#B7E34A] transition-colors"
                        >
                          <span>Portal Link</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Direct IR Line Button */}
                <div className="pt-6 mt-4 border-t border-white/10">
                  <Button href="/contact" variant="secondary-dark" size="md" className="w-full">
                    Contact Investor Relations
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM NEWSLETTER / IR ALERTS BAND (final dark CTA band)
         ========================================================= */}
      <section className="section-y-compact relative overflow-hidden bg-[#0B1F2A] text-white border-t border-[#1D3B4C]">
        {/* Panoramic Sunset Mountain Landscape Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/taranaki-sunset-banner.jpg"
            alt="Sunset over Mount Taranaki"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-65 brightness-95 contrast-110"
          />
          {/* Multi-stop Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#0B1F2A]/75 to-[#07161F]/80" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div data-reveal="fade" className="min-w-0 max-w-xl">
              <Eyebrow dark>MARKET ALERTS</Eyebrow>
              <KineticHeading
                text="Stay Informed on TSX-V Disclosures"
                className={cn(type.h2Compact, tone.headingDark, 'mb-3')}
              />
              <p className={cn(type.body, tone.mutedDark, 'max-w-lg')}>
                Subscribe to receive regulatory press releases, quarterly MD&amp;As, and corporate presentation updates directly.
              </p>
            </div>

            {/* Email Form */}
            <div data-reveal className="shrink-0 w-full md:w-auto md:min-w-[380px]">
              {subscribed ? (
                <div className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full bg-[#B7E34A]/20 border border-[#B7E34A] text-[#B7E34A] text-sm font-heading font-bold">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-[14px] bg-[#0B1F2A]/85 backdrop-blur-md border border-white/20 shadow-xl w-full md:max-w-md"
                >
                  <label className="flex items-center flex-grow min-w-0 px-3 min-h-11">
                    <Mail className="w-4 h-4 text-[#DDE3E3]/60 mr-2.5 shrink-0" aria-hidden="true" />
                    <span className="sr-only">Email address</span>
                    <input
                      type="email"
                      required
                      placeholder="Enter your corporate email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-[#DDE3E3]/50 focus:outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="min-h-11 px-6 rounded-[10px] bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-body font-semibold text-[15px] transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F2A]"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
