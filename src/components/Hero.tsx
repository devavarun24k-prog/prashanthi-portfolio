import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [phase, setPhase] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Controlled editorial reveal phases
    const p1 = setTimeout(() => setPhase(1), 50);   // Grid & metadata
    const p2 = setTimeout(() => setPhase(2), 250);  // Portrait reveal
    const p3 = setTimeout(() => setPhase(3), 500);  // "Prashanthi B." monumental title
    const p4 = setTimeout(() => setPhase(4), 850);  // Role & positioning
    const p5 = setTimeout(() => setPhase(5), 1150); // CTAs settle

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(p5);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (vh * 0.9), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 6;
      const y = ((e.clientY / innerHeight) - 0.5) * 6;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320]"
    >
      {/* Subtle Editorial Background Grid */}
      <div
        className="absolute inset-0 editorial-grid-bg pointer-events-none transition-opacity duration-1000 ease-out"
        style={{
          opacity: phase >= 1 ? 0.35 - scrollProgress * 0.2 : 0,
        }}
      />

      {/* Top Editorial Identity & Metadata Bar */}
      <div className="relative z-20">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262320] text-xs font-mono text-[#8E8278]">
          <div
            className={`flex items-center gap-2.5 transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
            <span className="font-bold text-[#F4F0E8] tracking-widest uppercase">Prashanthi B.</span>
          </div>

          <div
            className={`flex items-center gap-2 sm:gap-3 text-[11px] tracking-wider transition-all duration-700 delay-100 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="text-[#C8BFB2]">BANGALORE, INDIA</span>
            <span className="text-[#262320]">•</span>
            <span className="text-[#722F37] font-semibold uppercase">FASHION × RETAIL × BRAND STRATEGY</span>
          </div>
        </div>
      </div>

      {/* HERO CENTRAL EDITORIAL SPREAD */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center py-6 sm:py-10 my-auto transition-all duration-500"
        style={{
          transform: `translate3d(0, ${scrollProgress * -20}px, 0)`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      >
        {/* Left Column: Monumental Editorial Typography (Dominant Name & Role) */}
        <div
          className="lg:col-span-7 space-y-6 lg:space-y-7 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px, 0)`,
          }}
        >
          {/* Main Monumental Name */}
          <div className="space-y-3">
            <div className="overflow-hidden">
              <h1
                className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.75rem] 2xl:text-[8.5rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.88] transition-all duration-1000 ease-out ${
                  phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Prashanthi B.
              </h1>
            </div>

            {/* Role Disciplines */}
            <div className="overflow-hidden pt-1">
              <p
                className={`font-serif italic text-[#722F37] font-normal text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] tracking-tight leading-snug transition-all duration-1000 delay-150 ease-out ${
                  phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Buying & Merchandising | Brand Strategy | Visual Merchandising
              </p>
            </div>
          </div>

          {/* Strategic Positioning Line */}
          <p
            className={`text-base sm:text-lg lg:text-xl text-[#C8BFB2] leading-relaxed font-sans max-w-xl font-light transition-all duration-1000 delay-300 ease-out ${
              phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            “{PERSONAL_DATA.intro}”
          </p>

          {/* Action CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 sm:gap-5 pt-2 transition-all duration-700 delay-500 ${
              phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider bg-[#722F37] text-[#F4F0E8] px-7 py-3.5 rounded-full hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all duration-300 shadow-xl border border-[#722F37] group"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider px-4 py-3.5 text-[#C8BFB2] hover:text-[#722F37] transition-colors duration-300 group"
            >
              <span>DIRECT INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#722F37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column: Pure Editorial Portrait (Unboxed, seamlessly integrated) */}
        <div
          className="lg:col-span-5 flex justify-center lg:justify-end z-10 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3 + scrollProgress * 8}px, 0)`,
          }}
        >
          <div
            className={`relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[3/4] overflow-hidden rounded-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
            }`}
          >
            <img
              src={PERSONAL_DATA.images.hero}
              alt="Prashanthi B. — Fashion Business & Merchandising"
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out hover:scale-[1.01]"
              style={{
                transform: `scale(${1 + scrollProgress * 0.02})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
