'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import {
  Download,
  Calendar,
  FileText,
  Monitor,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  BarChart3,
  ShieldCheck,
  Users,
  Newspaper,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface SlideData {
  id: number;
  chapterNumber: number;
  chapterTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  thumbnailTitle: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    chapterNumber: 1,
    chapterTitle: 'Executive Briefing',
    badge: 'CORPORATE PRESENTATION · AUGUST 2024',
    title: 'Advancing a diversified energy future',
    subtitle: 'NEW ZEALAND OIL & GAS · CHILE LITHIUM · STRATEGY · OPPORTUNITY',
    tagline: 'Strategic dual-pillar corporate model balancing near-term conventional production with royalty upside.',
    image: '/images/about-hero-taranaki.jpg',
    thumbnailTitle: 'Cover Slide',
    highlights: [
      'Near-term cash flow from high-deliverability conventional assets in New Zealand',
      'Unencumbered 2% NSR royalty exposure across 8,500 hectares in Chile’s Lithium Triangle',
      'Disciplined capital allocation with low overhead and zero-capex royalty upside',
    ],
  },
  {
    id: 2,
    chapterNumber: 2,
    chapterTitle: 'Capital Structure',
    badge: 'CAPITAL STRUCTURE & FLOAT DYNAMICS',
    title: 'Tight share structure with strong insider alignment',
    subtitle: 'TSX-V: MNRG · OTCQB: MNMRF · FRANKFURT: ZA6',
    tagline: 'Over 80% of shares held by management, insiders, and institutional resource funds.',
    image: '/images/corporate-office.jpg',
    thumbnailTitle: 'Company Overview',
    metrics: [
      { label: 'Issued & Outstanding', value: '62.4M' },
      { label: 'Cash & Liquidity', value: '$1.5M' },
      { label: 'NZEC Marketable Shares', value: '1.2M' },
      { label: 'Insider & Fund Holding', value: '80%' },
    ],
    highlights: [
      'Only 20% tradeable retail float in public market circulation',
      'Discovery Silver and Lithium Chile shares under voluntary 12-month lock-up',
      'Zero statutory corporate debt and funded near-term work programs',
    ],
  },
  {
    id: 3,
    chapterNumber: 3,
    chapterTitle: 'New Zealand Oil & Gas',
    badge: 'PILLAR 1: CONVENTIONAL PRODUCTION',
    title: 'High-deliverability recompletions in Taranaki Basin',
    subtitle: 'TARANAKI BASIN · NEW ZEALAND ENERGY CORP. JV',
    tagline: 'Targeting rapid uphole workovers on proven shut-in or bypassed petroleum intervals.',
    image: '/images/project-new-zealand.jpg',
    thumbnailTitle: 'New Zealand Oil & Gas',
    metrics: [
      { label: 'Target Formation', value: 'Copper Moki' },
      { label: 'Infrastructure', value: 'Waihapa Station' },
      { label: 'Payback Model', value: 'Low Capex' },
      { label: 'Export Route', value: 'Domestic Pipeline' },
    ],
    highlights: [
      'Direct pipeline connection to regional processing and domestic natural gas grid',
      'Fraction of greenfield exploration cost, shortening capital recovery windows',
      'Phase 1 workovers scheduled with field crews mobilized for pressure testing',
    ],
  },
  {
    id: 4,
    chapterNumber: 4,
    chapterTitle: 'Chile Lithium',
    badge: 'PILLAR 2: CRITICAL MINERALS',
    title: '8,500 hectares in South America’s Lithium Triangle',
    subtitle: 'SALAR DE TURI · ANTOFAGASTA REGION · CHILE',
    tagline: 'Unencumbered 2% Net Smelter Return (NSR) royalty with zero ongoing cash calls.',
    image: '/images/project-salar-de-turi.jpg',
    thumbnailTitle: 'Chile Lithium',
    metrics: [
      { label: 'Royalty Structure', value: '2.0% NSR' },
      { label: 'Concession Area', value: '8,500 ha' },
      { label: 'Jurisdiction', value: 'Chile Brine' },
      { label: 'Ongoing Capex', value: '$0 (Royalty)' },
    ],
    highlights: [
      'Positioned along established lithium brine exploration corridor in northern Chile',
      'Infrastructure advantages: paved highway access and high-voltage transmission lines',
      'Long-term leverage to battery-grade lithium carbonate demand without operational risk',
    ],
  },
  {
    id: 5,
    chapterNumber: 5,
    chapterTitle: 'Catalysts & Outlook',
    badge: 'STRATEGIC OUTLOOK & MILESTONES',
    title: 'Near-term catalysts and strategic roadmap',
    subtitle: 'UPCOMING VALUE DRIVERS · 2026 EXECUTION',
    tagline: 'Disciplined execution across conventional recompletions and royalty stewardship.',
    image: '/images/taranaki-panoramic-coast.jpg',
    thumbnailTitle: 'Strategic Outlook',
    highlights: [
      'Completion of Phase 1 recompletion workovers in Taranaki Basin',
      'Subsurface evaluation and statutory resource updates filed on SEDAR+',
      'Quarterly MD&A financial reports demonstrating revenue contributions',
      'Continuous evaluation of complementary low-risk energy acquisition targets',
    ],
  },
];

