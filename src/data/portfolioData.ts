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
  name: 'PRASHANTHI B.',
  roleHeadline: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  credential: 'MBA — Fashion & Lifestyle Business Management',
  academicDetail: 'Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)',
  disciplines: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  intro: 'I’m interested in where fashion, consumers and business intersect — from understanding what people want to creating the right product, experience and brand strategy to make it matter.',
  aboutParagraphs: [
    'I’m Prashanthi, currently pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027), following my BBA from ICFAI University (2020–2023).',
    'My interests sit across buying, merchandising, visual merchandising, retail operations, branding, and consumer behaviour.',
    'I enjoy understanding both sides of fashion — what catches attention visually and what makes a product, assortment or retail experience work commercially.'
  ],
  email: 'prashanthi.rbovilla@gmail.com',
  location: 'Bangalore / India',
  linkedin: 'https://www.linkedin.com/in/prashanthi-reddy-14771a244/',
  cvUrl: 'mailto:prashanthi.rbovilla@gmail.com?subject=CV Request - Prashanthi B',
  images: {
    hero: '/images/prashanthi/hero.jpg',
    portrait01: '/images/prashanthi/portrait-01.jpg',
    portrait02: '/images/prashanthi/portrait-02.jpg',
    detail: '/images/prashanthi/detail.jpg'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bear-house',
    number: '01',
    title: 'THE BEAR HOUSE',
    subtitle: 'Retail in the Real World',
    category: 'Retail / Visual Merchandising / Merchandising',
    type: '46-Day Industry Internship · Hyderabad & Bangalore',
    shortDescription: 'Hands-on exposure to visual merchandising, store operations, merchandise organisation and retail execution across EBO and SIS formats.',
    fullOverview: 'An intensive 46-day visual merchandising internship across 7 high-traffic retail locations in Hyderabad and Bangalore, reviewing store presentation against VM guidelines, supporting 2 New Store Openings (NSO), and executing End of Season Sale (EOSS) transitions.',
    challenge: 'Maintaining consistent visual standards across diverse store formats while balancing merchandise presentation, product accessibility, replenishment and fast-paced floor changes — from established mall stores to new store setups.',
    processSteps: [
      {
        title: '01 Store Audits & VM Standards',
        desc: 'Gained hands-on exposure to VM audits across 7 stores, reviewing store presentation against VM guidelines, including planogram adherence, hanger spacing, mannequin presentation, product placement, fixture consistency and overall visual standards.'
      },
      {
        title: '02 Merchandise Presentation',
        desc: 'Worked on product presentation and visual consistency across stores, including colour flow, category placement, fixture arrangement, mannequin styling and maintaining clear product visibility.'
      },
      {
        title: '03 EOSS Floor Transition',
        desc: 'Supported the End of Season Sale (EOSS) floor setup by reorganising merchandise into size-wise fixtures, improving product accessibility, arranging sale communication and supporting quick replenishment during high-volume'
      }
    ],
    keyFacts: [
      { label: 'Internship Duration', value: '46 Days', note: 'Intensive on-ground retail immersion' },
      { label: 'Store Footprint', value: '7 Retail Stores', note: 'Bangalore & Hyderabad EBO / SIS' },
      { label: 'New Store Openings', value: '2 Launches', note: 'Himayath Nagar & Tolichowki' },
      { label: 'Key Campaign', value: 'EOSS Setup', note: 'Size-grid & sale floor organization' }
    ],
    outputs: [
      'Visual merchandising audit checklists and compliance standards across 7 stores',
      'Mannequin lookbooks and cross-category fixture coordination',
      'EOSS size-wise floor layout and shorts wall execution',
      'NSO initial merchandise allocation and display setups'
    ],
    takeaway: 'Understanding how merchandise moves from stockroom to sales floor — and how space, presentation and organisation directly influence customer dwell time and basket size.',
    imagePath: '/images/prashanthi/bear-house/store-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'landscape'
  },
  {
    id: 'healing-the-wait',
    number: '02',
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
      { label: 'Research Publication', value: '28 Pages', note: 'Editorial healthcare design artifact' }
    ],
    outputs: [
      'Heal Queue App - appointments, live queue tracking, test bookings, digital prescriptions, and patient assistance',
      'Queue & Appointment Management - real-time token updates, doctor availability, and estimated waiting times',
      'Patient Support Features - test scheduling, prescription access, reminders and assistance throughout the hospital visit'
    ],
    takeaway: 'Information reduces anxiety. By replacing opacity with transparent digital tracking and thoughtful patient communication, perceived wait time is radically diminished.',
    imagePath: '/images/prashanthi/projects/healing-wait-01.jpg',
    accentColor: '#A87578',
    accentBg: '#141211',
    tagColor: 'bg-dustyRose/20 text-ivory',
    composition: 'portrait'
  },
  {
    id: 'house-of-masaba',
    number: '03',
    title: 'HOUSE OF MASABA',
    subtitle: 'Assortment and Merchandising Strategy',
    category: 'Assortment and Merchandising Strategy',
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
      { label: 'Strategic Focus', value: 'Assortment Strategy', note: 'Merchandise planning & pricing' },
      { label: 'Brand Positioning', value: 'Contemporary Luxury', note: 'Distinctive Indian brand codes' },
      { label: 'Core Deliverables', value: 'Range Architecture', note: 'Pricing & size planning' },
      { label: 'Commercial Goal', value: 'Balanced Assortment', note: 'Protecting brand prestige & margins' }
    ],
    outputs: [
      'Assortment planning and category mix framework',
      'Tiered pricing architecture and commercial margin guidelines',
      'Size ratio planning and inventory balance recommendations',
      'In-store visual merchandising and product positioning guidelines'
    ],
    takeaway: 'Strategic Takeaway: Where bold cultural codes meet thoughtful merchandise strategy — turning brand identity into a cohesive product story.',
    imagePath: '/images/prashanthi/projects/masaba-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'wide'
  },
  {
    id: 'beyond-the-boutique',
    number: '04',
    title: 'BEYOND THE BOUTIQUE',
    subtitle: 'Designing a phygital luxury ecosystem where heritage, technology and human clienteling meet.',
    category: 'Strategic Concept / Phygital Luxury',
    type: 'Bvlgari Phygital Luxury Exploration',
    shortDescription: 'A strategic exploration of how Bvlgari can bridge its heritage-led physical experience with digital innovation—without compromising the exclusivity of luxury.',
    fullOverview: 'A strategic exploration of how Bvlgari can bridge its heritage-led physical experience with digital innovation—without compromising the exclusivity of luxury.',
    challenge: 'Luxury is no longer experienced only inside the boutique. Consumers increasingly discover, research and engage with brands digitally, creating a need for a more connected online–offline journey.\n\nThe challenge was to explore:\n\nHow can Bvlgari extend its Maison experience into the digital world while retaining its human touch and sense of exclusivity?',
    processSteps: [
      {
        title: '01 The Approach',
        desc: 'Mapped the luxury customer journey from digital discovery to post-purchase engagement and identified opportunities to integrate AI for personalized recommendations and clienteling, AR for immersive product discovery and virtual try-on, CRM for a unified customer view across touchpoints, Digital Product Passports for authentication and ownership, and Omnichannel retail to connect digital and physical experiences.'
      },
      {
        title: '02 The Strategic Idea',
        desc: 'Developed a Bvlgari Phygital Luxury Ecosystem connecting: Discover → Explore → Experience → Purchase → Own → Re-engage. The concept positions technology as an extension of the Maison experience, rather than a replacement for human luxury service.'
      },
      {
        title: '03 Core Insight',
        desc: 'Technology should not make luxury more digital. It should make the luxury relationship more seamless, personal and enduring.'
      }
    ],
    keyFacts: [
      { label: 'Project Scope', value: 'Strategic Exploration', note: 'Phygital luxury ecosystem' },
      { label: 'Ecosystem Flow', value: '6 Connected Stages', note: 'Discover → Own → Re-engage' },
      { label: 'Tech Integrations', value: 'AI, AR, CRM & DPP', note: 'Clienteling & authentication' },
      { label: 'Core Philosophy', value: 'Human-First Luxury', note: 'Technology extending the Maison' }
    ],
    outputs: [
      'Bvlgari Phygital Luxury Ecosystem Framework (Discover → Explore → Experience → Purchase → Own → Re-engage)',
      'AI for personalised recommendations and clienteling architecture',
      'AR for immersive product discovery and virtual try-on concept',
      'CRM for a unified customer view across touchpoints',
      'Digital Product Passports for authentication and ownership',
      'Omnichannel retail strategy connecting digital and physical experiences'
    ],
    takeaway: 'Technology should not make luxury more digital. It should make the luxury relationship more seamless, personal and enduring.',
    imagePath: '/images/prashanthi/projects/masaba-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'split'
  },
  {
    id: 'sutra-edit',
    number: '05',
    title: 'SUTRA EDIT',
    subtitle: 'Building an India-First Fashion Intelligence Platform',
    category: 'Fashion Intelligence / Business Strategy',
    type: 'Startup Strategy Case Study',
    shortDescription: 'An India-first fashion intelligence platform providing actionable market insights, founder community, and strategic consulting.',
    fullOverview: 'A startup business model and brand strategy addressing the information void for emerging Indian direct-to-consumer and lifestyle founders who navigate distinct local supply chains and sizing dynamics.',
    challenge: 'Emerging Indian fashion entrepreneurs lack contextual, actionable business intelligence on sourcing, small-batch manufacturing, sizing curves, and omnichannel rollout.',
    processSteps: [
      {
        title: '01 Market Gap Analysis',
        desc: 'Identified mismatch between Western academic fashion frameworks and India’s festive-driven, multi-climate retail landscape.'
      },
      {
        title: '02 Platform Architecture',
        desc: 'Structured a 3-pillar ecosystem: Weekly Edit (curated industry intelligence), Community (founder peer network), and Consulting (bespoke advisory).'
      },
      {
        title: '03 Audience & Value Ladder',
        desc: 'Mapped customer progression from free newsletter readers to community members and one-on-one consulting clients.'
      },
      {
        title: '04 Business Model & Strategy',
        desc: 'Formulated sustainable ecosystem: Content → Contextual Intelligence → Strategic Advisory.'
      },
      {
        title: '05 Go-to-Market Execution',
        desc: 'Designed roadmap focused on founder case studies, retail audits, and tactical supplier intelligence.'
      }
    ],
    keyFacts: [
      { label: 'Core Market', value: 'India D2C & Lifestyle', note: 'Contextual retail frameworks' },
      { label: 'Ecosystem Pillars', value: '3 Verticals', note: 'Weekly Edit, Community, Consulting' },
      { label: 'Platform Scope', value: 'Fashion Intelligence', note: 'Content → Advisory' },
      { label: 'Strategic Focus', value: 'Retail & Sourcing', note: 'Addressing local Indian supply realities' }
    ],
    outputs: [
      'India-first fashion retail intelligence ecosystem blueprint',
      'Value architecture connecting editorial dispatches to advisory services',
      'Weekly Edit content framework analyzing store formats and merchandising strategies',
      'Consulting roadmap for emerging apparel brands preparing for retail expansion'
    ],
    takeaway: 'Contextual, actionable industry intelligence empowers emerging Indian fashion founders to bridge creative vision with sustainable commercial retail growth.',
    imagePath: '/images/prashanthi/projects/sutra-01.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'editorial'
  }
];

export const BEAR_HOUSE_LOCATIONS = [
  { name: 'Lakeshore Mall', city: 'Bangalore', type: 'EBO Mall Store', focus: 'EOSS size-wise layout, visual audits' },
  { name: 'Sharath City Mall', city: 'Hyderabad', type: 'Flagship Mall Hub', focus: 'High-traffic display maintenance, replenishment' },
  { name: 'Banjara Hills', city: 'Hyderabad', type: 'High-Street Boutique', focus: 'Focal window styling, brand presentation' },
  { name: 'Broadway', city: 'Hyderabad', type: 'Retail Destination', focus: 'Floor zoning standards, mannequin coordination' },
  { name: 'Amb Mall', city: 'Hyderabad', type: 'Destination Mall', focus: 'EOSS shorts wall execution, fixture standards' },
  { name: 'Himayath Nagar', city: 'Hyderabad', type: 'New Store Opening (NSO)', focus: 'Full NSO visual floor setup, opening inventory' },
  { name: 'Tolichowki', city: 'Hyderabad', type: 'New Store Opening (NSO)', focus: 'NSO visual merchandising execution, compliance' }
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
