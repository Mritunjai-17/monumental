'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import {
  MapPin,
  Gem,
  Mountain,
  FileText,
  ChevronDown,
  ChevronUp,
  Map,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Crosshair,
} from 'lucide-react';

interface GlanceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  details: string;
}

const GLANCE_ITEMS: GlanceItem[] = [
  {
    id: 'location',
    icon: MapPin,
    title: 'Regional Logistics & Infrastructure',
    subtitle: 'Route 27CH international paved transport corridor',
    details:
      'Situated 80 km east of San Pedro de Atacama via the paved Route 27CH international highway. The property benefits from established regional mining logistics, proximity to the Argentine border crossing, and year-round heavy truck access.',
  },
  {
    id: 'mineral',
    icon: Gem,
    title: 'Basin Hydrology & Genesis',
    subtitle: 'Closed evaporite catchment with volcanic ash leaching',
    details:
      'An internally drained hydrological basin with no surface outlet. Subterranean aquifers continuously leach soluble mineral ions from thick surrounding Andean volcanic sequences, concentrating them in evaporite salt beds under intense solar radiation.',
  },
  {
    id: 'stage',
    icon: Mountain,
    title: 'Target Geochemistry',
    subtitle: 'Coincident lithium brine & cesium sediment anomalies',
    details:
      'Reconnaissance field programs and surface sampling confirmed coincident anomalous concentrations of both lithium and cesium in near-surface brines and salar sediments, indicating high prospects for dual-commodity extraction.',
  },
  {
    id: 'steps',
    icon: FileText,
    title: 'Development Architecture',
    subtitle: 'Direct Lithium Extraction (DLE) & commercial off-take',
    details:
      'Positioned to deploy modern DLE processing technologies that minimize freshwater consumption, lower lifecycle footprint, and accelerate production timelines without reliance on multi-year evaporation pond construction.',
  },
];

interface FormationStep {
  step: number;
  title: string;
  badge: string;
  description: string;
}

const FORMATION_STEPS: FormationStep[] = [
  {
    step: 1,
    title: 'Volcanic source rocks',
    badge: '1 Volcanic source rocks',
    description:
      'Mineral-rich volcanic rocks in the Andes release lithium and cesium over time, which are carried by groundwater into closed basins.',
  },
  {
    step: 2,
    title: 'Groundwater transport',
    badge: '2 Groundwater transport',
    description:
      'Subterranean aquifer systems transport dissolved mineral ions through porous volcanic sediments directly into hydrologically closed basins.',
  },
  {
    step: 3,
    title: 'Evaporation & concentration',
    badge: '3 Evaporation & concentration',
    description:
      'In the arid, high-altitude desert climate, intense solar radiation causes rapid evaporation, precipitating concentrated lithium and cesium salts.',
  },
];

