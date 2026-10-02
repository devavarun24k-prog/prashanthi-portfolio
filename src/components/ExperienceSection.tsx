import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E2D5C3] bg-[#F5EEE3] text-[#2C2421]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2D5C3]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
            <Briefcase className="w-4 h-4" />
            <span>Track Record & Background</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2421] tracking-tight">
            Experience & Education
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#554E48] leading-relaxed font-sans">
          Hands-on retail execution, digital brand marketing, and formal academic management training.
        </p>
      </div>

      <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Work History (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E2D5C3] pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2421]">
              Professional Experience
            </span>
            <span className="text-xs text-[#8F8177] font-sans">2023–2024</span>
          </div>

          <div className="space-y-8">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-2xl bg-[#FAF6EE] border border-[#E2D5C3] hover:border-[#722F37] transition-all shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2D5C3] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#722F37] text-[#F5EEE3]">
                      {exp.period}
                    </span>
                    <span className="text-xs font-sans text-[#8F8177]">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-xs font-sans text-[#722F37] font-medium">
                    {exp.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2421] font-normal">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-sans font-semibold text-[#722F37] mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <p className="text-sm text-[#554E48] leading-relaxed font-sans">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E2D5C3]">
                  {exp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#2C2421]">
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
            <div className="flex items-center justify-between border-b border-[#E2D5C3] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2421] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#722F37]" />
                Academic Degrees
              </span>
              <span className="text-xs text-[#8F8177] font-sans">2020–2027</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E2D5C3] shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-[#8F8177]">
                    <span>{edu.period}</span>
                    <span className="text-xs font-semibold text-[#722F37]">{edu.status}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#2C2421] font-normal leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-sans text-[#554E48]">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Exposure */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E2D5C3] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2421] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#722F37]" />
                Industry Exposure
              </span>
            </div>

            <div className="space-y-4">
              {EXPOSURES_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E2D5C3] shadow-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs text-[#8F8177]">
                    <span className="text-[#722F37] font-semibold">{exp.type}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#2C2421] font-normal">
                    {exp.title}
                  </h4>
                  <p className="text-xs font-sans text-[#554E48] leading-relaxed">
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
