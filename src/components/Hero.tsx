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
      className="relative min-h-[72vh] lg:min-h-[84vh] w-full bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Subtle Architectural Layout Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none" />

      {/* Main Editorial Homepage Introduction Spread */}
      <div className="py-6 sm:py-10 lg:py-12 relative z-10 w-full max-w-5xl">
        <div className="space-y-10 sm:space-y-12">
          
          {/* Main Introduction Hierarchy */}
          <div className="space-y-6 sm:space-y-7">
            {/* 1. Main Display Headline (10-15% larger on desktop) */}
            <h1
              className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] text-[#F4F0E8] font-normal tracking-tight leading-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Good Design. Better Strategy.
            </h1>

            {/* 2. Short Statement Below Headline */}
            <p
              className={`text-lg sm:text-xl lg:text-[1.35rem] text-[#F4F0E8] font-sans font-normal leading-snug max-w-3xl transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I like good design. I like better strategy. Ideally, I want both.
            </p>

            {/* 3. Supporting Description */}
            <p
              className={`text-base sm:text-[1.125rem] lg:text-[1.2rem] text-[#C8BFB2] font-sans font-light leading-[1.75] max-w-3xl transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I’m interested in what happens between a brand being noticed and a customer choosing it — from positioning and communication to products, retail and consumer experience.
            </p>

            {/* 4. Call to Action: EXPLORE SELECTED WORK → */}
            <div
              className={`pt-3 transition-all duration-700 delay-300 ease-out ${
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

          {/* Balanced Two-Column Information Row Beneath a Subtle Divider */}
          <div
            className={`pt-8 sm:pt-10 border-t border-[#262320] max-w-3xl transition-all duration-700 delay-400 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 font-mono text-xs">
              {/* LEFT — BASED IN */}
              <div className="space-y-1">
                <span className="text-[10px] text-[#8E8278] uppercase tracking-[0.2em] font-semibold block">
                  BASED IN
                </span>
                <span className="text-sm sm:text-[15px] font-sans text-[#F4F0E8] font-medium block">
                  BANGALORE / INDIA
                </span>
              </div>

              {/* RIGHT — EDUCATION & STATUS */}
              <div className="space-y-1">
                <span className="text-[10px] text-[#8E8278] uppercase tracking-[0.2em] font-semibold block">
                  EDUCATION & STATUS
                </span>
                <span className="text-sm sm:text-[15px] font-sans text-[#C8BFB2] block">
                  PEARL ACADEMY · 2025–2027
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
