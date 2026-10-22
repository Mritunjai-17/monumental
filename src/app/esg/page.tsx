import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/seo';
import {
  Leaf,
  Users,
  ShieldCheck,
  Droplet,
  FileText,
  ArrowRight,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'ESG & Sustainability',
  description:
    'Responsible Energy. Transparent Decisions. Monumental Energy takes a disciplined approach to energy investment, with a focus on environmental stewardship, respect for communities, and transparent governance.',
  path: '/esg',
});

const KEY_DOCUMENTS = [
  {
    id: 'doc-esg-approach',
    title: 'ESG Approach',
    description: 'Overview of our approach to environmental, social and governance considerations.',
    href: '/investors',
  },
  {
    id: 'doc-hse',
    title: 'Health, Safety and Environment',
    description: 'Our commitment to safe and responsible operations.',
    href: '/investors',
  },
  {
    id: 'doc-corp-gov',
    title: 'Corporate Governance',
    description: 'Governance framework and related policies.',
    href: '/investors/agm',
  },
  {
    id: 'doc-regulatory',
    title: 'Regulatory Filings',
    description: 'View our filings on SEDAR+.',
    href: 'https://www.sedarplus.ca',
    isExternal: true,
  },
];

export default function EsgPage() {
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
          1. HERO SECTION (Split Left Content & Right Coastal Photo + Strip)
         ========================================================= */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
        {/* Desktop Split Photograph: High-angle Coastal Landscape with Mount Taranaki */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[54%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/taranaki-panoramic-coast.jpg"
            alt="Mount Taranaki Coastline and Environmental Setting in New Zealand"
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
                SUSTAINABILITY
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                Responsible Energy.<br />Transparent Decisions.
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                We take a disciplined approach to energy investment, with a focus on environmental stewardship, respect for communities, and transparent governance.
              </p>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden col-span-1 mt-2">
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/taranaki-panoramic-coast.jpg"
                  alt="Environmental Stewardship in New Zealand"
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
              {/* Item 1: Environment */}
              <div className="flex items-start gap-4">
                <Leaf className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    ENVIRONMENT
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed">
                    Minimizing our footprint and managing natural resources responsibly.
                  </p>
                </div>
              </div>

              {/* Item 2: Communities */}
              <div className="flex items-start gap-4 md:pl-8">
                <Users className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    COMMUNITIES
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed">
                    Building respectful relationships and creating long-term value.
                  </p>
                </div>
              </div>

              {/* Item 3: Governance */}
              <div className="flex items-start gap-4 md:pl-8">
                <ShieldCheck className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" />
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    GOVERNANCE
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed">
                    Maintaining transparency, accountability and strong governance practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. OUR APPROACH: Our approach to responsible stewardship
         ========================================================= */}
      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <span className="text-xs font-heading font-bold text-[#87969F] uppercase tracking-[0.16em]">
                  OUR APPROACH
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F2A] tracking-tight">
                Our approach to responsible stewardship
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#5B6B73] max-w-md leading-relaxed">
              Our ESG approach is integrated into how we evaluate opportunities, manage our assets and work with stakeholders. We focus on practical measures that support sustainable development and long-term value.
            </p>
          </div>

          {/* 3 Pillar Cards Row with Visual Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Care for the environment */}
            <div className="bg-white rounded-[22px] border border-[#DDE3E3] overflow-hidden shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F2A]">
                <Image
                  src="/images/esg-stewardship.jpg"
                  alt="Care for the environment water monitoring"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    ENVIRONMENT
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-tight mb-2">
                    Care for the environment
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-4">
                    We aim to minimize environmental impacts through responsible planning, monitoring and management.
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: Work with our communities */}
            <div className="bg-white rounded-[22px] border border-[#DDE3E3] overflow-hidden shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F2A]">
                <Image
                  src="/images/esg-community.jpg"
                  alt="Work with our communities consultation"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    COMMUNITIES
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-tight mb-2">
                    Work with our communities
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-4">
                    We value open dialogue, local partnerships and opportunities that support regional development.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: Operate with integrity */}
            <div className="bg-white rounded-[22px] border border-[#DDE3E3] overflow-hidden shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F2A]">
                <Image
                  src="/images/news-corporate-agm.jpg"
                  alt="Operate with integrity corporate governance"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-1">
                    GOVERNANCE
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-tight mb-2">
                    Operate with integrity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-4">
                    We are committed to transparent reporting, strong governance and responsible decision-making.
                  </p>
                </div>

                <Link
                  href="/investors/agm"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. DARK NAVY BANNER (3 Strategic Principles)
         ========================================================= */}
      <section className="bg-[#07161F] text-white py-12 sm:py-16 relative overflow-hidden border-y border-[#183040]">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-white/10">
            {/* Column 1: Water and Land Care */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                <Droplet className="w-6 h-6 stroke-[1.6]" />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-white/90 block mb-1">
                  WATER AND LAND CARE
                </span>
                <p className="text-xs sm:text-[13px] text-[#87969F] leading-relaxed">
                  Responsible exploration and development practices to help protect water, land and biodiversity.
                </p>
              </div>
            </div>

            {/* Column 2: Respectful Engagement */}
            <div className="flex items-start gap-4 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                <Users className="w-6 h-6 stroke-[1.6]" />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-white/90 block mb-1">
                  RESPECTFUL ENGAGEMENT
                </span>
                <p className="text-xs sm:text-[13px] text-[#87969F] leading-relaxed">
                  Ongoing stakeholder engagement and consideration of local communities.
                </p>
              </div>
            </div>

            {/* Column 3: Transparent Reporting */}
            <div className="flex items-start gap-4 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6 stroke-[1.6]" />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-white/90 block mb-1">
                  TRANSPARENT REPORTING
                </span>
                <p className="text-xs sm:text-[13px] text-[#87969F] leading-relaxed">
                  Clear communication and accountable governance to build long-term trust.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. POLICIES & DISCLOSURES: Key documents
         ========================================================= */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (Headline & Action) */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-[#87969F]">
                  POLICIES &amp; DISCLOSURES
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] tracking-tight mb-2">
                Key documents
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed mb-6">
                Access our ESG-related policies, reports and regulatory disclosures.
              </p>

              <Link
                href="/investors"
                className="inline-flex items-center gap-2 border border-[#0B1F2A]/30 hover:border-[#0B1F2A] rounded-lg px-4 py-2.5 text-xs font-heading font-bold text-[#0B1F2A] transition-all group"
              >
                <span>View all disclosures</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Column: 2x2 Grid of Document Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {KEY_DOCUMENTS.map((doc) => (
                  <Link
                    key={doc.id}
                    href={doc.href}
                    target={doc.isExternal ? '_blank' : undefined}
                    rel={doc.isExternal ? 'noopener noreferrer' : undefined}
                    className="p-5 rounded-[18px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-start gap-3.5 min-w-0 pr-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-snug mb-1">
                          {doc.title}
                        </h4>
                        <p className="text-[11px] text-[#87969F] leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. BOTTOM CTA BANNER
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#07161F] text-white py-14 sm:py-16 mt-6 sm:mt-10">
        {/* Background photo with overlay and topography */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/taranaki-panoramic-coast.jpg"
            alt="New Zealand Natural Setting"
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
                OUR PROJECTS
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-snug">
                Learn more about our projects<br />and how we create long-term value.
              </h3>
            </div>

            {/* Right: 2 Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="bg-[#B7E34A] hover:bg-[#a5d43b] text-[#0B1F2A] font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Explore our projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/investors"
                className="bg-[#07161F]/70 hover:bg-[#07161F] text-white border border-white/20 hover:border-white/40 font-heading font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all"
              >
                <span>View investor disclosures</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
