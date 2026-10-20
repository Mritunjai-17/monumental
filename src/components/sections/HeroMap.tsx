'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

/*
 * Inline copy of public/images/hero-map.svg (same shapes, coordinates and
 * labels). It is inlined so the two markers can respond to hover, focus and
 * click, which an <img> cannot. Entrance and interaction styles: globals.css
 * (.hm-*).
 */

type AssetId = 'nz' | 'cl';

const ASSETS: Record<
  AssetId,
  { x: number; y: number; name: string; kind: string; color: string; ink: string; label: { x: number; y: number; kindColor: string } }
> = {
  nz: {
    x: 106,
    y: 288,
    name: 'Taranaki Basin, NZ',
    kind: 'OIL & GAS',
    color: '#1F6F78',
    ink: '#FFFFFF',
    label: { x: 140, y: 330, kindColor: '#94A3B8' },
  },
  cl: {
    x: 508,
    y: 214,
    name: 'Salar de Turi, Chile',
    kind: 'LITHIUM ROYALTY',
    color: '#B7E34A',
    ink: '#0B1F2A',
    label: { x: 350, y: 246, kindColor: '#B7E34A' },
  },
};

const ROUTE = 'M106 288 C 220 150, 380 120, 508 214';

export const HeroMap: React.FC = () => {
  const [hovered, setHovered] = useState<AssetId | null>(null);
  const [selected, setSelected] = useState<AssetId | null>(null);
  const highlighted = hovered ?? selected;

  const toggle = (id: AssetId) => setSelected((current) => (current === id ? null : id));

  const hoverProps = (id: AssetId) => ({
    onMouseEnter: () => setHovered(id),
    onMouseLeave: () => setHovered(null),
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      toggle(id);
    },
  });

  const pin = (id: AssetId) => {
    const a = ASSETS[id];
    const isActive = highlighted === id;
    return (
      <g transform={`translate(${a.x} ${a.y})`}>
        <circle className={`hm-pulse hm-pulse-${id}`} r="14" fill="none" stroke={a.color} strokeWidth="2" />
        <g
          role="button"
          tabIndex={0}
          aria-pressed={selected === id}
          aria-label={`${a.name}: ${a.kind.toLowerCase()}`}
          className={cn('hm-pin cursor-pointer', isActive && 'is-active', highlighted && !isActive && 'is-dimmed')}
          {...hoverProps(id)}
          onFocus={() => setHovered(id)}
          onBlur={() => setHovered(null)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle(id);
            }
          }}
        >
          {/* Generous transparent hit area */}
          <circle r="26" cy="-6" fill="transparent" />
          <circle className="hm-focus" r="25" cy="-6" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle className="hm-ring" r="22" cy="-6" fill="none" stroke={a.color} strokeWidth="1.5" />
          <g className={`hm-pin-enter hm-pin-enter-${id}`}>
            <g className="hm-pin-scale">
              <circle r="18" fill={a.color} fillOpacity="0.2" />
              <path
                d="M0 -2 C -8 -2 -12 -9 -12 -14 A 12 12 0 1 1 12 -14 C 12 -9 8 -2 0 -2 Z"
                transform="translate(0 2)"
                fill={a.color}
                stroke={id === 'nz' ? '#FFFFFF' : '#0B1F2A'}
                strokeWidth="1.5"
              />
              <circle cy="-12" r="4" fill={a.ink} />
            </g>
          </g>
        </g>
      </g>
    );
  };

  const label = (id: AssetId) => {
    const a = ASSETS[id];
    const isActive = highlighted === id;
    return (
      <g
        aria-hidden="true"
        className={cn(`hm-label hm-label-${id} cursor-pointer`, isActive && 'is-active', highlighted && !isActive && 'is-dimmed')}
        style={{ fontFamily: 'var(--font-heading), Segoe UI, Arial, sans-serif' }}
        {...hoverProps(id)}
      >
        <rect
          className="hm-label-box"
          x={a.label.x}
          y={a.label.y}
          width="186"
          height="52"
          rx="10"
          fill="#0B1F2A"
          stroke={isActive ? a.color : '#1D3B4C'}
        />
        <text x={a.label.x + 14} y={a.label.y + 22} fontSize="14" fontWeight="700" fill="#FFFFFF">
          {a.name}
        </text>
        <text x={a.label.x + 14} y={a.label.y + 40} fontSize="11" letterSpacing="1.2" fill={a.label.kindColor}>
          {a.kind}
        </text>
      </g>
    );
  };

  return (
    <svg
      viewBox="0 0 600 480"
      className="absolute inset-0 w-full h-full"
      role="group"
      aria-labelledby="hm-title hm-desc"
      onClick={() => setSelected(null)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setSelected(null);
      }}
    >
      <title id="hm-title">Monumental Energy asset map</title>
      <desc id="hm-desc">
        Stylised map of the South Pacific with two markers: Taranaki Basin, New Zealand (oil and gas) and Salar de Turi,
        Chile (lithium royalty), joined by a connector line. Select a marker to highlight it.
      </desc>
      <defs>
        <linearGradient id="hm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E2836" />
          <stop offset="1" stopColor="#081A24" />
        </linearGradient>
        <linearGradient id="hm-route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1F6F78" />
          <stop offset="1" stopColor="#B7E34A" />
        </linearGradient>
        <pattern id="hm-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#1F6F78" fillOpacity="0.35" />
        </pattern>
        <mask id="hm-route-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="480">
          <path className="hm-route-draw" d={ROUTE} fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" pathLength={1} />
        </mask>
      </defs>

      <rect width="600" height="480" rx="20" fill="url(#hm-bg)" />
      <rect width="600" height="480" rx="20" fill="url(#hm-dots)" />

      <g stroke="#1D3B4C" strokeWidth="1" fill="none">
        <path d="M0 160 H600 M0 320 H600 M200 0 V480 M400 0 V480" strokeDasharray="2 6" />
      </g>

      {/* South America (west coast, stylised) */}
      <path
        d="M600 40 L540 52 L512 96 L500 150 L494 200 L488 250 L482 300 L474 352 L466 404 L470 448 L494 480 L600 480 Z"
        fill="#16364A"
        stroke="#27485F"
        strokeWidth="1.5"
      />
      <path
        d="M512 96 L500 150 L494 200 L488 250 L482 300 L474 352 L466 404 L470 448 L486 470 L486 440 L492 400 L498 352 L506 300 L512 250 L518 200 L524 150 L530 100 Z"
        fill="#1F6F78"
        fillOpacity="0.45"
        stroke="#1F6F78"
        strokeWidth="1"
      />

      {/* New Zealand (stylised) */}
      <path
        d="M112 258 L124 250 L134 262 L146 270 L156 288 L150 300 L138 304 L128 318 L118 314 L114 300 L104 296 L100 284 L108 276 Z"
        fill="#16364A"
        stroke="#27485F"
        strokeWidth="1.5"
      />
      <path
        d="M110 322 L122 326 L118 342 L106 362 L92 378 L78 386 L70 378 L80 362 L94 344 L102 330 Z"
        fill="#16364A"
        stroke="#27485F"
        strokeWidth="1.5"
      />

      {/* Connector: drawn in on load, flows toward the other asset while one is highlighted */}
      <path
        d={ROUTE}
        mask="url(#hm-route-reveal)"
        className={cn('hm-route', highlighted && 'is-flowing', highlighted === 'cl' && 'is-reverse')}
        fill="none"
        stroke="url(#hm-route)"
        strokeWidth="2.5"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />

      {label('nz')}
      {label('cl')}
      {pin('nz')}
      {pin('cl')}

      <text x="32" y="448" fontSize="11" fill="#94A3B8" style={{ fontFamily: 'var(--font-body), Segoe UI, Arial, sans-serif' }}>
        Stylised, not to scale
      </text>
    </svg>
  );
};
