import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { constructMetadata } from '@/lib/seo';
import { TeamCardWithModal } from '@/components/sections/TeamCardWithModal';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  Mountain,
  Gem,
  Users,
  ArrowRight,
  BarChart3,
  FileText,
  Leaf,
  Handshake,
  ShieldCheck,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'About Us',
  description:
    'Monumental Energy is a publicly listed energy investment company combining New Zealand oil and gas exposure with a lithium royalty interest in Chile, with a disciplined focus on long-term value creation for our shareholders.',
  path: '/about',
});

const TIMELINE_MILESTONES = [
  {
    year: '2023',
    dotColor: 'bg-[#B7E34A]',
    description: 'Built a focused portfolio across New Zealand and Chile.',
  },
  {
    year: '2024',
    dotColor: 'border-2 border-[#1F6F78] bg-[#1F6F78]',
    description: 'Advanced our project opportunities and corporate strategy.',
  },
  {
    year: '2025',
    dotColor: 'border-2 border-[#B7E34A] bg-[#B7E34A]',
    description: 'Continued to progress our asset portfolio and strengthen our position.',
  },
  {
    year: '2026+',
    dotColor: 'border-2 border-[#1F6F78] bg-transparent',
    hasArrow: true,
    description: 'Focused on delivering long-term value through disciplined investment.',
  },
];

/** Shared classes for the light cards on this page (homepage card spec). */
const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

/** Small uppercase meta label inside cards. */
const cardLabel = 'text-[11px] font-heading font-bold uppercase tracking-wider text-[#5B6B73] block mb-1';

