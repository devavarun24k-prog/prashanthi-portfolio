import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (vh * 0.9), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen w-full bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Subtle Architectural Layout Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none" />

      {/* 01. TOP EDITORIAL METADATA BAR */}
      <div className="relative z-30 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262320] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#722F37] font-semibold text-xs tracking-widest">
              VOL. 01
            </span>
            <span className="text-[#262320]">/</span>
            <span className="font-sans font-semibold text-[13px] sm:text-[14px] tracking-[0.14em] text-[#F4F0E8] uppercase">
              PRASHANTHI.B
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#8E8278] tracking-wider uppercase">
            <span className="text-[#C8BFB2]">BANGALORE / INDIA</span>
            <span className="text-[#262320]">•</span>
            <span>2025 — 2027</span>
          </div>
        </div>
      </div>

      {/* 02. EDITORIAL MASTHEAD COMPOSITION (MASSIVE OVERSIZED TYPE + ASYMMETRIC PORTRAIT OVERLAP) */}
      <div className="relative z-10 my-auto py-6 sm:py-10 lg:py-14">
        {/* Massive Editorial Masthead (The Masthead Moves horizontally on scroll on desktop) */}
        <div
          className="relative z-20 pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: isMobile
              ? `translate3d(0, ${scrollProgress * -30}px, 0)`
              : `translate3d(${scrollProgress * 180}px, 0, 0)`,
          }}
        >
          <h1 className="font-serif text-[4.75rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[13rem] xl:text-[15.5rem] 2xl:text-[17.5rem] font-normal text-[#F4F0E8] tracking-[-0.055em] leading-[0.80] uppercase whitespace-nowrap drop-shadow-2xl">
            PRASHANTHI<span className="text-[#722F37]">.</span>B
          </h1>
        </div>

        {/* Asymmetric Portrait Spread Layered With Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end -mt-8 sm:-mt-14 lg:-mt-24 xl:-mt-32 relative z-10">
          {/* Left Space & Discipline Headline */}
          <div className="lg:col-span-6 space-y-4 pt-4 lg:pt-0">
            <div className="space-y-2">
              <p className="font-sans font-semibold text-xs sm:text-[13px] text-[#722F37] uppercase tracking-[0.18em]">
                BUYING · MERCHANDISING · RETAIL · BRAND STRATEGY
              </p>
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#C8BFB2] font-normal tracking-tight leading-snug max-w-lg">
                Fashion Business & Merchandising Strategy
              </p>
            </div>
          </div>

          {/* Right: Large Editorial Portrait (Occupies ~40% width, sits asymmetrically overlapping masthead) */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <div
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-[500px] aspect-[3/4] h-[400px] sm:h-[500px] lg:h-[580px] xl:h-[640px] overflow-hidden shadow-2xl transition-transform duration-500 ease-out border border-[#262320]/60"
              style={{
                transform: `scale(${1 + scrollProgress * 0.025})`,
              }}
            >
              <img
                src={PERSONAL_DATA.images.hero}
                alt="PRASHANTHI.B — Editorial Fashion Portrait"
                className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 03. BOTTOM EDITORIAL CAPTION & RESTRAINED SELECTED WORK CUE */}
      <div className="relative z-30 w-full pt-6 border-t border-[#262320]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Left / Center: Positioning Magazine Caption */}
          <div className="md:col-span-8 space-y-1.5 font-sans">
            <p className="text-[11px] sm:text-xs font-mono text-[#8E8278] uppercase tracking-wider">
              MBA — FASHION & LIFESTYLE BUSINESS MANAGEMENT · PEARL ACADEMY
            </p>
            <p className="text-sm sm:text-[15px] lg:text-base text-[#C8BFB2] font-light leading-relaxed max-w-xl">
              “{PERSONAL_DATA.intro}”
            </p>
          </div>

          {/* Right: Restrained Transition Cue to First Article (Zero Floating Arrows) */}
          <div className="md:col-span-4 flex justify-start md:justify-end items-center gap-3 font-mono text-xs">
            <span className="text-[#8E8278] tracking-widest uppercase">SELECTED WORK</span>
            <span className="text-[#722F37] font-bold text-sm tracking-wider">01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
