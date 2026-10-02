import React, { useState } from 'react';
import { User, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_DATA, SKILLS_LIST } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320]">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <User className="w-4 h-4 text-[#722F37]" />
            <span>BACKGROUND & PERSPECTIVE // CANDIDATE PROFILE</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
            ABOUT
            <span className="block font-serif italic text-[#C8BFB2] font-normal">PERSPECTIVE</span>
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm text-[#8E8278] leading-relaxed font-mono text-left lg:text-right">
          BLR // 12.9716° N, 77.5946° E
          <span className="block text-[#C8BFB2] font-sans text-sm mt-1">
            Understanding both creative presentation and commercial retail mechanics.
          </span>
        </p>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
        {/* Left Column: Portrait Frame with Traveling Coordinate Boundary (Cols 5) */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#262320] bg-[#141211] shadow-2xl group">
            {!imgError && (
              <img
                src={PERSONAL_DATA.images.portrait01}
                alt="Prashanthi B. — About Portrait"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } group-hover:scale-[1.03]`}
              />
            )}

            {(imgError || !imgLoaded) && (
              <div
                className={`absolute inset-0 flex flex-col justify-between p-8 bg-[#141211] transition-opacity duration-300 ${
                  imgError ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#262320] pb-3 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#722F37] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    PORTRAIT CROP
                  </span>
                  <span className="text-[10px] text-[#8E8278]">REF.PB_02</span>
                </div>

                <div className="my-auto text-center py-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0B0A09] border border-[#262320] flex items-center justify-center text-2xl font-serif text-[#722F37] mb-3 shadow-inner">
                    PB
                  </div>
                  <h3 className="font-serif text-3xl text-[#F4F0E8]">
                    PRASHANTHI B.
                  </h3>
                  <p className="text-xs font-mono text-[#722F37] mt-1 font-semibold uppercase tracking-wider">
                    Bangalore / India
                  </p>
                </div>

                <div className="border-t border-[#262320] pt-3 text-[11px] text-[#8E8278] flex justify-between font-mono">
                  <span>/images/prashanthi/portrait-01.jpg</span>
                  <span className="text-[#722F37] font-semibold">ASSET_PENDING</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Human Narrative & Traveling Burgundy Rule (Cols 7) */}
        <div className="lg:col-span-7 space-y-8 relative pl-0 sm:pl-6 border-l-0 sm:border-l border-[#262320]">
          {/* Vertical Traveling Burgundy Rule on Large Screens */}
          <div className="hidden sm:block absolute -left-[1.5px] top-0 h-28 w-[3px] bg-[#722F37] rounded-full" />

          <div className="space-y-5 text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans font-light">
            {PERSONAL_DATA.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Structured Competencies Grid */}
          <div className="space-y-4 pt-6 border-t border-[#262320]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
              SYSTEM COMPETENCIES & DOMAIN CAPABILITIES:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {SKILLS_LIST.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#141211] rounded-2xl border border-[#262320] text-[11px] font-mono font-medium text-[#C8BFB2] hover:text-[#F4F0E8] hover:border-[#722F37] transition-all flex items-center justify-between"
                >
                  <span>{skill}</span>
                  <span className="text-[#722F37] text-[9px]">0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV Strip */}
          <div className="pt-6 border-t border-[#262320] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="text-[#8E8278]">
              OPEN FOR BUYING, MERCHANDISING & RETAIL ROLES
            </div>

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-xl border border-[#722F37]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>REQUEST / DOWNLOAD CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

