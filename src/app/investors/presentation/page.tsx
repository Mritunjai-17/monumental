import React from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PresentationViewer } from '@/components/ui/PresentationViewer';
import { constructMetadata } from '@/lib/seo';
import { Download, ExternalLink, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

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
        backgroundImage="/images/corporate-office.jpg"
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          {/* Main Interactive Slide-Deck Viewer */}
          <div className="mb-12">
            <PresentationViewer />
          </div>

          {/* Download & Briefing Action Banner */}
          <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] text-xs font-semibold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Official Deck • Q1 2026 Release</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1F2A] mb-1">
                Complete Presentation PDF Download
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B73] max-w-xl">
                Download the complete high-resolution Adobe PDF deck for off-line review, financial modeling, and committee presentations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/documents/investor-presentation.pdf"
                download="Monumental-Energy-Presentation-2026.pdf"
              >
                <Button variant="primary" size="md">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Deck (PDF)</span>
                </Button>
              </a>

              <Button href="/contact" variant="secondary" size="md">
                <span>Request IR Briefing</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Document Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#DDE3E3] text-xs text-[#5B6B73] mb-8">
            <div>
              <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-0.5">Format</span>
              <span className="font-semibold text-sm text-[#0B1F2A]">Adobe Acrobat PDF</span>
            </div>
            <div>
              <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-0.5">Publication Date</span>
              <span className="font-semibold text-sm text-[#0B1F2A]">January 2026</span>
            </div>
            <div>
              <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-0.5">Document Type</span>
              <span className="font-semibold text-sm text-[#0B1F2A]">Corporate Investor Deck</span>
            </div>
            <div>
              <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-0.5">Verification Standards</span>
              <span className="font-semibold text-sm text-[#1F6F78]">NI 51-101 / 43-101 Disclosures</span>
            </div>
          </div>

          {/* SEDAR+ Disclaimer Footer Strip */}
          <div className="p-4 rounded-xl bg-[#E8F3F1] border border-[#1F6F78]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#0B1F2A]">
            <span>
              Looking for audited financial statements or quarterly MD&amp;A reports? Official continuous disclosure documents are archived on SEDAR+.
            </span>
            <a
              href="https://www.sedarplus.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link font-semibold inline-flex items-center gap-1.5 shrink-0"
            >
              <span>SEDAR+ Statutory Depository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
