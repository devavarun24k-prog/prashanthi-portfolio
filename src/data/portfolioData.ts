export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  context: string;
  tagline: string;
  heroExcerpt: string;
  focusAreas: string[];
  takeaway: string;
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
    id: 'the-bear-house',
    number: '01',
    title: 'THE BEAR HOUSE',
    subtitle: 'Retail in the Real World',
    category: 'Visual Merchandising & Retail Execution',
    type: '46-Day Industry Internship',
    context: '46-Day Industry Internship | Visual Merchandising & Retail Execution | Hyderabad',
    tagline: 'Understanding how merchandise moves from stockroom to shop floor — and how space, presentation and organisation shape the retail experience.',
    heroExcerpt: 'Hands-on retail execution across 7 store locations, spanning EBO & SIS formats, VM store audits, 2 New Store Openings (NSO), and comprehensive End of Season Sale (EOSS) transitions.',
    focusAreas: [
      'Visual Merchandising',
      'Store Audits',
      'EOSS Setup & Segregation',
      'New Store Openings (NSO)',
      'Mannequin & Fixture Styling',
      'Replenishment Cadence'
    ],
    takeaway: 'Understanding how merchandise moves from stockroom to shop floor — and how space, presentation and organisation shape the retail experience.',
    placeholderMood: {
      accentTone: '#0D0D0D',
      tag: 'RETAIL INTERNSHIP',
      theme: 'The Bear House • Retail in the Real World',
      aspectRatio: 'aspect-[16/10]'
    }
  },
  {
    id: 'healing-the-wait',
    number: '02',
    title: 'HEALING THE WAIT',
    subtitle: 'Designing for a Human Experience',
    category: 'Design Thinking & Service Innovation',
    type: 'Design Thinking Project',
    context: 'Design Thinking | Research | Editorial Design | Service Innovation',
    tagline: 'Transforming the hospital waiting experience through empathetic research, editorial storytelling, and service design.',
    heroExcerpt: 'Addressing the critical anxiety and boredom of healthcare waiting rooms through a 28-page research publication and the Heal Queue digital service concept.',
    focusAreas: [
      'Design Thinking (5 Stages)',
      'Consumer Research & Field Data',
      'Editorial Publication Design',
      'Service Blueprint & Heal Queue',
      'Patient Experience Design'
    ],
    takeaway: 'Information reduces anxiety. By transforming passive waiting into transparent, human-centered service touchpoints, the entire patient journey is elevated.',
    placeholderMood: {
      accentTone: '#161616',
      tag: 'DESIGN THINKING',
      theme: 'Healing The Wait • Human-Centered Service Design',
      aspectRatio: 'aspect-[16/10]'
    }
  },
  {
    id: 'house-of-masaba',
    number: '03',
    title: 'HOUSE OF MASABA',
    subtitle: 'Translating Brand Identity into Retail Experience',
    category: 'Fashion Strategy & Merchandise Planning',
    type: 'Merchandise Planning Case Study',
    context: 'Fashion Strategy | Merchandise Planning | Visual Merchandising | Product Development',
    tagline: 'Translating bold contemporary Indian heritage prints into structured retail range architecture, size ratios, and visual storytelling.',
    heroExcerpt: 'A comprehensive commercial strategy covering 5 product categories, 112 styles, and 1,008 SKUs with defined size ratios, 40–60% margin targets, and end-to-end product development workflows.',
    focusAreas: [
      'Range Architecture (1,008 SKUs)',
      'Size-Ratio Matrix Planning',
      'Commercial Margin Strategy (40-60%)',
      'VM Spatial Hierarchy',
      'Product Development Pipeline'
    ],
    takeaway: 'Where bold cultural brand codes meet quantitative retail discipline — ensuring creative integrity scales sustainably across omnichannel touchpoints.',
    placeholderMood: {
      accentTone: '#262626',
      tag: 'MERCHANDISE PLANNING',
      theme: 'House of Masaba • Printed Identities Edit',
      aspectRatio: 'aspect-[16/10]'
    }
  },
  {
    id: '3am-india',
    number: '04',
    title: '3AM INDIA',
    subtitle: 'Building Digital Consumer Engagement',
    category: 'Social Media & Brand Marketing',
    type: 'Marketing Internship',
    context: 'Social Media Marketing | Content Creation | Ingredient Research | Blog Writing | Influencer Marketing',
    tagline: 'Demystifying skincare through research-backed storytelling, clear consumer communication, and community collaboration.',
    heroExcerpt: 'Developing accessible skincare communication across digital content planning, ingredient research simplification, educational blog writing, and creator outreach.',
    focusAreas: [
      'Content Planning & Strategy',
      'Ingredient Research Simplification',
      'Educational Blog Writing',
      'Influencer Outreach & Coordination',
      'Community Engagement Analytics'
    ],
    takeaway: 'Simplifying complex technical ingredient information into relatable, transparent narratives builds authentic consumer trust and digital community engagement.',
    placeholderMood: {
      accentTone: '#0D0D0D',
      tag: 'DIGITAL MARKETING',
      theme: '3AM India • Digital Consumer Engagement',
      aspectRatio: 'aspect-[16/10]'
    }
  },
  {
    id: 'sutra-edit',
    number: '05',
    title: 'SUTRA EDIT',
    subtitle: 'Building an India-First Fashion Intelligence Platform',
    category: 'Startup Strategy & Fashion Business',
    type: 'Startup Business Model',
    context: 'Startup Strategy | Consumer Research | Business Model | Brand Strategy',
    tagline: 'Fashion business intelligence for India’s next generation of direct-to-consumer and lifestyle founders.',
    heroExcerpt: 'Creating an actionable ecosystem bridging Weekly Edits, an exclusive Founder Community, and bespoke Brand Consulting through a monetized tiered Value Ladder.',
    focusAreas: [
      'India-First Market Gap Analysis',
      'Tiered Value Ladder Strategy',
      'Founder Pulse Intelligence',
      'Continuous Flywheel Growth Loop',
      'Startup Go-To-Market Execution'
    ],
    takeaway: 'Actionable, contextual business intelligence empowers emerging Indian fashion founders to navigate sizing, sourcing, supply chain, and omnichannel growth.',
    placeholderMood: {
      accentTone: '#161616',
      tag: 'STARTUP STRATEGY',
      theme: 'Sutra Edit • Fashion Intelligence Platform',
      aspectRatio: 'aspect-[16/10]'
    }
  }
];

