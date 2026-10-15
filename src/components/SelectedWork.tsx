import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { SamsoniteEditorialSection } from './SamsoniteEditorialSection';
import { SutraEditSection } from './SutraEditSection';
import { MasabaProjectSection } from './MasabaProjectSection';
import { HealingTheWaitSection } from './HealingTheWaitSection';
import { BvlgariPhygitalMaisonSection } from './BvlgariPhygitalMaisonSection';
import { BearHouseSection } from './BearHouseSection';

export const SelectedWork: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  useEffect(() => {
    // Automatically expand targeted project if URL hash specifies it
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      if (hash.includes('samsonite')) setExpandedProjects((p) => ({ ...p, 'samsonite-smarttravel': true }));
      if (hash.includes('sutra')) setExpandedProjects((p) => ({ ...p, 'sutra-edit': true }));
      if (hash.includes('masaba')) setExpandedProjects((p) => ({ ...p, 'house-of-masaba': true }));
      if (hash.includes('healing') || hash.includes('heal-queue') || hash.includes('the-space-between')) {
        setExpandedProjects((p) => ({ ...p, 'healing-the-wait': true }));
      }
      if (hash.includes('bvlgari') || hash.includes('phygital')) {
        setExpandedProjects((p) => ({ ...p, 'bvlgari': true }));
      }
      if (hash.includes('bear-house')) setExpandedProjects((p) => ({ ...p, 'bear-house': true }));
    }
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
        </div>
      </div>

      {/* Curated Projects with Description-First, Details-on-Demand Flow */}
      <div className="space-y-16 sm:space-y-24 pt-4 sm:pt-6 relative z-10">
        {PROJECTS_DATA.map((project, idx) => {
          const isExpanded = !!expandedProjects[project.id];

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="space-y-6 scroll-mt-28"
            >
              {/* Description-First Header Overview Card */}
              <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#141211]/90 border border-[#262320] hover:border-[#722F37]/60 transition-all duration-500 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-4 mb-6 font-mono text-xs text-[#8E8278]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#722F37] font-bold text-sm">0{idx + 1} /</span>
                    <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">{project.category}</span>
                  </div>
                  <span className="text-[11px] text-[#8E8278] uppercase tracking-wider">{project.type}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E8] font-normal tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-serif italic text-lg sm:text-xl text-[#C8BFB2]">
                      "{project.subtitle}"
                    </p>
                    <p className="text-sm sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed pt-1">
                      {project.shortDescription}
                    </p>

                    {/* Key Facts badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      {project.keyFacts.map((fact, fIdx) => (
                        <span key={fIdx} className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#0B0A09] border border-[#262320] text-[#8E8278]">
                          <span className="text-[#C8BFB2]">{fact.label}:</span> {fact.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex lg:justify-end">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-[#722F37] bg-[#722F37]/10 hover:bg-[#722F37] text-[#F4F0E8] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg group"
                    >
                      <span>{isExpanded ? 'COLLAPSE PROJECT' : 'EXPLORE PROJECT'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#F4F0E8] transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#722F37] group-hover:text-[#F4F0E8] group-hover:translate-y-0.5 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Rich Details & Interactive Experience */}
              {isExpanded && (
                <div className="pt-4 animate-fadeIn transition-all duration-700 space-y-8">
                  {project.id === 'samsonite-smarttravel' && <SamsoniteEditorialSection />}
                  {project.id === 'sutra-edit' && <SutraEditSection />}
                  {project.id === 'house-of-masaba' && <MasabaProjectSection />}
                  {project.id === 'healing-the-wait' && <HealingTheWaitSection />}
                  {project.id === 'bvlgari' && <BvlgariPhygitalMaisonSection />}
                  {project.id === 'bear-house' && <BearHouseSection />}

                  {/* Bottom Collapse Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#262320] hover:border-[#722F37] text-[#8E8278] hover:text-[#F4F0E8] font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <ChevronUp className="w-3.5 h-3.5 text-[#722F37]" />
                      <span>COLLAPSE {project.title.toUpperCase()}</span>
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

