'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { CheckCircle2 } from 'lucide-react';

export const StrategyVideo: React.FC = () => {
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

          {/* Right Video Column: Direct video player without static poster image */}
          <div className="lg:col-span-6" data-reveal="card">
            <div className="relative aspect-video rounded-[16px] overflow-hidden border border-[#1D3B4C] bg-black shadow-2xl">
              <video
                src="/videos/Monumental-Video-Small-Size.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/videos/Monumental-Video-Small-Size.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
