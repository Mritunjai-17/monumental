import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArticleShareBar } from '@/components/ui/ArticleShareBar';
import { getNewsArticleBySlug, getNewsArticles } from '@/lib/api';
import { constructMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { Calendar, Tag, ArrowLeft, CheckCircle2, ExternalLink, FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

interface NewsDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const articles = await getNewsArticles();
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch {
    return [];
  }
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
  const [article, allArticles] = await Promise.all([
    getNewsArticleBySlug(params.slug),
    getNewsArticles().catch(() => []),
  ]);

  if (!article) {
    notFound();
  }

  const recentArticles = allArticles
    .filter((a) => a.slug !== params.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        title={article.title}
        eyebrow="Market Disclosure · TSX-V: MNRG"
        breadcrumbs={[
          { label: 'News', href: '/news' },
          { label: article.category || 'Press Release' },
        ]}
        backgroundImage="/images/about-hero-taranaki.jpg"
        titleSize="compact"
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-white min-h-screen">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Primary Editorial Narrative Column */}
            <article className="lg:col-span-8 min-w-0">
              {/* Top Editorial Dateline & Filing Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E2E8F0] text-xs text-[#5B6B73]">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                  {article.releaseType && (
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider bg-[#0B1F2A] text-white px-2.5 py-1 rounded">
                      {article.releaseType}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#22333E]">
                    <Calendar className="w-3.5 h-3.5 text-[#1F6F78]" aria-hidden="true" />
                    {article.date}
                  </span>
                  <span className="text-[#CBD5E1]" aria-hidden="true">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] bg-[#1F6F78]/10 px-2.5 py-0.5 rounded">
                    <Tag className="w-3 h-3" aria-hidden="true" />
                    {article.category}
                  </span>
                  <span className="text-[#CBD5E1]" aria-hidden="true">•</span>
                  <span className="text-[#5B6B73]">{article.readTime}</span>
                </div>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F6F78] hover:text-[#0B1F2A] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>All Press Releases</span>
                </Link>
              </div>

              {/* Verified Regulatory Filing Status (Open Editorial, no bulky box) */}
              {article.verified ? (
                <div className="mb-8 pb-6 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#0B1F2A] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6F78] shrink-0" aria-hidden="true" />
                    <span>Verified Corporate Market Disclosure</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    {article.source && (
                      <span className="text-[#64748B]">
                        Source: <strong className="text-[#0B1F2A] font-semibold">{article.source}</strong>
                      </span>
                    )}
                    {article.sourceUrl && (
                      <a
                        href={article.sourceUrl}
                        target={article.sourceUrl.startsWith('http') ? '_blank' : undefined}
                        rel={article.sourceUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 font-semibold text-[#1F6F78] hover:underline"
                      >
                        <span>SEDAR+ Record</span>
                        {article.sourceUrl.startsWith('http') && <ExternalLink className="w-3 h-3" aria-hidden="true" />}
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mb-8 p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center gap-2.5">
                  <Badge variant="unverified" className="shrink-0">Unverified</Badge>
                  <span>This release has not yet been confirmed against the official regulatory depository.</span>
                </div>
              )}

              {/* Editorial Dek / Lead Deck (if different from first paragraph) */}
              {article.excerpt && article.excerpt.trim() !== (article.content[0] || '').trim() && (
                <div className="mb-8 text-lg sm:text-xl font-medium text-[#0B1F2A] leading-relaxed pb-6 border-b border-[#E2E8F0]">
                  {article.excerpt}
                </div>
              )}

              {/* Main Article Content Paragraphs */}
              <div className="space-y-6 text-[17px] sm:text-[18px] text-[#22333E] leading-[1.8] font-normal">
                {article.content.map((paragraph, idx) => {
                  const isHtml = /<[a-z][\s\S]*>/i.test(paragraph);
                  return isHtml ? (
                    <div
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                      className={cn(
                        'w-full min-w-0 break-words [overflow-wrap:anywhere]',
                        idx === 0
                          ? 'font-medium text-lg sm:text-[19px] leading-[1.75] text-[#0B1F2A]'
                          : 'text-[17px] sm:text-[18px] text-[#22333E]'
                      )}
                    />
                  ) : (
                    <p
                      key={idx}
                      className={cn(
                        'w-full min-w-0 break-words [overflow-wrap:anywhere] whitespace-pre-line',
                        idx === 0
                          ? 'font-medium text-lg sm:text-[19px] leading-[1.75] text-[#0B1F2A]'
                          : 'text-[17px] sm:text-[18px] text-[#22333E]'
                      )}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Corporate Boilerplate & Cautionary Disclaimer */}
              <div className="mt-14 pt-8 border-t border-[#E2E8F0] space-y-5 text-sm text-[#475569] leading-relaxed">
                <h2 className="font-heading font-bold text-lg text-[#0B1F2A] tracking-tight">
                  About Monumental Energy Corp.
                </h2>
                <p>
                  Monumental Energy Corp. is an energy and resource development company focused on conventional cashflow operations in New Zealand and strategic lithium exploration royalty ownership in Chile. The Company trades on the TSX Venture Exchange under the symbol <strong className="text-[#0B1F2A]">MNRG</strong> and on the Frankfurt Stock Exchange under the symbol <strong className="text-[#0B1F2A]">BE5</strong>.
                </p>

                <div className="pt-2">
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0B1F2A] mb-1">
                    Investor & Corporate Inquiries
                  </h3>
                  <p className="text-[#334155]">
                    Maximilian Sali, Chief Executive Officer<br />
                    Email: <a href="mailto:info@monumental.energy" className="text-[#1F6F78] hover:underline font-medium">info@monumental.energy</a> | Phone: +1-604-367-8117
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B] italic leading-normal">
                  Neither TSX Venture Exchange nor its Regulation Services Provider (as that term is defined in the policies of the TSX Venture Exchange) accepts responsibility for the adequacy or accuracy of this release. Forward-looking statements in this release are made pursuant to the safe harbor provisions of applicable Canadian securities laws.
                </div>
              </div>

              {/* Bottom Navigation & Contact Action Bar */}
              <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                <Button href="/news" variant="secondary" size="md">
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>All Press Releases</span>
                </Button>
                <Button href="/contact" variant="primary" size="md">
                  Inquire With Investor Relations
                </Button>
              </div>
            </article>

            {/* Sticky Investor Disclosure Sidebar */}
            <aside className="lg:col-span-4 min-w-0 lg:sticky lg:top-28 space-y-6">
              {/* Stock Quote & Exchange Verification Strip */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">TSX Venture Exchange</span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#16A34A]">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                    Market Active
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="font-heading font-bold text-2xl text-[#0B1F2A] tracking-tight">MNRG</span>
                    <span className="text-xs text-[#64748B] ml-2 font-medium">TSX-V</span>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-bold text-xl text-[#0B1F2A]">$0.07</span>
                    <span className="text-[11px] text-[#64748B] ml-1">CAD</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">Regulatory Filings:</span>
                  <a
                    href="https://www.sedarplus.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#1F6F78] hover:underline"
                  >
                    <span>SEDAR+ Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Official PDF Dissemination (if present) */}
              {article.pdfUrl && (
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0B1F2A] text-white hover:bg-[#1F6F78] font-heading font-semibold text-xs tracking-wide uppercase transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#B7E34A]" />
                  <span>Download Official PDF</span>
                  <ExternalLink className="w-3 h-3 text-white/70 ml-1" />
                </a>
              )}

              {/* Dissemination & Sharing */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white">
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0B1F2A] mb-3">
                  Share Release
                </h3>
                <ArticleShareBar title={article.title} />
              </div>

              {/* Direct Investor Relations Contact */}
              <div className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0B1F2A] mb-2">
                  Investor Relations
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                  For questions regarding this release or shareholder materials:
                </p>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="text-[#64748B]">Direct: </span>
                    <a href="mailto:info@monumental.energy" className="font-semibold text-[#1F6F78] hover:underline">
                      info@monumental.energy
                    </a>
                  </div>
                  <div>
                    <span className="text-[#64748B]">Telephone: </span>
                    <span className="font-semibold text-[#0B1F2A]">+1-604-367-8117</span>
                  </div>
                </div>
              </div>

              {/* Adjacent Announcements */}
              {recentArticles.length > 0 && (
                <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white">
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#0B1F2A] mb-4">
                    Recent Announcements
                  </h3>
                  <div className="space-y-4">
                    {recentArticles.map((recent) => (
                      <Link
                        key={recent.id || recent.slug}
                        href={`/news/${recent.slug}`}
                        className="group block border-b border-[#F1F5F9] last:border-0 pb-3 last:pb-0"
                      >
                        <span className="text-[11px] font-medium text-[#64748B] block mb-1">
                          {recent.date}
                        </span>
                        <h4 className="text-xs font-heading font-semibold text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors leading-snug line-clamp-2">
                          {recent.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
