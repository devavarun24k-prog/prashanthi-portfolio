import React, { useState } from 'react';
import { User, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E6DF] bg-[#F7F5F0] text-[#171717]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E6DF]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3158D4]">
            <User className="w-4 h-4" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight">
            About Prashanthi
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#555555] leading-relaxed font-sans">
          Exploring the synergy between creative curation and commercial retail performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-center">
        {/* Left Column: Portrait Area (Cols 5) */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#E8E6DF] bg-[#EFECE5] shadow-sm">
            {!imgError && (
              <img
                src={PERSONAL_DATA.images.portrait01}
                alt="Prashanthi B. — About Portrait"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
                }`}
              />
            )}

            {(imgError || !imgLoaded) && (
              <div
                className={`absolute inset-0 flex flex-col justify-between p-8 bg-[#F0EEE8] transition-opacity duration-300 ${
                  imgError ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-between border-b border-black/10 pb-3 text-xs font-sans">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#3158D4]">
                    Portrait Area
                  </span>
                  <span className="text-[10px] text-[#77736D] font-mono">Photo 02</span>
                </div>

                <div className="my-auto text-center py-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white border border-[#E8E6DF] flex items-center justify-center text-2xl font-serif text-[#171717] mb-3 shadow-sm">
                    PB
                  </div>
                  <h3 className="font-serif text-2xl text-[#171717]">
                    Prashanthi B.
                  </h3>
                  <p className="text-xs font-sans text-[#77736D] mt-1">
                    Bangalore, India
                  </p>
                </div>

                <div className="border-t border-black/10 pt-3 text-[11px] text-[#77736D] flex justify-between">
                  <span>/images/prashanthi/portrait-01.jpg</span>
                  <span className="text-[#3158D4] font-medium">Slot</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Narrative & CV CTA (Cols 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-base sm:text-lg text-[#333333] leading-relaxed font-sans font-light">
            {PERSONAL_DATA.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E8E6DF] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-sans text-[#77736D]">
              Open for Buying, Merchandising & Retail roles
            </div>

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full bg-[#171717] text-white hover:bg-[#3158D4] transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download / Request CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
