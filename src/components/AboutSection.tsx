import React, { useState } from 'react';
import { User, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA, SKILLS_LIST } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262320]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
            <User className="w-4 h-4" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight">
            ABOUT
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#C8BFB2] leading-relaxed font-sans font-light">
          Understanding both what catches attention visually and what makes an assortment work commercially.
        </p>
      </div>

      {/* Main About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-center">
        {/* Left Column: Portrait Area (Cols 5) */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#262320] bg-[#141211] shadow-2xl group">
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
                <div className="flex items-center justify-between border-b border-[#262320] pb-3 text-xs font-sans">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#722F37]">
                    Portrait Mask Slot
                  </span>
                  <span className="text-[10px] text-[#8E8278] font-mono">Photo 02</span>
                </div>

                <div className="my-auto text-center py-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0B0A09] border border-[#262320] flex items-center justify-center text-2xl font-serif text-[#722F37] mb-3 shadow-inner">
                    PB
                  </div>
                  <h3 className="font-serif text-2xl text-[#F4F0E8]">
                    PRASHANTHI B.
                  </h3>
                  <p className="text-xs font-sans text-[#722F37] mt-1 font-semibold uppercase tracking-wider">
                    Bangalore / India
                  </p>
                </div>

                <div className="border-t border-[#262320] pt-3 text-[11px] text-[#8E8278] flex justify-between font-mono">
                  <span>/images/prashanthi/portrait-01.jpg</span>
                  <span className="text-[#722F37] font-semibold">Slot</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Narrative & Skills (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4 text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans font-light">
            {PERSONAL_DATA.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Editorial Skills Grid (No ugly pill cards) */}
          <div className="space-y-3 pt-4 border-t border-[#262320]">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#722F37] block">
              CORE CAPABILITIES & COMPETENCIES:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {SKILLS_LIST.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#141211] rounded-xl border border-[#262320] text-[11px] font-mono font-medium text-[#C8BFB2] hover:text-[#F4F0E8] hover:border-[#722F37] transition-all"
                >
                  <span className="text-[#722F37] mr-1.5">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#262320] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#8E8278]">
              OPEN FOR BUYING, MERCHANDISING & RETAIL ROLES
            </div>

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request / Download CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