export function LagunaBlancaIntelligenceRow() {
  // Card 2 State: Accordion
  const [expandedGlance, setExpandedGlance] = useState<string>('location');

  // Card 3 State: Formation Stepper
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const currentStep = FORMATION_STEPS[currentStepIndex];

  const handleNextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % FORMATION_STEPS.length);
  };

  const handlePrevStep = () => {
    setCurrentStepIndex((prev) => (prev - 1 + FORMATION_STEPS.length) % FORMATION_STEPS.length);
  };

  // Card 1 State: Zoom Level
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.95));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section className="py-6 sm:py-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* =========================================================
              CARD 1: PHOTOREALISTIC SATELLITE MAP OF NORTHERN CHILE
             ========================================================= */}
          <div data-reveal="card" className="lg:col-span-4 min-w-0 flex flex-col">
            <div className="h-full min-h-[580px] rounded-[22px] bg-[#0A1A24] border border-[#1D3B4C] overflow-hidden shadow-sm flex flex-col justify-between relative select-none">
              {/* Satellite Image Background with Zoom Transformation */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                  className="relative w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <Image
                    src="/images/chile-satellite-map.jpg"
                    alt="Satellite imagery of northern Chile coastline, Andes mountains, and salt flats"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center contrast-110 brightness-95"
                    priority
                  />
                  {/* Subtle Ocean Deepening Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/40 via-transparent to-[#07161F]/30" />
                </div>
              </div>

              {/* Ocean Label on Pacific */}
              <div className="absolute top-[355px] left-6 z-10 pointer-events-none select-none">
                <span className="font-serif italic text-white/70 text-xs sm:text-sm tracking-widest block">
                  Pacific
                </span>
                <span className="font-serif italic text-white/70 text-xs sm:text-sm tracking-widest block">
                  Ocean
                </span>
              </div>

              {/* Compass Rose (North Arrow) in Top Left - Clean minimalist matching reference */}
              <div className="absolute top-5 left-5 z-20 flex flex-col items-center select-none pointer-events-none text-white/90">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-none stroke-white stroke-[2.2]">
                  <path d="M10 2L5 13h10L10 2z" />
                </svg>
                <span className="text-[10px] font-mono font-bold text-white leading-none mt-0.5 tracking-wider">N</span>
              </div>

              {/* Country Labels */}
              <div className="absolute top-6 right-7 z-10 pointer-events-none select-none">
                <span className="font-heading font-bold text-sm tracking-[0.25em] text-white/75 uppercase drop-shadow">
                  BOLIVIA
                </span>
              </div>

              <div className="absolute top-[320px] left-[175px] z-10 pointer-events-none select-none">
                <span className="font-heading font-bold text-base tracking-[0.25em] text-white/85 uppercase drop-shadow">
                  CHILE
                </span>
              </div>

              {/* Coastal City 1: Arica + Callout Box */}
              <div className="absolute top-[88px] left-[62px] z-20 flex items-center gap-2">
                <span className="font-heading font-bold text-sm text-white drop-shadow-md select-none">
                  Arica
                </span>
                <div className="relative">
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0B1F2A] shadow-md" />
                  <div className="absolute -inset-1 rounded-full border border-white/50 animate-ping" />
                </div>
              </div>

              {/* Arica Callout Box with diagonal connector */}
              <div className="absolute top-[122px] left-4 z-20 bg-[#0B1F2A]/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/15 shadow-xl max-w-[155px]">
                <span className="font-heading font-bold text-xs text-white block leading-tight">
                  Arica
                </span>
                <span className="text-[10px] text-[#DDE3E3]/80 block leading-snug mt-1">
                  Regional hub with access to infrastructure and services.
                </span>
              </div>

              {/* Coastal City 2: Iquique + Callout Box */}
              <div className="absolute top-[345px] left-[80px] z-20 flex items-center gap-2">
                <span className="font-heading font-bold text-sm text-white drop-shadow-md select-none">
                  Iquique
                </span>
                <div className="relative">
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0B1F2A] shadow-md" />
                </div>
              </div>

              {/* Iquique Callout Box */}
              <div className="absolute top-[378px] left-5 z-20 bg-[#0B1F2A]/90 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/15 shadow-xl max-w-[150px]">
                <span className="font-heading font-bold text-xs text-white block leading-tight">
                  Iquique
                </span>
                <span className="text-[10px] text-[#DDE3E3]/80 block leading-snug mt-1">
                  Port city with access to global markets.
                </span>
              </div>

              {/* Concession Area Polygon & Project Callout Card */}
              <div className="absolute top-[110px] right-[24px] sm:right-[32px] z-20 flex flex-col items-center">
                {/* Floating Laguna Blanca White Card */}
                <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-2xl border border-[#DDE3E3] min-w-[175px] mb-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading font-bold text-xs sm:text-[13px] text-[#0B1F2A] block leading-tight">
                      Laguna Blanca
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B1F2A]" />
                  </div>
                  <span className="text-[10px] text-[#5B6B73] block mt-0.5 leading-tight">
                    Lithium &amp; cesium exploration project
                  </span>
                </div>

                {/* Highlighted Polygon Overlay Canvas */}
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
                    {/* Access route lines connecting Arica & Iquique */}
                    <path
                      d="M -70 5 Q -20 25 35 45"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                      strokeOpacity="0.8"
                    />
                    <path
                      d="M -50 170 Q -10 95 45 65"
                      fill="none"
                      stroke="#2DD4BF"
                      strokeWidth="1.4"
                      strokeDasharray="4 3"
                    />

                    {/* Concession Boundary Polygon */}
                    <polygon
                      points="20,10 70,5 95,45 80,95 40,105 10,65"
                      fill="#B7E34A"
                      fillOpacity="0.32"
                      stroke="#B7E34A"
                      strokeWidth="2"
                    />
                    <polygon
                      points="24,14 66,9 90,45 76,90 40,99 15,64"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="0.8"
                      strokeDasharray="2 2"
                      strokeOpacity="0.75"
                    />

                    {/* Green Location Pin marker (teardrop pin like Image 2) */}
                    <g transform="translate(52, 45)">
                      <circle r="12" fill="#B7E34A" fillOpacity="0.25" className="animate-ping" />
                      {/* Teardrop Pin */}
                      <path
                        d="M 0 -10 C -5 -10 -9 -6 -9 -1 C -9 5 0 12 0 12 C 0 12 9 5 9 -1 C 9 -6 5 -10 0 -10 Z"
                        fill="#B7E34A"
                        stroke="#0B1F2A"
                        strokeWidth="0.8"
                      />
                      <circle cx="0" cy="-2" r="3" fill="#0B1F2A" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Map Zoom Controls (Right edge) */}
              <div className="absolute top-[215px] right-3.5 z-20 bg-[#0B1F2A]/90 backdrop-blur-md rounded-lg border border-white/15 p-1 flex flex-col items-center gap-1 shadow-lg text-white">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  aria-label="Zoom in map"
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 active:bg-white/20 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <div className="w-4 h-[1px] bg-white/20" />
                <button
                  type="button"
                  onClick={handleZoomOut}
                  aria-label="Zoom out map"
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 active:bg-white/20 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <div className="w-4 h-[1px] bg-white/20" />
                <button
                  type="button"
                  onClick={handleResetZoom}
                  aria-label="Recenter map"
                  className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 active:bg-white/20 transition-colors"
                >
                  <Crosshair className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Legend Box in Bottom Left */}
              <div className="absolute bottom-4 left-4 z-20 bg-[#07161F]/90 backdrop-blur-md rounded-xl p-3 border border-white/15 text-white select-none shadow-xl max-w-[170px]">
                <div className="space-y-1.5 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#B7E34A]" />
                    <span className="text-[10px] text-[#DDE3E3]">Project area (indicative)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-[10px] text-[#DDE3E3]">Key cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-[1px] bg-white border-t border-dashed border-white" />
                    <span className="text-[10px] text-[#DDE3E3]">International border</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-[1.5px] bg-[#2DD4BF] border-t border-dashed border-[#2DD4BF]" />
                    <span className="text-[10px] text-[#DDE3E3]">Access route (indicative)</span>
                  </div>
                </div>

                {/* Scale Bar */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[9px] font-mono text-[#DDE3E3]/70">
                  <span>0</span>
                  <div className="flex-1 mx-2 h-[2px] bg-white/60 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white" />
                  </div>
                  <span>200 km</span>
                </div>
              </div>

              {/* Inset Minimap of Chile (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 w-[72px] h-[120px] bg-[#07161F]/90 backdrop-blur-md rounded-xl p-1.5 border border-white/15 flex flex-col items-center justify-between select-none shadow-xl">
                <div className="relative w-full h-[90px]">
                  <svg viewBox="0 0 50 140" className="w-full h-full" fill="none">
                    <path
                      d="M 28 8 C 30 18, 30 32, 28 46 C 26 62, 24 82, 24 100 C 22 116, 20 126, 24 135 C 22 136, 18 134, 18 128 C 16 118, 17 104, 19 88 C 21 72, 22 56, 21 40 C 20 28, 22 14, 28 8 Z"
                      fill="#1F6F78"
                      stroke="#2DD4BF"
                      strokeWidth="0.8"
                    />
                    {/* Glowing point for Laguna Blanca at northern tip */}
                    <circle cx="28" cy="18" r="3.5" fill="#B7E34A" />
                    <circle cx="28" cy="18" r="7" stroke="#B7E34A" strokeWidth="0.8" fill="none" opacity="0.6" className="animate-ping" />
                  </svg>
                </div>
                <span className="text-[7.5px] font-mono font-bold tracking-widest text-[#DDE3E3] uppercase block leading-none">
                  Project Location
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================
              CARD 2: "PROJECT AT A GLANCE" (DARK SLATE ACCORDION CARD)
             ========================================================= */}
          <div data-reveal="card" className="lg:col-span-4 min-w-0 flex flex-col">
            <div className="h-full min-h-[580px] rounded-[22px] bg-[#0B1F2A] text-white p-6 sm:p-7 border border-[#1D3B4C] shadow-sm flex flex-col justify-between relative overflow-hidden">
              {/* Topographic Watermark Radar Rings */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-[0.06] select-none z-0"
                aria-hidden="true"
              >
                <svg viewBox="0 0 300 300" fill="none" stroke="#FFFFFF" strokeWidth="1.2">
                  <circle cx="220" cy="80" r="50" />
                  <circle cx="220" cy="80" r="85" />
                  <circle cx="220" cy="80" r="120" />
                  <circle cx="220" cy="80" r="155" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <h3 className="font-heading font-bold text-2xl text-white mb-1">
                  Project at a glance
                </h3>
                <p className="text-xs text-[#DDE3E3]/70 mb-5">
                  Key details about Laguna Blanca.
                </p>

                {/* 4 Interactive Accordion Items */}
                <div className="space-y-3.5">
                  {GLANCE_ITEMS.map((item) => {
                    const isExpanded = expandedGlance === item.id;
                    const IconComponent = item.icon;

                    return (
                      <div
                        key={item.id}
                        className={cn(
                          'rounded-xl border transition-all duration-200 overflow-hidden',
                          isExpanded
                            ? 'bg-white/5 border-white/15 shadow-sm'
                            : 'border-transparent hover:bg-white/[0.03]'
                        )}
                      >
                        {/* Accordion Row Header */}
                        <button
                          type="button"
                          onClick={() => setExpandedGlance(isExpanded ? '' : item.id)}
                          aria-expanded={isExpanded}
                          className="w-full py-2.5 px-3 flex items-start justify-between gap-3 text-left transition-colors"
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-[#1F6F78]/35 border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                              <IconComponent className="w-4 h-4" aria-hidden="true" />
                            </div>
                            <div className="min-w-0">
                              <span className="font-heading font-bold text-sm text-white block leading-tight">
                                {item.title}
                              </span>
                              <span className="text-xs text-[#DDE3E3]/80 block mt-0.5 leading-snug">
                                {item.subtitle}
                              </span>
                            </div>
                          </div>

                          <div className="shrink-0 mt-1">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-[#B7E34A]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#DDE3E3]/60" />
                            )}
                          </div>
                        </button>

                        {/* Expanded Content Box */}
                        {isExpanded && (
                          <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#DDE3E3]/90 leading-relaxed border-t border-white/10 mt-1">
                            {item.details}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Lime Green CTA Button */}
              <div className="relative z-10 pt-4 mt-auto">
                <button
                  type="button"
                  onClick={() => setExpandedGlance('location')}
                  className="w-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow group"
                >
                  <Map className="w-4 h-4" />
                  <span>View project location</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================
              CARD 3: "HOW THE MINERAL SYSTEM FORMS" (PHOTOREALISTIC DIAGRAM)
             ========================================================= */}
          <div data-reveal="card" className="lg:col-span-4 min-w-0 flex flex-col">
            <div className="h-full min-h-[580px] rounded-[22px] bg-white border border-[#DDE3E3] p-5 sm:p-6 shadow-sm flex flex-col justify-between">
              <div>
                {/* Header */}
                <h3 className="font-heading font-bold text-2xl text-[#0B1F2A] mb-1">
                  How the mineral system forms
                </h3>
                <p className="text-xs text-[#5B6B73] mb-5">
                  Laguna Blanca&apos;s potential is linked to a well-understood geological process in the Andes.
                </p>

                {/* 3 Step Stepper Connected with Horizontal Bar */}
                <div className="relative mb-5 pt-1">
                  {/* Connecting Horizontal Line */}
                  <div className="absolute top-4 left-6 right-6 h-[2px] bg-[#E8EDE9] z-0" />

                  <div className="grid grid-cols-3 gap-2 relative z-10">
                    {FORMATION_STEPS.map((s, idx) => {
                      const isActive = idx === currentStepIndex;
                      return (
                        <button
                          key={s.step}
                          type="button"
                          onClick={() => setCurrentStepIndex(idx)}
                          className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                        >
                          {/* Step Number Circle */}
                          <div
                            className={cn(
                              'w-8 h-8 rounded-full flex items-center justify-center text-xs font-heading font-bold transition-all duration-200 mb-1.5 shadow-sm',
                              isActive
                                ? 'bg-[#B7E34A] text-[#0B1F2A] ring-4 ring-[#B7E34A]/25 scale-105'
                                : idx < currentStepIndex
                                ? 'bg-[#1F6F78] text-white'
                                : 'bg-white border-2 border-[#CBD5D2] text-[#5B6B73] group-hover:border-[#1F6F78]'
                            )}
                          >
                            {s.step}
                          </div>

                          {/* Step Label */}
                          <span
                            className={cn(
                              'text-[11px] font-heading font-semibold leading-tight transition-colors',
                              isActive ? 'text-[#0B1F2A]' : 'text-[#5B6B73] group-hover:text-[#0B1F2A]'
                            )}
                          >
                            {s.title}
                          </span>

                          {/* Active Indicator Bar Underneath */}
                          {isActive && (
                            <div className="w-10 h-1 bg-[#B7E34A] rounded-full mt-1.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Photorealistic Andean Geological Infographic Graphic */}
                <div className="relative rounded-2xl overflow-hidden border border-[#DDE3E3] h-[220px] sm:h-[240px] w-full select-none shadow-inner mb-4">
                  {/* Real High-Resolution Andes Landscape Background Photo */}
                  <Image
                    src="/images/andes-geology-diagram.jpg"
                    alt="Andes mountains volcanic geology and lithium turquoise brine lagoon"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-[center_35%]"
                  />

                  {/* Gentle Gradient Darkening Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-[#0B1F2A]/30" />

                  {/* Active Step Pill Badge at Top Left */}
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md text-[#0B1F2A] rounded-lg py-1 px-2.5 shadow-md border border-[#DDE3E3] flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-mono font-bold text-[10px] flex items-center justify-center">
                      {currentStep.step}
                    </span>
                    <span className="font-heading font-bold text-xs text-[#0B1F2A]">
                      {currentStep.title}
                    </span>
                  </div>

                  {/* Infographic Labels & Animated Vectors Overlaid on Photo */}
                  <div className="absolute inset-0 z-5 pointer-events-none">
                    <svg viewBox="0 0 450 240" className="w-full h-full" preserveAspectRatio="none">
                      {/* STEP 1: Andes Mountains Volcanic Rocks Callout (Left) */}
                      <g
                        className={cn(
                          'transition-opacity duration-300',
                          currentStepIndex === 0 ? 'opacity-100' : 'opacity-40'
                        )}
                      >
                        {/* Callout Box on Mountains */}
                        <rect x="75" y="45" width="135" height="28" rx="6" fill="#0B1F2A" fillOpacity="0.75" />
                        <text x="142" y="63" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">
                          Andes mountains (volcanic rocks)
                        </text>
                        {/* Dashed connector line */}
                        <line x1="142" y1="73" x2="110" y2="105" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="3 2" />

                        {/* Rain & groundwater seepage arrows */}
                        <path d="M 75 110 L 80 145 M 78 145 L 85 138" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M 98 125 L 105 160 M 103 160 L 110 153" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
                      </g>

                      {/* STEP 2: Groundwater Transport (Center / Basin) */}
                      <g
                        className={cn(
                          'transition-opacity duration-300',
                          currentStepIndex === 1 ? 'opacity-100' : 'opacity-55'
                        )}
                      >
                        {/* Callout Box in Valley */}
                        <rect x="180" y="145" width="165" height="26" rx="6" fill="#0B1F2A" fillOpacity="0.8" />
                        <text x="262" y="162" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">
                          Groundwater transport (mineral-rich water)
                        </text>

                        {/* Cyan groundwater horizontal flow arrows */}
                        <path
                          d="M 120 185 Q 220 182 320 185"
                          stroke="#2DD4BF"
                          strokeWidth="3"
                          strokeDasharray="6 4"
                          fill="none"
                        />
                        <path d="M 190 185 L 178 178 M 190 185 L 178 192" stroke="#2DD4BF" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M 280 185 L 268 178 M 280 185 L 268 192" stroke="#2DD4BF" strokeWidth="2.2" strokeLinecap="round" />
                        <path d="M 340 185 L 328 178 M 340 185 L 328 192" stroke="#2DD4BF" strokeWidth="2.2" strokeLinecap="round" />
                      </g>

                      {/* STEP 3: Evaporation and Concentration (Right Pool) */}
                      <g
                        className={cn(
                          'transition-opacity duration-300',
                          currentStepIndex === 2 ? 'opacity-100' : 'opacity-55'
                        )}
                      >
                        {/* Turquoise brine pool outline glow */}
                        <ellipse cx="370" cy="180" rx="55" ry="16" fill="#2DD4BF" fillOpacity="0.4" stroke="#FFFFFF" strokeWidth="1.5" />

                        {/* Evaporation arrows rising */}
                        <path d="M 355 165 L 355 135 M 351 142 L 355 135 L 359 142" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" fill="none" />
                        <path d="M 380 160 L 380 130 M 376 137 L 380 130 L 384 137" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" fill="none" />
                        <path d="M 405 165 L 405 135 M 401 142 L 405 135 L 409 142" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" fill="none" />

                        {/* Callout Box for Evaporation */}
                        <rect x="330" y="98" width="112" height="26" rx="5" fill="#0B1F2A" fillOpacity="0.8" />
                        <text x="386" y="115" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">
                          Evaporation &amp; concentration
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Explanation Text & Carousel Navigation */}
              <div className="pt-2 border-t border-[#F0F4F2] flex items-center justify-between gap-4">
                <p className="text-xs text-[#5B6B73] leading-relaxed flex-1">
                  {currentStep.description}
                </p>

                {/* Carousel Arrow Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    aria-label="Previous geological formation step"
                    className="w-9 h-9 rounded-full bg-[#F5F6F1] border border-[#DDE3E3] flex items-center justify-center text-[#0B1F2A] hover:bg-[#E8EDE9] transition-colors shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    aria-label="Next geological formation step"
                    className="w-9 h-9 rounded-full bg-[#0B1F2A] text-white flex items-center justify-center hover:bg-[#1D3B4C] transition-colors shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
