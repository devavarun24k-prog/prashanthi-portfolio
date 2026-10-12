import React, { useState } from 'react';
import { FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CollectionConcept {
  id: string;
  name: string;
  tagline: string;
  skus: number;
  barPercent: number; // percentage of max 336
  primaryImage: string;
  primaryCaption: string;
  secondaryImage: string;
  secondaryCaption: string;
  description: string;
}

const COLLECTIONS_DATA: CollectionConcept[] = [
  {
    id: 'festive-bias',
    name: 'Festive Bias',
    tagline: 'Festive Dressing & Celebration',
    skus: 147,
    barPercent: (147 / 336) * 100,
    primaryImage: '/images/projects/house-of-masaba/Festive1.png',
    primaryCaption: 'Festive Bias · Lookbook Board 01',
    secondaryImage: '/images/projects/house-of-masaba/Festive2.png',
    secondaryCaption: 'Festive Bias · Lookbook Board 02',
    description:
      'Festive dressing and elevated silhouettes highlighting signature Masaba gold foil motifs, fluid bias draping, and jewel-toned palettes tailored for festive occasions.'
  },
  {
    id: 'high-end-pret',
    name: 'High-End Prêt',
    tagline: 'Contemporary Prêt-à-Porter',
    skus: 168,
    barPercent: (168 / 336) * 100,
    primaryImage: '/images/projects/house-of-masaba/High End Pret.png',
    primaryCaption: 'High-End Prêt · Lookbook Board 01',
    secondaryImage: '/images/projects/house-of-masaba/High end pret2.png',
    secondaryCaption: 'High-End Prêt · Lookbook Board 02',
    description:
      'Crisp contemporary tailoring and elevated coordinates combining modern day-to-evening silhouettes with refined signature print languages for the urban luxury prêt consumer.'
  },
  {
    id: 'wedding-guest',
    name: 'Wedding Guest',
    tagline: 'Occasionwear & Wedding Guest',
    skus: 210,
    barPercent: (210 / 336) * 100,
    primaryImage: '/images/projects/house-of-masaba/Wedding guest.png',
    primaryCaption: 'Wedding Guest · Lookbook Board 01',
    secondaryImage: '/images/projects/house-of-masaba/Wedding guest 2.png',
    secondaryCaption: 'Wedding Guest · Lookbook Board 02',
    description:
      'Effortless wedding attendee occasionwear designed for sangeets, cocktail soirees, and celebration events, balancing playful colour flows with celebratory luxury.'
  },
  {
    id: 'heritage-remix-lab',
    name: 'Heritage Remix Lab',
    tagline: 'Heritage & Modern Fusion',
    skus: 147,
    barPercent: (147 / 336) * 100,
    primaryImage: '/images/projects/house-of-masaba/Heritage remix lab.png',
    primaryCaption: 'Heritage Remix Lab · Lookbook Board 01',
    secondaryImage: '/images/projects/house-of-masaba/Heritage remix lab2.png',
    secondaryCaption: 'Heritage Remix Lab · Lookbook Board 02',
    description:
      'Traditional textile heritage and indigenous motifs remixed with bold asymmetric draping and contemporary sensibilities to create statement fusion pieces.'
  },
  {
    id: 'print-your-personality',
    name: 'Print Your Personality',
    tagline: 'Signature Prints & Expressive Wear',
    skus: 336,
    barPercent: 100,
    primaryImage: '/images/projects/house-of-masaba/Print your personality 1.png',
    primaryCaption: 'Print Your Personality · Lookbook Board 01',
    secondaryImage: '/images/projects/house-of-masaba/print your personality2.png',
    secondaryCaption: 'Print Your Personality · Lookbook Board 02',
    description:
      'The core volume driver celebrating House of Masaba’s iconic motif vocabulary—fearless, expressive, and idiosyncratic prints across accessible and versatile wardrobe silhouettes.'
  }
];

export const MasabaProjectSection: React.FC = () => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('festive-bias');

  const selectedCollection =
    COLLECTIONS_DATA.find((c) => c.id === selectedCollectionId) || COLLECTIONS_DATA[0];

  return (
    <article
      id="project-house-of-masaba"
      className="group relative pt-4 pb-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* Top Project Identification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-3 mb-8 sm:mb-12 font-mono text-xs text-[#8E8278]">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-bold text-sm">03 /</span>
          <span className="text-[#F4F0E8] font-medium tracking-[0.16em] uppercase">
            RETAIL STRATEGY · PRODUCT ASSORTMENT · RANGE PLANNING
          </span>
        </div>

        <div className="text-[11px] text-[#8E8278] font-mono tracking-wider">
          <span>Academic Project</span>
        </div>
      </div>

      {/* Main Title & Brand Presentation */}
      <div className="space-y-6 mb-12 sm:mb-16">
        <div className="space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#722F37] font-semibold block">
            HOUSE OF MASABA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#F4F0E8] font-normal leading-[1.05] tracking-tight">
            Decoding a brand. Building its range. Shaping its retail story.
          </h2>
          <p className="font-mono text-xs sm:text-[13px] text-[#8E8278] tracking-wider uppercase pt-1">
            Academic Project · Retail Strategy · Product Assortment · Range Planning · Collection Development · Visual Merchandising
          </p>
        </div>
      </div>

      {/* Narrative Section 02 & 03: Brand Opportunity + Assortment Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-20 pt-6 border-t border-[#262320]">
        
        {/* 02 / THE BRAND & THE OPPORTUNITY */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              02 / THE BRAND &amp; THE OPPORTUNITY
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            Understanding What Makes Masaba Distinctive
          </h3>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            From signature prints to contemporary Indian dressing, this project explores House of Masaba’s brand positioning, target consumer, and competitive landscape to identify opportunities for merchandise planning and retail strategy.
          </p>
        </div>

        {/* 03 / THE ASSORTMENT STRATEGY */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              03 / THE ASSORTMENT STRATEGY
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            Turning Brand Identity into a Range
          </h3>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            How can one brand speak to different occasions, styles and consumer needs? The proposed range brings together five collection concepts, each with a distinct merchandise direction within a cohesive brand identity.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-[13px] text-[#722F37] font-medium">
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              5 collection concepts
            </span>
            <span className="text-[#8E8278]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              112 planned styles
            </span>
            <span className="text-[#8E8278]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              1,008 planned SKUs
            </span>
          </div>
        </div>

      </div>

      {/* 04 / THE COLLECTIONS (Interactive Selection Zone) */}
      <div className="space-y-8 mb-16 sm:mb-24 pt-6 border-t border-[#262320]">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block">
            04 / THE COLLECTIONS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F0E8] font-normal leading-tight">
            Five Directions. One Brand.
          </h3>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light max-w-3xl leading-relaxed">
            From festive dressing and elevated prêt to heritage-inspired fusion and statement prints, each collection explores a different expression of the Masaba aesthetic.
          </p>
        </div>

        {/* Interactive 5-Collection Selector Tabs / Thumbnails */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8E8278] flex items-center justify-between">
            <span>SELECT A COLLECTION TO EXPLORE RANGE &amp; LOOKBOOK</span>
            <span className="text-[#722F37]">ACTIVE: {selectedCollection.name}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {COLLECTIONS_DATA.map((col, index) => {
              const isSelected = col.id === selectedCollectionId;
              return (
                <button
                  key={col.id}
                  onClick={() => setSelectedCollectionId(col.id)}
                  type="button"
                  aria-pressed={isSelected}
                  className={`group/btn relative text-left p-3 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#181514] border-[#722F37] shadow-[0_0_20px_rgba(114,47,55,0.35)]'
                      : 'bg-[#141211]/80 border-[#262320] hover:border-[#38332F] hover:bg-[#181514]/60'
                  }`}
                >
                  {/* Thumbnail Mini Preview */}
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-[#262320] mb-2.5 bg-[#0B0A09]">
                    <img
                      src={col.primaryImage}
                      alt={col.name}
                      className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-500 group-hover/btn:scale-105"
                      loading="lazy"
                    />
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#722F37] shadow-[0_0_8px_#722F37]" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono text-[#8E8278]">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] font-mono text-[#722F37] font-semibold">
                        {col.skus} SKUs
                      </span>
                    </div>
                    <span
                      className={`block font-serif text-sm sm:text-[15px] font-medium leading-tight mt-0.5 transition-colors ${
                        isSelected ? 'text-[#F4F0E8]' : 'text-[#C8BFB2] group-hover/btn:text-[#F4F0E8]'
                      }`}
                    >
                      {col.name}
                    </span>
                  </div>

                  {/* Active Indicator Underline */}
                  <div
                    className={`mt-2.5 h-[2px] w-full rounded-full transition-all duration-300 ${
                      isSelected ? 'bg-[#722F37]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display for Selected Collection: Active Narrative & 2-Image Gallery */}
        <div className="space-y-6 pt-4">
          
          {/* Active Collection Header Banner */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#262320] bg-[#141211]/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#722F37] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#722F37] font-semibold">
                  COLLECTION CONCEPT: {selectedCollection.name}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed max-w-2xl">
                {selectedCollection.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4 border-t md:border-t-0 md:border-l border-[#262320] pt-3 md:pt-0 md:pl-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8278] block">
                  PLANNED SKUS
                </span>
                <span className="font-mono text-2xl font-bold text-[#F4F0E8]">
                  {selectedCollection.skus}
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#8E8278] border-l border-[#262320] pl-4">
                <span>OF 1,008 TOTAL</span>
              </div>
            </div>
          </div>

          {/* Dual Lookbook Gallery Spread (Both real uploaded PNG assets shown uncropped) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Primary Fashion Slide */}
            <div className="space-y-2.5">
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-2xl">
                <img
                  src={selectedCollection.primaryImage}
                  alt={selectedCollection.primaryCaption}
                  className="w-full h-full object-contain bg-[#11100F] transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8278] px-1">
                <span className="text-[#C8BFB2]">{selectedCollection.primaryCaption}</span>
                <span className="text-[#722F37]">ASSET 01</span>
              </div>
            </div>

            {/* Secondary Lookbook Slide */}
            <div className="space-y-2.5">
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-2xl">
                <img
                  src={selectedCollection.secondaryImage}
                  alt={selectedCollection.secondaryCaption}
                  className="w-full h-full object-contain bg-[#11100F] transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8278] px-1">
                <span className="text-[#C8BFB2]">{selectedCollection.secondaryCaption}</span>
                <span className="text-[#722F37]">ASSET 02</span>
              </div>
            </div>

          </div>

        </div>

        {/* Native React/CSS PROPOSED RANGE PLAN Infographic */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#262320] bg-[#12100F] shadow-2xl space-y-8">
          
          {/* Infographic Heading & 3 Metric Counters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262320]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#722F37] font-semibold block mb-1">
                COMMERCIAL MERCHANDISE ARCHITECTURE
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal tracking-tight">
                PROPOSED RANGE PLAN
              </h4>
            </div>

            {/* Three Verified Project Metrics Across the Top */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 rounded-xl border border-[#262320] bg-[#161413]">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
                  COLLECTION CONCEPTS
                </div>
                <div className="text-lg sm:text-xl font-mono font-bold text-[#F4F0E8] mt-1">
                  5
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-[#262320] bg-[#161413]">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
                  PLANNED STYLES
                </div>
                <div className="text-lg sm:text-xl font-mono font-bold text-[#F4F0E8] mt-1">
                  112
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl border border-[#262320] bg-[#161413]">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
                  PLANNED SKUS
                </div>
                <div className="text-lg sm:text-xl font-mono font-bold text-[#722F37] mt-1">
                  1,008
                </div>
              </div>
            </div>
          </div>

          {/* 5 Proportional Horizontal Range Bars */}
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8E8278] flex items-center justify-between">
              <span>COLLECTION CONCEPT</span>
              <span>PLANNED SKUS</span>
            </div>

            <div className="space-y-3">
              {COLLECTIONS_DATA.map((col) => {
                const isSelected = col.id === selectedCollectionId;
                return (
                  <div
                    key={col.id}
                    onClick={() => setSelectedCollectionId(col.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#181514] border-[#722F37] shadow-[0_0_15px_rgba(114,47,55,0.25)]'
                        : 'bg-[#141211]/60 border-[#262320] hover:border-[#38332F] hover:bg-[#161413]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm font-sans mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-xs ${
                            isSelected ? 'text-[#722F37] font-bold' : 'text-[#8E8278]'
                          }`}
                        >
                          {isSelected ? '▶' : '•'}
                        </span>
                        <span
                          className={`font-medium ${
                            isSelected ? 'text-[#F4F0E8]' : 'text-[#C8BFB2]'
                          }`}
                        >
                          {col.name}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#722F37]/20 text-[#A87578] uppercase">
                            Selected
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-xs sm:text-sm">
                        <span className={isSelected ? 'text-[#F4F0E8] font-bold' : 'text-[#C8BFB2]'}>
                          {col.skus}
                        </span>
                        <span className="text-[#8E8278] ml-1 text-xs">SKUs</span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="relative w-full h-2 rounded-full bg-[#1F1C1A] overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${
                          isSelected
                            ? 'bg-[#722F37] shadow-[0_0_10px_rgba(114,47,55,0.8)]'
                            : 'bg-[#3D3733]'
                        }`}
                        style={{ width: `${col.barPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-[#262320] flex flex-wrap items-center justify-between text-xs font-mono text-[#8E8278]">
            <span>TOTAL RANGE: 1,008 SKUs</span>
            <span className="text-[#A87578]">5 CONCEPTS · 112 STYLES · 1,008 SKUs</span>
          </div>
        </div>

      </div>

      {/* Narrative Section 05 & 06: Visual Merchandising + Retail Perspective */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-20 pt-6 border-t border-[#262320]">
        
        {/* 05 / VISUAL MERCHANDISING */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              05 / VISUAL MERCHANDISING
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            Translating the Range into Retail
          </h3>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            Exploring how product selection, styling, colour, print and visual presentation can work together to create a cohesive retail experience aligned with the brand.
          </p>
        </div>

        {/* 06 / THE RETAIL PERSPECTIVE */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              06 / THE RETAIL PERSPECTIVE
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            Where Product Meets Strategy
          </h3>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            Bringing consumer insights, assortment planning and visual merchandising together to explore how a distinctive fashion identity can translate into a considered retail direction.
          </p>
        </div>

      </div>

      {/* Working PDF Report Area */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#262320] bg-[#141211]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#722F37]">
            <CheckCircle2 className="w-4 h-4 text-[#722F37]" />
            <span>AUTHENTIC ACADEMIC RESEARCH REPORT</span>
          </div>
          <h4 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal">
            House of Masaba Comprehensive Case Study
          </h4>
          <p className="text-xs sm:text-sm text-[#8E8278] font-sans font-light">
            Verified 8-page complete strategic analysis covering brand DNA, assortment architecture, collection concepts, and visual merchandising guidelines.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href="/documents/House of Masaba.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Full Report — House of Masaba.pdf (8 Pages)"
            className="group relative inline-flex items-center gap-3 py-3.5 px-6 rounded-xl border border-[#722F37] bg-[#1C1816] text-[#F4F0E8] font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#722F37] hover:shadow-[0_0_20px_rgba(114,47,55,0.5)] cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#A87578] group-hover:text-[#F4F0E8] transition-colors" />
            <span>View Full Report (8 Pages)</span>
            <ArrowUpRight className="w-4 h-4 text-[#A87578] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>

    </article>
  );
};
