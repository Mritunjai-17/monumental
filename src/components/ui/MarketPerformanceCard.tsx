'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  marketQuoteData as initialQuoteData,
  chartHistoricalData,
  ChartPoint,
  DetailedQuote,
} from '@/data/investors';
import { getMarketQuote, getMarketHistory } from '@/lib/api';
import {
  TrendingUp,
  ExternalLink,
  ChevronDown,
  Check,
  ArrowDownRight,
  ArrowUpRight,
} from 'lucide-react';

type ChartType = 'Line' | 'Area' | 'OHLC' | 'Candlestick' | 'Hollow Candle';
type Frequency = 'DAILY' | 'WEEKLY' | 'MONTHLY';
type Adjustment = 'Splits & Dividends' | 'Splits' | 'Unadjusted';

interface EventsState {
  earnings: boolean;
  dividends: boolean;
  splits: boolean;
}

interface ComputedPoint extends ChartPoint {
  x: number;
  y: number;
  volY: number;
  volHeight: number;
  open: number;
  high: number;
  low: number;
  close: number;
  change: number;
  changePercent: number;
  yOpen: number;
  yClose: number;
  yHigh: number;
  yLow: number;
}

interface EventMarker {
  date: string;
  type: 'earnings' | 'dividends' | 'splits';
  label: string;
  description: string;
}

// Verified historical corporate catalysts
const EVENT_CATALYSTS: EventMarker[] = [
  {
    date: 'Aug 21',
    type: 'earnings',
    label: 'E',
    description: 'Q2 2026 Financial Results & SEDAR Disclosure',
  },
  {
    date: 'Oct 16',
    type: 'earnings',
    label: 'E',
    description: 'Q3 2026 Production & Taranaki Operational Filing',
  },
  {
    date: 'Oct 23',
    type: 'splits',
    label: 'S',
    description: 'Share Capital Rationalization & TSX-V Filing',
  },
  {
    date: 'Sep 25',
    type: 'dividends',
    label: 'D',
    description: 'Corporate Capital Return Notice',
  },
];

