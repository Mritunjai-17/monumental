import React from 'react';
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                Environmental Care
              </h2>
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

            <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3">
                Social &amp; Communities
              </h2>
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

            <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3">
                Corporate Governance
              </h2>
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
