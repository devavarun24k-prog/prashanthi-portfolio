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
      { threshold: 0.15 }
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
        // Controlled 12-18px subtle vertical parallax
        setScrollYOffset((progress - 0.5) * 22);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative overflow-hidden"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Top Restrained Section Label & Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#262320] relative z-10 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
          <span className="font-semibold tracking-[0.18em] text-[#722F37] uppercase text-[11px] sm:text-xs">
            02 / ABOUT
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[#8E8278] text-[10px] sm:text-[11px] tracking-widest uppercase">
          <span className="text-[#C8BFB2]">BANGALORE / INDIA</span>
          <span className="text-[#262320]">•</span>
          <span>FASHION × RETAIL × CONSUMER THINKING</span>
        </div>
      </div>

      {/* LARGE MONUMENTAL EDITORIAL STATEMENT (Hero Typography of About Section) */}
      <div className="pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-[#262320] relative z-10">
        <div className="max-w-5xl space-y-1 sm:space-y-2">
          <h2
            className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6.25rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.93] transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {perspective.headline}
          </h2>

          <div className="overflow-hidden">
            <p
              className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] font-normal text-[#C8BFB2] tracking-tight leading-[0.96] transition-all duration-700 delay-150 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {perspective.subheadline}
            </p>
          </div>

          <div className="overflow-hidden pt-1">
            <p
              className={`font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] font-normal text-[#722F37] tracking-tight leading-[0.96] transition-all duration-700 delay-300 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {perspective.accent}
            </p>
          </div>
        </div>
      </div>

      {/* EDITORIAL SPREAD: LARGE PORTRAIT (LEFT ~40%) + EDITORIAL NARRATIVE (RIGHT ~60%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 pt-10 sm:pt-14 items-start relative z-10">
        {/* Left Column: Large Editorial Portrait (Starts within the initial fold) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-3">
          <div
            className={`relative w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] h-[440px] sm:h-[560px] lg:h-[640px] xl:h-[700px] overflow-hidden rounded-xl border border-[#262320]/80 shadow-2xl transition-all duration-1000 ease-out ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
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

          <div className="flex items-center justify-between text-[10px] font-mono text-[#8E8278] uppercase tracking-wider px-1 pt-0.5 max-w-md mx-auto lg:mx-0">
            <span>PRASHANTHI B.</span>
            <span>PERSPECTIVE & PROFILE</span>
          </div>
        </div>

        {/* Right Column: Confident Editorial Body Text + Restrained Closing Signature */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 pl-0 lg:pl-6 xl:pl-8 border-l-0 lg:border-l border-[#262320]">
          <div className="space-y-6 sm:space-y-7 max-w-[640px] text-base sm:text-lg lg:text-[1.15rem] xl:text-[1.2rem] text-[#C8BFB2] font-sans font-light leading-[1.65] sm:leading-[1.7]">
            {perspective.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`transition-all duration-700 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${400 + index * 120}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Restrained Closing Signature Statement */}
          <div
            className={`pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#262320] max-w-[640px] transition-all duration-700 delay-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] block mb-2 font-semibold">
              CORE PHILOSOPHY
            </span>
            <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.65rem] xl:text-[1.75rem] text-[#F4F0E8] font-normal leading-snug">
              “{perspective.closing}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
