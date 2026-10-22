import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/seo';
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
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
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
          {/* Subtle horizontal gradient to seamlessly blend photo into #F5F6F1 background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          {/* Top Row: Headline & Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] lg:min-h-[380px]">
            <div className="lg:col-span-7 pr-0 lg:pr-8">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                ABOUT MONUMENTAL ENERGY
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                A focused approach<br />to energy investment
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Monumental Energy is a publicly listed energy investment company combining New Zealand oil and gas exposure with a lithium royalty interest in Chile, with a disciplined focus on long-term value creation for our shareholders.
              </p>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden col-span-1 mt-2">
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
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
          <div className="mt-8 lg:mt-12 bg-white rounded-[22px] border border-[#DDE3E3] p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-[#E8ECEC]">
              {/* Item 1: Oil & Gas Exposure */}
              <div className="flex items-start gap-4">
                <Mountain className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    NEW ZEALAND
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] mb-1">
                    Oil &amp; Gas Exposure
                  </h3>
                  <p className="text-xs text-[#5B6B73] leading-relaxed">
                    Exposure to a high-quality onshore basin in Taranaki.
                  </p>
                </div>
              </div>

              {/* Item 2: Lithium Royalty */}
              <div className="flex items-start gap-4 md:pl-8">
                <Gem className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    CHILE
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] mb-1">
                    Lithium Royalty
                  </h3>
                  <p className="text-xs text-[#5B6B73] leading-relaxed">
                    A 2% NSR royalty interest in the Salar de Turi project.
                  </p>
                </div>
              </div>

              {/* Item 3: Disciplined Investment */}
              <div className="flex items-start gap-4 md:pl-8">
                <Users className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    SHAREHOLDER FOCUS
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] mb-1">
                    Disciplined Investment
                  </h3>
                  <p className="text-xs text-[#5B6B73] leading-relaxed">
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
      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <span className="text-xs font-heading font-bold text-[#87969F] uppercase tracking-[0.16em]">
                  OUR PORTFOLIO
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F2A] tracking-tight">
                Two assets. One focused strategy.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#5B6B73] max-w-md leading-relaxed">
              We invest in high-quality assets with significant long-term potential, backed by an experienced team and a disciplined approach to capital allocation.
            </p>
          </div>

          {/* 2 Bespoke Horizontal Asset Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Taranaki Basin */}
            <div className="bg-white rounded-[22px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-full sm:w-[220px] lg:w-[240px] aspect-[4/3] rounded-[16px] overflow-hidden shrink-0 shadow-inner">
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
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    OIL &amp; GAS &bull; NEW ZEALAND
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#0B1F2A] tracking-tight mb-2">
                    Taranaki Basin
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-4">
                    Exposure to conventional oil and gas in a proven onshore basin with an established infrastructure base.
                  </p>
                </div>

                <Link
                  href="/projects/new-zealand"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: Salar de Turi */}
            <div className="bg-white rounded-[22px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-full sm:w-[220px] lg:w-[240px] aspect-[4/3] rounded-[16px] overflow-hidden shrink-0 shadow-inner">
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
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    LITHIUM ROYALTY &bull; CHILE
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#0B1F2A] tracking-tight mb-2">
                    Salar de Turi
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-4">
                    A 2% net smelter return royalty interest in a large, advanced lithium project in northern Chile.
                  </p>
                </div>

                <Link
                  href="/projects/salar-de-turi"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. HOW WE APPROACH INVESTMENT (Full-width Dark Navy)
         ========================================================= */}
      <section className="bg-[#07161F] text-white py-14 sm:py-18 relative overflow-hidden border-y border-[#183040]">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Headline) */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-[#B7E34A]">
                  HOW WE APPROACH INVESTMENT
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-tight">
                A disciplined approach<br />for long-term value
              </h2>
            </div>

            {/* Right Column: 4 Strategic Pillars */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                {/* Pillar 1 */}
                <div className="flex flex-col">
                  <BarChart3 className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                    Disciplined Investment
                  </h3>
                  <p className="text-xs text-[#87969F] leading-relaxed">
                    Focus on high-quality assets and measured growth.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-col">
                  <FileText className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                    Transparency
                  </h3>
                  <p className="text-xs text-[#87969F] leading-relaxed">
                    Clear and consistent communication with our shareholders.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-col">
                  <Leaf className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                    Responsible Development
                  </h3>
                  <p className="text-xs text-[#87969F] leading-relaxed">
                    Consideration of people, environment and communities.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="flex flex-col">
                  <Handshake className="w-7 h-7 text-[#2DD4BF] mb-3.5 stroke-[1.6]" />
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white mb-1.5">
                    Strategic Partnerships
                  </h3>
                  <p className="text-xs text-[#87969F] leading-relaxed">
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
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (Header) */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-[#87969F]">
                  OUR JOURNEY
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] tracking-tight">
                Key milestones
              </h2>
            </div>

            {/* Right Column: Horizontal Milestone Timeline */}
            <div className="lg:col-span-9 relative">
              {/* Desktop Horizontal Line */}
              <div
                className="hidden lg:block absolute top-[14px] left-3 right-8 h-px bg-[#DDE3E3] z-0"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
                {TIMELINE_MILESTONES.map((item) => (
                  <div key={item.year} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3.5 h-3.5 rounded-full ${item.dotColor} shrink-0 ring-4 ring-[#F5F6F1]`} />
                      <span className="font-heading font-bold text-base text-[#0B1F2A]">
                        {item.year}
                      </span>
                      {item.hasArrow && (
                        <ArrowRight className="w-4 h-4 text-[#87969F] inline-block ml-0.5" />
                      )}
                    </div>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
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
      <section className="py-8 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (Headline) */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-[#87969F]">
                  LEADERSHIP &amp; GOVERNANCE
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] tracking-tight leading-snug">
                Experienced leadership<br />and a strong governance foundation
              </h3>
            </div>

            {/* Right Column: 3 Resource Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Card 1: Our Team */}
                <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Users className="w-7 h-7 text-[#1F6F78] stroke-[1.6]" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#0B1F2A] mb-1.5">
                      Our Team
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed mb-4">
                      A leadership team with deep industry experience in energy and natural resources.
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Card 2: Governance */}
                <Link
                  href="/investors/agm"
                  className="bg-white rounded-[20px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <ShieldCheck className="w-7 h-7 text-[#1F6F78] stroke-[1.6]" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#0B1F2A] mb-1.5">
                      Governance
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed mb-4">
                      Committed to high standards of corporate governance and accountability.
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>

                {/* Card 3: Policies & Charters */}
                <Link
                  href="/investors"
                  className="bg-white rounded-[20px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <FileText className="w-7 h-7 text-[#1F6F78] stroke-[1.6]" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#0B1F2A] mb-1.5">
                      Policies &amp; Charters
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed mb-4">
                      Our policies and charters support transparent and responsible business.
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM CTA BANNER
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#07161F] text-white py-14 sm:py-16 mt-8 sm:mt-12">
        {/* Background photo with overlay and topography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-[#B7E34A] block mb-2">
                EXPLORE MORE
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-snug">
                Learn more about our projects<br />and investor information.
              </h3>
            </div>

            {/* Right: 2 Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="bg-[#B7E34A] hover:bg-[#a5d43b] text-[#0B1F2A] font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all shadow-sm"
              >
                <span>View Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/investors"
                className="bg-[#07161F]/70 hover:bg-[#07161F] text-white border border-white/20 hover:border-white/40 font-heading font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all"
              >
                <span>Go to Investor Centre</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
