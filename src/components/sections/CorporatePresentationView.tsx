'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  Download,
  Calendar,
  FileText,
  Monitor,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Newspaper,
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

/* Resource links in the "Explore Investor Resources" row. */
const RESOURCES = [
  {
    href: '/investors',
    title: 'Financial Statements',
    description: 'Annual and quarterly reports',
    icon: BarChart3,
    iconBox: 'bg-[#1F6F78]/10',
    external: false,
  },
  {
    href: 'https://www.sedarplus.ca',
    title: 'SEDAR+ Filings',
    description: 'Regulatory filings and disclosures',
    icon: FileText,
    iconBox: 'bg-[#B7E34A]/20',
    external: true,
  },
  {
    href: '/investors',
    title: 'Shareholder Information',
    description: 'Governance and share structure',
    icon: Users,
    iconBox: 'bg-[#1F6F78]/10',
    external: false,
  },
  {
    href: '/news',
    title: 'Latest News',
    description: 'Company announcements',
    icon: Newspaper,
    iconBox: 'bg-[#B7E34A]/20',
    external: false,
  },
];

/* Download link uses the native `download` attribute, which <Button href>
 * does not forward, so it reuses the Button primary "md" styles. */
const btnPrimary =
  'group inline-flex items-center justify-center gap-2 font-body font-semibold text-[15px] sm:text-base px-6 py-3 sm:px-7 sm:py-3.5 rounded-[10px] border border-transparent bg-[#B7E34A] text-[#0B1F2A] hover:bg-[#A3CF36] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F2A]';

const resourceCard =
  'h-full p-5 sm:p-6 rounded-[16px] bg-white border border-[#DDE3E3] shadow-sm flex items-center justify-between gap-3 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

