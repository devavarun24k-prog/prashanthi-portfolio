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

export interface WorkWithCategory {
  number: string;
  category: string;
  skills: string[];
}

export const WORK_WITH_DATA: WorkWithCategory[] = [
  {
    number: '01',
    category: 'MERCHANDISING',
    skills: ['Assortment Analysis', 'Product Analysis', 'Replenishment'],
  },
  {
    number: '02',
    category: 'RETAIL',
    skills: ['Visual Merchandising', 'Store Audits', 'Retail Operations'],
  },
  {
    number: '03',
    category: 'BRAND & CONSUMER',
    skills: ['Consumer Research', 'Competitor Research', 'Brand & Marketing'],
  },
];

export const PERSONAL_DATA = {
  name: 'PRASHANTHI.B',
  roleHeadline: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  credential: 'MBA — Fashion & Lifestyle Business Management',
  academicDetail: 'Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)',
  disciplines: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  intro: 'I bring a creative eye with a strong understanding of the business behind fashion.',
  perspective: {
    headline: 'Behind every “I want that”',
    subheadline: 'there’s a reason.',
    accent: 'I’m interested in finding it.',
    paragraphs: [
      'That curiosity led me to explore marketing, fashion, lifestyle, and consumer behaviour — the little details that influence what catches our eye, what feels relevant, and ultimately, what we choose.',
      'I’m Prashanthi.B, currently pursuing an MBA in Fashion & Lifestyle, with a growing interest in understanding people, brands, and the space where the two meet.',
      'I enjoy looking beyond the obvious — questioning why an idea works, how a brand communicates, and what makes an experience feel memorable. My interests span marketing, brand strategy, visual communication, retail, and fashion, but the thread connecting them is simple: understanding what makes people care.',
      'I’m still learning, experimenting, and figuring things out along the way — which is probably the best part.'
    ],
    closing: 'Because sometimes, the smallest reason makes the biggest difference.'
  },
  email: 'prashanthi.rbovilla@gmail.com',
  location: 'Bangalore / India',
  linkedin: 'https://www.linkedin.com/in/prashanthi-reddy-14771a244/',
  cvUrl: 'mailto:prashanthi.rbovilla@gmail.com?subject=CV Request - PRASHANTHI.B',
  images: {
    hero: '/images/hero.jpg',
    portrait01: '/images/hero.jpg',
    portrait02: '/images/hero.jpg',
    detail: '/images/hero.jpg'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'bear-house',
    number: '01',
    title: 'THE BEAR HOUSE',
    subtitle: 'Retail in the Real World',
    category: 'Retail / Visual Merchandising',
    type: 'Retail Internship · Hyderabad',
    shortDescription: 'Hands-on visual merchandising, store operations, merchandise organization and retail execution across EBO and SIS formats in Hyderabad.',
    fullOverview: 'An intensive 46-day visual merchandising internship across 7 high-traffic retail locations in Hyderabad, reviewing store presentation against VM guidelines, supporting 2 New Store Openings (NSO), and executing End of Season Sale (EOSS) transitions.',
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
        desc: 'Worked on the visual merchandising setup for new store launches in Hyderabad, including merchandise placement, fixture setup, mannequin styling and overall store presentation.'
      }
    ],
    keyFacts: [
      { label: 'Internship Duration', value: '46 Days', note: 'On-ground retail immersion' },
      { label: 'Store Footprint', value: '7 Retail Locations', note: 'Hyderabad EBO & SIS' },
      { label: 'New Store Openings', value: '2 Launches', note: 'Himayath Nagar & Tolichowki' },
      { label: 'Floor Execution', value: 'EOSS Setup', note: 'Size-wise floor organization' }
    ],
    outputs: [
      'Visual merchandising audit checklists and compliance standards across 7 Hyderabad stores',
      'Mannequin styling guides and cross-category fixture coordination',
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
    id: 'healing-the-wait',
    number: '02',
    title: 'HEALING THE WAIT',
    subtitle: 'Designing for a Human Experience',
    category: 'Design Thinking / Service Design',
    type: 'Design Thinking Case Study',
    shortDescription: 'Transforming the healthcare waiting room experience through human-centered research and the Heal Queue service design concept.',
    fullOverview: 'A design thinking research project addressing the emotional anxiety and friction of indeterminate hospital waiting times through empathetic patient studies and a digital queue management concept.',
    challenge: 'Hospital waiting rooms frequently amplify anxiety, boredom, and frustration due to uncertainty around consultation timing and complete opacity in waiting areas.',
    processSteps: [
      {
        title: '01 — Empathize',
        desc: 'Conducted primary research across OPD waiting environments, combining field observations and patient/caregiver conversations to uncover key stress points.'
      },
      {
        title: '02 — Define',
        desc: 'Synthesized research findings into key themes around boredom (66%), uncertainty (60%) and frustration (40%), identifying waiting-time anxiety as a central experience gap.'
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
      { label: 'Frustration', value: '40%', note: 'Key experience gap identified' },
      { label: 'Design Framework', value: '5-Stage Loop', note: 'Empathize to Test' }
    ],
    outputs: [
      'Heal Queue App — appointments, live queue tracking, test bookings, digital prescriptions, and patient assistance',
      'Queue & Appointment Management — real-time token updates, doctor availability, and estimated waiting times',
      'Patient Support Features — test scheduling, prescription access, reminders and assistance throughout the hospital visit'
    ],
    takeaway: 'Information reduces anxiety. By replacing opacity with transparent digital tracking and thoughtful communication, perceived wait time is radically diminished.',
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
    category: 'Fashion Strategy / Merchandise Planning',
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
        desc: 'Defined clear pricing bands (₹7.5K–₹65K) and margin benchmarks (40–60%) to maintain commercial viability while preserving brand prestige.'
      },
      {
        title: '03 Product Positioning & Sizing',
        desc: 'Calibrated size ratios (XS–XL) and category mix to ensure high sell-through and minimize broken-size inventory.'
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
    id: '3am-india',
    number: '04',
    title: '3AM INDIA',
    subtitle: 'Social Media & Community Strategy',
    category: 'Digital Marketing / Social Strategy',
    type: 'Social Media & Growth Strategy',
    shortDescription: 'Social media strategy, educational content creation, influencer collaboration and community growth (+13% from 15K to 17K followers) for clean skincare brand 3AM India.',
    fullOverview: 'Hands-on social media marketing and brand communication internship managing strategy, content calendars, influencer outreach, and analytics-driven community growth.',
    challenge: 'Simplifying complex skincare formulations and ingredient stories into engaging, highly shareable social content that drives authentic audience trust and follower growth.',
    processSteps: [
      {
        title: '01 — Research',
        desc: 'Researched skincare trends, ingredient science, and competitor communication strategies to identify key educational content pillars.'
      },
      {
        title: '02 — Simplify',
        desc: 'Translated complex scientific formulations and active ingredients into clear, bite-sized visual education for everyday consumers.'
      },
      {
        title: '03 — Create',
        desc: 'Designed engaging social media assets, captions, stories, and blogs focused on transparency, routine-building, and skincare efficacy.'
      },
      {
        title: '04 — Connect',
        desc: 'Engaged with community comments, managed influencer seeding collaborations, and monitored analytics to optimize engagement and grow followers.'
      }
    ],
    keyFacts: [
      { label: 'Audience Growth', value: '15K → 17K', note: '+13% community expansion' },
      { label: 'Framework', value: '4-Step Loop', note: 'Research → Simplify → Create → Connect' },
      { label: 'Core Channels', value: 'Social & Blog', note: 'Multi-touchpoint strategy' },
      { label: 'Marketing Scope', value: 'Content & Influencer', note: 'Organic community trust' }
    ],
    outputs: [
      'Educational skincare content calendars and campaign copy',
      'Influencer collaboration pipelines and outreach workflows',
      'Audience analytics tracking and engagement optimization (+13% follower growth)'
    ],
    takeaway: 'Translating complex ingredient science into simple, relatable content that builds genuine consumer trust and community momentum.',
    imagePath: '/images/prashanthi/projects/3am-01.jpg',
    accentColor: '#A87578',
    accentBg: '#141211',
    tagColor: 'bg-dustyRose/20 text-ivory',
    composition: 'landscape'
  },
  {
    id: 'sutra-edit',
    number: '05',
    title: 'SUTRA EDIT',
    subtitle: 'India’s fashion intelligence platform for sharper brand decisions.',
    category: 'Fashion Intelligence / Business Strategy',
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
      { label: 'Core Market', value: 'India | D2C Fashion & Lifestyle', note: 'Contextual retail focus' },
      { label: 'Business Verticals', value: '3 Verticals', note: 'Editorial, Dashboard, Advisory' },
      { label: 'Revenue Tiers', value: 'Starter / Pro / Premium', note: 'Tiered subscription model' },
      { label: 'Strategic Focus', value: 'Brand Decisions', note: 'Signals to sharper action' }
    ],
    outputs: [
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
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: '3am-india',
    period: '2023 – 2024',
    company: '3AM India',
    role: 'Social Media Marketing Intern',
    location: 'Bangalore, India',
    type: 'Digital Marketing & Community Internship',
    description: 'Managed social media strategy and execution, created educational skincare content, supported influencer collaborations, and tracked audience engagement insights.',
    highlights: [
      'Managed social media strategy and execution across channels',
      'Created content, captions, creatives and blogs',
      'Supported influencer collaborations and community outreach',
      'Used analytics and audience insights to track trends and grew followers from 15K to 17K (+13%)'
    ]
  },
  {
    id: 'bear-house',
    period: '2026',
    company: 'The Bear House',
    role: 'Visual Merchandising Intern',
    location: 'Hyderabad',
    type: 'Retail Internship (46 Days)',
    description: 'Hands-on visual merchandising internship across 7 retail locations in Hyderabad covering EBO and SIS formats, store visual audits, floor replenishment, 2 New Store Openings (NSO), and EOSS transitions.',
    highlights: [
      'Conducted visual merchandising store audits across 7 retail locations in Hyderabad',
      'Executed full floor setup for 2 New Store Openings (Himayath Nagar, Tolichowki)',
      'Organised End of Season Sale (EOSS) size-wise grids and floor presentation',
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
