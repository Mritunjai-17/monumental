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
import {
  ArrowRight,
  MapPin,
  BarChart3,
  Settings,
  Layers,
  Flame,
  FileText,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'New Zealand Energy Projects | Taranaki Basin Oil & Gas',
  description:
    'Monumental Energy is the 3rd largest shareholder of New Zealand Energy Corp. (NZEC) with 1.2M shares. 50% joint-venture interest in the Waihapa Production Station, a 45 mmcf/d TAWN gas facility, and pipeline networks in the Taranaki Basin.',
  path: '/projects/new-zealand',
});

/** Oil barrel / storage vessel icon */
const BarrelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

export default function NewZealandProjectPage() {
  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="page-intro-y relative overflow-hidden">
        {/* Subtle Topographical Elevation Contour Background */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/40 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[420px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 lg:pr-6 min-w-0">
              <Eyebrow className="hero-eyebrow">NEW ZEALAND &nbsp;·&nbsp; OIL &amp; GAS</Eyebrow>

              <KineticHeading
                as="h1"
                text={'New Zealand\nEnergy Projects'}
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                Monumental Energy holds a substantial strategic position in New Zealand Energy Corp. (NZEC) and associated joint-venture assets in the Taranaki Basin, offering direct exposure to established processing infrastructure and near-term production.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3] bg-[#0B1F2A]">
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
          2. 4-METRIC EXECUTIVE STAT STRIP (HOLDING, INFRASTRUCTURE, VALUATION, BASIN)
         ========================================================= */}
      <section className="section-y-compact bg-white border-y border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DDE3E3]">
            {/* Metric 1: EQUITY POSITION */}
            <div className="flex items-center gap-4 min-w-0 pb-4 sm:pb-0 sm:pr-5">
              <div className="w-11 h-11 rounded-xl border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <BarChart3 className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block">
                  EQUITY HOLDING
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  1.2M Shares
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  3rd largest shareholder ($0.46 cost base)
                </span>
              </div>
            </div>

            {/* Metric 2: ASSET INTEREST */}
            <div className="flex items-center gap-4 min-w-0 py-4 sm:py-0 sm:px-5">
              <div className="w-11 h-11 rounded-xl border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <Settings className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block">
                  PRODUCTION HUB
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  50% Joint Venture
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Waihapa Production Station (TAWN)
                </span>
              </div>
            </div>

            {/* Metric 3: REPLACEMENT VALUE */}
            <div className="flex items-center gap-4 min-w-0 py-4 sm:py-0 sm:px-5">
              <div className="w-11 h-11 rounded-xl border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <Layers className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block">
                  ASSET VALUATION
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  &gt;$50M Replacement
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Installed plant &amp; connected pipeline grid
                </span>
              </div>
            </div>

            {/* Metric 4: SEDIMENTARY BASIN */}
            <div className="flex items-center gap-4 min-w-0 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-11 h-11 rounded-xl border border-[#CBD5D2] bg-[#F5F6F1] flex items-center justify-center shrink-0 text-[#1F6F78]">
                <MapPin className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78] block">
                  BASIN LOCATION
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight mt-0.5">
                  Taranaki Basin
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  New Zealand&apos;s sole producing hydrocarbon basin
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. REGIONAL ENERGY OPPORTUNITY & STRATEGIC POSITION
         ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & Narrative Copy */}
            <div className="lg:col-span-7 min-w-0">
              <Eyebrow>Strategic Investment &amp; Partnership</Eyebrow>
              <KineticHeading
                as="h2"
                text="A regional energy opportunity"
                className={cn(type.h2, tone.headingLight, 'mb-6')}
              />

              <div data-reveal className="space-y-4 text-base sm:text-lg leading-[1.6] text-[#5B6B73] max-w-2xl">
                <p>
                  Monumental Energy is the <strong>3rd largest shareholder of New Zealand Energy Corp. (NZEC)</strong>, holding <strong>1,200,000 common shares</strong> acquired at a <strong>$0.46 CAD cost base</strong>.
                </p>
                <p>
                  New Zealand Energy Corp. is an onshore hydrocarbon producer controlling substantial permitted acreage across the Taranaki Basin—New Zealand’s only commercial petroleum and gas producing sedimentary basin.
                </p>
                <p>
                  With a <strong>50% joint-venture ownership stake in the Waihapa Production Station</strong>, the partnership can rapidly tie in near-term well workovers and sell natural gas and oil directly into active domestic industrial grids without constructing costly greenfield treatment systems.
                </p>
              </div>
            </div>

            {/* Right: Dark Card "Asset & Holding Overview" */}
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
                <div className="relative z-10 pb-4 border-b border-white/10 mb-2">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#2DD4BF] block mb-1">
                    PORTFOLIO OVERVIEW
                  </span>
                  <h3 className={cn(type.h4, tone.headingDark)}>Asset &amp; Holding Snapshot</h3>
                </div>

                {/* Detail Rows */}
                <div className="relative z-10 divide-y divide-white/10">
                  {/* Row 1: Equity Stake */}
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-xs text-[#DDE3E3]/70 uppercase font-heading font-semibold tracking-wider block">
                        EQUITY HOLDING
                      </span>
                      <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                        1.2M Shares (3rd Largest Holder)
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#1F6F78]/40 border border-[#2DD4BF]/30 text-[#2DD4BF]">
                      $0.46 Cost Base
                    </span>
                  </div>

                  {/* Row 2: Production Station */}
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-xs text-[#DDE3E3]/70 uppercase font-heading font-semibold tracking-wider block">
                        FACILITY OWNERSHIP
                      </span>
                      <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                        Waihapa Station (50% JV Interest)
                      </span>
                    </div>
                    <span className="text-xs text-[#DDE3E3]/80">TAWN Plant</span>
                  </div>

                  {/* Row 3: Active Campaigns */}
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-xs text-[#DDE3E3]/70 uppercase font-heading font-semibold tracking-wider block">
                        KEY CATALYST
                      </span>
                      <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                        Tariki-5 Well Drilling Campaign
                      </span>
                    </div>
                    <span className="text-xs text-[#B7E34A]">High Impact</span>
                  </div>

                  {/* Row 4: Research Report */}
                  <div className="pt-3.5 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-xs text-[#DDE3E3]/70 uppercase font-heading font-semibold tracking-wider block">
                        ANALYST COVERAGE
                      </span>
                      <span className="text-white font-medium text-sm sm:text-base leading-snug mt-0.5 block">
                        Auctus Advisors Research Report
                      </span>
                    </div>
                    <span className="text-xs text-[#DDE3E3]/80">Initiated June 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. WAIHAPA PRODUCTION STATION: TECHNICAL INFRASTRUCTURE SPECS
         ========================================================= */}
      <section className="section-y bg-white border-y border-[#DDE3E3]">
        <Container>
          <div className="mb-10">
            <Eyebrow>Processing Infrastructure &amp; Logistics</Eyebrow>
            <h2 className={cn(type.h2, tone.headingLight, 'mb-3')}>
              Waihapa Production Station Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B73] max-w-2xl leading-relaxed">
              New Zealand Energy Corp.’s 50% interest in the Waihapa complex encompasses fully permitted gas processing, deep oil pipeline export links, and regional gathering lines valued at over $50M in replacement cost.
            </p>
          </div>

          {/* 6 Technical Infrastructure Specification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Spec 1: TAWN Facility */}
            <div data-reveal="card" className="p-6 rounded-[20px] bg-[#FAFBF9] border border-[#E8EDE9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                    GAS PROCESSING
                  </span>
                  <span className="font-heading text-xs text-[#5B6B73]">TAWN Facility</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-2">
                  45 mmcf/d Gas Capacity
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  Full gas processing, high-pressure gas compression, and LPG extraction facility capable of conditioning raw field gas for direct sales delivery.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>50% JV Interest</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">Stratford Tied</span>
              </div>
            </div>

            {/* Spec 2: Stratford Sales Pipeline */}
            <div data-reveal="card" className="p-6 rounded-[20px] bg-[#FAFBF9] border border-[#E8EDE9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                    GAS SALES LINE
                  </span>
                  <span className="font-heading text-xs text-[#5B6B73]">8-inch High-Pressure</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-2">
                  51-km Sales Pipeline
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  Connects the Waihapa Production Station directly to the Stratford Gas Power Generation Plant and terminates in the deepwater port city of New Plymouth.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>Transmission</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">Direct Industrial Delivery</span>
              </div>
            </div>

            {/* Spec 3: Oil Sales Pipeline to Omata */}
            <div data-reveal="card" className="p-6 rounded-[20px] bg-[#FAFBF9] border border-[#E8EDE9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                    CRUDE EXPORT
                  </span>
                  <span className="font-heading text-xs text-[#5B6B73]">Omata Tank Farm</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-2">
                  49-km Oil Export Line
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  Dedicated trunkline capable of transporting up to 15,500 barrels per day from Waihapa Station directly to the regional coastal Omata storage facility.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>Throughput</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">15,500 bbl/d Flow</span>
              </div>
            </div>

            {/* Spec 4: Processing Capacity */}
            <div data-reveal="card" className="p-6 rounded-[20px] bg-[#FAFBF9] border border-[#E8EDE9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                    TREATMENT TRAIN
                  </span>
                  <span className="font-heading text-xs text-[#5B6B73]">Liquid Handling</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-2">
                  25,000 bbl/d Oil Capacity
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  Substantial installed oil processing throughput supported by 70 tonne/day liquid extraction equipment, enabling immediate scaling upon new well tie-ins.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>Separation</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">70 t/d Liquid Recovery</span>
              </div>
            </div>

            {/* Spec 5: Gathering Grid & Gas Lift */}
            <div data-reveal="card" className="p-6 rounded-[20px] bg-[#FAFBF9] border border-[#E8EDE9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                    FIELD CONNECTIONS
                  </span>
                  <span className="font-heading text-xs text-[#5B6B73]">Gas Lift Lines</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-2">
                  59 km Gathering Lines
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  Extensive intra-field mixed oil and gas pipelines with integrated gas-lift supply lines to optimize production pressure in low-pressure reservoir intervals.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>Network</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">Continuous Grid</span>
              </div>
            </div>

            {/* Spec 6: Water Disposal & Replacement Value */}
            <div data-reveal="card" className="p-6 rounded-[20px] bg-[#FAFBF9] border border-[#E8EDE9] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                    ENVIRONMENTAL COMPLIANCE
                  </span>
                  <span className="font-heading text-xs text-[#5B6B73]">Subsurface Injection</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1F2A] mb-2">
                  18,000 bbl/d Water Disposal
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  Permitted deepwater disposal injection infrastructure ensuring environmentally sound operations. Overall complex replacement value exceeds $50M NZD.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                <span>Valuation</span>
                <span className="font-heading font-medium text-xs text-[#1F6F78]">&gt;$50M Replacement</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. COMMERCIAL DRIVERS: DOMESTIC PRICING & TARIKI-5 CAMPAIGN
         ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* PILLAR 1: DOMESTIC GAS PRICING ADVANTAGE */}
            <div data-reveal="card" className="lg:col-span-6 min-w-0 flex flex-col">
              <div className="h-full rounded-[20px] bg-white border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                      COMMERCIAL DRIVER 01
                    </span>
                    <span className="font-heading text-xs text-[#5B6B73]">Domestic NZ Market</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] mb-3">
                    Over 5x North American Gas Realization
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-6">
                    <p>
                      <strong>Structural Island Supply Deficit:</strong> Unlike North American producers impacted by regional pipeline bottlenecks, New Zealand operates an isolated domestic energy market experiencing severe gas supply contraction.
                    </p>
                    <p>
                      <strong>Immediate Local Offtake:</strong> Natural gas produced in Taranaki is fed directly into local power generation and heavy industrial manufacturing, commanding spot domestic realizations <strong>up to 5x higher</strong> than North American Henry Hub benchmarks.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E8EDE9] bg-[#FAFBF9] p-4 sm:p-5">
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-[11px] text-[#1F6F78] block mb-2">
                      Key Economic Differentiators
                    </span>
                    <ul className="space-y-2 text-xs text-[#5B6B73]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0 mt-0.5" />
                        <span>Immediate local cash settlement without long LNG transport corridors.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0 mt-0.5" />
                        <span>Direct pipeline tie-in eliminates multi-million-dollar compression investments.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                  <span>Offtake: Local Industrial &amp; Power Generation</span>
                  <span className="font-heading font-medium text-xs text-[#1F6F78]">Zero LNG Freight Discount</span>
                </div>
              </div>
            </div>

            {/* PILLAR 2: DRILLING & WELL WORKOVER CATALYSTS */}
            <div data-reveal="card" className="lg:col-span-6 min-w-0 flex flex-col">
              <div className="h-full rounded-[20px] bg-white border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                      COMMERCIAL DRIVER 02
                    </span>
                    <span className="font-heading text-xs text-[#5B6B73]">Development Pipeline</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] mb-3">
                    Tariki-5 Well Campaign &amp; Recompletions
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-6">
                    <p>
                      <strong>Tariki-5 Well Target:</strong> New Zealand Energy Corp. plans to drill the high-impact Tariki-5 well (subject to financing), targeting substantial gas and condensate reserves within proven structures.
                    </p>
                    <p>
                      <strong>Active Well Reworking:</strong> Field teams are systematically diagnostic logging, pressure testing, and perforating candidate production intervals across previously producing wells to achieve immediate flush production.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E8EDE9] bg-[#FAFBF9] p-4 sm:p-5">
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-[11px] text-[#1F6F78] block mb-2">
                      Independent Analyst Verification
                    </span>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-heading font-bold text-xs text-[#0B1F2A] block">
                          Auctus Advisors Research Coverage
                        </span>
                        <p className="text-xs text-[#5B6B73] mt-0.5">
                          Initiated independent capital research on New Zealand Energy Corp. on June 12, 2024, examining Taranaki field economics and Tariki-5 target potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                  <span>Operational Program: Recompletions + Drilling</span>
                  <span className="font-heading font-medium text-xs text-[#1F6F78]">Auctus Advisors (June 2024)</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. PANORAMIC WIDE LANDSCAPE BANNER (TARANAKI BASIN)
         ========================================================= */}
      <section className="section-y pt-0">
        <Container>
          <div className="relative rounded-[20px] lg:rounded-[24px] overflow-hidden aspect-[21/9] sm:aspect-[24/9] min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] shadow-xl border border-[#DDE3E3]/70 bg-[#0B1F2A] group">
            {/* Aerial Coastline & Facility Photo */}
            <MediaReveal>
              <Image
                src="/images/taranaki-panoramic-coast.jpg"
                alt="Aerial view of Taranaki coastal plains, ocean, production facilities and Mount Taranaki"
                fill
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </MediaReveal>

            {/* Top-Left Pill Badge: TARANAKI BASIN */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-md">
                <span className="w-2.5 h-[2px] bg-[#0B1F2A] rounded-full inline-block" aria-hidden="true" />
                <span>TARANAKI BASIN · NEW ZEALAND</span>
              </span>
            </div>

            {/* Bottom-Right Frosted Glass Card */}
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-10 sm:max-w-xs p-4 sm:p-5 rounded-xl bg-[#07161F]/80 backdrop-blur-md border border-white/10 text-white shadow-2xl">
              <p className="text-sm text-[#DDE3E3] leading-relaxed">
                Established hydrocarbon province connected directly to power utilities and industrial manufacturing off-takers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          7. BOTTOM CALL-TO-ACTION BAND
         ========================================================= */}
      <section className="section-y relative overflow-hidden bg-[#0B1F2A] text-white border-t border-[#1D3B4C]">
        {/* Golden Sunset Panoramic Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/taranaki-sunset-banner.jpg"
            alt="Golden hour sunset over Mount Taranaki with drilling rig"
            fill
            sizes="100vw"
            className="object-cover object-[center_40%] opacity-65 brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#0B1F2A]/75 to-[#07161F]/80" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div data-reveal="fade" className="min-w-0 max-w-2xl">
              <Eyebrow dark>STAY INFORMED</Eyebrow>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
                Follow New Zealand operational milestones
              </h2>
              <p className="text-sm text-[#DDE3E3]/80">
                Receive the latest engineering updates, production news releases, and regulatory filings for our Taranaki Basin assets.
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
