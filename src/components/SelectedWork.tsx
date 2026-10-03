import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Layers, ChevronRight, Eye } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { BearHouseWorld } from './brand-worlds/BearHouseWorld';
import { HealingWaitWorld } from './brand-worlds/HealingWaitWorld';
import { HouseOfMasabaWorld } from './brand-worlds/HouseOfMasabaWorld';
import { ThreeAmWorld } from './brand-worlds/ThreeAmWorld';
import { SutraEditWorld } from './brand-worlds/SutraEditWorld';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSpread, setActiveSpread] = useState<number>(0);
  const spreadRefs = useRef<(HTMLElement | null)[]>([]);

  // Desktop Pointer Parallax inside project spread (4-8px subtle range)
  const handleSpreadMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setMousePos({ x, y });
  };

  // Scroll observer to activate active spread coordinate
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-spread-index'));
            if (!isNaN(index)) {
              setActiveSpread(index);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: '-10% 0px -10% 0px' }
    );

    spreadRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to render the dedicated Brand World component
  const renderBrandWorld = (projectId: string) => {
    switch (projectId) {
      case 'bear-house':
        return <BearHouseWorld />;
      case 'healing-the-wait':
        return <HealingWaitWorld />;
      case 'house-of-masaba':
        return <HouseOfMasabaWorld />;
      case '3am-india':
        return <ThreeAmWorld />;
      case 'sutra-edit':
        return <SutraEditWorld />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] relative select-none">
      {/* Editorial Section Header Spread */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320]">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <Sparkles className="w-4 h-4 text-[#722F37]" />
            <span>INTERACTIVE BRAND WORLDS // 05 CAMPAIGNS</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
            SELECTED
            <span className="block font-serif italic text-[#C8BFB2] font-normal">WORK</span>
          </h2>
        </div>

        {/* Technical Coordinate Tracker & Exact Section Intro */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 font-mono text-xs text-[#8E8278]">
          <div className="flex items-center gap-3">
            <span className="text-[#722F37] font-bold">SPREAD 0{activeSpread + 1} / 05</span>
            <span className="text-[#262320]">|</span>
            <span className="text-[#C8BFB2] uppercase tracking-wider">{PROJECTS_DATA[activeSpread]?.title}</span>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#8E8278] leading-relaxed font-sans text-left lg:text-right font-light">
            A selection of work at the intersection of creativity, consumers and commerce — exploring retail, visual merchandising, brand thinking and the strategies that connect them.
          </p>
        </div>
      </div>

      {/* Sticky Editorial Spread Index Navigator */}
      <div className="sticky top-20 z-20 hidden md:flex items-center justify-between py-4 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320] mb-12 font-mono text-[11px]">
        <div className="flex items-center gap-1 sm:gap-2">
          {PROJECTS_DATA.map((p, idx) => {
            const isActive = activeSpread === idx;
            return (
              <a
                key={p.id}
                href={`#project-${p.id}`}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#722F37] text-[#F4F0E8] font-bold shadow-md border-[#722F37]'
                    : 'bg-[#141211] text-[#8E8278] hover:text-[#F4F0E8] border-[#262320]'
                } border`}
              >
                <span>{p.number}</span>
                <span className="hidden lg:inline">{p.title}</span>
              </a>
            );
          })}
        </div>

        <div className="text-[#8E8278] uppercase tracking-widest flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#722F37]" />
          <span>FASHION-BUSINESS BRAND WORLDS</span>
        </div>
      </div>

      {/* 5 Sequential Editorial Page Spreads with Brand Worlds */}
      <div className="space-y-32 sm:space-y-44 pt-8">
        {PROJECTS_DATA.map((project, idx) => {
          const isHovered = activeHoverIndex === idx;
          const isEven = idx % 2 === 1;

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              data-spread-index={idx}
              ref={(el) => {
                spreadRefs.current[idx] = el;
              }}
              onMouseEnter={() => setActiveHoverIndex(idx)}
              onMouseLeave={() => setActiveHoverIndex(null)}
              onMouseMove={handleSpreadMouseMove}
              className="group relative transition-all duration-700"
            >
              {/* Top Technical Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 mb-8 font-mono text-xs text-[#8E8278]">
                <div className="flex items-center gap-3">
                  <span className="text-[#722F37] font-bold text-sm">INDEX: 0{idx + 1} // 05</span>
                  <span className="text-[#262320]">|</span>
                  <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-[#8E8278]">{project.type}</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#722F37] hover:text-[#F4F0E8] font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>ENTER FULL CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Dynamic Editorial Spread Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#141211] p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#262320] group-hover:border-[#722F37] transition-all duration-500 shadow-2xl relative overflow-hidden">
                {/* Background Watermark Number */}
                <div className="absolute right-4 bottom-2 text-8xl lg:text-9xl font-serif text-[#0B0A09] select-none pointer-events-none opacity-40 font-normal">
                  {project.number}
                </div>

                {/* Left/Top Column: Narrative & Interactive Brand World */}
                <div
                  className={`lg:col-span-7 space-y-6 z-10 transition-transform duration-300 ease-out ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  style={{
                    transform: isHovered
                      ? `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)`
                      : 'translate3d(0, 0, 0)',
                  }}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
                      SYSTEM SPECIFICATION // {project.category}
                    </span>
                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E8] font-normal leading-[0.95] tracking-tight group-hover:text-[#F4F0E8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-serif text-2xl sm:text-3xl text-[#C8BFB2] italic pt-1">
                      "{project.subtitle}"
                    </p>
                  </div>

                  {/* Short Narrative Description */}
                  <p className="text-sm sm:text-base text-[#8E8278] font-sans font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* DEDICATED BESPOKE BRAND WORLD ANIMATED CANVAS */}
                  <div className="pt-2">
                    {renderBrandWorld(project.id)}
                  </div>

                  {/* Action Link to Full Case Study */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] hover:text-[#F4F0E8] transition-colors group/btn"
                    >
                      <Eye className="w-4 h-4 text-[#722F37]" />
                      <span>EXPLORE DEEP CASE STUDY</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Animated Burgundy Hover Line */}
                    <div className="w-28 h-[1px] bg-[#262320] relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#722F37] transition-all duration-500 ease-out"
                        style={{
                          width: isHovered ? '100%' : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right/Bottom Column: Editorial Photography Card with Crop Markings */}
                <div
                  className={`lg:col-span-5 z-10 transition-transform duration-300 ease-out space-y-4 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  style={{
                    transform: isHovered
                      ? `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`
                      : 'translate3d(0, 0, 0)',
                  }}
                >
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative overflow-hidden rounded-3xl border border-[#262320] group-hover:border-[#722F37]/80 shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <ProjectImage
                      src={project.imagePath}
                      alt={project.title}
                      title={project.title}
                      category={project.category}
                      subtitle={project.subtitle}
                      accentBg={project.accentBg}
                      accentColor={project.accentColor}
                      aspectRatio="aspect-[4/3]"
                      className="rounded-3xl"
                    />

                    {/* Editorial Crop Coordinates Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0B0A09]/85 backdrop-blur-md border border-[#262320] font-mono text-[10px] text-[#C8BFB2] uppercase tracking-widest pointer-events-none">
                      [ + ] REF. {project.number} // {project.category.split('/')[0]}
                    </div>
                  </div>

                  {/* Highlights Snapshot Ribbon */}
                  <div className="p-4 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#722F37] font-bold block">
                      CORE DELIVERABLES & SPECS:
                    </span>
                    <div className="space-y-1.5">
                      {project.outputs.slice(0, 3).map((out, oIdx) => (
                        <div key={oIdx} className="text-xs text-[#C8BFB2] font-sans flex items-start gap-2">
                          <span className="text-[#722F37] font-mono text-[10px] shrink-0 mt-0.5">•</span>
                          <span className="line-clamp-1">{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
