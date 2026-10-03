import React, { useState, useEffect, useRef } from 'react';
import { WORK_WITH_DATA } from '../data/portfolioData';

export const CapabilitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative overflow-hidden"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Small Secondary Metadata Label */}
      <div className="flex items-center gap-2 mb-4 sm:mb-5 relative z-10">
        <div className="font-sans font-semibold text-[13px] sm:text-[14px] lg:text-[15px] tracking-[0.12em] uppercase leading-none">
          <span className="text-[#722F37] mr-1.5">04 /</span>
          <span className="text-[#F4F0E8]">CAPABILITIES</span>
        </div>
      </div>

      {/* Strong Editorial Section Heading */}
      <div className="mb-10 sm:mb-14 relative z-10 overflow-hidden">
        <h2
          className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.9] transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          WHAT I WORK WITH
        </h2>
      </div>

      {/* Subtle Horizontal Rule */}
      <div className="w-full h-px bg-[#8E8278]/25 mb-12 sm:mb-16 relative z-10" />

      {/* 3-Column Editorial Capability Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 xl:gap-16 relative z-10">
        {WORK_WITH_DATA.map((cat, index) => (
          <div
            key={cat.number}
            className={`group md:border-l md:border-[#262320] md:pl-8 lg:pl-10 first:border-l-0 first:pl-0 transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: `${150 + index * 150}ms`,
            }}
          >
            {/* Category Number */}
            <span className="text-xs sm:text-[13px] font-mono font-semibold text-[#722F37] tracking-[0.15em] block mb-2.5 sm:mb-3">
              {cat.number}
            </span>

            {/* Category Heading with Subtle Hover Shift & Tint */}
            <h3 className="text-2xl sm:text-[1.65rem] lg:text-[1.85rem] font-sans font-semibold text-[#F4F0E8] tracking-tight leading-tight mb-5 transition-all duration-300 ease-out group-hover:text-[#A87578] group-hover:translate-x-1">
              {cat.category}
            </h3>

            {/* Skill Text */}
            <div className="space-y-2.5 text-base sm:text-[17px] lg:text-[18px] text-[#C8BFB2] font-sans font-light leading-[1.7]">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-3">
                  <span className="text-[#8E8278] text-sm select-none">·</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
