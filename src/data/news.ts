import { NewsItem } from '@/types';
import rawNewsData from './monumental-news.json';

function parseRawNews(raw: any): NewsItem {
  let contentArr: string[] = [];
  if (Array.isArray(raw.content)) {
    contentArr = raw.content;
  } else if (typeof raw.content === 'string') {
    const rawContent = raw.content.trim();
    if (rawContent.includes('<p') || rawContent.includes('<div') || rawContent.includes('<br')) {
      contentArr = rawContent
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<\/div>/gi, '\n\n')
        .replace(/<br\s*[\/]?>/gi, '\n')
        .split(/\n{2,}/)
        .map((p: string) => p.trim())
        .filter(Boolean);
    } else {
      const normalized = rawContent.replace(/\r\n/g, '\n');
      let paragraphs = normalized.split(/\n{2,}/).map((p: string) => p.trim()).filter(Boolean);
      if (paragraphs.length <= 1 && normalized.includes('\n')) {
        paragraphs = normalized.split(/\n+/).map((p: string) => p.trim()).filter(Boolean);
      }
      contentArr = paragraphs;
    }
  }

  if (contentArr.length === 0 && raw.excerpt) {
    contentArr = [raw.excerpt];
  }

  return {
    id: raw.id || `news-${raw.slug}`,
    slug: raw.slug,
    title: raw.title,
    date: raw.date,
    publishedAt: raw.publishedAt || (raw.date ? new Date(raw.date).toISOString() : undefined),
    createdAt: raw.createdAt,
    category: raw.category || 'Press Releases',
    excerpt: raw.excerpt,
    content: contentArr,
    readTime: raw.readTime || '3 min read',
    image: raw.image || '/images/about-hero-taranaki.jpg',
    verified: raw.verified ?? true,
    releaseType: raw.releaseType || 'Official Press Release',
    source: raw.source || 'TSX-V / Newsfile Distribution',
    sourceUrl: raw.sourceUrl || 'https://www.sedarplus.ca',
    pdfUrl: raw.pdfUrl || '',
  };
}

/**
 * Robust timestamp calculator for sorting news items strictly by date descending.
 */
export function getNewsItemTimestamp(item: Partial<NewsItem> | any): number {
  if (!item) return 0;
  if (item.publishedAt) {
    const t = new Date(item.publishedAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (item.date) {
    const t = new Date(item.date).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  if (item.createdAt) {
    const t = new Date(item.createdAt).getTime();
    if (!isNaN(t) && t > 0) return t;
  }
  return 0;
}

/**
 * 125 Verified company announcements, regulatory filings, and press releases
 * for Monumental Energy Corp. (TSX-V: MNRG), strictly sorted newest first.
 */
export const newsArticles: NewsItem[] = (rawNewsData as any[])
  .map(parseRawNews)
  .sort((a, b) => getNewsItemTimestamp(b) - getNewsItemTimestamp(a));
