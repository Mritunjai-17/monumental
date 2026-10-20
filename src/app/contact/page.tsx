import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { InvestorContactForm } from '@/components/forms/InvestorContactForm';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { ContactDetails } from '@/components/sections/ContactDetails';
import { constructMetadata } from '@/lib/seo';
import { Bell } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Contact Investor Relations',
  description: 'Contact Monumental Energy Corp. (TSX-V: MNRG) corporate management, investor relations team, and transfer agent.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        eyebrow="Corporate & Investor Relations"
        description="We welcome inquiries from shareholders, institutional analysts, brokers, and media. Connect with our Vancouver corporate team directly."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          {/* Balanced two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-sm">
                <div className="relative w-full aspect-[16/9] bg-[#0B1F2A]">
                  <Image
                    src="/images/office.jpg"
                    alt="Monumental Energy corporate office in Vancouver, BC"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Corporate Headquarters</span>
                  <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-6 leading-[1.18]">
                    Monumental Energy Corp.
                  </h2>

                  <ContactDetails />
                </div>
              </div>

              {/* Newsletter subscribe block */}
              <div id="newsletter" className="bg-[#0B1F2A] rounded-[16px] p-8 text-white border border-[#1D3B4C]">
                <div className="flex items-center gap-2 mb-2 text-[#B7E34A] text-xs font-heading font-semibold uppercase tracking-wider">
                  <Bell className="w-4 h-4" />
                  <span>Stay Informed</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  Subscribe to News Alerts
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Get immediate email notifications when new press releases or financial disclosures are issued.
                </p>
                <NewsletterForm dark />
              </div>
            </div>

            <div>
              <InvestorContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
