import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { newsArticles } from '@/data/news';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const LatestNews: React.FC = () => {
  const recentNews = newsArticles.slice(0, 3);
  const hasNews = recentNews.length > 0;

  return (
    <section className="py-14 lg:py-24 bg-white">
      <Container>
        {/* Section Header: Heading & View All on the same row */}
        <div className="flex flex-row items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="eyebrow block text-[#1F6F78] text-xs font-heading font-semibold tracking-[0.12em] uppercase mb-2">
              Market Disclosures
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18]">
              Latest News &amp; Releases
            </h2>
          </div>

          {hasNews && (
            <Link
              href="/news"
              className="text-link text-sm font-semibold shrink-0 inline-flex items-center gap-1.5 pb-1"
            >
              <span className="hidden sm:inline">View all news</span>
              <span className="sm:hidden">View all</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* If empty: show "News coming soon" with a link to newsletter signup */}
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
          /* 3 Equal-Height News Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {recentNews.map((news) => (
              <article
                key={news.id}
                className="bg-[#F5F6F1] rounded-[16px] border border-[#DDE3E3] p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40 group"
              >
                <div>
                  {/* Meta info: Date & Category tag */}
                  <div className="flex items-center justify-between text-xs text-[#5B6B73] mb-4 pb-3 border-b border-[#DDE3E3]/70">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#1F6F78]" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] bg-[#1F6F78]/10 px-2.5 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" />
                      {news.category}
                    </span>
                  </div>

                  {/* Headline: navy by default, teal on hover only */}
                  <h3 className="text-xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-3 group-hover:text-[#1F6F78] transition-colors">
                    <Link href={`/news/${news.slug}`}>
                      {news.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#5B6B73] leading-relaxed line-clamp-3 mb-6">
                    {news.excerpt}
                  </p>
                </div>

                {/* Read more Link pinned to bottom */}
                <div className="pt-3 border-t border-[#DDE3E3]/60 mt-auto">
                  <Link
                    href={`/news/${news.slug}`}
                    className="text-link text-sm font-semibold inline-flex items-center gap-1 text-[#1F6F78]"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
