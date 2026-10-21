import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { MediaReveal } from '@/components/ui/MediaReveal';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BarChart3,
  Users2,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'About Us',
  description:
    'Monumental Energy (TSX-V: MNRG) is an emerging energy investment company focused on near-term oil and gas opportunities in New Zealand and lithium royalty exposure in Chile.',
  path: '/about',
});

const HEADLINE_WORDS = [
  { text: 'Investing', highlight: false },
  { text: 'in', highlight: false },
  { text: 'Real', highlight: false },
  { text: 'Assets', highlight: false },
  { text: 'for', highlight: false },
  { text: 'a', highlight: true },
  { text: 'Changing', highlight: true },
  { text: 'Energy', highlight: true },
  { text: 'Future', highlight: true },
];

const MILESTONES = [
  {
    year: '2023',
    title: 'Company Formation',
    description: 'Established to pursue disciplined energy and critical minerals opportunities.',
    completed: true,
  },
  {
    year: '2024',
    title: 'Strategic Investments',
    description: 'Investment in New Zealand Energy Corp. and 2% NSR lithium royalty at Salar de Turi.',
    completed: true,
  },
  {
    year: '2025',
    title: 'Project Advancement',
    description: 'Progressing asset development and technical work programmes in Taranaki.',
    completed: true,
  },
  {
    year: '2026+',
    title: 'Creating Long-Term Value',
    description: 'Focused on execution, responsible development, near-term production, and growth.',
    completed: false,
  },
];

