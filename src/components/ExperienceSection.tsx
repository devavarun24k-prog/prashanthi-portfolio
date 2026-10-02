import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E6DF] bg-[#F7F5F0] text-[#171717]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E6DF]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3158D4]">
            <Briefcase className="w-4 h-4" />
            <span>Track Record & Background</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight">
            Experience & Education
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#555555] leading-relaxed font-sans">
          Hands-on retail execution, digital brand marketing, and formal academic management training.
        </p>
      </div>

      <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Work History (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E8E6DF] pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#171717]">
              Professional Experience
            </span>
            <span className="text-xs text-[#77736D] font-sans">2023–2024</span>
          </div>

          <div className="space-y-8">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-2xl bg-white border border-[#E8E6DF] hover:border-[#171717] transition-all shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E6DF] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#171717] text-white">
                      {exp.period}
                    </span>
                    <span className="text-xs font-sans text-[#77736D]">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-xs font-sans text-[#3158D4] font-medium">
                    {exp.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-sans font-medium text-[#3158D4] mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8E6DF]">
                  {exp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-[#333333]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3158D4] shrink-0 mt-0.5" />
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
            <div className="flex items-center justify-between border-b border-[#E8E6DF] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#3158D4]" />
                Academic Degrees
              </span>
              <span className="text-xs text-[#77736D] font-sans">2020–2027</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-white border border-[#E8E6DF] shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-[#77736D]">
                    <span>{edu.period}</span>
                    <span className="text-xs font-medium text-[#3158D4]">{edu.status}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#171717] font-normal leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-sans text-[#555555]">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Exposure */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E6DF] pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#3158D4]" />
                Industry Exposure
              </span>
            </div>

            <div className="space-y-4">
              {EXPOSURES_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E8E6DF] shadow-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs text-[#77736D]">
                    <span className="text-[#3158D4] font-medium">{exp.type}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#171717] font-normal">
                    {exp.title}
                  </h4>
                  <p className="text-xs font-sans text-[#555555] leading-relaxed">
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
