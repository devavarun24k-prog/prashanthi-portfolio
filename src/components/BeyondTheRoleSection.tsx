import React from 'react';
import { Sparkles } from 'lucide-react';
import { BEYOND_THE_ROLE_DATA } from '../data/portfolioData';

export const BeyondTheRoleSection: React.FC = () => {
  return (
    <section id="beyond" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#282828] bg-[#151515] text-[#FAF9F6]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#282828]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#B7B1A8] uppercase font-semibold">
            <span className="font-bold text-[#FAF9F6] bg-[#1C1C1C] px-2 py-0.5 border border-[#282828]">
              08 / 10
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>HUMAN PERSPECTIVE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF9F6] tracking-tight">
            Beyond the Role
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#B7B1A8] leading-relaxed">
          The aesthetic universe and cultural interests that inform my visual intuition.
        </p>
      </div>

      {/* 4 Editorial Dimension Cards */}
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BEYOND_THE_ROLE_DATA.map((item) => (
          <div
            key={item.id}
            className="p-8 bg-[#1C1C1C] border border-[#282828] hover:border-[#77736D] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="text-[10px] font-mono text-[#77736D] uppercase tracking-widest border-b border-[#282828] pb-3">
                {item.category}
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#FAF9F6]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B7B1A8] leading-relaxed font-sans font-light">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#282828] text-[11px] font-serif italic text-[#77736D]">
              "{item.notes}"
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
