import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NewsThumbnail } from '@/components/ui/NewsThumbnail';
import { newsArticles } from '@/data/news';
import { ArrowRight, Calendar } from 'lucide-react';

export const LatestNews: React.FC = () => {
  const recentNews = newsArticles.slice(0, 3);
  const hasNews = recentNews.length > 0;

  return (
    <section className="py-14 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Market Disclosures"
          title="Latest News & Releases"
          action={hasNews ? { label: 'View all news', shortLabel: 'View all', href: '/news' } : undefined}
        />

        {!hasNews ? (
          <div className="bg-[#F5F6F1] rounded-[16px] border border-[#DDE3E3] p-10 sm:p-14 text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-3">
              News coming soon
            </h3>
            <p className="text-sm text-[#5B6B73] mb-6">
              Subscribe to our distribution list to receive official news releases and corporate announcements directly to your inbox.
            </p>
            <Button href="/contact#newsletter" variant="primary" size="md">
              Subscribe to News Alerts
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <article
                key={news.id}
                className="bg-[#F5F6F1] rounded-[16px] border border-[#DDE3E3] overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40 group"
              >
                <NewsThumbnail
                  article={news}
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                />

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 text-xs text-[#5B6B73] mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#1F6F78]" />
                      {news.date}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] truncate">
                      {news.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-3 group-hover:text-[#1F6F78] transition-colors">
                    <Link href={`/news/${news.slug}`}>{news.title}</Link>
                  </h3>

                  <p className="text-sm text-[#5B6B73] leading-relaxed line-clamp-3 mb-6">
                    {news.excerpt}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#DDE3E3]/60">
                    <Link
                      href={`/news/${news.slug}`}
                      className="text-link text-sm font-semibold inline-flex items-center gap-1 text-[#1F6F78]"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
