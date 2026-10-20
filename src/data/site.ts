import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Monumental Energy',
  ticker: 'MNRG',
  exchange: 'TSX-V',
  tagline: 'Better energy for the future and today.',
  positioning: 'A junior resource company focused on near-term conventional energy production and strategic critical mineral exploration for the global transition.',
  headquarters: 'Vancouver, BC, Canada',
  contact: {
    address: 'Suite 228 - 1122 Mainland Street, Vancouver BC V6B 5L1',
    email: 'info@monumental.energy',
    phone: '+1-604-367-8117',
    hours: 'Monday – Friday: 8:30 AM – 5:00 PM (Pacific Time)',
    hoursVerified: false,
  },
  // UNVERIFIED: handles below were guessed in the original build and have not
  // been confirmed with the client. Set verified: true only after confirming.
  socials: [
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/monumental-energy', verified: false },
    { platform: 'x', label: 'X (Twitter)', url: 'https://twitter.com/MonumentalMNRG', verified: false },
    { platform: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@monumentalenergy', verified: false },
    { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/monumentalenergy', verified: false },
    { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/monumentalenergy', verified: false },
  ],
};