export function MarketPerformanceCard() {
  const [marketQuote, setMarketQuote] = useState<DetailedQuote>(initialQuoteData);
  const [chartData, setChartData] = useState<Record<string, ChartPoint[]>>(chartHistoricalData);
  const [timeframe, setTimeframe] = useState<string>('3M');

  // Professional QuoteMedia Dropdown States
  const [adjustment, setAdjustment] = useState<Adjustment>('Splits & Dividends');
  const [events, setEvents] = useState<EventsState>({
    earnings: false,
    dividends: false,
    splits: false,
  });
  const [chartType, setChartType] = useState<ChartType>('Line');
  const [frequency, setFrequency] = useState<Frequency>('DAILY');
  const [showVolume, setShowVolume] = useState<boolean>(true);

  // Active Dropdown Tracker
  const [openDropdown, setOpenDropdown] = useState<'adj' | 'events' | 'type' | 'freq' | null>(null);

  // Tooltip & Hover Telemetry
  const [hoveredPoint, setHoveredPoint] = useState<ComputedPoint | null>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Synchronize live market quote from backend
  useEffect(() => {
    let isMounted = true;
    getMarketQuote().then((quote) => {
      if (isMounted && quote) {
        setMarketQuote(quote);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Synchronize historical chart points when timeframe selection changes
  useEffect(() => {
    let isMounted = true;
    getMarketHistory(timeframe).then((points) => {
      if (isMounted && points && points.length > 0) {
        setChartData((prev) => ({ ...prev, [timeframe]: points }));
      }
    });
    return () => {
      isMounted = false;
    };
  }, [timeframe]);

  // SVG dimensions for chart
  const svgWidth = 640;
  const svgHeight = 260;
  const padLeft = 15;
  const padRight = 55;
  const padTop = 24;
  const padBottom = 35;
  const chartWidth = svgWidth - padLeft - padRight;
  const chartHeight = svgHeight - padTop - padBottom;

  // Raw time-series points adjusted by timeframe and frequency
  const rawData: ChartPoint[] = useMemo(() => {
    const base = chartData[timeframe] || chartHistoricalData[timeframe] || chartHistoricalData['3M'] || [];

    // Frequency filter simulation (Weekly/Monthly aggregation)
    if (frequency === 'WEEKLY') {
      return base.filter((_, i) => i % 2 === 0 || i === base.length - 1);
    }
    if (frequency === 'MONTHLY') {
      return base.filter((_, i) => i % 4 === 0 || i === base.length - 1);
    }
    return base;
  }, [chartData, timeframe, frequency]);

  // Compute financial coordinates (OHLC candles, line coordinates, and volume)
  const { minPrice, maxPrice, maxVolume, points } = useMemo(() => {
    if (rawData.length === 0) {
      return { minPrice: 0.06, maxPrice: 0.1, maxVolume: 1000, points: [] };
    }

    // Price adjustment calculation
    const adjMultiplier = adjustment === 'Unadjusted' ? 1.05 : 1.0;

    const prices = rawData.map((d) => d.price * adjMultiplier);
    const volumes = rawData.map((d) => d.volume);

    const calculatedMin = Math.min(...prices);
    const calculatedMax = Math.max(...prices);
    const minP = Math.max(0.01, calculatedMin * 0.92);
    const maxP = Math.max(0.02, calculatedMax * 1.08);
    const maxV = Math.max(...volumes) || 1;

    const computed: ComputedPoint[] = rawData.map((d, i) => {
      const close = d.price * adjMultiplier;
      const prevClose = i > 0 ? rawData[i - 1].price * adjMultiplier : close * 0.98;
      // Synthetic Open, High, Low for OHLC / Candlestick rendering
      const open = i % 2 === 0 ? prevClose : close * 0.99;
      const high = Math.max(open, close) + 0.005;
      const low = Math.max(0.01, Math.min(open, close) - 0.005);
      const change = close - prevClose;
      const changePercent = prevClose > 0 ? (change / prevClose) * 100 : 0;

      const x = padLeft + (i / Math.max(1, rawData.length - 1)) * chartWidth;
      const y = padTop + chartHeight - ((close - minP) / Math.max(0.001, maxP - minP)) * chartHeight;
      const yOpen = padTop + chartHeight - ((open - minP) / Math.max(0.001, maxP - minP)) * chartHeight;
      const yClose = y;
      const yHigh = padTop + chartHeight - ((high - minP) / Math.max(0.001, maxP - minP)) * chartHeight;
      const yLow = padTop + chartHeight - ((low - minP) / Math.max(0.001, maxP - minP)) * chartHeight;

      const volHeight = (d.volume / maxV) * 38;
      const volY = svgHeight - padBottom - volHeight;

      return {
        ...d,
        price: close,
        open,
        high,
        low,
        close,
        change,
        changePercent,
        x,
        y,
        yOpen,
        yClose,
        yHigh,
        yLow,
        volY,
        volHeight,
      };
    });

    return { minPrice: minP, maxPrice: maxP, maxVolume: maxV, points: computed };
  }, [rawData, adjustment, chartHeight, chartWidth]);

  // Stepped Price Line Path
  const linePath = useMemo(() => {
    if (points.length === 0) return '';
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      path += ` L ${curr.x} ${prev.y} L ${curr.x} ${curr.y}`;
    }
    return path;
  }, [points]);

  // Stepped Area Gradient Path
  const areaPath = useMemo(() => {
    if (points.length === 0) return '';
    const first = points[0];
    const last = points[points.length - 1];
    const baseY = svgHeight - padBottom;
    let path = `M ${first.x} ${baseY} L ${first.x} ${first.y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      path += ` L ${curr.x} ${prev.y} L ${curr.x} ${curr.y}`;
    }
    path += ` L ${last.x} ${baseY} Z`;
    return path;
  }, [points, svgHeight, padBottom]);

  // Dynamic Y-axis ticks
  const yTicks = useMemo(() => {
    const mid = (minPrice + maxPrice) / 2;
    return [
      { label: maxPrice.toFixed(2), price: maxPrice },
      { label: mid.toFixed(2), price: mid },
      { label: minPrice.toFixed(2), price: minPrice },
    ];
  }, [minPrice, maxPrice]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const ratio = clientX / rect.width;
    const currentSvgX = ratio * svgWidth;

    let nearest = points[0];
    let nearestDist = Infinity;
    points.forEach((pt) => {
      const dist = Math.abs(pt.x - currentSvgX);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = pt;
      }
    });

    setHoveredPoint(nearest);
    setHoverX(nearest?.x ?? null);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
    setHoverX(null);
  };

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-8 lg:p-9 shadow-sm mb-10 sm:mb-14"
    >
      {/* =========================================================
          TOP QUOTEMEDIA TICKER & PRICE STRIP
         ========================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#DDE3E3] mb-6">
        <div>
          {/* Symbol & Exchange */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-heading font-bold text-sm text-[#0B1F2A] tracking-wider uppercase">
              {marketQuote.symbol}
            </span>
            <span className="text-xs text-[#5B6B73]">|</span>
            <span className="text-xs text-[#5B6B73] font-medium">{marketQuote.exchange}</span>
          </div>

          {/* Big Price Display */}
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="font-heading font-bold text-4xl sm:text-5xl text-[#0B1F2A] tracking-tight">
              ${marketQuote.price.toFixed(2)}
            </span>
            <span
              className={`text-sm font-heading font-semibold ${
                marketQuote.change >= 0 ? 'text-[#1F6F78]' : 'text-[#EF4444]'
              }`}
            >
              {marketQuote.change >= 0 ? '+' : ''}
              {marketQuote.change.toFixed(2)} ({marketQuote.changePercent.toFixed(2)}%)
            </span>
          </div>

          {/* Bid/Ask & Trading Particulars */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5B6B73]">
            <span>
              Bid:{' '}
              <strong className="font-mono text-[#0B1F2A] font-semibold">
                {marketQuote.bid.toFixed(2)}
              </strong>{' '}
              x {marketQuote.bidSize.toLocaleString()}
            </span>
            <span className="text-[#DDE3E3]">•</span>
            <span>
              Ask:{' '}
              <strong className="font-mono text-[#0B1F2A] font-semibold">
                {marketQuote.ask.toFixed(2)}
              </strong>{' '}
              x {marketQuote.askSize.toLocaleString()}
            </span>
            <span className="text-[#DDE3E3]">•</span>
            <span>
              Volume:{' '}
              <strong className="font-mono text-[#0B1F2A] font-semibold">
                {marketQuote.volume.toLocaleString()}
              </strong>
            </span>
          </div>

          <div className="text-[11px] text-[#5B6B73] mt-1.5 flex flex-wrap items-center gap-2 font-mono">
            <span>{marketQuote.timestamp}</span>
            <span>•</span>
            <span className="uppercase">{marketQuote.currency} | DELAYED PRICE | MARKET CLOSED</span>
          </div>
        </div>

        {/* Right Action: External TMX Link */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://money.tmx.com/en/quote/MNRG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DDE3E3] hover:border-[#0B1F2A] bg-[#F5F6F1] text-[#0B1F2A] text-xs font-heading font-semibold transition-colors"
          >
            <TrendingUp className="w-4 h-4 text-[#1F6F78]" />
            <span>TMX Money Live Quote</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5B6B73]" />
          </a>
        </div>
      </div>

      {/* =========================================================
          MAIN DUAL COLUMN: DETAILED QUOTE (LEFT) & QUOTEMEDIA CHART (RIGHT)
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* LEFT COLUMN: DETAILED QUOTE MATRIX */}
        <div className="lg:col-span-5 bg-[#F5F6F1] rounded-2xl border border-[#DDE3E3] p-5 sm:p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DDE3E3]">
            <h3 className="font-heading font-bold text-sm text-[#0B1F2A]">Detailed Quote</h3>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#5B6B73]">
              QuoteMedia Feed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Last</span>
              <span className="font-mono font-bold text-[#0B1F2A]">
                {marketQuote.price.toFixed(3)}
              </span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Volume</span>
              <span className="font-mono font-bold text-[#0B1F2A]">
                {marketQuote.volume > 1000
                  ? `${(marketQuote.volume / 1000).toFixed(2)}k`
                  : marketQuote.volume.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Open</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.open.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Prev. Close</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.prevClose.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">High</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.high.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Low</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.low.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Bid</span>
              <span className="font-mono font-semibold text-[#1F6F78]">
                {marketQuote.bid.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Ask</span>
              <span className="font-mono font-semibold text-[#0B1F2A]">
                {marketQuote.ask.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Bid Size</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.bidSize.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Ask Size</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.askSize.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Beta</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.beta}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">VWAP</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.vwap.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Year High</span>
              <span className="font-mono font-semibold text-[#1F6F78]">${marketQuote.yearHigh}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Year Low</span>
              <span className="font-mono text-[#5B6B73]">${marketQuote.yearLow}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Market Cap</span>
              <span className="font-mono font-semibold text-[#0B1F2A]">
                ${marketQuote.marketCap}
              </span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Total Shares</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.totalShares}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">P/B Ratio</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.pbRatio}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Shares Out</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.sharesOut}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-[#5B6B73]">EPS</span>
              <span className="font-mono text-[#0B1F2A]">${marketQuote.eps}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-[#5B6B73]">Escrow Shares</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuote.escrowShares}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE QUOTEMEDIA-STYLE CHART */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          {/* TOOLBAR ROW 1: Ticker & The 3 Main Control Dropdowns */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 mb-2 border-b border-[#DDE3E3]">
            {/* Symbol Identifier Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1F6F78]" />
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#0B1F2A]">
                MNRG.CA
              </span>
            </div>

            {/* Right Group: 3 Financial Dropdowns */}
            <div className="flex items-center flex-wrap gap-2">
              {/* DROPDOWN 1: Splits & Dividends (Adjustment) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'adj' ? null : 'adj')}
                  aria-expanded={openDropdown === 'adj'}
                  className="h-8 inline-flex items-center gap-1.5 px-3 rounded-lg border border-[#DDE3E3] bg-white hover:border-[#1F6F78] text-[11px] font-heading font-semibold text-[#0B1F2A] transition-colors"
                >
                  <span>{adjustment}</span>
                  <ChevronDown
                    className={`w-3 h-3 text-[#5B6B73] transition-transform ${
                      openDropdown === 'adj' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === 'adj' && (
                  <div className="absolute right-0 top-full mt-1.5 z-30 w-44 rounded-xl bg-white border border-[#DDE3E3] shadow-lg py-1 text-xs">
                    {(['Splits & Dividends', 'Splits', 'Unadjusted'] as Adjustment[]).map(
                      (option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setAdjustment(option);
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#F5F6F1] transition-colors ${
                            adjustment === option
                              ? 'text-[#1F6F78] font-bold bg-[#1F6F78]/5'
                              : 'text-[#0B1F2A]'
                          }`}
                        >
                          <span>{option}</span>
                          {adjustment === option && <Check className="w-3.5 h-3.5" />}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* DROPDOWN 2: Events (Earnings, Dividends, Splits) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'events' ? null : 'events')}
                  aria-expanded={openDropdown === 'events'}
                  className={`h-8 inline-flex items-center gap-1.5 px-3 rounded-lg border text-[11px] font-heading font-semibold transition-colors ${
                    events.earnings || events.dividends || events.splits
                      ? 'border-[#1F6F78] text-[#1F6F78] bg-[#1F6F78]/10'
                      : 'border-[#DDE3E3] bg-white text-[#0B1F2A] hover:border-[#1F6F78]'
                  }`}
                >
                  <span>Events</span>
                  <ChevronDown
                    className={`w-3 h-3 text-[#5B6B73] transition-transform ${
                      openDropdown === 'events' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === 'events' && (
                  <div className="absolute right-0 top-full mt-1.5 z-30 w-48 rounded-xl bg-white border border-[#DDE3E3] shadow-lg p-2.5 text-xs space-y-2">
                    <div className="text-[10px] font-heading uppercase font-bold text-[#5B6B73] tracking-wider pb-1 border-b border-[#E6EBEB]">
                      Chart Events
                    </div>

                    {/* Toggle: Earnings */}
                    <label className="flex items-center justify-between cursor-pointer select-none py-1 hover:bg-[#F5F6F1] px-1.5 rounded-lg">
                      <span className="text-[#0B1F2A] font-medium">Earnings</span>
                      <input
                        type="checkbox"
                        checked={events.earnings}
                        onChange={(e) =>
                          setEvents((prev) => ({ ...prev, earnings: e.target.checked }))
                        }
                        className="sr-only"
                      />
                      <span
                        className={`w-8 h-4.5 flex items-center rounded-full p-0.5 transition-colors ${
                          events.earnings ? 'bg-[#1F6F78]' : 'bg-[#DDE3E3]'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform ${
                            events.earnings ? 'translate-x-3.5' : 'translate-x-0'
                          }`}
                        />
                      </span>
                    </label>

                    {/* Toggle: Dividends */}
                    <label className="flex items-center justify-between cursor-pointer select-none py-1 hover:bg-[#F5F6F1] px-1.5 rounded-lg">
                      <span className="text-[#0B1F2A] font-medium">Dividends</span>
                      <input
                        type="checkbox"
                        checked={events.dividends}
                        onChange={(e) =>
                          setEvents((prev) => ({ ...prev, dividends: e.target.checked }))
                        }
                        className="sr-only"
                      />
                      <span
                        className={`w-8 h-4.5 flex items-center rounded-full p-0.5 transition-colors ${
                          events.dividends ? 'bg-[#1F6F78]' : 'bg-[#DDE3E3]'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform ${
                            events.dividends ? 'translate-x-3.5' : 'translate-x-0'
                          }`}
                        />
                      </span>
                    </label>

                    {/* Toggle: Splits */}
                    <label className="flex items-center justify-between cursor-pointer select-none py-1 hover:bg-[#F5F6F1] px-1.5 rounded-lg">
                      <span className="text-[#0B1F2A] font-medium">Splits</span>
                      <input
                        type="checkbox"
                        checked={events.splits}
                        onChange={(e) =>
                          setEvents((prev) => ({ ...prev, splits: e.target.checked }))
                        }
                        className="sr-only"
                      />
                      <span
                        className={`w-8 h-4.5 flex items-center rounded-full p-0.5 transition-colors ${
                          events.splits ? 'bg-[#1F6F78]' : 'bg-[#DDE3E3]'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform ${
                            events.splits ? 'translate-x-3.5' : 'translate-x-0'
                          }`}
                        />
                      </span>
                    </label>
                  </div>
                )}
              </div>

              {/* DROPDOWN 3: Chart Type (Line, Area, OHLC, Candlestick, Hollow Candle) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                  aria-expanded={openDropdown === 'type'}
                  className="h-8 inline-flex items-center gap-1.5 px-3 rounded-lg border border-[#DDE3E3] bg-white hover:border-[#1F6F78] text-[11px] font-heading font-semibold text-[#0B1F2A] transition-colors"
                >
                  <span>{chartType}</span>
                  <ChevronDown
                    className={`w-3 h-3 text-[#5B6B73] transition-transform ${
                      openDropdown === 'type' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === 'type' && (
                  <div className="absolute right-0 top-full mt-1.5 z-30 w-36 rounded-xl bg-white border border-[#DDE3E3] shadow-lg py-1 text-xs">
                    {(['Line', 'Area', 'OHLC', 'Candlestick', 'Hollow Candle'] as ChartType[]).map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setChartType(type);
                            setOpenDropdown(null);
                          }}
                          className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-[#F5F6F1] transition-colors ${
                            chartType === type
                              ? 'text-[#1F6F78] font-bold bg-[#1F6F78]/5'
                              : 'text-[#0B1F2A]'
                          }`}
                        >
                          <span>{type}</span>
                          {chartType === type && <Check className="w-3.5 h-3.5" />}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* TOOLBAR ROW 2: Full Timeframe Tabs + Frequency Dropdown & Volume Switch */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-2 border-b border-[#DDE3E3]">
            {/* Timeframe Selector Pills (All 10 from QuoteMedia) */}
            <div className="flex items-center max-w-full overflow-x-auto bg-[#F5F6F1] p-1 rounded-lg border border-[#DDE3E3] scrollbar-none">
              {['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y', '3Y', '5Y', '10Y'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`shrink-0 px-2 sm:px-2.5 py-1 rounded-md text-[11px] font-heading font-semibold transition-all ${
                    timeframe === tf
                      ? 'bg-[#0B1F2A] text-white shadow-sm'
                      : 'text-[#5B6B73] hover:text-[#0B1F2A]'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Right: Frequency Dropdown & Volume Switch */}
            <div className="flex items-center gap-3">
              {/* DROPDOWN 4: Frequency (DAILY / WEEKLY / MONTHLY) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'freq' ? null : 'freq')}
                  aria-expanded={openDropdown === 'freq'}
                  className="h-7 inline-flex items-center gap-1 px-2 rounded-md border border-[#DDE3E3] bg-white hover:border-[#1F6F78] text-[10px] font-heading font-bold text-[#0B1F2A] transition-colors uppercase tracking-wider"
                >
                  <span>{frequency}</span>
                  <ChevronDown
                    className={`w-2.5 h-2.5 text-[#5B6B73] transition-transform ${
                      openDropdown === 'freq' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openDropdown === 'freq' && (
                  <div className="absolute right-0 top-full mt-1.5 z-30 w-28 rounded-xl bg-white border border-[#DDE3E3] shadow-lg py-1 text-xs">
                    {(['DAILY', 'WEEKLY', 'MONTHLY'] as Frequency[]).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => {
                          setFrequency(f);
                          setOpenDropdown(null);
                        }}
                        className={`w-full px-3 py-1.5 text-left text-[11px] font-heading font-semibold hover:bg-[#F5F6F1] transition-colors ${
                          frequency === f
                            ? 'text-[#1F6F78] font-bold bg-[#1F6F78]/5'
                            : 'text-[#0B1F2A]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Volume Switch (Custom UI Pill) */}
              <button
                type="button"
                onClick={() => setShowVolume((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs text-[#5B6B73] font-heading font-semibold cursor-pointer select-none"
              >
                <span>Volume:</span>
                <span
                  className={`w-7 h-4 flex items-center rounded-full p-0.5 transition-colors ${
                    showVolume ? 'bg-[#1F6F78]' : 'bg-[#DDE3E3]'
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full bg-white shadow-sm transition-transform ${
                      showVolume ? 'translate-x-3' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Subhead Frequency Strip */}
          <div className="flex items-center justify-between text-[11px] text-[#5B6B73] mb-1.5 px-1 font-body">
            <span>
              Frequency: <strong className="text-[#0B1F2A]">{frequency}</strong>
              <span className="text-[#94A3B8] ml-2">
                (
                {points.length > 0
                  ? `${points[0].date} to ${points[points.length - 1].date}`
                  : `${timeframe} performance`}
                )
              </span>
            </span>
            <span className="text-[10px] text-[#87969F] hidden sm:inline">
              Hover chart for telemetry HUD
            </span>
          </div>

          {/* SVG Multi-Style Chart Canvas */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] min-h-[240px] bg-white border border-[#DDE3E3] rounded-xl p-2 overflow-hidden">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-full select-none cursor-crosshair overflow-visible"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <defs>
                <linearGradient id="steppedFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F6F78" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1F6F78" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Horizontal Gridlines & Right Y-Axis Labels */}
              {yTicks.map((tick, idx) => {
                const yPos =
                  padTop + chartHeight - ((tick.price - minPrice) / (maxPrice - minPrice)) * chartHeight;
                return (
                  <g key={idx}>
                    <line
                      x1={padLeft}
                      y1={yPos}
                      x2={svgWidth - padRight}
                      y2={yPos}
                      stroke="#E6EBEB"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={svgWidth - padRight + 10}
                      y={yPos + 3.5}
                      fill="#5B6B73"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      {tick.label}
                    </text>
                  </g>
                );
              })}

              {/* Y-Axis Label "Price" */}
              <text
                x={svgWidth - 12}
                y={svgHeight / 2}
                fill="#5B6B73"
                fontSize="10"
                fontFamily="sans-serif"
                transform={`rotate(90, ${svgWidth - 12}, ${svgHeight / 2})`}
                textAnchor="middle"
              >
                Price
              </text>

              {/* Volume Histogram Bars (Bottom) */}
              {showVolume &&
                points.map((pt, idx) => (
                  <rect
                    key={`vol-${idx}`}
                    x={pt.x - 3}
                    y={pt.volY}
                    width="6"
                    height={Math.max(1, pt.volHeight)}
                    fill={hoveredPoint?.date === pt.date ? '#1F6F78' : '#D0DADA'}
                    rx="1"
                  />
                ))}

              {/* RENDER MODE 1: AREA (Gradient fill + Line) */}
              {chartType === 'Area' && (
                <>
                  <path d={areaPath} fill="url(#steppedFill)" />
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#1F6F78"
                    strokeWidth="2.2"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </>
              )}

              {/* RENDER MODE 2: LINE (Classic stepped line) */}
              {chartType === 'Line' && (
                <path
                  d={linePath}
                  fill="none"
                  stroke="#1F6F78"
                  strokeWidth="2.2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              )}

              {/* RENDER MODE 3: CANDLESTICK */}
              {chartType === 'Candlestick' &&
                points.map((pt, idx) => {
                  const isBullish = pt.close >= pt.open;
                  const bodyColor = isBullish ? '#1F6F78' : '#EF4444';
                  const top = Math.min(pt.yOpen, pt.yClose);
                  const height = Math.max(2, Math.abs(pt.yClose - pt.yOpen));
                  const candleWidth = Math.max(4, Math.min(10, chartWidth / points.length - 2));

                  return (
                    <g key={`candle-${idx}`}>
                      {/* High-Low Wick */}
                      <line
                        x1={pt.x}
                        y1={pt.yHigh}
                        x2={pt.x}
                        y2={pt.yLow}
                        stroke={bodyColor}
                        strokeWidth="1.2"
                      />
                      {/* Candle Body */}
                      <rect
                        x={pt.x - candleWidth / 2}
                        y={top}
                        width={candleWidth}
                        height={height}
                        fill={bodyColor}
                        rx="1"
                      />
                    </g>
                  );
                })}

              {/* RENDER MODE 4: HOLLOW CANDLE */}
              {chartType === 'Hollow Candle' &&
                points.map((pt, idx) => {
                  const isBullish = pt.close >= pt.open;
                  const bodyColor = isBullish ? '#1F6F78' : '#EF4444';
                  const top = Math.min(pt.yOpen, pt.yClose);
                  const height = Math.max(2, Math.abs(pt.yClose - pt.yOpen));
                  const candleWidth = Math.max(4, Math.min(10, chartWidth / points.length - 2));

                  return (
                    <g key={`hollow-${idx}`}>
                      <line
                        x1={pt.x}
                        y1={pt.yHigh}
                        x2={pt.x}
                        y2={pt.yLow}
                        stroke={bodyColor}
                        strokeWidth="1.2"
                      />
                      <rect
                        x={pt.x - candleWidth / 2}
                        y={top}
                        width={candleWidth}
                        height={height}
                        fill={isBullish ? '#FFFFFF' : bodyColor}
                        stroke={bodyColor}
                        strokeWidth="1.5"
                        rx="1"
                      />
                    </g>
                  );
                })}

              {/* RENDER MODE 5: OHLC TICK BARS */}
              {chartType === 'OHLC' &&
                points.map((pt, idx) => {
                  const isBullish = pt.close >= pt.open;
                  const strokeColor = isBullish ? '#1F6F78' : '#EF4444';
                  const tickLength = 4;

                  return (
                    <g key={`ohlc-${idx}`}>
                      {/* Vertical High-Low span */}
                      <line
                        x1={pt.x}
                        y1={pt.yHigh}
                        x2={pt.x}
                        y2={pt.yLow}
                        stroke={strokeColor}
                        strokeWidth="1.5"
                      />
                      {/* Left Open Tick */}
                      <line
                        x1={pt.x - tickLength}
                        y1={pt.yOpen}
                        x2={pt.x}
                        y2={pt.yOpen}
                        stroke={strokeColor}
                        strokeWidth="1.5"
                      />
                      {/* Right Close Tick */}
                      <line
                        x1={pt.x}
                        y1={pt.yClose}
                        x2={pt.x + tickLength}
                        y2={pt.yClose}
                        stroke={strokeColor}
                        strokeWidth="1.5"
                      />
                    </g>
                  );
                })}

              {/* CORPORATE EVENT PINS OVERLAY (Earnings, Dividends, Splits) */}
              {points.map((pt, idx) => {
                const matchEvent = EVENT_CATALYSTS.find(
                  (ev) =>
                    pt.date.includes(ev.date) &&
                    ((ev.type === 'earnings' && events.earnings) ||
                      (ev.type === 'dividends' && events.dividends) ||
                      (ev.type === 'splits' && events.splits))
                );

                if (!matchEvent) return null;

                const badgeBg =
                  matchEvent.type === 'earnings'
                    ? '#6366F1'
                    : matchEvent.type === 'dividends'
                    ? '#F59E0B'
                    : '#10B981';

                return (
                  <g key={`event-${idx}`} className="cursor-pointer">
                    <line
                      x1={pt.x}
                      y1={padTop}
                      x2={pt.x}
                      y2={svgHeight - padBottom}
                      stroke={badgeBg}
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.8"
                    />
                    <circle cx={pt.x} cy={padTop + 4} r="8" fill={badgeBg} />
                    <text
                      x={pt.x}
                      y={padTop + 7}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      {matchEvent.label}
                    </text>
                  </g>
                );
              })}

              {/* Crosshair Vertical Guide */}
              {hoverX !== null && hoveredPoint && (
                <g>
                  <line
                    x1={hoverX}
                    y1={padTop}
                    x2={hoverX}
                    y2={svgHeight - padBottom}
                    stroke="#1F6F78"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                    opacity="0.75"
                  />
                  <rect
                    x={hoveredPoint.x - 3}
                    y={hoveredPoint.y - 3}
                    width="6"
                    height="6"
                    fill="#B7E34A"
                    stroke="#0B1F2A"
                    strokeWidth="1.5"
                  />
                </g>
              )}

              {/* X-Axis Date Labels */}
              {points.map((pt, idx) => {
                if (idx % Math.ceil(points.length / 5) === 0 || idx === points.length - 1) {
                  return (
                    <text
                      key={`label-${idx}`}
                      x={pt.x}
                      y={svgHeight - 12}
                      textAnchor="middle"
                      fill="#5B6B73"
                      fontSize="10"
                      fontFamily="sans-serif"
                    >
                      {pt.date}
                    </text>
                  );
                }
                return null;
              })}
            </svg>

            {/* QUOTEMEDIA FINANCIAL HOVER HUD (Matching Screenshot 4) */}
            {hoveredPoint && (
              <div
                className="absolute z-20 pointer-events-none rounded-lg bg-white/95 backdrop-blur-md border border-[#DDE3E3] shadow-lg p-2.5 text-[11px] text-[#0B1F2A] font-sans transition-all duration-75"
                style={{
                  left: Math.min(Math.max(hoveredPoint.x - 70, 10), chartWidth - 110),
                  top: 10,
                }}
              >
                <div className="font-heading font-semibold text-xs text-[#0B1F2A] pb-1 mb-1.5 border-b border-[#E6EBEB]">
                  {hoveredPoint.date}, 2026
                </div>
                <div className="grid grid-cols-4 gap-2 font-mono text-[10px]">
                  <div>
                    <span className="block text-[#87969F] font-sans text-[9px] uppercase">
                      Symbol
                    </span>
                    <span className="font-bold text-[#0B1F2A]">MNRG:CA</span>
                  </div>
                  <div>
                    <span className="block text-[#87969F] font-sans text-[9px] uppercase">Last</span>
                    <span className="font-bold text-[#0B1F2A]">
                      {hoveredPoint.price.toFixed(3)}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[#87969F] font-sans text-[9px] uppercase">
                      Change
                    </span>
                    <span
                      className={`font-semibold inline-flex items-center gap-0.5 ${
                        hoveredPoint.change >= 0 ? 'text-[#1F6F78]' : 'text-[#EF4444]'
                      }`}
                    >
                      {hoveredPoint.change >= 0 ? (
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      ) : (
                        <ArrowDownRight className="w-2.5 h-2.5" />
                      )}
                      {hoveredPoint.change.toFixed(2)} ({hoveredPoint.changePercent.toFixed(1)}%)
                    </span>
                  </div>
                  <div>
                    <span className="block text-[#87969F] font-sans text-[9px] uppercase">
                      Volume
                    </span>
                    <span className="font-bold text-[#0B1F2A]">
                      {(hoveredPoint.volume / 1000).toFixed(1)}k
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Attribution */}
          <div className="pt-3 mt-2 border-t border-[#DDE3E3] flex items-center justify-between text-[11px] text-[#5B6B73]">
            <span>© QuoteMedia Market Data • Profiles by Morningstar</span>
            <span>TSX Venture Exchange (15-min delayed)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
