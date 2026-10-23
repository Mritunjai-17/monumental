'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import {
  Users,
  ArrowRight,
  X,
  ChevronRight,
  ExternalLink,
  FileText,
  TrendingUp,
  Handshake,
  ShieldCheck,
  Scale,
  Building2,
  Coins,
  Briefcase,
  Wrench,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '@/data/team';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';

const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

function FocusIcon({ icon }: { icon: string }) {
  const iconClass = 'w-3.5 h-3.5 text-[#1F6F78] stroke-[2]';
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

export function TeamCardWithModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedId, setSelectedId] = useState<string>(TEAM_MEMBERS[0].id);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const triggerEl = triggerRef.current;

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerEl?.focus();
    };
  }, [isOpen]);

  const selectedMember =
    TEAM_MEMBERS.find((m) => m.id === selectedId) || TEAM_MEMBERS[0];

  const leadershipMembers = TEAM_MEMBERS.filter((m) => m.group === 'leadership');
  const advisoryMembers = TEAM_MEMBERS.filter((m) => m.group === 'advisory');

  const renderDirectoryButton = (member: TeamMember) => {
    const isSelected = member.id === selectedMember.id;
    return (
      <button
        key={member.id}
        type="button"
        onClick={() => setSelectedId(member.id)}
        className={cn(
          'w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all duration-200 group cursor-pointer',
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

  const modalContent = isOpen && mounted ? (
    createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#0B1F2A]/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        {/* Modal Window Container */}
        <div className="relative w-full max-w-[1040px] max-h-[90vh] bg-[#F5F6F1] text-[#0B1F2A] rounded-[24px] border border-[#1D3B4C]/20 shadow-2xl flex flex-col overflow-hidden my-auto animate-in zoom-in-95 duration-200">
          
          {/* =========================================================
              1. HEADER: CINEMATIC NAVY BANNER WITH MOUNTAIN BLEED
             ========================================================= */}
          <div className="relative bg-[#07161F] text-white px-6 py-6 sm:px-8 sm:py-7 overflow-hidden shrink-0 border-b border-[#1D3B4C]">
            {/* Topographical Curves in Background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06] select-none z-0"
              aria-hidden="true"
            >
              <svg viewBox="0 0 900 300" fill="none" stroke="#FFFFFF" strokeWidth="1.2" className="w-full h-full">
                <path d="M0 80 C 180 50, 320 140, 500 100 C 680 60, 780 150, 900 110" />
                <path d="M0 130 C 200 90, 350 180, 540 140 C 710 100, 800 190, 900 150" />
                <path d="M0 180 C 220 130, 380 220, 580 180 C 740 140, 820 230, 900 190" />
              </svg>
            </div>

            {/* Seamless Panoramic Mountain Photograph with Multi-stop Gradient Fade */}
            <div className="hidden md:block absolute top-0 right-0 bottom-0 w-3/5 overflow-hidden pointer-events-none z-0">
              <Image
                src="/images/about-hero-taranaki.jpg"
                alt="Mount Taranaki Landscape"
                fill
                sizes="(min-width: 1024px) 600px, 400px"
                className="object-cover object-[center_35%] opacity-40 mix-blend-luminosity"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07161F] via-[#07161F]/90 to-[#07161F]/20" />
            </div>

            {/* Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close team modal"
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Text Copy */}
            <div className="relative z-10 max-w-lg min-w-0 pr-12 sm:pr-0">
              <span className="text-[11px] font-heading font-semibold uppercase tracking-[0.16em] text-[#B7E34A] block mb-1.5">
                LEADERSHIP &amp; ADVISORY
              </span>
              <h2
                id="team-modal-title"
                className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-[-0.02em] leading-tight mb-2"
              >
                Our Team &amp; Advisory Board
              </h2>
              <p className="text-xs sm:text-sm text-[#DDE3E3]/85 leading-relaxed font-body">
                An experienced team with a disciplined approach to energy investment, technical excellence, and shareholder value.
              </p>
            </div>
          </div>

          {/* =========================================================
              2. MAIN BODY: EDITORIAL MASTER-DETAIL LAYOUT
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-y-auto lg:overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[#DDE3E3]">
            
            {/* -------------------------------------------------------
                LEFT COLUMN: DIRECTORY OF ALL MEMBERS (GROUPED)
               ------------------------------------------------------- */}
            <div className="lg:col-span-4 p-4 sm:p-5 lg:p-6 bg-[#F5F6F1] flex flex-col min-w-0 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#DDE3E3_transparent]">
              {/* Group 1: Board & Management */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-[0.14em] text-[#0B1F2A]">
                    Board &amp; Management
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#87969F]">
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
                  <span className="text-[10px] font-mono font-semibold text-[#87969F]">
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
            <div className="lg:col-span-8 p-5 sm:p-7 lg:p-8 bg-white flex flex-col justify-between overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#DDE3E3_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#DDE3E3] [&::-webkit-scrollbar-thumb]:rounded-full">
              <div className="space-y-6">
                
                {/* Profile Header (Portrait or Monogram Badge + Name + Role + LinkedIn) */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start pb-6 border-b border-[#EAECE6]">
                  {/* Photo or Monogram Card */}
                  {selectedMember.image ? (
                    <div className="relative w-32 sm:w-40 aspect-[4/4.6] rounded-[16px] overflow-hidden shrink-0 border border-[#DDE3E3] shadow-md bg-[#07161F]">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        sizes="(min-width: 640px) 160px, 128px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="relative w-32 sm:w-40 aspect-[4/4.6] rounded-[16px] overflow-hidden shrink-0 border border-[#1D3B4C] bg-[#07161F] p-4 flex flex-col justify-between items-center text-center shadow-md">
                      <div className="w-14 h-14 rounded-full bg-[#162F3F] border border-white/10 flex items-center justify-center text-xl font-heading font-bold text-[#B7E34A] mt-2">
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
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1F6F78]/10 text-[#1F6F78] inline-block mb-1.5">
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
              3. FOOTER STRIP
             ========================================================= */}
          <div className="relative px-6 py-3.5 bg-[#07161F] text-white flex items-center justify-between text-xs border-t border-[#1D3B4C] shrink-0">
            <span className="text-xs text-[#DDE3E3]/70 font-mono">
              Monumental Energy Corp. (TSXV: MNRG)
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#DDE3E3] hover:text-[#B7E34A] transition-colors"
            >
              <span>Close</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="View Our Team and Advisory Board"
        className={cn(
          'w-full h-full text-left bg-white rounded-[16px] border border-[#DDE3E3] p-5 sm:p-6 shadow-sm flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6F78]',
          cardHover
        )}
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <Users className="w-7 h-7 text-[#1F6F78] stroke-[1.6]" aria-hidden="true" />
          </div>
          <h3 className={cn(type.h4, tone.headingLight, 'mb-1.5')}>
            Our Team
          </h3>
          <p className={cn(type.body, tone.mutedLight, 'mb-4')}>
            A leadership team with deep industry experience in energy and natural resources.
          </p>
        </div>
        <div className="flex justify-end">
          <ArrowRight
            className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all"
            aria-hidden="true"
          />
        </div>
      </button>

      {modalContent}
    </>
  );
}