export default function AboutPage() {
  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          BACKGROUND TOPOGRAPHIC CONTOUR LINES
         ========================================================= */}
      {/* Top Left Topo */}
      <div
        className="absolute top-0 left-0 w-[550px] sm:w-[680px] lg:w-[800px] h-[550px] pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden"
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

      {/* Mid Left Topo */}
      <div
        className="absolute top-[48%] -left-20 w-[500px] h-[450px] pointer-events-none opacity-[0.05] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 450" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M0 250 C 120 240, 200 180, 290 190 C 380 200, 420 280, 500 300" />
          <path d="M0 200 C 140 190, 220 130, 310 140 C 400 150, 440 230, 500 250" />
        </svg>
      </div>

      {/* Mid Right Topo */}
      <div
        className="absolute top-[42%] -right-10 w-[500px] h-[450px] pointer-events-none opacity-[0.05] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 450" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M100 450 C 160 350, 240 320, 350 310 C 420 300, 460 220, 500 180" />
          <path d="M150 450 C 200 370, 280 340, 380 330 C 450 320, 480 250, 500 220" />
        </svg>
      </div>

      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photo + Strip)
         ========================================================= */}
      <section className="relative overflow-hidden page-intro-y">
        {/* Desktop Split Photograph: Mount Taranaki with Drill Rig */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[54%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/about-hero-taranaki.jpg"
            alt="Mount Taranaki and Onshore Energy Production in New Zealand"
            fill
            sizes="54vw"
            className="object-cover object-[center_35%]"
            priority
          />
          {/* Seamless dual gradient fade (left into copy, bottom into page background) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          {/* Top Row: Headline & Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[380px]">
            <div className="lg:col-span-7 min-w-0 lg:pr-8">
              <Eyebrow className="hero-eyebrow">ABOUT MONUMENTAL ENERGY</Eyebrow>

              <KineticHeading
                as="h1"
                text={'A focused approach\nto energy investment'}
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                Monumental Energy is a publicly listed energy investment company combining New Zealand oil and gas exposure with a lithium royalty interest in Chile, with a disciplined focus on long-term value creation for our shareholders.
              </p>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/about-hero-taranaki.jpg"
                  alt="Mount Taranaki and Energy Infrastructure"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Hero Bottom 3-Stat Strip */}
          <div className="hero-cta-group mt-8 lg:mt-12 bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-7 lg:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-[#E8ECEC]">
              {/* Item 1: Oil & Gas Exposure */}
              <div className="flex items-start gap-4 min-w-0">
                <Mountain className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className={cardLabel}>NEW ZEALAND</span>
                  <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>
                    Oil &amp; Gas Exposure
                  </h3>
                  <p className={cn(type.body, tone.mutedLight)}>
                    Exposure to a high-quality onshore basin in Taranaki.
                  </p>
                </div>
              </div>

              {/* Item 2: Lithium Royalty */}
              <div className="flex items-start gap-4 min-w-0 md:pl-8">
                <Gem className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className={cardLabel}>CHILE</span>
                  <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>
                    Lithium Royalty
                  </h3>
                  <p className={cn(type.body, tone.mutedLight)}>
                    A 2% NSR royalty interest in the Salar de Turi project.
                  </p>
                </div>
              </div>

              {/* Item 3: Disciplined Investment */}
              <div className="flex items-start gap-4 min-w-0 md:pl-8">
                <Users className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className={cardLabel}>SHAREHOLDER FOCUS</span>
                  <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>
                    Disciplined Investment
                  </h3>
                  <p className={cn(type.body, tone.mutedLight)}>
                    A clear and focused strategy to unlock long-term value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. OUR PORTFOLIO: Two assets. One focused strategy.
         ========================================================= */}
      <section className="relative section-y pt-0">
        <Container>
          <SectionHeading
            eyebrow="OUR PORTFOLIO"
            title="Two assets. One focused strategy."
            description="We invest in high-quality assets with significant long-term potential, backed by an experienced team and a disciplined approach to capital allocation."
          />

          {/* 2 Bespoke Horizontal Asset Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Taranaki Basin */}
            <div data-reveal="card" className="h-full">
              <div className={cn('h-full bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row gap-5 sm:gap-6 items-center', cardHover)}>
                <div className="relative w-full sm:w-[220px] lg:w-[200px] xl:w-[240px] aspect-[4/3] rounded-[16px] overflow-hidden shrink-0 shadow-inner">
                  <Image
                    src="/images/about-hero-taranaki.jpg"
                    alt="Taranaki Basin Oil and Gas Project"
                    fill
                    sizes="(min-width: 640px) 240px, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-between h-full min-w-0 w-full py-1">
                  <div>
                    <span className={cardLabel}>OIL &amp; GAS &bull; NEW ZEALAND</span>
                    <h3 className={cn(type.h3, tone.headingLight, 'mb-2')}>
                      Taranaki Basin
                    </h3>
                    <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                      Exposure to conventional oil and gas in a proven onshore basin with an established infrastructure base.
                    </p>
                  </div>

                  <Link
                    href="/projects/new-zealand"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto py-1"
                  >
                    <span>Explore project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Salar de Turi */}
            <div data-reveal="card" className="h-full">
              <div className={cn('h-full bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row gap-5 sm:gap-6 items-center', cardHover)}>
                <div className="relative w-full sm:w-[220px] lg:w-[200px] xl:w-[240px] aspect-[4/3] rounded-[16px] overflow-hidden shrink-0 shadow-inner">
                  <Image
                    src="/images/project-salar-de-turi.jpg"
                    alt="Salar de Turi Lithium Brine Project"
                    fill
                    sizes="(min-width: 640px) 240px, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-between h-full min-w-0 w-full py-1">
                  <div>
                    <span className={cardLabel}>LITHIUM ROYALTY &bull; CHILE</span>
                    <h3 className={cn(type.h3, tone.headingLight, 'mb-2')}>
                      Salar de Turi
                    </h3>
                    <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                      A 2% net smelter return royalty interest in a large, advanced lithium project in northern Chile.
                    </p>
                  </div>

                  <Link
                    href="/projects/salar-de-turi"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto py-1"
                  >
                    <span>Explore project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. HOW WE APPROACH INVESTMENT (Full-width Dark Navy)
         ========================================================= */}
      <section className="bg-[#0B1F2A] text-white section-y relative overflow-hidden border-y border-[#1D3B4C]">
        {/* Subtle Topo lines inside dark section */}
        <div
          className="absolute -right-20 top-0 w-[450px] h-[350px] pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <svg viewBox="0 0 500 400" fill="none" stroke="#2DD4BF" strokeWidth="1.2" className="w-full h-full">
            <path d="M0 200 C 150 150, 250 250, 450 180" />
            <path d="M0 240 C 160 190, 260 290, 460 220" />
            <path d="M0 280 C 170 230, 270 330, 470 260" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (Headline) */}
            <div className="lg:col-span-4 min-w-0">
              <SectionHeading
                dark
                size="compact"
                eyebrow="HOW WE APPROACH INVESTMENT"
                title={'A disciplined approach\nfor long-term value'}
                className="mb-0 sm:mb-0"
              />
            </div>

            {/* Right Column: 4 Strategic Pillars (2x2 so copy keeps a readable measure) */}
            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-x-10">
                {/* Pillar 1 */}
                <div data-reveal="card" className="flex flex-col min-w-0">
                  <BarChart3 className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" aria-hidden="true" />
                  <h3 className={cn(type.h4, tone.headingDark, 'mb-1.5')}>
                    Disciplined Investment
                  </h3>
                  <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                    Focus on high-quality assets and measured growth.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div data-reveal="card" className="flex flex-col min-w-0">
                  <FileText className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" aria-hidden="true" />
                  <h3 className={cn(type.h4, tone.headingDark, 'mb-1.5')}>
                    Transparency
                  </h3>
                  <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                    Clear and consistent communication with our shareholders.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div data-reveal="card" className="flex flex-col min-w-0">
                  <Leaf className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" aria-hidden="true" />
                  <h3 className={cn(type.h4, tone.headingDark, 'mb-1.5')}>
                    Responsible Development
                  </h3>
                  <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                    Consideration of people, environment and communities.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div data-reveal="card" className="flex flex-col min-w-0">
                  <Handshake className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" aria-hidden="true" />
                  <h3 className={cn(type.h4, tone.headingDark, 'mb-1.5')}>
                    Strategic Partnerships
                  </h3>
                  <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                    Work with experienced operators and industry partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. OUR JOURNEY: Key milestones
         ========================================================= */}
      <section className="relative section-y">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (Header) */}
            <div className="lg:col-span-3 min-w-0">
              <SectionHeading
                size="compact"
                eyebrow="OUR JOURNEY"
                title="Key milestones"
                className="mb-0 sm:mb-0"
              />
            </div>

            {/* Right Column: Horizontal Milestone Timeline */}
            <div className="lg:col-span-9 relative min-w-0 lg:pt-2">
              {/* Desktop Horizontal Line */}
              <div
                className="hidden lg:block absolute top-[22px] left-3 right-8 h-px bg-[#DDE3E3] z-0"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                {TIMELINE_MILESTONES.map((item) => (
                  <div key={item.year} data-reveal="card" className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3.5 h-3.5 rounded-full ${item.dotColor} shrink-0 ring-4 ring-[#F5F6F1]`} />
                      <span className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A]">
                        {item.year}
                      </span>
                      {item.hasArrow && (
                        <ArrowRight className="w-4 h-4 text-[#5B6B73] inline-block ml-0.5" aria-hidden="true" />
                      )}
                    </div>
                    <p className={cn(type.body, tone.mutedLight)}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. LEADERSHIP & GOVERNANCE: 3-Card Row
         ========================================================= */}
      <section className="relative section-y pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (Headline) */}
            <div className="lg:col-span-4 min-w-0">
              <SectionHeading
                size="compact"
                eyebrow="LEADERSHIP & GOVERNANCE"
                title={'Experienced leadership\nand a strong governance foundation'}
                className="mb-0 sm:mb-0"
              />
            </div>

            {/* Right Column: 3 Resource Cards */}
            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                {/* Card 1: Our Team */}
                <div data-reveal="card" className="h-full">
                  <TeamCardWithModal />
                </div>

                {/* Card 2: Governance */}
                <div data-reveal="card" className="h-full">
                  <Link
                    href="/investors/agm"
                    className={cn('h-full bg-white rounded-[16px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm flex flex-col justify-between group', cardHover)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <ShieldCheck className="w-7 h-7 text-[#1F6F78] stroke-[1.6]" aria-hidden="true" />
                      </div>
                      <h3 className={cn(type.h4, tone.headingLight, 'mb-1.5')}>
                        Governance
                      </h3>
                      <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                        Committed to high standards of corporate governance and accountability.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </div>
                  </Link>
                </div>

                {/* Card 3: Policies & Charters */}
                <div data-reveal="card" className="h-full">
                  <Link
                    href="/investors"
                    className={cn('h-full bg-white rounded-[16px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm flex flex-col justify-between group', cardHover)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <FileText className="w-7 h-7 text-[#1F6F78] stroke-[1.6]" aria-hidden="true" />
                      </div>
                      <h3 className={cn(type.h4, tone.headingLight, 'mb-1.5')}>
                        Policies &amp; Charters
                      </h3>
                      <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                        Our policies and charters support transparent and responsible business.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM CTA BANNER
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B1F2A] text-white section-y-compact">
        {/* Background photo with overlay and topography */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <Image
            src="/images/taranaki-panoramic-coast.jpg"
            alt="New Zealand Landscape"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F] via-[#07161F]/90 to-[#07161F]/75" />
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[400px] opacity-[0.08]">
            <svg viewBox="0 0 500 400" fill="none" stroke="#2DD4BF" strokeWidth="1.2" className="w-full h-full">
              <path d="M0 300 C 150 250, 250 350, 450 280" />
              <path d="M0 340 C 160 290, 260 390, 460 320" />
            </svg>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left: Headline */}
            <SectionHeading
              dark
              size="compact"
              eyebrow="EXPLORE MORE"
              title={'Learn more about our projects\nand investor information.'}
              className="mb-0 sm:mb-0 min-w-0"
            />

            {/* Right: 2 Action Buttons */}
            <div data-reveal className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 shrink-0">
              <Button href="/projects" variant="primary" size="md">
                View Our Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>

              <Button href="/investors" variant="secondary-dark" size="md">
                Go to Investor Centre
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
