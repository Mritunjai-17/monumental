export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'Oil & Gas' | 'Lithium';
  location: string;
  stage: string;
  ownership: string;
  statusBadge: string;
  shortSummary: string;
  description: string;
  heroImage: string;
  keyFacts: { label: string; value: string }[];
  highlights: string[];
  timeline: { date: string; title: string; description: string }[];
  documents: { title: string; type: string; size: string; url: string }[];
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  readTime: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext?: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface SiteConfig {
  name: string;
  ticker: string;
  exchange: string;
  tagline: string;
  positioning: string;
  headquarters: string;
  contact: {
    address: string;
    email: string;
    phone: string;
  };
  socials: {
    linkedin: string;
    x: string;
    youtube: string;
    instagram: string;
    facebook: string;
  };
}
