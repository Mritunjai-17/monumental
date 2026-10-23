import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  ArrowRight,
  MapPin,
  FileText,
  Layers,
  Gem,
  Mountain,
  Sun,
  Droplets,
  CloudRain,
  ExternalLink,
  Compass,
} from 'lucide-react';
import { LagunaBlancaIntelligenceRow } from '@/components/sections/LagunaBlancaIntelligenceRow';

export const metadata = constructMetadata({
  title: 'Laguna Blanca Project | Chile Lithium & Cesium Exploration',
  description:
    'An early-stage brine and cesium-sediment project in Chile’s Central Andes. Laguna Blanca is a large, strategically located land package in a proven lithium region of northern Chile.',
  path: '/projects',
});

export default function LagunaBlancaProjectPage() {
  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-10">
        {/* Subtle Topographical Elevation Contour Background (Top Left) */}
        <div
          className="absolute top-0 left-0 w-[550px] sm:w-[650px] lg:w-[750px] h-[550px] pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <svg viewBox="0 0 700 600" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
            <path d="M180 0 C 260 90, 320 170, 500 190 C 600 200, 640 280, 700 320" />
            <path d="M220 0 C 290 100, 360 180, 530 210 C 620 225, 660 320, 700 370" />
            <path d="M260 0 C 330 120, 400 200, 560 230 C 630 245, 670 360, 700 420" />
            <path d="M300 0 C 370 140, 440 220, 590 250 C 650 270, 680 400, 700 470" />
            <path d="M340 0 C 410 160, 480 240, 620 270 C 670 290, 700 440, 700 520" />
          </svg>
        </div>

        {/* Desktop Split Photograph with Soft Inset Fades */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/salar-turi-panoramic-landscape.jpg"
            alt="Laguna Blanca salar and snow-capped Andean volcanoes in northern Chile"
            fill
            sizes="60vw"
            className="object-cover object-center"
            priority
          />
          {/* Dual Gradient Overlay: Left fade into copy + bottom fade into page */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/45 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/20 to-transparent w-full h-full" />

          {/* Location Badge on Image (Bottom Right) */}
          <div className="absolute bottom-6 right-8 z-10 bg-[#0B1F2A]/85 backdrop-blur-md text-white rounded-xl py-2 px-3.5 border border-white/10 shadow-lg flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0" aria-hidden="true" />
            <div className="text-left">
              <span className="font-heading font-bold text-xs text-white block leading-tight">
                Laguna Blanca
              </span>
              <span className="text-[10px] text-[#DDE3E3]/80 block leading-tight">
                Arica y Parinacota Region, Chile
              </span>
            </div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[380px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 min-w-0">
              <Eyebrow className="hero-eyebrow text-[#1F6F78]">
                CHILE &nbsp;·&nbsp; LITHIUM &amp; CESIUM EXPLORATION
              </Eyebrow>

              <KineticHeading
                as="h1"
                text="Laguna Blanca"
                className={cn(type.h1, tone.headingLight, 'mb-3')}
              />

              <p className="text-lg sm:text-xl font-medium text-[#1F6F78] mb-4 leading-snug">
                An early-stage brine and cesium-sediment project in Chile&apos;s Central Andes.
              </p>

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                Laguna Blanca is a large, strategically located land package with lithium brine and cesium-bearing sediment potential, positioned in a proven lithium region of northern Chile.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/salar-turi-panoramic-landscape.jpg"
                  alt="Laguna Blanca salar and Andean volcanic mountains"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 right-3 bg-[#0B1F2A]/85 backdrop-blur-md text-white rounded-lg py-1.5 px-2.5 text-[11px] border border-white/10 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Arica y Parinacota Region, Chile</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. KEY STATS STRIP (4 Metrics + Footnote)
         ========================================================= */}
      <section className="py-2">
        <Container>
          <div
            data-reveal="card"
            className="rounded-[20px] bg-white border border-[#DDE3E3] p-4 sm:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E8EDE9]"
          >
            {/* Stat 1: Total project area */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
              <div className="w-11 h-11 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <rect width="10" height="10" x="7" y="7" rx="1.5" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block leading-tight">
                  12,425 hectares*
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Total project area
                </span>
              </div>
            </div>

            {/* Stat 2: Mining concessions */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-11 h-11 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block leading-tight">
                  51 concessions*
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Mining concessions
                </span>
              </div>
            </div>

            {/* Stat 3: Project stage */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-11 h-11 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight">
                  Early exploration stage
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Lithium brine and cesium-bearing sediments
                </span>
              </div>
            </div>

            {/* Stat 4: Region */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-11 h-11 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight">
                  Arica y Parinacota Region
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Northern Chile
                </span>
              </div>
            </div>

            {/* Disclaimer / Footnote */}
            <div className="pt-4 sm:pt-0 sm:pl-5 lg:col-span-1">
              <p className="text-[11px] text-[#5B6B73] leading-snug">
                * Figures reported on the company&apos;s project page and should be revalidated before publication.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. MIDDLE ROW: MAP (COL 1) | GLANCE CARD (COL 2) | GEOLOGICAL FORMATION (COL 3)
         ========================================================= */}
      <LagunaBlancaIntelligenceRow />

      {/* =========================================================
          4. BOTTOM SECTION: MILESTONES (LEFT) | PROJECT DOCUMENTS (RIGHT)
         ========================================================= */}
      <section className="py-6 sm:py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* -------------------------------------------------------
                LEFT CARD: EXPLORATION & REGULATORY HISTORY
               ------------------------------------------------------- */}
            <div data-reveal="card" className="lg:col-span-7 min-w-0">
              <div className="h-full rounded-[20px] bg-white border border-[#DDE3E3] p-6 sm:p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-1">
                    Exploration &amp; regulatory history
                  </h3>
                  <p className="text-xs text-[#5B6B73] mb-6">
                    Key milestones in the advancement of Laguna Blanca.
                  </p>

                  {/* Horizontal Milestones Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-3 relative">
                    {/* Connecting line behind milestone points */}
                    <div className="hidden sm:block absolute top-5 left-6 right-6 h-[2px] bg-[#E8EDE9] z-0" />

                    {/* Milestone 1: 2022 */}
                    <div className="relative z-10 flex flex-col items-start">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-[#B7E34A] border-2 border-white shadow-sm shrink-0" />
                        <span className="font-heading font-bold text-sm text-[#0B1F2A]">
                          2022
                        </span>
                      </div>
                      <span className="font-heading font-semibold text-xs text-[#0B1F2A] block leading-snug">
                        Surface sampling and exploration work
                      </span>
                      <p className="text-[11px] text-[#5B6B73] mt-1 leading-relaxed">
                        Initial field program completed, including surface sampling (as reported by the company).
                      </p>
                    </div>

                    {/* Milestone 2: June 2024 */}
                    <div className="relative z-10 flex flex-col items-start">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-[#1F6F78] border-2 border-white shadow-sm shrink-0" />
                        <span className="font-heading font-bold text-sm text-[#0B1F2A]">
                          June 2024
                        </span>
                      </div>
                      <span className="font-heading font-semibold text-xs text-[#0B1F2A] block leading-snug">
                        Joint RFI filing
                      </span>
                      <p className="text-[11px] text-[#5B6B73] mt-1 leading-relaxed">
                        Application for a joint Request for Information (RFI) submitted with a third party (as reported by the company).
                      </p>
                    </div>

                    {/* Milestone 3: Current status */}
                    <div className="relative z-10 flex flex-col items-start">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-white border-2 border-[#1F6F78] shadow-sm shrink-0" />
                        <span className="font-heading font-bold text-sm text-[#0B1F2A]">
                          Current status
                        </span>
                      </div>
                      <span className="font-heading font-semibold text-xs text-[#0B1F2A] block leading-snug">
                        Check latest company disclosure
                      </span>
                      <p className="text-[11px] text-[#5B6B73] mt-1 leading-relaxed">
                        Refer to the company&apos;s latest news releases for updates on the RFI process and next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------
                RIGHT CARD: PROJECT DOCUMENTS
               ------------------------------------------------------- */}
            <div data-reveal="card" className="lg:col-span-5 min-w-0">
              <div className="h-full rounded-[20px] bg-white border border-[#DDE3E3] p-6 sm:p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-1">
                    Project documents
                  </h3>
                  <p className="text-xs text-[#5B6B73] mb-6">
                    Access the latest technical updates, announcements and regulatory information.
                  </p>

                  {/* 3 Document Links */}
                  <div className="space-y-3">
                    {/* Doc 1 */}
                    <Link
                      href="/investors/presentation"
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-[#E8EDE9] hover:border-[#1F6F78]/50 hover:bg-[#FAFBF9] transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#EDF3F1] flex items-center justify-center text-[#1F6F78] shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors block leading-tight">
                            Technical updates
                          </span>
                          <span className="text-[11px] text-[#5B6B73] block mt-0.5 leading-snug">
                            Reports and presentations related to Laguna Blanca.
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#1F6F78] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </Link>

                    {/* Doc 2 */}
                    <Link
                      href="/news"
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-[#E8EDE9] hover:border-[#1F6F78]/50 hover:bg-[#FAFBF9] transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#EDF3F1] flex items-center justify-center text-[#1F6F78] shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors block leading-tight">
                            Official announcements
                          </span>
                          <span className="text-[11px] text-[#5B6B73] block mt-0.5 leading-snug">
                            News releases and updates from the company.
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#1F6F78] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </Link>

                    {/* Doc 3 */}
                    <a
                      href="https://www.sedarplus.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-[#E8EDE9] hover:border-[#1F6F78]/50 hover:bg-[#FAFBF9] transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#EDF3F1] flex items-center justify-center text-[#1F6F78] shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors block leading-tight">
                            Investor disclosures
                          </span>
                          <span className="text-[11px] text-[#5B6B73] block mt-0.5 leading-snug">
                            View filings on SEDAR+.
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#5B6B73] group-hover:text-[#1F6F78] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. BOTTOM CALL-TO-ACTION BANNER
         ========================================================= */}
      <section aria-labelledby="laguna-cta-heading" className="section-y relative overflow-hidden bg-[#0B1F2A] text-white border-t border-[#1D3B4C] mt-4">
        {/* Mountain Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/salar-turi-sunset-banner.jpg"
            alt="Panoramic Andean Mountain Landscape"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-45 brightness-90 contrast-115"
          />
          {/* Multi-stop Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#0B1F2A]/80 to-[#07161F]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/80 via-transparent to-[#07161F]/40" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div data-reveal="fade" className="min-w-0 max-w-2xl">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2DD4BF] uppercase block mb-2">
                STAY INFORMED
              </span>
              <h2 id="laguna-cta-heading" className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
                Follow the project&apos;s next milestones
              </h2>
              <p className="text-sm text-[#DDE3E3]/80">
                Get the latest news, announcements and investor updates on Laguna Blanca.
              </p>
            </div>

            <div data-reveal className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <Button href="/news" variant="primary" size="md">
                View latest news
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>

              <Button href="/investors" variant="secondary-dark" size="md">
                Visit investor centre
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
