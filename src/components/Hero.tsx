import React from 'react';
import { ArrowDown, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E5DC]"
    >
      {/* Top Editorial Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[#E8E5DC] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#9C7A4A] animate-pulse" />
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#6E6B65] uppercase">
            {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.duration}
          </span>
        </div>
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#9C7A4A] uppercase flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FASHION & LIFESTYLE PORTFOLIO</span>
        </div>
      </div>

      {/* Main Hero Display Area */}
      <div className="my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Left / Primary Typography: Name & Roles */}
        <div className="lg:col-span-8 space-y-6">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#9C7A4A] font-medium">
            PORTFOLIO OF
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal text-[#1C1B19] tracking-tight leading-[0.92]">
            PRASHANTHI B
          </h1>

          {/* Specialization pills / editorial line */}
          <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono tracking-[0.2em] text-[#1C1B19]">
            {PERSONAL_INFO.titleSegments.map((segment, idx) => (
              <React.Fragment key={segment}>
                <span className="font-semibold">{segment}</span>
                {idx < PERSONAL_INFO.titleSegments.length - 1 && (
                  <span className="text-[#9C7A4A] font-light">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right / Editorial Introduction & Academic Status */}
        <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-[#E8E5DC] lg:pl-8">
          <div className="p-4 bg-[#F4F2EC] border border-[#E8E5DC] rounded-sm space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#9C7A4A] block">
              ACADEMIC CREDENTIAL
            </span>
            <p className="font-serif text-base text-[#1C1B19] font-medium leading-snug">
              {PERSONAL_INFO.education.degree}
            </p>
            <p className="text-xs text-[#6E6B65]">
              {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.duration})
            </p>
          </div>

          <p className="text-sm text-[#524E48] leading-relaxed font-sans">
            {PERSONAL_INFO.heroIntro}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase bg-[#1C1B19] text-[#FAF9F6] px-5 py-3 rounded-sm hover:bg-[#9C7A4A] transition-all duration-300 shadow-sm"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-[#1C1B19] hover:text-[#9C7A4A] px-3 py-3 transition-colors"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>About Approach</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Pillars preview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E8E5DC] text-[11px] font-mono tracking-wider text-[#6E6B65]">
        <div>
          <span className="text-[#9C7A4A] font-medium block">01 / MERCHANDISE</span>
          <span>Planning & Buying Strategy</span>
        </div>
        <div>
          <span className="text-[#9C7A4A] font-medium block">02 / VISUAL IDENTITY</span>
          <span>Store Presentation & VM</span>
        </div>
        <div>
          <span className="text-[#9C7A4A] font-medium block">03 / CONSUMER</span>
          <span>Behavior & Journey Mapping</span>
        </div>
        <div>
          <span className="text-[#9C7A4A] font-medium block">04 / RESEARCH</span>
          <span>Trend & Market Forecasting</span>
        </div>
      </div>
    </section>
  );
};
