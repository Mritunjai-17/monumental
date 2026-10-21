'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Navigation, Layers, ExternalLink, ShieldCheck, Zap, Compass } from 'lucide-react';

interface AssetGisMapProps {
  projectId: string;
  projectName: string;
  location: string;
  coordinates: string;
}

export const AssetGisMap: React.FC<AssetGisMapProps> = ({
  projectId,
  projectName,
  location,
  coordinates,
}) => {
  const [mapMode, setMapMode] = useState<'satellite' | 'gis'>('gis');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const isNewZealand = projectId.includes('new-zealand');
  
  // Real geographic center coordinates
  const latDecimal = isNewZealand ? -39.3333 : -22.2333;
  const lngDecimal = isNewZealand ? 174.2833 : -68.3333;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latDecimal},${lngDecimal}`;

  const telemetry = isNewZealand
    ? {
        basin: 'Taranaki Basin Structural Graben',
        access: 'State Highway 3 / Sealed Roadway',
        power: 'National Grid 110kV Interconnect',
        port: 'Port Taranaki (Deepwater Terminal)',
        concessionType: 'Exploration & Mining Permits (NZP&M)',
        elevation: '120m ASL',
      }
    : {
        basin: 'Antofagasta / Puna Pre-Andean Basin',
        access: 'Ruta 23 International Highway',
        power: 'Northern Interconnected Power System (SEN)',
        port: 'Antofagasta Commercial Port (250km)',
        concessionType: '2.0% Net Smelter Return (NSR) Royalty',
        elevation: '2,900m ASL',
      };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#1D3B4C] bg-[#07151D] text-white shadow-xl">
      {/* Map Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#0B1F2A]/90 backdrop-blur-md border-b border-[#1D3B4C] z-20 relative">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B7E34A] animate-pulse" />
          <span className="text-xs font-mono tracking-wider uppercase text-[#DDE3E3]">
            LIVE GIS TELEMETRY • {isNewZealand ? 'NZCS2000' : 'SAD69 / PSAD56'}
          </span>
        </div>

        {/* Mode controls & external links */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#07151D] p-0.5 rounded-lg border border-[#1D3B4C]">
            <button
              type="button"
              onClick={() => setMapMode('gis')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                mapMode === 'gis'
                  ? 'bg-[#1F6F78] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Dark GIS
            </button>
            <button
              type="button"
              onClick={() => setMapMode('satellite')}
              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                mapMode === 'satellite'
                  ? 'bg-[#1F6F78] text-white shadow-sm'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              Satellite
            </button>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-lg bg-[#0E2836] border border-[#1D3B4C] text-[#B7E34A] hover:bg-[#123648] transition-colors"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Map Visual Display */}
      <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden flex items-center justify-center bg-[#091B24]">
        {/* Layer 1: Photographic / Satellite Satellite Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            mapMode === 'satellite' ? 'opacity-85' : 'opacity-25'
          }`}
          style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.4s ease-out' }}
        >
          <Image
            src={isNewZealand ? '/images/project-new-zealand.jpg' : '/images/project-salar-de-turi.jpg'}
            alt={`${projectName} satellite landscape`}
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07151D] via-transparent to-[#07151D]/60" />
        </div>

        {/* Layer 2: Vector Topographic GIS Contour Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gis-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F6F78" strokeWidth="0.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gis-grid)" />
            {/* Topographic elevation lines */}
            <path d="M 0 100 Q 250 50, 500 120 T 1000 80 T 1600 140" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 0 160 Q 300 120, 600 190 T 1200 130 T 1600 200" fill="none" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
            <path d="M 0 240 Q 200 200, 500 270 T 1100 220 T 1600 280" fill="none" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.4" />
            <path d="M 0 320 Q 350 280, 700 340 T 1300 300 T 1600 360" fill="none" stroke="#2DD4BF" strokeWidth="0.8" opacity="0.3" />
          </svg>
        </div>

        {/* Layer 3: Concession Perimeter Boundary Overlay */}
        <div
          className="absolute z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#B7E34A]/50 bg-[#B7E34A]/5 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Outer Exploration Halo */}
          <div className="w-full h-full rounded-full border border-[#1F6F78]/40" />
        </div>

        {/* Layer 4: Interactive Coordinate Radar Pin */}
        <div className="relative z-20 flex flex-col items-center">
          {/* Radar Ring Animation */}
          <div className="relative flex items-center justify-center">
            <span className="absolute w-12 h-12 rounded-full bg-[#B7E34A]/25 animate-ping" />
            <span className="absolute w-7 h-7 rounded-full bg-[#B7E34A]/40" />
            <div className="relative w-10 h-10 rounded-full bg-[#0B1F2A] border-2 border-[#B7E34A] flex items-center justify-center shadow-lg shadow-[#B7E34A]/30 text-[#B7E34A]">
              <MapPin className="w-5 h-5 fill-[#B7E34A]/20" />
            </div>
          </div>

          {/* Coordinate Tooltip Card */}
          <div className="mt-3 px-3.5 py-1.5 rounded-lg bg-[#0B1F2A]/95 border border-[#1D3B4C] backdrop-blur-md shadow-xl text-center">
            <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-[#B7E34A] block">
              {location}
            </span>
            <span className="font-mono text-xs font-bold text-white tracking-wide">
              {coordinates}
            </span>
          </div>
        </div>

        {/* Zoom Controls Overlay (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1 bg-[#0B1F2A]/90 backdrop-blur-md border border-[#1D3B4C] rounded-lg p-1 shadow-lg">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 1.75))}
            className="w-7 h-7 rounded flex items-center justify-center text-white hover:bg-white/10 text-sm font-bold transition-colors"
            aria-label="Zoom in"
          >
            +
          </button>
          <div className="h-[1px] bg-[#1D3B4C]" />
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.85))}
            className="w-7 h-7 rounded flex items-center justify-center text-white hover:bg-white/10 text-sm font-bold transition-colors"
            aria-label="Zoom out"
          >
            -
          </button>
        </div>

        {/* Compass Needle Indicator (Top Left) */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B1F2A]/80 backdrop-blur-md border border-[#1D3B4C] text-[10px] font-mono text-[#DDE3E3]">
          <Compass className="w-3.5 h-3.5 text-[#B7E34A]" />
          <span>N 0°00′</span>
        </div>
      </div>

      {/* Regional Infrastructure Telemetry HUD Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#1D3B4C] text-xs">
        <div className="p-3.5 bg-[#07151D] flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
            Basin Structure
          </span>
          <span className="font-semibold text-white leading-tight">{telemetry.basin}</span>
        </div>

        <div className="p-3.5 bg-[#07151D] flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
            Corridor Access
          </span>
          <span className="font-semibold text-white leading-tight">{telemetry.access}</span>
        </div>

        <div className="p-3.5 bg-[#07151D] flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
            Power Grid
          </span>
          <span className="font-semibold text-[#B7E34A] leading-tight">{telemetry.power}</span>
        </div>

        <div className="p-3.5 bg-[#07151D] flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
            Shipping Logistics
          </span>
          <span className="font-semibold text-white leading-tight">{telemetry.port}</span>
        </div>

        <div className="p-3.5 bg-[#07151D] flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
            Tenure Structure
          </span>
          <span className="font-semibold text-[#2DD4BF] leading-tight">{telemetry.concessionType}</span>
        </div>

        <div className="p-3.5 bg-[#07151D] flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
            Basin Elevation
          </span>
          <span className="font-mono font-semibold text-white leading-tight">{telemetry.elevation}</span>
        </div>
      </div>
    </div>
  );
};
