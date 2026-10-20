import React from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { constructMetadata } from '@/lib/seo';
import { FileText, Download, CheckCircle2, Calendar, HardDrive, Shield } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Corporate Presentation',
  description: 'Download the latest Monumental Energy (TSX-V: MNRG) corporate investor presentation detailing asset metrics, strategy, and upcoming milestones.',
  path: '/investors/presentation',
});

export default function PresentationPage() {
  return (
    <>
      <PageHero
        title="Corporate Presentation"
        eyebrow="Investor Briefing"
        description="Comprehensive strategic deck covering New Zealand oil & gas assets, Salar de Turi lithium royalty, capital structure, and upcoming operational catalysts."
        breadcrumbs={[
          { label: 'Investors', href: '/investors' },
          { label: 'Presentation' },
        ]}
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container size="narrow">
          <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 sm:p-12 shadow-sm text-center">
            {/* Visual Document Icon Box */}
            <div className="w-20 h-20 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] mx-auto flex items-center justify-center mb-6">
              <FileText className="w-10 h-10" />
            </div>

            <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Updated Q1 2026</span>
            <h2 className="text-3xl font-bold font-heading text-[#0B1F2A] mb-4 leading-[1.18]">
              Monumental Energy Corporate Deck
            </h2>

            <p className="text-sm sm:text-base text-[#5B6B73] max-w-lg mx-auto mb-8 leading-relaxed">
              &quot;Better energy for the future and today.&quot; Includes technical cross-sections, Taranaki recompletion economics, and Chilean lithium concessions overview.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="/documents/investor-presentation.pdf"
                download="Monumental-Energy-Presentation-2026.pdf"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-1.5" />
                  <span>Download Presentation (PDF)</span>
                </Button>
              </a>

              <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                Request Management Briefing
              </Button>
            </div>

            {/* Document metadata table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] text-xs text-[#5B6B73]">
              <div>
                <span className="block font-medium">Format</span>
                <span className="font-semibold text-[#0B1F2A]">Adobe PDF</span>
              </div>
              <div>
                <span className="block font-medium">Release Date</span>
                <span className="font-semibold text-[#0B1F2A]">January 2026</span>
              </div>
              <div>
                <span className="block font-medium">Pages</span>
                <span className="font-semibold text-[#0B1F2A]">[PAGES_PLACEHOLDER]</span>
              </div>
              <div>
                <span className="block font-medium">Verification</span>
                <span className="font-semibold text-[#0B1F2A]">NI 51-101 / 43-101</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
