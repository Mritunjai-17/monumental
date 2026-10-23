'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Share2,
  Layers,
  Mountain,
  TrendingUp,
  Gem,
  Leaf,
} from 'lucide-react';

export function StrategicLocationsSection() {
  const [activeRegion, setActiveRegion] = useState<'both' | 'nz' | 'chile'>('both');

  return (
    <section
      aria-labelledby="strategic-locations-heading"
      className="section-y bg-[#FAFBF9] relative overflow-hidden border-t border-[#E8EDE9]"
    >
      {/* Subtle Topographical Elevation Contour Background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden"
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

      <Container className="relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* =========================================================
              LEFT COLUMN: HEADLINE, COPY, CTA & FEATURE BULLETS
             ========================================================= */}
          <div data-reveal="fade" className="lg:col-span-4 xl:col-span-3 min-w-0">
            {/* Accent Line + Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#1F6F78]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#1F6F78] uppercase">
                STRATEGIC LOCATIONS
              </span>
            </div>

            {/* Main Headline */}
            <h2
              id="strategic-locations-heading"
              className="text-3xl sm:text-4xl lg:text-[38px] font-heading font-bold text-[#0B1F2A] leading-[1.12] mb-4"
            >
              Positioned in Key
              <br />
              Energy Regions
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed mb-6 max-w-sm">
              Our assets are located in established energy regions with access to infrastructure and global markets.
            </p>

            {/* Lime Green Button */}
            <Link
              href="/projects/new-zealand"
              className="inline-flex items-center gap-2 bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-semibold text-sm px-6 py-3 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-200 group w-fit mb-8 sm:mb-10"
            >
              <span>View project details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            {/* Feature Highlights: Established Regions & Global Access */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-6 pt-1 border-t border-[#E8EDE9] lg:border-t-0 xl:border-t xl:border-[#E8EDE9] xl:pt-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F0] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] block leading-tight">
                    Established Regions
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#5B6B73] block leading-snug mt-0.5">
                    Located in proven energy jurisdictions.
                  </span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F0] border border-[#CCD8D5] flex items-center justify-center text-[#1F6F78] shrink-0">
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] block leading-tight">
                    Global Access
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#5B6B73] block leading-snug mt-0.5">
                    Strong infrastructure and market connectivity.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              CENTER COLUMN: 3D INTERACTIVE GLOBE & FILTER PILLS
             ========================================================= */}
          <div data-reveal="fade" className="lg:col-span-4 xl:col-span-4 flex flex-col items-center justify-center min-w-0 py-4 lg:py-0">
            {/* Globe Sphere with SVG Graphics & Interactive Callouts */}
            <div className="relative w-full max-w-[390px] sm:max-w-[430px] aspect-square flex items-center justify-center select-none">
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_16px_36px_rgba(11,31,42,0.08)]" fill="none">
                <defs>
                  {/* Sphere 3D lighting fill */}
                  <radialGradient id="globe-sphere-gradient" cx="38%" cy="32%" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#EFF5F3" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#DFECE8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C9D9D4" stopOpacity="0.98" />
                  </radialGradient>

                  {/* Atmospheric outer glow */}
                  <radialGradient id="globe-rim-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="85%" stopColor="#1F6F78" stopOpacity="0" />
                    <stop offset="97%" stopColor="#1F6F78" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#1F6F78" stopOpacity="0.25" />
                  </radialGradient>

                  {/* Transcontinental trajectory gradient */}
                  <linearGradient id="globe-trajectory" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B7E34A" />
                    <stop offset="50%" stopColor="#2DD4BF" />
                    <stop offset="100%" stopColor="#1F6F78" />
                  </linearGradient>

                  {/* Clip path for globe sphere */}
                  <clipPath id="globe-circle-clip">
                    <circle cx="250" cy="250" r="215" />
                  </clipPath>
                </defs>

                {/* Base Sphere */}
                <circle cx="250" cy="250" r="215" fill="url(#globe-sphere-gradient)" stroke="#CCD9D5" strokeWidth="1.5" />

                {/* Inside Sphere Geometry */}
                <g clipPath="url(#globe-circle-clip)">
                  {/* Latitude Grid Arcs */}
                  <path d="M 40 180 Q 250 140 460 180" stroke="#CCD8D4" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 35 250 Q 250 200 465 250" stroke="#CCD8D4" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 45 320 Q 250 280 455 320" stroke="#CCD8D4" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 75 390 Q 250 360 425 390" stroke="#CCD8D4" strokeWidth="0.8" strokeDasharray="3 3" />
                  <path d="M 75 110 Q 250 80 425 110" stroke="#CCD8D4" strokeWidth="0.8" strokeDasharray="3 3" />

                  {/* Longitude Meridians (Ellipses) */}
                  <ellipse cx="250" cy="250" rx="190" ry="215" stroke="#CCD8D4" strokeWidth="0.7" strokeDasharray="3 3" />
                  <ellipse cx="250" cy="250" rx="120" ry="215" stroke="#CCD8D4" strokeWidth="0.7" strokeDasharray="3 3" />
                  <ellipse cx="250" cy="250" rx="55" ry="215" stroke="#CCD8D4" strokeWidth="0.7" strokeDasharray="3 3" />
                  <line x1="250" y1="35" x2="250" y2="465" stroke="#CCD8D4" strokeWidth="0.7" strokeDasharray="3 3" />

                  {/* Pacific Radar Expansions around New Zealand */}
                  <circle cx="260" cy="335" r="45" stroke="#2DD4BF" strokeWidth="0.8" strokeDasharray="2 4" strokeOpacity="0.35" />
                  <circle cx="260" cy="335" r="75" stroke="#2DD4BF" strokeWidth="0.8" strokeDasharray="3 5" strokeOpacity="0.25" />

                  {/* Pacific Radar Expansions around Chile */}
                  <circle cx="205" cy="185" r="50" stroke="#B7E34A" strokeWidth="0.8" strokeDasharray="2 4" strokeOpacity="0.35" />
                  <circle cx="205" cy="185" r="85" stroke="#B7E34A" strokeWidth="0.8" strokeDasharray="3 5" strokeOpacity="0.2" />

                  {/* South America Continent (Vector Silhouette) */}
                  <path
                    d="M 190 85 C 220 95, 235 120, 245 150 C 250 175, 238 215, 222 250 C 210 275, 195 310, 182 340 C 176 355, 168 348, 165 330 C 160 300, 164 265, 168 230 C 172 195, 165 170, 160 145 C 158 130, 166 100, 190 85 Z"
                    fill="#D5E2DE"
                    stroke="#B8CCC6"
                    strokeWidth="1.2"
                    className="transition-opacity duration-300"
                    opacity={activeRegion === 'nz' ? 0.45 : 0.85}
                  />

                  {/* Chile Concession Highlight Coastal Ribbon */}
                  <path
                    d="M 192 145 C 196 160, 198 180, 196 205 C 193 235, 188 265, 180 295 C 176 312, 172 325, 175 330 C 173 332, 169 328, 168 320 C 165 305, 168 285, 172 255 C 176 225, 178 195, 175 168 C 174 156, 178 146, 192 145 Z"
                    fill="#1F6F78"
                    opacity={activeRegion === 'nz' ? 0.3 : 0.65}
                    className="transition-opacity duration-300"
                  />

                  {/* North America / Central America entry top left */}
                  <path
                    d="M 130 40 C 150 45, 170 60, 185 80 C 175 92, 160 98, 150 90 C 140 82, 132 60, 130 40 Z"
                    fill="#D5E2DE"
                    opacity="0.5"
                  />

                  {/* Australia East Coast (faint silhouette on the far west) */}
                  <path
                    d="M 60 260 C 85 275, 95 300, 90 330 C 85 355, 70 380, 55 400 Z"
                    fill="#D5E2DE"
                    opacity="0.4"
                  />

                  {/* New Zealand North Island */}
                  <path
                    d="M 268 312 C 274 306, 280 310, 282 316 C 284 322, 276 328, 270 334 C 264 340, 258 346, 254 342 C 250 338, 255 330, 260 324 C 265 318, 264 314, 268 312 Z"
                    fill="#1F6F78"
                    opacity={activeRegion === 'chile' ? 0.3 : 0.85}
                    className="transition-opacity duration-300"
                  />

                  {/* New Zealand South Island */}
                  <path
                    d="M 252 344 C 248 350, 240 362, 234 372 C 230 380, 236 384, 242 380 C 248 376, 256 364, 260 354 C 262 348, 256 342, 252 344 Z"
                    fill="#1F6F78"
                    opacity={activeRegion === 'chile' ? 0.3 : 0.85}
                    className="transition-opacity duration-300"
                  />

                  {/* Trajectory / Connection Arc between Chile & NZ */}
                  <path
                    d="M 205 185 Q 260 220 260 335"
                    fill="none"
                    stroke="url(#globe-trajectory)"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    strokeOpacity={activeRegion === 'both' ? 0.75 : 0.35}
                    className="transition-opacity duration-300"
                  />

                  {/* Chile Concession Pulsing Marker (Atacama) */}
                  <g
                    transform="translate(205, 185)"
                    className={cn(
                      'transition-transform duration-300 cursor-pointer',
                      activeRegion === 'chile' && 'scale-125'
                    )}
                    onClick={() => setActiveRegion('chile')}
                  >
                    <circle r="16" fill="#B7E34A" fillOpacity="0.25" className="animate-ping" />
                    <circle r="9" fill="#B7E34A" fillOpacity="0.7" />
                    <circle r="4.5" fill="#0B1F2A" stroke="#B7E34A" strokeWidth="1.5" />
                  </g>

                  {/* New Zealand Concession Pulsing Marker (Taranaki) */}
                  <g
                    transform="translate(260, 335)"
                    className={cn(
                      'transition-transform duration-300 cursor-pointer',
                      activeRegion === 'nz' && 'scale-125'
                    )}
                    onClick={() => setActiveRegion('nz')}
                  >
                    <circle r="16" fill="#B7E34A" fillOpacity="0.25" className="animate-ping" />
                    <circle r="9" fill="#B7E34A" fillOpacity="0.7" />
                    <circle r="4.5" fill="#0B1F2A" stroke="#B7E34A" strokeWidth="1.5" />
                  </g>
                </g>

                {/* Atmospheric Rim Edge */}
                <circle cx="250" cy="250" r="215" fill="url(#globe-rim-glow)" pointerEvents="none" />
              </svg>

              {/* Floating Callout Card: Chile */}
              <button
                type="button"
                onClick={() => setActiveRegion('chile')}
                className={cn(
                  'absolute top-[28%] left-[44%] sm:left-[45%] -translate-y-1/2',
                  'bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border shadow-[0_8px_20px_rgba(11,31,42,0.12)]',
                  'text-left transition-all duration-300 z-20 group min-w-[130px] sm:min-w-[145px]',
                  activeRegion === 'chile'
                    ? 'border-[#1F6F78] ring-2 ring-[#1F6F78]/30 scale-105'
                    : 'border-[#DDE3E3] hover:border-[#1F6F78]/60 hover:scale-105',
                  activeRegion === 'nz' && 'opacity-40 scale-95'
                )}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] block leading-tight">
                    Chile
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B7E34A] shrink-0" aria-hidden="true" />
                </div>
                <span className="text-[11px] text-[#5B6B73] block mt-0.5 leading-tight">
                  Salar de Turi
                </span>
                <span className="text-[10px] text-[#1F6F78] font-semibold block mt-0.5 leading-tight">
                  Lithium Royalty
                </span>
              </button>

              {/* Floating Callout Card: New Zealand */}
              <button
                type="button"
                onClick={() => setActiveRegion('nz')}
                className={cn(
                  'absolute top-[64%] left-[58%] sm:left-[60%] -translate-y-1/2',
                  'bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border shadow-[0_8px_20px_rgba(11,31,42,0.12)]',
                  'text-left transition-all duration-300 z-20 group min-w-[130px] sm:min-w-[145px]',
                  activeRegion === 'nz'
                    ? 'border-[#1F6F78] ring-2 ring-[#1F6F78]/30 scale-105'
                    : 'border-[#DDE3E3] hover:border-[#1F6F78]/60 hover:scale-105',
                  activeRegion === 'chile' && 'opacity-40 scale-95'
                )}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] block leading-tight">
                    New Zealand
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B7E34A] shrink-0" aria-hidden="true" />
                </div>
                <span className="text-[11px] text-[#5B6B73] block mt-0.5 leading-tight">
                  Taranaki Basin
                </span>
                <span className="text-[10px] text-[#1F6F78] font-semibold block mt-0.5 leading-tight">
                  Oil &amp; Gas
                </span>
              </button>
            </div>

            {/* Region Filter Pill Switch: Show both | New Zealand | Chile */}
            <div className="mt-4 flex items-center p-1 bg-white/95 backdrop-blur-md rounded-full border border-[#DDE3E3] shadow-md z-20">
              <button
                type="button"
                onClick={() => setActiveRegion('both')}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none',
                  activeRegion === 'both'
                    ? 'bg-[#0B1F2A] text-white shadow-sm'
                    : 'text-[#5B6B73] hover:text-[#0B1F2A]'
                )}
              >
                Show both
              </button>
              <button
                type="button"
                onClick={() => setActiveRegion('nz')}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none',
                  activeRegion === 'nz'
                    ? 'bg-[#0B1F2A] text-white shadow-sm'
                    : 'text-[#5B6B73] hover:text-[#0B1F2A]'
                )}
              >
                New Zealand
              </button>
              <button
                type="button"
                onClick={() => setActiveRegion('chile')}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none',
                  activeRegion === 'chile'
                    ? 'bg-[#0B1F2A] text-white shadow-sm'
                    : 'text-[#5B6B73] hover:text-[#0B1F2A]'
                )}
              >
                Chile
              </button>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: TWO PROJECT SUMMARY CARDS (STACKED)
             ========================================================= */}
          <div data-reveal="fade" className="lg:col-span-4 xl:col-span-5 min-w-0 space-y-4">
            {/* Card 1: New Zealand / Taranaki Basin */}
            <Link
              href="/projects/new-zealand"
              onMouseEnter={() => {
                if (activeRegion === 'both') setActiveRegion('nz');
              }}
              onMouseLeave={() => {
                if (activeRegion === 'nz') setActiveRegion('both');
              }}
              className={cn(
                'block bg-white rounded-[20px] p-4 sm:p-5 border shadow-sm transition-all duration-300 group',
                activeRegion === 'nz'
                  ? 'border-[#1F6F78] ring-2 ring-[#1F6F78]/25 shadow-md'
                  : 'border-[#E5EAE8] hover:border-[#1F6F78]/50 hover:shadow-md',
                activeRegion === 'chile' && 'opacity-60'
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start">
                {/* Photo Thumbnail */}
                <div className="relative w-full sm:w-44 md:w-48 aspect-[16/10] sm:aspect-square md:aspect-[4/3] rounded-[14px] overflow-hidden shrink-0 border border-[#E8EDE9] bg-[#07161F]">
                  <Image
                    src="/images/project-new-zealand.jpg"
                    alt="New Zealand Taranaki Basin production wellhead with Mount Taranaki"
                    fill
                    sizes="(min-width: 640px) 200px, 100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 w-full">
                  {/* Top Eyebrow + Arrow Button */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B7E34A] shrink-0" aria-hidden="true" />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#5B6B73] uppercase">
                        NEW ZEALAND
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#F5F6F1] flex items-center justify-center text-[#0B1F2A] group-hover:bg-[#0B1F2A] group-hover:text-white transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors mb-2">
                    Taranaki Basin
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed mb-4">
                    Exposure to conventional oil and gas in a proven onshore basin with an established infrastructure base.
                  </p>

                  {/* 3 Metrics / Tags */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0F4F2]">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <Layers className="w-3.5 h-3.5 text-[#1F6F78] shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-[11px] text-[#0B1F2A] block leading-tight truncate">
                          Oil &amp; Gas
                        </span>
                        <span className="text-[10px] text-[#5B6B73] block leading-tight truncate">
                          Onshore basin
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 min-w-0">
                      <Mountain className="w-3.5 h-3.5 text-[#1F6F78] shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-[11px] text-[#0B1F2A] block leading-tight truncate">
                          Proven
                        </span>
                        <span className="text-[10px] text-[#5B6B73] block leading-tight truncate">
                          Infrastructure
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 text-[#1F6F78] shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-[11px] text-[#0B1F2A] block leading-tight truncate">
                          Growth
                        </span>
                        <span className="text-[10px] text-[#5B6B73] block leading-tight truncate">
                          Opportunities
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: Chile / Salar de Turi */}
            <Link
              href="/projects/salar-de-turi"
              onMouseEnter={() => {
                if (activeRegion === 'both') setActiveRegion('chile');
              }}
              onMouseLeave={() => {
                if (activeRegion === 'chile') setActiveRegion('both');
              }}
              className={cn(
                'block bg-white rounded-[20px] p-4 sm:p-5 border shadow-sm transition-all duration-300 group',
                activeRegion === 'chile'
                  ? 'border-[#1F6F78] ring-2 ring-[#1F6F78]/25 shadow-md'
                  : 'border-[#E5EAE8] hover:border-[#1F6F78]/50 hover:shadow-md',
                activeRegion === 'nz' && 'opacity-60'
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start">
                {/* Photo Thumbnail */}
                <div className="relative w-full sm:w-44 md:w-48 aspect-[16/10] sm:aspect-square md:aspect-[4/3] rounded-[14px] overflow-hidden shrink-0 border border-[#E8EDE9] bg-[#07161F]">
                  <Image
                    src="/images/project-salar-de-turi.jpg"
                    alt="Salar de Turi lithium brine lake and Andean mountains in Chile"
                    fill
                    sizes="(min-width: 640px) 200px, 100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 w-full">
                  {/* Top Eyebrow + Arrow Button */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1F6F78] shrink-0" aria-hidden="true" />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#5B6B73] uppercase">
                        CHILE
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#F5F6F1] flex items-center justify-center text-[#0B1F2A] group-hover:bg-[#0B1F2A] group-hover:text-white transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors mb-2">
                    Salar de Turi
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#5B6B73] leading-relaxed mb-4">
                    A 2% net smelter return royalty interest in a large, advanced lithium project in northern Chile.
                  </p>

                  {/* 3 Metrics / Tags */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0F4F2]">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <Gem className="w-3.5 h-3.5 text-[#1F6F78] shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-[11px] text-[#0B1F2A] block leading-tight truncate">
                          Lithium
                        </span>
                        <span className="text-[10px] text-[#5B6B73] block leading-tight truncate">
                          Royalty interest
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-[#1F6F78] shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-[11px] text-[#0B1F2A] block leading-tight truncate">
                          Strategic
                        </span>
                        <span className="text-[10px] text-[#5B6B73] block leading-tight truncate">
                          Location
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 min-w-0">
                      <Leaf className="w-3.5 h-3.5 text-[#1F6F78] shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-[11px] text-[#0B1F2A] block leading-tight truncate">
                          Long-term
                        </span>
                        <span className="text-[10px] text-[#5B6B73] block leading-tight truncate">
                          Value
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
