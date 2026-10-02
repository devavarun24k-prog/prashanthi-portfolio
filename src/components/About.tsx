import React from 'react';
import { User, Eye, TrendingUp, ShoppingBag, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap = [ShoppingBag, Palette, TrendingUp, Eye];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E5DC]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E5DC]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#9C7A4A] uppercase">
            <User className="w-4 h-4" />
            <span>04 / PROFESSIONAL PROFILE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1B19] tracking-tight">
            About & Strategic Focus
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#6E6B65] leading-relaxed">
          Bridging creative visual presentation and commercial retail strategy through structured analytical and consumer-centric methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        {/* Left Column: Portrait / Monogram Editorial Frame */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative aspect-[3/4] bg-[#161616] text-[#FAF9F6] rounded-sm overflow-hidden border border-[#2D2D2D] p-8 flex flex-col justify-between group shadow-xl">
            {/* Subtle background radial gradient */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#9C7A4A_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-[#9C7A4A]/10 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

            {/* Top metadata */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#FAF9F6]/60 border-b border-[#FAF9F6]/10 pb-3">
              <span>PORTRAIT PLACEHOLDER</span>
              <span className="text-[#9C7A4A]">PB • PROFILE</span>
            </div>

            {/* Monogram / Title */}
            <div className="relative z-10 text-center my-auto py-6">
              <div className="w-20 h-20 mx-auto rounded-full border border-[#9C7A4A]/50 bg-[#1F1F1F] flex items-center justify-center text-3xl font-serif text-[#FAF9F6] shadow-lg mb-4">
                PB
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#FAF9F6]">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9C7A4A] mt-1">
                Fashion Business Scholar
              </p>
              <p className="text-[11px] text-[#FAF9F6]/50 mt-2 font-mono">
                Pearl Academy, Bangalore
              </p>
            </div>

            {/* Bottom details */}
            <div className="relative z-10 text-[10px] font-mono text-[#FAF9F6]/40 border-t border-[#FAF9F6]/10 pt-3 flex justify-between">
              <span>BANGALORE, INDIA</span>
              <span>2025–2027</span>
            </div>
          </div>

          <div className="p-4 bg-[#F4F2EC] rounded-sm border border-[#E8E5DC] text-xs text-[#6E6B65] space-y-1">
            <span className="font-mono text-[10px] uppercase text-[#9C7A4A] font-medium block">
              PORTRAIT ASSET SPECIFICATION
            </span>
            <p>
              Portrait container styled with editorial 3:4 aspect ratio ready for official professional photography.
            </p>
          </div>
        </div>

        {/* Right Column: Statement & 4 Core Pillars */}
        <div className="lg:col-span-8 space-y-10">
          {/* Main Statement */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B19] font-normal leading-snug">
              {PERSONAL_INFO.about.lead}
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-[#524E48] leading-relaxed">
              {PERSONAL_INFO.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="space-y-4 pt-6 border-t border-[#E8E5DC]">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#9C7A4A] font-semibold">
              CORE PILLARS & METHODOLOGY
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PERSONAL_INFO.about.pillars.map((pillar, idx) => {
                const IconComponent = iconMap[idx % iconMap.length];
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E8E5DC] rounded-sm hover:border-[#9C7A4A]/70 transition-all space-y-2.5"
                  >
                    <div className="flex items-center gap-2 text-[#9C7A4A]">
                      <IconComponent className="w-4 h-4" />
                      <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#1C1B19]">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E6B65] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
