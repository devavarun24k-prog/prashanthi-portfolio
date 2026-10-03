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

      {/* 02. MAIN EDITORIAL HEADLINE SPREAD */}
      <div className="my-auto py-12 sm:py-16 lg:py-20 w-full relative z-10">
        <div className="max-w-5xl space-y-6 sm:space-y-8">
          <div className="overflow-hidden">
            <h2
              className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-normal tracking-tight leading-[0.90] text-[#F4F0E8] uppercase transition-all duration-1000 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              LET’S TALK
              <span className="block font-serif italic text-[#C8BFB2] font-normal mt-1.5 sm:mt-2">
                ABOUT WHAT
              </span>
              <span className="block font-serif font-normal text-[#F4F0E8] mt-1.5 sm:mt-2">
                COMES NEXT<span className="text-[#722F37]">.</span>
              </span>
            </h2>
          </div>

          {/* Restrained Subtitle Line (Max 2 lines) */}
          <div
            className={`pt-2 sm:pt-4 transition-all duration-700 delay-300 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs sm:text-[13px] lg:text-sm font-mono text-[#8E8278] uppercase tracking-wider leading-relaxed max-w-xl">
              AVAILABLE FOR STRATEGIC ROLES, SELECTED COLLABORATIONS & PROJECTS.
            </p>
          </div>
        </div>
      </div>

      {/* 03. MINIMAL PUBLICATION CONTACT INDEX & SIGNATURE */}
      <div className="w-full pt-8 border-t border-[#262320] relative z-20 space-y-8">
        {/* Contact Metadata Directory (Publication Index Style) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 delay-400 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Email */}
          <div className="space-y-1 group">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
              EMAIL
            </span>
            <a
              href={`mailto:${PERSONAL_DATA.email}?subject=Collaboration / Strategic Role Inquiry - PRASHANTHI.B`}
              className="inline-flex items-center gap-2 text-sm sm:text-[15px] lg:text-base font-sans text-[#F4F0E8] group-hover:text-[#A87578] transition-colors duration-300 break-all"
            >
              <span>{PERSONAL_DATA.email}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-2 transition-all duration-300 shrink-0" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="space-y-1 group">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
              LINKEDIN
            </span>
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-[15px] lg:text-base font-sans text-[#F4F0E8] group-hover:text-[#A87578] transition-colors duration-300"
            >
              <span>PRASHANTHI.B</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-2 transition-all duration-300 shrink-0" />
            </a>
          </div>

          {/* CV */}
          <div className="space-y-1 group">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
              RESUME
            </span>
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-sm sm:text-[15px] lg:text-base font-sans text-[#F4F0E8] group-hover:text-[#A87578] transition-colors duration-300"
            >
              <span>VIEW CV</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-2 transition-all duration-300 shrink-0" />
            </a>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
              LOCATION
            </span>
            <span className="text-sm sm:text-[15px] lg:text-base font-sans text-[#C8BFB2]">
              BANGALORE / INDIA
            </span>
          </div>
        </div>

        {/* Imprint Footer Signature */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#262320]/60 text-[11px] font-mono text-[#8E8278] uppercase tracking-wider">
          <span className="text-[#F4F0E8] font-sans font-semibold text-xs tracking-widest">
            PRASHANTHI.B
          </span>
          <span>FASHION · RETAIL · CONSUMER THINKING</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
};
