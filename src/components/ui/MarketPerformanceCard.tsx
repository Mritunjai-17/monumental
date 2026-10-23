'use client';

import React, { useState, useMemo } from 'react';
import { marketQuoteData, chartHistoricalData, ChartPoint } from '@/data/investors';
import { TrendingUp, ExternalLink, ChevronDown } from 'lucide-react';

interface ComputedChartPoint extends ChartPoint {
  x: number;
  y: number;
  volY: number;
  volHeight: number;
}

export function MarketPerformanceCard() {
  const [timeframe, setTimeframe] = useState<string>('5D');
  const [hoveredPoint, setHoveredPoint] = useState<ComputedChartPoint | null>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [showVolume, setShowVolume] = useState<boolean>(true);

  const rawData: ChartPoint[] = chartHistoricalData[timeframe] || chartHistoricalData['5D'];

  // SVG dimensions for chart
  const svgWidth = 620;
  const svgHeight = 240;
  const padLeft = 15;
  const padRight = 55;
  const padTop = 20;
  const padBottom = 35;
  const chartWidth = svgWidth - padLeft - padRight;
  const chartHeight = svgHeight - padTop - padBottom;

  const { minPrice, maxPrice, maxVolume, points } = useMemo(() => {
    const prices = rawData.map((d) => d.price);
    const volumes = rawData.map((d) => d.volume);
    // Discrete financial price rounding
    const minP = 0.06;
    const maxP = 0.085;
    const maxV = Math.max(...volumes) || 1;

    const computed = rawData.map((d, i) => {
      const x = padLeft + (i / (rawData.length - 1)) * chartWidth;
      const y = padTop + chartHeight - ((d.price - minP) / (maxP - minP)) * chartHeight;
      const volHeight = (d.volume / maxV) * 38;
      const volY = svgHeight - padBottom - volHeight;
      return { ...d, x, y, volY, volHeight };
    });

    return { minPrice: minP, maxPrice: maxP, maxVolume: maxV, points: computed };
  }, [rawData, chartHeight, chartWidth]);

  // Real Financial Stepped Line Path (QuoteMedia / TradingView style)
  const linePath = useMemo(() => {
    if (points.length === 0) return '';
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      // Step horizontally to curr.x, then step vertically to curr.y
      path += ` L ${curr.x} ${prev.y} L ${curr.x} ${curr.y}`;
    }
    return path;
  }, [points]);

  // Stepped Area Path
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

  // Y-axis price levels: 0.08, 0.07, 0.06
  const yTicks = [
    { label: '0.08', price: 0.08 },
    { label: '0.07', price: 0.07 },
    { label: '0.06', price: 0.06 },
  ];

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
    setHoverX(nearest.x);
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
    setHoverX(null);
  };

  return (
    <div className="bg-white rounded-[20px] lg:rounded-[24px] border border-[#DDE3E3] p-6 sm:p-8 lg:p-9 shadow-sm mb-10 sm:mb-14">
      {/* =========================================================
          TOP QUOTEMEDIA TICKER & PRICE STRIP
         ========================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#DDE3E3] mb-6">
        <div>
          {/* Symbol & Exchange */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="font-heading font-bold text-sm text-[#0B1F2A] tracking-wider uppercase">
              {marketQuoteData.symbol}
            </span>
            <span className="text-xs text-[#5B6B73]">|</span>
            <span className="text-xs text-[#5B6B73] font-medium">
              {marketQuoteData.exchange}
            </span>
          </div>

          {/* Big Price Display */}
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="font-heading font-bold text-4xl sm:text-5xl text-[#0B1F2A] tracking-tight">
              ${marketQuoteData.price.toFixed(2)}
            </span>
            <span className="text-sm font-heading font-semibold text-[#5B6B73]">
              {marketQuoteData.change >= 0 ? '+' : ''}{marketQuoteData.change.toFixed(2)} ({marketQuoteData.changePercent.toFixed(2)}%)
            </span>
          </div>

          {/* Bid/Ask & Trading Particulars */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5B6B73]">
            <span>
              Bid: <strong className="font-mono text-[#0B1F2A] font-semibold">{marketQuoteData.bid.toFixed(2)}</strong> x {marketQuoteData.bidSize.toLocaleString()}
            </span>
            <span className="text-[#DDE3E3]">•</span>
            <span>
              Ask: <strong className="font-mono text-[#0B1F2A] font-semibold">{marketQuoteData.ask.toFixed(2)}</strong> x {marketQuoteData.askSize.toLocaleString()}
            </span>
            <span className="text-[#DDE3E3]">•</span>
            <span>
              Volume: <strong className="font-mono text-[#0B1F2A] font-semibold">{marketQuoteData.volume.toLocaleString()}</strong>
            </span>
          </div>

          <div className="text-[11px] text-[#5B6B73] mt-1.5 flex flex-wrap items-center gap-2 font-mono">
            <span>{marketQuoteData.timestamp}</span>
            <span>•</span>
            <span className="uppercase">{marketQuoteData.currency} | DELAYED PRICE | MARKET CLOSED</span>
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
          MAIN DUAL COLUMN: DETAILED QUOTE (LEFT) & STEPPED CHART (RIGHT)
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* LEFT COLUMN: DETAILED QUOTE MATRIX (16 Indicators) */}
        <div className="lg:col-span-5 bg-[#F5F6F1] rounded-2xl border border-[#DDE3E3] p-5 sm:p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DDE3E3]">
            <h3 className="font-heading font-bold text-sm text-[#0B1F2A]">
              Detailed Quote
            </h3>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#5B6B73]">
              QuoteMedia Feed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Last</span>
              <span className="font-mono font-bold text-[#0B1F2A]">{marketQuoteData.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Volume</span>
              <span className="font-mono font-bold text-[#0B1F2A]">10.00k</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Open</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.open.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Prev. Close</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.prevClose.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">High</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.high.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Low</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.low.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Bid</span>
              <span className="font-mono font-semibold text-[#1F6F78]">{marketQuoteData.bid.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Ask</span>
              <span className="font-mono font-semibold text-[#0B1F2A]">{marketQuoteData.ask.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Bid Size</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.bidSize.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Ask Size</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.askSize.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Beta</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.beta}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">VWAP</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.vwap.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Year High</span>
              <span className="font-mono font-semibold text-[#1F6F78]">${marketQuoteData.yearHigh}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Year Low</span>
              <span className="font-mono text-[#5B6B73]">${marketQuoteData.yearLow}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Market Cap</span>
              <span className="font-mono font-semibold text-[#0B1F2A]">${marketQuoteData.marketCap}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Total Shares</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.totalShares}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">P/B Ratio</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.pbRatio}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-[#E6EBEB]">
              <span className="text-[#5B6B73]">Shares Out</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.sharesOut}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-[#5B6B73]">EPS</span>
              <span className="font-mono text-[#0B1F2A]">${marketQuoteData.eps}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-[#5B6B73]">Escrow Shares</span>
              <span className="font-mono text-[#0B1F2A]">{marketQuoteData.escrowShares}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REAL FINANCIAL STEPPED STOCK CHART */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          {/* Toolbar: Timeframe Selector & Options Dropdowns */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-2 border-b border-[#DDE3E3]">
            {/* Ticker Symbol Pill */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F6F78]" />
              <span className="text-xs font-heading font-semibold text-[#0B1F2A]">
                MNRG.CA
              </span>
            </div>

            {/* Timeframe Selector Pills */}
            <div className="flex items-center max-w-full overflow-x-auto bg-[#F5F6F1] p-1 rounded-lg border border-[#DDE3E3]">
              {['1D', '5D', '1M', '3M', '6M', 'YTD', '1Y'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`shrink-0 min-w-11 min-h-11 px-2.5 rounded-md text-xs font-heading font-semibold transition-all ${
                    timeframe === tf
                      ? 'bg-[#0B1F2A] text-white shadow-sm'
                      : 'text-[#5B6B73] hover:text-[#0B1F2A]'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Volume Toggle */}
            <button
              onClick={() => setShowVolume((prev) => !prev)}
              className={`min-h-11 px-3 rounded-md text-xs font-heading font-semibold transition-colors border ${
                showVolume
                  ? 'border-[#1F6F78] text-[#1F6F78] bg-[#1F6F78]/10'
                  : 'border-[#DDE3E3] text-[#5B6B73]'
              }`}
            >
              Volume {showVolume ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Subhead Frequency */}
          <div className="flex items-center justify-between text-[11px] text-[#5B6B73] mb-1 px-1">
            <span>
              Frequency: <strong className="text-[#0B1F2A]">DAILY</strong> ({timeframe} Performance Window)
            </span>
            {hoveredPoint ? (
              <span className="text-[#1F6F78] font-mono font-semibold">
                {hoveredPoint.date} • ${hoveredPoint.price.toFixed(3)} • Vol: {hoveredPoint.volume.toLocaleString()}
              </span>
            ) : (
              <span>Hover chart for trade crosshairs</span>
            )}
          </div>

          {/* Stepped Financial SVG Chart */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] min-h-[220px] bg-white border border-[#DDE3E3] rounded-xl p-2">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-full select-none cursor-crosshair overflow-visible"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <defs>
                <linearGradient id="steppedFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F6F78" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#1F6F78" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Horizontal Gridlines & Right Y-Axis Labels */}
              {yTicks.map((tick, idx) => {
                const yPos = padTop + chartHeight - ((tick.price - minPrice) / (maxPrice - minPrice)) * chartHeight;
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
                    key={idx}
                    x={pt.x - 3}
                    y={pt.volY}
                    width="6"
                    height={pt.volHeight}
                    fill={hoveredPoint?.date === pt.date ? '#1F6F78' : '#D0DADA'}
                    rx="1"
                  />
                ))}

              {/* Stepped Area Gradient Fill */}
              <path d={areaPath} fill="url(#steppedFill)" />

              {/* Real Financial Stepped Price Line */}
              <path
                d={linePath}
                fill="none"
                stroke="#1F6F78"
                strokeWidth="2.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />

              {/* Interactive Crosshair & Tooltip */}
              {hoverX !== null && hoveredPoint && (
                <g>
                  {/* Vertical Crosshair Line */}
                  <line
                    x1={hoverX}
                    y1={padTop}
                    x2={hoverX}
                    y2={svgHeight - padBottom}
                    stroke="#1F6F78"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                    opacity="0.7"
                  />

                  {/* Active Point Square */}
                  <rect
                    x={hoveredPoint.x - 3.5}
                    y={hoveredPoint.y - 3.5}
                    width="7"
                    height="7"
                    fill="#B7E34A"
                    stroke="#0B1F2A"
                    strokeWidth="1.5"
                  />

                  {/* Floating Price Pill */}
                  <g transform={`translate(${Math.min(hoverX, svgWidth - 85)}, ${Math.max(hoveredPoint.y - 25, 12)})`}>
                    <rect
                      x="-35"
                      y="-12"
                      width="70"
                      height="20"
                      rx="4"
                      fill="#0B1F2A"
                      stroke="#1F6F78"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="2"
                      textAnchor="middle"
                      fill="#B7E34A"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      ${hoveredPoint.price.toFixed(3)}
                    </text>
                  </g>
                </g>
              )}

              {/* X-Axis Date Labels */}
              {points.map((pt, idx) => {
                if (idx % Math.ceil(points.length / 5) === 0 || idx === points.length - 1) {
                  return (
                    <text
                      key={idx}
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
