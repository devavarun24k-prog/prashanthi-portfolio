import React, { useState } from 'react';
import { ArrowDown, Sparkles, Compass, Layers, ShieldCheck } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 8, y: y * 8 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#2E2520] bg-[#17120F] text-[#F3EFE7] overflow-hidden"
    >
      {/* Top Editorial Coordinates Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-[#2E2520] pb-3 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#C8C0B5]/60 uppercase">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5A2028]" />
          <span>BANGALORE • {PERSONAL_DATA.coordinates}</span>
        </div>
        <div className="flex items-center gap-4 text-[#C8C0B5]/80">
          <span className="hidden md:inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#5A2028]" />
            <span>EDITORIAL PORTFOLIO</span>
          </span>
          <span className="text-[#F3EFE7] font-semibold bg-[#221B17] px-2.5 py-0.5 rounded-none border border-[#2E2520]">
            PEARL ACADEMY • 2025–2027
          </span>
        </div>
      </div>

      {/* Main Cinematic Editorial Grid */}
      <div className="my-auto py-8 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Opening (Cols 7) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Eyebrow */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#221B17] border border-[#2E2520] rounded-none text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C8C0B5]">
              <Compass className="w-3 h-3 text-[#5A2028]" />
              <span>PORTFOLIO & PERSPECTIVES</span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-[#F3EFE7] font-medium tracking-wide pt-1">
              {PERSONAL_DATA.name}
            </p>
          </div>

          {/* Main Statement */}
          <div className="space-y-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F3EFE7] tracking-tight leading-[0.92]">
              Creative Eye.
              <span className="block font-serif-italic text-[#C8C0B5] font-light">
                Business Mind.
              </span>
            </h1>
          </div>

          {/* Positioning Ribbon */}
          <div className="pt-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C8C0B5]/50 block mb-2">
              POSITIONING
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-mono tracking-[0.18em] text-[#F3EFE7]/90">
              {PERSONAL_DATA.specializations.map((spec, idx) => (
                <React.Fragment key={spec}>
                  <span className="font-medium hover:text-[#5A2028] transition-colors">{spec}</span>
                  {idx < PERSONAL_DATA.specializations.length - 1 && (
                    <span className="text-[#5A2028] font-light">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Academic Credential & Narrative */}
          <div className="pt-1 max-w-xl space-y-4">
            <div className="p-3.5 bg-[#221B17] border border-[#2E2520] rounded-none">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#5A2028] block font-semibold">
                ACADEMIC CREDENTIAL
              </span>
              <p className="font-serif text-base text-[#F3EFE7] font-medium mt-0.5">
                MBA — Fashion & Lifestyle Business Management
              </p>
              <p className="text-xs text-[#C8C0B5]/60 font-mono">
                Pearl Academy, Bangalore (2025–2027)
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#C8C0B5]/85 leading-relaxed font-sans">
              {PERSONAL_DATA.introduction}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase bg-[#5A2028] text-[#F3EFE7] px-6 py-3.5 rounded-none hover:bg-[#6E2530] transition-all duration-300 shadow-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#pov"
                data-cursor="VIEWPOINT"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase px-5 py-3.5 border border-[#2E2520] text-[#F3EFE7] hover:bg-[#221B17] hover:border-[#5A2028] transition-all duration-300 rounded-none"
              >
                <span>The Point of View</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Large Vertical Editorial Portrait Frame (Cols 5) */}
        <div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative w-full max-w-md aspect-[3/4] bg-[#1A1411] text-[#F3EFE7] rounded-none border border-[#2E2520] overflow-hidden group shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`,
            }}
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#A99578_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Top Bar inside Portrait Frame */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#F3EFE7]/60 border-b border-[#F3EFE7]/10 pb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2028]" />
                PORTRAIT — TO BE ADDED
              </span>
              <span className="text-[#C8C0B5]/50 font-mono">PB • ARCHIVE</span>
            </div>

            {/* Monogram Silhouette Centerpiece */}
            <div className="relative z-10 text-center my-auto py-8">
              <div className="w-24 h-24 mx-auto rounded-none border border-[#2E2520] bg-[#221B17] flex items-center justify-center text-4xl font-serif text-[#F3EFE7] shadow-xl mb-4 group-hover:border-[#5A2028] transition-all duration-500">
                PB
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE7] font-normal tracking-wide">
                {PERSONAL_DATA.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A2028] mt-1.5 font-medium">
                Fashion & Lifestyle Business
              </p>
              <p className="text-[11px] font-mono text-[#C8C0B5]/50 mt-2">
                Pearl Academy, Bangalore
              </p>
            </div>

            {/* Bottom Bar inside portrait frame */}
            <div className="relative z-10 pt-3 border-t border-[#F3EFE7]/10 flex items-center justify-between text-[10px] font-mono text-[#F3EFE7]/50">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#5A2028]" />
                <span>EDITORIAL PORTRAIT FRAME</span>
              </span>
              <span className="flex items-center gap-1 text-[#C8C0B5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5A2028]" />
                <span>ASSET READY</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trait Pillars Ticker */}
      <div className="pt-6 border-t border-[#2E2520] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-[#C8C0B5]/70">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {PERSONAL_DATA.traits.map((trait, idx) => (
            <div key={trait.title} className="flex items-center gap-2.5">
              <span className="text-[#5A2028] font-semibold">0{idx + 1}</span>
              <div>
                <span className="uppercase tracking-[0.2em] font-semibold text-[#F3EFE7] block">
                  {trait.title}
                </span>
                <span className="text-[10px] text-[#C8C0B5]/50">{trait.description}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#pov"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8C0B5] hover:text-[#F3EFE7] transition-colors shrink-0 font-medium"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#5A2028] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
