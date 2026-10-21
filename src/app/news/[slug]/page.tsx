import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { newsArticles } from '@/data/news';
import { constructMetadata } from '@/lib/seo';
import { Calendar, Tag, ArrowLeft, Share2, Printer, CheckCircle2, ExternalLink } from 'lucide-react';

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: NewsDetailProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: 'News Not Found' };

  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    type: 'article',
  });
}

export default function NewsArticlePage({ params }: NewsDetailProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={article.title}
        eyebrow="Market Disclosure"
        breadcrumbs={[
          { label: 'News', href: '/news' },
          { label: 'Press Release' },
        ]}
        backgroundImage={article.image || '/images/news-lithium-survey.jpg'}
      />

      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container size="narrow">
          <div className="bg-white rounded-[16px] border border-[#DDE3E3] p-6 sm:p-10 lg:p-12 shadow-sm">
            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DDE3E3] text-xs text-[#5B6B73]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {article.releaseType && (
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-[#0B1F2A] text-white px-2.5 py-0.5 rounded-full">
                    {article.releaseType}
                  </span>
                )}
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#1F6F78]" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] bg-[#1F6F78]/10 px-2.5 py-0.5 rounded-full">
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1F6F78] hover:text-[#0B1F2A] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to News</span>
                </Link>
              </div>
            </div>

            {article.image && (
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-[#0B1F2A]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(min-width: 800px) 768px, 100vw"
                  className="object-cover object-center"
                />
              </div>
            )}

            {article.verified ? (
              <div className="mb-8 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#1F6F78] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0" />
                  <span>Verified Corporate Announcement</span>
                </div>
                {article.source && (
                  <div className="text-[#5B6B73] flex items-center gap-1.5">
                    <span>Source:</span>
                    {article.sourceUrl ? (
                      <a
                        href={article.sourceUrl}
                        target={article.sourceUrl.startsWith('http') ? '_blank' : undefined}
                        rel={article.sourceUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-[#1F6F78] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{article.source}</span>
                        {article.sourceUrl.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                      </a>
                    ) : (
                      <span className="font-semibold text-[#0B1F2A]">{article.source}</span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-sm text-amber-900 flex items-start gap-3">
                <Badge variant="unverified" className="shrink-0">Unverified</Badge>
                <span>
                  This release has not yet been confirmed against the official filing or newswire distribution. Do not rely on it until verified.
                </span>
              </div>
            )}

            {/* Content paragraphs */}
            <div className="space-y-6 text-base text-[#16232B] leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'font-medium text-lg text-[#0B1F2A]' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Corporate boilerplate */}
            <div className="mt-12 pt-8 border-t border-[#DDE3E3] text-xs text-[#5B6B73] leading-relaxed space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0B1F2A]">
                About Monumental Energy Corp.
              </h4>
              <p>
                Monumental Energy (TSX-V: MNRG) is an energy and resource development company focused on conventional cashflow operations in New Zealand and strategic lithium exploration royalty ownership in Chile.
              </p>
              <p className="pt-2">
                <strong>Investor Contact:</strong> info@monumental.energy | +1-604-367-8117
              </p>
            </div>

            {/* Back action */}
            <div className="mt-8 pt-6 border-t border-[#DDE3E3] flex justify-between items-center">
              <Button href="/news" variant="secondary" size="sm">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>All Press Releases</span>
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Inquire With IR
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
