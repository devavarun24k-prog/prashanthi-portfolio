import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { perspective, images } = PERSONAL_DATA;
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Controlled 10-16px subtle vertical parallax
        setScrollYOffset((progress - 0.5) * 20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-20 sm:pt-24 lg:pt-28 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative overflow-hidden"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* 01. Restrained Editorial Section Label (No Separator Line Below) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10 relative z-10">
        <div className="font-sans font-semibold text-[15px] sm:text-[16px] lg:text-[17px] tracking-[0.12em] uppercase leading-none">
          <span className="text-[#722F37] mr-1.5">02 /</span>
          <span className="text-[#F4F0E8]">ABOUT</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-[13px] text-[#8E8278] tracking-wider uppercase">
          <span className="text-[#C8BFB2]">BANGALORE, INDIA</span>
          <span className="text-[#262320]">•</span>
          <span>FASHION × RETAIL × BRAND STRATEGY</span>
        </div>
      </div>

      {/* 02. Main Editorial Statement (Directly Connected to Canvas, No Borders) */}
      <div className="max-w-5xl space-y-1.5 sm:space-y-2 mb-12 sm:mb-16 relative z-10">
        <h2
          className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.75rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.92] transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {perspective.headline}
        </h2>

        <div className="overflow-hidden">
          <p
            className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] font-normal text-[#C8BFB2] tracking-tight leading-[0.96] transition-all duration-700 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {perspective.subheadline}
          </p>
        </div>

        <div className="overflow-hidden pt-0.5">
          <p
            className={`font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] font-normal text-[#722F37] tracking-tight leading-[0.96] transition-all duration-700 delay-200 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {perspective.accent}
          </p>
        </div>
      </div>

      {/* 03. Editorial Spread: Large Portrait (Left ~50%) + Narrative (Right ~50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start relative z-10">
        {/* Left Column: Large Editorial Portrait (Seamless Magazine Integration) */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
          <div
            className={`relative w-full max-w-lg mx-auto lg:mx-0 aspect-[3/4] h-[460px] sm:h-[580px] lg:h-[660px] xl:h-[720px] overflow-hidden rounded-xl border border-[#262320]/80 shadow-2xl transition-all duration-1000 ease-out ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
            }`}
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

          {/* Subtle Editorial Metadata Beneath Portrait */}
          <div className="space-y-1 pt-1 max-w-lg mx-auto lg:mx-0 font-sans text-xs text-[#8E8278]">
            <div className="flex items-center justify-between uppercase tracking-wider text-[11px]">
              <span className="text-[#F4F0E8] font-semibold">BANGALORE / INDIA</span>
              <span>2025 — 2027</span>
            </div>
            <p className="text-[11px] text-[#C8BFB2] font-mono">
              MBA — FASHION & LIFESTYLE BUSINESS MANAGEMENT
            </p>
          </div>
        </div>

        {/* Right Column: Narrative Body Copy + Restrained Closing Signature */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 pl-0 lg:pl-2">
          <div className="space-y-6 sm:space-y-7 max-w-xl text-base sm:text-lg lg:text-[1.12rem] xl:text-[1.18rem] text-[#C8BFB2] font-sans font-light leading-[1.65] sm:leading-[1.72]">
            {perspective.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`transition-all duration-700 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Restrained Closing Signature Statement */}
          <div
            className={`pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#262320] max-w-xl transition-all duration-700 delay-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] block mb-2 font-semibold">
              CORE PHILOSOPHY
            </span>
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] text-[#F4F0E8] font-normal leading-snug">
              “{perspective.closing}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
