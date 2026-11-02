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
  ExternalLink,
  Newspaper,
  ShieldCheck,
  Award,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { LagunaBlancaIntelligenceRow } from '@/components/sections/LagunaBlancaIntelligenceRow';

export const metadata = constructMetadata({
  title: 'Salar De Laguna Blanca | Chile Cesium & Lithium Brine Project',
  description:
    'Laguna Blanca comprises 51 exploration concessions across 12,425 hectares in Chile’s Lithium Triangle, officially designated for Exclusive Private Development. Prospective for high-value cesium formate and low-cost DLE lithium.',
  path: '/projects',
});

export default function LagunaBlancaProjectPage() {
  // Structured Data (JSON-LD) for Search Engine Optimization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Salar De Laguna Blanca',
    description:
      'A 12,425-hectare cesium and lithium brine exploration salar project in the central Andes high desert of northern Chile, declared available for Exclusive Private Development.',
    url: 'https://monumental.energy/projects',
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'CL',
      addressRegion: 'Antofagasta / Central Andes',
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Lithium Triangle (Chile, Argentina, Bolivia)',
    },
  };

  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* Schema.org Structured Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================
          1. HERO SECTION: Split Left Copy & Right Photographic Panel
         ========================================================= */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14">
        {/* Subtle Topographical Elevation Contour Background */}
        <div
          className="absolute top-0 left-0 w-[550px] sm:w-[650px] lg:w-[750px] h-[550px] pointer-events-none opacity-[0.05] select-none z-0 overflow-hidden"
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

        {/* Desktop Photographic Panel */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[56%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/salar-turi-panoramic-landscape.jpg"
            alt="Salar De Laguna Blanca volcanic landscape and high-altitude salar basin in northern Chile"
            fill
            sizes="56vw"
            className="object-cover object-center"
            priority
          />
          {/* Gradients blending photograph seamlessly into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/55 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/20 to-transparent w-full h-full" />

          {/* Location Identifier Badge */}
          <div className="absolute bottom-6 right-8 z-10 bg-[#0B1F2A]/90 backdrop-blur-md text-white rounded-xl py-2.5 px-4 border border-white/10 shadow-lg flex items-center gap-3">
            <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0" aria-hidden="true" />
            <div className="text-left">
              <span className="font-heading font-bold text-xs text-white block leading-tight">
                Salar De Laguna Blanca
              </span>
              <span className="text-[10px] text-[#DDE3E3]/80 block leading-tight mt-0.5">
                Central Andes High Plateau · Chile
              </span>
            </div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:min-h-[440px]">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 min-w-0">
              <Eyebrow className="hero-eyebrow text-[#1F6F78] mb-3">
                CHILE · CENTRAL ANDES · CRITICAL MINERALS
              </Eyebrow>

              <KineticHeading
                as="h1"
                text="Salar De Laguna Blanca"
                className={cn(type.h1, tone.headingLight, 'mb-3')}
              />

              <p className="text-lg sm:text-xl font-medium text-[#1F6F78] mb-5 leading-snug">
                Cesium &amp; Lithium Brine Exploration Project
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#5B6B73] leading-relaxed max-w-xl">
                <p>
                  Occupying an active closed hydrological catchment in northern Chile’s high desert, Laguna Blanca is strategically situated in the <strong>Lithium Triangle</strong>—the world&apos;s premier lithium basin holding over half of global brine reserves.
                </p>
                <p>
                  The asset pairs anomalous lithium concentrations with rare, high-value cesium evaporites, supported by year-round heavy transport access along the paved Route 27CH corridor.
                </p>
              </div>
            </div>

            {/* Mobile / Tablet Image Viewport */}
            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[18px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/salar-turi-panoramic-landscape.jpg"
                  alt="Salar De Laguna Blanca high-altitude volcanic landscape"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 right-3 bg-[#0B1F2A]/90 backdrop-blur-md text-white rounded-lg py-1.5 px-3 text-[11px] border border-white/10 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Central Andes, Chile</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. EXECUTIVE SNAPSHOT: 5 DISTINCT METRICS
         ========================================================= */}
      <section className="py-4 sm:py-6">
        <Container>
          <div
            data-reveal="card"
            className="rounded-[20px] bg-white border border-[#DDE3E3] p-5 sm:p-7 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E8EDE9]"
          >
            {/* Metric 1 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block leading-tight">
                  12,425 ha
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Total concession package
                </span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block leading-tight">
                  51 Claims
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  100% owned via Minera Kairos
                </span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight">
                  Exclusive Status
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  100% private commercial title
                </span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight">
                  Route 27CH
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  80 km east of San Pedro (1.5h)
                </span>
              </div>
            </div>

            {/* Metric 5 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5">
              <div className="w-10 h-10 rounded-xl bg-[#EDF3F1] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                <Gem className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] block leading-tight">
                  Cs + Li Brine
                </span>
                <span className="text-xs text-[#5B6B73] block mt-0.5">
                  Dual-commodity potential
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. REGULATORY ARCHITECTURE & POLICY ADVANTAGE
         ========================================================= */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="rounded-[22px] bg-white border border-[#DDE3E3] p-7 sm:p-9 lg:p-11 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: National Policy Context */}
              <div className="lg:col-span-7">
                <Eyebrow>Regulatory Framework &amp; Concession Rights</Eyebrow>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] mb-4">
                  Exclusive Private Development Designation
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#5B6B73] leading-relaxed">
                  <p>
                    Under the Chilean National Lithium Strategy (<em>Estrategia Nacional del Litio</em>), salt flats across the country were classified into strategic categories. While Tier-1 basins like Salar de Atacama and Maricunga mandate state-controlled majority joint ventures with Codelco or ENAMI, Laguna Blanca was designated eligible for <strong>exclusive private development</strong>.
                  </p>
                  <p>
                    This outcome affords Monumental Energy full commercial independence, unrestricted operational execution, and zero mandatory state equity dilution—providing a clear regulatory runway for private exploration and eventual production.
                  </p>
                </div>
              </div>

              {/* Right Column: Title Integrity Box */}
              <div className="lg:col-span-5 bg-[#FAFBF9] rounded-xl p-6 sm:p-7 border border-[#E8EDE9]">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] mb-3">
                  Concession Package Structure
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span><strong>100% Subsidiary Ownership:</strong> Concessions are registered directly through Lithium Chile’s Chilean entity, Minera Kairos Chile Limitada.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span><strong>Continuous Block:</strong> 51 contiguous claims covering the salar basin floor and surrounding alluvial fans.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78] shrink-0 mt-2" />
                    <span><strong>Infrastructure Proximity:</strong> Direct access via the paved Paso de Jama international highway (Route 27CH).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. BASIN GEOLOGY & SITE INTELLIGENCE
         ========================================================= */}
      <LagunaBlancaIntelligenceRow />

      {/* =========================================================
          5. COMMERCIAL & MARKET FUNDAMENTALS: CESIUM & LITHIUM
         ========================================================= */}
      <section className="py-10 sm:py-16">
        <Container>
          <div className="mb-10 sm:mb-12">
            <Eyebrow>Market Drivers &amp; Industrial Demand</Eyebrow>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F2A] mb-3">
              Critical Minerals Economics
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B73] max-w-2xl leading-relaxed">
              Laguna Blanca targets two distinct critical commodities: rare, high-margin cesium for deepwater drilling fluids, and low-cost lithium brine for the global energy transition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* =========================================================
                PILLAR 1: CESIUM (Cs 55) - High-Value Industrial Rarity
               ========================================================= */}
            <div data-reveal="card" className="lg:col-span-6 min-w-0 flex flex-col">
              <div className="h-full rounded-[24px] bg-[#0B1F2A] text-white border border-[#1D3B4C] p-6 sm:p-8 lg:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between">
                {/* Subtle Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1F6F78]/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Header: Element Badge & Status Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="font-mono text-xs font-bold text-[#B7E34A] border-r border-white/15 pr-2.5">
                        55 · Cs
                      </span>
                      <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#DDE3E3]/90">
                        Critical Mineral · Cesium
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B7E34A]/10 text-[#B7E34A] border border-[#B7E34A]/25">
                      Global Monopoly Risk
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-[-0.01em] mb-4">
                    Cesium: Oilfield Formate &amp; Supply Security
                  </h3>

                  {/* 2 Big Stat Metrics */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                    <div>
                      <span className="font-mono font-bold text-2xl sm:text-3xl text-white block">
                        100%
                      </span>
                      <span className="text-[11px] text-[#DDE3E3]/75 block leading-tight mt-1">
                        Concentrate refined via China (Single source: Tanco Mine)
                      </span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-2xl sm:text-3xl text-[#B7E34A] block">
                        85%
                      </span>
                      <span className="text-[11px] text-[#DDE3E3]/75 block leading-tight mt-1">
                        Fluid recycled &amp; re-leased in deepwater HPHT wells
                      </span>
                    </div>
                  </div>

                  {/* Context Narrative */}
                  <p className="text-xs sm:text-[13px] text-[#DDE3E3]/80 leading-relaxed mb-6">
                    Cesium is one of the rarest high-value critical minerals in industrial use. Deepwater operators lease cesium formate brine as an ultra-dense, non-damaging fluid. With Western industrial supply acutely exposed to single-source trade restrictions, new sources represent high-priority strategic assets.
                  </p>

                  {/* USGS Price Benchmarks - Financial Terminal View */}
                  <div className="rounded-xl border border-white/10 bg-[#07161F] p-4 sm:p-5 mb-4 shadow-inner">
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2DD4BF] flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        USGS Benchmark Pricing
                      </span>
                      <span className="text-[10px] font-mono text-[#DDE3E3]/60">
                        Mineral Commodity Summaries
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span className="text-white font-medium text-xs">99.8% Pure Metal (1g ampoule)</span>
                        <span className="font-mono font-bold text-[#B7E34A] bg-[#B7E34A]/10 px-2.5 py-0.5 rounded text-xs">
                          $63.00 – $81.00 / g
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span className="text-[#DDE3E3]/80">Cesium Acetate (99.9%, 50g)</span>
                        <span className="font-mono font-semibold text-white">$118.20</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                        <span className="text-[#DDE3E3]/80">Cesium Iodide (99.9%, 50g)</span>
                        <span className="font-mono font-semibold text-white">$117.00</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5">
                        <span className="text-[#DDE3E3]/80">Cesium Carbonate / Chloride (50g)</span>
                        <span className="font-mono font-semibold text-white">$101.80 / $103.60</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#DDE3E3]/70">
                  <span>HPHT Drilling Formate Application</span>
                  <span className="font-heading font-medium text-xs text-[#B7E34A]">Premium Recurring Lease Model</span>
                </div>
              </div>
            </div>

            {/* =========================================================
                PILLAR 2: LITHIUM (Li 3) - Energy Transition & DLE Economics
               ========================================================= */}
            <div data-reveal="card" className="lg:col-span-6 min-w-0 flex flex-col">
              <div className="h-full rounded-[24px] bg-white border border-[#DDE3E3] p-6 sm:p-8 lg:p-9 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Header: Element Badge & Status Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3]">
                      <span className="font-mono text-xs font-bold text-[#1F6F78] border-r border-[#DDE3E3] pr-2.5">
                        3 · Li
                      </span>
                      <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#0B1F2A]">
                        Energy Transition · Lithium
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EDF3F1] text-[#1F6F78] border border-[#1F6F78]/25">
                      2027+ Structural Deficit
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-[-0.01em] mb-4">
                    Lithium: Supply Deficit &amp; DLE Advantage
                  </h3>

                  {/* 2 Big Stat Metrics */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] mb-5">
                    <div>
                      <span className="font-mono font-bold text-2xl sm:text-3xl text-[#1F6F78] block">
                        18 Mo → Hours
                      </span>
                      <span className="text-[11px] text-[#5B6B73] block leading-tight mt-1">
                        Cycle time compression vs multi-year evaporation ponds
                      </span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-2xl sm:text-3xl text-[#0B1F2A] block">
                        Up to 90%
                      </span>
                      <span className="text-[11px] text-[#5B6B73] block leading-tight mt-1">
                        Brine reinjection rate preserving Andean hydrology
                      </span>
                    </div>
                  </div>

                  {/* Context Narrative */}
                  <p className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed mb-6">
                    Global battery demand continues to outpace long-term supply expansion. Direct Lithium Extraction (DLE) bypasses multi-year solar evaporation ponds and intensive hardrock crushing, delivering lower unit production costs and accelerating commercial timelines.
                  </p>

                  {/* DLE vs Hardrock Modern Technology Matrix */}
                  <div className="rounded-xl border border-[#DDE3E3] bg-[#F5F6F1] p-4 sm:p-5 mb-4">
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#DDE3E3]">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#1F6F78] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        DLE Technology vs. Traditional Methods
                      </span>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#1F6F78]">
                        Clean Tech
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-start gap-3 pb-2.5 border-b border-[#DDE3E3]/70">
                        <div className="w-5 h-5 rounded-md bg-white border border-[#DDE3E3] flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5 shadow-xs">
                          <Zap className="w-3 h-3" />
                        </div>
                        <div>
                          <span className="font-heading font-bold text-xs text-[#0B1F2A] block leading-tight">
                            Lower CAPEX &amp; Rapid Scalability
                          </span>
                          <span className="text-[11px] text-[#5B6B73] block leading-snug mt-0.5">
                            Modular extraction units bypass massive pond earthworks and energy-intensive ore crushing circuits.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-white border border-[#DDE3E3] flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5 shadow-xs">
                          <Layers className="w-3 h-3" />
                        </div>
                        <div>
                          <span className="font-heading font-bold text-xs text-[#0B1F2A] block leading-tight">
                            Hydrological Preservation
                          </span>
                          <span className="text-[11px] text-[#5B6B73] block leading-snug mt-0.5">
                            Spent brine is reinjected back to preserve delicate Andean salar water balances while accelerating cycle times.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                  <span>Battery-Grade Extraction</span>
                  <span className="font-heading font-medium text-xs text-[#1F6F78]">Direct Lithium Extraction (DLE)</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. EXPLORATION TIMELINE & OFFICIAL DOCUMENTS
         ========================================================= */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT CARD: EXPLORATION & REGULATORY HISTORY */}
            <div data-reveal="card" className="lg:col-span-7 min-w-0 flex flex-col">
              <div className="h-full rounded-[20px] bg-white border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                      Chronological Advancement
                    </span>
                    <span className="font-heading text-xs text-[#5B6B73]">
                      Ministry of Mining (Chile)
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] mb-2">
                    Exploration &amp; regulatory history
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] mb-8 leading-relaxed max-w-xl">
                    Milestones tracking the property from surface sampling programs through formal governmental RFI submissions.
                  </p>

                  {/* Architectural Timeline Rail */}
                  <div className="relative pt-2">
                    <div className="hidden sm:block absolute top-[15px] left-3 right-3 h-[1px] bg-[#DDE3E3] z-0" />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                      {/* Milestone 1 */}
                      <div className="flex flex-col">
                        <div className="hidden sm:flex items-center mb-3">
                          <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1F6F78] flex items-center justify-center shrink-0 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78]" />
                          </span>
                        </div>

                        <span className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] block mb-0.5">
                          2022
                        </span>
                        <span className="font-heading font-semibold uppercase tracking-[0.12em] text-[11px] text-[#1F6F78] mb-2 block">
                          Surface Exploration
                        </span>
                        <h4 className="font-heading font-semibold text-xs sm:text-sm text-[#0B1F2A] mb-1.5 leading-snug">
                          Geochemical sampling
                        </h4>
                        <p className="text-xs text-[#5B6B73] leading-relaxed">
                          Initial field program completed across salar concessions, confirming anomalous lithium and cesium in surface sediments.
                        </p>
                      </div>

                      {/* Milestone 2 */}
                      <div className="flex flex-col">
                        <div className="hidden sm:flex items-center mb-3">
                          <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1F6F78] flex items-center justify-center shrink-0 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78]" />
                          </span>
                        </div>

                        <span className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] block mb-0.5">
                          June 2024
                        </span>
                        <span className="font-heading font-semibold uppercase tracking-[0.12em] text-[11px] text-[#1F6F78] mb-2 block">
                          Regulatory Filing
                        </span>
                        <h4 className="font-heading font-semibold text-xs sm:text-sm text-[#0B1F2A] mb-1.5 leading-snug">
                          Joint RFI submission
                        </h4>
                        <p className="text-xs text-[#5B6B73] leading-relaxed">
                          Application for a joint Request for Information (RFI) submitted with a third party under Chile’s national lithium policy.
                        </p>
                      </div>

                      {/* Milestone 3 */}
                      <div className="flex flex-col">
                        <div className="hidden sm:flex items-center mb-3">
                          <span className="relative w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1F6F78] flex items-center justify-center shrink-0 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78]" />
                            <span className="absolute -inset-1 rounded-full border border-[#1F6F78] animate-ping opacity-40" />
                          </span>
                        </div>

                        <span className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] block mb-0.5">
                          Current status
                        </span>
                        <span className="font-heading font-semibold uppercase tracking-[0.12em] text-[11px] text-[#0B1F2A] mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F6F78]" />
                          Active Review
                        </span>
                        <h4 className="font-heading font-semibold text-xs sm:text-sm text-[#0B1F2A] mb-1.5 leading-snug">
                          Ministry evaluation
                        </h4>
                        <p className="text-xs text-[#5B6B73] leading-relaxed mb-3">
                          Advancing through formal government evaluation under the exclusive private development regime. Regular news releases on next steps.
                        </p>
                        <Link
                          href="/news"
                          className="text-xs font-semibold text-[#1F6F78] hover:text-[#0B1F2A] inline-flex items-center gap-1 mt-auto transition-colors group/link"
                        >
                          <span>View news releases</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8EDE9] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B6B73]">
                  <span>Exploration Pathway: Surface sampling to drill target definition</span>
                  <span className="font-heading font-medium text-xs text-[#1F6F78]">Ministry of Mining (Chile)</span>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: PROJECT DOCUMENTS */}
            <div data-reveal="card" className="lg:col-span-5 min-w-0 flex flex-col">
              <div className="h-full rounded-[20px] bg-white border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-heading font-semibold uppercase tracking-[0.12em] text-xs text-[#1F6F78]">
                      Investor Resources
                    </span>
                    <span className="font-heading text-xs text-[#5B6B73]">
                      TSX-V: MNRG
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] mb-2">
                    Project documents
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] mb-8 leading-relaxed">
                    Access official technical presentations, news releases, and securities regulatory filings for Laguna Blanca.
                  </p>

                  {/* Clean Editorial Document List */}
                  <div className="divide-y divide-[#E8EDE9] border-t border-b border-[#E8EDE9]">
                    {/* Doc 1 */}
                    <Link
                      href="/investors/presentation"
                      className="group py-4 flex items-center justify-between gap-4 hover:bg-[#FAFBF9] -mx-2.5 px-2.5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#EDF3F1] flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:bg-[#1F6F78] group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors block leading-tight">
                            Corporate Presentation
                          </span>
                          <span className="text-[11px] sm:text-xs text-[#5B6B73] block mt-0.5 truncate">
                            Laguna Blanca geological model &amp; technical data
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline font-mono text-[11px] text-[#5B6B73]">PDF</span>
                        <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#1F6F78] group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>

                    {/* Doc 2 */}
                    <Link
                      href="/news"
                      className="group py-4 flex items-center justify-between gap-4 hover:bg-[#FAFBF9] -mx-2.5 px-2.5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#EDF3F1] flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:bg-[#1F6F78] group-hover:text-white transition-colors">
                          <Newspaper className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors block leading-tight">
                            Official Announcements
                          </span>
                          <span className="text-[11px] sm:text-xs text-[#5B6B73] block mt-0.5 truncate">
                            Regulatory updates and RFI progress releases
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline font-mono text-[11px] text-[#5B6B73]">News</span>
                        <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#1F6F78] group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>

                    {/* Doc 3 */}
                    <a
                      href="https://www.sedarplus.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group py-4 flex items-center justify-between gap-4 hover:bg-[#FAFBF9] -mx-2.5 px-2.5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-[#EDF3F1] flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:bg-[#0B1F2A] group-hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors block leading-tight">
                            Investor Disclosures
                          </span>
                          <span className="text-[11px] sm:text-xs text-[#5B6B73] block mt-0.5 truncate">
                            Canadian securities continuous disclosure records
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline font-mono text-[11px] text-[#1F6F78] font-semibold">sedarplus.ca</span>
                        <ExternalLink className="w-4 h-4 text-[#5B6B73] group-hover:text-[#1F6F78] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8EDE9] flex items-center justify-between text-xs text-[#5B6B73]">
                  <span>Publicly filed on SEDAR+</span>
                  <span className="font-heading font-medium text-xs text-[#1F6F78]">TSX-V: MNRG</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          7. BOTTOM CALL-TO-ACTION BANNER
         ========================================================= */}
      <section aria-labelledby="laguna-cta-heading" className="section-y relative overflow-hidden bg-[#0B1F2A] text-white border-t border-[#1D3B4C] mt-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/salar-turi-sunset-banner.jpg"
            alt="Panoramic Andean Mountain Landscape"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-45 brightness-90 contrast-115"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#0B1F2A]/80 to-[#07161F]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/80 via-transparent to-[#07161F]/40" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div data-reveal="fade" className="min-w-0 max-w-2xl">
              <Eyebrow dark>STAY INFORMED</Eyebrow>
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
