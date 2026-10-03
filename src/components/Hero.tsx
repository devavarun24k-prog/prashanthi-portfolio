import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Coordinated 5-Phase Entrance Sequence
  const [phase, setPhase] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Cinematic orchestrated timeline (smooth, immediate interaction ready)
    const p1 = setTimeout(() => setPhase(1), 150);   // Phase 1: Subtle grid, line draw, staggered metadata
    const p2 = setTimeout(() => setPhase(2), 700);   // Phase 2: PRASHANTHI B. vertical mask uncover
    const p3 = setTimeout(() => setPhase(3), 1300);  // Phase 3: Portrait photographic develop (scale 1.08 -> 1.0 + mask)
    const p4 = setTimeout(() => setPhase(4), 1900);  // Phase 4: Multi-directional statements, horizontal credentials
    const p5 = setTimeout(() => setPhase(5), 2500);  // Phase 5: Fully interactive micro-engine

    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
      clearTimeout(p5);
    };
  }, []);

  // Scroll-linked continuous transformation into next section
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

  // Desktop Micro-interaction Parallax (5-8px subtle range, opposite axis displacement)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 16;
      const y = ((e.clientY / innerHeight) - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none"
    >
      {/* Editorial Background Grid Coordinate Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* PHASE 1: Top Staggered System Metadata & Thin Drawing Line */}
      <div className="relative z-20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 text-xs font-mono">
          {/* Tag 1: Name */}
          <div
            className={`inline-flex items-center gap-2.5 transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
            <span className="font-bold text-[#F4F0E8] tracking-widest uppercase">Prashanthi B.</span>
          </div>

          {/* Tag 2: Location Coordinate */}
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

          {/* Tag 3: Discipline Taxonomy */}
          <div
            className={`text-[#722F37] uppercase tracking-wider font-semibold transition-all duration-700 delay-200 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            <span>FASHION × RETAIL × STRATEGY</span>
          </div>
        </div>

        {/* Thin Drawing Accent Rule Line */}
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

      {/* HERO CENTRAL SPREAD: Continuous Scroll-Driven Transformation */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-8 my-auto transition-all duration-300"
        style={{
          transform: `translate3d(0, ${scrollProgress * -40}px, 0)`,
          opacity: 1 - scrollProgress * 0.75,
        }}
      >
        {/* Left Column: Multi-Directional Typography & Mask Reveals (Cols 7) */}
        <div
          className="lg:col-span-7 space-y-6 lg:space-y-8 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`,
          }}
        >
          {/* Phase 1 Marker */}
          <div
            className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#722F37] transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#722F37]" />
            <span>SYS.01 // FASHION SYSTEM & COMMERCIAL MERCHANDISE</span>
          </div>

          {/* PHASE 2: Mask Uncover Typography */}
          <div className="overflow-hidden">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.95]">
              <div className="overflow-hidden">
                <span
                  className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap ${
                    phase >= 2 ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
                  }`}
                >
                  Prashanthi B.
                </span>
              </div>
              <div className="overflow-hidden pt-2">
                <span
                  className={`block font-serif italic text-[#722F37] font-normal text-2xl sm:text-3xl lg:text-4xl transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    phase >= 2 ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
                  }`}
                >
                  Buying & Merchandising | Brand Strategy | Visual Merchandising
                </span>
              </div>
            </h1>
          </div>

          {/* PHASE 4: Horizontal Reveal Academic Credential & Specs */}
          <div
            className={`space-y-2 border-l-2 border-[#722F37] pl-4 transition-all duration-1000 delay-200 ${
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

          {/* Hero Statement */}
          <p
            className={`text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans max-w-xl font-light transition-all duration-1000 delay-300 ${
              phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            “I’m interested in where fashion, consumers and business intersect — from understanding what people want to creating the right product, experience and brand strategy to make it matter.”
          </p>

          {/* Action CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-400 ${
              phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider bg-[#722F37] text-[#F4F0E8] px-7 py-3.5 rounded-full hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-2xl group border border-[#722F37]"
            >
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider px-5 py-3.5 text-[#C8BFB2] hover:text-[#722F37] transition-colors group"
            >
              <span>DIRECT INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#722F37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Column: PHASE 3 Zoom Settling Portrait (Cols 5) */}
        <div
          className="lg:col-span-5 flex justify-center lg:justify-end z-0 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7 + scrollProgress * 20}px, 0)`,
          }}
        >
          <div
            className={`relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-3xl border border-[#262320] bg-[#141211] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase >= 3 ? 'photo-develop-reveal' : 'photo-develop-hidden'
            }`}
            style={{
              // Scroll transformation: subtle scale adaptation
              transform: `scale(${phase >= 3 ? 1 + scrollProgress * 0.05 : 1.08})`,
            }}
          >
            {/* Real Portrait Photo */}
            {!imgError && (
              <img
                src={PERSONAL_DATA.images.hero}
                alt="Prashanthi B. — Fashion Business & Merchandising"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                } hover:scale-[1.04]`}
              />
            )}

            {/* Editorial Placeholder Canvas */}
            {(imgError || !imgLoaded) && (
              <div
                className={`absolute inset-0 flex flex-col justify-between p-8 bg-[#141211] transition-opacity duration-500 ${
                  imgError ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#262320] pb-3 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#722F37] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#722F37] animate-ping" />
                    DEVELOPED PORTRAIT
                  </span>
                  <span className="text-[10px] text-[#8E8278]">4:5 // REF.PB_01</span>
                </div>

                <div className="my-auto text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#0B0A09] border border-[#262320] flex items-center justify-center text-3xl font-serif text-[#722F37] mb-4 shadow-inner">
                    PB
                  </div>
                  <h3 className="font-serif text-3xl text-[#F4F0E8] font-normal">
                    Prashanthi B.
                  </h3>
                  <p className="text-xs font-mono text-[#722F37] mt-1 uppercase tracking-widest">
                    Fashion & Retail Business
                  </p>
                  <p className="text-[11px] font-mono text-[#8E8278] mt-0.5">
                    Bangalore, India
                  </p>
                </div>

                <div className="border-t border-[#262320] pt-3 flex items-center justify-between text-[11px] text-[#8E8278] font-mono">
                  <span>/images/prashanthi/hero.jpg</span>
                  <span className="text-[#722F37] font-semibold">ASSET_READY</span>
                </div>
              </div>
            )}

            {/* Editorial Crop Coordinates Tag */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0B0A09]/85 backdrop-blur-md border border-[#262320] font-mono text-[10px] text-[#C8BFB2] uppercase tracking-widest pointer-events-none">
              [ + ] 4:5 // PORTRAIT CROP
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 5: Bottom Status Line & Scroll Indicator */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 border-t border-[#262320] pt-4 text-xs font-mono text-[#8E8278] transition-all duration-700 ${
          phase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#722F37] animate-pulse" />
          <span className="uppercase tracking-widest text-[11px] text-[#C8BFB2]">
            STATUS: ACTIVE FOR BUYING, MERCHANDISING & RETAIL ROLES
          </span>
        </div>

        <a
          href="#work"
          className="inline-flex items-center gap-2 uppercase tracking-widest text-[11px] text-[#C8BFB2] hover:text-[#722F37] transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#722F37] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

