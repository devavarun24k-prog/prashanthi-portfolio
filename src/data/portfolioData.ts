export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  shortDescription: string;
  fullOverview: string;
  focusAreas: string[];
  placeholderMood: {
    accentColor: string;
    tag: string;
    aspectRatio: string;
    theme: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period?: string;
  type: 'Internship' | 'Education';
  institution?: string;
  location?: string;
  description?: string;
}

export interface IndustryExposureItem {
  id: string;
  title: string;
  type: string;
}

export const PERSONAL_INFO = {
  name: 'PRASHANTHI B',
  titleSegments: [
    'BUYING & MERCHANDISING',
    'RETAIL',
    'VISUAL MERCHANDISING'
  ],
  education: {
    degree: 'MBA – Fashion & Lifestyle Business Management',
    institution: 'Pearl Academy, Bangalore',
    duration: '2025–2027',
  },
  contact: {
    email: 'prashanthi.rbovilla@gmail.com',
    location: 'Bangalore, India',
    linkedinPlaceholder: 'LinkedIn profile (to be added)',
    instagramPlaceholder: 'Instagram profile (to be added)'
  },
  heroIntro: 'Pursuing MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027). Specializing in Buying & Merchandising, Retail, and Visual Merchandising.',
  about: {
    lead: 'Focused on Buying, Merchandising, Retail, and Visual Merchandising.',
    paragraphs: [
      'Prashanthi B is currently pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027).',
      'Her practical background includes internships as a Visual Merchandising Intern at The Bear House and a Social Media Marketing Intern at 3AM India.',
      'Her academic work and research focus on merchandise planning, visual merchandising, retail analysis, consumer research, and trend research.'
    ],
    pillars: [
      {
        title: 'Buying & Merchandising',
        description: 'Merchandise planning, range planning, assortment analysis, and replenishment.'
      },
      {
        title: 'Visual Merchandising',
        description: 'Product presentation, store audits, and visual retail display execution.'
      },
      {
        title: 'Retail & Analytics',
        description: 'Retail analytics, competitor benchmarking, and consumer research.'
      },
      {
        title: 'Trend & Digital Media',
        description: 'Trend research, fashion consulting case studies, and social media analytics.'
      }
    ]
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'house-of-masaba',
    title: 'House of Masaba',
    category: 'VM & Merchandise Planning',
    type: 'Academic Project',
    shortDescription: 'Visual merchandising and merchandise planning academic project for House of Masaba.',
    fullOverview: 'Academic project focusing on visual merchandising concepts, merchandise planning, and retail presentation for House of Masaba.',
    focusAreas: [
      'Visual Merchandising',
      'Merchandise Planning',
      'Product Presentation',
      'Range Planning'
    ],
    placeholderMood: {
      accentColor: '#B39260',
      tag: 'VM & MERCHANDISE PLANNING',
      aspectRatio: 'aspect-[4/3]',
      theme: 'House of Masaba • VM & Merchandise Planning'
    }
  },
  {
    id: 'nykaa-fashion',
    title: 'Nykaa Fashion',
    category: 'Retail & Business Case Study',
    type: 'Academic Project',
    shortDescription: 'Retail and business case study analyzing Nykaa Fashion.',
    fullOverview: 'Academic case study examining retail operations, business strategy, consumer research, and market dynamics of Nykaa Fashion.',
    focusAreas: [
      'Retail Case Analysis',
      'Consumer Research',
      'Competitor Benchmarking',
      'Retail Analytics'
    ],
    placeholderMood: {
      accentColor: '#9C7A4A',
      tag: 'RETAIL CASE STUDY',
      aspectRatio: 'aspect-[4/3]',
      theme: 'Nykaa Fashion • Retail & Business Study'
    }
  },
  {
    id: 'sutra-edit',
    title: 'Sutra Edit',
    category: 'Fashion Business Newsletter & Consulting',
    type: 'Academic Project',
    shortDescription: 'Fashion business newsletter and consulting project focused on industry insights and trend research.',
    fullOverview: 'Academic initiative focused on fashion business consulting, industry analysis, newsletter curation, and trend research.',
    focusAreas: [
      'Trend Research',
      'Fashion Business Consulting',
      'Industry Analysis',
      'Content & Newsletter Curation'
    ],
    placeholderMood: {
      accentColor: '#7A6B53',
      tag: 'NEWSLETTER & CONSULTING',
      aspectRatio: 'aspect-[4/3]',
      theme: 'Sutra Edit • Fashion Business & Consulting'
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'bear-house',
    company: 'The Bear House',
    role: 'Visual Merchandising Intern',
    type: 'Internship',
    description: 'Visual Merchandising Intern at The Bear House.'
  },
  {
    id: '3am-india',
    company: '3AM India',
    role: 'Social Media Marketing Intern',
    type: 'Internship',
    description: 'Social Media Marketing Intern at 3AM India.'
  },
  {
    id: 'pearl-academy',
    company: 'Pearl Academy, Bangalore',
    role: 'MBA – Fashion & Lifestyle Business Management',
    period: '2025–2027',
    type: 'Education',
    institution: 'Pearl Academy, Bangalore',
    location: 'Bangalore',
    description: 'MBA in Fashion & Lifestyle Business Management (2025–2027).'
  }
];

export const INDUSTRY_EXPOSURES: IndustryExposureItem[] = [
  {
    id: 'miss-karnataka-grand',
    title: 'Miss Karnataka Grand',
    type: 'Industry Exposure'
  },
  {
    id: 'pvr-inox-timbuckdo',
    title: 'PVR INOX × Timbuckdo Cine Career Program',
    type: 'Industry Exposure'
  }
];

// EXACT skills from the CV as explicitly specified
export const SKILLS_LIST: string[] = [
  'Merchandise Planning',
  'Range Planning',
  'Assortment Analysis',
  'Visual Merchandising',
  'Store Audits',
  'Product Presentation',
  'Replenishment',
  'Consumer Research',
  'Trend Research',
  'Competitor Benchmarking',
  'Retail Analytics',
  'Social Media Analytics'
];
