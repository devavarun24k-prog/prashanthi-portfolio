import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { perspective, images } = PERSONAL_DATA;

  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative overflow-hidden"
    >
      {/* Subtle Layout Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Top Editorial Understated Section Label */}
      <div className="pb-12 sm:pb-16 border-b border-[#262320] relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            ABOUT / PERSPECTIVE
          </span>
        </div>
      </div>

      {/* Dominant Editorial Opening Statement */}
      <div className="py-14 sm:py-20 border-b border-[#262320] relative z-10 space-y-2 max-w-5xl">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
          {perspective.headline}
          <span className="block font-serif text-[#C8BFB2] font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 sm:mt-3">
            {perspective.subheadline}
          </span>
          <span className="block font-serif italic text-[#722F37] font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 sm:mt-4">
            {perspective.accent}
          </span>
        </h2>
      </div>

      {/* Refined Editorial Reading Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 sm:pt-20 items-start relative z-10">
        {/* Left Column: Unboxed Editorial Portrait */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#262320] shadow-2xl transition-all duration-700">
            <img
              src={images.portrait01}
              alt="Prashanthi B. — Editorial Portrait"
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Right Column: Editorial Paragraphs with Subtle Dividers */}
        <div className="lg:col-span-7 space-y-0 relative pl-0 lg:pl-8 border-l-0 lg:border-l border-[#262320]">
          {perspective.paragraphs.map((paragraph, index) => {
            const isLast = index === perspective.paragraphs.length - 1;
            return (
              <div
                key={index}
                className={`py-7 sm:py-8 ${
                  index !== 0 ? 'border-t border-[#262320]/70' : ''
                } transition-all duration-500`}
              >
                <p
                  className={`${
                    isLast
                      ? 'font-serif italic text-xl sm:text-2xl text-[#F4F0E8] font-normal leading-relaxed pt-2'
                      : 'font-sans text-base sm:text-lg text-[#C8BFB2] font-light leading-relaxed'
                  }`}
                >
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
