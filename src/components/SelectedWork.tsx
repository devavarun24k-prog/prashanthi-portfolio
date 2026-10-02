import React from 'react';
import { ArrowUpRight, FolderGit2, Layers, BookOpen } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA, FUTURE_PROJECT_PIPELINE } from '../data/portfolioData';
import { EditorialPlaceholder } from './EditorialPlaceholder';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#2E2520] bg-[#1A1411] text-[#F3EFE7]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2E2520]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#5A2028] uppercase font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>03 / SELECTED WORK</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F3EFE7] tracking-tight">
            Curated Project Index
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#C8C0B5]/70 leading-relaxed">
          Academic case studies exploring visual merchandising layout, omnichannel retail dynamics, and fashion consulting frameworks.
        </p>
      </div>

      {/* Large Editorial Projects List */}
      <div className="space-y-16 pt-14">
        {PROJECTS_DATA.map((project, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={project.id}
              data-cursor="VIEW CASE"
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer p-6 sm:p-10 bg-[#221B17] border border-[#2E2520] rounded-none hover:border-[#5A2028] transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-lg hover:shadow-2xl ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Frame (Cols 7) */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="overflow-hidden rounded-none transition-transform duration-700 group-hover:scale-[1.01]">
                  <EditorialPlaceholder
                    title={project.title}
                    category={project.category}
                    tag={project.placeholderMood.tag}
                    theme={project.placeholderMood.theme}
                    aspectRatio={project.placeholderMood.aspectRatio}
                    themeMode="dark"
                  />
                </div>
              </div>

              {/* Text Narrative (Cols 5) */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#F3EFE7] tracking-widest bg-[#5A2028] px-2.5 py-1 rounded-none">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8C0B5]/50">
                    {project.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5A2028] font-medium">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFE7] group-hover:text-[#C8C0B5] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-serif text-base text-[#C8C0B5]/70 italic leading-relaxed pt-1">
                    "{project.tagline}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#C8C0B5]/80 leading-relaxed line-clamp-3 font-sans">
                  {project.heroExcerpt}
                </p>

                {/* Focus Area Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#F3EFE7]/80 bg-[#17120F] border border-[#2E2520] px-2.5 py-1 rounded-none"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* View CTA */}
                <div className="pt-4 border-t border-[#2E2520] flex items-center justify-between text-xs font-mono">
                  <span className="tracking-widest uppercase text-[#F3EFE7] font-medium group-hover:text-[#5A2028] transition-colors flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#5A2028]" />
                    Read Case Study
                  </span>
                  <div className="w-8 h-8 rounded-none border border-[#2E2520] flex items-center justify-center text-[#F3EFE7] group-hover:bg-[#5A2028] group-hover:border-[#5A2028] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Future Project Architecture Ribbon */}
      <div className="mt-16 p-6 sm:p-8 bg-[#221B17] border border-[#2E2520] rounded-none space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#2E2520]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#5A2028] font-semibold flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#5A2028]" />
            FUTURE CASE STUDY ARCHITECTURE
          </span>
          <span className="text-[10px] font-mono text-[#C8C0B5]/50 uppercase">
            UPCOMING ADDITIONS
          </span>
        </div>

        <p className="text-xs text-[#C8C0B5]/70 max-w-2xl leading-relaxed">
          The portfolio structure is ready for upcoming curated project additions upon release of original visual documentation:
        </p>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {FUTURE_PROJECT_PIPELINE.map((item) => (
            <div
              key={item.name}
              className="px-3 py-1.5 bg-[#17120F] border border-[#2E2520] rounded-none flex items-center gap-2 text-xs font-mono"
            >
              <span className="font-serif font-medium text-[#F3EFE7]">{item.name}</span>
              <span className="text-[9px] uppercase tracking-wider text-[#C8C0B5] bg-[#221B17] px-1.5 py-0.5 rounded-none border border-[#2E2520]">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
