'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a consent choice
    try {
      const consent = localStorage.getItem('monumental_cookie_consent');
      if (!consent) {
        // Subtle entrance delay for polished experience
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage access may be restricted in private browsing
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem('monumental_cookie_consent', choice);
      // Persist 1-year cookie flag for SSR/edge routing consistency
      const maxAge = 365 * 24 * 60 * 60;
      document.cookie = `monumental_cookie_consent=${choice}; path=/; max-age=${maxAge}; SameSite=Lax`;
    } catch {
      // Fallback
    }
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Preferences"
      className="fixed bottom-3 inset-x-3 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-[460px] z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#0B1F2A] text-white rounded-[20px] p-5 sm:p-6 border border-[#1D3B4C] shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 bg-[#1F6F78]/20 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Top bar: Icon, Title & Dismiss */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1F6F78]/20 border border-[#1F6F78]/40 flex items-center justify-center text-[#B7E34A] shrink-0">
              <Cookie className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B7E34A] block">
                PRIVACY &amp; TELEMETRY
              </span>
              <h3 className="font-heading font-bold text-sm sm:text-[15px] text-white leading-tight">
                Cookie Preferences
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleConsent('declined')}
            aria-label="Dismiss cookie notice"
            className="text-[#DDE3E3]/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Informative text */}
        <p className="text-xs sm:text-[13px] text-[#DDE3E3]/85 leading-relaxed mb-5">
          Monumental Energy Corp. uses cookies to enhance navigation, analyze site performance, and support regulatory shareholder communications in compliance with Canadian PIPEDA legislation. Review our{' '}
          <Link
            href="/privacy-policy"
            className="text-[#B7E34A] hover:underline font-semibold underline-offset-2"
          >
            Privacy Policy
          </Link>{' '}
          for details.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            className="h-10 px-5 rounded-xl bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Accept All</span>
          </button>

          <button
            type="button"
            onClick={() => handleConsent('declined')}
            className="h-10 px-4 rounded-xl border border-[#1D3B4C] hover:border-white/30 text-white/80 hover:text-white hover:bg-white/5 font-heading font-semibold text-xs transition-colors flex items-center justify-center"
          >
            <span>Necessary Only</span>
          </button>
        </div>
      </div>
    </div>
  );
};

