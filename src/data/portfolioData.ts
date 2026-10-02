export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  type: string;
  tagline: string;
  heroExcerpt: string;
  focusAreas: string[];
  placeholderMood: {
    accentTone: string;
    tag: string;
    theme: string;
    aspectRatio: string;
  };
}

export interface BearHouseLocation {
  id: string;
  name: string;
  type: string;
  city: string;
  highlights: string[];
}

export interface BearHouseCaseStudy {
  company: string;
  role: string;
  duration: string;
  locations: BearHouseLocation[];
  scope: string[];
  keyHighlights: {
    number: string;
    label: string;
    detail: string;
  }[];
}

export interface EditorialTopic {
  id: string;
  number: string;
  tag: string;
  category: string;
  title: string;
  theme: string;
  readEstimate: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  type: string;
  summary: string;
  keyResponsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  status: string;
}

export interface ExposureItem {
  id: string;
  number: string;
  title: string;
  type: string;
  description: string;
}

export const PERSONAL_DATA = {
  name: 'PRASHANTHI B.',
  subtitle: 'FASHION & LIFESTYLE BUSINESS',
  specializations: [
    'BUYING & MERCHANDISING',
    'RETAIL',
    'VISUAL MERCHANDISING',
    'BRANDING',
    'MARKETING'
  ],
  traits: [
    { title: 'STRATEGIC', description: 'Merchandise planning & commercial retail rigor' },
    { title: 'CURIOUS', description: 'Consumer behavior & trend forecasting' },
    { title: 'CONTEMPORARY', description: 'Modern visual merchandising & store presentation' }
  ],
  tagline: 'Creative eye. Strong understanding of the business behind fashion.',
  heroStatement: 'CREATIVE EYE.\nBUSINESS MIND.',
  educationHero: 'MBA Candidate — Fashion & Lifestyle Business Management, Pearl Academy Bangalore',
  email: 'prashanthi.rbovilla@gmail.com',
  location: 'Bangalore, India',
  coordinates: '12.9716° N, 77.5946° E',
  linkedin: 'https://www.linkedin.com/in/prashanthi-reddy-14771a244/',
  cvUrl: 'mailto:prashanthi.rbovilla@gmail.com?subject=CV Request - Prashanthi B',
  introduction: 'Pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027). Blending a sharp visual sensibility with structured merchandise planning, retail operations, and market intelligence.'
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'house-of-masaba',
    number: '01',
    title: 'House of Masaba',
    category: 'VM & Merchandise Planning',
    type: 'Academic Project',
    tagline: 'Visual merchandising and merchandise planning academic project for House of Masaba.',
    heroExcerpt: 'Translating bold contemporary Indian design aesthetics into retail floor zoning, visual presentation standards, and assortment planning.',
    focusAreas: [
      'Visual Merchandising',
      'Merchandise Planning',
      'Product Presentation',
      'Range Planning'
    ],
    placeholderMood: {
      accentTone: '#C5A880',
      tag: 'ACADEMIC PROJECT',
      theme: 'House of Masaba • VM & Merchandise Planning',
      aspectRatio: 'aspect-[16/10]'
    }
  },
  {
    id: 'nykaa-fashion',
    number: '02',
    title: 'Nykaa Fashion',
    category: 'Retail & Business Case Study',
    type: 'Academic Project',
    tagline: 'Retail and business case study analyzing Nykaa Fashion.',
    heroExcerpt: 'Analyzing omnichannel fashion commerce, multi-brand category dynamics, consumer buying behaviors, and market positioning.',
    focusAreas: [
      'Retail Case Analysis',
      'Consumer Research',
      'Competitor Benchmarking',
      'Retail Analytics'
    ],
    placeholderMood: {
      accentTone: '#A88B60',
      tag: 'ACADEMIC PROJECT',
      theme: 'Nykaa Fashion • Retail & Business Case Study',
      aspectRatio: 'aspect-[16/10]'
    }
  },
  {
    id: 'sutra-edit',
    number: '03',
    title: 'Sutra Edit',
    category: 'Fashion Business Newsletter & Consulting',
    type: 'Academic Project',
    tagline: 'Fashion business newsletter and consulting project focused on industry insights and trend research.',
    heroExcerpt: 'Curating industry analysis, trend research briefs, and retail consulting methodologies bridging creative direction with commercial viability.',
    focusAreas: [
      'Trend Research',
      'Fashion Business Consulting',
      'Industry Analysis',
      'Newsletter Curation'
    ],
    placeholderMood: {
      accentTone: '#856A41',
      tag: 'ACADEMIC PROJECT',
      theme: 'Sutra Edit • Fashion Business & Consulting',
      aspectRatio: 'aspect-[16/10]'
    }
  }
];

