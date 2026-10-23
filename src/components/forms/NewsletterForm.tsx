'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const NewsletterForm: React.FC<{ dark?: boolean }> = ({ dark = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-sm text-[#B7E34A] py-2">
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span>Thank you for subscribing to Monumental Energy news alerts.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        aria-label="Email address for news alerts"
        autoComplete="email"
        placeholder="Enter your email for news alerts"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`min-w-0 px-4 py-3 rounded-[10px] text-base flex-1 border transition-all focus:outline-none focus:ring-2 focus:ring-[#1F6F78] ${
          dark
            ? 'bg-[#0E2836] border-[#1D3B4C] text-white placeholder-white/50 focus:border-[#1F6F78]'
            : 'bg-white border-[#DDE3E3] text-[#16232B] placeholder-[#5B6B73]/70 focus:border-[#1F6F78]'
        }`}
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        disabled={status === 'loading'}
        className="shrink-0 min-h-[44px]"
      >
        {status === 'loading' ? 'Joining...' : 'Subscribe'}
      </Button>
    </form>
  );
};
