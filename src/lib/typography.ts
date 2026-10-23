/**
 * Shared type scale, taken from the homepage (Hero, SectionHeading,
 * ProjectsGrid). Colour is applied separately so each style works on light
 * and dark sections. Pair headings with <KineticHeading> for the reveal.
 */
export const type = {
  /** Small uppercase label above a heading. */
  eyebrow: 'eyebrow block mb-3 font-heading font-semibold uppercase tracking-[0.12em] text-xs sm:text-sm',
  /** Inner-page title (h1). */
  h1: 'font-heading font-bold text-[2.125rem] sm:text-5xl lg:text-[54px] tracking-[-0.02em] leading-[1.1]',
  /** Section title (h2), as on the homepage. */
  h2: 'font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-[-0.02em] leading-[1.18]',
  /** Section title in a narrow column or a CTA band. */
  h2Compact: 'font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] tracking-[-0.02em] leading-[1.2]',
  /** Card and subsection title (h3). */
  h3: 'font-heading font-bold text-xl sm:text-2xl tracking-[-0.02em] leading-[1.2]',
  /** Small card title (h3/h4 inside dense cards). */
  h4: 'font-heading font-bold text-base sm:text-lg tracking-[-0.01em] leading-[1.3]',
  /** Intro paragraph under a page or section title. */
  lead: 'text-base sm:text-lg leading-[1.6]',
  /** Card and supporting copy. */
  body: 'text-sm sm:text-[15px] leading-relaxed',
} as const;

/** Text colours used with the scale above. */
export const tone = {
  eyebrowLight: 'text-[#1F6F78]',
  eyebrowDark: 'text-[#B7E34A]',
  headingLight: 'text-[#0B1F2A]',
  headingDark: 'text-white',
  mutedLight: 'text-[#5B6B73]',
  mutedDark: 'text-[#DDE3E3]/85',
} as const;
