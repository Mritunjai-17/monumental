import React from 'react';
import { Container } from '@/components/ui/Container';
import { statsData } from '@/data/stats';

export const StatsStrip: React.FC = () => {
  return (
    <div className="relative z-20 -mt-16 sm:-mt-20">
      <Container>
        <div className="bg-white rounded-[16px] border border-[#DDE3E3] shadow-[0_16px_40px_-6px_rgba(11,31,42,0.12)] p-6 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 divide-y sm:divide-y-0 sm:divide-x divide-[#DDE3E3]/80">
            {statsData.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col justify-between ${
                  idx > 0 ? 'pt-5 sm:pt-0 sm:pl-5 lg:pl-6' : ''
                }`}
              >
                <span className="text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-[0.12em] mb-2 truncate">
                  {stat.label}
                </span>

                <div className="flex items-baseline my-1">
                  <span className="font-heading font-bold text-2xl sm:text-2xl lg:text-[28px] xl:text-[30px] text-[#0B1F2A] tracking-[-0.02em] leading-none whitespace-nowrap">
                    {stat.value}
                  </span>
                </div>

                <span className="text-xs text-[#5B6B73] mt-1 font-body truncate">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
