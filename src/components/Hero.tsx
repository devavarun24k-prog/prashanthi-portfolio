import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E6DF] bg-[#F7F5F0] text-[#171717]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline, Credential & Introduction (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3158D4]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{PERSONAL_DATA.name}</span>
            <span className="text-[#77736D]">/</span>
            <span className="text-[#77736D]">Bangalore, India</span>
          </div>

          {/* Major Display Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-[#171717] tracking-tight leading-[0.95]">
            Fashion Business.
            <span className="block font-serif text-[#171717]">
              Retail. Merchandising.
            </span>
            <span className="block font-serif italic text-[#3158D4] font-normal">
              Brand.
            </span>
          </h1>

          {/* Academic Credential & Discipline Bar */}
          <div className="space-y-1.5 pt-1 border-l-2 border-[#3158D4] pl-4">
            <p className="font-sans text-sm sm:text-base font-semibold text-[#171717]">
              MBA Candidate — Fashion & Lifestyle Business Management
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#77736D]">
              Pearl Academy, Bangalore (2025–2027) • ICFAI University BBA (2020–2023)
            </p>
            <p className="font-sans text-xs text-[#555555] font-medium pt-1">
              {PERSONAL_DATA.disciplines}
            </p>
          </div>

          {/* Natural Human Introduction */}
          <p className="text-base sm:text-lg text-[#444444] leading-relaxed font-sans max-w-xl font-normal">
            "{PERSONAL_DATA.intro}"
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider bg-[#171717] text-white px-6 py-3.5 rounded-full hover:bg-[#3158D4] transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider px-5 py-3.5 rounded-full border border-[#E8E6DF] bg-white text-[#171717] hover:border-[#171717] transition-colors"
            >
              <span>About Prashanthi</span>
            </a>
          </div>
        </div>

        {/* Right Column: Large 4:5 Editorial Portrait Area (Cols 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-[#E8E6DF] bg-[#EFECE5] shadow-sm group">
            {/* Real Image */}
            {!imgError && (
              <img
                src={PERSONAL_DATA.images.hero}
                alt="Prashanthi B. — Fashion Business & Merchandising"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
                }`}
              />
            )}

            {/* Editorial Portrait Placeholder Graphic if photo is pending */}
            {(imgError || !imgLoaded) && (
              <div
                className={`absolute inset-0 flex flex-col justify-between p-8 bg-[#F0EEE8] transition-opacity duration-300 ${
                  imgError ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between border-b border-black/10 pb-3 text-xs font-sans">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#3158D4]">
                    Editorial Portrait Area
                  </span>
                  <span className="text-[10px] text-[#77736D] font-mono">4:5 Ratio</span>
                </div>

                {/* Center Monogram / Name */}
                <div className="my-auto text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white border border-[#E8E6DF] flex items-center justify-center text-3xl font-serif text-[#171717] mb-4 shadow-sm">
                    PB
                  </div>
                  <h3 className="font-serif text-3xl text-[#171717] font-normal">
                    Prashanthi B.
                  </h3>
                  <p className="text-xs font-sans text-[#77736D] mt-1 font-medium">
                    Fashion & Lifestyle Business
                  </p>
                  <p className="text-[11px] font-sans text-[#999999] mt-0.5">
                    Bangalore, India
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="border-t border-black/10 pt-3 flex items-center justify-between text-[11px] text-[#77736D]">
                  <span>/images/prashanthi/hero.jpg</span>
                  <span className="text-[#3158D4] font-medium">Photo Slot</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
