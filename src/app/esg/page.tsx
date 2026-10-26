import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  Leaf,
  Users,
  ShieldCheck,
  Droplet,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { EsgPledgeSection } from '@/components/sections/EsgPledgeSection';

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

/** Homepage card hover. */
const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

/** Small uppercase meta label inside cards. */
const cardLabel = 'text-[11px] font-heading font-bold uppercase tracking-wider text-[#5B6B73] block mb-1';

/** Image pillar card (Our approach). */
const pillarCard = cn(
  'h-full bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-sm flex flex-col justify-between group',
  cardHover
);

const learnMoreLink =
  'inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors group mt-auto py-1';

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
      <section className="relative overflow-hidden page-intro-y">
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
          {/* Seamless dual gradient fade (left into copy, bottom into page background) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          {/* Top Row: Headline & Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[380px]">
            <div className="lg:col-span-7 min-w-0 lg:pr-8">
              <Eyebrow className="hero-eyebrow">SUSTAINABILITY</Eyebrow>

              <KineticHeading
                as="h1"
                text={'Responsible Energy.\nTransparent Decisions.'}
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                We take a disciplined approach to energy investment, with a focus on environmental stewardship, respect for communities, and transparent governance.
              </p>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
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
          <div className="hero-cta-group mt-8 lg:mt-12 bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-7 lg:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-[#E8ECEC]">
              {/* Item 1: Environment */}
              <div className="flex items-start gap-4 min-w-0">
                <Leaf className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className={cardLabel}>ENVIRONMENT</span>
                  <p className={cn(type.body, tone.mutedLight)}>
                    Minimizing our footprint and managing natural resources responsibly.
                  </p>
                </div>
              </div>

              {/* Item 2: Communities */}
              <div className="flex items-start gap-4 min-w-0 md:pl-8">
                <Users className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className={cardLabel}>COMMUNITIES</span>
                  <p className={cn(type.body, tone.mutedLight)}>
                    Building respectful relationships and creating long-term value.
                  </p>
                </div>
              </div>

              {/* Item 3: Governance */}
              <div className="flex items-start gap-4 min-w-0 md:pl-8">
                <ShieldCheck className="w-8 h-8 text-[#1F6F78] shrink-0 mt-0.5 stroke-[1.6]" aria-hidden="true" />
                <div className="min-w-0">
                  <span className={cardLabel}>GOVERNANCE</span>
                  <p className={cn(type.body, tone.mutedLight)}>
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
      <section className="relative section-y pt-0">
        <Container>
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="Our approach to responsible stewardship"
            description="Our ESG approach is integrated into how we evaluate opportunities, manage our assets and work with stakeholders. We focus on practical measures that support sustainable development and long-term value."
          />

          {/* 3 Pillar Cards Row with Visual Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Care for the environment */}
            <div data-reveal="card" className="h-full">
              <div className={pillarCard}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F2A]">
                  <Image
                    src="/images/esg-stewardship.jpg"
                    alt="Care for the environment water monitoring"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <span className={cardLabel}>ENVIRONMENT</span>
                    <h3 className={cn(type.h3, tone.headingLight, 'mb-2')}>
                      Care for the environment
                    </h3>
                    <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                      We aim to minimize environmental impacts through responsible planning, monitoring and management.
                    </p>
                  </div>

                  <Link href="/projects" className={learnMoreLink}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Work with our communities */}
            <div data-reveal="card" className="h-full">
              <div className={pillarCard}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F2A]">
                  <Image
                    src="/images/esg-community.jpg"
                    alt="Work with our communities consultation"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <span className={cardLabel}>COMMUNITIES</span>
                    <h3 className={cn(type.h3, tone.headingLight, 'mb-2')}>
                      Work with our communities
                    </h3>
                    <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                      We value open dialogue, local partnerships and opportunities that support regional development.
                    </p>
                  </div>

                  <Link href="/about" className={learnMoreLink}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Operate with integrity */}
            <div data-reveal="card" className="h-full">
              <div className={pillarCard}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1F2A]">
                  <Image
                    src="/images/news-corporate-agm.jpg"
                    alt="Operate with integrity corporate governance"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <span className={cardLabel}>GOVERNANCE</span>
                    <h3 className={cn(type.h3, tone.headingLight, 'mb-2')}>
                      Operate with integrity
                    </h3>
                    <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
                      We are committed to transparent reporting, strong governance and responsible decision-making.
                    </p>
                  </div>

                  <Link href="/investors/agm" className={learnMoreLink}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. DARK NAVY BANNER (3 Strategic Principles)
         ========================================================= */}
      <section className="bg-[#0B1F2A] text-white section-y-compact relative overflow-hidden border-y border-[#1D3B4C]">
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
            <div data-reveal="card" className="flex items-start gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                <Droplet className="w-6 h-6 stroke-[1.6]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-heading font-bold uppercase tracking-[0.12em] text-white/90 block mb-1.5">
                  WATER AND LAND CARE
                </span>
                <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                  Responsible exploration and development practices to help protect water, land and biodiversity.
                </p>
              </div>
            </div>

            {/* Column 2: Respectful Engagement */}
            <div data-reveal="card" className="flex items-start gap-4 min-w-0 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                <Users className="w-6 h-6 stroke-[1.6]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-heading font-bold uppercase tracking-[0.12em] text-white/90 block mb-1.5">
                  RESPECTFUL ENGAGEMENT
                </span>
                <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                  Ongoing stakeholder engagement and consideration of local communities.
                </p>
              </div>
            </div>

            {/* Column 3: Transparent Reporting */}
            <div data-reveal="card" className="flex items-start gap-4 min-w-0 md:pl-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6 stroke-[1.6]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-heading font-bold uppercase tracking-[0.12em] text-white/90 block mb-1.5">
                  TRANSPARENT REPORTING
                </span>
                <p className={cn(type.body, 'text-[#DDE3E3]/75')}>
                  Clear communication and accountable governance to build long-term trust.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. INSTITUTIONAL CHARTER: UN & ILO COMMITMENTS (Bilingual)
         ========================================================= */}
      <EsgPledgeSection />

      {/* =========================================================
          5. POLICIES & DISCLOSURES: Key documents
         ========================================================= */}
      <section className="relative section-y">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (Headline & Action) */}
            <div className="lg:col-span-4 min-w-0">
              <SectionHeading
                size="compact"
                eyebrow="POLICIES & DISCLOSURES"
                title="Key documents"
                description="Access our ESG-related policies, reports and regulatory disclosures."
                className="mb-6 sm:mb-8"
              />

              <div data-reveal>
                <Button href="/investors" variant="secondary" size="md">
                  View all disclosures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Document Cards */}
            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {KEY_DOCUMENTS.map((doc) => (
                  <div key={doc.id} data-reveal="card" className="h-full">
                    <Link
                      href={doc.href}
                      target={doc.isExternal ? '_blank' : undefined}
                      rel={doc.isExternal ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'h-full p-5 sm:p-6 rounded-[16px] bg-white border border-[#DDE3E3] shadow-sm flex items-center justify-between group',
                        cardHover
                      )}
                    >
                      <div className="flex items-start gap-3.5 min-w-0 pr-3">
                        <div className="w-10 h-10 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0">
                          <FileText className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <h3 className={cn(type.h4, tone.headingLight, 'group-hover:text-[#1F6F78] transition-colors mb-1')}>
                            {doc.title}
                          </h3>
                          <p className={cn(type.body, tone.mutedLight)}>
                            {doc.description}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          5. BOTTOM CTA BANNER
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B1F2A] text-white section-y-compact">
        {/* Background photo with overlay and topography */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
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
            <SectionHeading
              dark
              size="compact"
              eyebrow="OUR PROJECTS"
              title={'Learn more about our projects\nand how we create long-term value.'}
              className="mb-0 sm:mb-0 min-w-0"
            />

            {/* Right: 2 Action Buttons */}
            <div data-reveal className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 shrink-0">
              <Button href="/projects" variant="primary" size="md">
                Explore our projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>

              <Button href="/investors" variant="secondary-dark" size="md">
                View investor disclosures
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
