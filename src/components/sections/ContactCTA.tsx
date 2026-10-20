import React from 'react';
import { Container } from '@/components/ui/Container';
import { InvestorContactForm } from '@/components/forms/InvestorContactForm';
import { ContactDetails } from '@/components/sections/ContactDetails';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact-ir" className="py-14 lg:py-24 bg-[#0B1F2A] text-white relative overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1F6F78]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        {/* Balanced two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="eyebrow text-[#B7E34A] block mb-3 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
              Get In Touch
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.18] mb-6">
              Connect With Investor Relations
            </h2>

            <p className="text-base sm:text-lg text-[#DDE3E3]/90 leading-relaxed mb-8 font-normal">
              Monumental Energy values transparent, accessible communication with shareholders, prospective institutional partners, and financial analysts. Reach out to request private management briefings or additional data room materials.
            </p>

            <ContactDetails dark className="pt-8 border-t border-[#1D3B4C]" />
          </div>

          <div>
            <InvestorContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
