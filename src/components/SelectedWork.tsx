import React from 'react';
import { ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS } from '../data/portfolioData';
import { PlaceholderCanvas } from './PlaceholderCanvas';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E5DC]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E5DC]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#9C7A4A] uppercase">
            <FolderGit2 className="w-4 h-4" />
            <span>01 / SELECTED WORK</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1B19] tracking-tight">
            Academic & Strategic Projects
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#6E6B65] leading-relaxed">
          Case studies and merchandise planning projects developed during fashion business management studies, bridging visual aesthetics with commercial rigor.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between editorial-card rounded-sm overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => onSelectProject(project)}
          >
            <div className="space-y-6">
              {/* Project Card Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#9C7A4A] font-semibold tracking-widest">
                  0{index + 1}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 bg-[#F4F2EC] text-[#524E48] rounded-sm border border-[#E8E5DC]">
                  {project.type}
                </span>
              </div>

              {/* Visual Placeholder Canvas */}
              <div className="overflow-hidden rounded-sm">
                <PlaceholderCanvas
                  title={project.title}
                  category={project.category}
                  tag={project.placeholderMood.tag}
                  theme={project.placeholderMood.theme}
                  aspectRatio={project.placeholderMood.aspectRatio}
                />
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-[#9C7A4A]">
                  {project.category}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B19] group-hover:text-[#9C7A4A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6B65] line-clamp-3 leading-relaxed pt-1">
                  {project.shortDescription}
                </p>
              </div>

              {/* Focus tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.focusAreas.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-[#524E48] bg-[#FAF9F6] border border-[#E8E5DC] px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action footer */}
            <div className="pt-6 mt-6 border-t border-[#E8E5DC] flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest uppercase text-[#1C1B19] font-medium group-hover:text-[#9C7A4A] transition-colors flex items-center gap-1">
                View Project Details
              </span>
              <div className="w-8 h-8 rounded-full border border-[#E8E5DC] flex items-center justify-center text-[#1C1B19] group-hover:bg-[#1C1B19] group-hover:text-[#FAF9F6] group-hover:border-[#1C1B19] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Asset note */}
      <div className="mt-12 p-4 bg-[#F4F2EC]/60 border border-[#E8E5DC] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6E6B65]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#9C7A4A]" />
          <span>Image containers are built with structured aspect ratios ready for high-resolution project asset drops.</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#9C7A4A]">
          V1 ASSET PIPELINE READY
        </span>
      </div>
    </section>
  );
};
