'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
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
  FileText,
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

export function InvestorCentreView() {
  const [activeTab, setActiveTab] = useState<'overview' | 'warrants' | 'shareholders'>('overview');
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
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-10 lg:pb-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[340px] lg:min-h-[400px]">
            {/* Left Column (Copy & Actions) */}
            <div className="lg:col-span-6 pr-0 lg:pr-6">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                SHAREHOLDER HUB
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                Investor Centre
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8">
                Official regulatory disclosures, audited financial reporting, verified corporate presentation materials, and capital structure transparency for Monumental Energy Corp. (TSX-V: MNRG).
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="/documents/investor-presentation.pdf"
                  download="Monumental-Energy-Presentation-2026.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4 text-[#0B1F2A]" />
                  <span>Download 2026 Presentation</span>
                </a>

                <Link
                  href="/investors/presentation"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#DDE3E3] hover:border-[#0B1F2A] bg-white text-[#0B1F2A] font-heading font-semibold text-xs tracking-wide transition-all shadow-sm"
                >
                  <Layers className="w-4 h-4 text-[#1F6F78]" />
                  <span>Interactive Slide Deck</span>
                </Link>
              </div>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1 mt-4">
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
         ========================================================= */}
      <section className="pt-2 pb-6 sm:pb-8">
        <Container>
          <MarketPerformanceCard />
        </Container>
      </section>

      {/* =========================================================
          3. FINANCIAL TERMINAL & CAPITAL STRUCTURE (Interactive Tabs)
         ========================================================= */}
      <section className="py-6 sm:py-10">
        <Container>
          <div className="relative rounded-[22px] bg-[#07161F] text-white border border-[#1D3B4C] shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
            {/* Header: Trading Symbols & Institutional Title */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1F2A] border border-[#2DD4BF]/30 text-white text-xs font-heading font-bold">
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

                <div>
                  <span className="text-[#B7E34A] text-xs font-heading font-semibold uppercase tracking-[0.16em] block mb-1">
                    SHARE CAPITALIZATION
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    Capital Structure &amp; Share Ownership
                  </h2>
                </div>
              </div>

              {/* TMX External Link & Tab Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="https://money.tmx.com/en/quote/MNRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-semibold transition-colors shrink-0"
                >
                  <TrendingUp className="w-4 h-4 text-[#B7E34A]" />
                  <span>TMX Money Quote</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2DD4BF]" />
                </a>

                {/* Tab Buttons */}
                <div className="flex items-center bg-[#0B1F2A] p-1 rounded-full border border-white/15">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                      activeTab === 'overview'
                        ? 'bg-[#B7E34A] text-[#0B1F2A] shadow-sm'
                        : 'text-[#87969F] hover:text-white'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('warrants')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                      activeTab === 'warrants'
                        ? 'bg-[#B7E34A] text-[#0B1F2A] shadow-sm'
                        : 'text-[#87969F] hover:text-white'
                    }`}
                  >
                    Warrants &amp; Options
                  </button>
                  <button
                    onClick={() => setActiveTab('shareholders')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                      activeTab === 'shareholders'
                        ? 'bg-[#B7E34A] text-[#0B1F2A] shadow-sm'
                        : 'text-[#87969F] hover:text-white'
                    }`}
                  >
                    Holders &amp; Float
                  </button>
                </div>
              </div>
            </div>

            {/* =========================================================
                TAB 1: OVERVIEW & KEY METRICS
               ========================================================= */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                {/* 4 Metric Tiles */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="p-5 rounded-2xl bg-[#0B1F2A]/80 border border-white/10 relative overflow-hidden group hover:border-[#1F6F78] transition-colors">
                    <span className="text-xs text-[#87969F] font-heading uppercase tracking-wider block mb-2">
                      Issued &amp; Outstanding
                    </span>
                    <span className="font-heading font-bold text-3xl sm:text-4xl text-white block mb-1.5 tracking-tight">
                      62.4M
                    </span>
                    <span className="text-xs text-[#87969F] block">
                      Common voting equity shares
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0B1F2A]/80 border border-white/10 relative overflow-hidden group hover:border-[#1F6F78] transition-colors">
                    <span className="text-xs text-[#87969F] font-heading uppercase tracking-wider block mb-2">
                      Cash &amp; Liquidity
                    </span>
                    <span className="font-heading font-bold text-3xl sm:text-4xl text-white block mb-1.5 tracking-tight">
                      $1.5M
                    </span>
                    <span className="text-xs text-[#87969F] block">
                      Unrestricted treasury reserves
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0B1F2A]/80 border border-white/10 relative overflow-hidden group hover:border-[#1F6F78] transition-colors">
                    <span className="text-xs text-[#87969F] font-heading uppercase tracking-wider block mb-2">
                      Marketable Securities
                    </span>
                    <span className="font-heading font-bold text-3xl sm:text-4xl text-white block mb-1.5 tracking-tight">
                      1.2M
                    </span>
                    <span className="text-xs text-[#87969F] block">
                      Common shares held in NZEC
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0B1F2A]/80 border border-white/10 relative overflow-hidden group hover:border-[#1F6F78] transition-colors">
                    <span className="text-xs text-[#87969F] font-heading uppercase tracking-wider block mb-2">
                      Fully Diluted Total
                    </span>
                    <span className="font-heading font-bold text-3xl sm:text-4xl text-white block mb-1.5 tracking-tight">
                      91.1M
                    </span>
                    <span className="text-xs text-[#87969F] block">
                      Including all options &amp; warrants
                    </span>
                  </div>
                </div>

                {/* Float Distribution Breakdown */}
                <div className="p-6 rounded-2xl bg-[#0B1F2A]/60 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <PieChart className="w-4 h-4 text-[#B7E34A]" />
                      <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                        Share Ownership &amp; Float Concentration
                      </h3>
                    </div>
                    <span className="text-xs text-[#87969F]">
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#B7E34A]" />
                        <span className="font-heading font-bold text-white text-sm">40% Insiders &amp; Associates</span>
                      </div>
                      <span className="text-[#87969F] block text-xs leading-relaxed">
                        38.2M shares held by management and founders; subject to voluntary lock-up &amp; escrow.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#1F6F78]" />
                        <span className="font-heading font-bold text-white text-sm">40% Institutional Funds</span>
                      </div>
                      <span className="text-[#87969F] block text-xs leading-relaxed">
                        Strategic natural resource and critical mineral investment funds.
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#87969F]" />
                        <span className="font-heading font-bold text-white text-sm">20% Retail Float</span>
                      </div>
                      <span className="text-[#87969F] block text-xs leading-relaxed">
                        Liquid public market tradeable float on TSX-V, OTCQB, and Frankfurt.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 2: WARRANTS & OPTIONS SCHEDULE
               ========================================================= */}
            {activeTab === 'warrants' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Warrants Table */}
                  <div className="p-6 rounded-2xl bg-[#0B1F2A]/70 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B7E34A]" />
                        Outstanding Warrants Schedule
                      </h3>
                      <span className="text-xs font-semibold text-[#B7E34A] bg-[#B7E34A]/10 px-2.5 py-1 rounded-full">
                        Total: {investorCapitalData.totalWarrants}
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="border-b border-white/10 text-[#87969F]">
                            <th className="py-2.5 font-medium">Tranche</th>
                            <th className="py-2.5 font-medium text-right">Quantity</th>
                            <th className="py-2.5 font-medium text-right">Exercise Price</th>
                            <th className="py-2.5 font-medium text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {investorCapitalData.warrants.map((w) => (
                            <tr key={w.tranche} className="hover:bg-white/5">
                              <td className="py-3 font-semibold text-white">{w.tranche}</td>
                              <td className="py-3 text-right font-mono text-[#DDE3E3]">{w.quantity}</td>
                              <td className="py-3 text-right font-mono text-[#B7E34A] font-semibold">{w.strikePrice}</td>
                              <td className="py-3 text-right text-[#87969F]">{w.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Stock Options Table */}
                  <div className="p-6 rounded-2xl bg-[#0B1F2A]/70 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1F6F78]" />
                        Stock Incentive Options
                      </h3>
                      <span className="text-xs font-semibold text-[#2DD4BF] bg-[#1F6F78]/20 px-2.5 py-1 rounded-full">
                        Total: {investorCapitalData.totalOptions}
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="border-b border-white/10 text-[#87969F]">
                            <th className="py-2.5 font-medium">Incentive Plan</th>
                            <th className="py-2.5 font-medium text-right">Options</th>
                            <th className="py-2.5 font-medium text-right">Strike Price</th>
                            <th className="py-2.5 font-medium text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {investorCapitalData.options.map((opt) => (
                            <tr key={opt.tranche} className="hover:bg-white/5">
                              <td className="py-3 font-semibold text-white">{opt.tranche}</td>
                              <td className="py-3 text-right font-mono text-[#DDE3E3]">{opt.quantity}</td>
                              <td className="py-3 text-right font-mono text-[#B7E34A] font-semibold">{opt.strikePrice}</td>
                              <td className="py-3 text-right text-[#87969F]">{opt.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================
                TAB 3: SIGNIFICANT SHAREHOLDERS & ESCROW
               ========================================================= */}
            {activeTab === 'shareholders' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {investorCapitalData.significantShareholders.map((holder) => (
                    <div
                      key={holder.name}
                      className="p-6 rounded-2xl bg-[#0B1F2A]/80 border border-white/10 hover:border-[#1F6F78] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs uppercase tracking-wider text-[#B7E34A] font-heading font-semibold">
                          {holder.stakeType}
                        </span>
                        <span className="font-heading font-bold text-xl text-white">
                          {holder.shares} Shares
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-white mb-2">
                        {holder.name}
                      </h4>
                      <p className="text-xs text-[#87969F] leading-relaxed">
                        {holder.notes}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Escrow Disclosure Callout */}
                <div className="p-5 rounded-2xl bg-[#162F3F]/60 border border-[#1F6F78]/50 text-xs text-[#DDE3E3] leading-relaxed">
                  <div className="flex items-center gap-2 text-white font-semibold mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B7E34A]" />
                    <span>Statutory Escrow &amp; Voluntary Lock-Up Notice</span>
                  </div>
                  <p>{investorCapitalData.escrowNotice}</p>
                </div>
              </div>
            )}

            {/* Footer / Attribution Notice */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[#87969F]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1F6F78]" />
                <span>Data Source: TMX Group (TSX Venture Exchange) • Delayed 15 minutes</span>
              </div>
              <div>
                <span>Securities Identifiers: CUSIP {investorCapitalData.identifiers.cusip} • ISIN {investorCapitalData.identifiers.isin}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. CORE SHAREHOLDER DOCUMENTS (Dual Featured Cards)
         ========================================================= */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Card 1: Official Corporate Presentation */}
            <div className="lg:col-span-7 bg-white rounded-[22px] border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] text-xs font-heading font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Corporate Deck • Q1 2026</span>
                  </span>
                  <span className="text-xs text-[#87969F] font-heading font-medium">
                    28 Slides (PDF)
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] leading-tight mb-3">
                  {corporateDeck.title}
                </h3>

                <p className="text-sm text-[#5B6B73] leading-relaxed mb-6">
                  {corporateDeck.summary}
                </p>

                {/* Document Metadata Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] text-xs text-[#5B6B73] mb-6">
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Format</span>
                    <span className="font-semibold text-[#0B1F2A]">{corporateDeck.format}</span>
                  </div>
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Release</span>
                    <span className="font-semibold text-[#0B1F2A]">{corporateDeck.releaseDate}</span>
                  </div>
                  <div>
                    <span className="text-[#87969F] block text-[11px]">File Size</span>
                    <span className="font-semibold text-[#0B1F2A]">{corporateDeck.fileSize}</span>
                  </div>
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Disclosure</span>
                    <span className="font-semibold text-[#1F6F78]">TSX-V Compliant</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={corporateDeck.downloadUrl}
                  download="Monumental-Energy-Presentation-2026.pdf"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#0B1F2A]" />
                  <span>Download Deck (PDF)</span>
                </a>

                <Link
                  href="/investors/presentation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#DDE3E3] hover:border-[#0B1F2A] text-[#0B1F2A] font-heading font-semibold text-xs transition-colors"
                >
                  <span>View Slides Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: LIFE Offering Document */}
            <div className="lg:col-span-5 bg-white rounded-[22px] border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B7E34A]/20 text-[#0B1F2A] text-xs font-heading font-bold uppercase tracking-wider">
                    Statutory Offering Document
                  </span>
                  <span className="text-xs text-[#87969F] font-heading font-medium">
                    NI 45-106
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] leading-tight mb-2">
                  Listed Issuer Financing Exemption (LIFE)
                </h3>

                <span className="text-xs font-semibold text-[#1F6F78] block mb-4">
                  {lifeOfferingDoc.amendedDate}
                </span>

                <ul className="space-y-2.5 text-xs text-[#5B6B73] mb-6">
                  {lifeOfferingDoc.keyTerms.map((term, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={lifeOfferingDoc.downloadUrl}
                  download="Monumental-Energy-LIFE-Offering.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#0B1F2A] hover:bg-[#162F3F] text-white font-heading font-semibold text-xs tracking-wider transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#B7E34A]" />
                  <span>Download LIFE Document</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. DUAL SECTION: SEDAR+ FILINGS & ADVISORY DIRECTORY
         ========================================================= */}
      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Regulatory Filings (SEDAR+ Archive) */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-normal">
                    Continuous Disclosures &amp; SEDAR+ Archive
                  </h3>
                </div>

                <a
                  href="https://www.sedarplus.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1F6F78] hover:text-[#0B1F2A] inline-flex items-center gap-1.5 transition-colors group"
                >
                  <span>SEDAR+ Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Filings List */}
              <div className="bg-white rounded-[20px] border border-[#DDE3E3] shadow-sm divide-y divide-[#DDE3E3] overflow-hidden mb-6">
                {sedarFilings.map((filing) => (
                  <div
                    key={filing.id}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F9FAF7] transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-heading font-semibold text-[#1F6F78] uppercase tracking-wider">
                          {filing.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#87969F]" />
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F5F6F1] text-[#5B6B73] font-medium border border-[#DDE3E3]">
                          {filing.documentType}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] leading-snug">
                        {filing.title}
                      </h4>
                    </div>

                    <a
                      href={filing.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#0B1F2A] hover:text-[#1F6F78] shrink-0"
                    >
                      <span>View Filing</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#1F6F78]" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Secondary Governance Links (AGM & Computershare) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/investors/agm"
                  className="p-5 rounded-2xl bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#87969F] block">Shareholder Voting</span>
                      <span className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                        2026 Annual General Meeting
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all" />
                </Link>

                <a
                  href="https://www.investorcentre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#B7E34A]/20 flex items-center justify-center text-[#0B1F2A]">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#87969F] block">Transfer Registry</span>
                      <span className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                        Computershare Investor Portal
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Right 4 Cols: Corporate Directory & Professional Advisory (Dark Card) */}
            <div className="lg:col-span-4">
              <div className="relative rounded-[20px] bg-[#07161F] text-white p-6 sm:p-7 border border-[#1D3B4C] shadow-xl overflow-hidden">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-5 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    Corporate Directory
                  </h3>
                </div>

                <div className="divide-y divide-white/10 space-y-4">
                  {professionalAdvisory.map((adv) => (
                    <div key={adv.role} className="pt-4 first:pt-0">
                      <span className="text-[10px] text-[#B7E34A] uppercase tracking-wider font-heading font-semibold block mb-1">
                        {adv.role}
                      </span>
                      <span className="text-xs sm:text-[13px] font-medium text-white block mb-0.5">
                        {adv.name}
                      </span>
                      <span className="text-[11px] text-[#87969F] block leading-relaxed mb-1.5">
                        {adv.address}
                      </span>
                      {adv.phone && (
                        <div className="flex items-center gap-2 text-[11px] text-[#DDE3E3] mt-1">
                          <Phone className="w-3 h-3 text-[#2DD4BF]" />
                          <span>{adv.phone}</span>
                        </div>
                      )}
                      {adv.email && (
                        <div className="flex items-center gap-2 text-[11px] text-[#DDE3E3] mt-1">
                          <Mail className="w-3 h-3 text-[#2DD4BF]" />
                          <span>{adv.email}</span>
                        </div>
                      )}
                      {adv.website && (
                        <a
                          href={adv.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-[#2DD4BF] hover:text-[#B7E34A] transition-colors mt-1"
                        >
                          <span>Portal Link</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Direct IR Line Button */}
                <div className="pt-6 mt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 rounded-full border border-white/20 hover:border-[#B7E34A] text-white hover:text-[#B7E34A] text-xs font-heading font-semibold tracking-wide text-center block transition-all"
                  >
                    Contact Investor Relations &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. BOTTOM NEWSLETTER / IR ALERTS BANNER
         ========================================================= */}
      <section className="pb-16 sm:pb-20 lg:pb-24 pt-4">
        <Container>
          <div className="relative rounded-[18px] lg:rounded-[22px] overflow-hidden min-h-[190px] sm:min-h-[210px] shadow-2xl border border-[#1D3B4C] bg-[#07161F]">
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

            {/* Banner Content Container */}
            <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <span className="text-[#B7E34A] text-xs font-heading font-semibold uppercase tracking-[0.16em]">
                    MARKET ALERTS
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-tight tracking-[-0.01em] mb-2">
                  Stay Informed on TSX-V Disclosures
                </h2>
                <p className="text-xs sm:text-sm text-[#DDE3E3] font-normal max-w-lg">
                  Subscribe to receive regulatory press releases, quarterly MD&amp;As, and corporate presentation updates directly.
                </p>
              </div>

              {/* Email Form */}
              <div className="shrink-0 w-full md:w-auto">
                {subscribed ? (
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#B7E34A]/20 border border-[#B7E34A] text-[#B7E34A] text-xs font-heading font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-[#0B1F2A]/85 backdrop-blur-md border border-white/20 shadow-xl max-w-md w-full"
                  >
                    <div className="flex items-center flex-grow px-3 py-1.5">
                      <Mail className="w-4 h-4 text-[#87969F] mr-2.5 shrink-0" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your corporate email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full bg-transparent text-xs text-white placeholder:text-[#87969F] focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md hover:scale-[1.02]"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
