import React, { useState, useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const [inView, setInView] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Subtle page-load entrance
    const timer = setTimeout(() => {
      setInView(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[74vh] lg:min-h-[85vh] w-full bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Subtle Architectural Layout Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none" />

      {/* Main Editorial Homepage Introduction Spread across full available container */}
      <div className="py-6 sm:py-10 lg:py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column (~60% / 7 cols): Main Narrative & Introduction Hierarchy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* 1. Main Display Headline */}
            <h1
              className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.65rem] text-[#F4F0E8] font-normal tracking-tight leading-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Good Design. Better Strategy.
            </h1>

            {/* 2. Short Statement Below Headline */}
            <p
              className={`text-lg sm:text-xl lg:text-[1.35rem] text-[#F4F0E8] font-sans font-normal leading-snug max-w-2xl transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I like good design. I like better strategy. Ideally, I want both.
            </p>

            {/* 3. Supporting Description */}
            <p
              className={`text-base sm:text-[1.125rem] lg:text-[1.2rem] text-[#C8BFB2] font-sans font-light leading-[1.75] max-w-2xl transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I’m interested in what happens between a brand being noticed and a customer choosing it — from positioning and communication to products, retail and consumer experience.
            </p>

            {/* 4. Call to Action: EXPLORE SELECTED WORK → */}
            <div
              className={`pt-4 transition-all duration-700 delay-300 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.16em] text-[#F4F0E8] hover:text-[#A87578] group py-2"
              >
                <span className="border-b border-[#722F37] group-hover:border-[#F4F0E8] pb-0.5 transition-colors">
                  EXPLORE SELECTED WORK
                </span>
                <span className="text-[#722F37] group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column (~40% / 5 cols): Restrained Minimal Editorial Information Panel */}
          <div
            className={`lg:col-span-5 lg:pl-6 xl:pl-8 lg:border-l lg:border-[#262320] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="space-y-8 sm:space-y-9 pt-2">
              
              {/* BASED IN */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#722F37] font-semibold block">
                  BASED IN
                </span>
                <p className="text-base sm:text-lg font-sans text-[#F4F0E8] font-medium leading-snug">
                  Bangalore, India
                </p>
              </div>

              {/* EDUCATION */}
              <div className="space-y-2 pt-6 border-t border-[#262320]">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#722F37] font-semibold block">
                  EDUCATION
                </span>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-sans text-[#F4F0E8] font-medium leading-snug">
                    Pearl Academy
                  </p>
                  <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
                    MBA — Fashion & Lifestyle Business Management
                  </p>
                  <p className="text-xs font-mono text-[#8E8278] pt-0.5">
                    2025–2027
                  </p>
                </div>
              </div>

              {/* FOCUS */}
              <div className="space-y-2 pt-6 border-t border-[#262320]">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#722F37] font-semibold block">
                  FOCUS
                </span>
                <p className="text-sm sm:text-[15px] font-sans text-[#C8BFB2] leading-relaxed">
                  Branding · Marketing · Fashion & Retail
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
