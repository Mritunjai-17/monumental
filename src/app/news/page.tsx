'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { newsArticles } from '@/data/news';
import { ArrowRight, Search, Newspaper, Mail, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  'All News',
  'Press Releases',
  'Corporate Updates',
  'Investor Relations',
  'Industry Insights',
] as const;

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All News');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All News' ||
        article.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        article.releaseType.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured news candidates
  const featuredArticles = useMemo(() => {
    return newsArticles.slice(0, 3);
  }, []);

  const currentFeatured = featuredArticles[featuredIndex] || newsArticles[0];

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  const handlePrevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  // Recent news (excluding featured)
  const recentNews = newsArticles.slice(1, 4);

  // Latest announcements (for right dark card)
  const announcements = newsArticles.slice(0, 4);

  // Industry insights
  const insights = newsArticles.filter((a) => a.category === 'Industry Insights').slice(0, 2);

  return (
    <div className="relative bg-[#F5F6F1] text-[#0B1F2A] overflow-hidden min-h-screen">
      {/* =========================================================
          1. HERO SECTION (Split Left Content & Right Photograph)
         ========================================================= */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-8 lg:pb-12">
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
          {/* Seamless gradient fade into off-white background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F1] via-[#F5F6F1]/40 to-transparent w-full h-full" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[320px] lg:min-h-[380px]">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 pr-0 lg:pr-6">
              <span className="text-[#1F6F78] uppercase text-xs sm:text-[13px] font-heading font-semibold tracking-[0.16em] mb-3 block">
                LATEST UPDATES
              </span>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0B1F2A] tracking-[-0.02em] leading-[1.08] mb-5">
                News &amp; Insights
              </h1>

              <p className="text-[#5B6B73] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Stay informed with the latest company announcements, project updates and industry perspectives from Monumental Energy.
              </p>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="lg:hidden col-span-1 mt-4">
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
      <section className="pb-8 pt-2">
        <Container>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0B1F2A] text-white shadow-sm'
                        : 'text-[#5B6B73] hover:text-[#0B1F2A] hover:bg-black/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-[#87969F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search news, announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-[#DDE3E3] bg-white text-xs text-[#0B1F2A] placeholder:text-[#87969F] focus:outline-none focus:border-[#1F6F78] shadow-sm transition-colors"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          3. FEATURED STORY SPOTLIGHT
         ========================================================= */}
      <section className="py-6 sm:py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Featured Image */}
            <div className="lg:col-span-7">
              <div className="group relative rounded-[18px] lg:rounded-[22px] overflow-hidden aspect-[16/10.5] shadow-[0_12px_36px_-6px_rgba(11,31,42,0.14)] bg-[#07161F] border border-[#DDE3E3]/80">
                <Image
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/70 via-transparent to-[#07161F]/20 pointer-events-none" />

                {/* Top-Left Pill Badge: FEATURED */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#B7E34A] text-[#0B1F2A] font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-sm">
                    FEATURED
                  </span>
                </div>

                {/* Bottom Bar: Press Release Tag & Pagination Arrows */}
                <div className="absolute bottom-5 left-6 right-6 z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90 text-xs font-heading font-medium">
                    <Newspaper className="w-4 h-4 text-[#B7E34A]" />
                    <span>{currentFeatured.releaseType}</span>
                  </div>

                  {/* Carousel Prev/Next */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevFeatured}
                      aria-label="Previous featured story"
                      className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    >
                      &larr;
                    </button>
                    <button
                      onClick={handleNextFeatured}
                      aria-label="Next featured story"
                      className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#B7E34A] hover:text-[#0B1F2A] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    >
                      &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Featured Copy */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase font-heading font-semibold tracking-[0.14em] text-[#1F6F78] mb-3 block">
                {currentFeatured.date}
              </span>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#0B1F2A] leading-[1.18] tracking-[-0.01em] mb-4">
                <Link
                  href={`/news/${currentFeatured.slug}`}
                  className="hover:text-[#1F6F78] transition-colors"
                >
                  {currentFeatured.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed mb-8">
                {currentFeatured.excerpt}
              </p>

              <div>
                <Link
                  href={`/news/${currentFeatured.slug}`}
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="w-10 h-10 rounded-full bg-[#B7E34A] group-hover:bg-[#A3CF36] flex items-center justify-center text-[#0B1F2A] shadow-sm transition-all duration-200 group-hover:scale-105">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                    Read full announcement
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          4. DUAL SECTION: RECENT NEWS & LATEST ANNOUNCEMENTS
         ========================================================= */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Cols: Recent News Grid */}
            <div className="lg:col-span-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-normal">
                    Recent News
                  </h3>
                </div>

                <Link
                  href="#all-news"
                  onClick={() => setSelectedCategory('All News')}
                  className="text-xs font-semibold text-[#1F6F78] hover:text-[#0B1F2A] inline-flex items-center gap-1.5 transition-colors group"
                >
                  <span>View all news</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* 3-Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentNews.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-col group bg-transparent"
                  >
                    <div className="relative rounded-[14px] overflow-hidden aspect-[16/10] bg-[#07161F] border border-[#DDE3E3] shadow-sm mb-3.5">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <span className="text-[10px] sm:text-[11px] uppercase font-heading font-semibold text-[#1F6F78] tracking-wider mb-2 block">
                      {article.date} &nbsp;|&nbsp; {article.category.toUpperCase()}
                    </span>

                    <h4 className="font-heading font-bold text-base text-[#0B1F2A] leading-snug mb-2 group-hover:text-[#1F6F78] transition-colors line-clamp-2">
                      <Link href={`/news/${article.slug}`}>{article.title}</Link>
                    </h4>

                    <p className="text-xs text-[#5B6B73] leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto pt-1">
                      <Link
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F6F78] group-hover:text-[#0B1F2A] transition-colors"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: Latest Announcements (Dark Card) */}
            <div className="lg:col-span-4">
              <div className="relative rounded-[20px] bg-[#07161F] text-white p-6 sm:p-7 border border-[#1D3B4C] shadow-xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-5 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    Latest Announcements
                  </h3>
                </div>

                {/* Announcement List */}
                <div className="divide-y divide-white/10">
                  {announcements.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="py-3.5 flex items-start justify-between gap-3 group transition-colors block"
                    >
                      <div>
                        <span className="text-[10px] text-[#87969F] uppercase tracking-wider block mb-1">
                          {item.date}
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-white group-hover:text-[#B7E34A] transition-colors leading-snug line-clamp-2 block">
                          {item.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>

                {/* View All Button */}
                <div className="pt-5 mt-2 border-t border-white/10">
                  <Link
                    href="#all-news"
                    onClick={() => setSelectedCategory('All News')}
                    className="w-full py-2.5 rounded-full border border-white/20 hover:border-[#B7E34A] text-white hover:text-[#B7E34A] text-xs font-heading font-semibold tracking-wide text-center block transition-all"
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
          5. INSIGHTS & PERSPECTIVES
         ========================================================= */}
      <section className="py-12 sm:py-16 border-t border-[#DDE3E3]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Headline & Action) */}
            <div className="lg:col-span-4">
              <div className="w-7 h-1 bg-[#B7E34A] rounded-full mb-3.5" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-normal leading-tight mb-3">
                Insights &amp; Perspectives
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6B73] leading-relaxed max-w-sm mb-6">
                Thoughts, trends and developments shaping the energy and critical minerals landscape.
              </p>
              <div>
                <button
                  onClick={() => setSelectedCategory('Industry Insights')}
                  className="inline-flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#B7E34A] group-hover:bg-[#A3CF36] flex items-center justify-center text-[#0B1F2A] shadow-sm transition-all duration-200 group-hover:scale-105">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="font-heading font-bold text-sm text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors">
                    Explore insights
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: 2 Horizontal Insight Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insights.map((article) => (
                  <article
                    key={article.id}
                    className="flex items-center gap-4 group p-3 rounded-[16px] hover:bg-white hover:shadow-sm border border-transparent hover:border-[#DDE3E3] transition-all"
                  >
                    <div className="relative w-32 h-24 sm:w-36 sm:h-28 rounded-xl overflow-hidden bg-[#07161F] shrink-0 border border-[#DDE3E3]/60">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="144px"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] uppercase font-heading font-semibold text-[#1F6F78] tracking-wider mb-1 block">
                        INDUSTRY INSIGHTS
                      </span>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A] leading-snug mb-2 group-hover:text-[#1F6F78] transition-colors line-clamp-2">
                        <Link href={`/news/${article.slug}`}>{article.title}</Link>
                      </h4>
                      <Link
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F6F78] group-hover:text-[#0B1F2A] transition-colors mt-auto"
                      >
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          6. BOTTOM NEWSLETTER / SUBSCRIPTION BANNER
         ========================================================= */}
      <section className="pb-16 sm:pb-20 lg:pb-24 pt-4">
        <Container>
          <div className="relative rounded-[18px] lg:rounded-[22px] overflow-hidden min-h-[190px] sm:min-h-[210px] shadow-2xl border border-[#1D3B4C] bg-[#07161F]">
            {/* Panoramic Sunset Mountain Landscape Photo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/taranaki-sunset-banner.jpg"
                alt="Golden hour sunset over Mount Taranaki"
                fill
                sizes="100vw"
                className="object-cover object-[center_35%] opacity-65 brightness-95 contrast-110"
              />
              {/* Multi-stop Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/95 via-[#0B1F2A]/75 to-[#07161F]/80" />
            </div>

            {/* Banner Content Container */}
            <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-1 bg-[#B7E34A] rounded-full inline-block" />
                  <span className="text-[#B7E34A] text-xs font-heading font-semibold uppercase tracking-[0.16em]">
                    STAY INFORMED
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-tight tracking-[-0.01em] mb-2">
                  Get the latest company updates
                </h2>
                <p className="text-xs sm:text-sm text-[#DDE3E3] font-normal max-w-lg">
                  Subscribe to receive news releases, corporate updates and investor information directly to your inbox.
                </p>
              </div>

              {/* Email Form */}
              <div className="shrink-0 w-full md:w-auto">
                {subscribed ? (
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#B7E34A]/20 border border-[#B7E34A] text-[#B7E34A] text-xs font-heading font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-[#0B1F2A]/85 backdrop-blur-md border border-white/20 shadow-xl max-w-md w-full"
                  >
                    <div className="flex items-center flex-grow px-3 py-1.5">
                      <Mail className="w-4 h-4 text-[#87969F] mr-2.5 shrink-0" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full bg-transparent text-xs text-white placeholder:text-[#87969F] focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#B7E34A] hover:bg-[#A3CF36] text-[#0B1F2A] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md hover:scale-[1.02]"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
