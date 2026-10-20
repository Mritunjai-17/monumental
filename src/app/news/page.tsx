import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { newsArticles } from '@/data/news';
import { constructMetadata } from '@/lib/seo';
import { Calendar, Tag, ArrowRight, Bell } from 'lucide-react';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export const metadata = constructMetadata({
  title: 'News & Regulatory Disclosures',
  description: 'Official press releases, corporate updates, and operational disclosures from Monumental Energy (TSX-V: MNRG).',
  path: '/news',
});

export default function NewsPage() {
  const hasNews = newsArticles && newsArticles.length > 0;

  return (
    <>
      <PageHero
        title="News & Disclosures"
        eyebrow="Market Releases"
        description="Official press announcements, operational milestones, and regulatory filings filed in accordance with TSX Venture Exchange policies."
        breadcrumbs={[{ label: 'News' }]}
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main News List (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              {!hasNews ? (
                <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-10 sm:p-12 text-center">
                  <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                    News coming soon
                  </h2>
                  <p className="text-sm text-[#5B6B73] mb-6 max-w-md mx-auto">
                    Subscribe to our distribution list to receive verified press releases directly to your inbox.
                  </p>
                  <Button href="/contact#newsletter" variant="primary" size="md">
                    Subscribe to News Alerts
                  </Button>
                </div>
              ) : (
                newsArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-[16px] border border-[#DDE3E3] p-6 sm:p-8 transition-all duration-200 hover:shadow-md hover:border-[#1F6F78]/50 group"
                  >
                    <div className="flex items-center gap-3 text-xs text-[#5B6B73] mb-3">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#1F6F78]" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] bg-[#1F6F78]/10 px-2.5 py-0.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span>•</span>
                      <span className="text-[#5B6B73]">{article.readTime}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18] group-hover:text-[#1F6F78] transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>

                    <Link
                      href={`/news/${article.slug}`}
                      className="text-link text-sm font-semibold inline-flex items-center gap-1 text-[#1F6F78]"
                    >
                      <span>Read complete press release</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                ))
              )}
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Subscribe Box */}
              <div className="bg-[#0B1F2A] rounded-[16px] p-6 sm:p-7 text-white border border-[#1D3B4C]">
                <div className="w-10 h-10 rounded-lg bg-[#162F3F] text-[#B7E34A] flex items-center justify-center mb-4">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2 leading-[1.18]">
                  News Alerts
                </h3>
                <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
                  Receive verified press releases and regulatory disclosures directly to your inbox.
                </p>
                <NewsletterForm dark />
              </div>

              {/* SEDAR+ Regulatory Box */}
              <div className="bg-white rounded-[16px] p-6 border border-[#DDE3E3]">
                <h3 className="font-heading font-semibold text-base text-[#0B1F2A] mb-2 leading-[1.18]">
                  SEDAR+ Profile
                </h3>
                <p className="text-xs text-[#5B6B73] mb-4 leading-relaxed">
                  All continuous disclosure filings, financial statements, and technical reports are archived publicly on SEDAR+.
                </p>
                <a
                  href="https://www.sedarplus.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-xs font-semibold"
                >
                  <span>Open SEDAR+ Repository</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
