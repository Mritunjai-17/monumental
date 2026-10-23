import React from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Monumental Energy Corp. privacy policy regarding user data, shareholder communication, and website telemetry.',
  path: '/privacy-policy',
});

const headingClass = cn(type.h3, tone.headingLight, 'mb-4');
const bodyClass = 'text-[#5B6B73]';

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

      <section className="section-y bg-[#F5F6F1]">
        <Container size="narrow">
          <div className="bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="max-w-3xl space-y-10 text-base sm:text-[17px] text-[#16232B] leading-[1.75]">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#5B6B73] block mb-3">
                  Effective Date: January 1, 2026
                </span>
                <h2 className={headingClass}>
                  1. Commitment to Shareholder Confidentiality
                </h2>
                <p className={bodyClass}>
                  Monumental Energy Corp. (&quot;Monumental&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your right to privacy. We are committed to protecting personal information collected through our website (monumental.energy) in compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable British Columbia provincial privacy legislation.
                </p>
              </div>

              <div>
                <h2 className={headingClass}>
                  2. Information We Collect
                </h2>
                <p className={cn(bodyClass, 'mb-4')}>
                  We only collect personal information that you voluntarily submit to us, including:
                </p>
                <ul className={cn(bodyClass, 'list-disc pl-5 space-y-2 marker:text-[#1F6F78]')}>
                  <li>Contact information (name, corporate affiliation, email address, telephone number) when requesting investor presentations or submitting inquiries.</li>
                  <li>Investor status classification (&quot;I am a...&quot;) to ensure relevant shareholder materials are provided.</li>
                  <li>Email addresses provided for news release notifications.</li>
                </ul>
              </div>

              <div>
                <h2 className={headingClass}>
                  3. Use of Information
                </h2>
                <p className={bodyClass}>
                  Information collected is used solely to respond to inquiries, transmit requested corporate presentation materials, provide shareholder meeting updates, and disseminate regulatory press releases. We do not sell, rent, or trade your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className={headingClass}>
                  4. Data Security
                </h2>
                <p className={bodyClass}>
                  We maintain appropriate technological and organizational security safeguards to protect personal data against unauthorized access, disclosure, or alteration.
                </p>
              </div>

              <div>
                <h2 className={headingClass}>
                  5. Contacting the Privacy Officer
                </h2>
                <p className={bodyClass}>
                  Inquiries concerning our privacy practices should be addressed to:
                  <br />
                  <strong className="text-[#0B1F2A]">Privacy Officer, Monumental Energy Corp.</strong>
                  <br />
                  Suite 228 - 1122 Mainland Street, Vancouver BC V6B 5L1
                  <br />
                  Email: info@monumental.energy
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
