import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  Calendar,
  MapPin,
  Users,
  FileText,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  Building,
  BarChart3,
  Newspaper,
  FileSearch,
  FileEdit,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Annual General Meeting',
  description:
    "Access the official meeting notice, proxy materials and related documents for Monumental Energy's Annual General and Special Meeting of Shareholders.",
  path: '/investors/agm',
});

const OFFICIAL_DOCUMENTS = [
  {
    id: 'doc-circular',
    title: 'Notice of Meeting & Management Information Circular',
    description: 'Details of the business to be considered at the meeting.',
    publishedDate: '10 July 2026',
    url: 'https://www.sedarplus.ca',
    isExternal: false,
  },
  {
    id: 'doc-proxy',
    title: 'Registered Shareholder Proxy',
    description: 'For registered shareholders.',
    publishedDate: '10 July 2026',
    url: 'https://www.investorcentre.com',
    isExternal: false,
  },
  {
    id: 'doc-vif',
    title: 'Beneficial Shareholder Voting Instruction Form (VIF)',
    description: 'For shareholders holding shares through a broker or intermediary.',
    publishedDate: '10 July 2026',
    url: 'https://www.proxyvote.com',
    isExternal: false,
  },
  {
    id: 'doc-sedar',
    title: 'SEDAR+ Filings',
    description: 'View the official AGM filings on SEDAR+.',
    publishedDate: 'External site ↗',
    url: 'https://www.sedarplus.ca',
    isExternal: true,
  },
];

const VOTING_STEPS = [
  {
    step: 1,
    title: 'Registered shareholders',
    body: 'If your shares are registered in your name, you can vote online through Computershare or return a signed proxy form by mail.',
    Icon: FileEdit,
  },
  {
    step: 2,
    title: 'Beneficial shareholders',
    body: 'If you hold shares through a broker or financial institution, you will receive a Voting Instruction Form (VIF) and should follow the instructions provided by your intermediary.',
    Icon: Users,
  },
  {
    step: 3,
    title: 'Filing archive',
    body: 'All official meeting materials and results are filed on SEDAR+. You can view the complete record of the AGM and related disclosures.',
    Icon: FileSearch,
  },
];

const RESOURCES = [
  {
    href: '/investors',
    title: 'Investor Centre',
    description: 'Financial information, filings and more',
    Icon: BarChart3,
  },
  {
    href: '/investors/presentation',
    title: 'Corporate Presentation',
    description: 'View our latest investor deck',
    Icon: FileText,
  },
  {
    href: '/news',
    title: 'News & Market Releases',
    description: 'Latest company announcements',
    Icon: Newspaper,
  },
];

const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';
const detailLabelClass = 'text-xs text-[#5B6B73] uppercase font-heading font-bold tracking-wider block mb-1';

