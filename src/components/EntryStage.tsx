import React, { useState, useEffect } from 'react';

interface EntryStageProps {
  onEnter: () => void;
}

export const EntryStage: React.FC<EntryStageProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Lock background scrolling while entry stage is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Trigger mounted entrance animations
    const timer = setTimeout(() => setIsMounted(true), 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
    };
  }, []);

  const handleEnterClick = () => {
    if (isExiting) return;
    setIsExiting(true);

    // Unlock scroll immediately upon activating ENTER
    document.body.style.overflow = '';

    // Wait for cinematic exit transition (900ms) before unmounting
    setTimeout(() => {
      onEnter();
      
      // If a specific hash was targeted (e.g. #project-sutra-edit), smoothly scroll to it
      if (window.location.hash) {
        try {
          const targetEl = document.querySelector(window.location.hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        } catch {
          // Ignore invalid hash selectors
        }
      }
    }, 900);
  };

  return (
    <aside
      id="entryStage"
      aria-label="Portfolio Introduction"
      className={`fixed inset-0 z-50 w-full h-full min-h-screen bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? 'opacity-0 scale-[1.02] -translate-y-2 pointer-events-none filter blur-sm'
          : 'opacity-100 scale-100 translate-y-0'
      }`}
    >
      {/* 1. Atmospheric Canvas Lighting Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 72% 48%, rgba(114, 47, 55, 0.24) 0%, rgba(20, 18, 17, 0.75) 55%, #0B0A09 100%),
            radial-gradient(circle at 18% 75%, rgba(200, 191, 178, 0.05) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* 2. Architectural Layout Grid */}
      <div className="absolute inset-0 editorial-grid-bg opacity-15 pointer-events-none z-0" aria-hidden="true" />

      {/* 3. Main Cover Frame Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-10 max-w-7xl mx-auto">
        
        {/* Top Subtle Editorial Masthead Header */}
        <header className="w-full flex items-center justify-between pb-4 border-b border-[#262320] text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="font-semibold tracking-[0.24em] text-[#C8BFB2] uppercase">
              PRASHANTHI.B
            </span>
            <span className="text-[#262320] hidden sm:inline">•</span>
            <span className="text-[#8E8278] tracking-widest uppercase hidden md:inline text-[11px]">
              FASHION × RETAIL × MERCHANDISING
            </span>
          </div>

          <div className="flex items-center gap-2 tracking-[0.2em] text-[#8E8278] text-[11px] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] animate-pulse" />
            <span className="text-[#C8BFB2]">PORTFOLIO / 2026</span>
          </div>
        </header>

        {/* Central Monumental Composition: Left Stacked Typography + Right Editorial Portrait */}
        <div className="my-auto py-6 sm:py-8 lg:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Stacked Typography & Strategy Descriptor */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-20">
            {/* Monumental Editorial Name Stack */}
            <div className="space-y-1 sm:space-y-2">
              <div className="overflow-hidden">
                <h1
                  className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] text-[#F4F0E8] font-normal leading-[0.84] tracking-tight transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isMounted ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  PRASHANTHI
                </h1>
              </div>

              <div className="overflow-hidden pl-6 sm:pl-12 lg:pl-20">
                <span
                  className={`block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] text-[#722F37] italic font-normal leading-[0.84] tracking-tight drop-shadow-[0_0_30px_rgba(114,47,55,0.35)] transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isMounted ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  .B
                </span>
              </div>
            </div>

            {/* Disciplines & Academic Credential Descriptor */}
            <div className="pt-3 sm:pt-5 border-t border-[#262320] space-y-2 max-w-xl">
              <div className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#C8BFB2]">
                BUYING & MERCHANDISING · BRAND STRATEGY · VISUAL MERCHANDISING
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#8E8278] font-light leading-relaxed">
                MBA Fashion &amp; Lifestyle Business Management · ICFAI BBA. Creative eye engineered with commercial architecture.
              </p>
            </div>
          </div>

          {/* Right Column: Oversized Cinematic Portrait Framing */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end z-10">
            <div
              className={`relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#262320] shadow-2xl transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Backing Depth Layer */}
              <div className="absolute inset-0 bg-[#141211]" />

              {/* Portrait Image */}
              <img
                src="/images/hero.jpg"
                alt="Prashanthi.B"
                className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.03] transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Soft Editorial Edge Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/90 via-[#0B0A09]/10 to-transparent pointer-events-none" />

              {/* Lower Portrait Metadata Stamp */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320]/80 flex items-center justify-between font-mono text-[10px] text-[#C8BFB2] tracking-wider uppercase pointer-events-none">
                <span>PRASHANTHI.B</span>
                <span className="text-[#722F37] font-bold">PORTFOLIO</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Action Footer: Location Descriptor + Typographic ENTER Element */}
        <footer className="w-full pt-4 border-t border-[#262320] flex items-center justify-between gap-4">
          <div className="font-mono text-[10px] sm:text-[11px] text-[#8E8278] tracking-[0.2em] uppercase">
            <span>BANGALORE, IN</span>
            <span className="text-[#262320] mx-2">•</span>
            <span className="text-[#C8BFB2]">PEARL ACADEMY</span>
          </div>

          {/* Typographic Interactive ENTER ↗ Element */}
          <div className="relative inline-flex">
            <button
              onClick={handleEnterClick}
              aria-label="Enter Prashanthi.B Portfolio"
              className="group relative inline-flex items-center gap-3 py-2 px-1 text-[#F4F0E8] transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.34em] uppercase text-[#F4F0E8] group-hover:text-[#722F37] transition-colors">
                ENTER
              </span>
              <span
                className="font-mono text-base sm:text-lg text-[#722F37] transition-all duration-300 group-hover:text-[#F4F0E8] group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                ↗
              </span>

              {/* Expanding Underline Sweep Line with Burgundy Glow */}
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#722F37] origin-left scale-x-[0.35] group-hover:scale-x-100 opacity-70 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:shadow-[0_0_14px_rgba(114,47,55,0.7)]"
                aria-hidden="true"
              />
            </button>
          </div>
        </footer>

      </div>
    </aside>
  );
};
