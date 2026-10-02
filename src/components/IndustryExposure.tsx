import React from 'react';
import { Award, Sparkles, Film } from 'lucide-react';
import { INDUSTRY_EXPOSURES } from '../data/portfolioData';

export const IndustryExposure: React.FC = () => {
  return (
    <section id="exposure" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E5DC]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E5DC]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#9C7A4A] uppercase">
            <Award className="w-4 h-4" />
            <span>03 / INDUSTRY ENGAGEMENT</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1B19] tracking-tight">
            Industry Exposure
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#6E6B65] leading-relaxed">
          Industry exposure and programs recorded in professional curriculum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        {INDUSTRY_EXPOSURES.map((item, index) => (
          <div
            key={item.id}
            className="group editorial-card p-8 rounded-sm relative overflow-hidden flex flex-col justify-between space-y-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#9C7A4A] font-semibold tracking-widest">
                EXPOSURE 0{index + 1}
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-[#F4F2EC] text-[#524E48] rounded-sm border border-[#E8E5DC]">
                {item.type}
              </span>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-sm bg-[#F4F2EC] border border-[#E8E5DC] flex items-center justify-center text-[#9C7A4A] group-hover:bg-[#1C1B19] group-hover:text-[#FAF9F6] transition-colors">
                {index === 0 ? <Sparkles className="w-5 h-5" /> : <Film className="w-5 h-5" />}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B19] font-normal group-hover:text-[#9C7A4A] transition-colors">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-[#9C7A4A] uppercase tracking-wider">
                {item.type}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E5DC] flex items-center justify-between text-xs text-[#6E6B65]">
              <span className="font-mono text-[10px] uppercase tracking-widest">Documented in CV</span>
              <span className="font-mono text-[11px] text-[#9C7A4A]">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
