import React, { useState } from 'react';

export const SamsoniteEditorialSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'tracking' | 'power'>('tracking');

  return (
    <article
      id="project-samsonite-smarttravel"
      className="group relative pt-4 pb-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* B. Slim Project Information Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-3 mb-8 sm:mb-10">
        <div className="flex items-center gap-3 font-mono text-xs text-[#8E8278]">
          <span className="text-[#C88A90] font-bold text-sm">01 /</span>
          <span className="text-[#F4F0E8] font-medium tracking-[0.18em] uppercase">
            PRODUCT MARKETING · ACADEMIC PROJECT
          </span>
        </div>

        <div className="font-serif italic text-sm sm:text-base text-[#C8BFB2]">
          Academic Project
        </div>
      </div>

      {/* C. Main Editorial Grid (3 Visually Distinct Desktop Zones matching Photo 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-stretch">
        
        {/* Left Zone — Project Identity and Information (~33% / 4 cols) */}
        <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Samsonite Official Logo Wordmark with authentic swirl */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center text-[#F4F0E8] select-none">
                <span className="font-sans font-bold tracking-tight text-2xl sm:text-3xl">Samson</span>
                <span className="relative inline-flex items-center justify-center mx-[1.5px] w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#F4F0E8]">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7a5 5 0 0 1 5 5" strokeLinecap="round" />
                    <path d="M12 17a5 5 0 0 1-5-5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-sans font-bold tracking-tight text-2xl sm:text-3xl">ite</span>
              </div>
            </div>

            {/* Main Title: Cormorant Garamond */}
            <h3 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-[#F4F0E8] font-normal leading-[0.92] tracking-tight">
              SmartTravel<span className="text-[#C88A90] font-sans font-light ml-0.5">+</span>
            </h3>

            {/* Italic Editorial Headline: Cormorant Garamond in muted terracotta/rose */}
            <p className="font-serif text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] text-[#C88A90] italic font-normal leading-[1.22] pt-1">
              Turning Travel Friction<br className="hidden sm:inline" /> into a Product Opportunity
            </p>

            {/* Exact Overview Copy: DM Sans */}
            <p className="text-sm sm:text-[15px] lg:text-base text-[#C8BFB2] font-sans font-light leading-[1.65] pt-2 max-w-lg">
              A product marketing and go-to-market strategy project exploring SmartTravel+, a proposed smart-luggage concept for the Indian market, built around traveller needs, product differentiation and Samsonite’s brand positioning.
            </p>
          </div>

          {/* Three Compact Metadata Columns matching Photo 2: PROJECT TYPE, FOCUS AREA, TIMELINE */}
          <div className="pt-6 border-t border-[#262320] grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
                PROJECT TYPE
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                Academic Project
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
                FOCUS AREA
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                Product Marketing
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
                TIMELINE
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                2024
              </span>
            </div>
          </div>
        </div>

        {/* Middle Zone — Dominant Campaign Image with Angled Left Edge (~42% / 5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-center">
          {/* External decorative badge: 01 — */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-5 left-8 font-mono text-[10px] text-[#C88A90] pointer-events-none z-20">
            <span>01</span>
            <span className="w-4 h-[1px] bg-[#C88A90]/60 inline-block" />
          </div>

          <div
            className="relative w-full h-[460px] sm:h-[520px] lg:h-full lg:min-h-[560px] rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-2xl"
            style={{
              clipPath: 'polygon(24px 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            <img
              src="/images/samsonite/s1.jpg"
              alt="Samsonite SmartTravel+ Dominant Campaign Artwork"
              className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-[1.015]"
            />

            {/* Left Angled Accent Contour Line matching Photo 2 */}
            <div
              className="absolute inset-0 pointer-events-none border-l-2 border-[#C88A90]/60"
              style={{
                clipPath: 'polygon(0 0, 26px 0, 2px 100%, 0 100%)',
                background: 'linear-gradient(to bottom, #C88A90 0%, #A87578 100%)',
              }}
            />

            {/* Subtle Editorial Overlay Tag matching Photo 2: TRAVEL SMARTER */}
            <div className="absolute top-6 left-10 font-sans text-xs tracking-[0.22em] uppercase text-[#F4F0E8] font-light select-none pointer-events-none drop-shadow-md">
              <div className="text-[#C8BFB2]">TRAVEL</div>
              <div className="font-semibold text-[#F4F0E8]">SMARTER</div>
              <div className="w-7 h-[1px] bg-[#F4F0E8]/70 mt-1" />
            </div>

            {/* Technical Metadata Coordinates at bottom right */}
            <div className="absolute bottom-4 right-5 font-mono text-[10px] text-[#8E8278]/60 tracking-wider pointer-events-none select-none">
              02 &nbsp; C2
            </div>
          </div>
        </div>

        {/* Right Zone — Two Supporting Images Stacked Vertically (~25% / 3 cols) */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-4 justify-between">
          {/* Upper Panel: Product Detail / Weighing Feature (s2.jpg) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-0.5rem)] group">
            <img
              src="/images/samsonite/s2.jpg"
              alt="SmartTravel+ Integrated Weight Scale Handle"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>

          {/* Lower Panel: Phone Tracking Interface (s3.jpg) & In-Transit Power (s4.jpg) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-0.5rem)] group">
            <img
              src={activeFeature === 'tracking' ? '/images/samsonite/s3.jpg' : '/images/samsonite/s4.jpg'}
              alt={activeFeature === 'tracking' ? 'SmartTravel+ Location Tracking Phone Interface' : 'SmartTravel+ In-Transit Power System'}
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.025]"
            />

            {/* Discreet feature toggle pill ensuring all 4 mandatory files are accessible */}
            <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] rounded-full p-0.5 font-mono text-[9px]">
              <button
                type="button"
                onClick={() => setActiveFeature('tracking')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  activeFeature === 'tracking'
                    ? 'bg-[#C88A90] text-[#0B0A09] font-bold'
                    : 'text-[#8E8278] hover:text-[#F4F0E8]'
                }`}
              >
                02 TRACK
              </button>
              <button
                type="button"
                onClick={() => setActiveFeature('power')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  activeFeature === 'power'
                    ? 'bg-[#C88A90] text-[#0B0A09] font-bold'
                    : 'text-[#8E8278] hover:text-[#F4F0E8]'
                }`}
              >
                03 POWER
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* D. Four Narrative Sections Along the Bottom Row matching Photo 2 */}
      <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#262320] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
        
        {/* Block 01 — THE CHALLENGE */}
        <div className="lg:col-span-3 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#C88A90] font-semibold">01</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F4F0E8] font-medium">
              THE CHALLENGE
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#262320]" />
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            How can Samsonite make everyday travel more secure, convenient and connected through a differentiated luggage offering?
          </p>
        </div>

        {/* Block 02 — KEY CONTRIBUTIONS */}
        <div className="lg:col-span-3 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#C88A90] font-semibold">02</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F4F0E8] font-medium">
              KEY CONTRIBUTIONS
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#262320]" />
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            Analysed traveller pain points, developed the product concept, positioning, pricing and go-to-market strategy.
          </p>
        </div>

        {/* Block 03 — OPPORTUNITY GAP */}
        <div className="lg:col-span-3 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#C88A90] font-semibold">03</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F4F0E8] font-medium">
              OPPORTUNITY GAP
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#262320]" />
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            Explore how product differentiation can address traveller concerns around luggage security, convenience and connectivity.
          </p>
        </div>

        {/* Block 04 — THE TAKEAWAY */}
        <div className="lg:col-span-2 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#C88A90] font-semibold">04</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#F4F0E8] font-medium">
              THE TAKEAWAY
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#262320]" />
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            Translating consumer pain points into a differentiated product proposition supported by brand strategy and market-entry planning.
          </p>
        </div>

        {/* Circular Arrow Button (linking to next project inline) */}
        <div className="lg:col-span-1 flex items-center justify-start lg:justify-end pt-2 lg:pt-0">
          <a
            href="#project-sutra-edit"
            title="Next project: Sutra Edit"
            className="w-12 h-12 rounded-full border border-[#C88A90]/70 hover:border-[#F4F0E8] flex items-center justify-center text-[#C88A90] hover:text-[#F4F0E8] transition-all group"
            aria-label="Next project: Sutra Edit"
          >
            <span className="text-lg group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

      </div>
    </article>
  );
};
