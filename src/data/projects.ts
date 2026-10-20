import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'new-zealand',
    slug: 'new-zealand',
    name: 'New Zealand Oil & Gas Investment',
    category: 'Oil & Gas',
    location: 'Taranaki Basin, New Zealand',
    stage: 'Near-Term Production & Optimization',
    ownership: 'Strategic Investment & JV Participation (New Zealand Energy Corp.)',
    statusBadge: 'Near-Term Production',
    shortSummary: 'Strategic holding in New Zealand Energy Corp. and associated joint-venture assets targeting low-risk recompletion and near-term energy production.',
    description: 'Monumental Energy holds a strategic interest in New Zealand Energy Corp. (NZEC) and aligned joint-venture opportunities in the Taranaki Basin of New Zealand. This asset provides exposure to conventional cash flow, proven infrastructure, and rapid-turnaround development wells in an established regulatory jurisdiction.',
    heroImage: '/images/project-new-zealand.svg',
    keyFacts: [
      { label: 'Jurisdiction', value: 'Taranaki Basin, New Zealand' },
      { label: 'Asset Structure', value: 'Equity holding in NZEC & JV participation' },
      { label: 'Current Phase', value: 'Production optimization & recompletion' },
      { label: 'Infrastructure', value: 'Established processing facilities & pipeline tie-ins' },
      { label: 'Target Output', value: 'To be announced' },
      { label: 'Operator Status', value: 'New Zealand Energy Corp. / Monumental JV' },
    ],
    highlights: [
      'Exposure to stable conventional energy commodity pricing in an energy-deficit regional market.',
      'Extensive existing infrastructure reducing capital intensity and accelerating time to cash flow.',
      'Proactive ESG protocols with low-carbon operational initiatives in the Taranaki Basin.',
      'Significant upside from workovers and low-cost development drilling opportunities.',
    ],
    timeline: [
      {
        date: '2023 - 2024',
        title: 'Strategic Investment in NZEC',
        description: 'Monumental Energy acquired strategic equity and convertible position in New Zealand Energy Corp. to capture immediate asset leverage.',
      },
      {
        date: '2025',
        title: 'JV Framework & Workover Planning',
        description: 'Collaborative technical review executed to identify top priority recompletion targets across the Taranaki concession portfolio.',
      },
      {
        date: '2026+',
        title: 'Production Ramp & Cash Flow Realization',
        description: 'Execution of near-term field optimization program targeting initial production milestone of To be announced.',
      },
    ],
    documents: [
      {
        title: 'NZEC Joint Venture Technical Overview',
        type: 'PDF',
        size: '2.4 MB',
        url: '/documents/investor-presentation.pdf',
      },
      {
        title: 'Taranaki Basin Asset & Geology Briefing',
        type: 'PDF',
        size: '1.8 MB',
        url: '/documents/investor-presentation.pdf',
      },
      {
        title: 'NI 51-101 Reserves & Resource Summary Placeholder',
        type: 'PDF',
        size: '3.1 MB',
        url: '/documents/investor-presentation.pdf',
      },
    ],
  },
  {
    id: 'salar-de-turi',
    slug: 'salar-de-turi',
    name: 'Salar de Turi Lithium Project',
    category: 'Lithium',
    location: 'Antofagasta Region, Chile',
    stage: 'Net Smelter Return (NSR) Royalty / Exploration Concession',
    ownership: '2% Net Smelter Return (NSR) Royalty',
    statusBadge: '2% NSR Royalty',
    shortSummary: '2% Net Smelter Return (NSR) royalty across 8,500 hectares of claims located in the South American Lithium Triangle.',
    description: 'The Salar de Turi Lithium Project spans approximately 8,500 hectares within the Lithium Triangle in northern Chile. Monumental Energy retains a 2.0% Net Smelter Return (NSR) royalty over the concession package, positioning shareholders to benefit from long-term lithium demand without direct operational capital expenditure requirements.',
    heroImage: '/images/project-salar-de-turi.svg',
    keyFacts: [
      { label: 'Concession Area', value: '8,500 Hectares (approx. 21,000 acres)' },
      { label: 'Location', value: 'Antofagasta Region, Chile' },
      { label: 'Geological Setting', value: 'Lithium Triangle Brine Basin' },
      { label: 'Monumental Interest', value: '2.0% Net Smelter Return (NSR) royalty' },
      { label: 'Target Mineral', value: 'Lithium Carbonate Equivalent (LCE)' },
      { label: 'CAPEX Requirement', value: 'Zero direct operating capital exposure' },
    ],
    highlights: [
      'Strategic 2% Net Smelter Return (NSR) royalty covering 8,500 prospective hectares in the lithium jurisdiction.',
      'Capital-light exposure: participation in exploration success without recurring exploration cash calls.',
      'Proximity to established salars, highway access, high-voltage power lines, and port logistics in northern Chile.',
      'Direct upside tied to global electric vehicle adoption and energy grid battery storage expansion.',
    ],
    timeline: [
      {
        date: '2023',
        title: 'Concession Acquisition & Staking',
        description: 'Acquired 8,500 hectares of exploration concessions covering prospective lithium brine targets in Salar de Turi.',
      },
      {
        date: '2024',
        title: 'Royalty Structure Restructuring',
        description: 'Restructured asset participation into a pure 2% Net Smelter Return (NSR) royalty, eliminating ongoing capital call liabilities.',
      },
      {
        date: '2025 - 2026',
        title: 'Regional Exploration & Partner Development',
        description: 'Advancement of regional geological evaluation and ongoing discussions with leading regional operators.',
      },
    ],
    documents: [
      {
        title: 'Salar de Turi Concession Map & Claim Boundaries',
        type: 'PDF',
        size: '1.9 MB',
        url: '/documents/investor-presentation.pdf',
      },
      {
        title: 'Lithium Triangle Net Smelter Return (NSR) Royalty Structure Overview',
        type: 'PDF',
        size: '1.2 MB',
        url: '/documents/investor-presentation.pdf',
      },
      {
        title: 'Salar de Turi Technical NI 43-101 Report Placeholder',
        type: 'PDF',
        size: '4.2 MB',
        url: '/documents/investor-presentation.pdf',
      },
    ],
  },
];
