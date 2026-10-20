import React from 'react';
import { Container } from '@/components/ui/Container';
import { InvestorContactForm } from '@/components/forms/InvestorContactForm';
import { siteConfig } from '@/data/site';
import { Mail, Phone, MapPin, Clock, Building2 } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact-ir" className="py-14 lg:py-24 bg-[#0B1F2A] text-white relative overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1F6F78]/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, description, direct contact info */}
          <div className="lg:col-span-5">
            <span className="eyebrow text-[#B7E34A] block mb-3 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.18] mb-6">
              Connect With Investor Relations
            </h2>

            <p className="text-base sm:text-lg text-[#DDE3E3]/90 leading-relaxed mb-8 font-normal">
              Monumental Energy values transparent, accessible communication with shareholders, prospective institutional partners, and financial analysts. Reach out to request private management briefings or additional data room materials.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#1D3B4C]">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#162F3F] border border-[#27485F] flex items-center justify-center text-[#B7E34A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] uppercase tracking-wider block font-medium">Email Inquiries</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-white hover:text-[#B7E34A] font-medium transition-colors text-base"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#162F3F] border border-[#27485F] flex items-center justify-center text-[#B7E34A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] uppercase tracking-wider block font-medium">Direct Telephone</span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-white hover:text-[#B7E34A] font-medium transition-colors text-base"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#162F3F] border border-[#27485F] flex items-center justify-center text-[#B7E34A] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] uppercase tracking-wider block font-medium">Corporate Office</span>
                  <span className="text-white/90 text-sm block">
                    {siteConfig.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#162F3F] border border-[#27485F] flex items-center justify-center text-[#B7E34A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] uppercase tracking-wider block font-medium">Market Hours</span>
                  <span className="text-white/90 text-sm block">
                    Monday – Friday: 8:30 AM – 5:00 PM (PST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: White Card with Interactive Form */}
          <div className="lg:col-span-7">
            <InvestorContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
