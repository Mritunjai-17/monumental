'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  FileCheck,
  BarChart3,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  inquiryType: string;
  phone: string;
  message: string;
  agreePrivacy: boolean;
}

/** Shared field styles: full width, 48px tall, 16px text (no iOS zoom). */
const fieldClass =
  'block w-full min-w-0 bg-white text-[#0B1F2A] rounded-[10px] border border-transparent px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#B7E34A] placeholder-[#5B6B73]/70';
const labelClass = 'block text-sm font-heading font-semibold text-white mb-2';
const detailLabelClass = 'text-xs font-heading font-bold uppercase tracking-wider text-[#5B6B73] block mb-1';
const iconTileClass =
  'w-11 h-11 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center shrink-0 mt-0.5';
const resourceCardClass =
  'h-full p-5 sm:p-6 rounded-[16px] bg-white border border-[#DDE3E3] flex items-center justify-between gap-4 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

const RESOURCES = [
  {
    href: '/investors',
    title: 'Investor Centre',
    description: 'Financial information, filings and share information.',
    Icon: BarChart3,
  },
  {
    href: '/news',
    title: 'Latest News & Disclosures',
    description: 'Company announcements and media releases.',
    Icon: FileText,
  },
  {
    href: '/investors/agm',
    title: 'AGM & Shareholder Information',
    description: 'Meeting materials, voting information and related documents.',
    Icon: Users,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    inquiryType: '',
    phone: '',
    message: '',
    agreePrivacy: false,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields marked with *');
      setFormStatus('error');
      return;
    }

    if (!formData.agreePrivacy) {
      setErrorMessage('Please agree to the privacy policy statement to proceed.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          role: formData.inquiryType || 'General / Other Inquiry',
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
        setErrorMessage('Failed to send message. Please email info@monumental.energy directly.');
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Network error occurred. Please try again or email us.');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');
    await new Promise((r) => setTimeout(r, 600));
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          BACKGROUND TOPOGRAPHIC CONTOUR LINES
         ========================================================= */}
      <div
        className="absolute top-0 left-0 w-[550px] sm:w-[680px] lg:w-[800px] h-[550px] pointer-events-none opacity-[0.06] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 700 600" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M180 0 C 260 90, 320 170, 500 190 C 600 200, 640 280, 700 320" />
          <path d="M220 0 C 290 100, 360 180, 530 210 C 620 225, 660 320, 700 370" />
          <path d="M260 0 C 330 120, 400 200, 560 230 C 630 245, 670 360, 700 420" />
          <path d="M300 0 C 370 140, 440 220, 590 250 C 650 270, 680 400, 700 470" />
          <path d="M340 0 C 410 160, 480 240, 620 270 C 670 290, 700 440, 700 520" />
        </svg>
      </div>

      <div
        className="absolute bottom-20 -left-20 w-[500px] h-[450px] pointer-events-none opacity-[0.05] select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 450" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
          <path d="M0 250 C 120 240, 200 180, 290 190 C 380 200, 420 280, 500 300" />
          <path d="M0 200 C 140 190, 220 130, 310 140 C 400 150, 440 230, 500 250" />
        </svg>
      </div>

      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Boardroom Photo)
         ========================================================= */}
      <section className="relative overflow-hidden page-intro-y">
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[54%] z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/agm-boardroom.jpg"
            alt="Monumental Energy Vancouver Boardroom"
            fill
            sizes="54vw"
            className="object-cover object-left"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            <div className="lg:col-span-7 min-w-0 lg:pr-8">
              <Eyebrow className="hero-eyebrow">CORPORATE &amp; INVESTOR RELATIONS</Eyebrow>

              <KineticHeading
                as="h1"
                text={"Let's start\na conversation."}
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                We welcome enquiries from shareholders, investors, analysts, brokers, media and business partners.
              </p>
            </div>

            <div className="lg:hidden col-span-1">
              <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/agm-boardroom.jpg"
                  alt="Monumental Energy Boardroom"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. MAIN SECTION: CONTACT INFORMATION (NO MAP) & SEND MESSAGE FORM
          Bottom padding equals the grid gap so the resource row below reads
          as part of the same block.
         ========================================================= */}
      <section className="relative z-10 pt-0 pb-6 lg:pb-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* LEFT CARD: Contact Information (Map omitted per user request) */}
            <div data-reveal="card" className="lg:col-span-5 min-w-0">
              <div className="h-full bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-8 flex flex-col">
                <div className="mb-7">
                  <KineticHeading
                    as="h2"
                    text="Contact Information"
                    className={cn(type.h3, tone.headingLight, 'mb-2')}
                  />
                  <p className={cn(type.body, tone.mutedLight)}>
                    Get in touch with our team for any enquiries.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Entity */}
                  <div className="flex items-start gap-4">
                    <div className={iconTileClass}>
                      <Building2 className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={cn(type.h4, tone.headingLight, 'mb-0.5')}>
                        Monumental Energy Corp.
                      </h3>
                      <p className={cn('text-sm', tone.mutedLight)}>
                        Corporate &amp; Investor Relations
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className={iconTileClass}>
                      <Mail className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className={detailLabelClass}>Email</span>
                      <a
                        href="mailto:info@monumental.energy"
                        className="text-sm sm:text-[15px] font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors break-words"
                      >
                        info@monumental.energy
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className={iconTileClass}>
                      <Phone className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className={detailLabelClass}>Phone</span>
                      <a
                        href="tel:+16043678117"
                        className="text-sm sm:text-[15px] font-semibold text-[#0B1F2A] hover:text-[#1F6F78] transition-colors"
                      >
                        +1-604-367-8117
                      </a>
                    </div>
                  </div>

                  {/* Head Office (Canada) */}
                  <div className="flex items-start gap-4">
                    <div className={iconTileClass}>
                      <MapPin className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className={detailLabelClass}>Head Office (Canada)</span>
                      <p className={cn(type.body, tone.mutedLight)}>
                        Suite 228 – 1122 Mainland Street,<br />
                        Vancouver, BC V6B 5L1, Canada
                      </p>
                    </div>
                  </div>

                  {/* New Plymouth Office (New Zealand) */}
                  <div className="flex items-start gap-4">
                    <div className={iconTileClass}>
                      <MapPin className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className={detailLabelClass}>New Plymouth Office (New Zealand)</span>
                      <p className={cn(type.body, tone.mutedLight)}>
                        #11 Young St., New Plymouth Central,<br />
                        New Plymouth 4310, New Zealand
                      </p>
                    </div>
                  </div>

                  {/* Transfer Agent */}
                  <div className="flex items-start gap-4 pt-6 border-t border-[#E8ECEC]">
                    <div className={iconTileClass}>
                      <FileCheck className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className={detailLabelClass}>Transfer Agent</span>
                      <span className="text-sm sm:text-[15px] font-semibold text-[#0B1F2A] block mb-0.5">
                        Computershare Investor Services Inc.
                      </span>
                      <p className={cn('text-sm', tone.mutedLight)}>
                        For voting support and shareholder enquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: Send us a message (Dark Navy Card) */}
            <div data-reveal="card" className="lg:col-span-7 min-w-0">
              <div className="h-full bg-[#0B1F2A] text-white rounded-[20px] lg:rounded-[24px] border border-[#1D3B4C] p-6 sm:p-8 shadow-xl flex flex-col">
                <div className="mb-7">
                  <KineticHeading
                    as="h2"
                    text="Send us a message"
                    className={cn(type.h3, tone.headingDark, 'mb-2')}
                  />
                  <p className={cn(type.body, 'text-[#DDE3E3]/80')}>
                    Fill out the form below and our team will get back to you.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="py-10 px-6 sm:px-8 text-center bg-white/5 rounded-[16px] border border-white/10">
                    <div className="w-14 h-14 rounded-full bg-[#B7E34A]/20 text-[#B7E34A] mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h3 className={cn(type.h4, tone.headingDark, 'mb-2')}>
                      Message Successfully Sent
                    </h3>
                    <p className={cn(type.body, 'text-[#DDE3E3]/80 max-w-md mx-auto mb-6')}>
                      Thank you for contacting Monumental Energy. A representative will review your inquiry and follow up promptly.
                    </p>
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          inquiryType: '',
                          phone: '',
                          message: '',
                          agreePrivacy: false,
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                      <div className="min-w-0">
                        <label htmlFor="contact-full-name" className={labelClass}>
                          Full Name *
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={cn(fieldClass, 'h-12')}
                        />
                      </div>

                      <div className="min-w-0">
                        <label htmlFor="contact-email" className={labelClass}>
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={cn(fieldClass, 'h-12')}
                        />
                      </div>
                    </div>

                    {/* Row 2: Inquiry Type & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                      <div className="min-w-0">
                        <label htmlFor="contact-inquiry-type" className={labelClass}>
                          Inquiry Type *
                        </label>
                        <select
                          id="contact-inquiry-type"
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className={cn(fieldClass, 'h-12 cursor-pointer')}
                        >
                          <option value="">Select an option</option>
                          <option value="Prospective Investor">Prospective Investor</option>
                          <option value="Current Shareholder">Current Shareholder</option>
                          <option value="Investment Advisor">Investment Advisor / Broker</option>
                          <option value="Financial Analyst">Financial Analyst / Research</option>
                          <option value="Media / Press">Media / Press Inquiry</option>
                          <option value="General / Other">General / Other Inquiry</option>
                        </select>
                      </div>

                      <div className="min-w-0">
                        <label htmlFor="contact-phone" className={labelClass}>
                          Phone (optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={cn(fieldClass, 'h-12')}
                        />
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label htmlFor="contact-message" className={labelClass}>
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={cn(fieldClass, 'py-3 min-h-[128px] resize-none')}
                      />
                    </div>

                    {/* Row 4: Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        id="agree-privacy"
                        type="checkbox"
                        checked={formData.agreePrivacy}
                        onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                        className="w-5 h-5 rounded border-white/20 bg-white/10 text-[#B7E34A] focus:ring-[#B7E34A] mt-0.5 shrink-0 cursor-pointer accent-[#B7E34A]"
                      />
                      <label htmlFor="agree-privacy" className="text-sm text-[#DDE3E3]/80 leading-relaxed cursor-pointer">
                        I agree to the collection and use of my personal information for the purpose of responding to my enquiry, as outlined in the company&apos;s{' '}
                        <span className="text-white underline">Privacy Policy</span>.
                      </label>
                    </div>

                    {/* Error display */}
                    {formStatus === 'error' && (
                      <div role="alert" className="flex items-start gap-2 p-3 bg-red-900/30 border border-red-500/50 rounded-[10px] text-red-200 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" aria-hidden="true" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Row 5: Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={formStatus === 'submitting'}
                        className="w-full sm:w-auto"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Send inquiry</span>
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. RESOURCE CARDS (3-Card Row)
         ========================================================= */}
      <section className="relative z-10 section-y pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {RESOURCES.map(({ href, title, description, Icon }) => (
              <div key={href} data-reveal="card" className="h-full min-w-0">
                <Link href={href} className={resourceCardClass}>
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={cn(type.h4, tone.headingLight, 'group-hover:text-[#1F6F78] transition-colors mb-1')}>
                        {title}
                      </h3>
                      <span className={cn('text-sm leading-relaxed block', tone.mutedLight)}>
                        {description}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-[#5B6B73] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. BOTTOM NEWSLETTER STRIP (Stay Informed)
          id="newsletter" is the target of /contact#newsletter links on the
          homepage (LatestNews, InvestorHub).
         ========================================================= */}
      <section
        id="newsletter"
        className="relative z-10 overflow-hidden bg-[#0B1F2A] text-white section-y-compact scroll-mt-24"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/taranaki-panoramic-coast.jpg"
            alt="New Zealand Natural Setting"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2A] via-[#0B1F2A]/90 to-[#0B1F2A]/75" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <SectionHeading
              eyebrow="STAY INFORMED"
              title="Get the latest news"
              description="Subscribe to receive company updates and announcements."
              size="compact"
              dark
              className="mb-0 min-w-0"
            />

            <div data-reveal className="w-full lg:max-w-md shrink-0">
              {newsletterStatus === 'success' ? (
                <div role="status" className="flex items-center gap-2 text-sm text-[#B7E34A] py-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Thank you for subscribing to Monumental Energy news alerts.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    aria-label="Your email address"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={cn(fieldClass, 'h-12 sm:flex-1')}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={newsletterStatus === 'loading'}
                    className="w-full sm:w-auto shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
