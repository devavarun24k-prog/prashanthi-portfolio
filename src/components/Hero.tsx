import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [phase, setPhase] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Cinematic Editorial Entrance Sequence
    const p1 = setTimeout(() => setPhase(1), 60);   // Subtle grid lines fade in
    const p2 = setTimeout(() => setPhase(2), 300);  // Portrait mask reveals
    const p3 = setTimeout(() => setPhase(3), 650);  // "Prashanthi B." typography reveals
    const p4 = setTimeout(() => setPhase(4), 1050); // Supporting disciplines reveal
    const p5 = setTimeout(() => setPhase(5), 1400); // Academic credential & statement
    const p6 = setTimeout(() => setPhase(6), 1750); // CTAs settle & accent line draws

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(p5);
      clearTimeout(p6);
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
      // Controlled 2-4px maximum movement
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
      className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between pt-28 sm:pt-36 pb-16 sm:pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none border-b border-[#262320]"
    >
      {/* Subtle Editorial Grid Lines */}
      <div
        className="absolute inset-0 editorial-grid-bg pointer-events-none transition-opacity duration-1000 ease-out"
        style={{
          opacity: phase >= 1 ? 0.35 - scrollProgress * 0.2 : 0,
        }}
      />

      {/* Top Editorial Identity & Metadata Bar */}
      <div className="relative z-20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 text-xs font-mono text-[#8E8278]">
          <div
            className={`inline-flex items-center gap-2.5 transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-bold text-[#F4F0E8] tracking-widest uppercase">Prashanthi B.</span>
          </div>

          <div
            className={`hidden sm:flex items-center gap-2 transition-all duration-700 delay-100 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
            <span className="text-[#C8BFB2]">BANGALORE, INDIA</span>
            <span className="text-[#262320]">•</span>
            <span className="text-[11px] text-[#8E8278]">12.9716° N, 77.5946° E</span>
          </div>

          <div
            className={`text-[#722F37] uppercase tracking-wider font-semibold transition-all duration-700 delay-200 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span>FASHION × RETAIL × STRATEGY</span>
          </div>
        </div>

        {/* Drawing Accent Rule Line */}
        <div className="relative w-full h-[1px] bg-[#262320] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-[#722F37] transition-all duration-1000 ease-out"
            style={{
              width: phase >= 1 ? '100%' : '0%',
              opacity: phase >= 1 ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* HERO CENTRAL EDITORIAL SPREAD */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-8 sm:py-14 my-auto transition-all duration-500"
        style={{
          transform: `translate3d(0, ${scrollProgress * -20}px, 0)`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      >
        {/* Left Column: Monumental Editorial Typography */}
        <div
          className="lg:col-span-7 space-y-6 lg:space-y-8 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px, 0)`,
          }}
        >
          {/* Main Title & Role */}
          <div className="space-y-3">
            <div className="overflow-hidden">
              <h1
                className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] xl:text-[7rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.90] ${
                  phase >= 3 ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
                }`}
              >
                Prashanthi B.
              </h1>
            </div>

            <div className="overflow-hidden pt-1">
              <p
                className={`font-serif italic text-[#722F37] font-normal text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug ${
                  phase >= 4 ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
                }`}
              >
                Buying & Merchandising | Brand Strategy | Visual Merchandising
              </p>
            </div>
          </div>

          {/* Academic Credential & Disciplines */}
          <div
            className={`space-y-2 border-l-2 border-[#722F37] pl-4 transition-all duration-1000 ${
              phase >= 5 ? 'mask-horizontal-reveal' : 'mask-horizontal-hidden'
            }`}
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[#C8BFB2] font-semibold">
              MBA — Fashion & Lifestyle Business Management
            </div>
            <div className="text-xs text-[#8E8278] font-sans">
              Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)
            </div>
          </div>

          {/* Statement Quote */}
          <p
            className={`text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans max-w-xl font-light transition-all duration-1000 ${
              phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            “I bring a creative eye with a strong understanding of the business behind fashion.”
          </p>

          {/* Action CTAs */}
          <div
            className={`flex flex-wrap items-center gap-5 pt-2 transition-all duration-700 ${
              phase >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
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
            className={`relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[3/4] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
