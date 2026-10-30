export interface CapitalStat {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  badge?: string;
}

export interface WarrantTranche {
  tranche: string;
  quantity: string;
  strikePrice: string;
  status: string;
}

export interface OptionTranche {
  tranche: string;
  quantity: string;
  strikePrice: string;
  status: string;
}

export interface ShareholderStake {
  name: string;
  shares: string;
  stakeType: string;
  notes: string;
}

export interface SedarFiling {
  id: string;
  date: string;
  title: string;
  documentType: string;
  category: 'Continuous Disclosure' | 'Financial Statement' | 'News Release' | 'Governance';
  url: string;
}

export interface InvestorPresentationDoc {
  title: string;
  subtitle: string;
  releaseDate: string;
  fileSize: string;
  pageCount: number;
  format: string;
  downloadUrl: string;
  previewImage: string;
  summary: string;
}

export interface LifeOfferingDoc {
  title: string;
  amendedDate: string;
  instrument: string;
  keyTerms: string[];
  downloadUrl: string;
}

export interface ChartPoint {
  date: string;
  price: number;
  volume: number;
  label?: string;
}

export interface DetailedQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  timestamp: string;
  status: string;
  bid: number;
  bidSize: number;
  ask: number;
  askSize: number;
  volume: number;
  open: number;
  prevClose: number;
  high: number;
  low: number;
  vwap: number;
  beta: number;
  yearHigh: number;
  yearLow: number;
  marketCap: string;
  totalShares: string;
  sharesOut: string;
  escrowShares: string;
  pbRatio: number;
  eps: number;
  exchange: string;
}

export const marketQuoteData: DetailedQuote = {
  symbol: 'TSX-V: MNRG',
  price: 0.08,
  change: 0.0,
  changePercent: 0.0,
  currency: 'CAD',
  timestamp: 'October 21, 2026 9:41 AM ET',
  status: 'DELAYED PRICE • MARKET CLOSED',
  bid: 0.07,
  bidSize: 11000,
  ask: 0.08,
  askSize: 15000,
  volume: 10000,
  open: 0.08,
  prevClose: 0.08,
  high: 0.08,
  low: 0.08,
  vwap: 0.08,
  beta: -0.21192,
  yearHigh: 0.175,
  yearLow: 0.03,
  marketCap: '9.10M',
  totalShares: '113.77M',
  sharesOut: '113.77M',
  escrowShares: '1.07M',
  pbRatio: 2.09,
  eps: -0.09,
  exchange: 'TSX Venture Exchange',
};

