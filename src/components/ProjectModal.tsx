import React, { useEffect } from 'react';
import { X, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PlaceholderCanvas } from './PlaceholderCanvas';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] text-[#1C1B19] rounded-sm border border-[#E8E5DC] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8E5DC]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#9C7A4A] bg-[#9C7A4A]/10 px-2.5 py-0.5 rounded-sm">
              {project.type}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#6E6B65]">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 text-[#1C1B19]/70 hover:text-[#1C1B19] hover:bg-[#EAE6DF] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title and category */}
          <div>
            <h3
              id="project-modal-title"
              className="font-serif text-3xl sm:text-4xl text-[#1C1B19] font-normal tracking-tight"
            >
              {project.title}
            </h3>
            <p className="font-serif text-lg italic text-[#9C7A4A] mt-1">
              {project.category}
            </p>
          </div>

          {/* Project Visual Canvas */}
          <div>
            <PlaceholderCanvas
              title={project.title}
              category={project.category}
              tag={project.placeholderMood.tag}
              theme={project.placeholderMood.theme}
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-[#1C1B19] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#9C7A4A]" />
              Project Overview
            </h4>
            <p className="text-[#3D3A35] leading-relaxed text-sm sm:text-base">
              {project.fullOverview}
            </p>
          </div>

          {/* Focus Areas */}
          <div className="space-y-3 pt-4 border-t border-[#E8E5DC]">
            <h4 className="text-xs uppercase font-semibold tracking-[0.2em] text-[#1C1B19] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#9C7A4A]" />
              Core Focus Areas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 bg-white border border-[#E8E5DC] rounded-sm text-xs sm:text-sm text-[#524E48]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[#F4F2EC] rounded-sm border border-[#E8E5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6E6B65]">
            <span>Based on academic portfolio curriculum.</span>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 font-medium text-[#1C1B19] hover:text-[#9C7A4A] transition-colors"
            >
              <span>Close Project View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
