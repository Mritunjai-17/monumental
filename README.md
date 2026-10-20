# Monumental Energy Corp. (TSX-V: MNRG) — Investor Portal

> **"Better energy for the future and today."**

A modern, credible, investor-focused website for **Monumental Energy**, a junior resource company headquartered in Vancouver, BC. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 1. Corporate Profile & Assets

- **Ticker:** TSX-V: MNRG
- **Headquarters:** Suite 228 - 1122 Mainland Street, Vancouver BC V6B 5L1
- **Contact:** info@monumental.energy | +1-604-367-8117
- **Core Dual-Pillar Strategy:**
  1. **Near-term oil & gas production in New Zealand:** Strategic equity & joint-venture holding in New Zealand Energy Corp. (NZEC) targeting rapid recompletion and cashflow in the established Taranaki Basin.
  2. **Salar de Turi lithium project, Chile:** Strategic 2.0% Net Smelter Return (NSR) royalty across 8,500 hectares located directly inside the global "Lithium Triangle", with zero recurring exploration cash call liabilities.

---

## 2. Style Guide & Design Tokens

### Colors (Single Source of Truth)
All colors are defined as CSS variables in `src/styles/tokens.css` and mapped as Tailwind theme tokens in `tailwind.config.ts`. Hex values are strictly barred from being hardcoded in components.

| Token | Hex Value | Role & Usage Rules |
|---|---|---|
| `--color-primary` | `#0B1F2A` | Deep navy: headers, hero, footer, dark section backgrounds |
| `--color-secondary` | `#1F6F78` | Brine teal: links, icons, status tags, hover states |
| `--color-cta` | `#B7E34A` | Lime: **ALL primary CTA buttons**, key stat highlights. *Never used for large background areas.* |
| `--color-cta-hover`| `#A3CF36` | Subtle darkening on CTA button hover |
| `--color-cta-text` | `#0B1F2A` | Deep navy text on lime buttons (WCAG AA contrast compliant) |
| `--color-bg` | `#F5F6F1` | Warm off-white page background |
| `--color-surface` | `#FFFFFF` | Cards and elevated containers |
| `--color-border` | `#DDE3E3` | Subtle clean card and container borders |
| `--color-text` | `#16232B` | Primary body copy |
| `--color-text-muted`| `#5B6B73` | Secondary text, captions, timestamps |
| `--color-text-on-dark`| `#FFFFFF` | Text on dark navy backgrounds |

#### Section Background Alternation Rule
Strict adherence across pages:
$$\text{Navy} \longrightarrow \text{Off-White} \longrightarrow \text{White} \longrightarrow \text{Navy}$$

### Typography
- **Heading Font:** `Space Grotesk` (Google Fonts), weights 500 and 700.
- **Body Font:** `Inter` (Google Fonts), weights 400, 500, 600.
- **Strict Heading Rule:** Enforced globally in `src/app/globals.css`:
  ```css
  h1, h2, h3, h4, h5, h6, .heading { font-family: var(--font-heading) !important; }
  ```
  *No component may override a heading's font-family. No third font anywhere.*
- **Fluid Scale (CSS `clamp`):**
  - `h1`: 48px – 72px (`clamp(3rem, 2.2rem + 2.5vw, 4.5rem)`)
  - `h2`: 32px – 44px (`clamp(2rem, 1.6rem + 1.25vw, 2.75rem)`)
  - `h3`: 22px – 28px (`clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)`)
  - `body`: 16px – 18px (`clamp(1rem, 0.95rem + 0.2vw, 1.125rem)`)
  - `small`: 14px
- **Letter Spacing:** Headings `-0.02em`; Eyebrows `+0.12em` uppercase (still Space Grotesk).

### Buttons
1. **Primary CTA:**
   - Lime background (`#B7E34A`), deep navy text (`#0B1F2A`), weight 600, radius `10px`, padding `14px 28px`.
   - Subtle vertical lift (`-translate-y-0.5`) + shadow + color change on hover.
   - Visible focus ring for keyboard accessibility (`focus-visible:ring-[#B7E34A]`).
2. **Secondary Button:**
   - Transparent background with a `1.5px` teal border (`#1F6F78`).
   - On dark navy sections: white border (`border-white/80`).
   - Fills with teal (`#1F6F78`) and white text on hover.
3. **Text Link:**
   - Teal (`#1F6F78`) with an animated sliding underline on hover and arrow icon.

---

## 3. Project Architecture

```
monumental-energy/
├── public/
│   ├── documents/         # investor-presentation.pdf
│   ├── images/            # hero-bg.svg, project-new-zealand.svg, project-salar-de-turi.svg, og-image.svg
│   ├── videos/            # Strategy video files and posters
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── esg/page.tsx
│   │   ├── investors/
│   │   │   ├── agm/page.tsx
│   │   │   ├── page.tsx
│   │   │   └── presentation/page.tsx
│   │   ├── news/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── projects/
│   │   │   ├── new-zealand/page.tsx
│   │   │   ├── page.tsx
│   │   │   └── salar-de-turi/page.tsx
│   │   ├── globals.css    # Tokens & strict heading typography enforcement
│   │   ├── layout.tsx     # Fonts, Header, Footer, and global metadata
│   │   └── page.tsx       # Homepage
│   ├── components/
│   │   ├── forms/         # InvestorContactForm.tsx, NewsletterForm.tsx
│   │   ├── layout/        # Header.tsx, Footer.tsx, MobileMenu.tsx, TickerChip.tsx, PageHero.tsx
│   │   ├── sections/      # Hero, StatsStrip, ProjectsGrid, StrategyVideo, LatestNews, InvestorHub, ContactCTA, ProjectDetailView
│   │   └── ui/            # Button, Card, Badge, SectionHeading, Container, Input
│   ├── data/              # site.ts, navigation.ts, projects.ts, news.ts, stats.ts
│   ├── lib/               # utils.ts, seo.ts
│   ├── styles/            # tokens.css
│   └── types/             # index.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

All textual copy, dates, project specifications, and numbers reside exclusively in `/src/data` so they can be maintained without modifying components.

---

## 4. Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+ or pnpm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 5. Deployment

### Vercel (Recommended)
1. Push repository to GitHub or GitLab.
2. Import project into Vercel.
3. Next.js App Router defaults will automatically configure build settings (`npm run build`).

### Self-Hosted / Docker
Run the standalone Next.js server with:
```bash
npm run build
NODE_ENV=production npm run start
```