export const chartHistoricalData: Record<string, ChartPoint[]> = {
  '1D': [
    { date: '9:30 AM', price: 0.08, volume: 1500 },
    { date: '10:30 AM', price: 0.08, volume: 2200 },
    { date: '11:30 AM', price: 0.075, volume: 1800 },
    { date: '12:30 PM', price: 0.08, volume: 1200 },
    { date: '1:30 PM', price: 0.08, volume: 800 },
    { date: '2:30 PM', price: 0.075, volume: 1100 },
    { date: '3:30 PM', price: 0.08, volume: 1400 },
  ],
  '5D': [
    { date: 'Oct 16', price: 0.065, volume: 3800 },
    { date: 'Oct 17', price: 0.065, volume: 4200 },
    { date: 'Oct 18', price: 0.065, volume: 5100 },
    { date: 'Oct 19', price: 0.072, volume: 12500 },
    { date: 'Oct 19 1:00 PM', price: 0.075, volume: 18200 },
    { date: 'Oct 20', price: 0.08, volume: 29500 },
    { date: 'Oct 20 1:00 PM', price: 0.075, volume: 14000 },
    { date: 'Oct 20 2:30 PM', price: 0.08, volume: 9200 },
    { date: 'Oct 21', price: 0.075, volume: 6400 },
    { date: 'Oct 21 Close', price: 0.08, volume: 10000 },
  ],
  '1M': [
    { date: 'Sep 22', price: 0.055, volume: 15000 },
    { date: 'Sep 29', price: 0.06, volume: 22000 },
    { date: 'Oct 06', price: 0.065, volume: 18000 },
    { date: 'Oct 13', price: 0.07, volume: 35000 },
    { date: 'Oct 21', price: 0.08, volume: 10000 },
  ],
  '3M': [
    { date: 'Jul 30', price: 0.075, volume: 42000 },
    { date: 'Aug 07', price: 0.068, volume: 38000 },
    { date: 'Aug 14', price: 0.088, volume: 85000 },
    { date: 'Aug 21', price: 0.098, volume: 112000 },
    { date: 'Aug 28', price: 0.092, volume: 64000 },
    { date: 'Sep 04', price: 0.078, volume: 49000 },
    { date: 'Sep 11', price: 0.085, volume: 73000 },
    { date: 'Sep 18', price: 0.072, volume: 55000 },
    { date: 'Sep 25', price: 0.070, volume: 61000 },
    { date: 'Oct 02', price: 0.065, volume: 39000 },
    { date: 'Oct 09', price: 0.080, volume: 92000 },
    { date: 'Oct 16', price: 0.074, volume: 48000 },
    { date: 'Oct 23', price: 0.078, volume: 67000 },
    { date: 'Oct 29', price: 0.080, volume: 27058 },
  ],
  '6M': [
    { date: 'May 2026', price: 0.045, volume: 85000 },
    { date: 'Jun 2026', price: 0.05, volume: 92000 },
    { date: 'Jul 2026', price: 0.06, volume: 110000 },
    { date: 'Aug 2026', price: 0.07, volume: 145000 },
    { date: 'Sep 2026', price: 0.065, volume: 78000 },
    { date: 'Oct 2026', price: 0.08, volume: 95000 },
  ],
  'YTD': [
    { date: 'Jan 2026', price: 0.04, volume: 120000 },
    { date: 'Mar 2026', price: 0.045, volume: 95000 },
    { date: 'May 2026', price: 0.055, volume: 115000 },
    { date: 'Jul 2026', price: 0.065, volume: 160000 },
    { date: 'Sep 2026', price: 0.07, volume: 140000 },
    { date: 'Oct 2026', price: 0.08, volume: 180000 },
  ],
  '1Y': [
    { date: 'Nov 2025', price: 0.035, volume: 80000 },
    { date: 'Jan 2026', price: 0.04, volume: 120000 },
    { date: 'Apr 2026', price: 0.05, volume: 110000 },
    { date: 'Jul 2026', price: 0.065, volume: 160000 },
    { date: 'Oct 2026', price: 0.08, volume: 180000 },
  ],
  '3Y': [
    { date: '2023 Q4', price: 0.03, volume: 450000 },
    { date: '2024 Q2', price: 0.045, volume: 620000 },
    { date: '2024 Q4', price: 0.055, volume: 510000 },
    { date: '2025 Q2', price: 0.065, volume: 780000 },
    { date: '2025 Q4', price: 0.07, volume: 690000 },
    { date: '2026 Q3', price: 0.08, volume: 850000 },
  ],
  '5Y': [
    { date: '2021', price: 0.08, volume: 1200000 },
    { date: '2022', price: 0.05, volume: 980000 },
    { date: '2023', price: 0.035, volume: 750000 },
    { date: '2024', price: 0.05, volume: 1100000 },
    { date: '2025', price: 0.068, volume: 1450000 },
    { date: '2026', price: 0.08, volume: 1650000 },
  ],
  '10Y': [
    { date: '2016', price: 0.12, volume: 850000 },
    { date: '2018', price: 0.10, volume: 1100000 },
    { date: '2020', price: 0.07, volume: 1400000 },
    { date: '2022', price: 0.045, volume: 1250000 },
    { date: '2024', price: 0.055, volume: 1600000 },
    { date: '2026', price: 0.08, volume: 1850000 },
  ],
};

export const investorCapitalData = {
  ticker: 'TSX-V: MNRG',
  crossListings: [
    { exchange: 'OTCQB', symbol: 'MNMRF' },
    { exchange: 'Frankfurt', symbol: 'ZA6' },
  ],
  identifiers: {
    cusip: '61534D108',
    isin: 'CA61534D1087',
  },
  overviewStats: [
    {
      id: 'shares-issued',
      label: 'Issued & Outstanding',
      value: '62.4M',
      subtext: 'Common voting equity shares',
      badge: 'As of Q1 2026',
    },
    {
      id: 'cash-position',
      label: 'Cash & Liquidity',
      value: '$1.5M',
      subtext: 'Unrestricted treasury reserves',
      badge: 'Funded Operations',
    },
    {
      id: 'nzec-holdings',
      label: 'Marketable Securities',
      value: '1.2M',
      subtext: 'Common shares in NZEC',
      badge: 'Strategic Asset',
    },
    {
      id: 'fully-diluted',
      label: 'Fully Diluted Total',
      value: '91.1M',
      subtext: 'Including all options & warrants',
      badge: 'Max Exposure',
    },
  ] as CapitalStat[],

  floatBreakdown: {
    insidersPercent: 40,
    fundsPercent: 40,
    retailPercent: 20,
    narrative:
      '38.2 million shares held by management, board insiders, and close associates (40%), with institutional resource funds holding an additional 40%, leaving a tight 20% tradeable retail float.',
  },

  warrants: [
    {
      tranche: 'Tranche A',
      quantity: '18,258,571',
      strikePrice: '$0.30',
      status: 'In-The-Money / Active',
    },
    {
      tranche: 'Tranche B',
      quantity: '5,555,555',
      strikePrice: '$0.65',
      status: 'Active',
    },
    {
      tranche: 'Tranche C',
      quantity: '455,258',
      strikePrice: '$0.65',
      status: 'Active',
    },
  ] as WarrantTranche[],

  totalWarrants: '23,833,384',

  options: [
    {
      tranche: 'Management Incentive A',
      quantity: '2,400,000',
      strikePrice: '$0.10',
      status: 'Vested',
    },
    {
      tranche: 'Management Incentive B',
      quantity: '694,600',
      strikePrice: '$0.20',
      status: 'Vested',
    },
    {
      tranche: 'Strategic Advisory',
      quantity: '337,875',
      strikePrice: '$0.25',
      status: 'Vested',
    },
    {
      tranche: 'Corporate Governance',
      quantity: '1,500,000',
      strikePrice: '$0.45',
      status: 'Active',
    },
  ] as OptionTranche[],

  totalOptions: '4,932,475',

  significantShareholders: [
    {
      name: 'Lithium Chile Corp.',
      shares: '4,500,000',
      stakeType: 'Strategic Corporate Partner',
      notes: '12-month voluntary lock-up with Right of First Refusal (ROFR).',
    },
    {
      name: 'Maximilian Sali',
      shares: '4,000,000',
      stakeType: 'Chief Executive Officer & Founder',
      notes: 'Governed by TSX Venture Exchange statutory escrow schedule.',
    },
  ] as ShareholderStake[],

  escrowNotice:
    'Discovery Silver and Lithium Chile stock issuances are governed by a 12-month voluntary lock-up with ROFRs. All pre-IPO founder holdings are held in strict escrow under TSX-V policies.',
};

