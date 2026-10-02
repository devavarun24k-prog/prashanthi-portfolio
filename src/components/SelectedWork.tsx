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
    <section id="work" className="py-24 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E2D5C3] bg-[#F5EEE3] text-[#2C2421]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2D5C3]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2421] tracking-tight">
            SELECTED WORK
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#554E48] leading-relaxed font-sans">
          Selected projects across retail, visual merchandising, fashion strategy, design thinking and brand communication.
        </p>
      </div>

      {/* 5 Varied Image-Led Project Cards */}
      <div className="space-y-20 pt-16">
        {PROJECTS_DATA.map((project, idx) => {
          const isEven = idx % 2 === 1;

          // Wide Composition (House of Masaba)
          if (project.composition === 'wide') {
            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-2xl p-6 sm:p-10 bg-[#FAF6EE] border border-[#E2D5C3] hover:border-[#722F37] transition-all shadow-sm space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2D5C3] pb-4">
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#722F37]">
                      {project.number} / {project.category}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2421] group-hover:text-[#722F37] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-xs font-sans text-[#8F8177] block">
                      {project.type}
                    </span>
                    <span className="text-xs font-sans font-semibold text-[#722F37] flex items-center md:justify-end gap-1 transition-colors mt-1">
                      <span>View Project</span>
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
                  <div className="lg:col-span-4 space-y-4">
                    <p className="text-sm text-[#554E48] leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>
                    <div className="p-4 rounded-xl bg-[#F5EEE3] border border-[#E2D5C3] space-y-2">
                      <span className="text-[11px] font-semibold uppercase text-[#722F37] block">
                        Key Dimensions:
                      </span>
                      <div className="text-xs font-sans text-[#2C2421] space-y-1">
                        <div>• 5 Product Lines & 1,008 SKUs</div>
                        <div>• Indian Sizing Ratio Curve</div>
                        <div>• 40–60% Target Gross Margin</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          // Split / Asymmetric Composition
          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl p-6 sm:p-10 bg-[#FAF6EE] border border-[#E2D5C3] hover:border-[#722F37] transition-all shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#722F37]">
                    {project.number}
                  </span>
                  <span className="text-[#B7A89A]">/</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8F8177]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2421] group-hover:text-[#722F37] transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[#554E48] leading-relaxed font-sans">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.keyFacts.slice(0, 3).map((fact, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-xs font-sans font-medium px-3 py-1 rounded-md bg-[#F5EEE3] border border-[#E2D5C3] text-[#2C2421]"
                    >
                      {fact.label}: <strong className="text-[#722F37]">{fact.value}</strong>
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E2D5C3] flex items-center justify-between text-xs font-sans font-medium">
                  <span className="text-[#8F8177]">{project.type}</span>
                  <span className="text-[#722F37] font-semibold flex items-center gap-1 transition-colors">
                    <span>View Project</span>
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
                  className="rounded-xl"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
