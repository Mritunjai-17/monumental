import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { SocialLink } from '@/types';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const socialIcons: Record<SocialLink['platform'], React.ReactNode> = {
  linkedin: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" /></svg>
  ),
  x: (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  ),
  youtube: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  ),
  instagram: (
    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  ),
  facebook: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  ),
};

export const Footer: React.FC = () => {
  const verifiedSocials = siteConfig.socials.filter((social) => social.verified);

  return (
    <footer className="bg-[#07151D] text-white/80 border-t border-[#162F3F] pt-12 pb-8">
      <div data-reveal="fade" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-5 group">
              <Image
                src="/images/logo.png"
                alt="Monumental Energy"
                width={210}
                height={43}
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-sm text-[#94A3B8] max-w-sm mb-6 leading-relaxed">
              {siteConfig.tagline} Monumental Energy (TSX-V: MNRG) combines near-term cashflow leverage from conventional assets with long-term critical minerals royalty upside in the global Lithium Triangle.
            </p>

            {/* Social links: only verified URLs from data/site.ts are rendered */}
            {verifiedSocials.length > 0 ? (
              <div className="flex items-center gap-3">
                {verifiedSocials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Monumental Energy on ${social.label}`}
                    className="w-9 h-9 rounded-lg bg-[#0E2836] border border-[#1D3B4C] flex items-center justify-center text-white/80 hover:text-[#B7E34A] hover:border-[#1F6F78] transition-colors"
                  >
                    {socialIcons[social.platform]}
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-amber-300/80">Social profiles pending verification.</p>
            )}
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#B7E34A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#B7E34A] transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/projects/new-zealand" className="hover:text-[#B7E34A] transition-colors">
                  New Zealand Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/projects/salar-de-turi" className="hover:text-[#B7E34A] transition-colors">
                  Salar de Turi Lithium
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#B7E34A] transition-colors">
                  News & Disclosures
                </Link>
              </li>
              <li>
                <Link href="/esg" className="hover:text-[#B7E34A] transition-colors">
                  ESG Commitments
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors Column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Investor Relations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/investors" className="hover:text-[#B7E34A] transition-colors">
                  Investor Centre
                </Link>
              </li>
              <li>
                <Link href="/investors/presentation" className="hover:text-[#B7E34A] transition-colors">
                  Corporate Presentation
                </Link>
              </li>
              <li>
                <Link href="/investors/agm" className="hover:text-[#B7E34A] transition-colors">
                  Shareholder AGM
                </Link>
              </li>
              <li>
                <a
                  href="https://www.sedarplus.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B7E34A] transition-colors"
                >
                  <span>SEDAR+ Filings</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F6F78]" />
                </a>
              </li>
              <li>
                <a
                  href="https://money.tmx.com/en/quote/MNRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B7E34A] transition-colors"
                >
                  <span>TSX Venture Quote</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F6F78]" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B7E34A] transition-colors">
                  IR Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office Column */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Head Office
            </h3>
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1F6F78] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1F6F78] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#B7E34A] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1F6F78] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#B7E34A] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Forward-Looking Statements Disclaimer Component */}
        <div className="border-t border-[#162F3F] pt-6 pb-6">
          <div className="max-w-3xl">
            <h4 className="font-heading font-semibold text-[11px] uppercase tracking-wider text-white/70 mb-1.5">
              Forward-Looking Statements & Regulatory Disclaimer
            </h4>
            <p className="text-[11px] text-[#64748B] leading-relaxed">
              This website and documents accessible herein contain certain &quot;forward-looking statements&quot; within the meaning of applicable Canadian securities legislation. Forward-looking statements relate to future events or future performance and include, without limitation, statements regarding exploration timelines, near-term production milestones, commercial resource evaluations, royalty revenue potential, and operational objectives of Monumental Energy Corp. and its joint-venture partners. These statements involve substantial known and unknown risks, uncertainties, and other factors that may cause actual results, levels of activity, performance, or achievements to be materially different from any expressed or implied statements. Neither TSX Venture Exchange nor its Regulation Services Provider accepts responsibility for the adequacy or accuracy of this content. Investors are cautioned not to place undue reliance on forward-looking statements.
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-[#162F3F] pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 Monumental Energy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span>TSX-V: MNRG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
