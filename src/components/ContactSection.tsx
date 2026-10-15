import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
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
      id="contact"
      className="py-20 sm:py-28 lg:py-32 bg-[#0B0A09] text-[#F4F0E8] relative select-none border-b border-[#262320] flex flex-col justify-between px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 01. Section Label Bar */}
      <div className="w-full relative z-20">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262320]">
          <div
            className={`font-sans font-semibold text-[14px] sm:text-[15px] lg:text-[16px] tracking-[0.12em] uppercase leading-none transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="text-[#722F37] mr-1.5">04 /</span>
            <span className="text-[#F4F0E8]">CONTACT</span>
          </div>

          <div
            className={`flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-[13px] text-[#8E8278] tracking-wider uppercase transition-all duration-700 delay-100 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="text-[#C8BFB2]">BANGALORE, INDIA</span>
            <span className="text-[#262320]">•</span>
            <span>2025 — 2027</span>
          </div>
        </div>
      </div>

      {/* 02. MAIN EDITORIAL CONTACT SPREAD */}
      <div className="my-auto py-12 sm:py-16 lg:py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Headline & Availability Statement */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="overflow-hidden">
              <h2
                className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal tracking-tight leading-[0.98] text-[#F4F0E8] uppercase transition-all duration-1000 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                GREAT<br />
                BRANDS START<br />
                <span className="text-[#C8BFB2]">WITH </span>
                <span className="italic text-[#C8BFB2]">CURIOUS<br /></span>
                <span className="italic text-[#C8BFB2]">CONVERSATIONS</span>
                <span className="text-[#722F37]">.</span>
              </h2>
            </div>

            {/* Restrained Subtitle Narrative */}
            <div
              className={`space-y-4 pt-2 sm:pt-4 transition-all duration-700 delay-300 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-base sm:text-lg text-[#C8BFB2] font-sans font-light leading-relaxed max-w-xl">
                Open to opportunities in brand strategy, marketing, brand communications, and merchandising — where creativity meets commerce.
              </p>
              <div className="flex items-center gap-2 pt-2 font-mono text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#722F37] shrink-0" />
                <span className="text-[#C8BFB2] uppercase tracking-wider font-medium text-[11px] sm:text-xs">
                  LET’S CREATE WHAT’S NEXT.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Editorial Interactive Contact Directory */}
          <div
            className={`lg:col-span-5 space-y-4 transition-all duration-700 delay-400 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Card 01: Direct Email */}
            <a
              href={`mailto:${PERSONAL_DATA.email}?subject=Collaboration / Opportunity - PRASHANTHI.B`}
              className="group p-5 sm:p-6 rounded-2xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 flex items-center justify-between block"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] block font-semibold">
                  01 // DIRECT EMAIL
                </span>
                <span className="text-sm sm:text-base font-sans text-[#F4F0E8] group-hover:text-[#C8BFB2] transition-colors break-all">
                  {PERSONAL_DATA.email}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full border border-[#262320] flex items-center justify-center group-hover:border-[#722F37] group-hover:bg-[#722F37]/10 transition-colors shrink-0 ml-4">
                <ArrowRight className="w-4 h-4 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>

            {/* Card 02: LinkedIn */}
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-2xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 flex items-center justify-between block"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] block font-semibold">
                  02 // LINKEDIN
                </span>
                <span className="text-sm sm:text-base font-sans text-[#F4F0E8] group-hover:text-[#C8BFB2] transition-colors">
                  Prashanthi Reddy
                </span>
              </div>
              <div className="w-9 h-9 rounded-full border border-[#262320] flex items-center justify-center group-hover:border-[#722F37] group-hover:bg-[#722F37]/10 transition-colors shrink-0 ml-4">
                <ArrowRight className="w-4 h-4 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>

            {/* Card 03: Resume / View My CV */}
            <a
              href={PERSONAL_DATA.cvUrl}
              className="group p-5 sm:p-6 rounded-2xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 flex items-center justify-between block"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] block font-semibold">
                  03 // RESUME
                </span>
                <span className="text-sm sm:text-base font-sans text-[#F4F0E8] group-hover:text-[#C8BFB2] transition-colors">
                  View My CV
                </span>
              </div>
              <div className="w-9 h-9 rounded-full border border-[#262320] flex items-center justify-center group-hover:border-[#722F37] group-hover:bg-[#722F37]/10 transition-colors shrink-0 ml-4">
                <ArrowRight className="w-4 h-4 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>

            {/* Card 04: Base Location */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#141211] border border-[#262320] flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#722F37] block font-semibold">
                  04 // BASE LOCATION
                </span>
                <span className="text-sm sm:text-base font-sans text-[#F4F0E8]">
                  Bangalore, Karnataka, India
                </span>
              </div>
              <div className="w-9 h-9 rounded-full border border-[#262320] flex items-center justify-center shrink-0 ml-4">
                <ArrowRight className="w-4 h-4 text-[#8E8278]" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 03. MINIMAL PUBLICATION SIGNATURE */}
      <div className="w-full pt-6 border-t border-[#262320] relative z-20">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[#8E8278] uppercase tracking-wider">
          <span className="text-[#F4F0E8] font-sans font-semibold text-xs tracking-widest">
            PRASHANTHI.B
          </span>
          <span>BANGALORE / INDIA</span>
          <span>PORTFOLIO / 2026</span>
        </div>
      </div>
    </section>
  );
};
