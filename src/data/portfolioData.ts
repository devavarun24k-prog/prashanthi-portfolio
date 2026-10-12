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
  duration?: string;
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
    category: 'BRAND & CONSUMER',
    skills: ['Brand Strategy', 'Consumer Insights', 'Product Positioning'],
  },
  {
    number: '02',
    category: 'RETAIL',
    skills: ['Visual Merchandising', 'Store Audits', 'Retail Operations'],
  },
  {
    number: '03',
    category: 'MERCHANDISING',
    skills: ['Assortment Planning', 'Product Analysis', 'Replenishment'],
  },
];

export const PERSONAL_DATA = {
  name: 'PRASHANTHI.B',
  headline: 'Good Design. Better Strategy.',
  introText: [
    'I like good design. I like better strategy. Ideally, I want both.',
    'I’m interested in what happens between a brand being noticed and a customer choosing it — from positioning and communication to products, retail and consumer experience.'
  ],
  roleHeadline: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  credential: 'MBA — Fashion & Lifestyle Business Management',
  academicDetail: 'Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)',
  disciplines: 'Buying & Merchandising | Brand Strategy | Visual Merchandising',
  intro: 'I like good design. I like better strategy. Ideally, I want both.',
  perspective: {
    headline: 'Good Design.',
    subheadline: 'Better Strategy.',
    accent: 'Ideally, I want both.',
    paragraphs: [
      'I’m pursuing an MBA in Fashion & Lifestyle Business Management, with a focus on branding, marketing and the business of fashion.',
      'From social media marketing to hands-on retail execution, my experiences have shaped my interest in how brands communicate, how consumers make choices and how products become experiences.',
      'I’m curious about the details, interested in the bigger picture and drawn to the thinking that connects creativity with commerce.'
    ],
    closing: 'Connecting creativity with commercial architecture.'
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
    id: 'samsonite-smarttravel',
    number: '01',
    title: 'Samsonite SmartTravel+',
    subtitle: 'Turning Travel Friction into a Product Opportunity',
    category: 'PRODUCT MARKETING · ACADEMIC PROJECT',
    type: 'Academic Project',
    shortDescription: 'An academic project exploring a smart-luggage concept through consumer needs, product positioning and go-to-market strategy.',
    fullOverview: 'An academic project exploring a smart-luggage concept through consumer needs, product positioning and go-to-market strategy.',
    challenge: 'How can luggage evolve to meet the expectations of today’s connected traveller?',
    processSteps: [
      {
        title: '01 / Consumer Analysis',
        desc: 'Target consumer and travel-needs analysis.'
      },
      {
        title: '02 / Concept & Pricing',
        desc: 'Product concept, positioning and pricing strategy.'
      },
      {
        title: '03 / Go-to-Market',
        desc: 'Marketing communication and go-to-market planning.'
      }
    ],
    keyFacts: [
      { label: 'Project Type', value: 'Academic Project' },
      { label: 'Focus Area', value: 'Product Marketing' },
      { label: 'Core Scope', value: 'Consumer Needs & GTM' },
      { label: 'Target', value: 'Connected Traveller' }
    ],
    outputs: [
      'Target consumer and travel-needs analysis.',
      'Product concept, positioning and pricing strategy.',
      'Marketing communication and go-to-market planning.'
    ],
    takeaway: 'Connecting product innovation with consumer needs to create a relevant market proposition.',
    imagePath: '/images/projects/samsonite/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'landscape'
  },
  {
    id: 'sutra-edit',
    number: '02',
    title: 'Sutra Edit',
    subtitle: 'Building a Fashion Business Ecosystem',
    category: 'BRAND STRATEGY · STARTUP CONCEPT',
    type: 'Startup Concept',
    shortDescription: 'A proposed fashion and lifestyle business ecosystem connecting content, industry intelligence and advisory services for emerging brands.',
    fullOverview: 'A proposed fashion and lifestyle business ecosystem connecting content, industry intelligence and advisory services for emerging brands.',
    challenge: 'How can emerging fashion businesses access relevant insights, community and strategic support?',
    processSteps: [
      {
        title: '01 / Brand Concept',
        desc: 'Defined the brand concept, target audience and positioning.'
      },
      {
        title: '02 / Three Verticals',
        desc: 'Developed three verticals: Weekly Edit, Community and Consulting.'
      },
      {
        title: '03 / Monetisation Model',
        desc: 'Structured a tiered monetisation model: Content → Intelligence → Advisory.'
      }
    ],
    keyFacts: [
      { label: 'Project Type', value: 'Startup Concept' },
      { label: 'Focus Area', value: 'Brand Strategy' },
      { label: 'Ecosystem', value: 'Content · Intelligence · Advisory' },
      { label: 'Target Sector', value: 'Emerging Fashion & Lifestyle' }
    ],
    outputs: [
      'Defined the brand concept, target audience and positioning.',
      'Developed three verticals: Weekly Edit, Community and Consulting.',
      'Structured a tiered monetisation model: Content → Intelligence → Advisory.'
    ],
    takeaway: 'Building a scalable ecosystem around the evolving needs of fashion businesses.',
    imagePath: '/images/projects/sutra-edit/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'editorial'
  },
  {
    id: 'house-of-masaba',
    number: '03',
    title: 'House of Masaba',
    subtitle: 'Decoding a brand. Building its range. Shaping its retail story.',
    category: 'RETAIL STRATEGY · PRODUCT ASSORTMENT · RANGE PLANNING',
    type: 'Academic Project',
    shortDescription: 'From signature prints to contemporary Indian dressing, this project explores House of Masaba’s brand positioning, target consumer, and competitive landscape to identify opportunities for merchandise planning and retail strategy.',
    fullOverview: 'From signature prints to contemporary Indian dressing, this project explores House of Masaba’s brand positioning, target consumer, and competitive landscape to identify opportunities for merchandise planning and retail strategy across 5 collection concepts, 112 planned styles, and 1,008 planned SKUs.',
    challenge: 'How can visual storytelling, product assortment planning and range development work together to create a cohesive retail experience aligned with a distinctive fashion identity?',
    processSteps: [
      {
        title: '01 / The Brand & Opportunity',
        desc: 'Explored House of Masaba’s brand positioning, target consumer, and competitive landscape.'
      },
      {
        title: '02 / The Assortment Strategy',
        desc: 'Structured 5 collection concepts covering 112 planned styles and 1,008 planned SKUs.'
      },
      {
        title: '03 / Visual Merchandising & Retail Perspective',
        desc: 'Translated product selection, styling, colour, and print into a considered retail direction.'
      }
    ],
    keyFacts: [
      { label: 'Collection Concepts', value: '5 Directions' },
      { label: 'Planned Styles', value: '112 Styles' },
      { label: 'Planned SKUs', value: '1,008 SKUs' },
      { label: 'Brand Focus', value: 'House of Masaba' }
    ],
    outputs: [
      'The Assortment Strategy: 5 collection concepts, 112 planned styles, and 1,008 planned SKUs.',
      'Visual Merchandising: Translating product selection, colour flows, and styling into retail presentation.',
      'The Retail Perspective: Bringing consumer insights, assortment planning, and merchandising into strategy.'
    ],
    takeaway: 'Connecting brand identity, range planning, and visual merchandising into a cohesive commercial architecture.',
    imagePath: '/images/projects/house-of-masaba/Festive1.png',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'wide'
  },
  {
    id: 'bear-house',
    number: '04',
    title: 'The Bear House',
    subtitle: 'Retail in the Real World',
    category: 'INDUSTRY EXPERIENCE · VISUAL MERCHANDISING',
    type: 'Professional Internship',
    shortDescription: 'A 46-day visual merchandising internship involving store-level display execution, product presentation and retail operations.',
    fullOverview: 'A 46-day visual merchandising internship involving store-level display execution, product presentation and retail operations.',
    challenge: 'How can visual merchandising and store execution support a consistent, organised and customer-friendly retail environment?',
    processSteps: [
      {
        title: '01 / Styling & Displays',
        desc: 'Executed mannequin styling, displays, colour flows, fixtures and props.'
      },
      {
        title: '02 / Sale Floor Execution',
        desc: 'Supported End-of-Season Sale setups, including stock segregation and floor transitions.'
      },
      {
        title: '03 / New Store Setups',
        desc: 'Gained hands-on exposure to new-store setup and retail execution across selected stores.'
      }
    ],
    keyFacts: [
      { label: 'Project Type', value: 'Professional Internship' },
      { label: 'Duration', value: '46 Days' },
      { label: 'Location', value: 'Hyderabad' },
      { label: 'Year', value: '2026' }
    ],
    outputs: [
      'Executed mannequin styling, displays, colour flows, fixtures and props.',
      'Supported End-of-Season Sale setups, including stock segregation and floor transitions.',
      'Gained hands-on exposure to new-store setup and retail execution across selected stores.'
    ],
    takeaway: 'Understanding how visual standards, product presentation and stock organisation translate into real-world retail execution.',
    imagePath: '/images/projects/bear-house/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'landscape'
  },
  {
    id: 'healing-the-wait',
    number: '05',
    title: 'Healing the Wait',
    subtitle: 'Making Waiting Feel More Human',
    category: 'DESIGN THINKING · CUSTOMER EXPERIENCE',
    type: 'Design Thinking Case Study',
    shortDescription: 'A research-led service-design project exploring patient and caregiver experiences in hospital outpatient waiting areas through a proposed digital solution, Heal Queue.',
    fullOverview: 'A research-led service-design project exploring patient and caregiver experiences in hospital outpatient waiting areas through a proposed digital solution, Heal Queue.',
    challenge: 'How might hospital waiting become more transparent, manageable and less stressful?',
    processSteps: [
      {
        title: '01 / Field Observations',
        desc: 'Explored patient and caregiver pain points through field observations and interviews.'
      },
      {
        title: '02 / App Concept & Mock-ups',
        desc: 'Developed the Heal Queue app concept and interface mock-ups.'
      },
      {
        title: '03 / Service Mapping',
        desc: 'Mapped features including appointments, live token tracking, doctor status, tests, prescriptions and patient assistance.'
      }
    ],
    keyFacts: [
      { label: 'Project Type', value: 'Service Design Research' },
      { label: 'Methodology', value: 'Design Thinking' },
      { label: 'Concept Output', value: 'Heal Queue Digital Solution' },
      { label: 'Core Focus', value: 'Patient & Caregiver Experience' }
    ],
    outputs: [
      'Explored patient and caregiver pain points through field observations and interviews.',
      'Developed the Heal Queue app concept and interface mock-ups.',
      'Mapped features including appointments, live token tracking, doctor status, tests, prescriptions and patient assistance.'
    ],
    takeaway: 'Using research and digital service design to address uncertainty and improve the patient waiting experience.',
    imagePath: '/images/projects/healing-the-wait/cover.jpg',
    accentColor: '#A87578',
    accentBg: '#141211',
    tagColor: 'bg-dustyRose/20 text-ivory',
    composition: 'portrait'
  },
  {
    id: 'bvlgari',
    number: '06',
    title: 'Bvlgari',
    subtitle: 'Exploring the Future of Luxury Retail',
    category: 'LUXURY BRANDING · RETAIL CONCEPT',
    type: 'Academic Concept',
    shortDescription: 'An academic luxury-retail concept exploring how digital touchpoints could complement exclusivity and personalisation in a premium in-store experience.',
    fullOverview: 'An academic luxury-retail concept exploring how digital touchpoints could complement exclusivity and personalisation in a premium in-store experience.',
    challenge: 'How can luxury retail integrate digital convenience without compromising personal attention and exclusivity?',
    processSteps: [
      {
        title: '01 / Brand Positioning',
        desc: 'Explored luxury brand positioning and customer expectations.'
      },
      {
        title: '02 / Physical & Digital',
        desc: 'Examined the relationship between physical retail and digital touchpoints.'
      },
      {
        title: '03 / Strategic Outputs',
        desc: 'Developed the research and conceptual outputs relevant to the project.'
      }
    ],
    keyFacts: [
      { label: 'Project Type', value: 'Academic Concept' },
      { label: 'Sector', value: 'Luxury Retail & Fine Jewellery' },
      { label: 'Core Theme', value: 'Exclusivity & Digital Touchpoints' },
      { label: 'Brand', value: 'Bvlgari' }
    ],
    outputs: [
      'Explored luxury brand positioning and customer expectations.',
      'Examined the relationship between physical retail and digital touchpoints.',
      'Developed the research and conceptual outputs relevant to the project.'
    ],
    takeaway: 'Exploring how digital innovation can complement luxury retail while preserving the qualities customers value.',
    imagePath: '/images/projects/bvlgari/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#141211',
    tagColor: 'bg-burgundy text-ivory',
    composition: 'wide'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: '3am-india',
    period: '2023–2024',
    company: '3AM India',
    role: 'Social Media Marketing Intern',
    location: 'Hyderabad',
    type: 'Digital Marketing & Community Internship',
    description: 'Social media marketing and brand communication internship managing strategy, content calendars, influencer outreach, and audience engagement for clean skincare brand 3AM India.',
    highlights: [
      'Managed social media strategy and execution across channels',
      'Created content, captions, creatives and blogs',
      'Supported influencer collaborations and community outreach',
      'Used analytics and audience insights to track trends and community engagement'
    ]
  },
  {
    id: 'bear-house',
    period: '2026',
    company: 'The Bear House',
    role: 'Visual Merchandising Intern',
    duration: '46 days',
    location: 'Hyderabad',
    type: 'Retail Internship (46 Days)',
    description: 'A 46-day visual merchandising internship involving store-level display execution, product presentation and retail operations.',
    highlights: [
      'Executed mannequin styling, displays, colour flows, fixtures and props.',
      'Supported End-of-Season Sale setups, including stock segregation and floor transitions.',
      'Gained hands-on exposure to new-store setup and retail execution across selected stores.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'pearl-academy',
    period: '2025–2027',
    degree: 'MBA, Fashion & Lifestyle Business Management',
    institution: 'Pearl Academy',
    location: 'Bangalore, India',
    status: 'In Progress'
  },
  {
    id: 'icfai',
    period: '2020–2023',
    degree: 'BBA',
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
