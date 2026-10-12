import React from 'react';

export const SamsoniteEditorialSection: React.FC = () => {
  return (
    <article
      id="project-samsonite-smarttravel"
      className="group relative pt-4 pb-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* B. Slim Project Information Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-3 mb-8 sm:mb-10 font-mono text-xs text-[#8E8278]">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-bold text-sm">01 /</span>
          <span className="text-[#F4F0E8] font-medium tracking-[0.16em] uppercase">
            PRODUCT MARKETING · ACADEMIC PROJECT
          </span>
        </div>

        <div className="text-[11px] text-[#8E8278] font-mono tracking-wider">
          <span>Academic Project</span>
        </div>
      </div>

      {/* C. Main Editorial Grid (3 Visually Distinct Responsive Zones) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start">
        
        {/* Left Zone — Project Identity and Information */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Samsonite Official Logo Wordmark */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center text-[#F4F0E8] select-none">
                <span className="font-sans font-bold tracking-tight text-xl sm:text-2xl">Samson</span>
                <span className="relative inline-flex items-center justify-center mx-[1px] w-4 h-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-3.5 h-3.5 text-[#F4F0E8]">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7a5 5 0 0 1 5 5" strokeLinecap="round" />
                    <path d="M12 17a5 5 0 0 1-5-5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-sans font-bold tracking-tight text-xl sm:text-2xl">ite</span>
              </div>
            </div>

            {/* Main Title: Cormorant Garamond, controlled, contained, no collision */}
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3rem] text-[#F4F0E8] font-normal leading-[1.05] tracking-tight">
              SmartTravel<span className="text-[#A87578] font-serif font-light ml-0.5">+</span>
            </h3>

            {/* Italic Editorial Headline: Cormorant Garamond */}
            <p className="font-serif text-xl sm:text-2xl lg:text-[1.35rem] xl:text-[1.45rem] text-[#C8BFB2] italic font-normal leading-[1.35] pt-0.5">
              Turning Travel Friction<br className="hidden sm:inline" /> into a Product Opportunity
            </p>

            {/* Exact Overview Copy: DM Sans (16-17px on desktop, line-height 1.65) */}
            <p className="text-[15px] sm:text-base lg:text-[17px] text-[#C8BFB2] font-sans font-normal leading-[1.65] pt-1">
              A product marketing and go-to-market strategy project exploring SmartTravel+, a proposed smart-luggage concept for the Indian market, built around traveller needs, product differentiation and Samsonite’s brand positioning.
            </p>
          </div>

          {/* Three Compact Metadata Columns: IBM Plex Mono */}
          <div className="pt-5 border-t border-[#262320] grid grid-cols-3 gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8E8278] block">
                PROJECT TYPE
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                Academic Project
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8E8278] block">
                FOCUS AREA
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                Product Marketing
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8E8278] block">
                MARKET
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                India
              </span>
            </div>
          </div>
        </div>

        {/* Middle Zone — Dominant Campaign Image (s1.jpg natural 16:9) */}
        <div className="md:col-span-7 lg:col-span-5 relative flex flex-col justify-start">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl">
            <img
              src="/images/samsonite/s1.jpg"
              alt="Samsonite SmartTravel+ Dominant Campaign Artwork"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
            />
          </div>
        </div>

        {/* Right Zone — Two Supporting Images Stacked Vertically (s2.jpg & s3.jpg natural 16:9) */}
        <div className="md:col-span-5 lg:col-span-3 flex flex-col gap-3.5 sm:gap-4 justify-start">
          {/* Upper Panel: Product Detail / Weighing Feature (s2.jpg) */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#262320] bg-[#141211] shadow-lg">
            <img
              src="/images/samsonite/s2.jpg"
              alt="SmartTravel+ Integrated Weight Scale Handle"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Lower Panel: Phone Tracking Interface (s3.jpg) */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#262320] bg-[#141211] shadow-lg">
            <img
              src="/images/samsonite/s3.jpg"
              alt="SmartTravel+ Location Tracking Phone Interface"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>

      {/* D. Four Narrative Sections Along the Bottom Row: Equal 4 Columns on Desktop */}
      <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#262320] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        
        {/* Block 01 — THE CHALLENGE */}
        <div className="space-y-2.5">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#8E8278] font-medium block">
            01 — THE CHALLENGE
          </span>
          <p className="text-sm sm:text-[15px] lg:text-base font-sans text-[#C8BFB2] leading-[1.65] font-normal">
            How can Samsonite make everyday travel more secure, convenient and connected through a differentiated luggage offering?
          </p>
        </div>

        {/* Block 02 — KEY CONTRIBUTIONS */}
        <div className="space-y-2.5">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#8E8278] font-medium block">
            02 — KEY CONTRIBUTIONS
          </span>
          <p className="text-sm sm:text-[15px] lg:text-base font-sans text-[#C8BFB2] leading-[1.65] font-normal">
            Analysed traveller pain points, market trends and the competitive landscape. Developed the proposed product concept, target audience, positioning, pricing and go-to-market strategy.
          </p>
        </div>

        {/* Block 03 — OPPORTUNITY */}
        <div className="space-y-2.5">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#8E8278] font-medium block">
            03 — OPPORTUNITY
          </span>
          <p className="text-sm sm:text-[15px] lg:text-base font-sans text-[#C8BFB2] leading-[1.65] font-normal">
            Explore how product differentiation can address traveller concerns around luggage security, convenience and connectivity.
          </p>
        </div>

        {/* Block 04 — THE TAKEAWAY */}
        <div className="space-y-2.5">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#8E8278] font-medium block">
            04 — THE TAKEAWAY
          </span>
          <p className="text-sm sm:text-[15px] lg:text-base font-sans text-[#C8BFB2] leading-[1.65] font-normal">
            Translating consumer pain points into a differentiated product proposition supported by brand strategy and market-entry planning.
          </p>
        </div>

      </div>
    </article>
  );
};
