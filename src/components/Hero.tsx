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
      className="relative min-h-[70vh] lg:min-h-[82vh] w-full bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Subtle Architectural Layout Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none" />

      {/* Main Editorial Homepage Introduction Spread */}
      <div className="py-6 sm:py-10 lg:py-12 relative z-10 w-full max-w-4xl">
        <div className="space-y-8 sm:space-y-10">
          
          {/* Section Category / Role Label */}
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#722F37] uppercase tracking-[0.18em]">
              BUYING · MERCHANDISING · RETAIL · BRAND STRATEGY
            </p>
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.75rem] text-[#C8BFB2] font-normal tracking-tight leading-snug mt-1.5">
              MBA — Fashion & Lifestyle Business Management
            </p>
          </div>

          {/* Headline & Narrative Copy (Slightly enlarged by 10-15% and 5-10% as requested) */}
          <div className="space-y-6 sm:space-y-7">
            <h1
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] text-[#F4F0E8] font-normal tracking-tight leading-[1.08] transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Good Design. Better Strategy.
            </h1>

            <div
              className={`space-y-4 text-[1.0625rem] sm:text-[1.15rem] lg:text-[1.25rem] text-[#C8BFB2] font-sans font-light leading-[1.75] max-w-3xl transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p>
                I like good design. I like better strategy. Ideally, I want both.
              </p>
              <p>
                I’m interested in what happens between a brand being noticed and a customer choosing it — from positioning and communication to products, retail and consumer experience.
              </p>
            </div>

            {/* Call to Action: Explore Selected Work */}
            <div
              className={`pt-2 transition-all duration-700 delay-300 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-[#F4F0E8] hover:text-[#A87578] group py-2"
              >
                <span className="border-b border-[#722F37] group-hover:border-[#F4F0E8] pb-0.5 transition-colors">
                  Explore Selected Work
                </span>
                <span className="text-[#722F37] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Small Information System */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#262320] text-xs font-mono max-w-2xl transition-all duration-700 delay-400 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div>
              <span className="text-[10px] text-[#8E8278] uppercase tracking-wider block mb-0.5">
                BASED IN
              </span>
              <span className="text-[#C8BFB2] font-semibold">BANGALORE / INDIA</span>
            </div>

            <div>
              <span className="text-[10px] text-[#8E8278] uppercase tracking-wider block mb-0.5">
                EDUCATION & STATUS
              </span>
              <span className="text-[#C8BFB2]">PEARL ACADEMY · 2025–2027</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
