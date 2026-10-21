import React from 'react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

/** Icon rows for verified email / phone / address, sourced from data/site.ts. */
export const ContactDetails: React.FC<{ dark?: boolean; className?: string }> = ({
  dark = false,
  className,
}) => {
  const { email, phone, address } = siteConfig.contact;

  const rows = [
    {
      icon: Mail,
      label: 'Email Inquiries',
      value: email,
      href: `mailto:${email}`,
      description: 'Official corporate and investor relations inbox',
    },
    {
      icon: Phone,
      label: 'Telephone',
      value: phone,
      href: `tel:${phone}`,
      description: 'Vancouver corporate office line',
    },
    {
      icon: MapPin,
      label: 'Registered Office',
      value: address,
      href: 'https://maps.google.com/?q=Suite+228+-+1122+Mainland+Street,+Vancouver+BC+V6B+5L1',
      isExternal: true,
      description: 'Vancouver, BC, Canada',
    },
  ];

  return (
    <ul className={cn('space-y-6', className)}>
      {rows.map(({ icon: Icon, label, value, href, isExternal, description }) => (
        <li key={label} className="flex items-start gap-4">
          <span
            className={cn(
              'w-11 h-11 rounded-xl flex items-center justify-center shrink-0',
              dark
                ? 'bg-[#162F3F] border border-[#27485F] text-[#B7E34A]'
                : 'bg-[#1F6F78]/10 text-[#1F6F78]'
            )}
          >
            <Icon className="w-5 h-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 pt-0.5">
            <span
              className={cn(
                'text-xs uppercase tracking-wider font-semibold block mb-0.5',
                dark ? 'text-[#94A3B8]' : 'text-[#5B6B73]'
              )}
            >
              {label}
            </span>
            <a
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={cn(
                'text-base font-semibold transition-colors break-words inline-flex items-center gap-1.5 group',
                dark ? 'text-white hover:text-[#B7E34A]' : 'text-[#1F6F78] hover:text-[#0B1F2A]'
              )}
            >
              <span>{value}</span>
              {isExternal && (
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </a>
            {description && (
              <span className={cn('text-xs block mt-0.5', dark ? 'text-[#64748B]' : 'text-[#87969F]')}>
                {description}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
