import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Cinematic 5-stage opening choreography (2.4s total, never blocks interaction)
  const [stage, setStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Sequenced opening beats
    const t1 = setTimeout(() => setStage(1), 100);   // Screen 1: Name + Line draw
    const t2 = setTimeout(() => setStage(2), 600);   // Screen 2: Frame expand + Typography mask
    const t3 = setTimeout(() => setStage(3), 1100);  // Screen 3: Portrait photographic development
    const t4 = setTimeout(() => setStage(4), 1700);  // Screen 4: Composition settlement
    const t5 = setTimeout(() => setStage(5), 2300);  // Screen 5: Metadata + Scroll cue

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  // Scroll-linked live transformation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (vh * 0.8), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop subtle pointer parallax (5-8px)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 14;
      const y = ((e.clientY / innerHeight) - 0.5) * 14;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none"
    >
      {/* Background Micro Grid Coordinate Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Screen 1 / Top System Bar & Coordinates */}
      <div className="relative z-20 space-y-4">
        <div
          className={`flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 transition-all duration-700 ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 text-xs font-mono font-medium uppercase tracking-wider text-[#722F37]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#722F37]" />
            <span className="text-[#F4F0E8] font-bold tracking-widest">PRASHANTHI B.</span>
            <span className="text-[#262320]">|</span>
            <span className="text-[#8E8278] text-[11px]">SYS.01 // PORTFOLIO</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-[#8E8278] uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
              BLR · 12.9716° N, 77.5946° E
            </span>
            <span className="text-[#262320]">/</span>
            <span>PEARL ACADEMY MBA · 2025–2027</span>
          </div>
        </div>

        {/* Dynamic Expanding Burgundy Rule Line (Screen 1 → 2) */}
        <div className="relative w-full h-[1px] bg-[#262320] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-[#722F37] transition-all duration-1000 ease-out"
            style={{
              width: stage >= 1 ? '100%' : '0%',
              opacity: stage >= 1 ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* Hero Central Spread (Typography + Developed Portrait) */}
      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-6 my-auto"
        style={{
          opacity: 1 - scrollProgress * 0.7,
        }}
      >
        {/* Left Column: Masked Monumental Typography (Cols 7) */}
        <div
          className="lg:col-span-7 space-y-6 lg:space-y-8 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6 + scrollProgress * -30}px, 0)`,
          }}
        >
          {/* Section Index Marker */}
          <div
            className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#722F37] transition-all duration-700 delay-200 ${
              stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#722F37]" />
            <span>01 // FASHION SYSTEM & STRATEGY</span>
          </div>

          {/* Masked Large Headline (Screen 2 Reveal) */}
          <div className="overflow-hidden">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
              <div className="overflow-hidden">
                <span
                  className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  PRASHANTHI
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  className={`block transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  B.
                </span>
              </div>
              <div className="overflow-hidden pt-1">
                <span
                  className={`block font-serif italic text-[#722F37] font-normal text-3xl sm:text-4xl lg:text-5xl transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  Fashion & Lifestyle Business
                </span>
              </div>
            </h1>
          </div>

          {/* Academic Credential & Technical Spec Line (Screen 4 Reveal) */}
          <div
            className={`space-y-2 border-l-2 border-[#722F37] pl-4 transition-all duration-700 delay-300 ${
              stage >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[#C8BFB2]">
              MBA CANDIDATE — FASHION & LIFESTYLE BUSINESS MANAGEMENT
            </div>
            <div className="text-xs text-[#8E8278] font-sans">
              Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)
            </div>
            <div className="text-xs font-mono text-[#722F37] pt-0.5">
              [BUYING] · [MERCHANDISING] · [VISUAL VM] · [RETAIL STRATEGY]
            </div>
          </div>

          {/* Intro Narrative Statement */}
          <p
            className={`text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans max-w-xl font-light transition-all duration-700 delay-400 ${
              stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            "{PERSONAL_DATA.intro}"
          </p>

          {/* Action Navigation */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-500 ${
              stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider bg-[#722F37] text-[#F4F0E8] px-7 py-3.5 rounded-full hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-xl group border border-[#722F37]"
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

        {/* Right Column: Screen 3 Film Scan / Developed Portrait Crop (Cols 5) */}
        <div
          className="lg:col-span-5 flex justify-center lg:justify-end z-0 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y + scrollProgress * -15}px, 0)`,
          }}
        >
          <div
            className={`relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-[#262320] bg-[#141211] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              stage >= 3
                ? 'opacity-100 scale-100 [clip-path:inset(0%_0%_0%_0%_round_1rem)]'
                : 'opacity-0 scale-95 [clip-path:inset(15%_15%_15%_15%_round_1rem)]'
            }`}
            style={{
              transform: `scale(${1 - scrollProgress * 0.06})`,
            }}
          >
            {/* Real Photographic Portrait Asset */}
            {!imgError && (
              <img
                src={PERSONAL_DATA.images.hero}
                alt="Prashanthi B. — Fashion Business & Merchandising"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imgLoaded ? 'opacity-100 filter-none' : 'opacity-0 brightness-150 contrast-125'
                } hover:scale-[1.04]`}
              />
            )}

            {/* Editorial Placeholder Cover */}
            {(imgError || !imgLoaded) && (
              <div
                className={`absolute inset-0 flex flex-col justify-between p-8 bg-[#141211] transition-opacity duration-500 ${
                  imgError ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Frame Header Coordinate */}
                <div className="flex items-center justify-between border-b border-[#262320] pb-3 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#722F37] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#722F37] animate-ping" />
                    DEVELOPED PORTRAIT
                  </span>
                  <span className="text-[10px] text-[#8E8278]">4:5 // REF.PB_01</span>
                </div>

                {/* Central Monogram Frame */}
                <div className="my-auto text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#0B0A09] border border-[#262320] flex items-center justify-center text-3xl font-serif text-[#722F37] mb-4 shadow-inner">
                    PB
                  </div>
                  <h3 className="font-serif text-3xl text-[#F4F0E8] font-normal">
                    PRASHANTHI B.
                  </h3>
                  <p className="text-xs font-mono text-[#722F37] mt-1 uppercase tracking-widest">
                    Fashion & Retail Business
                  </p>
                  <p className="text-[11px] font-mono text-[#8E8278] mt-0.5">
                    Bangalore, India
                  </p>
                </div>

                {/* Frame Footer Spec */}
                <div className="border-t border-[#262320] pt-3 flex items-center justify-between text-[11px] text-[#8E8278] font-mono">
                  <span>/images/prashanthi/hero.jpg</span>
                  <span className="text-[#722F37] font-semibold">ASSET_READY</span>
                </div>
              </div>
            )}

            {/* Subtle Film Scan Overlay Line */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#722F37]/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Screen 5 / Bottom Status & Scroll Cue */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 border-t border-[#262320] pt-4 text-xs font-mono text-[#8E8278] transition-all duration-700 delay-500 ${
          stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#722F37] animate-pulse" />
          <span className="uppercase tracking-widest text-[11px] text-[#C8BFB2]">
            STATUS: ACTIVE FOR STRATEGIC RETAIL & BUYING ROLES
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
