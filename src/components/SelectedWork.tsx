import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Exactly 5 Curated Case Studies (3AM India excluded from Selected Work)
  const featuredProjects = PROJECTS_DATA.filter((p) => p.id !== '3am-india');

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

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] relative select-none"
    >
      {/* Subtle Layout Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320] relative z-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span>SELECTED WORK</span>
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

      {/* 5 Curated Large Editorial Spreads (Open, No Nested Cards) */}
      <div className="space-y-32 sm:space-y-44 pt-16 relative z-10">
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
              {/* Top Project Identification Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 mb-10 font-mono text-xs text-[#8E8278] transition-colors group-hover:border-[#722F37]/50">
                <div className="flex items-center gap-3">
                  <span className="text-[#722F37] font-bold text-sm">0{idx + 1}</span>
                  <span className="text-[#262320]">/</span>
                  <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="text-[11px] text-[#8E8278]">
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Large Editorial Magazine Spread Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Left/Right Column: Narrative, Deliverables & Action */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E8] font-normal leading-[0.95] tracking-tight group-hover:text-[#F4F0E8] transition-colors">
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

                  {/* Strategic Deliverables List */}
                  <div className="space-y-2.5 pt-2 border-t border-[#262320]">
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

                  {/* Key Fact Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.keyFacts.slice(0, 2).map((fact, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl border border-[#262320] text-left transition-colors group-hover:border-[#722F37]/40"
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

                  {/* Explore Case Study CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#722F37] hover:text-[#F4F0E8] transition-colors group/btn"
                    >
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="w-24 h-[1px] bg-[#262320] relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#722F37] transition-all duration-500 ease-out"
                        style={{
                          width: isHovered ? '100%' : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right/Left Column: Large Magazine Visual Area */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative overflow-hidden rounded-2xl border border-[#262320] group-hover:border-[#722F37]/80 shadow-2xl transition-all duration-700 cursor-pointer"
                  >
                    <ProjectImage
                      src={project.imagePath}
                      alt={project.title}
                      title={project.title}
                      category={project.category}
                      subtitle={project.subtitle}
                      accentBg={project.accentBg}
                      accentColor={project.accentColor}
                      aspectRatio="aspect-[16/11]"
                      className="rounded-2xl hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />

                    {/* Subtle Editorial Number Watermark */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] font-mono text-[10px] text-[#C8BFB2] uppercase tracking-widest pointer-events-none">
                      0{idx + 1} // {project.category.split('/')[0].trim()}
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

