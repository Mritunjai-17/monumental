'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
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
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-8 lg:pb-12">
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
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] lg:min-h-[360px]">
            <div className="lg:col-span-7 pr-0 lg:pr-8">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                CORPORATE &amp; INVESTOR RELATIONS
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                Let&apos;s start<br />a conversation.
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                We welcome enquiries from shareholders, investors, analysts, brokers, media and business partners.
              </p>
            </div>

            <div className="lg:hidden col-span-1 mt-2">
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
         ========================================================= */}
      <section className="py-6 sm:py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* LEFT CARD: Contact Information (Map omitted per user request) */}
            <div className="lg:col-span-5 bg-white rounded-[22px] border border-[#DDE3E3] p-7 sm:p-9 shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-7">
                  <h2 className="font-heading font-bold text-2xl text-[#0B1F2A] tracking-tight mb-1.5">
                    Contact Information
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5B6B73]">
                    Get in touch with our team for any enquiries.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Entity */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#0B1F2A] leading-snug mb-0.5">
                        Monumental Energy Corp.
                      </h3>
                      <p className="text-xs text-[#5B6B73]">
                        Corporate &amp; Investor Relations
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-0.5">
                        Email
                      </span>
                      <a
                        href="mailto:info@monumental.energy"
                        className="text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors"
                      >
                        info@monumental.energy
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-0.5">
                        Phone
                      </span>
                      <a
                        href="tel:+16043678117"
                        className="text-sm font-semibold text-[#0B1F2A] hover:text-[#1F6F78] transition-colors"
                      >
                        +1-604-367-8117
                      </a>
                    </div>
                  </div>

                  {/* Registered Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-0.5">
                        Registered Office
                      </span>
                      <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed">
                        Suite 228 - 1122 Mainland Street,<br />
                        Vancouver, BC V6B 5L1, Canada
                      </p>
                    </div>
                  </div>

                  {/* Transfer Agent */}
                  <div className="flex items-start gap-4 pt-4 border-t border-[#E8ECEC]">
                    <div className="w-11 h-11 rounded-2xl bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center shrink-0 mt-0.5">
                      <FileCheck className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#87969F] block mb-0.5">
                        Transfer Agent
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#0B1F2A] block mb-0.5">
                        Computershare Investor Services Inc.
                      </span>
                      <p className="text-xs text-[#87969F]">
                        For voting support and shareholder enquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: Send us a message (Dark Navy Card #07161F) */}
            <div className="lg:col-span-7 bg-[#07161F] text-white rounded-[22px] border border-[#183040] p-7 sm:p-9 shadow-xl flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h2 className="font-heading font-bold text-2xl text-white tracking-tight mb-1.5">
                    Send us a message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#87969F]">
                    Fill out the form below and our team will get back to you.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="py-12 text-center bg-white/5 rounded-2xl border border-white/10 p-8">
                    <div className="w-14 h-14 rounded-full bg-[#B7E34A]/20 text-[#B7E34A] mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      Message Successfully Sent
                    </h3>
                    <p className="text-xs sm:text-sm text-[#87969F] max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you for contacting Monumental Energy. A representative will review your inquiry and follow up promptly.
                    </p>
                    <button
                      type="button"
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
                      className="inline-flex items-center gap-2 bg-[#B7E34A] hover:bg-[#a5d43b] text-[#0B1F2A] font-heading font-bold text-xs px-5 py-2.5 rounded-lg transition-all"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-semibold text-white/90 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-white text-[#0B1F2A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B7E34A] placeholder-[#87969F]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-semibold text-white/90 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white text-[#0B1F2A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B7E34A] placeholder-[#87969F]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Inquiry Type & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-semibold text-white/90 mb-1.5">
                          Inquiry Type *
                        </label>
                        <select
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full bg-white text-[#0B1F2A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B7E34A] cursor-pointer"
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

                      <div>
                        <label className="block text-xs font-heading font-semibold text-white/90 mb-1.5">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white text-[#0B1F2A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B7E34A] placeholder-[#87969F]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label className="block text-xs font-heading font-semibold text-white/90 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white text-[#0B1F2A] rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#B7E34A] placeholder-[#87969F] resize-none"
                      />
                    </div>

                    {/* Row 4: Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        id="agree-privacy"
                        type="checkbox"
                        checked={formData.agreePrivacy}
                        onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                        className="w-4 h-4 rounded border-white/20 bg-white/10 text-[#B7E34A] focus:ring-[#B7E34A] mt-0.5 cursor-pointer accent-[#B7E34A]"
                      />
                      <label htmlFor="agree-privacy" className="text-xs text-[#87969F] leading-relaxed cursor-pointer">
                        I agree to the collection and use of my personal information for the purpose of responding to my enquiry, as outlined in the company&apos;s{' '}
                        <span className="text-white underline">Privacy Policy</span>.
                      </label>
                    </div>

                    {/* Error display */}
                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Row 5: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="bg-[#B7E34A] hover:bg-[#a5d43b] text-[#0B1F2A] font-heading font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all shadow-sm disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Transmitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Send inquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
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
      <section className="py-6 sm:py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Investor Centre */}
            <Link
              href="/investors"
              className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-1">
                    Investor Centre
                  </h4>
                  <span className="text-xs text-[#87969F] block">
                    Financial information, filings and share information.
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>

            {/* Card 2: Latest News & Disclosures */}
            <Link
              href="/news"
              className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-1">
                    Latest News &amp; Disclosures
                  </h4>
                  <span className="text-xs text-[#87969F] block">
                    Company announcements and media releases.
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>

            {/* Card 3: AGM & Shareholder Information */}
            <Link
              href="/investors/agm"
              className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#DDE3E3] shadow-sm hover:border-[#1F6F78] hover:shadow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F6F78]/10 flex items-center justify-center text-[#1F6F78] shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-tight mb-1">
                    AGM &amp; Shareholder Information
                  </h4>
                  <span className="text-xs text-[#87969F] block">
                    Meeting materials, voting information and related documents.
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#87969F] group-hover:text-[#0B1F2A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. BOTTOM NEWSLETTER STRIP (Stay Informed)
         ========================================================= */}
      <section className="relative overflow-hidden bg-[#07161F] text-white py-12 sm:py-14 mt-6 sm:mt-10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/taranaki-panoramic-coast.jpg"
            alt="New Zealand Natural Setting"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161F] via-[#07161F]/90 to-[#07161F]/75" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-[#B7E34A] block mb-1.5">
                STAY INFORMED
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-1">
                Get the latest news
              </h3>
              <p className="text-xs text-[#87969F]">
                Subscribe to receive company updates and announcements.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-sm text-[#B7E34A] py-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing to Monumental Energy news alerts.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white text-[#0B1F2A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B7E34A] placeholder-[#87969F]"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="bg-[#B7E34A] hover:bg-[#a5d43b] text-[#0B1F2A] font-heading font-bold text-xs sm:text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shrink-0 shadow-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
