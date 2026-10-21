'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
  const [errorMessage, setErrorMessage] = useState<string>('');

  const roleOptions = [
    { value: 'Prospective Investor', label: 'Prospective Investor' },
    { value: 'Current Shareholder', label: 'Current Shareholder' },
    { value: 'Investment Advisor', label: 'Investment Advisor / Broker' },
    { value: 'Financial Analyst', label: 'Financial Analyst / Research' },
    { value: 'Media / Press', label: 'Media / Press Inquiry' },
    { value: 'Other Inquiry', label: 'General / Other Inquiry' },
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@company.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus('error');
        setErrorMessage(
          result.error || 'Submission could not be completed. Please try again or email info@monumental.energy.'
        );
        return;
      }

      setStatus('success');
      setFormData({
        role: 'Prospective Investor',
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        'A network connection error occurred. Please verify your connection or email info@monumental.energy.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white rounded-[16px] p-8 border border-[#DDE3E3] shadow-[0_12px_32px_-4px_rgba(11,31,42,0.12)] text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-2">
          Inquiry Successfully Sent
        </h3>
        <p className="text-[#5B6B73] text-sm max-w-md mx-auto mb-4 leading-relaxed">
          Thank you for reaching out. Your message has been routed directly to Monumental Energy Investor Relations (info@monumental.energy). A corporate representative will follow up with you promptly.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </Button>
        </div>
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
          id="contact-role"
          name="role"
          label="Inquiry Category / Shareholder Role"
          options={roleOptions}
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="contact-name"
            name="name"
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
            id="contact-email"
            name="email"
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
          id="contact-phone"
          name="phone"
          label="Phone Number (Optional)"
          type="tel"
          placeholder="+1 (604) 555-0199"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <Textarea
          id="contact-message"
          name="message"
          label="Message or Question"
          placeholder="Please share details regarding your inquiry, shareholding, or requested briefing materials..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          error={errors.message}
          required
        />

        {status === 'error' && (
          <div role="alert" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-xl">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold block mb-0.5">Submission Error</span>
              <span className="text-xs text-red-700 leading-relaxed">
                {errorMessage || 'Unable to transmit your message. Please verify your details or email info@monumental.energy directly.'}
              </span>
            </div>
          </div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full text-base font-semibold"
            disabled={status === 'submitting'}
            aria-busy={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Inquiry...</span>
              </span>
            ) : (
              'Submit Investor Inquiry'
            )}
          </Button>
          <p className="text-[11px] text-[#5B6B73] text-center mt-2.5">
            Your information is strictly protected under our Privacy Policy and will never be shared.
          </p>
        </div>
      </form>
    </div>
  );
};
