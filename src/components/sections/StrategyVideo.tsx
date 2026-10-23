'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { Play, Pause, CheckCircle2 } from 'lucide-react';

export const StrategyVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-y bg-[#0B1F2A] text-white relative overflow-hidden border-y border-[#1D3B4C]/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1F6F78]/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div data-reveal="fade">
              <span className="eyebrow text-[#B7E34A] block mb-3 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
                Corporate Strategy
              </span>

              <KineticHeading
                text="Better energy for the future and today."
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.18] mb-6"
              />

              <p className="text-base sm:text-lg text-[#DDE3E3]/90 leading-relaxed mb-6 font-normal">
                Global energy demand requires a pragmatic transition strategy. Monumental Energy addresses immediate energy supply through conventional oil and gas production in New Zealand, while holding strategic Net Smelter Return (NSR) royalty exposure to lithium exploration in Chile.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div
                data-reveal="card"
                className="flex items-center gap-3 text-sm text-[#DDE3E3]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#B7E34A] shrink-0" />
                <span>Low capital intensity with established processing tie-ins</span>
              </div>
              <div
                data-reveal="card"
                className="flex items-center gap-3 text-sm text-[#DDE3E3]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#B7E34A] shrink-0" />
                <span>2% Net Smelter Return (NSR) royalty with zero exploration capital call liabilities</span>
              </div>
              <div
                data-reveal="card"
                className="flex items-center gap-3 text-sm text-[#DDE3E3]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#B7E34A] shrink-0" />
                <span>Operating within established, transparent resource jurisdictions</span>
              </div>
            </div>

            <div data-reveal="card">
              <Button href="/about" variant="secondary-dark" size="md">
                Learn More About Our Strategy
              </Button>
            </div>
          </div>

          {/* Right Video Column: Poster Image with Lime Play Button (No fake metadata) */}
          <div className="lg:col-span-6" data-reveal="card">
            <div className="relative aspect-video rounded-[16px] overflow-hidden border border-[#1D3B4C] bg-[#07151D] shadow-2xl">
              {isPlaying ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#07151D] p-6 text-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-[#123040] to-[#07151D] opacity-95" />
                  
                  <p className="relative z-10 font-heading font-semibold text-lg text-white mb-2">
                    Monumental Energy Corporate Overview
                  </p>
                  <p className="relative z-10 text-xs text-[#94A3B8] max-w-sm mb-6">
                    Corporate presentation video stream
                  </p>

                  <button
                    onClick={() => setIsPlaying(false)}
                    className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E2836] border border-[#1D3B4C] text-xs font-semibold text-white hover:text-[#B7E34A] transition-colors"
                  >
                    <Pause className="w-4 h-4 text-[#B7E34A]" />
                    <span>Pause Video</span>
                  </button>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-[#07151D]">
                  {/* 16:9 poster photo slot (lazy-loaded) */}
                  <Image
                    src="/images/video-poster.jpg"
                    alt="Monumental Energy corporate strategy video poster"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[#0B1F2A]/40" />

                  {/* Lime Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play Corporate Strategy Video"
                    className="relative z-10 w-20 h-20 rounded-full bg-[#B7E34A] text-[#0B1F2A] flex items-center justify-center shadow-xl shadow-[#0B1F2A]/60 transition-transform duration-200 hover:scale-110 hover:bg-[#A3CF36] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B7E34A]"
                  >
                    <Play className="w-8 h-8 ml-1 fill-[#0B1F2A]" />
                  </button>

                  {/* Clean Bottom Label without fake duration/resolution metadata */}
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 bg-[#0B1F2A]/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                    <span className="font-heading font-medium">Monumental Energy — Corporate Presentation</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
