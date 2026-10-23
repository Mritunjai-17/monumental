import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { MediaReveal } from '@/components/ui/MediaReveal';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import { ArrowRight, MapPin, Layers, FileText } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Salar de Turi Lithium Project | Chile Lithium Triangle',
  description:
    'A significant lithium brine exploration project in Chile’s Lithium Triangle, with a 2% net smelter return royalty on Summit Nanotech’s share of any future lithium production.',
  path: '/projects/salar-de-turi',
});

export default function SalarDeTuriProjectPage() {
  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="page-intro-y relative overflow-hidden">
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
            src="/images/project-salar-de-turi.jpg"
            alt="Salar de Turi lithium brine lake and Andean mountains in Chile"
            fill
            sizes="50vw"
            className="object-cover object-center"
            priority
          />
          {/* Seamless dual gradient fade (left into copy, bottom into page background) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/40 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[420px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 lg:pr-6 min-w-0">
              <Eyebrow className="hero-eyebrow">CHILE &nbsp;·&nbsp; LITHIUM ROYALTY</Eyebrow>

              <KineticHeading
                as="h1"
                text="Salar de Turi"
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                A significant lithium brine exploration project in Chile&apos;s Lithium Triangle, with a 2% net smelter return royalty on Summit Nanotech&apos;s share of any future lithium production.
              </p>

              <div className="hero-cta-group mt-6">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] group transition-colors"
                >
                  <span>Learn more about the project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3] bg-[#0B1F2A]">
                <Image
                  src="/images/project-salar-de-turi.jpg"
                  alt="Salar de Turi lithium brine lake and Andean mountains in Chile"
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
          2. 3-METRIC STAT STRIP (LOCATION, PROJECT AREA, MONUMENTAL INTEREST)
         ========================================================= */}
      <section className="section-y-compact bg-white border-y border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDE3E3]">
            {/* Metric 1: LOCATION */}
            <div className="flex items-center gap-4 min-w-0 pb-5 md:pb-0 md:pr-6 lg:pr-8">
              <div className="w-12 h-12 rounded-full border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <MapPin className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-heading font-semibold tracking-[0.12em] text-[#1F6F78] uppercase block">
                  LOCATION
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-1">
                  Lithium Triangle, Chile
                </span>
              </div>
            </div>

            {/* Metric 2: PROJECT AREA */}
            <div className="flex items-center gap-4 min-w-0 py-5 md:py-0 md:px-6 lg:px-8">
              <div className="w-12 h-12 rounded-full border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <Layers className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-heading font-semibold tracking-[0.12em] text-[#1F6F78] uppercase block">
                  PROJECT AREA
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-1">
                  8,500 hectares
                </span>
              </div>
            </div>

            {/* Metric 3: MONUMENTAL INTEREST */}
            <div className="flex items-center gap-4 min-w-0 pt-5 md:pt-0 md:pl-6 lg:pl-8">
              <div className="w-12 h-12 rounded-full border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <FileText className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-heading font-semibold tracking-[0.12em] text-[#1F6F78] uppercase block">
                  MONUMENTAL INTEREST
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-1">
                  2% NSR royalty*
                </span>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-6 pt-5 border-t border-[#DDE3E3] text-xs text-[#5B6B73] leading-snug">
            *Royalty terms and any future payments are subject to the applicable agreements and conditions.
          </p>
        </Container>
      </section>

      {/* =========================================================
          3. TWO-COLUMN SECTION (A strategic lithium royalty & Dark Card)
         ========================================================= */}
      <section id="overview" className="section-y scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & Narrative Copy */}
            <div className="lg:col-span-7 min-w-0">
              <KineticHeading
                as="h2"
                text="A strategic lithium royalty"
                className={cn(type.h2, tone.headingLight, 'mb-6')}
              />

              <div data-reveal className="space-y-4 text-base sm:text-lg leading-[1.6] text-[#5B6B73] max-w-2xl">
                <p>
                  Salar de Turi is an 8,500-hectare lithium brine exploration project located in the heart of Chile&apos;s Lithium Triangle, one of the world&apos;s most prospective regions for lithium resources.
                </p>
                <p>
                  Monumental Energy has transferred its option rights to Summit Nanotech and retains a 2% net smelter return royalty on Summit&apos;s share of any future lithium production, subject to the option being exercised and the terms of the agreements.
                </p>
              </div>
            </div>

            {/* Right: Dark Card "Project at a glance" */}
            <div className="lg:col-span-5 min-w-0" data-reveal="card">
              <div className="relative rounded-[20px] lg:rounded-[24px] bg-[#07161F] text-white p-6 sm:p-8 border border-[#1D3B4C] shadow-[0_16px_36px_-6px_rgba(7,22,31,0.35)] overflow-hidden">
                {/* Subtle Topographical watermark inside card */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10 select-none overflow-hidden"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 200 200" fill="none" stroke="#2DD4BF" strokeWidth="1" className="w-full h-full">
                    <circle cx="180" cy="20" r="40" />
                    <circle cx="180" cy="20" r="70" />
                    <circle cx="180" cy="20" r="100" />
                    <circle cx="180" cy="20" r="130" />
                    <circle cx="180" cy="20" r="160" />
                  </svg>
                </div>

                {/* Card Title */}
                <div className="relative z-10 pb-5 border-b border-white/10">
                  <h3 className={cn(type.h4, tone.headingDark)}>Project at a glance</h3>
                </div>

                {/* 3 Detail Rows */}
                <div className="relative z-10 divide-y divide-white/10">
                  {/* Row 1: Location */}
                  <div className="py-4 flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <MapPin className="w-5 h-5 text-[#2DD4BF] shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="text-xs font-heading font-semibold tracking-[0.12em] text-[#2DD4BF] uppercase block">
                          LOCATION
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                          Salar de Turi, Atacama Region, Chile
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1 shrink-0" aria-hidden="true" />
                  </div>

                  {/* Row 2: Mineral Focus */}
                  <div className="py-4 flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <Layers className="w-5 h-5 text-[#2DD4BF] shrink-0 stroke-[1.75]" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="text-xs font-heading font-semibold tracking-[0.12em] text-[#2DD4BF] uppercase block">
                          MINERAL FOCUS
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                          Lithium brine exploration
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1 shrink-0" aria-hidden="true" />
                  </div>

                  {/* Row 3: Interest Structure */}
                  <div className="pt-4 flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <FileText className="w-5 h-5 text-[#2DD4BF] shrink-0 stroke-[1.75]" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="text-xs font-heading font-semibold tracking-[0.12em] text-[#2DD4BF] uppercase block">
                          INTEREST STRUCTURE
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                          2% net smelter return royalty on Summit Nanotech&apos;s share of any future production
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1 shrink-0" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. PANORAMIC WIDE LANDSCAPE BANNER (SALAR DE TURI · CHILE)
         ========================================================= */}
      <section className="section-y pt-0">
        <Container>
          <div className="relative rounded-[20px] lg:rounded-[24px] overflow-hidden aspect-[21/9] sm:aspect-[24/9] min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] shadow-xl border border-[#DDE3E3]/70 bg-[#0B1F2A] group">
            {/* Panoramic Andean Salt Flat Photo */}
            <MediaReveal>
              <Image
                src="/images/salar-turi-panoramic-landscape.jpg"
                alt="Panoramic landscape of Salar de Turi lithium brine lagoon and Andean mountains in Chile"
                fill
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </MediaReveal>

            {/* Top-Left Pill Badge: SALAR DE TURI · CHILE */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-md">
                <span className="w-2.5 h-[2px] bg-[#0B1F2A] rounded-full inline-block" aria-hidden="true" />
                <span>SALAR DE TURI &nbsp;·&nbsp; CHILE</span>
              </span>
            </div>

            {/* Bottom-Right Frosted Glass Card */}
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-10 sm:max-w-xs p-4 sm:p-5 rounded-xl bg-[#07161F]/80 backdrop-blur-md border border-white/10 text-white shadow-2xl">
              <p className="text-sm text-[#DDE3E3] leading-relaxed">
                High-altitude landscape of the Lithium Triangle
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. "Why lithium brine matters" / 3-STEP PROCESS STRIP
         ========================================================= */}
      <section className="section-y bg-white border-t border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left title & summary */}
            <div className="lg:col-span-4 lg:pr-8 lg:border-r border-[#DDE3E3] min-w-0">
              <SectionHeading
                size="compact"
                title="Why lithium brine matters"
                description={
                  <span className="block text-sm sm:text-base">
                    Lithium is a key mineral in the global energy transition, supporting the growing demand for electric vehicles and energy storage.
                  </span>
                }
                className="mb-0"
              />
            </div>

            {/* Right 3 connected steps */}
            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
                {/* Step 01: Critical mineral */}
                <div data-reveal="card" className="relative flex items-start gap-3.5 md:pr-2 min-w-0">
                  <div className="w-11 h-11 rounded-full border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-xs font-heading font-bold text-[#0B1F2A]">
                    01
                  </div>
                  <div className="min-w-0">
                    <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>Critical mineral</h3>
                    <p className="text-sm text-[#5B6B73] leading-relaxed">
                      Lithium plays an essential role in the transition to a lower-carbon economy.
                    </p>
                  </div>
                  {/* Subtle dotted connector to next step on desktop */}
                  <div className="hidden md:block absolute -right-2.5 top-5 w-4 border-t border-dashed border-[#CBD5D2]" aria-hidden="true" />
                </div>

                {/* Step 02: Regional context */}
                <div data-reveal="card" className="relative flex items-start gap-3.5 md:pr-2 min-w-0">
                  <div className="w-11 h-11 rounded-full border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-xs font-heading font-bold text-[#0B1F2A]">
                    02
                  </div>
                  <div className="min-w-0">
                    <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>Regional context</h3>
                    <p className="text-sm text-[#5B6B73] leading-relaxed">
                      The Lithium Triangle is a globally significant region for lithium brine resources.
                    </p>
                  </div>
                  {/* Subtle dotted connector to next step on desktop */}
                  <div className="hidden md:block absolute -right-2.5 top-5 w-4 border-t border-dashed border-[#CBD5D2]" aria-hidden="true" />
                </div>

                {/* Step 03: Royalty exposure */}
                <div data-reveal="card" className="flex items-start gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-full border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-xs font-heading font-bold text-[#0B1F2A]">
                    03
                  </div>
                  <div className="min-w-0">
                    <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>Royalty exposure</h3>
                    <p className="text-sm text-[#5B6B73] leading-relaxed">
                      A 2% NSR royalty provides potential long-term value with exposure to future production, subject to project development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM CALL-TO-ACTION BAND
         ========================================================= */}
      <section className="section-y relative overflow-hidden bg-[#0B1F2A] text-white border-t border-[#1D3B4C]">
        {/* Panoramic Andean Desert Sunset Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/salar-turi-sunset-banner.jpg"
            alt="Golden hour sunset over Salar de Turi mountains and reflective salt lake"
            fill
            sizes="100vw"
            className="object-cover object-[center_45%] opacity-65 brightness-95 contrast-110"
          />
          {/* Multi-stop Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#0B1F2A]/75 to-[#07161F]/80" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            dark
            size="compact"
            eyebrow="CHILEAN LITHIUM ROYALTY"
            title="Explore our wider project portfolio"
            description="Discover how our New Zealand and Chilean assets fit together in our investment strategy."
            className="mb-8"
          />
          <div data-reveal>
            <Button href="/projects" variant="primary" size="md">
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
