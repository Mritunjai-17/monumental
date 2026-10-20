import React from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Monumental Energy Corp. privacy policy regarding user data, shareholder communication, and website telemetry.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        eyebrow="Legal & Regulatory"
        description="How Monumental Energy Corp. collects, safeguards, and utilizes personal and corporate information provided through this website."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        backgroundImage="/images/office.jpg"
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container size="narrow">
          <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 sm:p-12 shadow-sm space-y-8 text-sm text-[#16232B] leading-relaxed">
            <div>
              <span className="text-xs text-[#5B6B73] block mb-1">Effective Date: January 1, 2026</span>
              <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                1. Commitment to Shareholder Confidentiality
              </h2>
              <p className="text-[#5B6B73]">
                Monumental Energy Corp. (&quot;Monumental&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your right to privacy. We are committed to protecting personal information collected through our website (monumental.energy) in compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable British Columbia provincial privacy legislation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3">
                2. Information We Collect
              </h2>
              <p className="text-[#5B6B73] mb-3">
                We only collect personal information that you voluntarily submit to us, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#5B6B73]">
                <li>Contact information (name, corporate affiliation, email address, telephone number) when requesting investor presentations or submitting inquiries.</li>
                <li>Investor status classification (&quot;I am a...&quot;) to ensure relevant shareholder materials are provided.</li>
                <li>Email addresses provided for news release notifications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3">
                3. Use of Information
              </h2>
              <p className="text-[#5B6B73]">
                Information collected is used solely to respond to inquiries, transmit requested corporate presentation materials, provide shareholder meeting updates, and disseminate regulatory press releases. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3">
                4. Data Security
              </h2>
              <p className="text-[#5B6B73]">
                We maintain appropriate technological and organizational security safeguards to protect personal data against unauthorized access, disclosure, or alteration.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold font-heading text-[#0B1F2A] mb-3">
                5. Contacting the Privacy Officer
              </h2>
              <p className="text-[#5B6B73]">
                Inquiries concerning our privacy practices should be addressed to:
                <br />
                <strong>Privacy Officer, Monumental Energy Corp.</strong>
                <br />
                Suite 228 - 1122 Mainland Street, Vancouver BC V6B 5L1
                <br />
                Email: info@monumental.energy
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
