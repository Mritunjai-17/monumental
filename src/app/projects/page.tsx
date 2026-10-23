import React from 'react';
import Link from 'next/link';
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
import { ArrowRight, Layers, MapPin } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Our Projects & Investments',
  description:
    'A focused portfolio of energy opportunities combining near-term conventional energy exposure in New Zealand with long-term lithium royalty exposure in Chile.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden">
      {/* Subtle Topographical Elevation Contour Background (Top Right) */}
      <div
        className="absolute top-0 right-0 w-[550px] sm:w-[650px] lg:w-[750px] h-[550px] pointer-events-none opacity-[0.07] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 700 600" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M180 0 C 260 90, 320 170, 500 190 C 600 200, 640 280, 700 320" />
          <path d="M220 0 C 290 100, 360 180, 530 210 C 620 225, 660 320, 700 370" />
          <path d="M260 0 C 330 120, 400 200, 560 230 C 630 245, 670 360, 700 420" />
          <path d="M300 0 C 370 140, 440 220, 590 250 C 650 270, 680 400, 700 470" />
          <path d="M340 0 C 410 160, 480 240, 620 270 C 670 290, 700 440, 700 520" />
          <path d="M380 0 C 450 180, 520 260, 650 290" />
          <path d="M420 0 C 490 200, 560 280, 700 310" />
          <path d="M140 30 C 220 110, 280 190, 460 210 C 560 220, 600 290, 650 330" />
          <path d="M100 70 C 180 150, 240 230, 420 250 C 520 260, 560 330, 610 380" />
          <path d="M60 120 C 140 200, 200 280, 380 300 C 480 310, 520 380, 570 430" />
          <path d="M20 180 C 100 260, 160 340, 340 360 C 440 370, 480 440, 530 490" />
        </svg>
      </div>

      {/* =========================================================
          1. HERO / PAGE TITLE SECTION
         ========================================================= */}
      <section className="page-intro-y relative z-10">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="hero-eyebrow">ENERGY PORTFOLIO</Eyebrow>
            <KineticHeading
              as="h1"
              text="Our Projects & Investments"
              className={cn(type.h1, tone.headingLight, 'mb-5')}
            />
            <p className={cn('hero-copy max-w-2xl', type.lead, tone.mutedLight)}>
              A focused portfolio of energy opportunities combining near-term conventional energy exposure in New Zealand with long-term lithium royalty exposure in Chile.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. PROJECT 01: NEW ZEALAND OIL & GAS INVESTMENT
         ========================================================= */}
      <section aria-labelledby="project-nz-heading" className="section-y pt-0 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Project Image */}
            <div className="lg:col-span-7 min-w-0">
              <div className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden aspect-[16/10.5] shadow-[0_12px_36px_-6px_rgba(11,31,42,0.14)] bg-[#07161F] border border-[#DDE3E3]/80">
                <MediaReveal>
                  <Image
                    src="/images/about-hero-taranaki.jpg"
                    alt="New Zealand Oil & Gas facility in Taranaki Basin with Mount Taranaki"
                    fill
                    sizes="(min-width: 1200px) 660px, (min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />
                </MediaReveal>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/70 via-transparent to-[#07161F]/20 pointer-events-none" />

                {/* Top-Left Pill Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-sm">
                    NEAR-TERM PRODUCTION
                  </span>
                </div>

                {/* Bottom Watermark: 01 & NEW ZEALAND */}
                <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6 z-10 flex items-end justify-between pointer-events-none select-none" aria-hidden="true">
                  <span className="font-heading font-light text-5xl sm:text-6xl lg:text-[68px] text-white/95 leading-none drop-shadow-md">
                    01
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-[0.22em] text-[#B7E34A] uppercase drop-shadow">
                    NEW ZEALAND
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Content & Metrics */}
            <div className="lg:col-span-5 min-w-0 flex flex-col justify-center" data-reveal="fade">
              <Eyebrow>OIL &amp; GAS &nbsp;·&nbsp; TARANAKI BASIN, NEW ZEALAND</Eyebrow>

              <KineticHeading
                as="h2"
                id="project-nz-heading"
                text={'New Zealand\nOil & Gas Investment'}
                className={cn(type.h2Compact, tone.headingLight, 'mb-4')}
              />

              <p className="text-base text-[#5B6B73] leading-relaxed mb-8">
                Strategic holding in New Zealand Energy Corp. and associated joint-venture assets targeting low-risk recompletion and near-term production.
              </p>

              {/* 3 Metric Columns with Dividers */}
              <div className="grid grid-cols-3 divide-x divide-[#DDE3E3] py-1 mb-8">
                {/* Metric 1 */}
                <div className="pr-3 min-w-0">
                  {/* Derrick / Oil Rig Icon */}
                  <svg className="w-5 h-5 text-[#1F6F78] mb-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 22h16" />
                    <path d="M7 22l4-18h2l4 18" />
                    <path d="M8 15h8" />
                    <path d="M9.5 9h5" />
                    <path d="M12 2v2" />
                  </svg>
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] block leading-tight">
                    Conventional
                  </span>
                  <span className="text-xs sm:text-sm text-[#5B6B73] block mt-0.5">
                    Oil &amp; Gas
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="px-3 min-w-0">
                  {/* Bar Chart Icon */}
                  <svg className="w-5 h-5 text-[#1F6F78] mb-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </svg>
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] block leading-tight">
                    Near-term
                  </span>
                  <span className="text-xs sm:text-sm text-[#5B6B73] block mt-0.5">
                    Opportunities
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="pl-3 min-w-0">
                  {/* Partnership / Handshake Icon */}
                  <svg className="w-5 h-5 text-[#1F6F78] mb-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L14 10.6" />
                    <path d="m13 7 1.6-1.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L3.6 7.6a2 2 0 0 0 0 2.8l4 4a2 2 0 0 0 2.8 0L13 12" />
                  </svg>
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] block leading-tight">
                    Strategic
                  </span>
                  <span className="text-xs sm:text-sm text-[#5B6B73] block mt-0.5">
                    Partnership
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href="/projects/new-zealand"
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] group transition-colors"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. PROJECT 02: SALAR DE TURI LITHIUM PROJECT
         ========================================================= */}
      <section aria-labelledby="project-cl-heading" className="section-y bg-white border-t border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Content & Metrics */}
            <div className="lg:col-span-5 min-w-0 order-2 lg:order-1 flex flex-col justify-center" data-reveal="fade">
              <Eyebrow>LITHIUM ROYALTY &nbsp;·&nbsp; CHILE</Eyebrow>

              <div className="flex items-start flex-wrap gap-x-3 gap-y-2 mb-4">
                <KineticHeading
                  as="h2"
                  id="project-cl-heading"
                  text={'Salar de Turi\nLithium Project'}
                  className={cn(type.h2Compact, tone.headingLight)}
                />
                <span className="px-3 py-1 rounded-full border border-[#B7E34A] bg-[#B7E34A]/15 text-[#0B1F2A] font-heading font-bold text-xs tracking-wide mt-1.5">
                  2% NSR
                </span>
              </div>

              <p className="text-base text-[#5B6B73] leading-relaxed mb-8">
                2% Net Smelter Return (NSR) royalty across 8,500 hectares of claims located in the South American Lithium Triangle.
              </p>

              {/* 3 Metric Columns with Dividers */}
              <div className="grid grid-cols-3 divide-x divide-[#DDE3E3] py-1 mb-8">
                {/* Metric 1 */}
                <div className="pr-3 min-w-0">
                  {/* Mountain / Claims Hectares Icon */}
                  <svg className="w-5 h-5 text-[#1F6F78] mb-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] block leading-tight">
                    8,500
                  </span>
                  <span className="text-xs sm:text-sm text-[#5B6B73] block mt-0.5">
                    Hectares
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="px-3 min-w-0">
                  {/* Layers / Lithium Royalty Icon */}
                  <Layers className="w-5 h-5 text-[#1F6F78] mb-2.5 stroke-[1.6]" aria-hidden="true" />
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] block leading-tight">
                    Lithium
                  </span>
                  <span className="text-xs sm:text-sm text-[#5B6B73] block mt-0.5">
                    Royalty
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="pl-3 min-w-0">
                  {/* Location Pin Icon */}
                  <MapPin className="w-5 h-5 text-[#1F6F78] mb-2.5 stroke-[1.6]" aria-hidden="true" />
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] block leading-tight">
                    Atacama
                  </span>
                  <span className="text-xs sm:text-sm text-[#5B6B73] block mt-0.5">
                    Region, Chile
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href="/projects/salar-de-turi"
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] group transition-colors"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right: Project Image */}
            <div className="lg:col-span-7 min-w-0 order-1 lg:order-2">
              <div className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden aspect-[16/10.5] shadow-[0_12px_36px_-6px_rgba(11,31,42,0.14)] bg-[#07161F] border border-[#DDE3E3]/80">
                <MediaReveal>
                  <Image
                    src="/images/project-salar-de-turi.jpg"
                    alt="Salar de Turi Lithium brine lagoon and Andean mountains in Chile"
                    fill
                    sizes="(min-width: 1200px) 660px, (min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </MediaReveal>

                {/* Subtle dark gradient overlay for bottom watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Watermark: 02 —— CHILE */}
                <div className="absolute bottom-4 right-5 sm:bottom-5 sm:right-6 z-10 flex items-center gap-3 pointer-events-none select-none" aria-hidden="true">
                  <span className="font-heading font-light text-5xl sm:text-6xl lg:text-[68px] text-white/95 leading-none drop-shadow-md">
                    02
                  </span>
                  <span className="w-10 h-[1px] bg-white/70" />
                  <span className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-[0.22em] text-white/90 uppercase drop-shadow">
                    CHILE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. OUR PORTFOLIO AT A GLANCE
         ========================================================= */}
      <section aria-labelledby="portfolio-glance-heading" className="section-y-compact border-y border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left title column */}
            <div className="md:col-span-4 lg:col-span-3 min-w-0">
              <SectionHeading
                size="compact"
                eyebrow="OUR PORTFOLIO"
                title="At a Glance"
                id="portfolio-glance-heading"
                className="mb-0"
              />
            </div>

            {/* Middle stat column: 2 Core asset exposures */}
            <div data-reveal="card" className="md:col-span-4 lg:col-span-4 min-w-0 md:border-l border-[#DDE3E3] md:pl-8 lg:pl-10 flex items-start gap-4 lg:gap-5">
              <span className="font-heading font-bold text-6xl sm:text-7xl tracking-[-0.02em] text-[#0B1F2A] leading-none shrink-0 select-none">
                2
              </span>
              <div className="min-w-0">
                <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>
                  Core asset<br />exposures
                </h3>
                <p className="text-sm text-[#5B6B73] leading-relaxed">
                  A balanced portfolio across conventional energy and critical minerals.
                </p>
              </div>
            </div>

            {/* Right stat column: 8,500 Hectares of claims */}
            <div data-reveal="card" className="md:col-span-4 lg:col-span-5 min-w-0 md:border-l border-[#DDE3E3] md:pl-8 lg:pl-10 flex flex-row md:flex-col lg:flex-row items-start gap-4 md:gap-3 lg:gap-5">
              <span className="font-heading font-bold text-5xl sm:text-6xl tracking-[-0.02em] text-[#0B1F2A] leading-none shrink-0 select-none">
                8,500
              </span>
              <div className="min-w-0">
                <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>
                  Hectares<br />of claims
                </h3>
                <p className="text-sm text-[#5B6B73] leading-relaxed">
                  Royalty exposure at Salar de Turi, in the heart of the South American Lithium Triangle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. STRATEGIC LOCATIONS: POSITIONED IN KEY ENERGY REGIONS
         ========================================================= */}
      <section aria-labelledby="strategic-locations-heading" className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left copy */}
            <div className="lg:col-span-5 min-w-0">
              <SectionHeading
                eyebrow="STRATEGIC LOCATIONS"
                title={'Positioned in Key\nEnergy Regions'}
                description="Our assets are located in established energy regions with access to infrastructure and global markets."
                id="strategic-locations-heading"
                className="mb-6"
              />
              <Link
                href="/projects/new-zealand"
                className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] group transition-colors"
              >
                <span>View project details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            {/* Right map vignettes: New Zealand & Chile */}
            <div className="lg:col-span-7 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 items-center justify-items-center">
                {/* Vignette 1: New Zealand */}
                <div data-reveal="card">
                  <Link href="/projects/new-zealand" className="flex flex-col items-center group text-center">
                    <div className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gradient-to-b from-[#EDF2F0] to-[#E2EAE7] border border-[#CCD8D5] shadow-[0_4px_20px_rgba(11,31,42,0.06)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_28px_rgba(11,31,42,0.12)]">
                      {/* SVG Map of New Zealand & surrounding region */}
                      <svg viewBox="0 0 200 200" className="w-full h-full p-2" fill="none" aria-hidden="true">
                        {/* Subtle globe grid rings */}
                        <circle cx="100" cy="100" r="92" stroke="#CBD5D2" strokeWidth="0.7" strokeDasharray="3 3" />
                        <circle cx="100" cy="100" r="62" stroke="#CBD5D2" strokeWidth="0.7" strokeDasharray="2 2" />
                        <circle cx="100" cy="100" r="32" stroke="#CBD5D2" strokeWidth="0.5" strokeDasharray="2 3" />
                        <line x1="100" y1="8" x2="100" y2="192" stroke="#CBD5D2" strokeWidth="0.5" strokeDasharray="2 4" />
                        <line x1="8" y1="100" x2="192" y2="100" stroke="#CBD5D2" strokeWidth="0.5" strokeDasharray="2 4" />

                        {/* Australia East Coast (faint background silhouette) */}
                        <path
                          d="M0 60 C 15 65, 25 80, 28 100 C 30 115, 20 135, 12 150 C 5 160, 0 170, 0 180 Z"
                          fill="#D6DFDC"
                          opacity="0.5"
                        />

                        {/* New Zealand North Island */}
                        <path
                          d="M128 58 C 122 52, 114 56, 112 62 C 110 68, 116 74, 122 80 C 128 86, 134 94, 126 104 C 118 112, 102 110, 94 116 C 88 120, 92 126, 100 128 C 108 130, 116 122, 124 116 C 134 108, 142 96, 138 84 C 136 74, 132 64, 128 58 Z"
                          fill="#1F6F78"
                        />

                        {/* New Zealand South Island */}
                        <path
                          d="M96 118 C 90 124, 82 136, 76 148 C 70 160, 72 170, 80 170 C 88 170, 96 158, 104 146 C 110 138, 112 128, 104 122 C 100 118, 98 116, 96 118 Z"
                          fill="#1F6F78"
                        />

                        {/* Stewart Island */}
                        <circle cx="70" cy="174" r="2.5" fill="#1F6F78" />

                        {/* Taranaki Basin Concession Highlight (Glowing Pulse + Dot) */}
                        <g transform="translate(97, 114)">
                          <circle r="14" fill="#B7E34A" fillOpacity="0.25" className="animate-ping" />
                          <circle r="8" fill="#B7E34A" fillOpacity="0.6" />
                          <circle r="4" fill="#0B1F2A" stroke="#B7E34A" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>

                    <div className="mt-4">
                      <span className={cn(type.h4, tone.headingLight, 'block group-hover:text-[#1F6F78] transition-colors')}>
                        New Zealand
                      </span>
                      <span className="text-sm text-[#5B6B73] block mt-0.5">
                        Taranaki Basin
                      </span>
                      <span className="text-sm text-[#5B6B73] block">
                        Oil &amp; Gas
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Vignette 2: Chile */}
                <div data-reveal="card">
                  <Link href="/projects/salar-de-turi" className="flex flex-col items-center group text-center">
                    <div className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gradient-to-b from-[#EDF2F0] to-[#E2EAE7] border border-[#CCD8D5] shadow-[0_4px_20px_rgba(11,31,42,0.06)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_28px_rgba(11,31,42,0.12)]">
                      {/* SVG Map of South America with Chile highlighted */}
                      <svg viewBox="0 0 200 200" className="w-full h-full p-2" fill="none" aria-hidden="true">
                        {/* Subtle globe grid rings */}
                        <circle cx="100" cy="100" r="92" stroke="#CBD5D2" strokeWidth="0.7" strokeDasharray="3 3" />
                        <circle cx="100" cy="100" r="62" stroke="#CBD5D2" strokeWidth="0.7" strokeDasharray="2 2" />
                        <circle cx="100" cy="100" r="32" stroke="#CBD5D2" strokeWidth="0.5" strokeDasharray="2 3" />
                        <line x1="100" y1="8" x2="100" y2="192" stroke="#CBD5D2" strokeWidth="0.5" strokeDasharray="2 4" />
                        <line x1="8" y1="100" x2="192" y2="100" stroke="#CBD5D2" strokeWidth="0.5" strokeDasharray="2 4" />

                        {/* South America Continent Outline (Faint silhouette) */}
                        <path
                          d="M90 28 C 125 26, 162 42, 178 72 C 188 92, 178 120, 154 140 C 138 152, 118 168, 108 182 C 102 188, 96 186, 94 178 C 90 162, 86 138, 84 108 C 82 88, 74 68, 72 52 C 72 40, 78 30, 90 28 Z"
                          fill="#D6DFDC"
                          opacity="0.65"
                        />

                        {/* Chile Western Ribbon Highlight */}
                        <path
                          d="M93 64 C 96 72, 97 82, 96 94 C 95 110, 93 128, 92 146 C 90 160, 88 172, 93 182 C 91 184, 87 182, 86 176 C 83 164, 84 148, 86 130 C 88 112, 89 94, 87 78 C 85 70, 87 64, 93 64 Z"
                          fill="#1F6F78"
                          stroke="#1F6F78"
                          strokeWidth="1.2"
                        />

                        {/* Salar de Turi Concession Marker (Atacama / Northern Chile) */}
                        <g transform="translate(93, 86)">
                          <circle r="14" fill="#B7E34A" fillOpacity="0.25" className="animate-ping" />
                          <circle r="8" fill="#B7E34A" fillOpacity="0.6" />
                          <circle r="4" fill="#0B1F2A" stroke="#B7E34A" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>

                    <div className="mt-4">
                      <span className={cn(type.h4, tone.headingLight, 'block group-hover:text-[#1F6F78] transition-colors')}>
                        Chile
                      </span>
                      <span className="text-sm text-[#5B6B73] block mt-0.5">
                        Salar de Turi
                      </span>
                      <span className="text-sm text-[#5B6B73] block">
                        Lithium Royalty
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM CALL-TO-ACTION BAND
         ========================================================= */}
      <section aria-labelledby="banner-heading" className="section-y relative overflow-hidden bg-[#0B1F2A] text-white border-t border-[#1D3B4C]">
        {/* Panoramic Mountain Landscape Photo (Mt. Taranaki centered) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-taranaki.jpg"
            alt="Panoramic Mount Taranaki energy landscape"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-55 brightness-90 contrast-125"
          />
          {/* Multi-stop Cinematic Overlay allowing the mountain peak to shine through */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/90 via-[#0B1F2A]/65 to-[#07161F]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/80 via-transparent to-[#07161F]/40" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <SectionHeading
              dark
              size="compact"
              eyebrow="INVEST IN THE ENERGY TRANSITION"
              title="Two Assets. A Longer-Term Perspective."
              id="banner-heading"
              className="mb-0 min-w-0"
            />

            <div data-reveal className="shrink-0">
              <Button href="/investors" variant="primary" size="md">
                Explore Our Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
