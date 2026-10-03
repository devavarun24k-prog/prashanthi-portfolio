import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [phase, setPhase] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Cinematic 6-Phase Staggered Entrance Sequence
    const p1 = setTimeout(() => setPhase(1), 100);  // Top identity & thin accent rule
    const p2 = setTimeout(() => setPhase(2), 550);  // Monumental Name Mask Reveal
    const p3 = setTimeout(() => setPhase(3), 1000); // Editorial Italic Subtitle Reveal
    const p4 = setTimeout(() => setPhase(4), 1500); // Academic Credentials & Statement Quote
    const p5 = setTimeout(() => setPhase(5), 1950); // Action CTAs
    const p6 = setTimeout(() => setPhase(6), 2350); // Portrait Photographic Mask Develop

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
      const x = ((e.clientX / innerWidth) - 0.5) * 12;
      const y = ((e.clientY / innerHeight) - 0.5) * 12;
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
      {/* Top Staggered Identity Bar */}
      <div className="relative z-20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 text-xs font-mono">
          {/* Tag 1: Name */}
          <div
            className={`inline-flex items-center gap-2.5 transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-bold text-[#F4F0E8] tracking-widest uppercase">Prashanthi B.</span>
          </div>

          {/* Tag 2: Location */}
          <div
            className={`hidden sm:flex items-center gap-2 text-[#8E8278] transition-all duration-700 delay-100 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
            <span>BANGALORE / INDIA</span>
            <span className="text-[#262320]">•</span>
            <span className="text-[11px] text-[#C8BFB2]">12.9716° N, 77.5946° E</span>
          </div>

          {/* Tag 3: Disciplines */}
          <div
            className={`text-[#722F37] uppercase tracking-wider font-semibold transition-all duration-700 delay-200 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
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

      {/* HERO CENTRAL SPREAD */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-10 sm:py-16 my-auto transition-all duration-500"
        style={{
          transform: `translate3d(0, ${scrollProgress * -25}px, 0)`,
          opacity: 1 - scrollProgress * 0.6,
        }}
      >
        {/* Left Column: Multi-Directional Typography & Editorial Credential */}
        <div
          className="lg:col-span-7 space-y-7 lg:space-y-8 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)`,
          }}
        >
          {/* Headline */}
          <div className="space-y-2">
            <div className="overflow-hidden">
              <h1
                className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.93] ${
                  phase >= 2 ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
                }`}
              >
                Prashanthi B.
              </h1>
            </div>

            <div className="overflow-hidden pt-1">
              <p
                className={`font-serif italic text-[#722F37] font-normal text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug ${
                  phase >= 3 ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
                }`}
              >
                Buying & Merchandising | Brand Strategy | Visual Merchandising
              </p>
            </div>
          </div>

          {/* Academic Credential & Disciplines */}
          <div
            className={`space-y-2 border-l-2 border-[#722F37] pl-4 transition-all duration-1000 ${
              phase >= 4 ? 'mask-horizontal-reveal' : 'mask-horizontal-hidden'
            }`}
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[#C8BFB2]">
              MBA — FASHION & LIFESTYLE BUSINESS MANAGEMENT
            </div>
            <div className="text-xs text-[#8E8278] font-sans">
              Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)
            </div>
            <div className="text-xs font-mono text-[#722F37] pt-0.5">
              [BUYING] · [MERCHANDISING] · [BRAND STRATEGY] · [VISUAL MERCHANDISING]
            </div>
          </div>

          {/* Statement Quote */}
          <p
            className={`text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans max-w-xl font-light transition-all duration-1000 delay-200 ${
              phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            “I bring a creative eye with a strong understanding of the business behind fashion.”
          </p>

          {/* Action CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 ${
              phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider bg-[#722F37] text-[#F4F0E8] px-7 py-3.5 rounded-full hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all duration-300 shadow-2xl group border border-[#722F37]"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider px-5 py-3.5 text-[#C8BFB2] hover:text-[#722F37] transition-colors duration-300 group"
            >
              <span>DIRECT INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#722F37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait Photograph */}
        <div
          className="lg:col-span-5 flex justify-center lg:justify-end z-10 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4 + scrollProgress * 12}px, 0)`,
          }}
        >
          <div
            className={`relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-3xl border border-[#262320] bg-[#141211] shadow-2xl ${
              phase >= 6 ? 'photo-develop-reveal' : 'photo-develop-hidden'
            }`}
          >
            <img
              src={PERSONAL_DATA.images.hero}
              alt="Prashanthi B. — Fashion Business & Merchandising"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
