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
    hours: 'Monday – Friday: Available by appointment / inquiry',
    hoursVerified: true,
  },
  // Authoritative company channels confirmed from official company disclosures (monumental.energy)
  socials: [
    { platform: 'x', label: 'X (Twitter)', url: 'https://x.com/MonumentalCorp', verified: true },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/monumental-minerals-corp', verified: true },
    { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/MonumentalEnergy/', verified: true },
    { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/monumentalenergy/', verified: true },
    { platform: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/channel/UCqre_awxR8r8r6CUP3GUFag', verified: true },
  ],
};
