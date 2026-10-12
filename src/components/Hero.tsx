import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInView(true);
    }, 60);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none flex flex-col justify-center items-center pt-24 sm:pt-28 lg:pt-28 pb-10 sm:pb-12 lg:pb-12 px-6 sm:px-10 lg:px-14 xl:px-16 max-w-[1440px] mx-auto"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none" />

      {/* Subtle Technical Markings matching reference composition */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none font-mono text-[10px] text-[#8E8278]/25 z-0">
        <span className="absolute top-20 left-1/4">3</span>
        <span className="absolute top-14 right-1/3">8</span>
        <span className="absolute top-1/3 left-16">8</span>
        <span className="absolute top-1/2 right-12">8</span>
        <span className="absolute bottom-20 left-12 flex items-center gap-2">
          <span>+</span>
          <span className="text-[9px] border border-[#8E8278]/30 px-1 py-0.5">33</span>
        </span>
        <span className="absolute bottom-16 right-1/4">B+Z</span>
      </div>

      {/* Left Edge Monochrome Editorial Imagery Panel */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-36 xl:w-44 pointer-events-none overflow-hidden z-0">
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left grayscale contrast-125 brightness-50 opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0A09]/70 to-[#0B0A09]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/80 via-transparent to-[#0B0A09]" />
      </div>

      {/* Right Edge Monochrome Editorial Imagery Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-36 xl:w-44 pointer-events-none overflow-hidden z-0">
        <img
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right grayscale contrast-125 brightness-50 opacity-25 mix-blend-luminosity scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0B0A09]/70 to-[#0B0A09]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/80 via-transparent to-[#0B0A09]" />
      </div>

      {/* Main Narrative Container across 85–90% of available width */}
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Eyebrow Label */}
        <p
          className={`text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#A87578] mb-4 sm:mb-5 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          BEYOND THE BRAND NAME
        </p>

        {/* 3-Line Centered Editorial Headline with Open Width */}
        <h1
          className={`font-serif text-[clamp(2.15rem,4vw,4.35rem)] font-normal tracking-tight leading-[1.08] text-[#F4F0E8] w-full max-w-5xl xl:max-w-6xl mx-auto transition-all duration-700 delay-100 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          I like understanding<br />
          <span className="italic text-[#C88A90] whitespace-normal sm:whitespace-nowrap">why we choose a brand —</span><br />
          and why we keep choosing it.
        </h1>

        {/* Centered Supporting Description with Open Proportions */}
        <p
          className={`mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#C8BFB2] font-sans font-light leading-[1.65] max-w-2xl lg:max-w-3xl mx-auto transition-all duration-700 delay-200 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Exploring how brands turn ideas into identities, first impressions into trust, and customers into long-term connections.
        </p>

        {/* Three Information Columns matching the wide container */}
        <div
          className={`mt-8 sm:mt-10 lg:mt-12 w-full max-w-5xl lg:max-w-6xl xl:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 pt-6 sm:pt-7 border-t border-[#262320]/70 text-left transition-all duration-700 delay-300 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Col 1: CURRENT EDUCATION */}
          <div className="space-y-1.5 pb-5 md:pb-0 border-b border-[#262320]/60 md:border-b-0 md:border-r md:border-[#262320] md:pr-8 lg:pr-10 xl:pr-12">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] block">
              CURRENT EDUCATION
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug">
              Pearl Academy
            </h4>
            <p className="text-xs sm:text-[13px] font-sans text-[#8E8278] leading-relaxed whitespace-normal xl:whitespace-nowrap">
              MBA — Fashion & Lifestyle Business Management
            </p>
            <p className="text-xs font-mono text-[#8E8278]/80">
              2025–2027
            </p>
          </div>

          {/* Col 2: BASED IN */}
          <div className="space-y-1.5 pb-5 md:pb-0 border-b border-[#262320]/60 md:border-b-0 md:border-r md:border-[#262320] md:px-8 lg:px-10 xl:px-12">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] block">
              BASED IN
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug">
              Bangalore, India
            </h4>
          </div>

          {/* Col 3: OPEN TO */}
          <div className="space-y-1.5 md:pl-8 lg:pl-10 xl:pl-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A87578] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578]">
                OPEN TO
              </span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug whitespace-normal xl:whitespace-nowrap">
              Branding, Marketing & Retail Opportunities
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
