import { NewsItem } from '@/types';
import {
  newsArticles as fallbackNewsArticles,
} from '@/data/news';
import {
  marketQuoteData as fallbackMarketQuote,
  chartHistoricalData as fallbackChartHistorical,
  investorCapitalData as fallbackCapitalData,
  DetailedQuote,
  ChartPoint,
} from '@/data/investors';

/**
 * Universal Base URL Resolver for Vercel / Production / Localhost
 */
export function getApiBaseUrl(): string {
  // If running in browser, using relative path leverages Next.js rewrites (zero CORS issues)
  if (typeof window !== 'undefined') {
    return '/api/v1';
  }

  // Running on server (SSR/ISR/Build-time)
  const isProduction = process.env.NODE_ENV === 'production';
  const defaultServerUrl = isProduction
    ? 'https://monumentalbackend.vercel.app/api/v1'
    : 'http://localhost:5001/api/v1';

  const serverUrl =
    (process.env.BACKEND_INTERNAL_URL
      ? `${process.env.BACKEND_INTERNAL_URL.replace(/\/+$/, '')}/api/v1`
      : null) ||
    process.env.NEXT_PUBLIC_API_URL ||
    defaultServerUrl;

  return serverUrl.replace(/\/+$/, '');
}

/**
 * Normalizes backend News records into the frontend NewsItem contract.
 * Specifically converts backend String/HTML content to string[] paragraphs
 * so that `.map()` renders without crashing.
 */
export function normalizeNewsItem(raw: any): NewsItem {
  if (!raw) return raw;

  let contentParagraphs: string[] = [];

  if (Array.isArray(raw.content)) {
    contentParagraphs = raw.content.map(String);
  } else if (typeof raw.content === 'string') {
    const rawContent = raw.content.trim();
    if (rawContent.includes('<p') || rawContent.includes('<div') || rawContent.includes('<br')) {
      contentParagraphs = rawContent
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<br\s*[\/]?>/gi, '\n')
        .replace(/<[^>]+>/g, '')
        .split('\n\n')
        .map((p: string) => p.trim())
        .filter(Boolean);
    } else {
      contentParagraphs = rawContent
        .split(/\n\s*\n/)
        .map((p: string) => p.trim())
        .filter(Boolean);
    }
  }

  if (contentParagraphs.length === 0 && raw.excerpt) {
    contentParagraphs = [raw.excerpt];
  }

  return {
    id: raw._id ? String(raw._id) : raw.id || `news-${raw.slug}`,
    slug: raw.slug,
    title: raw.title,
    date: raw.date || (raw.publishedAt ? new Date(raw.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'October 2026'),
    category: raw.category || 'Press Releases',
    excerpt: raw.excerpt || '',
    content: contentParagraphs,
    readTime: raw.readTime || '3 min read',
    image: raw.image || '/images/about-hero-taranaki.jpg',
    verified: raw.verified !== undefined ? Boolean(raw.verified) : true,
    releaseType: raw.releaseType || 'Official Press Release',
    source: raw.source || 'TSX-V / Newsfile Distribution',
    sourceUrl: raw.sourceUrl || 'https://www.sedarplus.ca',
    pdfUrl: raw.pdfUrl || '',
  };
}

/**
 * Fetches published news articles with graceful static fallback.
 */
export async function getNewsArticles(category?: string): Promise<NewsItem[]> {
  try {
    const baseUrl = getApiBaseUrl();
    const query = category && category !== 'All News' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${baseUrl}/news${query}`, {
      next: { revalidate: 60 },
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.statusText}`);
    }

    const json = await res.json();
    const articles = json.data || json;

    if (Array.isArray(articles) && articles.length > 0) {
      return articles.map(normalizeNewsItem);
    }
  } catch (err) {
    console.warn('[API Client] Backend news unavailable, using verified local fallback data.', err);
  }

  // Graceful fallback
  if (category && category !== 'All News') {
    return fallbackNewsArticles.filter(
      (a) =>
        a.category.toLowerCase().includes(category.toLowerCase()) ||
        Boolean(a.releaseType?.toLowerCase().includes(category.toLowerCase()))
    );
  }
  return fallbackNewsArticles;
}

/**
 * Fetches a single news article by slug with fallback.
 */
export async function getNewsArticleBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/news/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const json = await res.json();
      const article = json.data || json;
      if (article && article.slug) {
        return normalizeNewsItem(article);
      }
    }
  } catch (err) {
    console.warn(`[API Client] News for slug "${slug}" unavailable from backend, using local fallback.`, err);
  }

  const found = fallbackNewsArticles.find((a) => a.slug === slug);
  return found || null;
}

/**
 * Fetches real-time stock quote from backend with fallback.
 */
