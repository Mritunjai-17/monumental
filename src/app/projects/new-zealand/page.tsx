import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/seo';
import { ArrowRight, MapPin, BarChart3, Settings } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'New Zealand Energy Projects | Taranaki Basin Oil & Gas',
  description:
    'Monumental Energy’s oil-and-gas interests in the Taranaki Basin, New Zealand, offer exposure to established energy infrastructure and near-term development opportunities.',
  path: '/projects/new-zealand',
});

export default function NewZealandProjectPage() {
  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-6 lg:pb-10">
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
            src="/images/project-new-zealand.jpg"
            alt="New Zealand Taranaki Basin production wellhead with Mount Taranaki"
            fill
            sizes="50vw"
            className="object-cover object-center"
            priority
          />
          {/* Seamless gradient fade into off-white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/40 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[360px] lg:min-h-[420px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 pr-0 lg:pr-6">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                NEW ZEALAND &nbsp;·&nbsp; OIL &amp; GAS
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                New Zealand<br />Energy Projects
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Monumental Energy&apos;s oil-and-gas interests in the Taranaki Basin, New Zealand, offer exposure to established energy infrastructure and near-term development opportunities.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1 mt-4">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/project-new-zealand.jpg"
                  alt="New Zealand Taranaki Basin production wellhead with Mount Taranaki"
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
          2. 3-METRIC STAT STRIP (REGION, FOCUS, OPPORTUNITY)
         ========================================================= */}
      <section className="border-y border-[#DDE3E3] bg-[#F5F6F1] py-6 sm:py-7 my-6 lg:my-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDE3E3] gap-6 md:gap-0">
            {/* Metric 1: REGION */}
            <div className="flex items-center gap-4 md:pr-6 lg:pr-10 pt-2 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#CBD5D2] bg-white flex items-center justify-center shrink-0 shadow-sm text-[#1F6F78]">
                <MapPin className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-[11px] font-heading font-semibold tracking-[0.14em] text-[#1F6F78] uppercase block">
                  REGION
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  Taranaki Basin
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  New Zealand
                </span>
              </div>
            </div>

            {/* Metric 2: FOCUS */}
            <div className="flex items-center gap-4 md:px-6 lg:px-10 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#CBD5D2] bg-white flex items-center justify-center shrink-0 shadow-sm text-[#1F6F78]">
                {/* Cylindrical Storage Barrel / Vessel Icon */}
                <svg className="w-5 h-5 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-heading font-semibold tracking-[0.14em] text-[#1F6F78] uppercase block">
                  FOCUS
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  Oil &amp; Gas
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Conventional energy
                </span>
              </div>
            </div>

            {/* Metric 3: OPPORTUNITY */}
            <div className="flex items-center gap-4 md:pl-6 lg:pl-10 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#CBD5D2] bg-white flex items-center justify-center shrink-0 shadow-sm text-[#1F6F78]">
                <BarChart3 className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div>
                <span className="text-[11px] font-heading font-semibold tracking-[0.14em] text-[#1F6F78] uppercase block">
                  OPPORTUNITY
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  Production &amp; Development
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Leveraging existing infrastructure
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. TWO-COLUMN SECTION (A regional energy opportunity & Dark Card)
         ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & Narrative Copy */}
            <div className="lg:col-span-7">
              {/* Lime horizontal accent dash */}
              <div className="w-9 h-1 bg-[#B7E34A] rounded-full mb-5" />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0B1F2A] leading-[1.15] tracking-[-0.01em] mb-6">
                A regional energy opportunity
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#5B6B73] leading-relaxed max-w-2xl font-normal">
                <p>
                  The Taranaki Basin is one of New Zealand&apos;s most established oil and gas regions, with a history of production and existing infrastructure that supports future development.
                </p>
                <p>
                  Monumental Energy is focused on evaluating and advancing its interests in New Zealand Energy Corp. and associated joint-venture assets, targeting low-risk recompletion and near-term production opportunities.
                </p>
              </div>
            </div>

            {/* Right: Dark Card "Project at a glance" */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[20px] bg-[#07161F] text-white p-7 sm:p-9 border border-[#1D3B4C] shadow-[0_16px_36px_-6px_rgba(7,22,31,0.35)] overflow-hidden">
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

                {/* Card Title with lime dash */}
                <div className="relative z-10 flex items-center gap-3 pb-5 border-b border-white/10">
                  <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-white">
                    Project at a glance
                  </h3>
                </div>

                {/* 3 Detail Rows */}
                <div className="relative z-10 divide-y divide-white/10 text-sm">
                  {/* Row 1: Location */}
                  <div className="py-4 flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-3.5">
                      <MapPin className="w-5 h-5 text-[#2DD4BF] shrink-0" />
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-wider text-[#2DD4BF] uppercase block">
                          LOCATION
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base mt-0.5 block">
                          Taranaki Basin, New Zealand
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1 shrink-0" />
                  </div>

                  {/* Row 2: Sector */}
                  <div className="py-4 flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-3.5">
                      {/* Oil Barrel / Cylinder Icon */}
                      <svg className="w-5 h-5 text-[#2DD4BF] shrink-0 stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                      </svg>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-wider text-[#2DD4BF] uppercase block">
                          SECTOR
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base mt-0.5 block">
                          Oil &amp; Gas
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1 shrink-0" />
                  </div>

                  {/* Row 3: Approach */}
                  <div className="pt-4 flex items-center justify-between gap-4 group">
                    <div className="flex items-center gap-3.5">
                      <Settings className="w-5 h-5 text-[#2DD4BF] shrink-0" />
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-heading font-semibold tracking-wider text-[#2DD4BF] uppercase block">
                          APPROACH
                        </span>
                        <span className="text-white font-medium text-sm sm:text-base mt-0.5 block">
                          Asset development and exploration
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2DD4BF] transition-transform group-hover:translate-x-1 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. PANORAMIC WIDE LANDSCAPE BANNER (TARANAKI BASIN)
         ========================================================= */}
      <section className="mb-14 sm:mb-18 lg:mb-22">
        <Container>
          <div className="relative rounded-[18px] lg:rounded-[22px] overflow-hidden aspect-[21/9] sm:aspect-[24/9] min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] shadow-xl border border-[#DDE3E3]/70 group">
            {/* Aerial Coastline & Facility Photo */}
            <Image
              src="/images/taranaki-panoramic-coast.jpg"
              alt="Aerial view of Taranaki coastal plains, ocean, production facilities and Mount Taranaki"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              priority
            />

            {/* Top-Left Pill Badge: TARANAKI BASIN */}
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-md">
                <span className="w-2.5 h-[2px] bg-[#0B1F2A] rounded-full inline-block" />
                <span>TARANAKI BASIN</span>
              </span>
            </div>

            {/* Bottom-Right Frosted Glass Card */}
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-10 max-w-[280px] sm:max-w-xs p-4 sm:p-5 rounded-xl bg-[#07161F]/80 backdrop-blur-md border border-white/10 text-white shadow-2xl">
              <p className="text-xs sm:text-sm text-[#DDE3E3] leading-relaxed font-normal">
                Established energy region with existing infrastructure and access to key markets.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. "Our focus" / 3-STEP PROCESS STRIP (Assess, Develop, Advance)
         ========================================================= */}
      <section className="py-10 sm:py-14 border-y border-[#DDE3E3] mb-14 sm:mb-18 lg:mb-22">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left title & summary */}
            <div className="lg:col-span-4 lg:pr-8 lg:border-r border-[#DDE3E3]">
              <h3 className="font-heading font-bold text-2xl lg:text-[26px] text-[#0B1F2A] tracking-tight mb-2">
                Our focus
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                A disciplined approach to unlocking value from our New Zealand oil and gas assets, supported by existing infrastructure and a proven operating environment.
              </p>
            </div>

            {/* Right 3 connected steps */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
                {/* Step 01: Assess */}
                <div className="relative flex items-start gap-3.5 pr-2">
                  <div className="w-11 h-11 rounded-full border border-[#CBD5D2] bg-white flex items-center justify-center shrink-0 shadow-sm text-xs font-heading font-bold text-[#0B1F2A]">
                    01
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] leading-snug mb-1">
                      Assess
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
                      Evaluate opportunities across existing assets and work programmes.
                    </p>
                  </div>
                  {/* Subtle dotted connector to next step on desktop */}
                  <div className="hidden md:block absolute -right-2 top-5 w-4 border-t border-dashed border-[#CBD5D2]" />
                </div>

                {/* Step 02: Develop */}
                <div className="relative flex items-start gap-3.5 pr-2">
                  <div className="w-11 h-11 rounded-full border border-[#CBD5D2] bg-white flex items-center justify-center shrink-0 shadow-sm text-xs font-heading font-bold text-[#0B1F2A]">
                    02
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] leading-snug mb-1">
                      Develop
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
                      Advance priority opportunities through technical work and planning.
                    </p>
                  </div>
                  {/* Subtle dotted connector to next step on desktop */}
                  <div className="hidden md:block absolute -right-2 top-5 w-4 border-t border-dashed border-[#CBD5D2]" />
                </div>

                {/* Step 03: Advance */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-full border border-[#CBD5D2] bg-white flex items-center justify-center shrink-0 shadow-sm text-xs font-heading font-bold text-[#0B1F2A]">
                    03
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] leading-snug mb-1">
                      Advance
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
                      Target near-term production opportunities where appropriate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM CALL-TO-ACTION BANNER
         ========================================================= */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="relative rounded-[18px] lg:rounded-[22px] overflow-hidden min-h-[200px] sm:min-h-[220px] shadow-2xl border border-[#1D3B4C] bg-[#07161F]">
            {/* Golden Sunset Panoramic Photo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/taranaki-sunset-banner.jpg"
                alt="Golden hour sunset over Mount Taranaki with drilling rig"
                fill
                sizes="100vw"
                className="object-cover object-[center_40%] opacity-65 brightness-95 contrast-110"
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
                    NEW ZEALAND PORTFOLIO
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-normal text-white leading-tight tracking-[-0.01em] mb-2">
                  Explore our New Zealand portfolio
                </h2>
                <p className="text-xs sm:text-sm text-[#DDE3E3] font-normal">
                  Learn more about our oil and gas assets and investment strategy.
                </p>
                <div className="mt-5">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-md group"
                  >
                    <span>View All Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
