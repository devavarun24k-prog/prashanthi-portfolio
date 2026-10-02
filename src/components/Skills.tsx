import React from 'react';
import { Check, Sparkles, Sliders } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E5DC]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E5DC]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#9C7A4A] uppercase">
            <Sliders className="w-4 h-4" />
            <span>05 / CORE SKILLS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1B19] tracking-tight">
            Skills & Competencies
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#6E6B65] leading-relaxed">
          Specialized skills across merchandise planning, visual merchandising, retail analytics, and consumer research.
        </p>
      </div>

      {/* Skills Grid - 12 Skills from CV */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-12">
        {SKILLS_LIST.map((skill, idx) => (
          <div
            key={skill}
            className="editorial-card p-5 sm:p-6 rounded-sm flex items-center justify-between group hover:border-[#9C7A4A] transition-all"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#9C7A4A] font-semibold w-6">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#1C1B19] font-normal group-hover:text-[#9C7A4A] transition-colors">
                {skill}
              </h3>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#9C7A4A] group-hover:bg-[#1C1B19] group-hover:text-[#FAF9F6] transition-colors">
              <Check className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer verified marker */}
      <div className="mt-8 flex items-center justify-between text-xs font-mono text-[#6E6B65] pt-4 border-t border-[#E8E5DC]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#9C7A4A]" />
          <span>Verified against CV competencies</span>
        </div>
        <span className="text-[#9C7A4A]">12 CORE SKILLS</span>
      </div>
    </section>
  );
};