export default function AgmPage() {
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
          <path d="M380 0 C 450 180, 520 260, 650 290" />
          <path d="M140 30 C 220 110, 280 190, 460 210 C 560 220, 600 290, 650 330" />
          <path d="M100 70 C 180 150, 240 230, 420 250 C 520 260, 560 330, 610 380" />
          <path d="M60 120 C 140 200, 200 280, 380 300 C 480 310, 520 380, 570 430" />
        </svg>
      </div>

      {/* Bottom Left Topo */}
      <div
        className="absolute bottom-20 -left-20 w-[600px] h-[500px] pointer-events-none opacity-[0.05] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 600 500" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M0 350 C 120 340, 200 280, 290 290 C 380 300, 420 380, 520 400" />
          <path d="M0 300 C 140 290, 220 230, 310 240 C 400 250, 440 330, 550 350" />
          <path d="M0 250 C 160 240, 240 180, 330 190 C 420 200, 460 280, 580 300" />
          <path d="M0 200 C 180 190, 260 130, 350 140 C 440 150, 480 230, 600 250" />
        </svg>
      </div>

      {/* Bottom Right Topo */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[450px] pointer-events-none opacity-[0.05] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 450" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M100 450 C 160 350, 240 320, 350 310 C 420 300, 460 220, 500 180" />
          <path d="M150 450 C 200 370, 280 340, 380 330 C 450 320, 480 250, 500 220" />
          <path d="M200 450 C 240 390, 320 360, 410 350 C 470 340, 490 280, 500 260" />
        </svg>
      </div>

      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Boardroom Photo)
         ========================================================= */}
      <section className="relative overflow-hidden page-intro-y">
        {/* Desktop Split Boardroom Image with Seamless Fade */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[54%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/agm-boardroom.jpg"
            alt="Monumental Energy Vancouver Boardroom overlooking skyline"
            fill
            sizes="54vw"
            className="object-cover object-left"
            priority
          />
          {/* Subtle gradient overlay to merge boardroom photo seamlessly into off-white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[380px]">
            {/* Left Column (Headline & Copy) */}
            <div className="lg:col-span-7 min-w-0 lg:pr-8">
              <Eyebrow className="hero-eyebrow">SHAREHOLDER GOVERNANCE</Eyebrow>

              <KineticHeading
                as="h1"
                text={'Annual General\nMeeting'}
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                Access the official meeting notice, proxy materials and related documents for Monumental Energy&apos;s Annual General and Special Meeting of Shareholders.
              </p>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/agm-boardroom.jpg"
                  alt="Monumental Energy Vancouver Boardroom"
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
          2. MAIN SECTION: MEETING STATUS & OFFICIAL MEETING MATERIALS
         ========================================================= */}
      <section className="relative z-10 section-y pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* LEFT CARD: MEETING STATUS (White Card) */}
            <div data-reveal="card" className="lg:col-span-6 min-w-0">
              <div className="h-full bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-8">
                {/* Top Row: Meeting Status Header */}
                <div className="flex items-start gap-4 sm:gap-5 pb-7 border-b border-[#E8ECEC]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E2F89E] border border-[#C6EE5B] flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#1F6F78]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <Eyebrow className="mb-2">Meeting Status</Eyebrow>
                    <KineticHeading
                      as="h2"
                      text="2026 Annual General & Special Meeting"
                      className={cn(type.h3, tone.headingLight, 'mb-2')}
                    />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-[#15803D]">
                      <span>Meeting held</span>
                      <span className="text-[#5B6B73]" aria-hidden="true">&bull;</span>
                      <span className="text-[#0B1F2A]">7 August 2026</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Record Date & Location Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-7">
                  {/* Record Date */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[#1F6F78] shrink-0" aria-hidden="true" />
                      <span className="text-xs text-[#5B6B73] font-heading font-semibold uppercase tracking-wider">
                        Record date
                      </span>
                    </div>
                    <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block mb-1.5">
                      3 July 2026
                    </span>
                    <p className={cn(type.body, tone.mutedLight)}>
                      Shareholders of record as of this date were eligible to vote at the meeting.
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#1F6F78] shrink-0" aria-hidden="true" />
                      <span className="text-xs text-[#5B6B73] font-heading font-semibold uppercase tracking-wider">
                        Location
                      </span>
                    </div>
                    <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block mb-1.5">
                      Vancouver, British Columbia
                    </span>
                    <p className={cn(type.body, tone.mutedLight)}>
                      The meeting was held as a hybrid meeting with both in-person and virtual participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: OFFICIAL MEETING MATERIALS (Dark Navy Card) */}
            <div data-reveal="card" className="lg:col-span-6 min-w-0">
              <div className="h-full bg-[#0B1F2A] text-white rounded-[20px] lg:rounded-[24px] border border-[#1D3B4C] p-6 sm:p-8 shadow-xl">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pb-5 border-b border-white/10 mb-2">
                  <Eyebrow dark className="mb-0">OFFICIAL MEETING MATERIALS</Eyebrow>
                  <span className="text-xs font-heading font-medium text-[#DDE3E3]/75 uppercase tracking-wider">
                    ALL DOCUMENTS
                  </span>
                </div>

                {/* Document List */}
                <div className="divide-y divide-white/10">
                  {OFFICIAL_DOCUMENTS.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.url}
                      target={doc.isExternal ? '_blank' : undefined}
                      rel={doc.isExternal ? 'noopener noreferrer' : undefined}
                      className="py-4 flex items-center justify-between gap-4 group transition-colors"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#B7E34A]/20 group-hover:border-[#B7E34A] group-hover:text-[#B7E34A] transition-colors shrink-0 mt-0.5">
                          {doc.isExternal ? (
                            <ExternalLink className="w-5 h-5" aria-hidden="true" />
                          ) : (
                            <FileText className="w-5 h-5" aria-hidden="true" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-heading font-semibold text-[15px] sm:text-base text-white group-hover:text-[#B7E34A] transition-colors leading-snug line-clamp-2">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-[#DDE3E3]/75 leading-relaxed line-clamp-2 sm:line-clamp-1 mt-0.5">
                            {doc.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right hidden sm:block">
                          <span className="text-[11px] text-[#DDE3E3]/75 uppercase block leading-none mb-1">
                            {doc.isExternal ? '' : 'Published'}
                          </span>
                          <span className="text-xs text-[#DDE3E3]/75 group-hover:text-white transition-colors whitespace-nowrap">
                            {doc.publishedDate}
                          </span>
                        </div>
                        <ArrowRight
                          className="w-4 h-4 text-[#2DD4BF] group-hover:text-[#B7E34A] group-hover:translate-x-1 transition-all"
                          aria-hidden="true"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. HOW SHAREHOLDER VOTING WORKS
         ========================================================= */}
      <section className="relative z-10 section-y pt-0">
        <Container>
          {/* Section Header (external link kept as a plain anchor so it opens in a new tab) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <SectionHeading
              title="How shareholder voting works"
              description="Different processes apply depending on how you hold your shares."
              className="mb-0 min-w-0"
            />

            <a
              data-reveal="fade"
              href="https://www.sedarplus.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm font-semibold shrink-0 inline-flex items-center gap-1.5 sm:pb-1.5 group"
            >
              <span>Learn more about voting</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {VOTING_STEPS.map(({ step, title, body, Icon }) => (
              <div key={step} data-reveal="card" className="h-full min-w-0">
                <div className={cn('h-full bg-white rounded-[16px] border border-[#DDE3E3] p-6 sm:p-7', cardHover)}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-8 h-8 rounded-full bg-[#E2F89E] text-[#0B1F2A] font-heading font-bold text-sm flex items-center justify-center">
                      {step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className={cn(type.h4, tone.headingLight, 'mb-2')}>{title}</h3>

                  <p className={cn(type.body, tone.mutedLight)}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Need Help? Horizontal Card */}
          <div data-reveal className="bg-white rounded-[16px] border border-[#DDE3E3] p-6 sm:p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Need help? */}
              <div className="sm:col-span-2 lg:col-span-4 flex items-start gap-4 min-w-0">
                <div className="w-12 h-12 rounded-full bg-[#E2F89E] border border-[#C6EE5B] flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#1F6F78]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className={cn(type.h4, tone.headingLight, 'mb-1')}>Need help?</h3>
                  <p className={cn(type.body, tone.mutedLight)}>
                    If you have questions about the meeting materials or require assistance with voting, please contact our investor relations team or our transfer agent.
                  </p>
                </div>
              </div>

              {/* Middle Column: Investor Relations */}
              <div className="lg:col-span-4 lg:border-l lg:border-[#E8ECEC] lg:pl-8 flex items-start gap-3.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className={detailLabelClass}>Investor Relations</span>
                  <a
                    href="mailto:info@monumental.energy"
                    className="text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors break-words"
                  >
                    info@monumental.energy
                  </a>
                </div>
              </div>

              {/* Right Column: Transfer Agent */}
              <div className="lg:col-span-4 lg:border-l lg:border-[#E8ECEC] lg:pl-8 flex items-start gap-3.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                  <Building className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className={detailLabelClass}>Transfer Agent</span>
                  <span className="text-sm font-bold text-[#0B1F2A] block mb-0.5">
                    Computershare Investor Services Inc.
                  </span>
                  <span className={cn('text-sm block', tone.mutedLight)}>
                    For voting support and shareholder enquiries.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. RELATED INVESTOR RESOURCES (3-Card Row)
         ========================================================= */}
      <section className="relative z-10 section-y pt-0">
        <Container>
          <SectionHeading title="Related Investor Resources" size="compact" />

          {/* 3 Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {RESOURCES.map(({ href, title, description, Icon }) => (
              <div key={href} data-reveal="card" className="h-full min-w-0">
                <Link
                  href={href}
                  className={cn(
                    'h-full p-5 sm:p-6 rounded-[16px] bg-white border border-[#DDE3E3] flex items-center justify-between gap-4 group',
                    cardHover
                  )}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={cn(type.h4, tone.headingLight, 'group-hover:text-[#1F6F78] transition-colors mb-1')}>
                        {title}
                      </h3>
                      <span className={cn('text-sm leading-relaxed block', tone.mutedLight)}>
                        {description}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
