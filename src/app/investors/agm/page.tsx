import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/seo';
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
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-8 lg:pb-12">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] lg:min-h-[380px]">
            {/* Left Column (Headline & Copy) */}
            <div className="lg:col-span-7 pr-0 lg:pr-8">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                SHAREHOLDER GOVERNANCE
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                Annual General<br />Meeting
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Access the official meeting notice, proxy materials and related documents for Monumental Energy&apos;s Annual General and Special Meeting of Shareholders.
              </p>
            </div>

            {/* Mobile Image Fallback */}
            <div className="lg:hidden col-span-1 mt-2">
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
      <section className="py-6 sm:py-8 lg:py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* LEFT CARD: MEETING STATUS (White Card) */}
            <div className="lg:col-span-6 bg-white rounded-[22px] border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
              <div>
                {/* Top Row: Meeting Status Header */}
                <div className="flex items-start gap-5 pb-7 border-b border-[#E8ECEC]">
                  <div className="w-14 h-14 rounded-2xl bg-[#E2F89E] border border-[#C6EE5B] flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                    <Calendar className="w-7 h-7 text-[#1F6F78]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-[#87969F] uppercase font-heading font-bold tracking-wider leading-none mb-1.5">
                      MEETING<br />STATUS
                    </div>
                    <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-[26px] text-[#0B1F2A] tracking-tight leading-snug mb-1.5">
                      2026 Annual General &amp; Special Meeting
                    </h2>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#15803D]">
                      <span>Meeting held</span>
                      <span className="text-[#87969F]">&bull;</span>
                      <span className="text-[#0B1F2A]">7 August 2026</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Record Date & Location Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-7">
                  {/* Record Date */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[#1F6F78] shrink-0" />
                      <span className="text-xs text-[#87969F] font-heading font-semibold uppercase tracking-wider">
                        Record date
                      </span>
                    </div>
                    <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block mb-1.5">
                      3 July 2026
                    </span>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
                      Shareholders of record as of this date were eligible to vote at the meeting.
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#1F6F78] shrink-0" />
                      <span className="text-xs text-[#87969F] font-heading font-semibold uppercase tracking-wider">
                        Location
                      </span>
                    </div>
                    <span className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] block mb-1.5">
                      Vancouver, British Columbia
                    </span>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
                      The meeting was held as a hybrid meeting with both in-person and virtual participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: OFFICIAL MEETING MATERIALS (Dark Navy Card) */}
            <div className="lg:col-span-6 bg-[#07161F] text-white rounded-[22px] border border-[#183040] p-7 sm:p-9 shadow-xl flex flex-col justify-between">
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                    <span className="text-xs font-heading font-semibold text-[#B7E34A] uppercase tracking-[0.16em]">
                      OFFICIAL MEETING MATERIALS
                    </span>
                  </div>
                  <span className="text-[11px] font-heading font-medium text-[#87969F] uppercase tracking-wider">
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
                      className="py-4 flex items-center justify-between gap-4 group transition-colors block"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#B7E34A]/20 group-hover:border-[#B7E34A] group-hover:text-[#B7E34A] transition-colors shrink-0 mt-0.5">
                          {doc.isExternal ? (
                            <ExternalLink className="w-5 h-5" />
                          ) : (
                            <FileText className="w-5 h-5" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-heading font-semibold text-sm sm:text-[15px] text-white group-hover:text-[#B7E34A] transition-colors leading-snug line-clamp-2">
                            {doc.title}
                          </h3>
                          <p className="text-xs text-[#87969F] leading-relaxed line-clamp-1 mt-0.5">
                            {doc.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right hidden sm:block">
                          <span className="text-[10px] text-[#87969F] uppercase block leading-none mb-0.5">
                            {doc.isExternal ? '' : 'Published'}
                          </span>
                          <span className="text-xs text-[#87969F] group-hover:text-white transition-colors">
                            {doc.publishedDate}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#2DD4BF] group-hover:text-[#B7E34A] group-hover:translate-x-1 transition-all" />
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
      <section className="py-8 sm:py-12">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] tracking-tight">
                  How shareholder voting works
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5B6B73]">
                Different processes apply depending on how you hold your shares.
              </p>
            </div>

            <a
              href="https://www.sedarplus.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors shrink-0 group"
            >
              <span>Learn more about voting</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Step 1: Registered Shareholders */}
            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-7 shadow-sm hover:border-[#1F6F78] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-8 h-8 rounded-full bg-[#E2F89E] text-[#0B1F2A] font-heading font-bold text-sm flex items-center justify-center">
                    1
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78]">
                    <FileEdit className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-[#0B1F2A] mb-2">
                  Registered shareholders
                </h3>

                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  If your shares are registered in your name, you can vote online through Computershare or return a signed proxy form by mail.
                </p>
              </div>
            </div>

            {/* Step 2: Beneficial Shareholders */}
            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-7 shadow-sm hover:border-[#1F6F78] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-8 h-8 rounded-full bg-[#E2F89E] text-[#0B1F2A] font-heading font-bold text-sm flex items-center justify-center">
                    2
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78]">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-[#0B1F2A] mb-2">
                  Beneficial shareholders
                </h3>

                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  If you hold shares through a broker or financial institution, you will receive a Voting Instruction Form (VIF) and should follow the instructions provided by your intermediary.
                </p>
              </div>
            </div>

            {/* Step 3: Filing Archive */}
            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-7 shadow-sm hover:border-[#1F6F78] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-8 h-8 rounded-full bg-[#E2F89E] text-[#0B1F2A] font-heading font-bold text-sm flex items-center justify-center">
                    3
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78]">
                    <FileSearch className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-[#0B1F2A] mb-2">
                  Filing archive
                </h3>

                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  All official meeting materials and results are filed on SEDAR+. You can view the complete record of the AGM and related disclosures.
                </p>
              </div>
            </div>
          </div>

          {/* Need Help? Horizontal Card */}
          <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-6 sm:p-7 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Need help? (5 cols) */}
              <div className="lg:col-span-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E2F89E] border border-[#C6EE5B] flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#1F6F78]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[#0B1F2A] mb-1">
                    Need help?
                  </h4>
                  <p className="text-xs text-[#5B6B73] leading-relaxed">
                    If you have questions about the meeting materials or require assistance with voting, please contact our investor relations team or our transfer agent.
                  </p>
                </div>
              </div>

              {/* Middle Column: Investor Relations (3.5 cols) */}
              <div className="lg:col-span-3 lg:border-l lg:border-[#E8ECEC] lg:pl-6 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#87969F] uppercase font-heading font-bold tracking-wider block mb-1">
                    Investor Relations
                  </span>
                  <a
                    href="mailto:info@monumental.energy"
                    className="text-xs sm:text-[13px] font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors"
                  >
                    info@monumental.energy
                  </a>
                </div>
              </div>

              {/* Right Column: Transfer Agent (3.5 cols) */}
              <div className="lg:col-span-4 lg:border-l lg:border-[#E8ECEC] lg:pl-6 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#87969F] uppercase font-heading font-bold tracking-wider block mb-1">
                    Transfer Agent
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0B1F2A] block mb-0.5">
                    Computershare Investor Services Inc.
                  </span>
                  <span className="text-[11px] text-[#87969F] block">
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
      <section className="py-10 sm:py-14">
        <Container>
          {/* Header Bar */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-1 bg-[#B7E34A] rounded-full inline-block" />
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-tight">
              Related Investor Resources
            </h3>
          </div>

          {/* 3 Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Investor Centre */}
            <Link
              href="/investors"
              className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-1">
                    Investor Centre
                  </h4>
                  <span className="text-xs text-[#87969F] block">
                    Financial information, filings and more
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>

            {/* Card 2: Corporate Presentation */}
            <Link
              href="/investors/presentation"
              className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-1">
                    Corporate Presentation
                  </h4>
                  <span className="text-xs text-[#87969F] block">
                    View our latest investor deck
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>

            {/* Card 3: News & Market Releases */}
            <Link
              href="/news"
              className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <Newspaper className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-1">
                    News &amp; Market Releases
                  </h4>
                  <span className="text-xs text-[#87969F] block">
                    Latest company announcements
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
