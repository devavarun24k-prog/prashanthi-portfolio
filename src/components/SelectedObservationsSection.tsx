import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { OBSERVATIONS_DATA } from '../data/portfolioData';

export const SelectedObservationsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="observations" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#282828] bg-[#151515] text-[#FAF9F6]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#282828]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#B7B1A8] uppercase font-semibold">
            <span className="font-bold text-[#FAF9F6] bg-[#1C1C1C] px-2 py-0.5 border border-[#282828]">
              06 / 10
            </span>
            <Compass className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>HORIZONTAL EDITORIAL DISPATCH</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF9F6] tracking-tight">
            Selected Observations
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll observations left"
            className="p-3 border border-[#282828] bg-[#1C1C1C] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#151515] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll observations right"
            className="p-3 border border-[#282828] bg-[#1C1C1C] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#151515] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Storytelling Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto py-12 hide-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {OBSERVATIONS_DATA.map((obs) => (
          <div
            key={obs.id}
            className="snap-start shrink-0 w-[320px] sm:w-[380px] p-8 bg-[#1C1C1C] border border-[#282828] flex flex-col justify-between hover:border-[#77736D] transition-all space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#77736D] border-b border-[#282828] pb-3">
                <span className="text-[#FAF9F6] font-semibold">OBS {obs.number}</span>
                <span className="uppercase tracking-widest">{obs.category}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF9F6] font-normal leading-snug">
                {obs.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#B7B1A8] leading-relaxed font-sans font-light">
                {obs.takeaway}
              </p>
            </div>

            <div className="pt-4 border-t border-[#282828] text-[10px] font-mono text-[#77736D] flex justify-between items-center">
              <span>{obs.readNote}</span>
              <span className="text-[#5A2427]">●</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#77736D] border-t border-[#282828]">
        <span>Drag or use horizontal controls to read observations</span>
        <span>5 Dispatches</span>
      </div>
    </section>
  );
};
