import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { perspective, images } = PERSONAL_DATA;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate normalized progress while section is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Restrained 10-18px parallax movement
        setScrollYOffset((progress - 0.5) * 24);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative overflow-hidden"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* 01. Restrained Section Label & Editorial Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-10 border-b border-[#262320] relative z-10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
          <span className="font-bold tracking-widest text-[#722F37] uppercase">
            03 / ABOUT
          </span>
        </div>

        <div className="flex items-center gap-3 text-[#8E8278] text-[11px] uppercase tracking-wider">
          <span className="text-[#C8BFB2]">BANGALORE / INDIA</span>
          <span className="text-[#262320]">•</span>
          <span>FASHION × RETAIL × CONSUMER THINKING</span>
        </div>
      </div>

      {/* 02. Refined Editorial Introduction Statement (Controlled Width & Hierarchy) */}
      <div className="py-10 sm:py-14 border-b border-[#262320] relative z-10">
        <div className="max-w-3xl sm:max-w-4xl space-y-1.5 sm:space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-[#F4F0E8] tracking-tight leading-[1.12]">
            {perspective.headline}
          </h2>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-normal text-[#C8BFB2] tracking-tight leading-[1.15]">
            {perspective.subheadline}
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-normal text-[#722F37] tracking-tight leading-[1.15] pt-1">
            {perspective.accent}
          </p>
        </div>
      </div>

      {/* 03. Editorial Reading Spread (Portrait Left ~38%, Narrative Right ~62%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 sm:pt-16 items-start relative z-10">
        {/* Left Column: Unboxed Editorial Portrait (Magazine integration, no card box) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-3">
          <div
            className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto lg:mx-0 overflow-hidden rounded-xl border border-[#262320]/80 shadow-2xl transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(0, ${scrollYOffset}px, 0)`,
            }}
          >
            <img
              src={images.portrait01}
              alt="Prashanthi B. — Editorial Portrait"
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out hover:scale-[1.015]"
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#8E8278] uppercase tracking-wider px-1 pt-1 max-w-sm sm:max-w-md mx-auto lg:mx-0">
            <span>PRASHANTHI B.</span>
            <span>PERSPECTIVE & PROFILE</span>
          </div>
        </div>

        {/* Right Column: Narrative Body Copy & Restrained Closing Statement */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 pl-0 lg:pl-6 border-l-0 lg:border-l border-[#262320]">
          <div className="space-y-5 sm:space-y-6 max-w-xl text-sm sm:text-[15px] lg:text-base text-[#C8BFB2] font-sans font-light leading-[1.8]">
            {perspective.paragraphs.map((paragraph, index) => (
              <p key={index} className="transition-opacity duration-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 04. Restrained Editorial Closing Statement */}
          <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#262320]">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#722F37] block mb-2 font-semibold">
                CORE PHILOSOPHY
              </span>
              <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#F4F0E8] font-normal leading-relaxed">
                “{perspective.closing}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
