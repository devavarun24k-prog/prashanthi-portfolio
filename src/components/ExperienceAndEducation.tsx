import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceAndEducation: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#C8C0B5] bg-[#E5DFD5] text-[#24201D]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#24201D]/15">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#5A2028] uppercase font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>07 / TRACK RECORD</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#24201D] tracking-tight">
            Experience & Education
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#5C544E] leading-relaxed">
          Professional retail and marketing internships, fashion business management studies, and industry exposure programs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14 items-start">
        {/* Left Column: Professional Internships (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-[#24201D]/10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#24201D]">
              Professional Internships
            </span>
            <span className="text-[10px] font-mono text-[#5A2028] uppercase font-semibold">
              DOCUMENTED EXPERIENCE
            </span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 bg-[#F3EFE7] border border-[#C8C0B5] rounded-none hover:border-[#5A2028] transition-all duration-300 space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs text-[#5A2028] tracking-wider block font-semibold">
                      {exp.number} • {exp.type}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#24201D] font-normal mt-1">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#24201D] bg-white px-3.5 py-1.5 rounded-none border border-[#C8C0B5] self-start sm:self-auto font-medium">
                    {exp.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C544E] leading-relaxed font-sans pt-2 border-t border-[#24201D]/10">
                  {exp.summary}
                </p>

                <div className="space-y-2 pt-2">
                  {exp.keyResponsibilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5C544E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5A2028] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Industry Exposure Sub-section */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#24201D] font-semibold pb-2 border-b border-[#24201D]/10">
              <Award className="w-4 h-4 text-[#5A2028]" />
              <span>Industry Exposure & Programs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPOSURES_DATA.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-[#F3EFE7] border border-[#C8C0B5] rounded-none hover:border-[#5A2028] transition-colors space-y-2 shadow-sm"
                >
                  <span className="font-mono text-[10px] text-[#5A2028] uppercase tracking-wider block font-semibold">
                    {item.number} • {item.type}
                  </span>
                  <h4 className="font-serif text-lg text-[#24201D] font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C544E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education (Cols 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#24201D]/10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#24201D]">
              <GraduationCap className="w-4 h-4 text-[#5A2028]" />
              <span>Education</span>
            </div>
            <span className="text-[10px] font-mono text-[#5A2028] uppercase font-semibold">
              ACADEMIC CREDENTIALS
            </span>
          </div>

          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={edu.id}
                className={`p-6 sm:p-8 rounded-none space-y-4 relative overflow-hidden ${
                  idx === 0
                    ? 'bg-[#17120F] text-[#F3EFE7] shadow-xl border border-[#2E2520]'
                    : 'bg-[#F3EFE7] border border-[#C8C0B5] text-[#24201D]'
                }`}
              >
                {idx === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#5A2028]" />
                )}

                <div className="space-y-1.5">
                  <span className={`font-mono text-[11px] uppercase tracking-widest block font-semibold ${idx === 0 ? 'text-[#5A2028]' : 'text-[#5A2028]'}`}>
                    {edu.period} • {edu.status.toUpperCase()}
                  </span>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-normal leading-snug ${idx === 0 ? 'text-[#F3EFE7]' : 'text-[#24201D]'}`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-sm font-medium ${idx === 0 ? 'text-[#C8C0B5]' : 'text-[#5C544E]'}`}>
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#C8C0B5]/60 font-mono pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#5A2028]" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F3EFE7] border border-[#C8C0B5] rounded-none text-xs text-[#5C544E] space-y-1">
            <span className="font-mono text-[10px] uppercase text-[#5A2028] block font-semibold">
              ACADEMIC SPECIALIZATION
            </span>
            <p>
              Focused on buying strategies, luxury retail management, assortment planning, and visual merchandising.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
