import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [phase, setPhase] = useState<number>(0);
  const [framingProgress, setFramingProgress] = useState<number>(15);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isTouch, setIsTouch] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const heroRef = useRef<HTMLElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const [lerpPos, setLerpPos] = useState({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // Check touch and reduced motion capabilities
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Sequential Editorial Entrance Sequence (Camera framing -> Print reveal)
  useEffect(() => {
    if (reducedMotion) {
      setPhase(3);
      setFramingProgress(85);
      return;
    }

    // Step 1: Photograph appears
    const t0 = setTimeout(() => setPhase(1), 80);

    // Step 2: Camera framing crop line travels from 15% to 85%
    const startTime = Date.now();
    const duration = 1400;

    let framingTimer: number;
    const animateFraming = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic easing for camera reframing
      const eased = 1 - Math.pow(1 - progress, 3);
      setFramingProgress(15 + eased * 70);

      if (progress < 1) {
        framingTimer = window.requestAnimationFrame(animateFraming);
      } else {
        // Step 3: Camera settled -> unmask printed typography
        setPhase(2);
        setTimeout(() => setPhase(3), 800);
      }
    };

    const framingStartTimer = setTimeout(() => {
      framingTimer = window.requestAnimationFrame(animateFraming);
    }, 250);

    return () => {
      clearTimeout(t0);
      clearTimeout(framingStartTimer);
      if (framingTimer) window.cancelAnimationFrame(framingTimer);
    };
  }, [reducedMotion]);

  // Mouse Movement Lerp for Subtle Image Crop Reframing (Desktop only)
  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const normalizedY = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      // Max 22px X / 16px Y movement
      targetPos.current = {
        x: normalizedX * 22,
        y: normalizedY * 16,
      };
    };

    const updateLerp = () => {
      const ease = 0.075;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      setLerpPos({
        x: Math.round(currentPos.current.x * 100) / 100,
        y: Math.round(currentPos.current.y * 100) / 100,
      });

      rafId.current = requestAnimationFrame(updateLerp);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(updateLerp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isTouch, reducedMotion]);

  // Scroll Reframing Tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (vh * 0.95), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-[100svh] h-[100svh] bg-[#0B0A09] text-[#F4F0E8] select-none overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-6 sm:px-8 lg:px-12 border-b border-[#262320]"
    >
      {/* 01. FULL-BLEED PHOTOGRAPH (PHYSICAL REFRAMING FROM COVER TO SPREAD) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: reducedMotion
            ? 'none'
            : `scale(${1 - scrollProgress * 0.08}) translate3d(0, ${scrollProgress * -35}px, 0)`,
          borderRadius: scrollProgress > 0.1 ? `${Math.min(scrollProgress * 24, 16)}px` : '0px',
        }}
      >
        {/* Inner Lerped Crop Container */}
        <div
          className="w-full h-full relative transition-transform duration-300 ease-out"
          style={{
            transform: reducedMotion
              ? 'none'
              : `scale(1.08) translate3d(${lerpPos.x}px, ${lerpPos.y + scrollProgress * 20}px, 0)`,
          }}
        >
          <img
            src={PERSONAL_DATA.images.hero}
            alt="PRASHANTHI.B — Fashion Campaign Editorial"
            className="w-full h-full object-cover object-top filter brightness-[0.88] contrast-[1.04]"
          />

          {/* Editorial Gradient & Shadow Overlays for Crisp Typographic Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/40 to-[#0B0A09]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/80 via-transparent to-[#0B0A09]/60" />
        </div>

        {/* 02. CAMERA-FRAME CROPPING LINE (Reframing sweep across 15% -> 85%) */}
        {!reducedMotion && phase < 3 && (
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none transition-opacity duration-700"
            style={{
              left: `${framingProgress}%`,
              opacity: phase >= 1 ? 0.75 : 0,
            }}
          >
            {/* Ultra-subtle hairline framing guide */}
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#F4F0E8]/70 to-transparent" />
            <div className="absolute top-24 -left-2 text-[9px] font-mono tracking-widest text-[#722F37] uppercase -rotate-90 select-none">
              REFRAME // 35MM
            </div>
          </div>
        )}
      </div>

      {/* 03. TOP FILM-FRAME METADATA BAR */}
      <div className="relative z-30 w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262320]/80 text-xs font-mono">
          <div
            className={`flex items-center gap-2.5 transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="text-[#722F37] font-semibold text-xs tracking-widest">
              {scrollProgress > 0.6 ? 'FRAME 02' : 'FRAME 01'}
            </span>
            <span className="text-[#262320]">/</span>
            <span className="font-sans font-semibold text-[13px] sm:text-[14px] tracking-[0.14em] text-[#F4F0E8] uppercase">
              PRASHANTHI.B
            </span>
          </div>

          <div
            className={`flex items-center gap-3 text-[11px] sm:text-xs text-[#8E8278] tracking-wider uppercase transition-all duration-700 delay-100 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <span className="text-[#C8BFB2]">BANGALORE / INDIA</span>
            <span className="text-[#262320]">•</span>
            <span>2025 — 2027</span>
          </div>
        </div>
      </div>

      {/* 04. HERO MONUMENTAL NAME & PRINTED TYPOGRAPHIC MASK */}
      <div
        className="relative z-30 w-full max-w-7xl mx-auto my-auto py-6 sm:py-10 transition-transform duration-700 ease-out"
        style={{
          transform: reducedMotion
            ? 'none'
            : `translate3d(0, ${scrollProgress * -50}px, 0)`,
        }}
      >
        <div className="space-y-4 sm:space-y-6">
          {/* Main Monumental Name "PRASHANTHI.B" Printed Reveal */}
          <div
            className="overflow-hidden"
            style={{
              clipPath: phase >= 2 || reducedMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
              transition: 'clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[11.5rem] 2xl:text-[13rem] font-normal text-[#F4F0E8] tracking-[-0.045em] leading-[0.84] uppercase drop-shadow-2xl">
              PRASHANTHI<span className="text-[#722F37]">.</span>B
            </h1>
          </div>

          {/* Supporting Discipline Subheadline */}
          <div
            className="overflow-hidden pt-1"
            style={{
              clipPath: phase >= 2 || reducedMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
              transition: 'clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#C8BFB2] font-normal tracking-tight leading-snug max-w-4xl">
              Buying & Merchandising <span className="text-[#722F37]">×</span> Brand Strategy <span className="text-[#722F37]">×</span> Visual Merchandising
            </p>
          </div>
        </div>
      </div>

      {/* 05. BOTTOM EDITORIAL CAPTIONS & RESTRAINED TRANSITION CUES */}
      <div className="relative z-30 w-full max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 border-t border-[#262320]/80 items-end transition-all duration-1000 ${
            phase >= 3 || reducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Left: Academic & Positioning Statement */}
          <div className="md:col-span-6 space-y-1.5 font-sans">
            <p className="text-xs sm:text-[13px] font-mono text-[#8E8278] uppercase tracking-wider">
              MBA — FASHION & LIFESTYLE BUSINESS MANAGEMENT
            </p>
            <p className="text-sm sm:text-[15px] lg:text-base text-[#C8BFB2] font-light leading-relaxed max-w-lg">
              “{PERSONAL_DATA.intro}”
            </p>
          </div>

          {/* Middle: Minimalist Text CTA */}
          <div className="md:col-span-3 flex items-center gap-6">
            <button
              onClick={() => handleNavClick('#work')}
              className="group text-xs sm:text-[13px] font-sans font-semibold tracking-wider text-[#F4F0E8] uppercase relative py-1 focus:outline-none"
            >
              <span>VIEW SELECTED WORK</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#722F37] group-hover:bg-[#F4F0E8] transition-colors duration-300" />
            </button>

            <button
              onClick={() => handleNavClick('#about')}
              className="text-xs sm:text-[13px] font-sans text-[#8E8278] hover:text-[#C8BFB2] tracking-wider uppercase transition-colors"
            >
              ABOUT
            </button>
          </div>

          {/* Right: Editorial Transition Cue (Zero Floating Arrows) */}
          <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-3 font-mono text-xs">
            <span className="text-[#8E8278] tracking-widest uppercase">SELECTED WORK</span>
            <span className="text-[#722F37] font-bold text-sm tracking-wider">01</span>
          </div>
        </div>
      </div>
    </section>
  );
};
