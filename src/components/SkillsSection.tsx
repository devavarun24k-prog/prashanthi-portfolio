import React, { useState } from 'react';
import { Sliders, Check, Sparkles, Layers } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('merchandising');

  return (
    <section id="skills" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#C8C0B5]/40 bg-[#F3EFE7] text-[#24201D]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#24201D]/15">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#5A2028] uppercase font-semibold">
            <Sliders className="w-4 h-4" />
            <span>06 / CORE CAPABILITIES</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#24201D] tracking-tight">
            Capabilities Matrix
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#5C544E] leading-relaxed">
          The 12 core competencies verified from professional CV curriculum and retail execution, organized across commercial pillars.
        </p>
      </div>

      {/* Pillar Tabs */}
      <div className="pt-8 pb-6 flex items-center justify-between flex-wrap gap-3 border-b border-[#24201D]/10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#5C544E]">
          <Layers className="w-3.5 h-3.5 text-[#5A2028]" />
          <span>Competency Pillar:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILLS_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActivePillarId(cat.id)}
              className={`px-3.5 py-1.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all ${
                activePillarId === cat.id
                  ? 'bg-[#17120F] text-[#F3EFE7] font-semibold'
                  : 'bg-white border border-[#C8C0B5] text-[#5C544E] hover:text-[#24201D]'
              }`}
            >
              {cat.number} • {cat.title.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Grouped Competency Quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {SKILLS_CATEGORIES.map((category) => {
          const isFocused = activePillarId === category.id;
          return (
            <div
              key={category.id}
              onClick={() => setActivePillarId(category.id)}
              className={`p-8 rounded-none transition-all duration-300 space-y-6 cursor-pointer shadow-sm ${
                isFocused
                  ? 'bg-white border-2 border-[#5A2028] shadow-md'
                  : 'bg-white/80 border border-[#C8C0B5] hover:border-[#5A2028]/60'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#24201D]/10">
                <span className="font-mono text-xs font-semibold text-[#5A2028]">
                  PILLAR {category.number}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#5C544E] uppercase bg-[#F3EFE7] px-2 py-0.5 rounded-none border border-[#C8C0B5]">
                  {category.skills.length} VERIFIED SKILLS
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#24201D] font-normal">
                  {category.title}
                </h3>
                <p className="text-xs text-[#5C544E]">
                  {category.description}
                </p>
              </div>

              <ul className="space-y-3 pt-2 border-t border-[#24201D]/10">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between p-3.5 bg-[#F3EFE7] rounded-none border border-[#C8C0B5]/60 hover:border-[#5A2028] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#24201D] font-medium">
                      {skill}
                    </span>
                    <div className="w-5 h-5 rounded-none bg-white border border-[#C8C0B5] flex items-center justify-center text-[#5A2028]">
                      <Check className="w-3 h-3" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Verification footer */}
      <div className="mt-12 p-4 bg-white border border-[#C8C0B5] rounded-none flex items-center justify-between text-xs font-mono text-[#5C544E]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#5A2028]" />
          <span>Strictly aligned with candidate CV competencies</span>
        </div>
        <span className="text-[#5A2028] font-semibold">12 VERIFIED SKILLS</span>
      </div>
    </section>
  );
};
