import React, { useState } from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeExpTab, setActiveExpTab] = useState<'work' | 'academic' | 'exposure'>('work');

  return (
    <section id="experience" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative">
      {/* Subtle Layout Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320] relative z-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <Briefcase className="w-3.5 h-3.5 text-[#722F37]" />
            <span>CAREER PATH & EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
            CAREER &
            <span className="block font-serif italic text-[#C8BFB2] font-normal">TIMELINE</span>
          </h2>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveExpTab('work')}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              activeExpTab === 'work'
                ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold shadow-md'
                : 'border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
            }`}
          >
            01 // WORK ({EXPERIENCES_DATA.length})
          </button>
          <button
            onClick={() => setActiveExpTab('academic')}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              activeExpTab === 'academic'
                ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold shadow-md'
                : 'border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
            }`}
          >
            02 // EDUCATION ({EDUCATION_DATA.length})
          </button>
          <button
            onClick={() => setActiveExpTab('exposure')}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              activeExpTab === 'exposure'
                ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold shadow-md'
                : 'border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
            }`}
          >
            03 // IMMERSION ({EXPOSURES_DATA.length})
          </button>
        </div>
      </div>

      {/* Sequential Editorial Timeline Entries */}
      <div className="pt-12 space-y-12 relative z-10">
        {activeExpTab === 'work' && (
          <div className="space-y-8">
            {EXPERIENCES_DATA.map((exp, idx) => (
              <div
                key={exp.id}
                className="p-8 sm:p-12 rounded-2xl border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden group"
              >
                {/* Number */}
                <div className="lg:col-span-2 font-serif text-5xl sm:text-6xl lg:text-7xl text-[#722F37]/40 group-hover:text-[#722F37] transition-colors font-normal select-none">
                  0{idx + 1}
                </div>

                <div className="lg:col-span-10 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-4 font-mono text-xs group-hover:border-[#722F37]/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#722F37] px-3 py-1 rounded border border-[#262320]">
                        {exp.period}
                      </span>
                      <span className="text-[#8E8278] uppercase tracking-wider">{exp.type}</span>
                    </div>
                    <span className="text-[#C8BFB2] font-semibold">{exp.location}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal group-hover:translate-x-1 transition-transform duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-mono font-bold text-[#722F37] mt-1 uppercase tracking-wider">
                      {exp.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#262320]">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#8E8278] font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeExpTab === 'academic' && (
          <div className="space-y-8">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={edu.id}
                className="p-8 sm:p-12 rounded-2xl border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden group"
              >
                <div className="lg:col-span-2 font-serif text-5xl sm:text-6xl lg:text-7xl text-[#722F37]/40 group-hover:text-[#722F37] transition-colors font-normal select-none">
                  0{idx + 3}
                </div>

                <div className="lg:col-span-10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-4 font-mono text-xs group-hover:border-[#722F37]/30 transition-colors">
                    <span className="font-bold text-[#722F37] px-3 py-1 rounded border border-[#262320]">
                      {edu.period}
                    </span>
                    <span className="text-[#F4F0E8] font-bold">{edu.status}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal group-hover:translate-x-1 transition-transform duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-[#C8BFB2] mt-1">
                      {edu.institution} — {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeExpTab === 'exposure' && (
          <div className="space-y-8">
            {EXPOSURES_DATA.map((exp, idx) => (
              <div
                key={exp.id}
                className="p-8 sm:p-12 rounded-2xl border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden group"
              >
                <div className="lg:col-span-2 font-serif text-5xl sm:text-6xl lg:text-7xl text-[#722F37]/40 group-hover:text-[#722F37] transition-colors font-normal select-none">
                  0{idx + 5}
                </div>

                <div className="lg:col-span-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#262320] pb-4 font-mono text-xs group-hover:border-[#722F37]/30 transition-colors">
                    <span className="text-[#722F37] font-bold uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal group-hover:translate-x-1 transition-transform duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
