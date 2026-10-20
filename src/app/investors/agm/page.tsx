import React from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { constructMetadata } from '@/lib/seo';
import { Users, FileText, Download, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Annual General Meeting',
  description: 'Shareholder Annual General and Special Meeting information, voting materials, management circulars, and proxy instructions for Monumental Energy.',
  path: '/investors/agm',
});

export default function AgmPage() {
  return (
    <>
      <PageHero
        title="Annual General Meeting"
        eyebrow="Shareholder Governance"
        description="Notice of meeting, Management Information Circular, proxy voting forms, and electronic voting guidelines for registered and beneficial shareholders."
        breadcrumbs={[
          { label: 'Investors', href: '/investors' },
          { label: 'AGM' },
        ]}
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Meeting Details & Materials */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
                <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Notice of Meeting</span>
                <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-4 leading-[1.18]">
                  2026 Annual General and Special Meeting
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#5B6B73] block">Date &amp; Time</span>
                      <span className="font-semibold text-[#0B1F2A]">[AGM_DATE_PLACEHOLDER]</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#5B6B73] block">Location</span>
                      <span className="font-semibold text-[#0B1F2A]">Suite 228 - 1122 Mainland St, Vancouver</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-3">
                  Meeting Materials &amp; Circulars
                </h3>

                <div className="space-y-3">
                  <div data-reveal="card">
                    <div className="p-4 rounded-xl border border-[#DDE3E3] flex items-center justify-between hover:border-[#1F6F78] transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#1F6F78]" />
                        <div>
                          <span className="font-semibold text-sm text-[#0B1F2A] block">Notice of Meeting and Management Information Circular</span>
                          <span className="text-xs text-[#5B6B73]">PDF Document • [CIRCULAR_SIZE_PLACEHOLDER]</span>
                        </div>
                      </div>
                      <a href="/documents/investor-presentation.pdf" download className="text-link text-xs font-semibold">
                        <span>Download</span>
                        <Download className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div data-reveal="card">
                    <div className="p-4 rounded-xl border border-[#DDE3E3] flex items-center justify-between hover:border-[#1F6F78] transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#1F6F78]" />
                        <div>
                          <span className="font-semibold text-sm text-[#0B1F2A] block">Form of Proxy (Registered Shareholders)</span>
                          <span className="text-xs text-[#5B6B73]">PDF Document • [PROXY_SIZE_PLACEHOLDER]</span>
                        </div>
                      </div>
                      <a href="/documents/investor-presentation.pdf" download className="text-link text-xs font-semibold">
                        <span>Download</span>
                        <Download className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div data-reveal="card">
                    <div className="p-4 rounded-xl border border-[#DDE3E3] flex items-center justify-between hover:border-[#1F6F78] transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#1F6F78]" />
                        <div>
                          <span className="font-semibold text-sm text-[#0B1F2A] block">Voting Instruction Form (VIF for Beneficial Shareholders)</span>
                          <span className="text-xs text-[#5B6B73]">PDF Document • [VIF_SIZE_PLACEHOLDER]</span>
                        </div>
                      </div>
                      <a href="/documents/investor-presentation.pdf" download className="text-link text-xs font-semibold">
                        <span>Download</span>
                        <Download className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Voting Guidelines */}
            <div className="lg:col-span-4 bg-white rounded-[16px] border border-[#DDE3E3] p-7 shadow-sm">
              <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-4">
                How to Vote Your Shares
              </h3>

              <div className="space-y-4 text-xs text-[#5B6B73] leading-relaxed">
                <div>
                  <strong className="text-[#0B1F2A] block mb-1">Registered Shareholders:</strong>
                  You may vote online at the transfer agent portal or return your signed proxy form prior to the voting cutoff time.
                </div>
                <div>
                  <strong className="text-[#0B1F2A] block mb-1">Beneficial (Non-Registered) Shareholders:</strong>
                  If your shares are held in a brokerage account, please complete and submit the Voting Instruction Form (VIF) provided by your broker.
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#DDE3E3]">
                <a
                  href="https://www.sedarplus.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-xs font-semibold inline-flex items-center gap-1.5"
                >
                  <span>SEDAR+ Filings Depository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
