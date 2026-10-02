import React from 'react';
import { ArrowDown, Layers } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262626] bg-[#0D0D0D] text-[#F5F4F0]"
    >
      {/* Top Editorial Coordinates Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-[#262626] pb-3 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#96938D] uppercase">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5F4F0]" />
          <span>BANGALORE • {PERSONAL_DATA.coordinates}</span>
        </div>
        <div className="flex items-center gap-4 text-[#96938D]">
          <span className="hidden md:inline-block tracking-[0.2em]">
            EDITORIAL PORTFOLIO
          </span>
          <span className="text-[#F5F4F0] font-semibold bg-[#161616] px-2.5 py-0.5 border border-[#262626]">
            PEARL ACADEMY • 2025–2027
          </span>
        </div>
      </div>

      {/* Main Editorial Grid */}
      <div className="my-auto py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Opening (Cols 7) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Eyebrow */}
          <div className="space-y-2">
            <div className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-[#96938D]">
              PORTFOLIO & PERSPECTIVES
            </div>
            <p className="font-serif text-3xl sm:text-4xl text-[#F5F4F0] font-normal tracking-wide">
              {PERSONAL_DATA.name}
            </p>
          </div>

          {/* Main Statement */}
          <div className="space-y-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F5F4F0] tracking-tight leading-[0.92]">
              Creative Eye.
              <span className="block font-serif italic text-[#96938D] font-light">
                Business Mind.
              </span>
            </h1>
          </div>

          {/* Positioning Ribbon */}
          <div className="pt-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#96938D] block mb-2">
              POSITIONING
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-mono tracking-[0.18em] text-[#F5F4F0]">
              {PERSONAL_DATA.specializations.map((spec, idx) => (
                <React.Fragment key={spec}>
                  <span className="font-medium hover:text-[#96938D] transition-colors">{spec}</span>
                  {idx < PERSONAL_DATA.specializations.length - 1 && (
                    <span className="text-[#96938D] font-light">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Academic Credential & Narrative */}
          <div className="pt-1 max-w-xl space-y-4">
            <div className="p-4 bg-[#161616] border border-[#262626]">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#96938D] block font-semibold">
                ACADEMIC CREDENTIAL
              </span>
              <p className="font-serif text-lg text-[#F5F4F0] font-normal mt-0.5">
                MBA — Fashion & Lifestyle Business Management
              </p>
              <p className="text-xs text-[#96938D] font-mono">
                Pearl Academy, Bangalore (2025–2027)
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#96938D] leading-relaxed font-sans">
              {PERSONAL_DATA.introduction}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase bg-[#F5F4F0] text-[#0D0D0D] px-6 py-3.5 hover:bg-[#E8E7E3] transition-colors font-medium"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#pov"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase px-5 py-3.5 border border-[#262626] text-[#F5F4F0] hover:bg-[#161616] transition-colors"
              >
                <span>The Point of View</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Large Vertical Editorial Portrait Frame (Cols 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] bg-[#161616] text-[#F5F4F0] border border-[#262626] overflow-hidden group p-6 sm:p-8 flex flex-col justify-between">
            {/* Top Bar inside Portrait Frame */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#96938D] border-b border-[#262626] pb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5F4F0]" />
                PORTRAIT PLACEHOLDER
              </span>
              <span>PB • ARCHIVE</span>
            </div>

            {/* Monogram Silhouette Centerpiece */}
            <div className="relative z-10 text-center my-auto py-8">
              <div className="w-24 h-24 mx-auto border border-[#262626] bg-[#0D0D0D] flex items-center justify-center text-4xl font-serif text-[#F5F4F0] mb-4 group-hover:border-[#F5F4F0] transition-colors">
                PB
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4F0] font-normal tracking-wide">
                {PERSONAL_DATA.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#96938D] mt-1.5 font-medium">
                Fashion & Lifestyle Business
              </p>
              <p className="text-[11px] font-mono text-[#96938D] mt-2">
                Pearl Academy, Bangalore
              </p>
            </div>

            {/* Bottom Bar inside portrait frame */}
            <div className="relative z-10 pt-3 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#96938D]">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>EDITORIAL PORTRAIT FRAME</span>
              </span>
              <span>ORIGINAL PHOTO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trait Pillars Ticker */}
      <div className="pt-6 border-t border-[#262626] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-[#96938D]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {PERSONAL_DATA.traits.map((trait, idx) => (
            <div key={trait.title} className="flex items-center gap-3">
              <span className="text-[#F5F4F0] font-semibold">0{idx + 1}</span>
              <div>
                <span className="uppercase tracking-[0.2em] font-medium text-[#F5F4F0] block">
                  {trait.title}
                </span>
                <span className="text-[10px] text-[#96938D]">{trait.description}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#pov"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#96938D] hover:text-[#F5F4F0] transition-colors shrink-0 font-medium"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
