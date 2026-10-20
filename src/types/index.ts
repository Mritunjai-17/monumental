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
  bannerImage?: string;
  /** Short metric shown in the project card footer. */
  cardMetric: string;
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
  /** Optional 16:9 thumbnail; cards fall back to a category-coloured panel. */
  image?: string;
  /** false until the release is confirmed against the official filing / newswire. */
  verified: boolean;
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
    hours: string;
    hoursVerified: boolean;
  };
  socials: SocialLink[];
}

export interface SocialLink {
  platform: 'linkedin' | 'x' | 'youtube' | 'instagram' | 'facebook';
  label: string;
  url: string;
  /** Unverified links are not rendered. Confirm the handle with the client first. */
  verified: boolean;
}
