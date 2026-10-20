import React from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { InvestorContactForm } from '@/components/forms/InvestorContactForm';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { siteConfig } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import { Mail, Phone, MapPin, Clock, MessageSquare, Bell } from 'lucide-react';

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
                <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Corporate Headquarters</span>
                <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-6 leading-[1.18]">
                  Monumental Energy Corp.
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B1F2A] block mb-0.5">Office Address</strong>
                      <span className="text-[#5B6B73] leading-relaxed block">
                        {siteConfig.contact.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B1F2A] block mb-0.5">General &amp; IR Email</strong>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[#1F6F78] hover:text-[#0B1F2A] font-medium transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B1F2A] block mb-0.5">Telephone</strong>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-[#1F6F78] hover:text-[#0B1F2A] font-medium transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B1F2A] block mb-0.5">Operating Hours</strong>
                      <span className="text-[#5B6B73]">
                        Monday – Friday: 8:30 AM – 5:00 PM (Pacific Standard Time)
                      </span>
                    </div>
                  </div>
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

            {/* Right 7 Cols: Interactive Form */}
            <div className="lg:col-span-7">
              <InvestorContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
