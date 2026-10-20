'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface FormState {
  role: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

export const InvestorContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    role: 'Prospective Investor',
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const roleOptions = [
    { value: 'Prospective Investor', label: 'Prospective Investor' },
    { value: 'Shareholder', label: 'Current Shareholder' },
    { value: 'Investment Advisor', label: 'Investment Advisor / Broker' },
    { value: 'Analyst', label: 'Financial Analyst' },
    { value: 'Service Provider', label: 'Service Provider' },
    { value: 'Other', label: 'Other Inquiries' },
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate or personal email.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if filled, quietly drop without alerting bot
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setFormData({
        role: 'Prospective Investor',
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-[16px] p-8 border border-[#DDE3E3] shadow-[0_12px_32px_-4px_rgba(11,31,42,0.12)] text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-2">
          Inquiry Received
        </h3>
        <p className="text-[#5B6B73] text-sm max-w-md mx-auto mb-6">
          Thank you for reaching out to Monumental Energy Investor Relations. A member of our corporate team will follow up with your requested briefing shortly.
        </p>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[16px] p-6 sm:p-8 lg:p-10 border border-[#DDE3E3] shadow-[0_12px_32px_-4px_rgba(11,31,42,0.12)]">
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-1">
          Direct Investor Inquiry
        </h3>
        <p className="text-sm text-[#5B6B73]">
          Connect directly with Monumental Energy corporate management and IR.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Hidden Honeypot spam trap */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_field">Do not fill this</label>
          <input
            id="hp_field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        <Select
          label="I am a..."
          options={roleOptions}
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="jane@fund.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            error={errors.email}
            required
          />
        </div>

        <Input
          label="Phone Number (Optional)"
          type="tel"
          placeholder="+1 (604) 555-0199"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <Textarea
          label="Message or Question"
          placeholder="Please share details regarding your inquiry, shareholding, or requested materials..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          error={errors.message}
          required
        />

        {status === 'error' && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>An error occurred while submitting. Please try again or email info@monumental.energy directly.</span>
          </div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full text-base font-semibold"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}
          </Button>
          <p className="text-[11px] text-[#5B6B73] text-center mt-2.5">
            Your information is strictly protected under our Privacy Policy and will never be shared.
          </p>
        </div>
      </form>
    </div>
  );
};
