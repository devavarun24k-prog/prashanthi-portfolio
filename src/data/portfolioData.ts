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
  composition: 'image-right' | 'image-left' | 'full-width' | 'asymmetric-split' | 'editorial-type';
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

export interface ExperienceItem {
  id: string;
  number: string;
  year: string;
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
  credentialType: string;
}

export interface ExposureItem {
  id: string;
  number: string;
  title: string;
  type: string;
  description: string;
}

export interface ProductCriteria {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  lens: string;
  keyQuestions: string[];
}

export interface ObservationItem {
  id: string;
  number: string;
  category: string;
  title: string;
  takeaway: string;
  readNote: string;
}

export interface BeyondRoleItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  notes: string;
}

export const PERSONAL_DATA = {
  name: 'PRASHANTHI B.',
  roleDescriptor: 'BUYING · MERCHANDISING · RETAIL',
  heroDisplay: 'BUY.\nCURATE.\nPRESENT.',
  heroAltDisplay: 'I SEE\nFASHION\nDIFFERENTLY.',
  heroSupport: 'Fashion, retail and merchandising through a commercial and visual lens.',
  tagline: 'Creative eye. Strong understanding of the business behind fashion.',
  educationHero: 'MBA Candidate — Fashion & Lifestyle Business Management, Pearl Academy Bangalore (2025–2027)',
  email: 'prashanthi.rbovilla@gmail.com',
  location: 'Bangalore, India',
  coordinates: '12.9716° N, 77.5946° E',
  linkedin: 'https://www.linkedin.com/in/prashanthi-reddy-14771a244/',
  cvUrl: 'mailto:prashanthi.rbovilla@gmail.com?subject=CV Request - Prashanthi B',
  introduction: 'Pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027). Blending a sharp visual sensibility with structured merchandise planning, retail operations, and consumer intelligence.',
  specializations: [
    'BUYING & MERCHANDISING',
    'RETAIL STRATEGY',
    'VISUAL MERCHANDISING',
    'BRANDING',
    'MARKETING'
  ],
  traits: [
    { title: 'STRATEGIC', description: 'Merchandise planning & commercial retail rigor' },
    { title: 'CURIOUS', description: 'Consumer behavior & trend forecasting' },
    { title: 'CONTEMPORARY', description: 'Modern visual merchandising & store presentation' }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'the-bear-house',
    number: '01',
    title: 'THE BEAR HOUSE',
    subtitle: 'Retail in the Real World',
    category: 'Visual Merchandising & Retail Execution',
    type: '46-Day Industry Internship',
    context: '46-Day Industry Internship | Visual Merchandising & Retail Execution | Bangalore & Hyderabad',
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
    composition: 'image-right',
    placeholderMood: {
      accentTone: '#151515',
      tag: 'RETAIL INTERNSHIP',
      theme: 'The Bear House • Retail in the Real World',
      aspectRatio: 'aspect-[4/5]'
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
    tagline: 'Transforming the healthcare waiting experience through empathetic research, editorial storytelling, and service design.',
    heroExcerpt: 'Addressing the critical anxiety and boredom of healthcare waiting rooms through a 28-page research publication and the Heal Queue digital service concept.',
    focusAreas: [
      'Design Thinking (5 Stages)',
      'Consumer Research & Field Data',
      'Editorial Publication Design',
      'Service Blueprint & Heal Queue',
      'Patient Experience Design'
    ],
    takeaway: 'Information reduces anxiety. By transforming passive waiting into transparent, human-centered service touchpoints, the entire patient journey is elevated.',
    composition: 'image-left',
    placeholderMood: {
      accentTone: '#1C1C1C',
      tag: 'DESIGN THINKING',
      theme: 'Healing The Wait • Human-Centered Service Design',
      aspectRatio: 'aspect-[4/5]'
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
    heroExcerpt: 'A comprehensive commercial strategy covering 5 product categories, 112 styles, and 1,008 SKUs with defined Indian size curves, 40–60% margin targets, and end-to-end product development workflows.',
    focusAreas: [
      'Range Architecture (1,008 SKUs)',
      'Size-Ratio Matrix Planning',
      'Commercial Margin Strategy (40-60%)',
      'VM Spatial Hierarchy',
      'Product Development Pipeline'
    ],
    takeaway: 'Where bold cultural brand codes meet quantitative retail discipline — ensuring creative integrity scales sustainably across omnichannel touchpoints.',
    composition: 'full-width',
    placeholderMood: {
      accentTone: '#282828',
      tag: 'MERCHANDISE PLANNING',
      theme: 'House of Masaba • Printed Identities Edit',
      aspectRatio: 'aspect-[16/9]'
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
    composition: 'asymmetric-split',
    placeholderMood: {
      accentTone: '#151515',
      tag: 'DIGITAL MARKETING',
      theme: '3AM India • Digital Consumer Engagement',
      aspectRatio: 'aspect-[4/5]'
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
    composition: 'editorial-type',
    placeholderMood: {
      accentTone: '#1C1C1C',
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

export const BEHIND_THE_EYE_CRITERIA: ProductCriteria[] = [
  {
    id: 'silhouette',
    number: '01',
    name: 'SILHOUETTE',
    subtitle: 'Architecture & Form',
    description: 'Assessing volume, proportion, drape lines, and structural balance on the human body across movement and posture.',
    lens: 'Is the silhouette contemporary yet commercially wearable across target consumer demographics?',
    keyQuestions: [
      'How does the drape behave across varying textile weights?',
      'Does the cut complement diverse regional body archetypes?',
      'Is the proportion progressive without alienating the core audience?'
    ]
  },
  {
    id: 'fabric',
    number: '02',
    name: 'FABRIC',
    subtitle: 'Tactile Integrity & Performance',
    description: 'Evaluating yarn density, hand feel, breathability, durability, and commercial wash-and-wear longevity.',
    lens: 'Does the material justify the retail price point and withstand operational store handling?',
    keyQuestions: [
      'What is the fiber composition and environmental durability?',
      'How does the surface texture reflect ambient store lighting?',
      'What is the shrinkage and crease resistance under active wear?'
    ]
  },
  {
    id: 'colour',
    number: '03',
    name: 'COLOUR',
    subtitle: 'Palette Coherence & Resonance',
    description: 'Analyzing undertones, seasonal color stories, dye consistency, and flattering contrast with Indian skin tones.',
    lens: 'Does the color palette build a cohesive wall presentation and cross-merchandising story?',
    keyQuestions: [
      'Does the colorway sit harmoniously within the collection drop?',
      'How does the shade translate from screen/e-comm to physical store?',
      'Does it balance commercial neutrals with high-impact accents?'
    ]
  },
  {
    id: 'customer',
    number: '04',
    name: 'CUSTOMER',
    subtitle: 'Psychographics & Occasion',
    description: 'Decoding lifestyle rituals, dressing occasions, purchase triggers, and emotional resonance of the consumer.',
    lens: 'Which precise wardrobe occasion does this piece solve in the modern consumer’s lifestyle?',
    keyQuestions: [
      'Is this an impulsive discovery or a premeditated capsule purchase?',
      'What friction points prevent the customer from converting in fitting rooms?',
      'Does the piece offer versatile styling across work-to-evening transitions?'
    ]
  },
  {
    id: 'price',
    number: '05',
    name: 'PRICE',
    subtitle: 'Margin Math & Perceived Value',
    description: 'Aligning raw material costs, manufacturing bill of materials, retail pricing bands, and target gross margin (40–60%).',
    lens: 'Does the consumer perceive the value before they inspect the price tag?',
    keyQuestions: [
      'Does the margin withstand seasonal discount and markdown risks?',
      'How does it benchmark against comparable high-street luxury peers?',
      'Is the price ladder intuitive between core, fashion, and prestige tiers?'
    ]
  },
  {
    id: 'context',
    number: '06',
    name: 'CONTEXT',
    subtitle: 'Spatial Presence & Omnichannel Role',
    description: 'Evaluating how the garment commands attention on floor fixtures, digital thumbnails, and window hero displays.',
    lens: 'Where does this product live in the physical store and digital discovery journey?',
    keyQuestions: [
      'Does it function as an entrance traffic driver or basket-building add-on?',
      'How clearly does the piece photograph in digital campaign formats?',
      'Can it be cross-merchandised easily with standard core bottoms?'
    ]
  }
];

export const OBSERVATIONS_DATA: ObservationItem[] = [
  {
    id: 'obs-01',
    number: '01',
    category: 'TREND OBSERVATION',
    title: 'Contemporary Festive Adaptations in Indian Retail',
    takeaway: 'Modern Indian luxury consumers increasingly favor lightweight, pre-draped silhouettes and separates that blend cultural motifs with functional everyday ease.',
    readNote: 'Curated retail observation on occasion wear evolution.'
  },
  {
    id: 'obs-02',
    number: '02',
    category: 'CONSUMER PSYCHOLOGY',
    title: 'The Geometry of Physical Store Discovery',
    takeaway: 'Dwell time increases by over 40% when entrance sightlines are kept unobstructed and central nesting tables provide tactile, non-pressured exploration zones.',
    readNote: 'Spatial field notes from retail store audits.'
  },
  {
    id: 'obs-03',
    number: '03',
    category: 'PRODUCT ARCHITECTURE',
    title: 'The Broken-Size Dilemma in Indian Sizing Curves',
    takeaway: 'Applying standard Western size ratios leads to high residual XS inventory. Aligning production depth tightly with regional M/L demand protects retail full-price sell-through.',
    readNote: 'Merchandise planning & markdown mitigation framework.'
  },
  {
    id: 'obs-04',
    number: '04',
    category: 'RETAIL DYNAMICS',
    title: 'Why Luxury Brands Build Worlds, Not Just Products',
    takeaway: 'Aesthetic consistency across spatial architecture, scent, amber lighting, and curated hanger spacing transforms a transaction into an emotional brand immersion.',
    readNote: 'Brand universe & visual merchandising synthesis.'
  },
  {
    id: 'obs-05',
    number: '05',
    category: 'DIGITAL COMMUNICATION',
    title: 'Demystifying Product Chemistry for Digital Communities',
    takeaway: 'Consumers reject opaque cosmetic jargon. Translating active ingredients into simple structural analogies builds deep organic credibility and high save rates.',
    readNote: 'Skincare content strategy insights from 3AM India.'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'bear-house',
    number: '01',
    year: '2024',
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
    year: '2024',
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
    status: 'Candidate / In Progress',
    credentialType: 'POST-GRADUATE'
  },
  {
    id: 'icfai-university',
    degree: 'BBA – Bachelor of Business Administration',
    institution: 'ICFAI University',
    period: '2020–2023',
    status: 'Graduated',
    credentialType: 'UNDER-GRADUATE'
  }
];

export const EXPOSURES_DATA: ExposureItem[] = [
  {
    id: 'miss-karnataka',
    number: '01',
    title: 'Miss Karnataka Grand',
    type: 'Industry Production Exposure',
    description: 'Practical industry exposure to live fashion production, backstage runway coordination, model management, and styling presentation.'
  },
  {
    id: 'pvr-inox',
    number: '02',
    title: 'PVR INOX × Timbuckdo Cine Career Program',
    type: '4-Day Industry Immersion',
    description: 'Corporate industry program focused on experiential entertainment, audience engagement funnels, and commercial partnerships.'
  }
];

export const BEYOND_THE_ROLE_DATA: BeyondRoleItem[] = [
  {
    id: 'fashion',
    title: 'FASHION & TEXTILES',
    category: 'Aesthetic Inspiration',
    summary: 'Deep appreciation for heritage weaving techniques, Indian textile craftsmanship, and modern silhouette innovations.',
    notes: 'Textile archives, draping techniques, and independent designer showcases.'
  },
  {
    id: 'culture',
    title: 'CULTURE & ART',
    category: 'Cultural Context',
    summary: 'Observing cultural signals, gallery exhibitions, photography, and how contemporary art influences seasonal fashion moods.',
    notes: 'Art history, gallery installations, and cultural anthropology.'
  },
  {
    id: 'travel',
    title: 'TRAVEL & ARCHITECTURE',
    category: 'Spatial Perception',
    summary: 'Exploring retail districts, urban architecture, and how different global cities structure their shopping environments.',
    notes: 'Urban retail districts, architectural textures, and sensory store designs.'
  },
  {
    id: 'design',
    title: 'DESIGN & EDITORIAL',
    category: 'Visual Sensibility',
    summary: 'Passion for high-end editorial book layout, tactile paper stocks, restrained typography, and minimalist spatial design.',
    notes: 'Print typography, layout geometry, and contemporary publication design.'
  }
];

export const MEDIA_ASSET_MAPPING = {
  heroPortrait: {
    id: 'hero-portrait',
    role: 'Hero Editorial Portrait (4:5 Ratio)',
    label: 'PRASHANTHI B // EDITORIAL PORTRAIT 01',
    aspectRatio: 'aspect-[4/5]',
    fallbackText: 'PORTRAIT PLACEHOLDER // PRASHANTHI B'
  },
  aboutPortrait: {
    id: 'about-portrait',
    role: 'About Profile Portrait (4:5 Ratio)',
    label: 'PRASHANTHI B // PROFILE PORTRAIT 02',
    aspectRatio: 'aspect-[4/5]',
    fallbackText: 'PROFILE PORTRAIT // PRASHANTHI B'
  },
  povSee: {
    id: 'pov-see',
    role: 'POV Observation / Research Image',
    label: '01 / SEE — TREND & RESEARCH',
    theme: 'Consumer Observation & Field Research'
  },
  povSelect: {
    id: 'pov-select',
    role: 'POV Assortment / Merchandising Image',
    label: '02 / SELECT — MERCHANDISE PLANNING',
    theme: 'Range Architecture & Category Density'
  },
  povPresent: {
    id: 'pov-present',
    role: 'POV Visual Merchandising Image',
    label: '03 / PRESENT — VISUAL MERCHANDISING',
    theme: 'Spatial Curation & Store Presentation'
  }
};
