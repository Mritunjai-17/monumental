import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { newsArticles } from '@/data/news';
import { getNewsArticleBySlug } from '@/lib/api';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import { Calendar, Tag, ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';

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

export async function generateMetadata({ params }: NewsDetailProps) {
  const article = await getNewsArticleBySlug(params.slug);
  if (!article) return { title: 'News Not Found' };

  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    type: 'article',
  });
}

export default async function NewsArticlePage({ params }: NewsDetailProps) {
  const article = await getNewsArticleBySlug(params.slug);

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
        titleSize="compact"
      />

      <section className="section-y bg-[#F5F6F1]">
        <Container size="narrow">
          <article className="bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-10 lg:p-12 shadow-sm min-w-0">
            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 sm:mb-10 border-b border-[#DDE3E3] text-xs text-[#5B6B73]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                {article.releaseType && (
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-[#0B1F2A] text-white px-2.5 py-0.5 rounded-full">
                    {article.releaseType}
                  </span>
                )}
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#1F6F78]" aria-hidden="true" />
                  {article.date}
                </span>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] bg-[#1F6F78]/10 px-2.5 py-0.5 rounded-full">
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  {article.category}
                </span>
                <span aria-hidden="true">•</span>
                <span>{article.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Back to News</span>
                </Link>
              </div>
            </div>

            {article.image && (
              <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden mb-8 sm:mb-10 bg-[#0B1F2A]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(min-width: 896px) 800px, 100vw"
                  className="object-cover object-center"
                />
              </div>
            )}

            {article.verified ? (
              <div className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3] flex flex-wrap items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2 text-[#1F6F78] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0" aria-hidden="true" />
                  <span>Verified Corporate Announcement</span>
                </div>
                {article.source && (
                  <div className="text-[#5B6B73] flex flex-wrap items-center gap-1.5 min-w-0">
                    <span>Source:</span>
                    {article.sourceUrl ? (
                      <a
                        href={article.sourceUrl}
                        target={article.sourceUrl.startsWith('http') ? '_blank' : undefined}
                        rel={article.sourceUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-[#1F6F78] hover:underline inline-flex items-center gap-1 break-words"
                      >
                        <span>{article.source}</span>
                        {article.sourceUrl.startsWith('http') && <ExternalLink className="w-3 h-3" aria-hidden="true" />}
                      </a>
                    ) : (
                      <span className="font-semibold text-[#0B1F2A]">{article.source}</span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-[16px] bg-amber-50 border border-amber-300 text-sm text-amber-900 flex items-start gap-3">
                <Badge variant="unverified" className="shrink-0">Unverified</Badge>
                <span>
                  This release has not yet been confirmed against the official filing or newswire distribution. Do not rely on it until verified.
                </span>
              </div>
            )}

            {/* Content paragraphs */}
            <div className="max-w-3xl space-y-6 text-base sm:text-[17px] text-[#16232B] leading-[1.75]">
              {article.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'font-medium text-lg sm:text-xl leading-[1.6] text-[#0B1F2A]' : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Corporate boilerplate */}
            <div className="max-w-3xl mt-12 pt-8 border-t border-[#DDE3E3] text-sm text-[#5B6B73] leading-relaxed space-y-3">
              <h2 className={cn(type.h4, tone.headingLight)}>
                About Monumental Energy Corp.
              </h2>
              <p>
                Monumental Energy (TSX-V: MNRG) is an energy and resource development company focused on conventional cashflow operations in New Zealand and strategic lithium exploration royalty ownership in Chile.
              </p>
              <p className="pt-2">
                <strong className="text-[#0B1F2A]">Investor Contact:</strong> info@monumental.energy | +1-604-367-8117
              </p>
            </div>

            {/* Back action */}
            <div className="mt-8 pt-6 border-t border-[#DDE3E3] flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-3">
              <Button href="/news" variant="secondary" size="md">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>All Press Releases</span>
              </Button>
              <Button href="/contact" variant="primary" size="md">
                Inquire With IR
              </Button>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
