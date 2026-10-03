import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronRight, Eye, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  // Exactly 5 Curated Case Studies (3AM India excluded from Selected Work)
  const featuredProjects = PROJECTS_DATA.filter((p) => p.id !== '3am-india');

  // Track mouse coordinates within section for floating desktop preview
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleMetrics(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Distinct reveal classes per project index
  const getRevealClass = (idx: number) => {
    switch (idx) {
      case 0:
        return 'reveal-curtain-v';
      case 1:
        return 'reveal-curtain-h';
      case 2:
        return 'reveal-split';
      case 3:
        return 'reveal-diagonal';
      default:
        return 'photo-develop-reveal';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      onMouseMove={handleMouseMove}
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] relative select-none"
    >
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-30 pointer-events-none" />

      {/* Floating Editorial Preview Card on Desktop Pointer Hover (Not a cursor replacement) */}
      {activeHoverIndex !== null && featuredProjects[activeHoverIndex] && (
        <div
          className="fixed z-50 pointer-events-none hidden lg:block floating-preview-card transition-transform duration-100 ease-out"
          style={{
            left: `${mousePos.x + 30}px`,
            top: `${mousePos.y - 120}px`,
            position: 'absolute',
            opacity: activeHoverIndex !== null ? 1 : 0,
            transform: `scale(${activeHoverIndex !== null ? 1 : 0.95})`,
          }}
        >
          <div className="w-56 p-2 rounded-2xl bg-[#141211]/95 backdrop-blur-xl border border-[#722F37] shadow-2xl space-y-2">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#0B0A09]">
              <ProjectImage
                src={featuredProjects[activeHoverIndex].imagePath}
                alt={featuredProjects[activeHoverIndex].title}
                title={featuredProjects[activeHoverIndex].title}
                category={featuredProjects[activeHoverIndex].category}
                subtitle={featuredProjects[activeHoverIndex].subtitle}
                accentBg={featuredProjects[activeHoverIndex].accentBg}
                accentColor={featuredProjects[activeHoverIndex].accentColor}
                aspectRatio="aspect-[4/3]"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1 font-mono text-[10px] text-[#C8BFB2] flex items-center justify-between">
              <span className="text-[#722F37] font-bold">0{activeHoverIndex + 1}</span>
              <span className="truncate max-w-[140px] uppercase font-medium">
                {featuredProjects[activeHoverIndex].category.split('/')[0]}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Section Header with Line Drawing */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320] relative z-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <Sparkles className="w-4 h-4 text-[#722F37]" />
            <span>CURATED PORTFOLIO // SELECTED WORK</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
            SELECTED
            <span className="block font-serif italic text-[#C8BFB2] font-normal">WORK</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#8E8278]">
          <span className="text-[#722F37] font-bold">05 CURATED PROJECTS</span>
          <span className="text-[#262320]">•</span>
          <span>RETAIL × MERCHANDISING × STRATEGY</span>
        </div>
      </div>

      {/* 5 Curated Editorial Project Spreads */}
      <div className="space-y-24 sm:space-y-36 pt-12 relative z-10">
        {featuredProjects.map((project, idx) => {
          const isHovered = activeHoverIndex === idx;
          const isEven = idx % 2 === 1;

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              onMouseEnter={() => setActiveHoverIndex(idx)}
              onMouseLeave={() => setActiveHoverIndex(null)}
              className="group relative transition-all duration-700"
            >
              {/* Top Project Metadata Bar with Line Draw */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 mb-8 font-mono text-xs text-[#8E8278] transition-colors group-hover:border-[#722F37]/50">
                <div className="flex items-center gap-3">
                  <span className="text-[#722F37] font-bold text-sm transition-transform group-hover:scale-110">
                    0{idx + 1}
                  </span>
                  <span className="text-[#262320]">/</span>
                  <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="text-[11px] text-[#8E8278]">
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Editorial Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#141211] p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#262320] group-hover:border-[#722F37] group-hover:bg-[#161413] transition-all duration-700 shadow-2xl relative overflow-hidden">
                {/* Background Number responding to hover */}
                <div
                  className="absolute right-4 bottom-2 text-8xl lg:text-9xl font-serif text-[#0B0A09] select-none pointer-events-none opacity-40 font-normal transition-transform duration-700 ease-out"
                  style={{
                    transform: isHovered ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Left/Right Column: Narrative & Deliverables */}
                <div
                  className={`lg:col-span-7 space-y-6 z-10 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E8] font-normal leading-[0.95] tracking-tight group-hover:translate-x-1.5 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="font-serif text-2xl sm:text-3xl text-[#C8BFB2] italic pt-1">
                      "{project.subtitle}"
                    </p>
                  </div>

                  {/* Short Narrative Description */}
                  <p className="text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Verified Project Deliverables */}
                  <div className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#722F37] font-bold block">
                      KEY DELIVERABLES & STRATEGY:
                    </span>
                    <div className="space-y-2">
                      {project.outputs.map((out, oIdx) => (
                        <div key={oIdx} className="text-xs text-[#C8BFB2] font-sans flex items-start gap-2.5">
                          <span className="text-[#722F37] font-mono text-[10px] shrink-0 mt-0.5">•</span>
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link to Case Study */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] hover:text-[#F4F0E8] transition-colors group/btn"
                    >
                      <Eye className="w-4 h-4 text-[#722F37]" />
                      <span>EXPLORE PROJECT</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

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

                {/* Right/Left Column: Photography / Editorial Visual */}
                <div
                  className={`lg:col-span-5 z-10 space-y-4 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => onSelectProject(project)}
                    className={`relative overflow-hidden rounded-3xl border border-[#262320] group-hover:border-[#722F37]/80 shadow-2xl transition-all duration-700 cursor-pointer ${getRevealClass(
                      idx
                    )}`}
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
                      className="rounded-3xl hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />

                    {/* Editorial Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0B0A09]/85 backdrop-blur-md border border-[#262320] font-mono text-[10px] text-[#C8BFB2] uppercase tracking-widest pointer-events-none">
                      0{idx + 1} // {project.category.split('/')[0].trim()}
                    </div>
                  </div>

                  {/* Strategic Key Fact Badges with Count-up/Entrance */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.keyFacts.slice(0, 2).map((fact, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-[#0B0A09] border border-[#262320] text-left transition-all duration-500 hover:border-[#722F37]/50"
                      >
                        <div className="text-[9px] font-mono text-[#8E8278] uppercase">{fact.label}</div>
                        <div
                          className={`text-xs font-mono font-bold text-[#F4F0E8] mt-0.5 transition-all duration-700 ${
                            visibleMetrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                          }`}
                        >
                          {fact.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ONE HIGHLY POLISHED HORIZONTAL STORYTELLING MOMENT (Project Sequence Spread) */}
      <div className="pt-24 mt-24 border-t border-[#262320] relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#722F37] font-bold block">
              EDITORIAL SPREAD // ARCHIVE VIEW
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal pt-1">
              Curated Project Sequence
            </h3>
          </div>
          <div className="font-mono text-xs text-[#8E8278] flex items-center gap-2">
            <span>SCROLL HORIZONTALLY</span>
            <span>→</span>
          </div>
        </div>

        {/* Horizontal Smooth Scroll Container */}
        <div
          ref={horizontalScrollRef}
          className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
        >
          {featuredProjects.map((p, pIdx) => (
            <div
              key={p.id}
              onClick={() => onSelectProject(p)}
              className="w-72 sm:w-80 shrink-0 p-5 rounded-3xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 cursor-pointer snap-start group space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-[#8E8278]">
                <span className="text-[#722F37] font-bold">0{pIdx + 1}</span>
                <span className="uppercase">{p.type}</span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#0B0A09] border border-[#262320]">
                <ProjectImage
                  src={p.imagePath}
                  alt={p.title}
                  title={p.title}
                  category={p.category}
                  subtitle={p.subtitle}
                  accentBg={p.accentBg}
                  accentColor={p.accentColor}
                  aspectRatio="aspect-[16/10]"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div>
                <h4 className="font-serif text-xl text-[#F4F0E8] group-hover:text-[#F4F0E8] transition-colors">
                  {p.title}
                </h4>
                <p className="text-xs text-[#8E8278] font-mono truncate mt-0.5">{p.category}</p>
              </div>

              <div className="pt-2 border-t border-[#262320] flex items-center justify-between text-xs font-mono text-[#722F37]">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

