'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TEAM_MEMBERS, TeamMember } from '@/data/team';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  TrendingUp,
  Handshake,
  Users,
  FileText,
  ShieldCheck,
  Scale,
  Building2,
  Coins,
  Briefcase,
  Wrench,
  Workflow,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

function FocusIcon({ icon }: { icon: string }) {
  const iconClass = 'w-3 h-3 text-[#1F6F78] stroke-[2] shrink-0';
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
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const leadershipMembers = TEAM_MEMBERS.filter((m) => m.group === 'leadership');
  const advisoryMembers = TEAM_MEMBERS.filter((m) => m.group === 'advisory');

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
        {/* Main Section Header */}
        <SectionHeading
          eyebrow="LEADERSHIP & ADVISORY"
          title="Our Team & Advisory Board"
          description="An experienced team with a disciplined approach to energy investment, technical excellence, and shareholder value."
          className="mb-10 sm:mb-12"
        />

        {/* =========================================================
            1. BOARD OF DIRECTORS & SENIOR MANAGEMENT
           ========================================================= */}
        <div className="mb-14 lg:mb-16">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#DDE3E3]">
            <div className="flex items-center gap-2.5">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-[-0.01em]">
                Board of Directors &amp; Management
              </h3>
              <span className="text-xs font-mono font-semibold text-[#1F6F78] bg-[#EDF3F1] px-2 py-0.5 rounded-md">
                4 Members
              </span>
            </div>
            <span className="hidden sm:inline text-xs font-heading font-medium text-[#5B6B73]">
              TSX-V: MNRG Executive Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {leadershipMembers.map((member) => {
              const isExpanded = !!expandedIds[member.id];
              return (
                <div
                  key={member.id}
                  data-reveal="card"
                  className="bg-white rounded-[20px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#1F6F78]/40 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Portrait Photo */}
                    <div className="relative w-full aspect-[4/4.5] rounded-[16px] overflow-hidden bg-[#07161F] border border-[#DDE3E3] mb-4 shadow-xs">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1F6F78] to-[#0B1F2A] text-white font-heading font-bold text-2xl">
                          {member.initials || 'ME'}
                        </div>
                      )}
                    </div>

                    {/* Name & LinkedIn */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] tracking-[-0.01em] group-hover:text-[#1F6F78] transition-colors leading-snug">
                        {member.name}
                      </h4>
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5B6B73] hover:text-[#0A66C2] p-1 -mr-1 transition-colors shrink-0"
                          aria-label={`${member.name} LinkedIn Profile`}
                          title="LinkedIn"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Role */}
                    <p className="text-xs font-heading font-semibold text-[#1F6F78] uppercase tracking-wider mb-3 leading-normal min-h-[32px]">
                      {member.role}
                    </p>

                    {/* Competency Tags */}
                    {member.areasOfFocus && member.areasOfFocus.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.areasOfFocus.map((focus) => (
                          <span
                            key={focus.label}
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F5F6F1] text-[#334149] border border-[#E2E6DC]"
                          >
                            <FocusIcon icon={focus.icon} />
                            <span>{focus.label}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bio Text */}
                    <div className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed space-y-2">
                      <p>{member.bio[0]}</p>
                      {isExpanded && member.bio.slice(1).map((p, idx) => (
                        <p key={idx} className="pt-1">{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Expand Toggle */}
                  {member.bio.length > 1 && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(member.id)}
                      className="mt-4 pt-3 border-t border-[#E8EDE9] w-full flex items-center justify-between text-xs font-heading font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Show less' : 'Read full background'}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            2. TECHNICAL ADVISORY BOARD
           ========================================================= */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#DDE3E3]">
            <div className="flex items-center gap-2.5">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F2A] tracking-[-0.01em]">
                Technical Advisory Board
              </h3>
              <span className="text-xs font-mono font-semibold text-[#1F6F78] bg-[#EDF3F1] px-2 py-0.5 rounded-md">
                3 Advisors
              </span>
            </div>
            <span className="hidden sm:inline text-xs font-heading font-medium text-[#5B6B73]">
              Resource Geology, Dewatering &amp; Operations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {advisoryMembers.map((member) => {
              const isExpanded = !!expandedIds[member.id];
              return (
                <div
                  key={member.id}
                  data-reveal="card"
                  className="bg-white rounded-[20px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#1F6F78]/40 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Monogram Badge & Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1F2A] border border-[#1D3B4C] flex items-center justify-center text-sm font-heading font-bold text-[#B7E34A] shrink-0 shadow-xs">
                        {member.initials || 'ME'}
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1F6F78]/10 text-[#1F6F78]">
                        Technical Advisory
                      </span>
                    </div>

                    {/* Name */}
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] tracking-[-0.01em] group-hover:text-[#1F6F78] transition-colors leading-snug mb-1">
                      {member.name}
                    </h4>

                    {/* Role & Credentials */}
                    <p className="text-xs font-heading font-semibold text-[#1F6F78] uppercase tracking-wider mb-1 leading-normal">
                      {member.role}
                    </p>
                    {member.credentials && (
                      <p className="text-[11px] text-[#5B6B73] font-mono mb-3">
                        {member.credentials}
                      </p>
                    )}

                    {/* Competency Tags */}
                    {member.areasOfFocus && member.areasOfFocus.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.areasOfFocus.map((focus) => (
                          <span
                            key={focus.label}
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F5F6F1] text-[#334149] border border-[#E2E6DC]"
                          >
                            <FocusIcon icon={focus.icon} />
                            <span>{focus.label}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bio Text */}
                    <div className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed space-y-2">
                      <p>{member.bio[0]}</p>
                      {isExpanded && member.bio.slice(1).map((p, idx) => (
                        <p key={idx} className="pt-1">{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Expand Toggle */}
                  {member.bio.length > 1 && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(member.id)}
                      className="mt-4 pt-3 border-t border-[#E8EDE9] w-full flex items-center justify-between text-xs font-heading font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Show less' : 'Read full background'}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            3. REGULATORY TRUST NOTE
           ========================================================= */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#DDE3E3] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#EDF3F1] text-[#1F6F78] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A]">
                Regulatory &amp; Governance Disclosures
              </h4>
              <p className="text-xs text-[#5B6B73]">
                All executive appointments, share ownerships, and advisory mandates are publicly filed on SEDAR+.
              </p>
            </div>
          </div>
          <a
            href="https://www.sedarplus.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors shrink-0 group/link"
          >
            <span>View SEDAR+ Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
};
