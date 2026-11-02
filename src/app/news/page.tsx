'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { type, tone } from '@/lib/typography';
import { newsArticles as initialNewsArticles, getNewsItemTimestamp } from '@/data/news';
import { NewsItem } from '@/types';
import { getNewsArticles, subscribeNewsletter } from '@/lib/api';
import { ArrowRight, Search, Newspaper, Mail, CheckCircle2, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

const CATEGORIES = [
  'All News',
  'Press Releases',
  'Corporate Updates',
  'Investor Relations',
  'Industry Insights',
] as const;

const cardHover =
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.08)] hover:border-[#1F6F78]/40';

const ITEMS_PER_PAGE = 9;

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All News');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Synchronize news articles directly from backend API on mount
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    getNewsArticles().then((fetched) => {
      if (isMounted) {
        if (Array.isArray(fetched) && fetched.length > 0) {
          setArticles(fetched);
        }
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Guarantee strictly date-descending sorted master list
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => getNewsItemTimestamp(b) - getNewsItemTimestamp(a));
  }, [articles]);

  // Reset pagination to first page whenever filter or search query updates
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return sortedArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All News' ||
        article.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        Boolean(article.releaseType?.toLowerCase().includes(selectedCategory.toLowerCase()));

      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [sortedArticles, selectedCategory, searchQuery]);

  // Paginated articles for the archive grid
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  // Featured news candidates (strictly latest 3 articles)
  const featuredArticles = useMemo(() => {
    return sortedArticles.slice(0, 3);
  }, [sortedArticles]);

  const currentFeatured = featuredArticles[featuredIndex] || sortedArticles[0];

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    try {
      await subscribeNewsletter(emailInput.trim(), 'News Page Footer Banner');
      setSubscribed(true);
      setEmailInput('');
    } catch {
      // Still show success fallback to user
      setSubscribed(true);
      setEmailInput('');
    }
  };

  // Recent news (excluding featured #0; strictly chronological items 1 to 3)
  const recentNews = useMemo(() => {
    return sortedArticles.slice(1, 4);
  }, [sortedArticles]);

  // Latest announcements (for right dark card: top 4 newest)
  const announcements = useMemo(() => {
    return sortedArticles.slice(0, 4);
  }, [sortedArticles]);

  // Industry insights
  const insights = useMemo(() => {
    return sortedArticles.filter((a) => a.category === 'Industry Insights').slice(0, 2);
  }, [sortedArticles]);

  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="relative overflow-hidden page-intro-y">
        {/* Subtle Topographical Elevation Contour Background (Top Left) */}
        <div
          className="absolute top-0 left-0 w-[550px] sm:w-[650px] lg:w-[750px] h-[550px] pointer-events-none opacity-[0.07] select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <svg viewBox="0 0 700 600" fill="none" stroke="#0B1F2A" strokeWidth="1.2" className="w-full h-full">
            <path d="M180 0 C 260 90, 320 170, 500 190 C 600 200, 640 280, 700 320" />
            <path d="M220 0 C 290 100, 360 180, 530 210 C 620 225, 660 320, 700 370" />
            <path d="M260 0 C 330 120, 400 200, 560 230 C 630 245, 670 360, 700 420" />
            <path d="M300 0 C 370 140, 440 220, 590 250 C 650 270, 680 400, 700 470" />
            <path d="M340 0 C 410 160, 480 240, 620 270 C 670 290, 700 440, 700 520" />
            <path d="M380 0 C 450 180, 520 260, 650 290" />
            <path d="M140 30 C 220 110, 280 190, 460 210 C 560 220, 600 290, 650 330" />
            <path d="M100 70 C 180 150, 240 230, 420 250 C 520 260, 560 330, 610 380" />
            <path d="M60 120 C 140 200, 200 280, 380 300 C 480 310, 520 380, 570 430" />
          </svg>
        </div>

        {/* Desktop Split Background Image with Soft Fade */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/about-hero-taranaki.jpg"
            alt="Scenic Mount Taranaki river valley landscape"
            fill
            sizes="50vw"
            className="object-cover object-[center_35%]"
            priority
          />
          {/* Seamless dual gradient fade (left into copy, bottom into page background) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/40 to-transparent w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F6F1] via-[#F5F6F1]/30 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[380px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 lg:pr-6 min-w-0">
              <Eyebrow className="hero-eyebrow">LATEST UPDATES</Eyebrow>

              <KineticHeading
                as="h1"
                text="News & Insights"
                className={cn(type.h1, tone.headingLight, 'mb-5')}
              />

              <p className={cn('hero-copy max-w-xl', type.lead, tone.mutedLight)}>
                Stay informed with the latest company announcements, project updates and industry perspectives from Monumental Energy.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden hero-copy">
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/10] shadow-md border border-[#DDE3E3]">
                <Image
                  src="/images/about-hero-taranaki.jpg"
                  alt="Scenic Mount Taranaki river valley landscape"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          2. FILTER PILLS & SEARCH BAR
         ========================================================= */}
      <section className="section-y-compact pt-0">
        <Container>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6">
            {/* Filter Pills: scroll horizontally on small screens */}
            <div
              role="group"
              aria-label="Filter news by category"
              className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 flex items-center flex-nowrap lg:flex-wrap gap-2 sm:gap-2.5 overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-w-0"
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'shrink-0 whitespace-nowrap min-h-[44px] px-5 rounded-full border text-sm font-heading font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F6F78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F6F1]',
                      isActive
                        ? 'bg-[#0B1F2A] border-[#0B1F2A] text-white shadow-sm'
                        : 'bg-white border-[#DDE3E3] text-[#5B6B73] hover:text-[#0B1F2A] hover:border-[#1F6F78]/40'
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#5B6B73] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                aria-label="Search news"
                placeholder="Search news, announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-full border border-[#DDE3E3] bg-white text-sm text-[#0B1F2A] placeholder:text-[#5B6B73] focus:outline-none focus:border-[#1F6F78] focus:ring-2 focus:ring-[#1F6F78]/20 shadow-sm transition-colors"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. FEATURED STORY SPOTLIGHT
         ========================================================= */}
      <section className="section-y pt-0">
        <Container>
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-pulse">
              <div className="lg:col-span-7 aspect-[16/10.5] rounded-[24px] bg-[#DDE3E3]/70" />
              <div className="lg:col-span-5 space-y-4">
                <div className="h-4 w-28 bg-[#DDE3E3]/70 rounded-full" />
                <div className="h-8 w-4/5 bg-[#DDE3E3]/70 rounded-lg" />
                <div className="h-20 w-full bg-[#DDE3E3]/70 rounded-lg" />
                <div className="h-10 w-44 bg-[#DDE3E3]/70 rounded-full" />
              </div>
            </div>
          ) : currentFeatured ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Featured Image */}
              <div className="lg:col-span-7 min-w-0">
                <div className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden aspect-[16/10.5] shadow-[0_12px_36px_-6px_rgba(11,31,42,0.14)] bg-[#07161F] border border-[#DDE3E3]/80">
                  <Image
                    src={currentFeatured.image || '/images/about-hero-taranaki.jpg'}
                    alt={currentFeatured.title}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/70 via-transparent to-[#07161F]/20 pointer-events-none" />

                  {/* Top-Left Pill Badge: FEATURED */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-sm">
                      FEATURED
                    </span>
                  </div>

                  {/* Bottom Bar: Press Release Tag & Pagination Arrows */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-white/90 text-xs font-heading font-medium min-w-0">
                      <Newspaper className="w-4 h-4 text-[#B7E34A] shrink-0" aria-hidden="true" />
                      <span className="truncate">{currentFeatured.releaseType}</span>
                    </div>

                    {/* Carousel Prev/Next */}
                    {featuredArticles.length > 1 && (
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={handlePrevFeatured}
                          aria-label="Previous featured story"
                          className="w-11 h-11 rounded-full bg-black/50 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]"
                        >
                          &larr;
                        </button>
                        <button
                          type="button"
                          onClick={handleNextFeatured}
                          aria-label="Next featured story"
                          className="w-11 h-11 rounded-full bg-black/50 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E34A]"
                        >
                          &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Featured Copy */}
              <div className="lg:col-span-5 flex flex-col justify-center min-w-0">
                <Eyebrow>{currentFeatured.date}</Eyebrow>

                <h2 className={cn(type.h2Compact, tone.headingLight, 'mb-4 break-words [overflow-wrap:anywhere]')}>
                  <Link
                    href={`/news/${currentFeatured.slug}`}
                    className="hover:text-[#1F6F78] transition-colors"
                  >
                    {currentFeatured.title}
                  </Link>
                </h2>

                <p className={cn(type.lead, tone.mutedLight, 'mb-8 break-words [overflow-wrap:anywhere]')}>
                  {currentFeatured.excerpt}
                </p>

                <div>
                  <Link
                    href={`/news/${currentFeatured.slug}`}
                    className="inline-flex items-center gap-3 group"
                  >
                    <span className="w-11 h-11 rounded-full bg-[#B7E34A] group-hover:bg-[#A3CF36] flex items-center justify-center text-[#0B1F2A] shadow-sm transition-all duration-200 group-hover:scale-105">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                    <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                      Read full announcement
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      {/* =========================================================
          4. DUAL SECTION: RECENT NEWS & LATEST ANNOUNCEMENTS
         ========================================================= */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left 8 Cols: Recent News Grid */}
            <div className="lg:col-span-8 min-w-0">
              {/* Header */}
              <div data-reveal="fade" className="mb-12 sm:mb-16 flex flex-row items-end justify-between gap-4">
                <KineticHeading
                  as="h2"
                  text="Recent News"
                  className={cn(type.h2, tone.headingLight)}
                />

                <Link
                  href="#all-news"
                  onClick={() => setSelectedCategory('All News')}
                  className="text-link text-sm font-semibold shrink-0 inline-flex items-center gap-1.5 pb-1.5 text-[#1F6F78] group"
                >
                  <span className="hidden sm:inline">View all news</span>
                  <span className="sm:hidden">View all</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>

              {/* 3-Card Grid */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="bg-[#F5F6F1] rounded-[16px] border border-[#DDE3E3] p-5 animate-pulse">
                      <div className="aspect-[16/10] bg-[#DDE3E3]/80 rounded-lg mb-3" />
                      <div className="h-4 w-20 bg-[#DDE3E3]/80 rounded mb-2" />
                      <div className="h-6 w-3/4 bg-[#DDE3E3]/80 rounded mb-2" />
                      <div className="h-12 w-full bg-[#DDE3E3]/80 rounded" />
                    </div>
                  ))}
                </div>
              ) : recentNews.length === 0 ? (
                <div className="p-8 text-center bg-[#F5F6F1] rounded-[16px] border border-[#DDE3E3] text-[#5B6B73] text-sm">
                  No additional recent news available.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {recentNews.map((article) => (
                    <div key={article.id} data-reveal="card" className="h-full min-w-0">
                      <article
                        className={cn(
                          'group flex flex-col h-full bg-[#F5F6F1] rounded-[16px] border border-[#DDE3E3] overflow-hidden',
                          cardHover
                        )}
                      >
                        <div className="relative overflow-hidden aspect-[16/10] bg-[#07161F]">
                          <Image
                            src={article.image || '/images/about-hero-taranaki.jpg'}
                            alt={article.title}
                            fill
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          />
                        </div>

                        {/* Narrower padding at md-xl, where three cards share the 8-column track */}
                        <div className="p-6 md:p-5 xl:p-6 flex flex-col flex-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5B6B73] mb-3">
                            <span className="flex items-center gap-1.5 font-medium">
                              <Calendar className="w-3.5 h-3.5 text-[#1F6F78]" aria-hidden="true" />
                              {article.date}
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F6F78] truncate">
                              {article.category}
                            </span>
                          </div>

                          <h3 className={cn(type.h4, tone.headingLight, 'mb-3 line-clamp-3 group-hover:text-[#1F6F78] transition-colors break-words [overflow-wrap:anywhere]')}>
                            <Link href={`/news/${article.slug}`}>{article.title}</Link>
                          </h3>

                          <p className="text-sm text-[#5B6B73] leading-relaxed line-clamp-3 mb-6 break-words [overflow-wrap:anywhere]">
                            {article.excerpt}
                          </p>

                          <div className="mt-auto pt-3 border-t border-[#DDE3E3]/60">
                            <Link
                              href={`/news/${article.slug}`}
                              className="text-link text-sm font-semibold inline-flex items-center gap-1 text-[#1F6F78]"
                            >
                              <span>Read more</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right 4 Cols: Latest Announcements (Dark Card) */}
            <div className="lg:col-span-4 min-w-0" data-reveal>
              <div className="relative rounded-[20px] lg:rounded-[24px] bg-[#07161F] text-white p-6 sm:p-7 border border-[#1D3B4C] shadow-xl overflow-hidden">
                {/* Header */}
                <h3 className={cn(type.h3, tone.headingDark, 'mb-4')}>
                  Latest Announcements
                </h3>

                {/* Announcement List */}
                {loading ? (
                  <div className="divide-y divide-white/10 animate-pulse">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="py-4 space-y-2">
                        <div className="h-3 w-20 bg-white/20 rounded" />
                        <div className="h-4 w-full bg-white/20 rounded" />
                      </div>
                    ))}
                  </div>
                ) : announcements.length === 0 ? (
                  <p className="text-sm text-white/60 py-4">No announcements available.</p>
                ) : (
                  <div className="divide-y divide-white/10">
                    {announcements.map((item) => (
                      <Link
                        key={item.id}
                        href={`/news/${item.slug}`}
                        className="py-4 flex items-start justify-between gap-3 group transition-colors"
                      >
                        <div className="min-w-0">
                          <span className="text-xs text-[#DDE3E3]/75 uppercase tracking-wider block mb-1">
                            {item.date}
                          </span>
                          <span className="text-sm font-medium text-white group-hover:text-[#B7E34A] transition-colors leading-snug line-clamp-2 block">
                            {item.title}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                )}

                {/* View All Button */}
                <div className="pt-5 mt-2 border-t border-white/10">
                  <Link
                    href="#all-news"
                    onClick={() => setSelectedCategory('All News')}
                    className="w-full min-h-[44px] px-5 rounded-full border border-white/20 hover:border-[#B7E34A] text-white hover:text-[#B7E34A] text-sm font-heading font-semibold tracking-wide inline-flex items-center justify-center transition-all"
                  >
                    View all news &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4.5 ALL NEWS & PRESS RELEASES (Strictly Date-Ordered Archive)
         ========================================================= */}
      <section id="all-news" className="section-y bg-[#F5F6F1] scroll-mt-20 border-t border-[#DDE3E3]/70">
        <Container>
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Eyebrow>OFFICIAL ARCHIVE</Eyebrow>
              <KineticHeading
                as="h2"
                text="All News & Releases"
                className={cn(type.h2, tone.headingLight)}
              />
              <p className="text-sm text-[#5B6B73] mt-2">
                Showing {filteredArticles.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length)} of {filteredArticles.length} {filteredArticles.length === 1 ? 'release' : 'releases'}
                {selectedCategory !== 'All News' && (
                  <span className="ml-1.5 font-medium text-[#1F6F78]">in &ldquo;{selectedCategory}&rdquo;</span>
                )}
                {searchQuery.trim() !== '' && (
                  <span className="ml-1.5 font-medium text-[#1F6F78]">matching &ldquo;{searchQuery}&rdquo;</span>
                )}
              </p>
            </div>

            {/* Clear Filters Reset Pill */}
            {(selectedCategory !== 'All News' || searchQuery.trim() !== '') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All News');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#DDE3E3] text-xs font-heading font-semibold text-[#5B6B73] hover:text-[#0B1F2A] hover:border-[#0B1F2A] transition-colors shadow-sm self-start md:self-auto"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset filters</span>
              </button>
            )}
          </div>

          {/* Grid, Skeleton Loading or Empty State */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-white rounded-[16px] border border-[#DDE3E3] p-6 animate-pulse">
                  <div className="aspect-[16/10] bg-[#DDE3E3]/80 rounded-lg mb-4" />
                  <div className="h-4 w-24 bg-[#DDE3E3]/80 rounded mb-2.5" />
                  <div className="h-6 w-3/4 bg-[#DDE3E3]/80 rounded mb-3" />
                  <div className="h-12 w-full bg-[#DDE3E3]/80 rounded" />
                </div>
              ))}
            </div>
          ) : paginatedArticles.length === 0 ? (
            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-12 text-center max-w-xl mx-auto shadow-sm">
              <Newspaper className="w-12 h-12 text-[#5B6B73]/50 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold font-heading text-[#0B1F2A] mb-2">No announcements found</h3>
              <p className="text-sm text-[#5B6B73] mb-6">
                No articles matched your selected criteria. Try adjusting your keyword or clearing the active category filter.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All News');
                  setSearchQuery('');
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {paginatedArticles.map((article) => (
                  <div key={article.id} className="h-full min-w-0">
                    <article
                      className={cn(
                        'group flex flex-col h-full bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden',
                        cardHover
                      )}
                    >
                      <div className="relative overflow-hidden aspect-[16/10] bg-[#07161F]">
                        <Image
                          src={article.image || '/images/about-hero-taranaki.jpg'}
                          alt={article.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#07161F]/85 backdrop-blur-md text-[10px] font-heading font-semibold text-[#B7E34A] border border-white/10 uppercase tracking-wider">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-1.5 text-xs text-[#5B6B73] mb-2.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#1F6F78]" aria-hidden="true" />
                          <span>{article.date}</span>
                        </div>

                        <h3 className={cn(type.h4, tone.headingLight, 'mb-3 line-clamp-2 group-hover:text-[#1F6F78] transition-colors break-words [overflow-wrap:anywhere]')}>
                          <Link href={`/news/${article.slug}`}>{article.title}</Link>
                        </h3>

                        <p className="text-sm text-[#5B6B73] leading-relaxed line-clamp-3 mb-6 break-words [overflow-wrap:anywhere]">
                          {article.excerpt}
                        </p>

                        <div className="mt-auto pt-3 border-t border-[#DDE3E3]/60 flex items-center justify-between">
                          <Link
                            href={`/news/${article.slug}`}
                            className="text-link text-sm font-semibold inline-flex items-center gap-1 text-[#1F6F78] group-hover:text-[#0B1F2A]"
                          >
                            <span>Read release</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </Link>
                          {article.pdfUrl && (
                            <a
                              href={article.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#5B6B73] hover:text-[#0B1F2A] font-semibold underline"
                            >
                              PDF
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#DDE3E3]">
                  <p className="text-xs text-[#5B6B73] order-2 sm:order-1">
                    Page <span className="font-semibold text-[#0B1F2A]">{currentPage}</span> of{' '}
                    <span className="font-semibold text-[#0B1F2A]">{totalPages}</span>
                  </p>

                  <div className="flex items-center gap-2 order-1 sm:order-2">
                    <button
                      type="button"
                      disabled={currentPage <= 1}
                      onClick={() => {
                        setCurrentPage((p) => Math.max(1, p - 1));
                        const el = document.getElementById('all-news');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={cn(
                        'min-h-[44px] px-4 rounded-full border text-xs font-heading font-semibold inline-flex items-center gap-1.5 transition-colors',
                        currentPage <= 1
                          ? 'bg-transparent border-[#DDE3E3] text-[#5B6B73]/40 cursor-not-allowed'
                          : 'bg-white border-[#DDE3E3] text-[#0B1F2A] hover:border-[#0B1F2A] shadow-sm'
                      )}
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="hidden sm:flex items-center gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum = i + 1;
                        if (totalPages > 5 && currentPage > 3) {
                          pageNum = currentPage - 2 + i;
                          if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                        }
                        const isCurrent = pageNum === currentPage;
                        return (
                          <button
                            key={pageNum}
                            type="button"
                            onClick={() => {
                              setCurrentPage(pageNum);
                              const el = document.getElementById('all-news');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={cn(
                              'w-10 h-10 rounded-full text-xs font-heading font-semibold transition-colors',
                              isCurrent
                                ? 'bg-[#0B1F2A] text-white shadow-sm'
                                : 'bg-white border border-[#DDE3E3] text-[#5B6B73] hover:text-[#0B1F2A] hover:border-[#0B1F2A]'
                            )}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      disabled={currentPage >= totalPages}
                      onClick={() => {
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        const el = document.getElementById('all-news');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={cn(
                        'min-h-[44px] px-4 rounded-full border text-xs font-heading font-semibold inline-flex items-center gap-1.5 transition-colors',
                        currentPage >= totalPages
                          ? 'bg-transparent border-[#DDE3E3] text-[#5B6B73]/40 cursor-not-allowed'
                          : 'bg-white border-[#DDE3E3] text-[#0B1F2A] hover:border-[#0B1F2A] shadow-sm'
                      )}
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </Container>
      </section>

      {/* =========================================================
          5. INSIGHTS & PERSPECTIVES
         ========================================================= */}
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (Headline & Action) */}
            <div className="lg:col-span-4 min-w-0">
              <SectionHeading
                title="Insights & Perspectives"
                description="Thoughts, trends and developments shaping the energy and critical minerals landscape."
                size="compact"
                className="mb-8"
              />
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Industry Insights')}
                  className="inline-flex items-center gap-3 group cursor-pointer min-h-[44px]"
                >
                  <span className="w-11 h-11 rounded-full bg-[#B7E34A] group-hover:bg-[#A3CF36] flex items-center justify-center text-[#0B1F2A] shadow-sm transition-all duration-200 group-hover:scale-105">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                    Explore insights
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: 2 Horizontal Insight Cards */}
            <div className="lg:col-span-8 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {insights.map((article) => (
                  <div key={article.id} data-reveal="card" className="h-full min-w-0">
                    <article
                      className={cn(
                        'group flex items-center gap-4 sm:gap-5 h-full p-5 sm:p-6 bg-white rounded-[16px] border border-[#DDE3E3]',
                        cardHover
                      )}
                    >
                      <div className="relative w-24 h-20 sm:w-32 sm:h-24 rounded-[12px] overflow-hidden bg-[#07161F] shrink-0 border border-[#DDE3E3]/60">
                        <Image
                          src={article.image || '/images/about-hero-taranaki.jpg'}
                          alt={article.title}
                          fill
                          sizes="128px"
                          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                        />
                      </div>
                      <div className="flex flex-col min-w-0 self-stretch justify-center">
                        <span className="text-[11px] uppercase font-heading font-semibold text-[#1F6F78] tracking-wider mb-1.5 block">
                          INDUSTRY INSIGHTS
                        </span>
                        <h3 className={cn(type.h4, tone.headingLight, 'mb-2 line-clamp-2 group-hover:text-[#1F6F78] transition-colors break-words [overflow-wrap:anywhere]')}>
                          <Link href={`/news/${article.slug}`}>{article.title}</Link>
                        </h3>
                        <Link
                          href={`/news/${article.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F6F78] group-hover:text-[#0B1F2A] transition-colors"
                        >
                          <span>Read article</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM NEWSLETTER / SUBSCRIPTION BANNER
         ========================================================= */}
      <section className="relative section-y-compact bg-[#0B1F2A] border-t border-[#1D3B4C] overflow-hidden">
        {/* Panoramic Sunset Mountain Landscape Photo */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/images/taranaki-sunset-banner.jpg"
            alt="Golden hour sunset over Mount Taranaki"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-50 brightness-95 contrast-110"
          />
          {/* Multi-stop Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2A]/95 via-[#0B1F2A]/80 to-[#0B1F2A]/70" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div data-reveal="fade" className="min-w-0 max-w-2xl">
              <Eyebrow dark>STAY INFORMED</Eyebrow>
              <KineticHeading
                as="h2"
                text="Get the latest company updates"
                className={cn(type.h2Compact, tone.headingDark, 'mb-3')}
              />
              <p className="text-sm sm:text-base leading-relaxed text-[#DDE3E3]/85 max-w-lg">
                Subscribe to receive news releases, corporate updates and investor information directly to your inbox.
              </p>
            </div>

            {/* Email Form */}
            <div className="shrink-0 w-full md:w-auto md:max-w-md" data-reveal>
              {subscribed ? (
                <div role="status" className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full bg-[#B7E34A]/20 border border-[#B7E34A] text-[#B7E34A] text-sm font-heading font-bold">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-[#07161F]/85 backdrop-blur-md border border-white/20 shadow-xl w-full md:w-[26rem]"
                >
                  <div className="flex items-center flex-grow min-w-0 px-3 h-11">
                    <Mail className="w-4 h-4 text-[#DDE3E3]/75 mr-2.5 shrink-0" aria-hidden="true" />
                    <input
                      type="email"
                      required
                      aria-label="Email address"
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-[#DDE3E3]/60 focus:outline-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="shrink-0 rounded-full min-h-[44px] focus-visible:ring-offset-[#07161F]"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
