import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [scrollYOffset, setScrollYOffset] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Subtle page-load entrance
    const timer = setTimeout(() => {
      setInView(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      // Controlled subtle 10px vertical movement on portrait
      setScrollYOffset(Math.min(scrollY * 0.05, 14));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen w-full bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Subtle Architectural Layout Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none" />

      {/* 01. Central 2-Column Professional Hero Spread */}
      <div className="my-auto py-4 sm:py-8 lg:py-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Identity, Profession, Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Main Display Heading */}
            <div className="space-y-3 sm:space-y-4">
              <div className="overflow-hidden">
                <h1
                  className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] xl:text-[6.75rem] 2xl:text-[7.5rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.92] uppercase whitespace-nowrap transition-all duration-700 ease-out ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  PRASHANTHI<span className="text-[#722F37]">.</span>B
                </h1>
              </div>

              {/* Profession & Disciplines */}
              <div
                className={`transition-all duration-700 delay-100 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#722F37] uppercase tracking-[0.16em]">
                  BUYING · MERCHANDISING · RETAIL · BRAND STRATEGY
                </p>
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-[2rem] text-[#C8BFB2] font-normal tracking-tight leading-snug mt-1.5">
                  MBA — Fashion & Lifestyle Business Management
                </p>
              </div>
            </div>

            {/* Mobile Portrait (Positioned naturally in mobile sequence) */}
            <div className="block lg:hidden w-full pt-2 pb-4">
              <div
                className={`w-full aspect-[3/4] h-[440px] sm:h-[520px] overflow-hidden rounded-sm border border-[#262320]/80 shadow-2xl transition-all duration-800 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <img
                  src={PERSONAL_DATA.images.hero}
                  alt="PRASHANTHI.B — Fashion Business & Merchandising"
                  className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.02]"
                />
              </div>
            </div>

            {/* Positioning Statement */}
            <p
              className={`text-base sm:text-lg lg:text-[1.1rem] text-[#C8BFB2] font-sans font-light leading-relaxed max-w-xl transition-all duration-700 delay-200 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              “{PERSONAL_DATA.intro}”
            </p>

            {/* Small Information System */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#262320] text-xs font-mono transition-all duration-700 delay-300 ease-out ${
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

          {/* Right Column: Clean Editorial Portrait (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div
              className={`relative w-full max-w-md xl:max-w-lg aspect-[3/4] h-[520px] lg:h-[620px] xl:h-[680px] overflow-hidden rounded-sm border border-[#262320]/80 shadow-2xl transition-all duration-800 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transform: `translate3d(0, ${scrollYOffset}px, 0)`,
              }}
            >
              <img
                src={PERSONAL_DATA.images.hero}
                alt="PRASHANTHI.B — Fashion Business & Merchandising"
                className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 02. Restrained Bottom Bar & Gentle Scroll Indicator */}
      <div className="relative z-20 w-full pt-4 border-t border-[#262320] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8E8278]">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-semibold">PORTFOLIO</span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#C8BFB2]">RETAIL × MERCHANDISING × BRAND STRATEGY</span>
        </div>

        {/* Small Scroll Indicator with Gentle 4px Pulse */}
        <button
          onClick={() => handleNavClick('#work')}
          className="group flex items-center gap-2 text-[#8E8278] hover:text-[#F4F0E8] transition-colors focus:outline-none"
        >
          <span className="text-[11px] uppercase tracking-wider">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#722F37] animate-scroll-gentle" />
        </button>
      </div>
    </section>
  );
};
