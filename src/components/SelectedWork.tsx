import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { SamsoniteEditorialSection } from './SamsoniteEditorialSection';
import { MasabaProjectSection } from './MasabaProjectSection';
import { HealingTheWaitSection } from './HealingTheWaitSection';
import { BvlgariPhygitalMaisonSection } from './BvlgariPhygitalMaisonSection';

const getProjectContributionHeading = (projectId: string) => {
  switch (projectId) {
    case 'samsonite-smarttravel':
      return 'PRODUCT-MARKETING ROADMAP & ANALYSIS';
    case 'sutra-edit':
      return 'ECOSYSTEM VERTICALS & BUSINESS ARCHITECTURE';
    case 'house-of-masaba':
      return 'RETAIL PRESENTATION & ASSORTMENT PLANNING';
    case 'bear-house':
      return 'STORE-LEVEL VISUAL MERCHANDISING & OPERATIONS';
    case 'healing-the-wait':
      return 'SERVICE DESIGN & DIGITAL SOLUTION MAPPING';
    case 'bvlgari':
      return 'LUXURY RETAIL & DIGITAL INTEGRATION STRATEGY';
    default:
      return 'KEY DELIVERABLES & STRATEGY';
  }
};

export const SelectedWork: React.FC = () => {
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleMetrics(true);
            const index = Number(entry.target.getAttribute('data-project-index'));
            if (!isNaN(index)) {
              setVisibleProjects((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] relative select-none"
    >
      {/* Subtle Layout Grid Background */}
      <div className="absolute inset-0 editorial-grid-bg opacity-20 pointer-events-none" />

      {/* Section Header Label Bar with Divider Reveal */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#262320] mb-12 sm:mb-16 relative z-10">
        <div className="font-sans font-semibold text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[0.12em] uppercase leading-none">
          <span className="text-[#722F37] mr-1.5">01 /</span>
          <span className="text-[#F4F0E8]">WORK</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-[13px] text-[#8E8278] tracking-wider uppercase">
          <span className="text-[#C8BFB2]">06 CURATED PROJECTS</span>
          <span className="text-[#262320]">•</span>
          <span>RETAIL × MERCHANDISING × STRATEGY</span>
        </div>
      </div>

      {/* 6 Curated Large Magazine Editorial Spreads */}
      <div className="space-y-28 sm:space-y-40 pt-4 sm:pt-6 relative z-10">
        {PROJECTS_DATA.map((project, idx) => {
          // Samsonite SmartTravel+ displays the bespoke photo 2 editorial composition directly inline
          if (project.id === 'samsonite-smarttravel') {
            return <SamsoniteEditorialSection key={project.id} />;
          }

          // House of Masaba displays the bespoke interactive collection & range plan editorial section
          if (project.id === 'house-of-masaba') {
            return <MasabaProjectSection key={project.id} />;
          }

          // THE SPACE BETWEEN — Healing the Wait displays the bespoke continuous animated showcase
          if (project.id === 'healing-the-wait') {
            return <HealingTheWaitSection key={project.id} />;
          }

          // THE PHYGITAL MAISON — Bvlgari displays the bespoke luxury retail & digital innovation section
          if (project.id === 'bvlgari') {
            return <BvlgariPhygitalMaisonSection key={project.id} />;
          }

          const isEven = idx % 2 === 1;
          const isVisible = visibleProjects.has(idx);

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              data-project-index={idx}
              ref={(el) => {
                projectRefs.current[idx] = el;
              }}
              className={`group relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Top Project Identification Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 mb-8 sm:mb-12 font-mono text-xs text-[#8E8278] transition-colors duration-500 group-hover:border-[#722F37]/50">
                <div className="flex items-center gap-3">
                  <span className="text-[#722F37] font-bold text-sm transition-transform duration-500 group-hover:scale-105">0{idx + 1}</span>
                  <span className="text-[#262320]">/</span>
                  <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="text-[11px] text-[#8E8278]">
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Large Editorial Magazine Spread Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Narrative & Strategy Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#F4F0E8] font-normal leading-[0.95] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic pt-0.5">
                      "{project.subtitle}"
                    </p>
                  </div>

                  {/* Short Narrative Description */}
                  <p className="text-base sm:text-[17px] text-[#C8BFB2] font-sans font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Project-Specific Contributions Section */}
                  <div className="space-y-3.5 pt-3 border-t border-[#262320]">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block">
                      {getProjectContributionHeading(project.id)}
                    </span>
                    <div className="space-y-2.5">
                      {project.outputs.map((out, oIdx) => (
                        <div key={oIdx} className="text-sm text-[#C8BFB2] font-sans flex items-start gap-3">
                          <span className="text-[#722F37] font-mono text-xs shrink-0 mt-0.5">0{oIdx + 1}</span>
                          <span className="leading-relaxed">{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Fact Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {project.keyFacts.slice(0, 2).map((fact, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3.5 rounded-xl border border-[#262320] text-left transition-colors group-hover:border-[#722F37]/40 bg-[#141211]/50"
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

                {/* Large Magazine Visual Area */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-[#262320] group-hover:border-[#722F37]/80 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <ProjectImage
                      src={project.imagePath}
                      alt={project.title}
                      title={project.title}
                      category={project.category}
                      subtitle={project.subtitle}
                      accentBg={project.accentBg}
                      accentColor={project.accentColor}
                      aspectRatio="aspect-[16/11]"
                      className="rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
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
