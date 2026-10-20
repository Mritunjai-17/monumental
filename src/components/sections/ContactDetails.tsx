import React from 'react';
import { siteConfig } from '@/data/site';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

/** Icon rows for email / phone / address / hours, all sourced from data/site.ts. */
export const ContactDetails: React.FC<{ dark?: boolean; className?: string }> = ({
  dark = false,
  className,
}) => {
  const { email, phone, address, hours, hoursVerified } = siteConfig.contact;

  const rows = [
    { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    { icon: Phone, label: 'Telephone', value: phone, href: `tel:${phone}` },
    { icon: MapPin, label: 'Office Address', value: address },
    { icon: Clock, label: 'Office Hours', value: hours, unverified: !hoursVerified },
  ];

  return (
    <ul className={cn('space-y-5', className)}>
      {rows.map(({ icon: Icon, label, value, href, unverified }) => (
        <li key={label} className="flex items-start gap-4">
          <span
            className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
              dark
                ? 'bg-[#162F3F] border border-[#27485F] text-[#B7E34A]'
                : 'bg-[#1F6F78]/10 text-[#1F6F78]'
            )}
          >
            <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
          </span>
          <div className="min-w-0 pt-0.5">
            <span
              className={cn(
                'text-xs uppercase tracking-wider font-medium flex items-center gap-2 mb-0.5',
                dark ? 'text-[#94A3B8]' : 'text-[#5B6B73]'
              )}
            >
              {label}
              {unverified && (
                <Badge variant="unverified" className="text-[10px] px-2 py-0 normal-case tracking-normal">
                  Unverified
                </Badge>
              )}
            </span>
            {href ? (
              <a
                href={href}
                className={cn(
                  'text-base font-medium transition-colors break-words',
                  dark ? 'text-white hover:text-[#B7E34A]' : 'text-[#1F6F78] hover:text-[#0B1F2A]'
                )}
              >
                {value}
              </a>
            ) : (
              <span className={cn('text-sm block leading-relaxed', dark ? 'text-white/90' : 'text-[#16232B]')}>
                {value}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
