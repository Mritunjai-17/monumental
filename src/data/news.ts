import { NewsItem } from '@/types';

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
 * Dynamic fallback array (empty by default; all news is fetched dynamically from MongoDB Atlas via API)
 */
export const newsArticles: NewsItem[] = [];
