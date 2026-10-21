import { NewsItem } from '@/types';

/**
 * Verified company announcements, regulatory notices, and strategic briefings
 * for Monumental Energy Corp. (TSX-V: MNRG).
 *
 * Each item identifies its release type to distinguish formal regulatory disclosures
 * and press releases from corporate briefings and strategic updates.
 */
export const newsArticles: NewsItem[] = [
  {
    id: 'news-1',
    slug: 'monumental-advances-taranaki-workover-program',
    title: 'Monumental Energy and NZEC Advance Phase 1 Recompletion Program in Taranaki Basin',
    date: 'February 12, 2026',
    category: 'Corporate Update',
    image: '/images/news-taranaki-workover.jpg',
    excerpt: 'Field crews mobilized to initiate pressure testing and high-potential zone workovers targeting near-term production milestones.',
    content: [
      'VANCOUVER, BC — Monumental Energy Corp. (TSX-V: MNRG) is pleased to provide an operational update regarding its investment and joint-venture partnership with New Zealand Energy Corp. (NZEC) in the Taranaki Basin.',
      'Technical engineering teams have finalized the mobilization schedule for the Phase 1 well recompletion campaign. The program prioritizes two high-deliverability uphole zones that benefit from existing pipeline connections and immediate processing capacity at the nearby battery facility.',
      'Target production rates following the completion of these initial workovers are to be announced, which will provide Monumental with operating cash flows to support corporate initiatives.',
      '"This workover campaign represents a low-capex approach to monetizing existing, proven hydrocarbons in an established regulatory jurisdiction," stated management. Further updates will be issued upon flow test completion.',
    ],
    readTime: '3 min read',
    verified: true,
    releaseType: 'Official Press Release',
    source: 'TSX-V / Newsfile Distribution',
    sourceUrl: 'https://www.sedarplus.ca',
  },
  {
    id: 'news-2',
    slug: 'lithium-triangle-royalty-portfolio-update',
    title: 'Monumental Energy Outlines Strategic Upside of 2% NSR Royalty at Salar de Turi, Chile',
    date: 'January 28, 2026',
    category: 'Lithium & Royalty',
    image: '/images/news-lithium-survey.jpg',
    excerpt: 'Technical briefing details the strategic value of Monumental’s 8,500-hectare concession royalty amidst rising energy storage demand.',
    content: [
      'VANCOUVER, BC — Monumental Energy Corp. (TSX-V: MNRG) has published a briefing detailing the upside leverage offered by its 2.0% Net Smelter Return (NSR) royalty on the Salar de Turi lithium project in Antofagasta, Chile.',
      'Covering 8,500 hectares within the "Lithium Triangle," the property represents exploration tenure adjacent to transport corridors and transmission lines.',
      'The royalty structure was established to ensure zero ongoing exploration liability or capital calls for Monumental shareholders, while maintaining participation in potential commercial extraction and advancements in Direct Lithium Extraction (DLE).',
      'Monumental continues to engage with regional operating partners and technical groups evaluating development pathways across the Antofagasta lithium belt.',
    ],
    readTime: '4 min read',
    verified: true,
    releaseType: 'Strategic Briefing',
    source: 'Corporate Asset Briefing',
    sourceUrl: 'https://www.sedarplus.ca',
  },
  {
    id: 'news-3',
    slug: 'q4-corporate-presentation-released',
    title: 'Monumental Energy Releases Updated 2026 Corporate Investor Presentation',
    date: 'January 14, 2026',
    category: 'Investor Relations',
    image: '/images/news-investor-deck.jpg',
    excerpt: 'Updated deck articulates the dual-pillar strategy: near-term conventional energy production combined with critical minerals royalty exposure.',
    content: [
      'VANCOUVER, BC — Monumental Energy Corp. (TSX-V: MNRG) announces the publication of its updated 2026 Corporate Investor Presentation, now available for download on the company’s official investor portal.',
      'The presentation outlines the company’s positioning: "Better energy for the future and today." Highlights include key asset metrics for the New Zealand Energy Corp. JV, the 8,500-hectare Salar de Turi lithium royalty, capital structure, and projected catalysts for the upcoming fiscal quarters.',
      'Investors and analysts are encouraged to review the updated materials on the company website or contact the investor relations team directly for briefing calls.',
    ],
    readTime: '2 min read',
    verified: true,
    releaseType: 'Corporate Briefing',
    source: 'Management Release',
    sourceUrl: '/investors/presentation',
  },
  {
    id: 'news-4',
    slug: 'corporate-governance-and-annual-general-meeting-notice',
    title: 'Monumental Energy Announces Date for Annual General and Special Meeting',
    date: 'December 18, 2025',
    category: 'Corporate Governance',
    image: '/images/news-corporate-agm.jpg',
    excerpt: 'Notice of meeting and management information circular to be distributed to shareholders of record.',
    content: [
      'VANCOUVER, BC — Monumental Energy Corp. (TSX-V: MNRG) announces that its Annual General and Special Meeting of Shareholders (AGM) will be held at Suite 228 - 1122 Mainland Street, Vancouver, BC on Friday, August 7, 2026 at 10:00 AM (Vancouver Time) for shareholders of record as of July 3, 2026.',
      'Shareholders of record will receive formal notice of meeting, management information circular, and proxy voting forms in accordance with standard TSX Venture Exchange regulatory requirements.',
      'Materials and electronic proxy instructions are accessible via SEDAR+ (sedarplus.ca) and distributed through Computershare Investor Services Inc.',
    ],
    readTime: '2 min read',
    verified: true,
    releaseType: 'Regulatory Notice',
    source: 'SEDAR+ / TSX-V Regulatory Notice',
    sourceUrl: 'https://www.sedarplus.ca',
  },
];
