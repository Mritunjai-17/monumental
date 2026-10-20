import React from 'react';
import { Container } from '@/components/ui/Container';
import { statsData } from '@/data/stats';
import { cn } from '@/lib/utils';

export const StatsStrip: React.FC = () => {
  return (
    // Overlaps the hero's bottom edge by exactly 60px.
    <div className="relative z-20 -mt-[60px]">
      <Container>
        <div className="hero-stats bg-white rounded-[16px] border border-[#DDE3E3] shadow-[0_16px_40px_-6px_rgba(11,31,42,0.12)]">
          {/* Equal columns: 1 / 2x2 / 4. Dividers are per-cell so they stay correct when the grid wraps. */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, idx) => (
              <div
                key={stat.id}
                className={cn(
                  'min-w-0 flex flex-col px-6 py-6 lg:py-8 border-[#DDE3E3]',
                  // mobile (1 col): rule between stacked items
                  idx > 0 && 'border-t',
                  // sm (2x2): no rule above the top row, left rule on the right column
                  idx < 2 && 'sm:border-t-0',
                  idx % 2 === 1 && 'sm:border-l',
                  // lg (1x4): no top rules, left rule on every item after the first
                  'lg:border-t-0',
                  idx > 0 && 'lg:border-l'
                )}
              >
                <dt className="text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-[0.12em] mb-3 truncate">
                  {stat.label}
                </dt>
                <dd className="font-heading font-bold text-2xl lg:text-[26px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.15] whitespace-nowrap">
                  {stat.value}
                </dd>
                {stat.subtext && (
                  <dd className="text-xs text-[#5B6B73] mt-2 font-body truncate">
                    {stat.subtext}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
};
