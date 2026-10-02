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

export const PERSONAL_DATA = {
  name: 'Prashanthi B.',
  roleHeadline: 'Fashion Business. Retail. Merchandising. Brand.',
  credential: 'MBA Candidate — Fashion & Lifestyle Business Management, Pearl Academy Bangalore',
  disciplines: 'Buying & Merchandising / Retail / Visual Merchandising / Brand & Consumer Strategy',
  intro: 'I’m interested in the space where fashion, consumers and business meet — from merchandise planning and visual merchandising to brand communication and retail strategy.',
  aboutParagraphs: [
    'I’m Prashanthi, currently pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027), following my BBA from ICFAI University (2020–2023).',
    'My interests sit across buying, merchandising, visual merchandising, retail operations, branding, and consumer behaviour.',
    'I enjoy understanding both sides of fashion — what catches attention visually and what makes a product, assortment or retail experience work commercially.'
  ],
  email: 'prashanthi.rbovilla@gmail.com',
  location: 'Bangalore, India',
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
    title: 'The Bear House',
    subtitle: 'Visual Merchandising & Retail Execution',
    category: 'Retail & Visual Merchandising',
    type: '46-Day Industry Internship',
    shortDescription: 'Hands-on exposure to visual merchandising, store operations, merchandise organisation and retail execution across EBO and SIS formats.',
    fullOverview: 'An intensive 46-day visual merchandising internship across 7 high-traffic retail locations in Hyderabad and Bangalore, covering EBO and SIS formats, store visual audits, 2 New Store Openings (NSO), and complete End of Season Sale (EOSS) transitions.',
    challenge: 'Maintaining high brand visual standards, rapid floor replenishment, and intuitive customer navigation across both high-traffic flagship mall stores and new store launches.',
    processSteps: [
      { title: 'Store Audits & Standards', desc: 'Conducted systematic visual merchandising audits across 7 stores to ensure planogram compliance, hanger spacing, and focal unit consistency.' },
      { title: 'Customer Flow & Zoning', desc: 'Mapped foot traffic pathways from entrance sightlines to fitting rooms, optimizing focal presentation tables and eye-level product placement.' },
      { title: 'EOSS Sale Floor Transition', desc: 'Reconfigured sales floors into high-density, size-wise sorted fixtures with clear offer communication and rapid restocking capability.' },
      { title: 'New Store Openings (NSO)', desc: 'Executed end-to-end visual setup for new store launches at Himayath Nagar and Tolichowki, from initial stock categorization to final mannequin styling.' }
    ],
    keyFacts: [
      { label: 'Internship Duration', value: '46 Days', note: 'Intensive on-ground retail immersion' },
      { label: 'Store Footprint', value: '7 Retail Stores', note: 'Bangalore & Hyderabad EBO / SIS' },
      { label: 'New Store Openings', value: '2 Launches', note: 'Himayath Nagar & Tolichowki' },
      { label: 'Key Campaign', value: 'EOSS Setup', note: 'Size-grid & shorts wall organization' }
    ],
    outputs: [
      'Visual merchandising audit checklists and compliance standards across 7 stores',
      'Mannequin lookbooks and cross-category fixture coordination',
      'EOSS size-wise floor layout and shorts wall execution',
      'NSO initial merchandise allocation and display setups'
    ],
    takeaway: 'Understanding how merchandise moves from stockroom to sales floor — and how space, presentation and organisation directly influence customer dwell time and basket size.',
    imagePath: '/images/projects/bear-house/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#E8DCC6',
    tagColor: 'bg-burgundy text-cream',
    composition: 'landscape'
  },
  {
    id: 'healing-the-wait',
    number: '02',
    title: 'Healing the Wait',
    subtitle: 'Design Thinking & Service Innovation',
    category: 'Design Thinking & Service Design',
    type: 'Design Thinking Case Study',
    shortDescription: 'Transforming the healthcare waiting room experience through human-centered research, a 28-page publication, and the Heal Queue service concept.',
    fullOverview: 'A design thinking research project addressing the emotional anxiety and friction of indeterminate hospital waiting times through empathetic patient studies, editorial publication design, and a digital queue management concept.',
    challenge: 'Hospital waiting rooms frequently amplify anxiety and frustration due to complete opacity around doctor schedules and queue status.',
    processSteps: [
      { title: 'Empathize', desc: 'Conducted field observations and interviews with 35+ patients and caregivers in OPD waiting lounges to identify core stress triggers.' },
      { title: 'Define', desc: 'Synthesized qualitative findings into key metrics: 66% boredom, 60% acute anxiety from unknown delays, and 40% situational frustration.' },
      { title: 'Ideate', desc: 'Brainstormed multi-sensory and digital interventions to transform passive waiting into transparent, reassuring touchpoints.' },
      { title: 'Prototype', desc: 'Authored and designed a 28-page coffee table publication alongside the Heal Queue digital service blueprint.' },
      { title: 'Test', desc: 'Gathered feedback from hospital visitors on visual clarity, editorial tone, and live queue tracking usability.' }
    ],
    keyFacts: [
      { label: 'Patient Boredom', value: '66%', note: 'Reported lack of mental engagement' },
      { label: 'Wait Anxiety', value: '60%', note: 'Triggered by unknown consultation timing' },
      { label: 'Situational Frustration', value: '40%', note: 'From crowded, opaque waiting areas' },
      { label: 'Editorial Artifact', value: '28 Pages', note: 'Curated research coffee table book' }
    ],
    outputs: [
      '28-page designed editorial publication on healthcare empathy and spatial design',
      'Heal Queue digital service concept featuring live token tracking and doctor status',
      'Spatial micro-zoning blueprint separating quiet reading zones from check-in areas'
    ],
    takeaway: 'Information reduces anxiety. By replacing opacity with transparent digital tracking and thoughtful physical reading materials, perceived wait time is radically diminished.',
    imagePath: '/images/projects/healing-the-wait/cover.jpg',
    accentColor: '#A56A70',
    accentBg: '#E8DCC6',
    tagColor: 'bg-dustyRose/20 text-espresso',
    composition: 'portrait'
  },
  {
    id: 'house-of-masaba',
    number: '03',
    title: 'House of Masaba',
    subtitle: 'Merchandise Planning & Visual Merchandising',
    category: 'Fashion Strategy & Merchandising',
    type: 'Merchandise Planning Project',
    shortDescription: 'A quantitative commercial strategy and visual merchandising framework translating bold heritage prints into structured range architecture.',
    fullOverview: 'A comprehensive fashion strategy and merchandise planning case study for House of Masaba (Bridge-to-Luxury, Digital-First, Omnichannel), structured around the "Printed Identities" concept for Urban Millennials and Global Indian consumers.',
    challenge: 'Translating bold, unconventional brand codes into a disciplined commercial assortment with optimized SKU breadth and balanced size ratios that protect margins.',
    processSteps: [
      { title: 'Range Architecture', desc: 'Structured a balanced range of 112 styles across 5 categories, generating 1,008 total SKUs tailored to festive and pret demand.' },
      { title: 'Commercial Margin Strategy', desc: 'Formulated category-led pricing tiers targeting 40%–60% gross margins across everyday pret, destination resort, and occasion wear.' },
      { title: 'Size-Ratio Planning', desc: 'Calibrated Indian market size curves (XS 10%, S 30%, M 35%, L 20%, XL 5%) to minimize residual broken-size markdown risks.' },
      { title: 'VM Spatial Hierarchy', desc: 'Designed store visual standards based on Focal Point, Contrast, Hierarchy, Balance, and Storytelling.' },
      { title: 'Product Development Pipeline', desc: 'Mapped end-to-end workflow: Concept → Design → Tech Pack → BOM → Costing → Product.' }
    ],
    keyFacts: [
      { label: 'Product Categories', value: '5 Lines', note: 'Pret, Fusion, Festive, Resort, Accessories' },
      { label: 'Style Breadth', value: '112 Styles', note: 'Curated silhouettes' },
      { label: 'SKU Architecture', value: '1,008 SKUs', note: 'Across sizes and colorways' },
      { label: 'Target Gross Margin', value: '40% – 60%', note: 'Category-led pricing baseline' }
    ],
    outputs: [
      'Comprehensive Range Architecture matrix across 5 product lines and 1,008 SKUs',
      'Size-ratio distribution curve and inventory depth calculator',
      'Visual Merchandising store planograms and entrance hotspot guidelines',
      '6-stage Product Development timeline and costing framework'
    ],
    takeaway: 'Where bold cultural brand codes meet quantitative retail discipline — ensuring creative integrity scales profitably across omnichannel touchpoints.',
    imagePath: '/images/projects/house-of-masaba/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#D8B6AE',
    tagColor: 'bg-mutedBlush text-espresso',
    composition: 'wide'
  },
  {
    id: '3am-india',
    number: '04',
    title: '3AM India',
    subtitle: 'Social Media & Brand Communication',
    category: 'Digital Marketing & Content Strategy',
    type: 'Marketing Internship',
    shortDescription: 'Demystifying skincare formulations through research-backed storytelling, ingredient education, and community creator outreach.',
    fullOverview: 'A social media marketing internship focused on digital brand communication, content planning, simplifying complex dermatological ingredients for everyday consumers, blog writing, and influencer outreach.',
    challenge: 'Skincare consumers are overwhelmed by clinical terminology; communicating ingredient efficacy transparently builds authentic trust without misleading claims.',
    processSteps: [
      { title: 'Research', desc: 'Audited active ingredient literature (Niacinamide, Ceramides, Salicylic Acid, Hyaluronic Acid) for factual accuracy and safety thresholds.' },
      { title: 'Simplify', desc: 'Deconstructed dense cosmetic chemistry into clear, relatable everyday analogies and routine-layering cheat sheets.' },
      { title: 'Create', desc: 'Wrote educational skincare blog guides and designed visual multi-slide social carousels optimized for saves and shares.' },
      { title: 'Connect', desc: 'Coordinated influencer seeding with aligned skincare creators and engaged directly with community comments and routine inquiries.' }
    ],
    keyFacts: [
      { label: 'Core Framework', value: '4-Step Flow', note: 'Research → Simplify → Create → Connect' },
      { label: 'Content Formats', value: 'Blogs & Carousels', note: 'SEO articles and visual explainers' },
      { label: 'Community Focus', value: 'Ingredient Clarity', note: 'Barrier care, actives & routine building' },
      { label: 'Outreach Channel', value: 'Influencer Seeding', note: 'Targeted creator relationship management' }
    ],
    outputs: [
      'Educational skincare blog series breaking down active ingredient pairings',
      'Organic social content calendar and educational carousel templates',
      'Creator seeding database and personalized outreach communication briefs',
      'Social media audience engagement monitoring guidelines'
    ],
    takeaway: 'Translating complex product chemistry into transparent, human-centered narratives creates genuine digital community trust and brand loyalty.',
    imagePath: '/images/projects/3am-india/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#D8B6AE',
    tagColor: 'bg-mutedBlush/60 text-espresso',
    composition: 'split'
  },
  {
    id: 'sutra-edit',
    number: '05',
    title: 'Sutra Edit',
    subtitle: 'Fashion Business & Strategy',
    category: 'Fashion Intelligence & Business Model',
    type: 'Startup Strategy Case Study',
    shortDescription: 'An India-first fashion intelligence platform providing actionable market insights, founder community, and strategic consulting.',
    fullOverview: 'A startup business model and brand strategy addressing the information void for emerging Indian direct-to-consumer and lifestyle founders who navigate distinct local supply chains and sizing dynamics.',
    challenge: 'Emerging Indian fashion entrepreneurs lack contextual, actionable business intelligence on sourcing, small-batch manufacturing, sizing curves, and omnichannel rollout.',
    processSteps: [
      { title: 'Market Gap Analysis', desc: 'Identified mismatch between Western academic fashion frameworks and India’s festive-driven, multi-climate retail landscape.' },
      { title: 'Platform Architecture', desc: 'Structured a 3-pillar ecosystem: Weekly Edit (curated industry intelligence), Community (founder peer network), and Consulting (bespoke advisory).' },
      { title: 'Audience & Value Ladder', desc: 'Mapped customer progression from free newsletter readers to community members and one-on-one consulting clients.' },
      { title: 'Business Model', desc: 'Formulated sustainable monetization loop: Content → Premium Intelligence → Brand Consulting.' },
      { title: 'Go-to-Market Execution', desc: 'Designed launch roadmap focused on founder case studies, retail audits, and tactical supplier intelligence.' }
    ],
    keyFacts: [
      { label: 'Core Market', value: 'India D2C & Lifestyle', note: 'Contextual retail frameworks' },
      { label: 'Ecosystem Pillars', value: '3 Verticals', note: 'Weekly Edit, Community, Consulting' },
      { label: 'Monetization Flow', value: 'Tiered Model', note: 'Content → Intelligence → Advisory' },
      { label: 'Strategic Focus', value: 'Retail & Sourcing', note: 'Addressing local Indian supply realities' }
    ],
    outputs: [
      'India-first fashion retail intelligence ecosystem blueprint',
      'Tiered value architecture connecting editorial dispatches to advisory services',
      'Weekly Edit content framework analyzing store formats and merchandising strategies',
      'Consulting roadmap for emerging apparel brands preparing for retail expansion'
    ],
    takeaway: 'Contextual, actionable industry intelligence empowers emerging Indian fashion founders to bridge creative vision with sustainable commercial retail growth.',
    imagePath: '/images/projects/sutra-edit/cover.jpg',
    accentColor: '#722F37',
    accentBg: '#E8DCC6',
    tagColor: 'bg-warmTaupe/20 text-espresso',
    composition: 'editorial'
  }
];

