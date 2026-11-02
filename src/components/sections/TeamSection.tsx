'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TEAM_MEMBERS, TeamMember } from '@/data/team';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  ChevronRight,
  ExternalLink,
  FileText,
  TrendingUp,
  Handshake,
  Users,
  ShieldCheck,
  Scale,
  Building2,
  Coins,
  Briefcase,
  Wrench,
  Workflow,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

function FocusIcon({ icon }: { icon: string }) {
  const iconClass = 'w-3.5 h-3.5 text-[#1F6F78] stroke-[2] shrink-0';
  switch (icon) {
    case 'trending-up':
      return <TrendingUp className={iconClass} aria-hidden="true" />;
    case 'handshake':
      return <Handshake className={iconClass} aria-hidden="true" />;
    case 'users':
      return <Users className={iconClass} aria-hidden="true" />;
    case 'file-text':
      return <FileText className={iconClass} aria-hidden="true" />;
    case 'shield-check':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'scale':
      return <Scale className={iconClass} aria-hidden="true" />;
    case 'building':
      return <Building2 className={iconClass} aria-hidden="true" />;
    case 'coins':
      return <Coins className={iconClass} aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className={iconClass} aria-hidden="true" />;
    case 'wrench':
      return <Wrench className={iconClass} aria-hidden="true" />;
    case 'workflow':
      return <Workflow className={iconClass} aria-hidden="true" />;
    default:
      return <Sparkles className={iconClass} aria-hidden="true" />;
  }
}

