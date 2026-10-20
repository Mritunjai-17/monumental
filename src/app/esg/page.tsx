import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { constructMetadata } from '@/lib/seo';
import { Leaf, Users, Shield, CheckCircle2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'ESG & Sustainability',
  description: 'Monumental Energy’s environmental, social, and governance commitments across New Zealand joint venture operations and Chilean mineral tenure.',
  path: '/esg',
});

export default function EsgPage() {
  return (
    <>
      <PageHero
        title="ESG & Responsible Stewardship"
        eyebrow="Sustainability"
        description="Integrating environmental stewardship, local community respect, and transparent public market governance into every operational decision."
        breadcrumbs={[{ label: 'ESG' }]}
      />

      {/* 3 Pillars (Off-white) */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          {/* Real Photo Feature Banner */}
          <div className="bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[420px] bg-[#0B1F2A]">
              <Image
                src="/images/esg-stewardship.jpg"
                alt="Environmental scientists conducting field water quality monitoring in Taranaki, New Zealand"
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Field Stewardship</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] mb-4 leading-[1.18]">
                Proactive Environmental Monitoring &amp; Water Care
              </h2>
              <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed mb-6 font-normal">
                At our New Zealand energy operations in the Taranaki Basin, field engineers and environmental specialists conduct continuous water testing, baseline habitat monitoring, and wellhead integrity inspections to safeguard the local ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DDE3E3] text-xs">
                <div>
                  <span className="text-[#5B6B73] block mb-0.5">Monitoring Protocol</span>
                  <span className="font-semibold text-[#0B1F2A]">Continuous Baselines</span>
                </div>
                <div>
                  <span className="text-[#5B6B73] block mb-0.5">Surface Disturbance</span>
                  <span className="font-semibold text-[#0B1F2A]">Recompletion Focus</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
            <div data-reveal="card" className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                Environmental Care
              </h3>
              <p className="text-sm text-[#5B6B73] leading-relaxed mb-6">
                Prioritizing low-impact workover operations that reuse existing wellbores and surface facilities rather than expanding greenfield surface disturbance.
              </p>
              <ul className="space-y-2 text-xs text-[#16232B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Strict water and effluent monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Asset footprint minimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Emissions reporting compliance</span>
                </li>
              </ul>
            </div>

            <div data-reveal="card" className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                Social &amp; Communities
              </h3>
              <p className="text-sm text-[#5B6B73] leading-relaxed mb-6">
                Building respectful, long-term relationships with regional stakeholders, local iwi in New Zealand, and indigenous community groups in northern Chile.
              </p>
              <ul className="space-y-2 text-xs text-[#16232B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Local vendor procurement policies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Community consultation and transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Zero-harm workplace health &amp; safety</span>
                </li>
              </ul>
            </div>

            <div data-reveal="card" className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                Corporate Governance
              </h3>
              <p className="text-sm text-[#5B6B73] leading-relaxed mb-6">
                Adhering to strict TSX Venture Exchange regulatory oversight, independent board committees, and transparent disclosure standards.
              </p>
              <ul className="space-y-2 text-xs text-[#16232B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Independent Audit Committee oversight</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Whistleblower &amp; ethics policies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                  <span>Equal shareholder rights &amp; timely disclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
