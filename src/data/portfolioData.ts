export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  shortDescription: string;
  fullOverview: string;
  challenge: string;
  processSteps: { title: string; desc: string }[];
  keyFacts: { label: string; value: string; note?: string }[];
  outputs: string[];
  takeaway: string;
  imagePath: string;
  accentColor: string;
  accentBg: string;
  tagColor: string;
  composition: 'landscape' | 'portrait' | 'wide' | 'split' | 'editorial';
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
}

export interface ExposureItem {
  id: string;
  title: string;
  type: string;
  description: string;
}

export const SKILLS_LIST = [
  'MERCHANDISE PLANNING',
  'ASSORTMENT STRATEGY',
  'VISUAL MERCHANDISING',
  'STORE AUDITS',
  'PRODUCT PRESENTATION',
  'REPLENISHMENT',
  'CONSUMER THINKING',
  'BRAND STRATEGY',
  'COMPETITOR BENCHMARKING',
  'RETAIL OPERATIONS',
  'DESIGN THINKING',
  'ECOSYSTEM MAPPING',
];

export const PERSONAL_DATA = {
  name: 'Prashanthi B.',
  roleHeadline: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  credential: 'MBA — Fashion & Lifestyle Business Management',
  academicDetail: 'Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)',
  disciplines: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  intro: 'I bring a creative eye with a strong understanding of the business behind fashion.',
  aboutParagraphs: [
    'I’m Prashanthi B., currently pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027), following my BBA from ICFAI University (2020–2023).',
    'My interests sit across buying, merchandising, visual merchandising, retail operations, branding, and consumer behaviour.',
    'I enjoy understanding both sides of fashion — what catches attention visually and what makes a product, assortment or retail experience work commercially.'
  ],
  email: 'prashanthi.rbovilla@gmail.com',
  location: 'Bangalore / India',
  linkedin: 'https://www.linkedin.com/in/prashanthi-reddy-14771a244/',
  cvUrl: 'mailto:prashanthi.rbovilla@gmail.com?subject=CV Request - Prashanthi B.',
  images: {
    hero: '/images/prashanthi-hero.jpg',
    portrait01: '/images/prashanthi-hero.jpg',
    portrait02: '/images/prashanthi-hero.jpg',
    detail: '/images/prashanthi-hero.jpg'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bear-house',
    number: '01',
    title: 'THE BEAR HOUSE',
    subtitle: 'Retail in the Real World',
    category: 'Retail / Visual Merchandising / Merchandising',
    type: 'Retail Internship · Bangalore & Hyderabad',
    shortDescription: 'Hands-on visual merchandising, store operations, merchandise organization and retail execution across EBO and SIS formats.',
    fullOverview: 'An intensive 46-day visual merchandising internship across 7 high-traffic retail locations in Hyderabad and Bangalore, reviewing store presentation against VM guidelines, supporting 2 New Store Openings (NSO), and executing End of Season Sale (EOSS) transitions.',
    challenge: 'Maintaining consistent visual standards across diverse store formats while balancing merchandise presentation, product accessibility, replenishment and fast-paced floor changes — from established mall stores to new store setups.',
    processSteps: [
      {
        title: '01 / Store Audits & VM Standards',
        desc: 'Gained hands-on exposure to store-level VM audits and standards across EBO and SIS formats, observing merchandise presentation, displays, fixtures and overall store execution.'
      },
      {
        title: '02 / Mannequin Styling & Displays',
        desc: 'Styled mannequins and created complete looks, working with colour flow, product pairing and accessories to strengthen visual presentation across stores.'
      },
      {
        title: '03 / End of Season Sale Floor Setup',
        desc: 'Worked on EOSS floor changes, including merchandise reorganisation, size-wise product arrangement, display adjustments and replenishment to maintain an organised sales floor.'
      },
      {
        title: '04 / New Store Setup — NSO',
        desc: 'Worked on the visual merchandising setup for new store launches, including merchandise placement, fixture setup, mannequin styling and overall store presentation.'
      }
    ],
    keyFacts: [
      { label: 'Internship Duration', value: '46 Days', note: 'On-ground retail immersion' },
      { label: 'Store Footprint', value: '7 Retail Stores', note: 'Bangalore & Hyderabad EBO / SIS' },
      { label: 'New Store Openings', value: '2 Launches', note: 'Himayath Nagar & Tolichowki' },
      { label: 'Floor Execution', value: 'EOSS Setup', note: 'Size-wise floor organization' }
    ],
    outputs: [
      'Visual merchandising audit checklists and compliance standards',
      'Mannequin lookbooks and cross-category fixture coordination',
      'EOSS size-wise floor layout and wall execution',
      'NSO initial merchandise allocation and display setups'
    ],
    takeaway: 'Understanding how merchandise moves from stockroom to sales floor — and how space, presentation and organisation directly influence customer dwell time and conversion.',
    imagePath: '/images/prashanthi/bear-house/store-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'landscape'
  },
  {
    id: 'house-of-masaba',
    number: '02',
    title: 'HOUSE OF MASABA',
    subtitle: 'Assortment and Merchandising Strategy',
    category: 'Assortment Strategy / Merchandise Planning',
    type: 'Merchandise Planning & Assortment Strategy',
    shortDescription: 'A merchandise strategy case study for House of Masaba, focused on assortment planning, pricing architecture and product positioning, translating its distinctive brand identity into a commercially relevant offering for contemporary Indian consumers.',
    fullOverview: 'A merchandise strategy case study for House of Masaba, focused on assortment planning, pricing architecture and product positioning, translating its distinctive brand identity into a commercially relevant offering for contemporary Indian consumers.',
    challenge: 'Translate House of Masaba’s bold, distinctive brand identity into a commercially viable assortment — balancing SKU breadth, category mix, pricing and size ratios to create a focused and market-relevant merchandise plan.',
    processSteps: [
      {
        title: '01 Assortment Planning',
        desc: 'Structured a focused commercial assortment balancing core, fashion and novelty styles across everyday and occasion wear.'
      },
      {
        title: '02 Pricing Architecture',
        desc: 'Defined clear pricing bands and margin benchmarks to maintain commercial viability while preserving brand prestige.'
      },
      {
        title: '03 Product Positioning & Sizing',
        desc: 'Calibrated size ratios and category mix to ensure high sell-through and minimize broken-size inventory.'
      },
      {
        title: '04 Visual & Retail Integration',
        desc: 'Integrated brand storytelling and visual merchandising principles to create a cohesive in-store product narrative.'
      }
    ],
    keyFacts: [
      { label: 'Verified Styles', value: '112 Styles', note: 'Across 5 core categories' },
      { label: 'Total Assortment', value: '1,008 SKUs', note: 'Structured SKU breadth' },
      { label: 'Price Architecture', value: '₹7.5K – ₹65K', note: 'Tiered commercial bands' },
      { label: 'Target Margin', value: '40% – 60%', note: 'Baseline profitability' }
    ],
    outputs: [
      '5 Core Categories: Festive Bias, High-End Prêt, Wedding Guest, Heritage Remix Lab, Print Your Personality',
      '112 styles across 1,008 total SKUs',
      'Tiered pricing architecture (₹7.5K–₹65K) and commercial margin guidelines',
      'Size ratio planning (XS–XL) and inventory balance recommendations'
    ],
    takeaway: 'Where bold cultural codes meet thoughtful merchandise strategy — turning brand identity into a cohesive product story.',
    imagePath: '/images/prashanthi/projects/masaba-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'wide'
  },
  {
    id: 'healing-the-wait',
    number: '03',
    title: 'HEALING THE WAIT',
    subtitle: 'Designing for a Human Experience',
    category: 'Design Thinking / Service Design',
    type: 'Design Thinking Case Study',
    shortDescription: 'Transforming the healthcare waiting room experience through human-centered research, a 28-page publication, and the Heal Queue app concept.',
    fullOverview: 'A design thinking research project addressing the emotional anxiety and friction of indeterminate hospital waiting times through empathetic patient studies, editorial publication design, and a digital queue management concept.',
    challenge: 'Hospital waiting rooms frequently amplify anxiety, boredom, and frustration due to uncertainty around consultation timing and complete opacity in waiting areas.',
    processSteps: [
      {
        title: '01 — Empathize',
        desc: 'Conducted primary research across OPD waiting environments, combining field observations and patient/caregiver conversations to uncover key stress points.'
      },
      {
        title: '02 — Define',
        desc: 'Synthesized research findings into key themes around boredom, uncertainty and frustration, identifying waiting-time anxiety as a central experience gap.'
      },
      {
        title: '03 — Ideate',
        desc: 'Explored digital and experiential interventions to make waiting more transparent, engaging, and reassuring.'
      },
      {
        title: '04 — Prototype',
        desc: 'Developed the Heal Queue app concept with appointments, live queue tracking, tests, prescriptions, and patient assistance.'
      },
      {
        title: '05 — Test',
        desc: 'Gathered user feedback to refine information clarity, usability, and the overall waiting experience.'
      }
    ],
    keyFacts: [
      { label: 'Patient Boredom', value: '66%', note: 'Uncovered in patient conversations' },
      { label: 'Wait Anxiety', value: '60%', note: 'From uncertain delay times' },
      { label: 'Situational Frustration', value: '40%', note: 'Key experience gap identified' },
      { label: 'Research Publication', value: '28 Pages', note: 'Coffee table research book' }
    ],
    outputs: [
      '28-page research coffee table book documenting patient waiting psychology',
      'Heal Queue App: live queue tracking, appointments, and token status',
      'Patient experience mapping across registration, waiting, and pharmacy'
    ],
    takeaway: 'Information reduces anxiety. By replacing opacity with transparent digital tracking and thoughtful communication, perceived wait time is radically diminished.',
    imagePath: '/images/prashanthi/projects/healing-wait-01.jpg',
    accentColor: '#A87578',
    accentBg: '#141211',
    tagColor: 'bg-dustyRose/20 text-ivory',
    composition: 'portrait'
  },
  {
    id: 'sutra-edit',
    number: '04',
    title: 'SUTRA EDIT',
    subtitle: 'India’s fashion intelligence platform for sharper brand decisions.',
    category: 'Fashion Intelligence / Brand Strategy',
    type: 'Fashion Intelligence Platform Concept',
    shortDescription: 'Sutra Edit brings together market intelligence, founder community and strategic consulting to help emerging fashion and lifestyle brands understand what’s changing, why it matters, and what to do next.',
    fullOverview: 'A business concept built around retail intelligence for emerging Indian D2C and lifestyle brands, connecting content, community and consulting with a focus on local sourcing and retail realities.',
    challenge: 'India’s emerging fashion founders lack accessible, India-specific business intelligence and expert guidance to turn industry signals into sharper brand decisions.',
    processSteps: [
      {
        title: '01 — Market Gap',
        desc: 'Mapped the gap between global fashion intelligence platforms and the contextual needs of India’s emerging fashion founders.'
      },
      {
        title: '02 — Platform Architecture',
        desc: 'Built a three-part model around The Weekly Edit, The Dashboard and 1:1 Consulting.'
      },
      {
        title: '03 — Value Proposition',
        desc: 'Defined a progression from accessible industry intelligence to premium insights and strategic advisory.'
      },
      {
        title: '04 — Business Model',
        desc: 'Developed a tiered revenue model spanning Starter, Pro and Premium, supported by subscriptions and consulting.'
      },
      {
        title: '05 — Go-to-Market',
        desc: 'Outlined a launch strategy centred on founder-led content, industry intelligence, community building and strategic partnerships.'
      }
    ],
    keyFacts: [
      { label: 'Core Market', value: 'India D2C Fashion', note: 'Contextual retail focus' },
      { label: 'Business Verticals', value: 'Intelligence · Community · Consulting', note: '3-part platform architecture' },
      { label: 'Revenue Model', value: 'Subscription · Retainer', note: 'Tiered monetization' },
      { label: 'Platform Scope', value: 'Industry Intelligence', note: 'Signals to sharper brand decisions' }
    ],
    outputs: [
      'India-first fashion intelligence platform for emerging founders',
      'The Weekly Edit — curated business, market and trend intelligence',
      'The Dashboard — trend prediction, competitor mapping and pricing benchmarks',
      '1:1 Consulting model covering brand strategy, GTM, and channel expansion',
      'Tiered subscription architecture across Starter, Pro and Premium'
    ],
    takeaway: 'Turning fragmented fashion signals into intelligence founders can act on.',
    imagePath: '/images/prashanthi/projects/sutra-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'editorial'
  },
  {
    id: 'beyond-the-boutique',
    number: '05',
    title: 'BEYOND THE BOUTIQUE',
    subtitle: 'Designing a phygital luxury ecosystem where heritage, technology and human clienteling meet.',
    category: 'Luxury Ecosystem / Omnichannel Strategy',
    type: 'Bvlgari Phygital Strategy Case Study',
    shortDescription: 'Designing a phygital luxury ecosystem where heritage, technology and human clienteling meet — exploring how Bvlgari can extend its Maison experience into the digital world while retaining its exclusivity.',
    fullOverview: 'A strategic exploration of how Bvlgari can bridge its heritage-led physical experience with digital innovation—without compromising the exclusivity of luxury.',
    challenge: 'Luxury is no longer experienced only inside the boutique. Consumers increasingly discover, research and engage with brands digitally, creating a need for a more connected online–offline journey. The challenge was to explore: How can Bvlgari extend its Maison experience into the digital world while retaining its human touch and sense of exclusivity?',
    processSteps: [
      {
        title: '01 — Journey Mapping',
        desc: 'Mapped the luxury customer journey from digital discovery to post-purchase engagement across physical and virtual touchpoints.'
      },
      {
        title: '02 — Technological Enablers',
        desc: 'Identified opportunities to integrate AI clienteling, AR virtual try-on, unified CRM, and Digital Product Passports.'
      },
      {
        title: '03 — Strategic Ecosystem',
        desc: 'Developed the Bvlgari Phygital Luxury Ecosystem connecting Discover → Explore → Experience → Purchase → Own → Re-engage.'
      },
      {
        title: '04 — Clienteling & Exclusivity',
        desc: 'Positioned technology as an extension of the Maison experience, augmenting human luxury service rather than replacing it.'
      }
    ],
    keyFacts: [
      { label: 'Brand Focus', value: 'Bvlgari Maison', note: 'Luxury jewellery & heritage' },
      { label: 'Strategic Model', value: 'Phygital Ecosystem', note: 'Heritage + Digital Innovation' },
      { label: 'Journey Stages', value: '6 Touchpoints', note: 'Discover to Re-engage' },
      { label: 'Core Principle', value: 'Human Touch', note: 'Exclusivity preserved' }
    ],
    outputs: [
      'AI for personalised recommendations and clienteling',
      'AR for immersive product discovery and virtual try-on',
      'CRM for a unified customer view across touchpoints',
      'Digital Product Passports for authentication and ownership',
      'Omnichannel retail connecting digital and physical experiences'
    ],
    takeaway: 'Technology should not make luxury more digital. It should make the luxury relationship more seamless, personal and enduring.',
    imagePath: '/images/prashanthi/projects/bvlgari-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'wide'
  },
  {
    id: '3am-india',
    number: '06',
    title: '3AM INDIA',
    subtitle: 'Building Digital Consumer Engagement',
    category: 'Digital Strategy & Consumer Engagement',
    type: 'Digital Brand Strategy Case Study',
    shortDescription: 'A digital brand and consumer engagement strategy for 3AM India, focusing on simplified skincare communication, science + nature ingredient transparency, and building an engaged digital community.',
    fullOverview: '3AM India positions itself around clean, simple, effective skincare at the intersection of science and nature. This project explores building accessible consumer communication and an education-first digital strategy that drove a +13% growth in community engagement.',
    challenge: 'Skincare routines are often cluttered and confusing for modern consumers. The challenge was to simplify ingredient communication, demystify skincare education, and turn digital interactions into authentic, high-retention consumer connection.',
    processSteps: [
      {
        title: '01 Research & Consumer Insight',
        desc: 'Investigated consumer friction around skincare complexity, identifying the need for clear, jargon-free formulation transparency.'
      },
      {
        title: '02 Content & Brand Architecture',
        desc: 'Formulated the Research → Simplify → Create → Connect framework for accessible skincare storytelling.'
      },
      {
        title: '03 Community Engagement Growth',
        desc: 'Executed educational campaigns resulting in measurable community growth from 15K to 17K (+13%).'
      },
      {
        title: '04 Digital Touchpoint Optimization',
        desc: 'Designed seamless digital touchpoints connecting product discovery with transparent ingredient breakdowns.'
      }
    ],
    keyFacts: [
      { label: 'Community Growth', value: '15K → 17K', note: '+13% engagement expansion' },
      { label: 'Brand Philosophy', value: 'Science + Nature', note: 'Plant-based & effective' },
      { label: 'Strategic Model', value: '4-Stage Framework', note: 'Research → Connect' },
      { label: 'Core Mission', value: 'Simplified Skincare', note: 'Accessible digital education' }
    ],
    outputs: [
      'Digital consumer engagement framework (Research → Simplify → Create → Connect)',
      'Ingredient transparency and educational content strategy',
      'Community growth loop (15K to 17K engaged consumer base)',
      'Digital touchpoint architecture for clean skincare communication'
    ],
    takeaway: 'Simplifying complex skincare communication into clear, trustworthy consumer connection.',
    imagePath: '/images/prashanthi/projects/masaba-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'split'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'bear-house',
    period: '2024',
    company: 'The Bear House',
    role: 'Visual Merchandising Intern',
    location: 'Hyderabad & Bangalore',
    type: 'Retail Internship (46 Days)',
    description: 'Hands-on visual merchandising internship across 7 retail locations covering EBO and SIS formats, store visual audits, floor replenishment, 2 New Store Openings (NSO), and EOSS transitions.',
    highlights: [
      'Conducted visual merchandising store audits across 7 locations',
      'Executed full floor setup for 2 New Store Openings (Himayath Nagar, Tolichowki)',
      'Organised End of Season Sale (EOSS) size-wise grids and shorts wall presentation',
      'Maintained mannequin styling, fixture standards, and stockroom-to-floor replenishment'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'pearl-academy',
    period: '2025 – 2027',
    degree: 'MBA — Fashion & Lifestyle Business Management',
    institution: 'Pearl Academy',
    location: 'Bangalore, India',
    status: 'In Progress'
  },
  {
    id: 'icfai',
    period: '2020 – 2023',
    degree: 'BBA — Bachelor of Business Administration',
    institution: 'ICFAI University',
    location: 'Hyderabad, India',
    status: 'Completed'
  }
];

export const EXPOSURES_DATA: ExposureItem[] = [
  {
    id: 'miss-karnataka',
    title: 'Miss Karnataka Grand',
    type: 'Fashion Production Exposure',
    description: 'Backstage runway coordination, model styling assistance, and live show communication across event rounds.'
  },
  {
    id: 'pvr-inox',
    title: 'PVR INOX × Timbukdo Cine Career Program',
    type: '4-Day Industry Immersion',
    description: 'Cinema operations, F&B/concession operations, revenue management, audience engagement, and quality assurance.'
  }
];