export function CorporatePresentationView() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };


  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="page-intro-y !pb-5 sm:!pb-7 lg:!pb-9 relative overflow-hidden">
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
          {/* Seamless dual gradient fade (left into copy, bottom into page background) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/45 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[270px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-7 lg:pr-6 min-w-0">
              <Eyebrow className="hero-eyebrow">INVESTOR PRESENTATION</Eyebrow>

              <KineticHeading
                as="h1"
                text="Our Strategy & Corporate Overview"
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                Explore our latest corporate presentation for an overview of our assets, strategy and long-term opportunities in energy and critical minerals.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1">
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
          Follows the hero on the same background: no top padding.
         ========================================================= */}
      <section className="section-y pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* LEFT 8 COLS: INTERACTIVE SLIDE VIEWER & THUMBNAILS */}
            <div data-reveal className="lg:col-span-8 space-y-4 min-w-0">
              {/* Main Presentation Screen / Frame */}
              <div className="relative rounded-[20px] lg:rounded-[24px] bg-[#07161F] border border-[#1D3B4C] shadow-2xl overflow-hidden flex flex-col group">
                {/* Active Slide Canvas: content-sized with a min height so
                    longer slides never clip on narrow screens */}
                <div className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] p-5 sm:py-8 sm:px-20 flex flex-col justify-between overflow-hidden">
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
                  <div className="relative z-10 flex items-center justify-between gap-3 text-white border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-heading font-extrabold text-sm sm:text-base tracking-widest uppercase text-white">
                        MONUMENTAL
                      </span>
                      <span className="text-[11px] font-heading font-semibold text-[#DDE3E3]/75 tracking-wider uppercase">
                        ENERGY
                      </span>
                    </div>

                    <span className="font-mono text-[11px] font-bold text-[#B7E34A] px-2 py-0.5 rounded bg-black/40 border border-white/10 shrink-0">
                      TSX-V: MNRG
                    </span>
                  </div>

                  {/* Middle Narrative of Slide */}
                  <div className="relative z-10 max-w-xl py-5 sm:py-6">
                    <span className="inline-block text-[11px] uppercase tracking-wider font-heading font-bold text-[#B7E34A] mb-2">
                      {currentSlide.badge}
                    </span>

                    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.15] tracking-[-0.02em] mb-3">
                      {currentSlide.title}
                    </h2>

                    <p className={cn(type.body, 'text-[#DDE3E3] mb-4')}>
                      {currentSlide.tagline}
                    </p>

                    {/* KPIs or Highlights Strip if present */}
                    {currentSlide.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                        {currentSlide.metrics.map((m) => (
                          <div key={m.label} className="p-2.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm min-w-0">
                            <span className="text-[10px] text-[#DDE3E3]/75 uppercase block leading-tight mb-0.5">{m.label}</span>
                            <span className="font-heading font-bold text-sm text-[#B7E34A] block">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentSlide.highlights && !currentSlide.metrics && (
                      <ul className="space-y-1.5 text-sm text-[#DDE3E3] pt-1">
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
                  <div className="relative z-10 text-[10px] sm:text-[11px] text-[#DDE3E3]/75 uppercase tracking-wider flex items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-3">
                    <span className="min-w-0">{currentSlide.subtitle}</span>
                    <span className="font-mono text-white/80 shrink-0">SLIDE {currentSlide.id} OF 32</span>
                  </div>

                  {/* Circular Prev/Next Arrows overlaying slide (sm+; the
                      thumbnail bar carries prev/next on phones) */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/15 shadow-lg group-hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white items-center justify-center transition-all duration-200 backdrop-blur-md border border-white/15 shadow-lg group-hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Slide Thumbnail Carousel Bar (scrolls horizontally on phones) */}
              <div className="flex items-center justify-between gap-2 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="w-11 h-11 rounded-lg bg-white hover:bg-[#0B1F2A] hover:text-white text-[#0B1F2A] border border-[#DDE3E3] flex items-center justify-center shrink-0 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>

                <div className="flex gap-2 overflow-x-auto p-1 sm:grid sm:grid-cols-5 sm:gap-3 sm:overflow-visible flex-grow min-w-0">
                  {SLIDES.map((slide, idx) => {
                    const isActive = idx === currentSlideIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setCurrentSlideIndex(idx)}
                        aria-label={`Go to ${slide.thumbnailTitle}`}
                        aria-current={isActive ? 'true' : undefined}
                        className="w-24 shrink-0 sm:w-auto flex flex-col items-center group text-left cursor-pointer"
                      >
                        <div
                          className={cn(
                            'relative w-full aspect-[16/10] rounded-lg overflow-hidden border transition-all',
                            isActive
                              ? 'border-[#B7E34A] ring-2 ring-[#B7E34A]/40 shadow-md sm:scale-[1.03]'
                              : 'border-[#DDE3E3] group-hover:border-[#0B1F2A]/40 opacity-75 group-hover:opacity-100'
                          )}
                        >
                          <Image
                            src={slide.image}
                            alt={slide.thumbnailTitle}
                            fill
                            sizes="120px"
                            className="object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-[#07161F]/50 flex items-center justify-center p-1">
                            <span className="text-[10px] font-heading font-bold text-white text-center leading-tight line-clamp-2">
                              {slide.thumbnailTitle}
                            </span>
                          </div>
                        </div>
                        <span
                          className={cn(
                            'text-[11px] font-mono mt-1 font-semibold',
                            isActive ? 'text-[#0B1F2A]' : 'text-[#5B6B73]'
                          )}
                        >
                          {slide.chapterNumber}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="w-11 h-11 rounded-lg bg-white hover:bg-[#0B1F2A] hover:text-white text-[#0B1F2A] border border-[#DDE3E3] flex items-center justify-center shrink-0 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* RIGHT 4 COLS: DARK SIDEBAR CARD */}
            <div data-reveal="card" className="lg:col-span-4 min-w-0 flex flex-col">
              <div className="relative rounded-[20px] lg:rounded-[24px] bg-[#0B1F2A] text-white p-6 sm:p-8 border border-[#1D3B4C] shadow-2xl overflow-hidden flex flex-col justify-between h-full">
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

                {/* Eyebrow & Headline & Summary */}
                <div className="relative z-10">
                  <Eyebrow dark>LATEST PRESENTATION</Eyebrow>

                  <KineticHeading
                    as="h2"
                    text="Corporate Presentation"
                    className={cn(type.h2Compact, tone.headingDark, 'mb-5')}
                  />

                  {/* 3-Stat Metadata Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-2 sm:px-3 rounded-xl bg-[#07161F]/70 border border-white/10 text-center mb-5">
                    <div className="min-w-0">
                      <Calendar className="w-4 h-4 text-[#B7E34A] mx-auto mb-1" aria-hidden="true" />
                      <span className="font-heading font-bold text-sm text-white block leading-tight">
                        August 2024
                      </span>
                      <span className="text-xs text-[#DDE3E3]/75 block">Published date</span>
                    </div>

                    <div className="min-w-0">
                      <FileText className="w-4 h-4 text-[#2DD4BF] mx-auto mb-1" aria-hidden="true" />
                      <span className="font-heading font-bold text-sm text-white block leading-tight">
                        PDF
                      </span>
                      <span className="text-xs text-[#DDE3E3]/75 block">Format</span>
                    </div>

                    <div className="min-w-0">
                      <Monitor className="w-4 h-4 text-[#B7E34A] mx-auto mb-1" aria-hidden="true" />
                      <span className="font-heading font-bold text-sm text-white block leading-tight">
                        32
                      </span>
                      <span className="text-xs text-[#DDE3E3]/75 block">Slides</span>
                    </div>
                  </div>

                  <p className={cn(type.body, tone.mutedDark)}>
                    An overview of Monumental Energy&apos;s assets, strategy and long-term opportunities in New Zealand and Chile.
                  </p>
                </div>

                {/* Dual Action Buttons (Anchored to bottom) */}
                <div className="relative z-10 pt-6 space-y-3">
                  <a
                    href="/documents/investor-presentation.pdf"
                    download="Monumental-Energy-Presentation-2026.pdf"
                    className={cn(btnPrimary, 'w-full')}
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>Download PDF</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <Button href="/contact" variant="secondary-dark" size="md" className="w-full">
                    <Calendar className="w-4 h-4 text-[#2DD4BF]" aria-hidden="true" />
                    Request Investor Briefing
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. EXPLORE INVESTOR RESOURCES (4-Card Row)
         ========================================================= */}
      <section className="section-y bg-white border-t border-[#DDE3E3]">
        <Container>
          <SectionHeading
            title="Explore Investor Resources"
            description="Access financial reports, filings and other key investor information."
            action={{ label: 'View all resources', shortLabel: 'View all', href: '/investors' }}
          />

          {/* 4 Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
            {RESOURCES.map((res) => {
              const Icon = res.icon;
              const inner = (
                <>
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform',
                        res.iconBox
                      )}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={cn(type.h4, tone.headingLight, 'group-hover:text-[#1F6F78] transition-colors mb-0.5')}>
                        {res.title}
                      </h3>
                      <span className="text-sm text-[#5B6B73] block leading-snug">
                        {res.description}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                </>
              );

              return (
                <div key={res.title} data-reveal="card" className="min-w-0">
                  {res.external ? (
                    <a href={res.href} target="_blank" rel="noopener noreferrer" className={resourceCard}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={res.href} className={resourceCard}>
                      {inner}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
