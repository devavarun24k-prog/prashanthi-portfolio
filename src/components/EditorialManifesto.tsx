import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const EditorialManifesto: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh && rect.bottom > 0) {
        const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] overflow-hidden select-none"
    >
      {/* Subtle Layout Grid */}
      <div
        className="absolute inset-0 editorial-grid-bg pointer-events-none transition-opacity duration-1000"
        style={{ opacity: inView ? 0.25 : 0 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Section Label */}
        <div
          className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#722F37] transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
          <span>STRATEGIC PHILOSOPHY</span>
        </div>

        {/* Monumental Staggered Typography Sequence (Open space, no card) */}
        <div className="space-y-3 sm:space-y-4">
          <div className="overflow-hidden">
            <h2
              className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal text-[#F4F0E8] tracking-tight leading-[1.04] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
              }`}
              style={{
                transform: inView ? `translate3d(${(scrollProgress - 0.5) * -12}px, 0, 0)` : undefined,
              }}
            >
              FASHION IS NOT JUST
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className={`font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal text-[#722F37] tracking-tight leading-[1.04] transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
              }`}
              style={{
                transform: inView ? `translate3d(${(scrollProgress - 0.5) * 14}px, 0, 0)` : undefined,
              }}
            >
              CREATIVE EXPRESSION.
            </h2>
          </div>

          <div className="overflow-hidden pt-2">
            <h2
              className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal text-[#C8BFB2] tracking-tight leading-[1.04] transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? 'mask-vertical-reveal' : 'mask-vertical-hidden'
              }`}
              style={{
                transform: inView ? `translate3d(${(scrollProgress - 0.5) * -10}px, 0, 0)` : undefined,
              }}
            >
              IT IS RIGOROUS COMMERCIAL ARCHITECTURE.
            </h2>
          </div>
        </div>

        {/* The Convergence: Open Statement */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#262320] transition-all duration-1000 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="md:col-span-4 space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#722F37] font-semibold block">
              THE CONVERGENCE
            </span>
            <p className="font-serif italic text-lg text-[#F4F0E8]">
              Where visual merchandising rigor meets data-backed assortment strategy.
            </p>
          </div>

          <div className="md:col-span-8 text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            <p>
              Bridging the gap between creative visual presentation and commercial retail mechanics. Balancing assortment architecture, inventory efficiency, visual compliance, and consumer empathy to build scalable fashion brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