export const FUTURE_PROJECT_PIPELINE = [
  { name: 'Jaypore', tag: 'Retail Strategy' },
  { name: 'Fabindia', tag: 'Brand & Retail Analysis' },
  { name: 'Samsonite SmartTravel+', tag: 'Retail Case Study' },
  { name: 'Hermès', tag: 'Brand Research' },
  { name: 'Design Thinking & Coffee Table Book', tag: 'Creative Strategy' },
  { name: 'Case Competition Projects', tag: 'Business Solutions' }
];

export const BEAR_HOUSE_STUDY: BearHouseCaseStudy = {
  company: 'The Bear House',
  role: 'Visual Merchandising Intern',
  duration: '46-Day Internship',
  locations: [
    {
      id: 'lakeshore',
      name: 'Lakeshore Mall',
      type: 'Premium Retail Mall',
      city: 'Bangalore',
      highlights: ['Store visual audits', 'Customer navigation flow', 'Merchandise display updates']
    },
    {
      id: 'sharath-city',
      name: 'Sharath City Mall',
      type: 'High-Density Flagship Hub',
      city: 'Hyderabad',
      highlights: ['High-traffic display maintenance', 'EOSS sale floor layout', 'Inventory replenishment']
    },
    {
      id: 'banjara-hills',
      name: 'Banjara Hills',
      type: 'Boutique High-Street Store',
      city: 'Hyderabad',
      highlights: ['Focal window styling', 'Product visibility optimization', 'Brand presentation standards']
    },
    {
      id: 'amb-mall',
      name: 'Amb Mall',
      type: 'Destination Retail Mall',
      city: 'Hyderabad',
      highlights: ['New store opening execution', 'Fixture installation standards', 'VM team coordination']
    }
  ],
  scope: [
    'VM store audits across active retail locations',
    'Customer flow mapping & in-store product visibility optimization',
    'Execution for 2 New Store Openings (NSO)',
    'End of Season Sale (EOSS) floor transitions',
    'Floor replenishment & display changes',
    'Store presentation standards & display setups',
    'Cross-functional coordination with VM and store teams'
  ],
  keyHighlights: [
    {
      number: '46',
      label: '46-DAY INTERNSHIP',
      detail: 'Visual Merchandising Intern across high-pace retail environments.'
    },
    {
      number: '04',
      label: 'RETAIL LOCATIONS',
      detail: 'Lakeshore Mall, Sharath City Mall, Banjara Hills, and Amb Mall.'
    },
    {
      number: '02',
      label: 'NEW STORE OPENINGS',
      detail: 'Store opening setup and visual presentation.'
    },
    {
      number: 'EOSS',
      label: 'SALE EXECUTION',
      detail: 'End of Season Sale floor execution and replenishment.'
    }
  ]
};

export const EDITORIAL_TOPICS: EditorialTopic[] = [
  {
    id: 'observation-01',
    number: '01',
    tag: 'RETAIL OBSERVATION',
    category: 'RETAIL',
    title: 'How Retail Environments Shape What Consumers Notice',
    theme: 'Spatial layout, eye-level product positioning, and the geometry of physical retail discovery.',
    readEstimate: 'PERSPECTIVE'
  },
  {
    id: 'brand-02',
    number: '02',
    tag: 'BRAND STRATEGY',
    category: 'BRANDS',
    title: 'Why Luxury Brands Build Worlds, Not Just Products',
    theme: 'Aesthetic universes, retail atmosphere, and sensory storytelling in modern luxury branding.',
    readEstimate: 'PERSPECTIVE'
  },
  {
    id: 'retail-03',
    number: '03',
    tag: 'RETAIL DYNAMICS',
    category: 'CONSUMER',
    title: 'From Store Experience to Consumer Behaviour',
    theme: 'The critical synergy between merchandise planning, inventory replenishment, and visual display standards.',
    readEstimate: 'PERSPECTIVE'
  },
  {
    id: 'merch-04',
    number: '04',
    tag: 'MERCHANDISING',
    category: 'MERCHANDISING',
    title: 'Range Architecture & Category Density in Fashion Retail',
    theme: 'Balancing aesthetic presentation with product depth and SKU velocity.',
    readEstimate: 'PERSPECTIVE'
  },
  {
    id: 'fashion-05',
    number: '05',
    tag: 'FASHION INTELLIGENCE',
    category: 'FASHION',
    title: 'Decoding Cultural Shifts for Commercial Buying',
    theme: 'Translating emerging cultural currents into structured retail assortments.',
    readEstimate: 'PERSPECTIVE'
  }
];

