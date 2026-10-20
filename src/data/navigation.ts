import { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      {
        label: 'Projects Overview',
        href: '/projects',
        description: 'Dual-pillar portfolio: near-term cashflow and energy transition metals',
      },
      {
        label: 'New Zealand Oil & Gas',
        href: '/projects/new-zealand',
        description: 'Near-term production investment and joint-venture assets',
      },
      {
        label: 'Salar de Turi Lithium',
        href: '/projects/salar-de-turi',
        description: '2% NSR royalty across 8,500 hectares in the Lithium Triangle, Chile',
      },
    ],
  },
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Investors',
    href: '/investors',
    children: [
      {
        label: 'Investor Centre',
        href: '/investors',
        description: 'Shareholder hub, filings, corporate reports, and stock info',
      },
      {
        label: 'Investor Presentation',
        href: '/investors/presentation',
        description: 'Latest corporate overview and strategic deck (PDF)',
      },
      {
        label: 'Annual General Meeting',
        href: '/investors/agm',
        description: 'Notice of meeting, voting details, and circulars',
      },
    ],
  },
  {
    label: 'ESG',
    href: '/esg',
  },
];
