import React from 'react';
import { InvestorCentreView } from '@/components/sections/InvestorCentreView';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Investor Centre',
  description:
    'Official shareholder hub for Monumental Energy Corp. (TSX-V: MNRG). Verified corporate presentation, capital structure, SEDAR+ continuous disclosures, and professional registry.',
  path: '/investors',
});

export default function InvestorsPage() {
  return <InvestorCentreView />;
}