export const SKILLS_CATEGORIES = [
  {
    id: 'merchandising',
    number: '01',
    title: 'MERCHANDISING & PLANNING',
    description: 'Quantitative range architecture, stock allocation, and replenishment cadence.',
    skills: [
      'Merchandise Planning',
      'Range Planning',
      'Assortment Analysis',
      'Replenishment'
    ]
  },
  {
    id: 'visual',
    number: '02',
    title: 'VISUAL MERCHANDISING',
    description: 'Spatial aesthetics, store audit compliance, and elevated product presentation.',
    skills: [
      'Visual Merchandising',
      'Store Audits',
      'Product Presentation'
    ]
  },
  {
    id: 'consumer',
    number: '03',
    title: 'CONSUMER & TREND RESEARCH',
    description: 'Qualitative consumer studies, trend research, and competitive intelligence.',
    skills: [
      'Consumer Research',
      'Trend Research',
      'Competitor Benchmarking'
    ]
  },
  {
    id: 'analytics',
    number: '04',
    title: 'RETAIL & SOCIAL ANALYTICS',
    description: 'Data-driven performance evaluation across retail channels and digital touchpoints.',
    skills: [
      'Retail Analytics',
      'Social Media Analytics'
    ]
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'bear-house',
    number: '01',
    company: 'The Bear House',
    role: 'Visual Merchandising Intern',
    type: 'Retail Internship',
    summary: 'Visual Merchandising Intern across 4 prime retail locations (Lakeshore Mall, Sharath City Mall, Banjara Hills, Amb Mall). Worked on VM audits, customer flow, product visibility, 2 new store openings, EOSS execution, replenishment, display changes, and coordination with VM/store teams.',
    keyResponsibilities: [
      'Visual merchandising audits across 4 stores',
      'Customer flow & product visibility optimization',
      'Execution for 2 new store openings',
      'End of Season Sale (EOSS) setup',
      'Floor replenishment & display changes'
    ]
  },
  {
    id: '3am-india',
    number: '02',
    company: '3AM India',
    role: 'Social Media Marketing Intern',
    type: 'Marketing Internship',
    summary: 'Social Media Marketing Intern at 3AM India focusing on digital brand communication, visual storytelling, content planning, and social media analytics.',
    keyResponsibilities: [
      'Digital brand communication & content support',
      'Visual storytelling for social media campaigns',
      'Social media metrics & audience engagement monitoring'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'pearl-academy',
    degree: 'MBA – Fashion & Lifestyle Business Management',
    institution: 'Pearl Academy, Bangalore',
    period: '2025–2027',
    location: 'Bangalore, India',
    status: 'In Progress'
  },
  {
    id: 'icfai-university',
    degree: 'BBA – Bachelor of Business Administration',
    institution: 'ICFAI University',
    period: '2020–2023',
    status: 'Completed'
  }
];

export const EXPOSURES_DATA: ExposureItem[] = [
  {
    id: 'miss-karnataka',
    number: '01',
    title: 'Miss Karnataka Grand',
    type: 'Industry Exposure',
    description: 'Practical industry exposure to live fashion production, backstage coordination, and styling presentation.'
  },
  {
    id: 'pvr-inox',
    number: '02',
    title: 'PVR INOX × Timbuckdo Cine Career Program',
    type: '4-Day Industry Program',
    description: 'Corporate industry program focused on experiential entertainment, audience engagement, and commercial partnerships.'
  }
];
