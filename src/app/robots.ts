import type { MetadataRoute } from 'next';

// Staging is kept out of search results by the noindex meta tag and the
// X-Robots-Tag header (see lib/seo.ts and next.config.js). Crawling is left
// allowed on purpose: a robots.txt Disallow would stop crawlers from ever
// seeing the noindex directive.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' } };
}