export const BEAR_HOUSE_LOCATIONS = [
  { name: 'Lakeshore Mall', city: 'Bangalore', type: 'EBO Mall Store', focus: 'EOSS size-wise layout, visual audits' },
  { name: 'Sharath City Mall', city: 'Hyderabad', type: 'Flagship Mall Hub', focus: 'High-traffic display maintenance, replenishment' },
  { name: 'Banjara Hills', city: 'Hyderabad', type: 'High-Street Boutique', focus: 'Focal window styling, brand prestige presentation' },
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
  },
  {
    id: '3am-india',
    period: '2023 – 2024',
    company: '3AM India',
    role: 'Social Media Marketing Intern',
    location: 'Bangalore, India',
    type: 'Marketing Internship',
    description: 'Digital brand communication, social media content planning, skincare ingredient research simplification, educational blog writing, and creator outreach.',
    highlights: [
      'Simplified complex cosmetic ingredient chemistry for consumer-facing educational content',
      'Researched and authored skincare guides and visual carousel storyboards',
      'Managed influencer seeding coordination and creator outreach pipelines',
      'Monitored audience engagement metrics and community response trends'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'pearl-academy',
    period: '2025 – 2027',
    degree: 'MBA – Fashion & Lifestyle Business Management',
    institution: 'Pearl Academy',
    location: 'Bangalore, India',
    status: 'Candidate (In Progress)'
  },
  {
    id: 'icfai',
    period: '2020 – 2023',
    degree: 'BBA – Bachelor of Business Administration',
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
    description: 'Backstage runway coordination, model styling assistance, and live show execution.'
  },
  {
    id: 'pvr-inox',
    title: 'PVR INOX × Timbuckdo Cine Career Program',
    type: 'Corporate Industry Immersion',
    description: '4-day intensive program on experiential entertainment, audience engagement, and brand partnerships.'
  }
];
