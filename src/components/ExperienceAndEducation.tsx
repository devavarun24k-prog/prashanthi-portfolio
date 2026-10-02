import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceAndEducation: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E5E1D8] bg-[#F4F1EB] text-[#151515]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E1D8]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#77736D] uppercase font-semibold">
            <span className="font-bold text-[#151515] bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E1D8]">
              07 / 10
            </span>
            <Briefcase className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>TRACK RECORD & ACADEMICS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#151515] tracking-tight">
            Experience & Education
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#77736D] leading-relaxed">
          Hands-on retail execution, marketing internships, and formal fashion business management training.
        </p>
      </div>

      <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Professional Experience Editorial Year Blocks (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#151515] font-semibold">
              PROFESSIONAL WORK HISTORY
            </span>
            <span className="text-[11px] font-mono text-[#77736D]">2024</span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 bg-[#FAF9F6] border border-[#E5E1D8] hover:border-[#151515] transition-all space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E1D8] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FAF9F6] bg-[#151515] px-2.5 py-1">
                      {exp.year}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#77736D]">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#5A2427]">ROLE 0{exp.number}</span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl font-normal text-[#151515]">
                    {exp.company}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#77736D] mt-1">
                    {exp.role}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans font-light">
                  {exp.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E5E1D8]">
                  <div className="font-mono text-[10px] text-[#77736D] uppercase">Key Responsibilities:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.keyResponsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="text-xs text-[#333333] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5A2427] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Industry Exposure (Cols 5) */}
        <div className="lg:col-span-5 space-y-10">
          {/* Education Blocks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#151515] font-semibold flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#5A2427]" />
                ACADEMIC DEGREES
              </span>
              <span className="text-[11px] font-mono text-[#77736D]">2020–2027</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-6 bg-[#FAF9F6] border border-[#E5E1D8] space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#77736D]">
                    <span>{edu.period}</span>
                    <span className="text-[#151515] font-semibold">{edu.credentialType}</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#151515] font-medium leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#77736D] font-mono">
                    {edu.institution} {edu.location ? `• ${edu.location}` : ''}
                  </p>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#F4F1EB] border border-[#E5E1D8] text-[#151515]">
                      Status: {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Exposure Blocks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#151515] font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-[#5A2427]" />
                INDUSTRY EXPOSURE
              </span>
            </div>

            <div className="space-y-4">
              {EXPOSURES_DATA.map((exp) => (
                <div key={exp.id} className="p-5 bg-[#FAF9F6] border border-[#E5E1D8] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#77736D]">
                    <span>EXPOSURE 0{exp.number}</span>
                    <span className="text-[#5A2427] font-semibold">{exp.type}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#151515] font-medium">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed font-sans font-light">
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
