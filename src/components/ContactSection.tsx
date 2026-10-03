import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 sm:py-28 lg:py-36 bg-[#0B0A09] text-[#F4F0E8] relative select-none border-b border-[#262320] overflow-hidden"
    >
      {/* 01. Large Editorial Background Typography (Cropped & Low-Contrast Depth) */}
      <div
        className={`absolute -right-12 sm:-right-8 -bottom-10 sm:-bottom-16 select-none pointer-events-none z-0 transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <span className="font-serif text-[6.5rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] xl:text-[26rem] font-normal leading-none tracking-tighter text-[#722F37]/[0.08] block uppercase">
          CONTACT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* 02. Top Editorial Section Label Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#262320] mb-12 sm:mb-16">
          <div
            className={`font-sans font-semibold text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[0.12em] uppercase leading-none transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <span className="text-[#722F37] mr-1.5">04 /</span>
            <span className="text-[#F4F0E8]">CONTACT</span>
          </div>

          <div
            className={`flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-[13px] text-[#8E8278] tracking-wider uppercase transition-all duration-700 delay-100 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <span className="text-[#C8BFB2]">BANGALORE, INDIA</span>
            <span className="text-[#262320]">•</span>
            <span>2025 — 2027</span>
          </div>
        </div>

        {/* 03. Main Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Monumental Headline & Strategic Statement */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2
                className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] font-normal tracking-tight leading-[0.92] text-[#F4F0E8] transition-all duration-700 delay-150 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                LET’S BUILD
                <span className="block font-serif italic text-[#C8BFB2] font-normal mt-1">
                  WHAT’S NEXT.
                </span>
              </h2>

              <p
                className={`text-base sm:text-lg lg:text-[1.1rem] text-[#C8BFB2] font-sans font-light leading-relaxed max-w-lg pt-2 sm:pt-4 transition-all duration-700 delay-250 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Available for strategic roles and project collaborations across Buying & Merchandising, Retail Operations, Visual Merchandising, and Brand Strategy.
              </p>
            </div>

            {/* Subtle Editorial Positioning Stamp */}
            <div
              className={`pt-6 sm:pt-8 border-t border-[#262320] max-w-md transition-all duration-700 delay-350 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block mb-1.5">
                EDITORIAL DESK
              </span>
              <p className="text-xs sm:text-[13px] font-mono text-[#8E8278] uppercase tracking-wider leading-relaxed">
                AVAILABLE FOR STRATEGIC ROLES, COLLABORATIONS & SELECTED PROJECTS.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Contact Directory / Index */}
          <div className="lg:col-span-6 space-y-0 border-t border-[#262320]">
            {/* 1. EMAIL ROW */}
            <div
              className={`group py-6 sm:py-8 border-b border-[#262320] transition-all duration-700 delay-200 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#8E8278] group-hover:text-[#722F37] transition-colors">
                  01 // EMAIL
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] font-mono uppercase tracking-wider text-[#8E8278] hover:text-[#F4F0E8] transition-colors flex items-center gap-1.5 py-0.5 px-2 rounded border border-[#262320] hover:border-[#722F37]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_DATA.email}?subject=Collaboration / Strategic Role Inquiry - PRASHANTHI.B`}
                className="flex items-center justify-between gap-4 text-[#F4F0E8] group-hover:text-[#A87578] transition-colors"
              >
                <span className="font-sans text-lg sm:text-2xl lg:text-[1.65rem] font-normal tracking-tight break-all">
                  {PERSONAL_DATA.email}
                </span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </a>
            </div>

            {/* 2. LINKEDIN ROW */}
            <div
              className={`group py-6 sm:py-8 border-b border-[#262320] transition-all duration-700 delay-300 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="mb-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#8E8278] group-hover:text-[#722F37] transition-colors">
                  02 // LINKEDIN
                </span>
              </div>

              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 text-[#F4F0E8] group-hover:text-[#A87578] transition-colors"
              >
                <span className="font-sans text-lg sm:text-2xl lg:text-[1.65rem] font-normal tracking-tight">
                  PRASHANTHI.B
                </span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </a>
            </div>

            {/* 3. CV DOWNLOAD ROW */}
            <div
              className={`group py-6 sm:py-8 border-b border-[#262320] transition-all duration-700 delay-400 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="mb-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#8E8278] group-hover:text-[#722F37] transition-colors">
                  03 // RESUME & CREDENTIALS
                </span>
              </div>

              <a
                href={PERSONAL_DATA.cvUrl}
                className="flex items-center justify-between gap-4 text-[#F4F0E8] group-hover:text-[#A87578] transition-colors"
              >
                <span className="font-sans text-lg sm:text-2xl lg:text-[1.65rem] font-normal tracking-tight">
                  VIEW / DOWNLOAD CV
                </span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </a>
            </div>

            {/* 4. LOCATION & BASE ROW */}
            <div
              className={`py-6 sm:py-8 transition-all duration-700 delay-500 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="mb-2">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#8E8278]">
                  04 // BASE LOCATION
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-lg sm:text-2xl lg:text-[1.65rem] font-normal text-[#C8BFB2] tracking-tight">
                  BANGALORE, INDIA
                </span>
                <span className="text-xs font-mono uppercase text-[#722F37] tracking-wider font-semibold">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
