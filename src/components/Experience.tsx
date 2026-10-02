import React from 'react';
import { Briefcase, GraduationCap, Building2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const internships = EXPERIENCES.filter((exp) => exp.type === 'Internship');
  const education = EXPERIENCES.filter((exp) => exp.type === 'Education');

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E5DC]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E5DC]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#9C7A4A] uppercase">
            <Briefcase className="w-4 h-4" />
            <span>02 / PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1B19] tracking-tight">
            Experience & Education
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#6E6B65] leading-relaxed">
          Industry internships in visual merchandising and social media marketing alongside fashion business management studies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
        {/* Left Column: Internships */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 pb-4 border-b border-[#E8E5DC]">
            <Building2 className="w-4 h-4 text-[#9C7A4A]" />
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-semibold text-[#1C1B19]">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {internships.map((exp, idx) => (
              <div
                key={exp.id}
                className="editorial-card p-6 sm:p-8 rounded-sm space-y-4 border-l-4 border-l-[#9C7A4A]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs text-[#9C7A4A] tracking-wider block">
                      0{idx + 1} • INTERNSHIP
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1B19] font-normal mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="font-mono text-xs text-[#1C1B19] bg-[#F4F2EC] px-3.5 py-1.5 rounded-sm border border-[#E8E5DC] self-start sm:self-auto font-medium">
                    {exp.role}
                  </span>
                </div>

                <p className="text-sm text-[#524E48] pt-2 border-t border-[#E8E5DC]/80 font-sans">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Credential */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-2 pb-4 border-b border-[#E8E5DC]">
            <GraduationCap className="w-4 h-4 text-[#9C7A4A]" />
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase font-semibold text-[#1C1B19]">
              Education
            </h3>
          </div>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#1C1B19] text-[#FAF9F6] p-6 sm:p-8 rounded-sm space-y-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9C7A4A] via-[#C8B89E] to-[#9C7A4A]" />

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#9C7A4A] uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF9F6] leading-snug">
                  {edu.role}
                </h4>
                <p className="text-base font-medium text-[#C8B89E]">
                  {edu.institution}
                </p>
                {edu.location && (
                  <div className="flex items-center gap-1.5 text-xs text-[#FAF9F6]/60 font-mono pt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>

              <div className="p-4 bg-[#262626] rounded-sm border border-[#333333] text-xs text-[#FAF9F6]/80 leading-relaxed font-sans">
                {edu.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
