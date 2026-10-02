import React from 'react';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262320]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
            <FolderGit2 className="w-4 h-4" />
            <span>EDITORIAL PORTFOLIO INDEX</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight">
            SELECTED WORK
          </h2>
        </div>
        <div className="space-y-1 text-left md:text-right">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#8E8278]">
            FASHION · RETAIL · MERCHANDISING · STRATEGY
          </div>
          <p className="max-w-md text-sm text-[#C8BFB2] leading-relaxed font-sans">
            5 verified case studies across retail execution, range planning, design thinking, and brand communication.
          </p>
        </div>
      </div>

      {/* 5 Varied Editorial Project Compositions */}
      <div className="space-y-20 sm:space-y-28 pt-16">
        {PROJECTS_DATA.map((project, idx) => {
          const isEven = idx % 2 === 1;

          // Wide Composition (House of Masaba)
          if (project.composition === 'wide') {
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl p-6 sm:p-10 bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-xl space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262320] pb-4">
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#722F37]">
                      {project.number} / {project.category}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] group-hover:text-[#F4F0E8] group-hover:translate-x-1 transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-xs font-sans text-[#8E8278] block">
                      {project.type}
                    </span>
                    <span className="text-xs font-sans font-semibold text-[#722F37] group-hover:text-[#F4F0E8] flex items-center md:justify-end gap-1.5 transition-colors mt-1">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <ProjectImage
                      src={project.imagePath}
                      alt={project.title}
                      title={project.title}
                      category={project.category}
                      accentBg={project.accentBg}
                      accentColor={project.accentColor}
                      aspectRatio="aspect-[16/9]"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="lg:col-span-4 space-y-5">
                    <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic leading-relaxed">
                      "{project.subtitle}"
                    </p>
                    <p className="text-sm text-[#8E8278] leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>
                    <div className="p-4 rounded-xl bg-[#0B0A09] border border-[#262320] space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#722F37] block font-mono">
                        VERIFIED METRICS:
                      </span>
                      <div className="text-xs font-sans text-[#C8BFB2] space-y-1">
                        <div>• 5 Verified Categories · 1,008 SKUs</div>
                        <div>• Category-Specific Size Ratios</div>
                        <div>• 40–60% Target Gross Margin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // Split / Asymmetric Composition (The Bear House, Healing the Wait, 3AM India, Sutra Edit)
          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl p-6 sm:p-10 bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#722F37]">
                    {project.number}
                  </span>
                  <span className="text-[#262320]">/</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8278]">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] group-hover:text-[#F4F0E8] group-hover:translate-x-1 transition-all leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-serif text-lg sm:text-xl text-[#C8BFB2] italic">
                    "{project.subtitle}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#8E8278] leading-relaxed font-sans font-light">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.keyFacts.slice(0, 3).map((fact, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-xs font-sans font-medium px-3 py-1 rounded-md bg-[#0B0A09] border border-[#262320] text-[#C8BFB2]"
                    >
                      {fact.label}: <strong className="text-[#722F37]">{fact.value}</strong>
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#262320] flex items-center justify-between text-xs font-sans font-medium">
                  <span className="text-[#8E8278]">{project.type}</span>
                  <span className="text-[#722F37] group-hover:text-[#F4F0E8] font-semibold flex items-center gap-1.5 transition-colors">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <ProjectImage
                  src={project.imagePath}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  accentBg={project.accentBg}
                  accentColor={project.accentColor}
                  aspectRatio="aspect-[4/3]"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
