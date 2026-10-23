export interface AreaOfFocus {
  label: string;
  icon:
    | 'trending-up'
    | 'handshake'
    | 'users'
    | 'file-text'
    | 'shield-check'
    | 'scale'
    | 'building'
    | 'coins'
    | 'briefcase'
    | 'wrench'
    | 'workflow';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: 'leadership' | 'advisory';
  image?: string;
  initials?: string;
  credentials?: string;
  linkedinUrl?: string;
  areasOfFocus: AreaOfFocus[];
  bio: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  // =========================================================
  // 1. BOARD & MANAGEMENT
  // =========================================================
  {
    id: 'maximilian-sali',
    name: 'Maximilian Sali',
    role: 'CEO, VP Corporate Development & Director',
    group: 'leadership',
    image: '/images/team/maximilian-sali.jpg',
    initials: 'MS',
    linkedinUrl: 'https://www.linkedin.com/in/maximilian-sali-7a710134/',
    areasOfFocus: [
      { label: 'Corporate Development', icon: 'trending-up' },
      { label: 'Strategic Partnerships', icon: 'handshake' },
      { label: 'Capital Markets', icon: 'users' },
    ],
    bio: [
      'Maximilian Sali has been in the capital markets since 2009 managing family assets both public and private. He is the president of Baccarat Investments Inc., a private investment company providing consulting, M&A and management services to public and private companies.',
      'Mr. Sali was corporate development and a founding shareholder of Advantage Lithium Corp which was acquired by producing lithium company Orocobre, now Allkem for $69 million in February 2020. Mr. Sali is the founder, director and former CEO of Defense Metals Corp. (TSXV: DEFN) a rare earth company that recently completed a PEA on its Wicheeda LREE deposit in British Columbia. He is the founder, director and former CEO of New Placer Dome Gold Corp which was acquired by Copaur Minerals in May 2022.',
    ],
  },
  {
    id: 'ryan-cheung',
    name: 'Ryan Cheung, CPA, CA',
    role: 'CFO & Director',
    group: 'leadership',
    image: '/images/team/ryan-cheung.jpg',
    initials: 'RC',
    credentials: 'CPA, CA',
    linkedinUrl: 'https://www.linkedin.com',
    areasOfFocus: [
      { label: 'Financial Reporting', icon: 'file-text' },
      { label: 'Regulatory Compliance', icon: 'shield-check' },
      { label: 'Corporate Governance', icon: 'scale' },
    ],
    bio: [
      'Ryan Cheung, CPA, CA, provides accounting, management, securities regulatory compliance services to private and public-listed companies. Mr. Cheung also serves as an officer and/or director of a number of publicly-listed companies.',
      'Mr. Cheung holds a Bachelor of Commerce degree from the University of Victoria and is a member of the Chartered Professional Accountants of British Columbia.',
    ],
  },
  {
    id: 'chris-mackay',
    name: 'Chris Mackay',
    role: 'Director',
    group: 'leadership',
    image: '/images/team/chris-mackay.png',
    initials: 'CM',
    linkedinUrl: 'https://www.linkedin.com',
    areasOfFocus: [
      { label: 'Real Estate & Finance', icon: 'building' },
      { label: 'Asset Acquisition', icon: 'coins' },
      { label: 'Commercial Development', icon: 'briefcase' },
    ],
    bio: [
      'Chris Mackay is the CEO of Strand Finance (a division STRAND). Strand development and finance is a Vancouver-based finance, development, and investment company active across North America. Since 1976, Strand has acquired, developed, and financed a portfolio of real estate assets valued at over $16 billion, comprised of over 47,000 homes.',
      'Strand has been actively involved in many real estate sectors, including the acquisition of development sites, the development of high‐rise condominiums, multi-family apartment buildings, single family communities, office towers, and industrial projects, as well as providing financing to developers for residential and commercial developments throughout North America.',
    ],
  },
  {
    id: 'bill-treuren',
    name: 'Bill Treuren',
    role: 'Audit Committee & Director',
    group: 'leadership',
    image: '/images/team/bill-treuren.jpg',
    initials: 'BT',
    linkedinUrl: 'https://www.linkedin.com',
    areasOfFocus: [
      { label: 'Upstream Engineering', icon: 'wrench' },
      { label: 'Pipeline & Infrastructure', icon: 'workflow' },
      { label: 'Operational Excellence', icon: 'shield-check' },
    ],
    bio: [
      'Bill Treuren brings more than 30 years of experience in the oil and gas industry, with a deep and diverse background across all key operational areas.',
      'Bill has held senior engineering and project management roles with major upstream and midstream companies, where he was instrumental in the design, construction, and optimization of critical infrastructure. His proven ability to navigate challenging technical environments and regulatory frameworks makes him an invaluable resource for advancing operational excellence.',
    ],
  },

  // =========================================================
  // 2. TECHNICAL ADVISORY BOARD
  // =========================================================
  {
    id: 'mark-saxon',
    name: 'Mark Saxon, FAusIMM, MAIG',
    role: 'Senior Technical Advisor',
    group: 'advisory',
    initials: 'MS',
    credentials: 'FAusIMM, MAIG, B.Sc. (Hons)',
    linkedinUrl: 'https://www.linkedin.com',
    areasOfFocus: [
      { label: 'Critical Raw Materials', icon: 'coins' },
      { label: 'REE Deposits & Exploration', icon: 'workflow' },
      { label: 'Discovery & Processing', icon: 'wrench' },
    ],
    bio: [
      'Mr. Saxon brings thirty years of experience in the resources industry, representing junior and senior companies in Australia, Canada and Europe. An Honours BSc graduate in Geology from the University of Melbourne, he received a Graduate Diploma of Applied Finance and Investment in 2007.',
      'Mr. Saxon’s experience covers most facets of the exploration and mining business in a wide range of geological environments, with a particular focus on discovery, processing, marketing and the political context of critical raw materials. Mr. Saxon has extensive experience in the exploration of peralkaline REE deposits.',
    ],
  },
  {
    id: 'cal-everett',
    name: 'Cal Everett, B.Sc.',
    role: 'Technical Advisor',
    group: 'advisory',
    initials: 'CE',
    credentials: 'B.Sc. Economic Geology',
    linkedinUrl: 'https://www.linkedin.com',
    areasOfFocus: [
      { label: 'Resource Capital Markets', icon: 'trending-up' },
      { label: 'Exploration Geology', icon: 'workflow' },
      { label: 'Institutional Resource Sales', icon: 'users' },
    ],
    bio: [
      'Mr. Everett is a geologist with more than 20 years of surface and underground exploration experience with senior mining companies. He moved to the financial sector in 1990 and spent 12 years with BMO Nesbitt Burns focused on resource equities, and seven years with PI Financial Corp. in senior resource institutional sales and capital markets.',
      'From 2008 to 2015, he was President and Chief Executive Officer of Axemen Resource Capital. Mr. Everett holds a Bachelor of Science degree in Economic Geology from the University New Brunswick. Mr. Everett is currently Chief Executive Officer and president of Liberty Gold Corp. (TSXV: LGD).',
    ],
  },
  {
    id: 'frits-reidel',
    name: 'Frits Reidel, CPG',
    role: 'Senior Lithium Technical Advisor, Chile',
    group: 'advisory',
    initials: 'FR',
    credentials: 'CPG, PC, QP / CP (NI 43-101 / JORC)',
    linkedinUrl: 'https://www.linkedin.com',
    areasOfFocus: [
      { label: 'Lithium Brine Evaluation', icon: 'coins' },
      { label: 'Hydrogeology & Dewatering', icon: 'wrench' },
      { label: 'NI 43-101 / JORC QP', icon: 'shield-check' },
    ],
    bio: [
      'Frits Reidel, CPG, has more than 30 years of working experience on water and infrastructure related projects for the mining industry in North and South America. As a hydrogeological consultant he has guided characterization programs, permitting, and construction of water supply, and open pit dewatering systems for several large-scale copper and gold mining projects in Argentina, Bolivia, Chile, Peru, United States and Venezuela.',
      'Frits also has extensive experience in the evaluation of brine resources and was closely involved with the initial resource evaluation and feasibility of Salar de Hombre Muerto (FMC) in 1992/1993; Member of the Technical Committee of Lithium Americas Corp for the exploration and brine resource evaluation of Salar de Cauchari in 2009/2010; participated in the resource evaluation for the Feasibility Study of Salar de Olaroz (Orocobre Ltd.) in 2010/2011.',
      'He is serving as QP on the Salar de Maricunga Lithium Project for Minera Salar Blanco / Lithium Power International since 2011, on the Cauchari JV for Advantage Lithium / Allkem since 2018, on the Ore Reserves of the Centenario Project for Eramet since 2021, on the Sal de Los Angeles Project for Tibet Summit Resource since 2016, and on the Pastos Grandes Project for Lithium Americas Corp since 2022.',
      'Frits is co-author of the ‘best practice guidelines for the estimation of brine resources and reserves’ prepared for the Chilean Mining Commission under Ley CH 20.235. Frits is a Certified Professional Geologist (CPG # 11454) with the AIPG; a registered competent person (PC # 390) with the Chilean Mining Commission, and QP / CP under NI 43-101 / JORC / CH 20.235. Frits is the founder and Managing Director of Atacama Water.',
    ],
  },
];