const TOTAL_SLIDES = 32;

export function CorporatePresentationView() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleJumpToChapter = (chapterNum: number) => {
    const idx = SLIDES.findIndex((s) => s.chapterNumber === chapterNum);
    if (idx !== -1) {
      setCurrentSlideIndex(idx);
    }
  };

  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-8 lg:pb-12">
        {/* Subtle Topographical Elevation Contour Background (Top Left) */}
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
            src="/images/about-hero-taranaki.jpg"
            alt="Scenic Mount Taranaki river valley landscape"
            fill
            sizes="50vw"
            className="object-cover object-[center_35%]"
            priority
          />
          {/* Seamless gradient fade into off-white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/45 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[300px] lg:min-h-[350px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-7 pr-0 lg:pr-6">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                INVESTOR PRESENTATION
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[52px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                Our Strategy &amp; Corporate Overview
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Explore our latest corporate presentation for an overview of our assets, strategy and long-term opportunities in energy and critical minerals.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1 mt-2">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/about-hero-taranaki.jpg"
                  alt="Scenic Mount Taranaki river valley landscape"
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
          2. MAIN SECTION: INTERACTIVE PRESENTATION VIEWER & SIDEBAR
         ========================================================= */}
      <section className="py-6 sm:py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT 7.5 COLS: INTERACTIVE SLIDE VIEWER & THUMBNAILS */}
            <div className="lg:col-span-8 space-y-4">
              {/* Main Presentation Screen / Frame */}
              <div className="relative rounded-[20px] bg-[#07161F] border border-[#1D3B4C] shadow-2xl overflow-hidden aspect-[16/10] flex flex-col justify-between group">
                {/* Active Slide Canvas */}
                <div className="relative w-full h-full p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
                  {/* Slide Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      fill
                      sizes="(min-width: 1024px) 65vw, 100vw"
                      className="object-cover object-center brightness-95 contrast-105"
                      priority
                    />
                    {/* Multi-stop Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#07161F]/80 to-[#07161F]/30" />
                  </div>

                  {/* Top Bar of Slide */}
                  <div className="relative z-10 flex items-center justify-between text-white border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-extrabold text-sm sm:text-base tracking-widest uppercase text-white">
                        MONUMENTAL
                      </span>
                      <span className="text-[11px] font-heading font-semibold text-[#87969F] tracking-wider uppercase">
                        ENERGY
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#B7E34A] px-2 py-0.5 rounded bg-black/40 border border-white/10">
                        TSX-V: MNRG
                      </span>
                    </div>
                  </div>

                  {/* Middle Narrative of Slide */}
                  <div className="relative z-10 max-w-xl py-4 sm:py-6">
                    <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-wider font-heading font-bold text-[#B7E34A] mb-2">
                      {currentSlide.badge}
                    </span>

                    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.14] tracking-tight mb-3">
                      {currentSlide.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#DDE3E3] leading-relaxed mb-4 font-normal">
                      {currentSlide.tagline}
                    </p>

                    {/* KPIs or Highlights Strip if present */}
                    {currentSlide.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                        {currentSlide.metrics.map((m) => (
                          <div key={m.label} className="p-2.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
                            <span className="text-[9px] text-[#87969F] uppercase block">{m.label}</span>
                            <span className="font-heading font-bold text-sm text-[#B7E34A] block">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentSlide.highlights && !currentSlide.metrics && (
                      <ul className="space-y-1.5 text-xs text-[#DDE3E3] pt-1">
                        {currentSlide.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B7E34A] mt-1.5 shrink-0" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Slide Footer */}
                  <div className="relative z-10 text-[10px] sm:text-[11px] text-[#87969F] uppercase tracking-wider flex items-center justify-between border-t border-white/10 pt-3">
                    <span>{currentSlide.subtitle}</span>
                    <span className="font-mono text-white/80">SLIDE {currentSlide.id} OF 32</span>
                  </div>

                  {/* Circular Prev/Next Arrows overlaying slide */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/15 shadow-lg group-hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/15 shadow-lg group-hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Scrubber & Controls Strip */}
                <div className="bg-[#0B1F2A] px-5 py-3 border-t border-white/10 flex items-center justify-between gap-4 text-xs text-white">
                  {/* Slide Counter */}
                  <span className="font-mono text-xs font-semibold text-[#87969F] shrink-0">
                    <strong className="text-white">{currentSlide.id}</strong> / {TOTAL_SLIDES}
                  </span>

                  {/* Progress Scrubber Bar */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const ratio = (e.clientX - rect.left) / rect.width;
                      const nextIndex = Math.min(Math.floor(ratio * SLIDES.length), SLIDES.length - 1);
                      setCurrentSlideIndex(nextIndex);
                    }}
                    className="flex-grow h-1.5 bg-white/15 rounded-full cursor-pointer relative overflow-hidden group/bar"
                  >
                    <div
                      style={{ width: `${(currentSlide.id / TOTAL_SLIDES) * 100}%` }}
                      className="h-full bg-[#B7E34A] rounded-full transition-all duration-300"
                    />
                  </div>

                  {/* Controls: Zoom & Fullscreen */}
                  <div className="flex items-center gap-3 text-[#87969F] shrink-0">
                    <button
                      onClick={handlePrev}
                      className="hover:text-white transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="hover:text-white transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="hover:text-[#B7E34A] transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide Thumbnail Carousel Bar */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-[#0B1F2A] hover:text-white text-[#0B1F2A] border border-[#DDE3E3] flex items-center justify-center shrink-0 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-5 gap-2 sm:gap-3 flex-grow">
                  {SLIDES.map((slide, idx) => {
                    const isActive = idx === currentSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className="flex flex-col items-center group text-left cursor-pointer"
                      >
                        <div
                          className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                            isActive
                              ? 'border-[#B7E34A] ring-2 ring-[#B7E34A]/40 shadow-md scale-[1.03]'
                              : 'border-[#DDE3E3] group-hover:border-[#0B1F2A]/40 opacity-75 group-hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={slide.image}
                            alt={slide.thumbnailTitle}
                            fill
                            sizes="120px"
                            className="object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-[#07161F]/50 flex items-center justify-center p-1">
                            <span className="text-[9px] font-heading font-bold text-white text-center leading-tight line-clamp-2">
                              {slide.thumbnailTitle}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-mono mt-1 font-semibold ${
                            isActive ? 'text-[#0B1F2A]' : 'text-[#87969F]'
                          }`}
                        >
                          {slide.chapterNumber}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg bg-white hover:bg-[#0B1F2A] hover:text-white text-[#0B1F2A] border border-[#DDE3E3] flex items-center justify-center shrink-0 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT 4.5 COLS: DARK SIDEBAR CARD */}
            <div className="lg:col-span-4">
              <div className="relative rounded-[22px] bg-[#07161F] text-white p-6 sm:p-8 border border-[#1D3B4C] shadow-2xl overflow-hidden">
                {/* Topographic Watermark Contour (Top Right) */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-[0.06] select-none z-0"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 300 300" fill="none" stroke="#FFFFFF" strokeWidth="1.2">
                    <circle cx="220" cy="80" r="60" />
                    <circle cx="220" cy="80" r="90" />
                    <circle cx="220" cy="80" r="120" />
                    <circle cx="220" cy="80" r="150" />
                  </svg>
                </div>

                {/* Eyebrow & Headline */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-1 bg-[#B7E34A] rounded-full inline-block" />
                    <span className="text-[#B7E34A] text-xs font-heading font-semibold uppercase tracking-[0.16em]">
                      LATEST PRESENTATION
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-tight mb-4">
                    Corporate Presentation
                  </h3>

                  {/* 3-Stat Metadata Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#0B1F2A] border border-white/10 text-center mb-5">
                    <div>
                      <Calendar className="w-4 h-4 text-[#B7E34A] mx-auto mb-1" />
                      <span className="font-heading font-bold text-xs text-white block leading-tight">
                        August 2024
                      </span>
                      <span className="text-[10px] text-[#87969F] block">Published date</span>
                    </div>

                    <div>
                      <FileText className="w-4 h-4 text-[#2DD4BF] mx-auto mb-1" />
                      <span className="font-heading font-bold text-xs text-white block leading-tight">
                        PDF
                      </span>
                      <span className="text-[10px] text-[#87969F] block">Format</span>
                    </div>

                    <div>
                      <Monitor className="w-4 h-4 text-[#B7E34A] mx-auto mb-1" />
                      <span className="font-heading font-bold text-xs text-white block leading-tight">
                        32
                      </span>
                      <span className="text-[10px] text-[#87969F] block">Slides</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#DDE3E3] leading-relaxed mb-6 font-normal">
                    An overview of Monumental Energy&apos;s assets, strategy and long-term opportunities in New Zealand and Chile.
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href="/documents/investor-presentation.pdf"
                      download="Monumental-Energy-Presentation-2026.pdf"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01]"
                    >
                      <Download className="w-4 h-4 text-[#0B1F2A]" />
                      <span>Download PDF &rarr;</span>
                    </a>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-white/20 hover:border-[#B7E34A] text-white hover:text-[#B7E34A] font-heading font-semibold text-xs tracking-wider transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-[#2DD4BF]" />
                      <span>Request Investor Briefing &rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Presentation Chapters List */}
                <div className="relative z-10 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-4 h-0.5 bg-[#B7E34A] rounded-full inline-block" />
                    <span className="text-[11px] font-heading font-bold text-[#B7E34A] uppercase tracking-wider">
                      PRESENTATION CHAPTERS
                    </span>
                  </div>

                  <div className="space-y-1">
                    {SLIDES.map((ch) => {
                      const isCurrent = ch.chapterNumber === currentSlide.chapterNumber;
                      return (
                        <button
                          key={ch.chapterNumber}
                          onClick={() => handleJumpToChapter(ch.chapterNumber)}
                          className={`w-full py-2.5 px-3 rounded-xl flex items-center justify-between text-left transition-colors group ${
                            isCurrent
                              ? 'bg-white/10 text-white'
                              : 'hover:bg-white/5 text-[#DDE3E3]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                                isCurrent
                                  ? 'bg-[#B7E34A] text-[#0B1F2A]'
                                  : 'border border-white/20 text-[#87969F] group-hover:border-white/50'
                              }`}
                            >
                              {ch.chapterNumber}
                            </span>
                            <span className="text-xs font-medium group-hover:text-white transition-colors">
                              {ch.chapterTitle}
                            </span>
                          </div>

                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                              isCurrent ? 'text-[#B7E34A]' : 'text-[#87969F]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. EXPLORE INVESTOR RESOURCES (4-Card Row)
         ========================================================= */}
      <section className="py-12 sm:py-16 border-t border-[#DDE3E3]">
        <Container>
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] tracking-tight">
                  Explore Investor Resources
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5B6B73]">
                Access financial reports, filings and other key investor information.
              </p>
            </div>

            <Link
              href="/investors"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors shrink-0 group"
            >
              <span>View all resources</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Resource Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1: Financial Statements */}
            <Link
              href="/investors"
              className="p-5 sm:p-6 rounded-[18px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-0.5">
                    Financial Statements
                  </h4>
                  <span className="text-[11px] text-[#87969F] block">
                    Annual and quarterly reports
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>

            {/* Card 2: SEDAR+ Filings */}
            <a
              href="https://www.sedarplus.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-[18px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#B7E34A]/20 flex items-center justify-center text-[#0B1F2A] shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5 text-[#1F6F78]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-0.5">
                    SEDAR+ Filings
                  </h4>
                  <span className="text-[11px] text-[#87969F] block">
                    Regulatory filings and disclosures
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </a>

            {/* Card 3: Shareholder Information */}
            <Link
              href="/investors"
              className="p-5 sm:p-6 rounded-[18px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-0.5">
                    Shareholder Information
                  </h4>
                  <span className="text-[11px] text-[#87969F] block">
                    Governance and share structure
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>

            {/* Card 4: Latest News */}
            <Link
              href="/news"
              className="p-5 sm:p-6 rounded-[18px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#B7E34A]/20 flex items-center justify-center text-[#0B1F2A] shrink-0 group-hover:scale-105 transition-transform">
                  <Newspaper className="w-5 h-5 text-[#1F6F78]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-0.5">
                    Latest News
                  </h4>
                  <span className="text-[11px] text-[#87969F] block">
                    Company announcements
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
