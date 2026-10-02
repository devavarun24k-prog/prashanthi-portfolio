import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262320]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
            <Briefcase className="w-4 h-4" />
            <span>CAREER TIMELINE & EDUCATION</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight">
            EXPERIENCE
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#C8BFB2] leading-relaxed font-sans font-light">
          Hands-on retail visual merchandising, digital brand marketing, and formal academic business management.
        </p>
      </div>

      <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Work History (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between border-b border-[#262320] pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] font-mono">
              PROFESSIONAL WORK
            </span>
            <span className="text-xs text-[#8E8278] font-mono">2023 — 2024</span>
          </div>

          <div className="space-y-8">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-2xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-300 shadow-xl space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#262320] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#722F37] text-[#F4F0E8]">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-[#8E8278]">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#722F37] font-semibold uppercase tracking-wider">
                    {exp.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl text-[#F4F0E8] font-normal">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-sans font-semibold text-[#722F37] mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <p className="text-sm text-[#C8BFB2] leading-relaxed font-sans font-light">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-[#262320]">
                  {exp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#8E8278]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#722F37] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Industry Exposure (Cols 5) */}
        <div className="lg:col-span-5 space-y-10">
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#262320] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] flex items-center gap-2 font-mono">
                <GraduationCap className="w-4 h-4 text-[#722F37]" />
                ACADEMIC CREDENTIALS
              </span>
              <span className="text-xs text-[#8E8278] font-mono">2020 — 2027</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-[#141211] border border-[#262320] shadow-md space-y-2 hover:border-[#722F37]/60 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-[#8E8278] font-mono">
                    <span>{edu.period}</span>
                    <span className="text-xs font-semibold text-[#722F37]">{edu.status}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#F4F0E8] font-normal leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-sans text-[#C8BFB2]">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Exposure */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#262320] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] flex items-center gap-2 font-mono">
                <Award className="w-4 h-4 text-[#722F37]" />
                INDUSTRY IMMERSION
              </span>
            </div>

            <div className="space-y-4">
              {EXPOSURES_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141211] border border-[#262320] shadow-md space-y-2 hover:border-[#722F37]/60 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E8278]">
                    <span className="text-[#722F37] font-semibold uppercase">{exp.type}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#F4F0E8] font-normal">
                    {exp.title}
                  </h4>
                  <p className="text-xs font-sans text-[#C8BFB2] leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
