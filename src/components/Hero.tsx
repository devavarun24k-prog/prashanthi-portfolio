import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#282828] bg-[#151515] text-[#FAF9F6]"
    >
      {/* Top Editorial Ribbon & Section Indicator */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-[#282828] pb-3 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#B7B1A8] uppercase transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#FAF9F6] bg-[#1C1C1C] px-2 py-0.5 border border-[#282828]">
            01 / 10
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427]" />
          <span>BANGALORE • {PERSONAL_DATA.coordinates}</span>
        </div>
        <div className="flex items-center gap-4 text-[#77736D]">
          <span className="hidden md:inline-block tracking-[0.2em]">
            EDITORIAL PORTFOLIO
          </span>
          <span className="text-[#FAF9F6] font-medium bg-[#1C1C1C] px-2.5 py-0.5 border border-[#282828]">
            PEARL ACADEMY • 2025–2027
          </span>
        </div>
      </div>

      {/* Main Editorial Grid */}
      <div className="my-auto py-8 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Opening (Cols 7) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Metadata Eyebrow with mask reveal */}
          <div className="overflow-hidden">
            <div
              className={`space-y-1.5 transition-all duration-700 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#B7B1A8]">
                <span>PRASHANTHI B</span>
                <span className="text-[#5A2427]">/</span>
                <span>{PERSONAL_DATA.roleDescriptor}</span>
              </div>
            </div>
          </div>

          {/* Large Masked Display Headline */}
          <div className="overflow-hidden py-1">
            <h1
              className={`font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal text-[#FAF9F6] tracking-tight leading-[0.9] transition-all duration-1000 delay-150 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
            >
              BUY.
              <span className="block font-serif text-[#FAF9F6]">
                CURATE.
              </span>
              <span className="block font-serif italic text-[#B7B1A8] font-light">
                PRESENT.
              </span>
            </h1>
          </div>

          {/* Supporting Statement Line */}
          <div className="overflow-hidden">
            <p
              className={`font-serif text-xl sm:text-2xl text-[#FAF9F6]/90 max-w-xl leading-relaxed italic transition-all duration-700 delay-300 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              "{PERSONAL_DATA.heroSupport}"
            </p>
          </div>

          {/* Positioning & Introduction */}
          <div
            className={`pt-2 max-w-xl space-y-4 transition-all duration-700 delay-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-sm sm:text-base text-[#B7B1A8] leading-relaxed font-sans font-light">
              {PERSONAL_DATA.introduction}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase bg-[#FAF9F6] text-[#151515] px-6 py-3.5 hover:bg-[#F4F1EB] transition-colors font-semibold"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#pov"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase px-5 py-3.5 border border-[#282828] text-[#FAF9F6] hover:bg-[#1C1C1C] transition-colors"
              >
                <span>02 / Point of View</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 4:5 Large Editorial Portrait Placeholder Frame (Cols 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className={`relative w-full max-w-md aspect-[4/5] bg-[#1C1C1C] text-[#FAF9F6] border border-[#282828] overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Top Bar inside Portrait Frame */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#B7B1A8] border-b border-[#282828] pb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427]" />
                PORTRAIT AREA (4:5)
              </span>
              <span>PB • ARCHIVE 01</span>
            </div>

            {/* Monogram Silhouette Centerpiece */}
            <div className="relative z-10 text-center my-auto py-6">
              <div className="w-20 h-20 mx-auto border border-[#282828] bg-[#151515] flex items-center justify-center text-3xl font-serif text-[#FAF9F6] mb-4 hover:border-[#FAF9F6] transition-colors">
                PB
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF9F6] font-normal tracking-wide">
                {PERSONAL_DATA.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#B7B1A8] mt-1.5 font-medium">
                Buying · Merchandising · Retail
              </p>
              <p className="text-[11px] font-mono text-[#77736D] mt-2">
                Pearl Academy, Bangalore
              </p>
            </div>

            {/* Bottom Bar inside portrait frame */}
            <div className="relative z-10 pt-3 border-t border-[#282828] flex items-center justify-between text-[10px] font-mono text-[#77736D]">
              <span className="tracking-wider uppercase">
                EDITORIAL PORTRAIT FRAME
              </span>
              <span className="text-[#B7B1A8]">ORIGINAL PHOTO PENDING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trait Pillars Ticker */}
      <div className="pt-6 border-t border-[#282828] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-[#B7B1A8]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {PERSONAL_DATA.traits.map((trait, idx) => (
            <div key={trait.title} className="flex items-center gap-3">
              <span className="text-[#FAF9F6] font-semibold">0{idx + 1}</span>
              <div>
                <span className="uppercase tracking-[0.2em] font-medium text-[#FAF9F6] block">
                  {trait.title}
                </span>
                <span className="text-[10px] text-[#77736D]">{trait.description}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#pov"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B7B1A8] hover:text-[#FAF9F6] transition-colors shrink-0 font-medium"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
