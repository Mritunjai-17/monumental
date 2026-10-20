'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { TickerChip } from './TickerChip';
import { X, ChevronDown, ChevronRight, Mail, Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleDropdown = (label: string) => {
    setExpandedDropdown(expandedDropdown === label ? null : label);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#0B1F2A] flex flex-col justify-between overflow-y-auto px-6 py-6 transition-all duration-300"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-[#1D3B4C]">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Monumental Energy"
            width={180}
            height={37}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-lg text-white hover:bg-[#162F3F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="py-8 flex-1">
        <div className="mb-6">
          <TickerChip />
        </div>

        <nav className="flex flex-col space-y-2">
          {navigationItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedDropdown === item.label;

            if (hasChildren) {
              return (
                <div key={item.label} className="border-b border-[#162F3F] py-2">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between text-left py-2 text-xl font-heading font-medium text-white hover:text-[#B7E34A] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5B6B73] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#B7E34A]' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="pl-4 pr-2 py-2 flex flex-col space-y-3 bg-[#081822] rounded-lg mt-1 mb-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="flex flex-col py-1 text-white/90 hover:text-[#B7E34A] transition-colors"
                        >
                          <span className="font-heading font-medium text-base flex items-center gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-[#1F6F78]" />
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-xs text-[#5B6B73] pl-5">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="py-3 text-xl font-heading font-medium text-white hover:text-[#B7E34A] border-b border-[#162F3F] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Area with CTA and Contact */}
      <div className="pt-6 border-t border-[#1D3B4C] flex flex-col gap-4">
        <Button href="/contact" variant="primary" size="md" className="w-full">
          Investor Contact
        </Button>

        <div className="flex flex-col gap-2 text-xs text-[#5B6B73] pt-2">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 hover:text-[#B7E34A] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#1F6F78]" />
            {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 hover:text-[#B7E34A] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1F6F78]" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
