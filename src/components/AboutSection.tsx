import React from 'react';
import { User, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA, SKILLS_LIST } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative">
      {/* Subtle Layout Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320] relative z-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <User className="w-3.5 h-3.5 text-[#722F37]" />
            <span>PROFILE & PERSPECTIVE</span>
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

      {/* Main Editorial Profile Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start relative z-10">
        {/* Left Column: Portrait Frame */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#262320] shadow-2xl group transition-all duration-700">
            <img
              src={PERSONAL_DATA.images.portrait01}
              alt="Prashanthi B. — About Portrait"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Column: Narrative & Competencies */}
        <div className="lg:col-span-7 space-y-8 relative pl-0 sm:pl-6 border-l-0 sm:border-l border-[#262320]">
          <div className="space-y-5 text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans font-light">
            {PERSONAL_DATA.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Structured Competencies */}
          <div className="space-y-4 pt-6 border-t border-[#262320]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
              CORE COMPETENCIES & DOMAIN CAPABILITIES:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {SKILLS_LIST.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-[#262320] text-[11px] font-mono font-medium text-[#C8BFB2] hover:text-[#F4F0E8] hover:border-[#722F37] transition-all flex items-center justify-between group cursor-default"
                >
                  <span className="group-hover:text-[#F4F0E8] transition-colors">{skill}</span>
                  <span className="text-[#722F37] text-[9px] font-bold">0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV CTA */}
          <div className="pt-6 border-t border-[#262320] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-7 py-3.5 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all duration-300 shadow-xl border border-[#722F37] group"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>REQUEST / DOWNLOAD CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
