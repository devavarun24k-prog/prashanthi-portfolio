import React from 'react';
import { ArrowUpRight, FolderGit2, BookOpen } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { EditorialPlaceholder } from './EditorialPlaceholder';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#282828] bg-[#151515] text-[#FAF9F6]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#282828]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#B7B1A8] uppercase font-semibold">
            <span className="font-bold text-[#FAF9F6] bg-[#1C1C1C] px-2 py-0.5 border border-[#282828]">
              04 / 10
            </span>
            <FolderGit2 className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>CURATED PORTFOLIO</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF9F6] tracking-tight">
            Selected Work
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#B7B1A8] leading-relaxed">
          Five focused case studies spanning on-ground retail execution, design thinking, merchandise planning, digital community building, and startup intelligence.
        </p>
      </div>

      {/* 5 Distinct Editorial Project Compositions */}
      <div className="space-y-24 pt-16">
        {PROJECTS_DATA.map((project) => {
          // 1. Project 01: The Bear House (Image Right, Typography Left)
          if (project.composition === 'image-right') {
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer p-6 sm:p-10 bg-[#1C1C1C] border border-[#282828] hover:border-[#77736D] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#151515] tracking-widest bg-[#FAF9F6] px-2.5 py-1">
                      CASE {project.number}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#B7B1A8]">
                      {project.type}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B7B1A8] font-medium">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] group-hover:text-[#B7B1A8] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-serif text-lg text-[#B7B1A8] italic leading-relaxed pt-1">
                      "{project.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B7B1A8] leading-relaxed font-sans font-light">
                    {project.heroExcerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.focusAreas.map((area, i) => (
                      <span key={i} className="text-[10px] font-mono text-[#FAF9F6] bg-[#151515] border border-[#282828] px-2.5 py-1">
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#282828] flex items-center justify-between text-xs font-mono">
                    <span className="tracking-widest uppercase text-[#FAF9F6] font-medium group-hover:text-[#B7B1A8] transition-colors flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#5A2427]" />
                      Explore Case Study
                    </span>
                    <div className="w-8 h-8 border border-[#282828] flex items-center justify-center text-[#FAF9F6] group-hover:bg-[#FAF9F6] group-hover:text-[#151515] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <EditorialPlaceholder
                    title={project.title}
                    category={project.category}
                    tag={project.placeholderMood.tag}
                    theme={project.placeholderMood.theme}
                    aspectRatio="aspect-[4/3]"
                    themeMode="dark"
                  />
                </div>
              </article>
            );
          }

          // 2. Project 02: Healing The Wait (Image Left, Typography Right)
          if (project.composition === 'image-left') {
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer p-6 sm:p-10 bg-[#1C1C1C] border border-[#282828] hover:border-[#77736D] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <EditorialPlaceholder
                    title={project.title}
                    category={project.category}
                    tag={project.placeholderMood.tag}
                    theme={project.placeholderMood.theme}
                    aspectRatio="aspect-[4/3]"
                    themeMode="dark"
                  />
                </div>

                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#151515] tracking-widest bg-[#FAF9F6] px-2.5 py-1">
                      CASE {project.number}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#B7B1A8]">
                      {project.type}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B7B1A8] font-medium">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] group-hover:text-[#B7B1A8] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-serif text-lg text-[#B7B1A8] italic leading-relaxed pt-1">
                      "{project.tagline}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B7B1A8] leading-relaxed font-sans font-light">
                    {project.heroExcerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.focusAreas.map((area, i) => (
                      <span key={i} className="text-[10px] font-mono text-[#FAF9F6] bg-[#151515] border border-[#282828] px-2.5 py-1">
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#282828] flex items-center justify-between text-xs font-mono">
                    <span className="tracking-widest uppercase text-[#FAF9F6] font-medium group-hover:text-[#B7B1A8] transition-colors flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#5A2427]" />
                      Explore Case Study
                    </span>
                    <div className="w-8 h-8 border border-[#282828] flex items-center justify-center text-[#FAF9F6] group-hover:bg-[#FAF9F6] group-hover:text-[#151515] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 3. Project 03: House of Masaba (Full-Width Editorial Spread)
          if (project.composition === 'full-width') {
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer p-6 sm:p-10 bg-[#1C1C1C] border border-[#282828] hover:border-[#77736D] transition-all space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#282828] pb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-bold text-[#151515] tracking-widest bg-[#FAF9F6] px-2.5 py-1">
                        CASE {project.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B7B1A8]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-5xl text-[#FAF9F6] group-hover:text-[#B7B1A8] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono text-[#B7B1A8] block">
                      1,008 SKUs • 5 Categories • 40–60% Target Margin
                    </span>
                    <span className="font-serif text-base text-[#B7B1A8] italic">
                      "{project.tagline}"
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <EditorialPlaceholder
                      title={project.title}
                      category={project.category}
                      tag={project.placeholderMood.tag}
                      theme={project.placeholderMood.theme}
                      aspectRatio="aspect-[16/9]"
                      themeMode="dark"
                    />
                  </div>

                  <div className="lg:col-span-4 space-y-5">
                    <p className="text-xs sm:text-sm text-[#B7B1A8] leading-relaxed font-sans font-light">
                      {project.heroExcerpt}
                    </p>

                    <div className="p-4 bg-[#151515] border border-[#282828] space-y-2">
                      <div className="font-mono text-[10px] text-[#77736D] uppercase">Strategic Pillars:</div>
                      <div className="space-y-1 text-xs font-mono text-[#FAF9F6]">
                        <div>• 5 Product Lines (Pret to Festive)</div>
                        <div>• Indian Market Size-Curve Calibration</div>
                        <div>• End-to-End Product Pipeline</div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono">
                      <span className="tracking-widest uppercase text-[#FAF9F6] font-medium group-hover:text-[#B7B1A8] transition-colors flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#5A2427]" />
                        Explore Full Range Plan
                      </span>
                      <div className="w-8 h-8 border border-[#282828] flex items-center justify-center text-[#FAF9F6] group-hover:bg-[#FAF9F6] group-hover:text-[#151515] transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // 4. Project 04 & 05: Asymmetric Split / Editorial Type
          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer p-6 sm:p-10 bg-[#1C1C1C] border border-[#282828] hover:border-[#77736D] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#151515] tracking-widest bg-[#FAF9F6] px-2.5 py-1">
                    CASE {project.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#B7B1A8]">
                    {project.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B7B1A8] font-medium">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] group-hover:text-[#B7B1A8] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-serif text-lg text-[#B7B1A8] italic leading-relaxed pt-1">
                    "{project.tagline}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#B7B1A8] leading-relaxed font-sans font-light">
                  {project.heroExcerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.focusAreas.map((area, i) => (
                    <span key={i} className="text-[10px] font-mono text-[#FAF9F6] bg-[#151515] border border-[#282828] px-2.5 py-1">
                      {area}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#282828] flex items-center justify-between text-xs font-mono">
                  <span className="tracking-widest uppercase text-[#FAF9F6] font-medium group-hover:text-[#B7B1A8] transition-colors flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#5A2427]" />
                    Explore Case Study
                  </span>
                  <div className="w-8 h-8 border border-[#282828] flex items-center justify-center text-[#FAF9F6] group-hover:bg-[#FAF9F6] group-hover:text-[#151515] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <EditorialPlaceholder
                  title={project.title}
                  category={project.category}
                  tag={project.placeholderMood.tag}
                  theme={project.placeholderMood.theme}
                  aspectRatio="aspect-[4/3]"
                  themeMode="dark"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
