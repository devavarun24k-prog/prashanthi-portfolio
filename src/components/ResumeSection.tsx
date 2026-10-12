import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, FileText } from 'lucide-react';
import { PERSONAL_DATA, EXPERIENCES_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Section Header Label Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#262320] mb-12 sm:mb-16 relative z-10">
        <div className="font-sans font-semibold text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[0.12em] uppercase leading-none">
          <span className="text-[#722F37] mr-1.5">04 /</span>
          <span className="text-[#F4F0E8]">RESUME</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-[13px] text-[#8E8278] tracking-wider uppercase">
          <span className="text-[#C8BFB2]">CURRICULUM VITAE & CREDENTIALS</span>
          <span className="text-[#262320]">•</span>
          <span>BANGALORE / INDIA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column: Heading & Executive Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h2
              className={`font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92] transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              PROFILE &
              <span className="block font-serif italic text-[#C8BFB2] font-normal">
                CREDENTIALS
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-[13px] text-[#722F37] uppercase tracking-[0.16em] font-semibold">
              BUYING · MERCHANDISING · RETAIL · BRAND STRATEGY
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            MBA candidate at Pearl Academy Bangalore with experience across social media marketing and visual merchandising. Specialized in connecting creative design with analytical merchandising architecture.
          </p>

          {/* Action Box */}
          <div className="p-6 rounded-xl border border-[#262320] bg-[#141211]/60 space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#722F37]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#F4F0E8] font-semibold">
                Official Curriculum Vitae
              </span>
            </div>
            <p className="text-xs text-[#8E8278] leading-relaxed">
              Complete academic transcripts, comprehensive project dossiers, and references are available upon direct request.
            </p>
            <div className="pt-2">
              <a
                href={PERSONAL_DATA.cvUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#722F37] hover:bg-[#8B3A44] text-[#F4F0E8] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request CV via Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Experience & Education Quick Digest */}
        <div className="lg:col-span-7 space-y-10">
          {/* Work History */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#262320] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#722F37]">
                Experience Summary
              </span>
              <span className="text-[11px] font-mono text-[#8E8278]">
                {EXPERIENCES_DATA.length} POSITIONS
              </span>
            </div>

            <div className="space-y-6">
              {EXPERIENCES_DATA.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 sm:p-6 rounded-lg border border-[#262320] hover:border-[#722F37]/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] bg-[#141211]/30 space-y-2"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-xs text-[#722F37] font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8E8278]">
                    <span className="text-[#C8BFB2]">{exp.role}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans font-light pt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#262320] pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#722F37]">
                Academic Qualifications
              </span>
              <span className="text-[11px] font-mono text-[#8E8278]">
                {EDUCATION_DATA.length} DEGREES
              </span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 sm:p-6 rounded-lg border border-[#262320] hover:border-[#722F37]/50 transition-colors bg-[#141211]/30 space-y-2"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs text-[#722F37] font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#C8BFB2]">
                    {edu.institution} — {edu.location}
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