export async function getMarketQuote(): Promise<DetailedQuote> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/market/quote`, {
      next: { revalidate: 30 },
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const json = await res.json();
      const quote = json.data || json;
      if (quote && typeof quote.price === 'number') {
        return {
          ...fallbackMarketQuote,
          ...quote,
          price: Number(quote.price),
          change: Number(quote.change ?? 0),
          changePercent: Number(quote.changePercent ?? 0),
          timestamp: quote.timestamp || fallbackMarketQuote.timestamp,
        };
      }
    }
  } catch (err) {
    console.warn('[API Client] Market quote unavailable from backend, using fallback baseline.', err);
  }

  return fallbackMarketQuote;
}

/**
 * Fetches historical chart points from backend with fallback.
 */
export async function getMarketHistory(timeframe: string = '5D'): Promise<ChartPoint[]> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/market/history?timeframe=${encodeURIComponent(timeframe)}`, {
      next: { revalidate: 60 },
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const json = await res.json();
      const payload = json.data || json;
      const points = Array.isArray(payload.points) ? payload.points : Array.isArray(payload) ? payload : null;
      if (points && points.length > 0) {
        return points.map((p: any) => ({
          date: String(p.date),
          price: Number(p.price),
          volume: Number(p.volume || 0),
        }));
      }
    }
  } catch (err) {
    console.warn(`[API Client] Market history for ${timeframe} unavailable, using fallback data.`, err);
  }

  return fallbackChartHistorical[timeframe] || fallbackChartHistorical['5D'] || [];
}

/**
 * Fetches corporate capital structure with fallback.
 */
export async function getCapitalStructure(): Promise<typeof fallbackCapitalData> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}/market/capital`, {
      next: { revalidate: 120 },
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const json = await res.json();
      const cap = json.data || json;
      if (cap && (cap.sharesIssued || cap.ticker)) {
        return {
          ...fallbackCapitalData,
          ticker: cap.ticker || fallbackCapitalData.ticker,
          overviewStats: [
            {
              id: 'shares-issued',
              label: 'Issued & Outstanding',
              value: cap.sharesIssued || fallbackCapitalData.overviewStats[0].value,
              subtext: cap.sharesIssuedNote || fallbackCapitalData.overviewStats[0].subtext,
              badge: 'Current Filing',
            },
            {
              id: 'cash-position',
              label: 'Cash & Liquidity',
              value: cap.cashPosition || fallbackCapitalData.overviewStats[1].value,
              subtext: cap.cashPositionNote || fallbackCapitalData.overviewStats[1].subtext,
              badge: 'Treasury Reserves',
            },
            {
              id: 'nzec-holdings',
              label: 'NZEC Strategic Holdings',
              value: cap.nzecHoldings || fallbackCapitalData.overviewStats[2].value,
              subtext: cap.nzecHoldingsNote || fallbackCapitalData.overviewStats[2].subtext,
              badge: 'Strategic Asset',
            },
            {
              id: 'fully-diluted',
              label: 'Fully Diluted Shares',
              value: cap.fullyDiluted || fallbackCapitalData.overviewStats[3].value,
              subtext: cap.fullyDilutedNote || fallbackCapitalData.overviewStats[3].subtext,
              badge: 'All Options/Warrants',
            },
          ],
          warrants: Array.isArray(cap.warrants) && cap.warrants.length > 0 ? cap.warrants : fallbackCapitalData.warrants,
          floatBreakdown: {
            ...fallbackCapitalData.floatBreakdown,
            insidersPercent: cap.insidersPercent ?? fallbackCapitalData.floatBreakdown.insidersPercent,
            fundsPercent: cap.fundsPercent ?? fallbackCapitalData.floatBreakdown.fundsPercent,
            retailPercent: cap.retailPercent ?? fallbackCapitalData.floatBreakdown.retailPercent,
            narrative: cap.floatNarrative || fallbackCapitalData.floatBreakdown.narrative,
          },
        };
      }
    }
  } catch (err) {
    console.warn('[API Client] Capital structure unavailable, using fallback data.', err);
  }

  return fallbackCapitalData;
}

/**
 * Submits an Investor Relations Inquiry.
 */
export async function submitEnquiry(payload: {
  role: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string;
}) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data.success === false) {
    throw new Error(data.error || data.message || 'Submission could not be completed. Please try again.');
  }

  return data;
}

/**
 * Subscribes an email to the news alert distribution list.
 */
export async function subscribeNewsletter(email: string, source: string = 'Website Newsletter Form') {
  const res = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, source }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data.success === false) {
    throw new Error(data.error || data.message || 'Subscription could not be processed. Please try again.');
  }

  return data;
}

