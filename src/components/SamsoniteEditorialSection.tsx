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

        <div className="text-[11px] text-[#8E8278] font-serif italic sm:font-mono sm:not-italic">
          <span>Academic Project</span>
        </div>
      </div>

      {/* C. Main Editorial Grid (3 Visually Distinct Desktop Zones) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
        
        {/* Left Zone — Project Identity and Information (~35% / 4.5 cols) */}
        <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Samsonite Official Logo Wordmark */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center text-[#F4F0E8] select-none">
                <span className="font-sans font-bold tracking-tight text-2xl sm:text-3xl">Samson</span>
                <span className="relative inline-flex items-center justify-center mx-[1.5px] w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-4 h-4 text-[#F4F0E8]">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7a5 5 0 0 1 5 5" strokeLinecap="round" />
                    <path d="M12 17a5 5 0 0 1-5-5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-sans font-bold tracking-tight text-2xl sm:text-3xl">ite</span>
              </div>
            </div>

            {/* Main Title */}
            <h3 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-[#F4F0E8] font-normal leading-[0.92] tracking-tight">
              SmartTravel<span className="text-[#C88A90] font-sans font-light ml-0.5">+</span>
            </h3>

            {/* Italic Editorial Headline */}
            <p className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#C88A90] italic font-normal leading-snug pt-1">
              Turning Travel Friction<br className="hidden sm:inline" /> into a Product Opportunity
            </p>

            {/* Exact Overview Copy */}
            <p className="text-sm sm:text-[15px] lg:text-base text-[#C8BFB2] font-sans font-light leading-relaxed pt-2">
              A product marketing and go-to-market strategy project exploring SmartTravel+, a proposed smart-luggage concept for the Indian market, built around traveller needs, product differentiation and Samsonite’s brand positioning.
            </p>
          </div>

          {/* Three Compact Metadata Columns */}
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
                MARKET
              </span>
              <span className="text-xs sm:text-[13px] font-mono font-medium text-[#F4F0E8] block">
                India
              </span>
            </div>
          </div>
        </div>

        {/* Middle Zone — Dominant Campaign Image (~42% / 5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col justify-center">
          <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-2xl">
            <img
              src="/images/samsonite/s1.jpg"
              alt="Samsonite SmartTravel+ Dominant Campaign Artwork"
              className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-[1.015]"
            />
            {/* Subtle Editorial Overlay Tag matching Photo 2 */}
            <div className="absolute top-6 left-6 font-sans text-xs tracking-[0.25em] uppercase text-[#F4F0E8]/90 font-light select-none pointer-events-none drop-shadow-md">
              <div>TRAVEL</div>
              <div className="font-medium text-[#F4F0E8]">SMARTER</div>
            </div>
          </div>
        </div>

        {/* Right Zone — Two Supporting Images Stacked Vertically (~23% / 3 cols) */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-4 justify-between">
          {/* Upper Panel: Product Detail / Weighing Feature (s2.jpg) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl aspect-[16/11] sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-0.5rem)]">
            <img
              src="/images/samsonite/s2.jpg"
              alt="SmartTravel+ Integrated Weight Scale Handle"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Lower Panel: Phone Tracking Interface (s3.jpg) */}
          <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl aspect-[16/11] sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-0.5rem)]">
            <img
              src="/images/samsonite/s3.jpg"
              alt="SmartTravel+ Location Tracking Phone Interface"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>

      {/* D. Four Narrative Sections Along the Bottom Row */}
      <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#262320] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
        
        {/* Block 01 — THE CHALLENGE */}
        <div className="lg:col-span-3 space-y-2.5">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
            01 &nbsp; THE CHALLENGE
          </span>
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            How can Samsonite make everyday travel more secure, convenient and connected through a differentiated luggage offering?
          </p>
        </div>

        {/* Block 02 — KEY CONTRIBUTIONS */}
        <div className="lg:col-span-3 space-y-2.5">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
            02 &nbsp; KEY CONTRIBUTIONS
          </span>
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            Analysed traveller pain points, market trends and the competitive landscape. Developed the proposed product concept, target audience, positioning, pricing and go-to-market strategy.
          </p>
        </div>

        {/* Block 03 — OPPORTUNITY */}
        <div className="lg:col-span-3 space-y-2.5">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
            03 &nbsp; OPPORTUNITY
          </span>
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            Explore how product differentiation can address traveller concerns around luggage security, convenience and connectivity.
          </p>
        </div>

        {/* Block 04 — THE TAKEAWAY */}
        <div className="lg:col-span-2 space-y-2.5">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
            04 &nbsp; THE TAKEAWAY
          </span>
          <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
            Translating consumer pain points into a differentiated product proposition supported by brand strategy and market-entry planning.
          </p>
        </div>

        {/* Next Project Arrow Circle */}
        <div className="lg:col-span-1 flex items-center justify-start lg:justify-end pt-2 lg:pt-0">
          <a
            href="#project-sutra-edit"
            title="Next project: Sutra Edit"
            className="w-11 h-11 rounded-full border border-[#262320] hover:border-[#A87578] flex items-center justify-center text-[#C8BFB2] hover:text-[#F4F0E8] transition-colors group"
            aria-label="Next project: Sutra Edit"
          >
            <span className="text-base group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

      </div>
    </article>
  );
};