export const BEAR_HOUSE_LOCATIONS_DATA: BearHouseLocation[] = [
  {
    id: 'lakeshore',
    name: 'Lakeshore Mall',
    type: 'Premium Retail Mall (EBO)',
    city: 'Bangalore',
    highlights: ['EOSS size-wise fixture & grid organisation', 'Customer flow mapping', 'Store visual audits']
  },
  {
    id: 'sharath-city',
    name: 'Sharath City Mall',
    type: 'Flagship Hub (EBO)',
    city: 'Hyderabad',
    highlights: ['High-traffic display maintenance', 'Product & colour flow execution', 'Floor replenishment cadence']
  },
  {
    id: 'banjara-hills',
    name: 'Banjara Hills',
    type: 'High-Street Boutique',
    city: 'Hyderabad',
    highlights: ['Focal window styling', 'Prestige brand presentation', 'Product visibility optimization']
  },
  {
    id: 'broadway',
    name: 'Broadway Hyderabad',
    type: 'Retail Destination',
    city: 'Hyderabad',
    highlights: ['Floor zoning standards', 'Mannequin coordination', 'Fixture maintenance']
  },
  {
    id: 'amb-mall',
    name: 'Amb Mall',
    type: 'Destination Mall (EBO)',
    city: 'Hyderabad',
    highlights: ['EOSS shorts wall execution', 'Stock segregation', 'Fixture installation standards']
  },
  {
    id: 'himayath-nagar',
    name: 'Himayath Nagar',
    type: 'New Store Opening (NSO)',
    city: 'Hyderabad',
    highlights: ['NSO full visual floor setup', 'Initial fixture allocation', 'Opening stock merchandising']
  },
  {
    id: 'tolichowki',
    name: 'Tolichowki',
    type: 'New Store Opening (NSO)',
    city: 'Hyderabad',
    highlights: ['NSO visual merchandising execution', 'Display compliance', 'VM team coordination']
  }
];

export const BEAR_HOUSE_STUDY = {
  company: 'THE BEAR HOUSE',
  role: 'Visual Merchandising Intern',
  duration: '46-Day Industry Internship',
  locations: BEAR_HOUSE_LOCATIONS_DATA,
  keyHighlights: [
    {
      number: '07',
      label: 'RETAIL LOCATIONS',
      detail: 'Audited & executed across Bangalore & Hyderabad EBO / SIS stores'
    },
    {
      number: '02',
      label: 'NEW STORE OPENINGS',
      detail: 'Complete initial floor setup at Himayath Nagar & Tolichowki'
    },
    {
      number: '46',
      label: 'DAYS IMMERSION',
      detail: 'Intensive on-ground visual merchandising & floor execution'
    },
    {
      number: '01',
      label: 'EOSS CAMPAIGN',
      detail: 'Rapid high-density transformation & shorts wall size grid'
    }
  ],
  scope: [
    'Visual merchandising store audits and standards compliance',
    'Customer flow analysis, focal hotspots, and eye-level optimization',
    'End of Season Sale (EOSS) size-wise grid segregation & shorts wall execution',
    'New Store Openings (NSO) layout planning and initial stock arrival merchandising',
    'Mannequin dressing, seasonal storytelling looks, and fixture maintenance',
    'Stockroom to shop floor replenishment cadence and inventory control'
  ]
};

export const FUTURE_PROJECT_PIPELINE = [
  { name: 'Retail Space Optimization', tag: 'IN PROGRESS' },
  { name: 'Luxury Consumer Archetypes', tag: 'RESEARCH' },
  { name: 'Omnichannel Buying Matrix', tag: 'ACADEMIC' }
];

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
    summary: 'Visual Merchandising Intern across 7 retail locations (Lakeshore Mall, Sharath City Mall, Banjara Hills, Broadway, Amb Mall, Himayath Nagar, Tolichowki). Worked on VM audits, customer flow, product visibility, 2 New Store Openings (NSO), EOSS execution, replenishment, and display changes.',
    keyResponsibilities: [
      'Visual merchandising audits across 7 stores',
      'Customer flow & product visibility optimization',
      'Execution for 2 new store openings (Himayath Nagar, Tolichowki)',
      'End of Season Sale (EOSS) setup & segregation',
      'Floor replenishment & display changes'
    ]
  },
  {
    id: '3am-india',
    number: '02',
    company: '3AM India',
    role: 'Social Media Marketing Intern',
    type: 'Marketing Internship',
    summary: 'Social Media Marketing Intern at 3AM India focusing on digital brand communication, visual storytelling, content planning, ingredient research simplification, and social media analytics.',
    keyResponsibilities: [
      'Digital brand communication & content support',
      'Simplifying skincare ingredient information for consumers',
      'Visual storytelling for social media campaigns',
      'Influencer research and collaboration outreach',
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

