import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES_DATA, EDUCATION_DATA, EXPOSURES_DATA } from '../data/portfolioData';

export const ExperienceAndEducation: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#D9D7D2] bg-[#E8E7E3] text-[#0D0D0D]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D9D7D2]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>07 / TRACK RECORD</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0D0D0D] tracking-tight">
            Experience & Education
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#666666] leading-relaxed">
          Professional retail and marketing internships, fashion business management studies, and industry exposure programs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14 items-start">
        {/* Left Column: Professional Internships (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9D7D2]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0D0D]">
              Professional Internships
            </span>
            <span className="text-[10px] font-mono text-[#666666] uppercase font-semibold">
              DOCUMENTED EXPERIENCE
            </span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-8 bg-[#F5F4F0] border border-[#D9D7D2] hover:border-[#0D0D0D] transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs text-[#666666] tracking-wider block font-semibold">
                      {exp.number} • {exp.type}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D] font-normal mt-1">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#0D0D0D] bg-white px-3.5 py-1.5 border border-[#D9D7D2] self-start sm:self-auto font-medium">
                    {exp.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-sans pt-2 border-t border-[#D9D7D2]">
                  {exp.summary}
                </p>

                <div className="space-y-2 pt-2">
                  {exp.keyResponsibilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#666666]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D0D0D] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Industry Exposure Sub-section */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#0D0D0D] font-semibold pb-2 border-b border-[#D9D7D2]">
              <Award className="w-4 h-4" />
              <span>Industry Exposure & Programs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPOSURES_DATA.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-[#F5F4F0] border border-[#D9D7D2] hover:border-[#0D0D0D] transition-colors space-y-2"
                >
                  <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block font-semibold">
                    {item.number} • {item.type}
                  </span>
                  <h4 className="font-serif text-lg text-[#0D0D0D] font-normal">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education (Cols 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9D7D2]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#0D0D0D]">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <span className="text-[10px] font-mono text-[#666666] uppercase font-semibold">
              ACADEMIC CREDENTIALS
            </span>
          </div>

          <div className="space-y-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={edu.id}
                className={`p-6 sm:p-8 space-y-4 relative ${
                  idx === 0
                    ? 'bg-[#0D0D0D] text-[#F5F4F0] border border-[#262626]'
                    : 'bg-[#F5F4F0] border border-[#D9D7D2] text-[#0D0D0D]'
                }`}
              >
                <div className="space-y-1.5">
                  <span className={`font-mono text-[11px] uppercase tracking-widest block font-semibold ${idx === 0 ? 'text-[#96938D]' : 'text-[#666666]'}`}>
                    {edu.period} • {edu.status.toUpperCase()}
                  </span>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-normal leading-snug ${idx === 0 ? 'text-[#F5F4F0]' : 'text-[#0D0D0D]'}`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-sm font-medium ${idx === 0 ? 'text-[#96938D]' : 'text-[#666666]'}`}>
                    {edu.institution}
                  </p>
                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#96938D] font-mono pt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F5F4F0] border border-[#D9D7D2] text-xs text-[#666666] space-y-1">
            <span className="font-mono text-[10px] uppercase text-[#0D0D0D] block font-semibold">
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