export const corporateDeck: InvestorPresentationDoc = {
  title: 'Monumental Energy Investor Presentation',
  subtitle: 'Dual-Pillar Strategy: Low-Capex New Zealand Production & 2% NSR Lithium Brine Royalty',
  releaseDate: 'January 2026',
  fileSize: '4.8 MB',
  pageCount: 28,
  format: 'Adobe PDF',
  downloadUrl: '/documents/investor-presentation.pdf',
  previewImage: '/images/investor-deck-preview.jpg',
  summary:
    'Strategic corporate briefing detailing the low-capex conventional production workover program in New Zealand’s Taranaki Basin and capital-light 2% NSR royalty exposure across 8,500 hectares in Chile’s Lithium Triangle.',
};

export const lifeOfferingDoc: LifeOfferingDoc = {
  title: 'Listed Issuer Financing Exemption (LIFE) Offering Document',
  amendedDate: 'Amended February 26, 2025',
  instrument: 'Common Shares & Accompanying Warrants',
  keyTerms: [
    'Statutory exemption under Part 5A of National Instrument 45-106.',
    'Net proceeds earmarked for Taranaki Basin well recompletions and general working capital.',
    'Freely tradeable shares upon closing with zero statutory four-month hold period.',
    'Targeted subscription tranche closed in compliance with TSX-V requirements.',
  ],
  downloadUrl: '/documents/investor-presentation.pdf',
};

export const sedarFilings: SedarFiling[] = [
  {
    id: 'filing-1',
    date: 'October 13, 2026',
    title: 'Monumental Energy to Partner on the Maata Oil Field Onshore Taranaki Region',
    documentType: 'Material Change Report',
    category: 'Continuous Disclosure',
    url: 'https://www.sedarplus.ca',
  },
  {
    id: 'filing-2',
    date: 'September 29, 2026',
    title: 'Interim Condensed Consolidated Financial Statements (Q2 2026)',
    documentType: 'Financial Statements',
    category: 'Financial Statement',
    url: 'https://www.sedarplus.ca',
  },
  {
    id: 'filing-3',
    date: 'September 29, 2026',
    title: 'Management’s Discussion and Analysis (MD&A) for Q2 Ended June 30, 2026',
    documentType: 'MD&A Report',
    category: 'Financial Statement',
    url: 'https://www.sedarplus.ca',
  },
  {
    id: 'filing-4',
    date: 'June 18, 2026',
    title: 'Notice of Annual General and Special Meeting of Shareholders and Information Circular',
    documentType: 'Management Information Circular',
    category: 'Governance',
    url: 'https://www.sedarplus.ca',
  },
];

export const professionalAdvisory = [
  {
    role: 'Transfer Agent & Registrar',
    name: 'Computershare Investor Services Inc.',
    address: '510 Burrard Street, 3rd Floor, Vancouver, BC V6C 3B9',
    website: 'https://www.investorcentre.com',
  },
  {
    role: 'Independent Auditor',
    name: 'Crowe MacKay LLP',
    address: 'Chartered Professional Accountants, Vancouver, BC',
    website: 'https://www.crowe.com/ca/crowemackay',
  },
  {
    role: 'Canadian Securities Counsel',
    name: 'AFG Law LLP / Cutler Law',
    address: 'Barristers & Solicitors, Vancouver, BC',
    website: 'https://www.afglaw.ca',
  },
  {
    role: 'Direct Shareholder Relations',
    name: 'Monumental Energy Corporate IR',
    address: 'Suite 228 - 1122 Mainland Street, Vancouver, BC V6B 5L1',
    phone: '+1 604-367-8117',
    email: 'info@monumental.energy',
  },
];
