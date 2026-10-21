import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { ResourceTile } from '@/components/ui/ResourceTile';
import { constructMetadata } from '@/lib/seo';
import { FileText, Calendar, MapPin, ExternalLink, ShieldCheck, FileCheck, Users } from 'lucide-react';

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
        backgroundImage="/images/agm-hall.jpg"
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Meeting Details & Materials */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-sm">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#0B1F2A]">
                  <Image
                    src="/images/agm-hall.jpg"
                    alt="Corporate Annual General Meeting boardroom in Vancouver"
                    fill
                    sizes="(min-width: 1024px) 780px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Notice of Meeting</span>
                  <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-4 leading-[1.18]">
                    2026 Annual General and Special Meeting
                  </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] mb-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#5B6B73] block">Date &amp; Time</span>
                      <span className="font-semibold text-[#0B1F2A]">Friday, August 7, 2026 • 10:00 AM PT</span>
                      <span className="text-[11px] text-[#5B6B73] block mt-0.5">Record Date: July 3, 2026</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-[#5B6B73] block">Location</span>
                      <span className="font-semibold text-[#0B1F2A]">Suite 228 - 1122 Mainland St, Vancouver, BC</span>
                    </div>
                  </div>
                </div>

                {/* Statutory Distribution Notice */}
                <div className="p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] mb-6 text-xs text-[#5B6B73] leading-relaxed">
                  <div className="flex items-center gap-2 font-semibold text-[#0B1F2A] mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#1F6F78]" />
                    <span>Statutory Distribution Notice</span>
                  </div>
                  <p>
                    Official proxy materials, notice of meeting, and the Management Information Circular will be distributed to shareholders of record as of July 3, 2026 and filed contemporaneously on SEDAR+. To ensure regulatory compliance and authentic documentation, no mock or placeholder proxy forms are hosted locally.
                  </p>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-3">
                  Meeting Materials &amp; Circulars
                </h3>

                <div className="space-y-4">
                  <ResourceTile
                    variant="teal-panel"
                    icon={FileText}
                    eyebrow="Governance Filing"
                    title="Notice of Meeting & Circular"
                    description="Official statutory management information circular accessible on SEDAR+."
                    href="https://www.sedarplus.ca"
                    isExternal
                  />

                  <ResourceTile
                    variant="mint-icon"
                    icon={FileCheck}
                    eyebrow="Registered Shareholders"
                    title="Form of Proxy"
                    description="Online electronic voting portal hosted via Computershare Investor Services."
                    href="https://www.investorcentre.com"
                    isExternal
                  />

                  <ResourceTile
                    variant="ice-icon"
                    icon={Users}
                    eyebrow="Beneficial Shareholders"
                    title="Voting Instruction Form (VIF)"
                    description="Electronic proxy voting portal for beneficial holders via ProxyVote."
                    href="https://www.proxyvote.com"
                    isExternal
                  />
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
