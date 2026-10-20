'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { X, ChevronDown, ChevronRight, Mail, Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const prevPathname = useRef(pathname);

  // Close menu on actual route change (not on mount)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
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
      className="fixed inset-0 z-50 bg-[#0B1F2A]/98 backdrop-blur-xl flex flex-col justify-between overflow-y-auto px-5 sm:px-8 py-5 transition-all duration-300"
    >
      {/* Top Bar with Vertically Centered Logo and Close Button */}
      <div className="flex items-center justify-between pb-5 border-b border-[#1D3B4C]">
        <Link href="/" onClick={onClose} className="flex items-center h-10">
          <Image
            src="/images/logo.png"
            alt="Monumental Energy"
            width={180}
            height={37}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-[#162F3F] active:bg-[#1F6F78]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links with Min 48px Touch Targets */}
      <div className="py-6 flex-1">
        <nav className="flex flex-col space-y-1">
          {navigationItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedDropdown === item.label;
            const isActive =
              pathname === item.href ||
              (hasChildren && item.children?.some((c) => pathname === c.href));

            if (hasChildren) {
              return (
                <div key={item.label} className="border-b border-[#162F3F]/60 py-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={cn(
                      'w-full min-h-[48px] flex items-center justify-between text-left px-2 py-2 text-lg font-heading font-semibold transition-colors',
                      isActive ? 'text-[#B7E34A]' : 'text-white hover:text-[#B7E34A]'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5B6B73] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#B7E34A]' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="pl-3 pr-2 py-2 flex flex-col space-y-1 bg-[#081822] rounded-xl mt-1 mb-2 border border-[#1D3B4C]/50">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={cn(
                            'min-h-[44px] flex flex-col justify-center px-3 py-2 rounded-lg transition-colors',
                            pathname === child.href
                              ? 'bg-[#1F6F78]/25 text-[#B7E34A]'
                              : 'text-white/80 hover:bg-[#162F3F] hover:text-white'
                          )}
                        >
                          <span className="font-heading font-medium text-sm flex items-center gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-[#1F6F78]" />
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-xs text-[#5B6B73] pl-5 line-clamp-1">{child.description}</span>
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
                className={cn(
                  'min-h-[48px] flex items-center px-2 py-2 text-lg font-heading font-semibold border-b border-[#162F3F]/60 transition-colors',
                  isActive ? 'text-[#B7E34A]' : 'text-white hover:text-[#B7E34A]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Area with Primary Contact CTA */}
      <div className="pt-5 border-t border-[#1D3B4C] flex flex-col gap-4">
        <Button href="/contact" variant="primary" size="md" className="w-full h-12 font-semibold">
          Investor Contact
        </Button>

        <div className="flex flex-col gap-2.5 text-xs text-[#5B6B73] pt-1">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2.5 hover:text-[#B7E34A] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#1F6F78]" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2.5 hover:text-[#B7E34A] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1F6F78]" />
            <span>{siteConfig.contact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