const VALUES = [
  {
    number: '01',
    title: 'Disciplined Investment',
    description: 'Focused on assets with clear value deliverability and responsible, asymmetric risk.',
  },
  {
    number: '02',
    title: 'Transparency',
    description: 'Open, verified, and consistent communication with all shareholders and public markets.',
  },
  {
    number: '03',
    title: 'Sustainability',
    description: 'Responsible stewardship, water baseline protection, and long-term societal impact.',
  },
  {
    number: '04',
    title: 'People & Partnerships',
    description: 'Building sustained value through seasoned joint-venture operators and local partners.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO SECTION: Matched Alignment & Animation with Homepage Hero */}
      <section className="relative bg-[#07161F] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background photo with parallax and navy gradient overlay identical to homepage */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <MediaReveal parallax={0.15} reveal={false}>
            <Image
              src="/images/about-hero-taranaki.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-bg object-cover object-center"
            />
          </MediaReveal>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#07161F]/75 to-[#07161F]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07161F] via-transparent to-[#07161F]/80" />
          <div className="hero-glow absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#1F6F78]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Animated Eyebrow: hero-eyebrow */}
            <div className="hero-eyebrow flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#B7E34A]" />
              <span className="eyebrow block text-[#B7E34A] text-xs font-heading font-semibold tracking-[0.12em] uppercase">
                About Monumental Energy
              </span>
            </div>

            {/* Animated Headline with masked words matching homepage */}
            <h1
              id="hero-title"
              aria-label="Investing in Real Assets for a Changing Energy Future"
              className="text-3xl sm:text-5xl lg:text-[58px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.18] mb-6"
            >
              {HEADLINE_WORDS.map((item, i) => (
                <React.Fragment key={i}>
                  <span className="hero-word-mask inline-block overflow-hidden align-top">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'hero-word inline-block',
                        item.highlight ? 'text-[#B7E34A]' : 'text-white'
                      )}
                      style={{ animationDelay: `calc(var(--hw${i}, ${Math.floor(i / 2)}) * 110ms + 120ms)` }}
                    >
                      {item.text}
                    </span>
                  </span>
                  {i < HEADLINE_WORDS.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h1>

            {/* Animated Copy: hero-copy */}
            <p className="hero-copy text-base sm:text-lg text-[#DDE3E3]/90 font-normal leading-[1.6] max-w-2xl">
              Monumental Energy is an emerging energy investment company focused on near-term oil and
              gas opportunities in New Zealand and lithium royalty exposure in Chile.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. OUR STORY & OUR APPROACH: Split 2-Column Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 5 Cols: Our Story */}
            <div className="lg:col-span-5">
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-3 font-heading tracking-[0.14em] uppercase">
                Our Story
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.16] mb-5">
                A Focused Strategy Across Two Key Energy Opportunities
              </h2>

              <p className="text-sm sm:text-base text-[#5B6B73] font-body leading-relaxed mb-8">
                Monumental Energy brings together conventional energy production exposure and
                critical minerals royalty interests, targeting long-term value for shareholders
                through disciplined investment and responsible asset development.
              </p>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3.5 group font-heading font-semibold text-sm text-[#0B1F2A] hover:text-[#1F6F78] transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#B7E34A] text-[#0B1F2A] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#a5d43b] shadow-2xs">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
                <span>Learn more about our strategy</span>
              </Link>
            </div>

            {/* Right 7 Cols: Photo + Dark Approach Card Cluster */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-12 rounded-[20px] overflow-hidden border border-[#DDE3E3] shadow-md bg-[#07161F]">
                {/* Visual Half: Real production facility photo */}
                <div className="sm:col-span-7 relative min-h-[260px] sm:min-h-[360px] bg-[#0B1F2A]">
                  <Image
                    src="/images/about-value-creation.jpg"
                    alt="Taranaki Basin production wellhead and pipeline infrastructure"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/60 via-transparent to-transparent" />
                </div>

                {/* Content Half: Dark 'Our Approach' panel */}
                <div className="sm:col-span-5 p-7 sm:p-8 flex flex-col justify-center bg-[#07161F] text-white">
                  <span className="eyebrow text-[#B7E34A] text-[11px] font-heading font-bold uppercase tracking-[0.16em] block mb-6">
                    Our Approach
                  </span>

                  <div className="space-y-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#162F3F] border border-[#27485F] text-[#B7E34A] flex items-center justify-center shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-medium text-xs sm:text-sm text-white/95">
                        Disciplined Investment
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#162F3F] border border-[#27485F] text-[#B7E34A] flex items-center justify-center shrink-0">
                        <Users2 className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-medium text-xs sm:text-sm text-white/95">
                        Strategic Partnerships
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#162F3F] border border-[#27485F] text-[#B7E34A] flex items-center justify-center shrink-0">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-medium text-xs sm:text-sm text-white/95">
                        Long-term Value Creation
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#162F3F] border border-[#27485F] text-[#B7E34A] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-medium text-xs sm:text-sm text-white/95">
                        Responsible Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OUR ASSETS: Two Assets. A Stronger Portfolio. */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white border-t border-[#DDE3E3]">
        <Container>
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
            <div>
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2 font-heading tracking-[0.14em] uppercase">
                Our Assets
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.15]">
                Two Assets. A Stronger Portfolio.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#5B6B73] font-body max-w-md leading-relaxed">
              Our portfolio combines near-term cash flow opportunities in New Zealand with
              long-term exposure to the global energy transition through lithium.
            </p>
          </div>

          {/* Two Bespoke Landscape Asset Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Asset 1: Oil & Gas - New Zealand */}
            <article className="group relative rounded-[20px] overflow-hidden border border-[#1D3B4C] bg-[#07161F] text-white flex flex-col justify-end p-7 sm:p-9 min-h-[380px] sm:min-h-[420px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#1F6F78]">
              <Image
                src="/images/project-new-zealand.jpg"
                alt="Taranaki Basin Oil & Gas infrastructure and Mount Taranaki"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07161F] via-[#07161F]/80 to-[#07161F]/20 pointer-events-none" />

              <div className="relative z-10">
                <span className="eyebrow text-[#2DD4BF] text-[11px] font-heading font-semibold uppercase tracking-[0.16em] block mb-2">
                  Oil &amp; Gas • New Zealand
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-[-0.02em] leading-tight mb-2.5">
                  Taranaki Basin Oil &amp; Gas
                </h3>

                <p className="text-xs sm:text-sm text-[#DDE3E3]/85 font-body leading-relaxed mb-6 max-w-lg">
                  Strategic holding in New Zealand Energy Corp. and associated joint-venture assets
                  targeting low-risk recompletion and near-term production.
                </p>

                <Link
                  href="/projects/new-zealand"
                  className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs sm:text-sm text-[#B7E34A] hover:text-white transition-colors"
                >
                  <span>View project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

            {/* Asset 2: Lithium Royalty - Chile */}
            <article className="group relative rounded-[20px] overflow-hidden border border-[#1D3B4C] bg-[#07161F] text-white flex flex-col justify-end p-7 sm:p-9 min-h-[380px] sm:min-h-[420px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#1F6F78]">
              <Image
                src="/images/project-salar-de-turi.jpg"
                alt="Salar de Turi lithium brine flats and lagoon in Antofagasta, Chile"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07161F] via-[#07161F]/80 to-[#07161F]/20 pointer-events-none" />

              <div className="relative z-10">
                <span className="eyebrow text-[#2DD4BF] text-[11px] font-heading font-semibold uppercase tracking-[0.16em] block mb-2">
                  Lithium Royalty • Chile
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-[-0.02em] leading-tight mb-2.5">
                  Salar de Turi Lithium Project
                </h3>

                <p className="text-xs sm:text-sm text-[#DDE3E3]/85 font-body leading-relaxed mb-6 max-w-lg">
                  2% Net Smelter Return (NSR) royalty across 8,500 hectares of claims located in
                  the premier South American Lithium Triangle.
                </p>

                <Link
                  href="/projects/salar-de-turi"
                  className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs sm:text-sm text-[#B7E34A] hover:text-white transition-colors"
                >
                  <span>View project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* 4. OUR VALUES: Guided by Discipline, Integrity and Responsibility */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F5F6F1] border-t border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 4 Cols: Section Header */}
            <div className="lg:col-span-4">
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2 font-heading tracking-[0.14em] uppercase">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18]">
                Guided by Discipline, Integrity and Responsibility
              </h2>
            </div>

            {/* Right 8 Cols: 4 Columns with Clean Architectural Numbers */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {VALUES.map((val) => (
                  <div key={val.number} className="flex flex-col">
                    <span className="font-heading font-light text-4xl sm:text-5xl text-[#B4C6C9] tracking-wider mb-3 leading-none select-none">
                      {val.number}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] mb-2 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#5B6B73] font-body leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. OUR JOURNEY: Building a Platform for the Future (Milestone Timeline) */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white border-t border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 4 Cols */}
            <div className="lg:col-span-4">
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2 font-heading tracking-[0.14em] uppercase">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-4">
                Building a Platform for the Future
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B73] font-body leading-relaxed mb-6">
                Monumental Energy is advancing a clear strategy to generate value through energy
                production opportunities and critical minerals exposure.
              </p>
              <Link
                href="/investors"
                className="inline-flex items-center gap-1.5 font-heading font-semibold text-xs sm:text-sm text-[#1F6F78] hover:text-[#0B1F2A] transition-colors"
              >
                <span>View our full timeline &amp; filings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right 8 Cols: Horizontal Milestone Timeline */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative pt-2">
                {/* Horizontal connector line on desktop */}
                <div
                  className="hidden lg:block absolute top-[23px] left-6 right-6 h-px bg-[#DDE3E3] z-0"
                  aria-hidden="true"
                />

                {MILESTONES.map((item) => (
                  <div key={item.year} className="relative z-10 flex flex-col">
                    {/* Node & Year Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 ${
                          item.completed
                            ? 'bg-[#1F6F78] border-[#1F6F78]'
                            : 'bg-white border-[#1F6F78]'
                        } ring-4 ring-white shrink-0`}
                      />
                      <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A]">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B6B73] font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. GOVERNANCE & LEADERSHIP DIRECTORY */}
      <section className="py-16 sm:py-20 bg-[#F5F6F1] border-t border-[#DDE3E3]">
        <Container>
          <div className="max-w-2xl mb-10">
            <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2 font-heading tracking-[0.14em] uppercase">
              Management &amp; Oversight
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-tight">
              Corporate Leadership &amp; Board of Directors
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6B73] font-body mt-2">
              Seasoned resource executive leadership with extensive expertise across Canadian
              public equity markets, international resource financing, and continuous governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[16px] bg-white border border-[#DDE3E3] p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-xs mb-4">
                CEO
              </div>
              <h3 className="text-base font-bold font-heading text-[#0B1F2A] mb-0.5">
                Executive Leadership
              </h3>
              <span className="text-[11px] font-heading font-semibold text-[#1F6F78] uppercase tracking-wider block mb-2.5">
                Chief Executive Officer &amp; Director
              </span>
              <p className="text-xs text-[#5B6B73] font-body leading-relaxed">
                Resource capital market veteran leading corporate strategy, joint venture
                structuring, and operational execution in Vancouver.
              </p>
            </div>

            <div className="rounded-[16px] bg-white border border-[#DDE3E3] p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-xs mb-4">
                CFO
              </div>
              <h3 className="text-base font-bold font-heading text-[#0B1F2A] mb-0.5">
                Financial Governance
              </h3>
              <span className="text-[11px] font-heading font-semibold text-[#1F6F78] uppercase tracking-wider block mb-2.5">
                Chief Financial Officer
              </span>
              <p className="text-xs text-[#5B6B73] font-body leading-relaxed">
                Chartered professional accountant with oversight of financial reporting, TSX
                Venture compliance, fiscal auditing, and internal controls.
              </p>
            </div>

            <div className="rounded-[16px] bg-white border border-[#DDE3E3] p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-xs mb-4">
                BOD
              </div>
              <h3 className="text-base font-bold font-heading text-[#0B1F2A] mb-0.5">
                Independent Board
              </h3>
              <span className="text-[11px] font-heading font-semibold text-[#1F6F78] uppercase tracking-wider block mb-2.5">
                Board of Directors
              </span>
              <p className="text-xs text-[#5B6B73] font-body leading-relaxed">
                Independent directors with specialized backgrounds spanning petroleum engineering,
                South American mineral titles, and TSX-V compliance.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