export const TeamSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TEAM_MEMBERS[0].id);

  const leadershipMembers = TEAM_MEMBERS.filter((m) => m.group === 'leadership');
  const advisoryMembers = TEAM_MEMBERS.filter((m) => m.group === 'advisory');

  const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedId);
  const selectedMember = TEAM_MEMBERS[currentIndex >= 0 ? currentIndex : 0];

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
    setSelectedId(TEAM_MEMBERS[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TEAM_MEMBERS.length;
    setSelectedId(TEAM_MEMBERS[nextIdx].id);
  };

  const renderDirectoryButton = (member: TeamMember) => {
    const isSelected = member.id === selectedMember.id;
    return (
      <button
        key={member.id}
        type="button"
        onClick={() => setSelectedId(member.id)}
        className={cn(
          'w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6F78]',
          isSelected
            ? 'bg-white border-l-[3.5px] border-l-[#1F6F78] border-y-[#DDE3E3] border-r-[#DDE3E3] shadow-[0_2px_8px_rgba(11,31,42,0.06)]'
            : 'bg-white/60 hover:bg-white border-transparent hover:border-[#DDE3E3] text-[#5B6B73]'
        )}
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar or Monogram */}
          {member.image ? (
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-black/10 bg-[#0B1F2A] shadow-xs">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1F2A] border border-[#1D3B4C] flex items-center justify-center text-xs font-heading font-bold text-[#B7E34A] shrink-0 shadow-xs">
              {member.initials || 'ME'}
            </div>
          )}

          {/* Name & Role */}
          <div className="min-w-0">
            <h4
              className={cn(
                'font-heading font-bold text-sm tracking-tight truncate',
                isSelected ? 'text-[#0B1F2A]' : 'text-[#334149] group-hover:text-[#0B1F2A]'
              )}
            >
              {member.name}
            </h4>
            <span className="text-[11px] text-[#5B6B73] block truncate leading-tight mt-0.5">
              {member.role}
            </span>
          </div>
        </div>

        <ChevronRight
          className={cn(
            'w-4 h-4 shrink-0 transition-transform duration-200',
            isSelected
              ? 'text-[#1F6F78] translate-x-0.5'
              : 'text-[#9AA6AC] group-hover:translate-x-0.5'
          )}
          aria-hidden="true"
        />
      </button>
    );
  };

  return (
    <section id="team" className="relative section-y bg-[#F5F6F1] border-t border-[#DDE3E3]/80">
      {/* Background Topographic Curves */}
      <div
        className="absolute top-0 right-0 w-[550px] sm:w-[680px] h-[550px] pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 700 600" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M180 0 C 260 90, 320 170, 500 190 C 600 200, 640 280, 700 320" />
          <path d="M220 0 C 290 100, 360 180, 530 210 C 620 225, 660 320, 700 370" />
          <path d="M260 0 C 330 120, 400 200, 560 230 C 630 245, 670 360, 700 420" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Section Heading following the exact structure and typography of previous sections */}
        <SectionHeading
          eyebrow="LEADERSHIP & ADVISORY"
          title="Our Team & Advisory Board"
          description="An experienced team with a disciplined approach to energy investment, technical excellence, and shareholder value."
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        {/* Master-Detail Editorial Showcase Container */}
        <div
          data-reveal="card"
          className="bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] shadow-sm overflow-hidden flex flex-col"
        >
          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#DDE3E3] min-h-[580px]">
            
            {/* -------------------------------------------------------
                LEFT COLUMN: DIRECTORY OF ALL MEMBERS (GROUPED)
               ------------------------------------------------------- */}
            <div className="lg:col-span-5 xl:col-span-4 p-4 sm:p-5 lg:p-6 bg-[#F5F6F1] flex flex-col min-w-0 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#DDE3E3_transparent]">
              {/* Group 1: Board & Management */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-[#0B1F2A]">
                    Board &amp; Management
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#1F6F78] bg-[#EDF3F1] px-2 py-0.5 rounded-md">
                    {leadershipMembers.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {leadershipMembers.map(renderDirectoryButton)}
                </div>
              </div>

              {/* Group 2: Technical Advisory Board */}
              <div>
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-[#0B1F2A]">
                    Technical Advisory Board
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#1F6F78] bg-[#EDF3F1] px-2 py-0.5 rounded-md">
                    {advisoryMembers.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {advisoryMembers.map(renderDirectoryButton)}
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------
                RIGHT COLUMN: BESPOKE EXECUTIVE / ADVISOR PROFILE
               ------------------------------------------------------- */}
            <div className="lg:col-span-7 xl:col-span-8 p-5 sm:p-7 lg:p-8 bg-white flex flex-col justify-between overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#DDE3E3_transparent]">
              <div className="space-y-6">
                
                {/* Profile Header (Portrait or Monogram Badge + Name + Role + LinkedIn) */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start pb-6 border-b border-[#EAECE6]">
                  {/* Photo or Monogram Card */}
                  {selectedMember.image ? (
                    <div className="relative w-28 sm:w-36 aspect-[4/4.6] rounded-[16px] overflow-hidden shrink-0 border border-[#DDE3E3] shadow-md bg-[#07161F]">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        sizes="(min-width: 640px) 160px, 112px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="relative w-28 sm:w-36 aspect-[4/4.6] rounded-[16px] overflow-hidden shrink-0 border border-[#1D3B4C] bg-[#07161F] p-4 flex flex-col justify-between items-center text-center shadow-md">
                      <div className="w-12 h-12 rounded-full bg-[#162F3F] border border-white/10 flex items-center justify-center text-lg font-heading font-bold text-[#B7E34A] mt-2">
                        {selectedMember.initials || 'ME'}
                      </div>
                      <div className="w-full">
                        <span className="text-[10px] font-mono font-semibold text-[#B7E34A] uppercase tracking-wider block">
                          Technical Advisory
                        </span>
                        {selectedMember.credentials && (
                          <span className="text-[10px] text-[#DDE3E3]/70 block truncate mt-0.5">
                            {selectedMember.credentials}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Header Details */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#1F6F78]/10 text-[#1F6F78] inline-block mb-1.5">
                          {selectedMember.group === 'leadership' ? 'Board & Management' : 'Technical Advisory Board'}
                        </span>
                        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0B1F2A] tracking-[-0.02em] leading-tight">
                          {selectedMember.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-heading font-semibold text-[#1F6F78] uppercase tracking-wider mt-1 mb-3">
                          {selectedMember.role}
                        </p>
                      </div>

                      {selectedMember.linkedinUrl && (
                        <a
                          href={selectedMember.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0A66C2] hover:text-[#004182] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/15 px-2.5 py-1 rounded-md transition-colors shrink-0"
                          title={`${selectedMember.name} on LinkedIn`}
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          <span>LinkedIn</span>
                          <ExternalLink className="w-3 h-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>

                    {/* Areas of Focus Badges */}
                    {selectedMember.areasOfFocus && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {selectedMember.areasOfFocus.map((focus) => (
                          <span
                            key={focus.label}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-[#F5F6F1] border border-[#E2E6DC] text-[#334149]"
                          >
                            <FocusIcon icon={focus.icon} />
                            <span>{focus.label}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Biography Narrative */}
                <div className="space-y-3.5 text-sm sm:text-[15px] leading-[1.75] text-[#374151]">
                  {selectedMember.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Related Disclosures Banner */}
                <div className="pt-2">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DDE3E3] text-[#1F6F78] flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] block leading-tight">
                          Regulatory &amp; Governance Disclosures
                        </span>
                        <span className="text-[11px] text-[#5B6B73] block leading-tight mt-0.5">
                          View verified corporate governance records, SEDAR+ filings, and technical disclosures.
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://www.sedarplus.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors shrink-0 group/link"
                    >
                      <span>View SEDAR+</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =========================================================
              BOTTOM BAR: MEMBER COUNTER & QUICK NAVIGATION
             ========================================================= */}
          <div className="px-5 py-3.5 bg-[#0B1F2A] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-[#1D3B4C] shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#DDE3E3]/70 font-mono">
                Monumental Energy Corp. (TSXV: MNRG)
              </span>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <span className="text-xs text-[#B7E34A] font-heading font-semibold">
                Member {currentIndex + 1} of {TEAM_MEMBERS.length}: {selectedMember.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Team Member"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-semibold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Team Member"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#B7E34A] hover:bg-[#a6d339] text-[#0B1F2A] text-xs font-heading font-bold transition-colors cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
