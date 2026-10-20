'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { TickerChip } from './TickerChip';
import { MobileMenu } from './MobileMenu';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 bg-[#0B1F2A]',
          isScrolled
            ? 'bg-[#0B1F2A]/90 backdrop-blur-md shadow-lg shadow-[#0B1F2A]/20 border-b border-[#1D3B4C]/80 py-3'
            : 'border-b border-transparent py-4 sm:py-5'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A] rounded-lg"
          >
            <Image
              src="/images/logo.png"
              alt="Monumental Energy"
              width={203}
              height={42}
              priority
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                pathname === item.href ||
                (hasChildren && item.children?.some((c) => pathname === c.href));

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'h-9 inline-flex items-center gap-1.5 px-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]',
                        isActive
                          ? 'text-[#B7E34A] font-semibold'
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                      )}
                      aria-expanded={openDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 shrink-0 transition-transform duration-200 mt-px',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        'absolute left-0 top-full pt-2 w-72 transition-all duration-200',
                        openDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      )}
                    >
                      <div className="bg-[#0E2836] border border-[#1D3B4C] rounded-[14px] shadow-2xl p-2 flex flex-col gap-1 backdrop-blur-xl">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'px-3.5 py-2.5 rounded-lg transition-colors group/item block',
                              pathname === child.href
                                ? 'bg-[#1F6F78]/25 text-[#B7E34A]'
                                : 'text-white/80 hover:bg-[#162F3F] hover:text-white'
                            )}
                          >
                            <span className="font-heading font-medium text-sm block group-hover/item:text-[#B7E34A] transition-colors">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="text-[11px] text-[#5B6B73] line-clamp-1 block mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'h-9 inline-flex items-center justify-center px-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]',
                    isActive
                      ? 'text-[#B7E34A] font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <TickerChip className="hidden md:inline-flex" />
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="h-9 px-4 text-xs sm:text-sm font-semibold rounded-[8px] inline-flex items-center justify-center shrink-0"
            >
              Investor Contact
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
