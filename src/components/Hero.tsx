import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  // Cinematic Intro Sequence Timer (2.2 seconds total)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Desktop Micro-interaction Parallax (5-10px subtle range)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return; // Desktop only
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 12; // max ~6px
      const y = ((e.clientY / innerHeight) - 0.5) * 12;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-28 sm:pt-36 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#0B0A09] text-[#F4F0E8] overflow-hidden"
    >
      {/* Top Eyebrow & Metadata */}
      <div
        className={`flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-6 transition-all duration-1000 ${
          isIntroComplete ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRASHANTHI B.</span>
          <span className="text-[#8E8278]">/</span>
          <span className="text-[#C8BFB2]">BANGALORE, INDIA</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11px] font-sans text-[#8E8278] uppercase tracking-widest font-mono">
          <span>MBA · PEARL ACADEMY</span>
          <span className="text-[#262320]">•</span>
          <span>2025 — 2027</span>
        </div>
      </div>

      {/* Hero Core Spread (Typography + Portrait Interaction) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 my-auto">
        {/* Left Column: Monumental Editorial Display (Cols 7) */}
        <div
          className="lg:col-span-7 space-y-6 lg:space-y-8 z-10 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`
          }}
        >
          {/* Opening Masked Large Headline */}
          <div className="overflow-hidden">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
              <span className="block transition-transform duration-1000 ease-out transform translate-y-0">
                PRASHANTHI
              </span>
              <span className="block transition-transform duration-1000 delay-150 ease-out font-serif text-[#F4F0E8]">
                B.
              </span>
              <span className="block font-serif italic text-[#722F37] font-normal text-4xl sm:text-5xl lg:text-[4.25rem] mt-2">
                Fashion & Lifestyle Business
              </span>
            </h1>
          </div>

          {/* Academic Credential Line */}
          <div className="space-y-1.5 pt-2 border-l-2 border-[#722F37] pl-4">
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#C8BFB2]">
              MBA Candidate — Fashion & Lifestyle Business Management
            </p>
            <p className="font-sans text-xs text-[#8E8278]">
              Pearl Academy Bangalore (2025–2027) • ICFAI University BBA (2020–2023)
            </p>
            <p className="font-sans text-xs text-[#8E8278] pt-1">
              {PERSONAL_DATA.disciplines}
            </p>
          </div>

          {/* Clean Human Intro */}
          <p className="text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans max-w-xl font-light">
            "Exploring the intersection of fashion, retail, consumers and brand strategy."
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider bg-[#722F37] text-[#F4F0E8] px-7 py-3.5 rounded-full hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-md"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider px-5 py-3.5 text-[#C8BFB2] hover:text-[#722F37] transition-colors group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8278] group-hover:text-[#722F37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Crop with Depth Micro-movement (Cols 5) */}
        <div
          className="lg:col-span-5 flex justify-center lg:justify-end z-0 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
          }}
        >
          <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-[#262320] bg-[#141211] shadow-2xl group">
            {/* Real Image */}
            {!imgError && (
              <img
                src={PERSONAL_DATA.images.hero}
                alt="Prashanthi B. — Fashion Business & Merchandising"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } group-hover:scale-[1.03]`}
              />
            )}

            {/* Editorial Portrait Placeholder Graphic if photo is pending */}
            {(imgError || !imgLoaded) && (
              <div
                className={`absolute inset-0 flex flex-col justify-between p-8 bg-[#141211] transition-opacity duration-300 ${
                  imgError ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between border-b border-[#262320] pb-3 text-xs font-sans">
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#722F37]">
                    Editorial Portrait Crop
                  </span>
                  <span className="text-[10px] text-[#8E8278] font-mono">4:5 Aspect</span>
                </div>

                {/* Center Monogram */}
                <div className="my-auto text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#0B0A09] border border-[#262320] flex items-center justify-center text-3xl font-serif text-[#722F37] mb-4 shadow-inner">
                    PB
                  </div>
                  <h3 className="font-serif text-3xl text-[#F4F0E8] font-normal">
                    PRASHANTHI B.
                  </h3>
                  <p className="text-xs font-sans text-[#722F37] mt-1 font-semibold uppercase tracking-wider">
                    Fashion & Lifestyle Business
                  </p>
                  <p className="text-[11px] font-sans text-[#8E8278] mt-0.5">
                    Bangalore, India
                  </p>
                </div>

                {/* Bottom Detail */}
                <div className="border-t border-[#262320] pt-3 flex items-center justify-between text-[11px] text-[#8E8278]">
                  <span className="font-mono">/images/prashanthi/hero.jpg</span>
                  <span className="text-[#722F37] font-semibold">Ready for Upload</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex items-center justify-between border-t border-[#262320] pt-6 text-xs text-[#8E8278] font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#722F37] animate-pulse" />
          <span className="uppercase tracking-widest text-[10px] font-mono">Available For Strategic Roles</span>
        </div>

        <a
          href="#work"
          className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[10px] font-mono text-[#C8BFB2] hover:text-[#722F37] transition-colors"
        >
          <span>Scroll to Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
