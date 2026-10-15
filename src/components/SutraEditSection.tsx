import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, X, BookOpen, Maximize2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const SutraEditSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const project = PROJECTS_DATA.find((p) => p.id === 'sutra-edit') || {
    id: 'sutra-edit',
    number: '02',
    title: 'Sutra Edit',
    subtitle: 'Building a Fashion Business Ecosystem',
    category: 'BRAND STRATEGY · STARTUP CONCEPT',
    type: 'Startup Concept',
    shortDescription:
      'A proposed fashion and lifestyle business ecosystem connecting content, industry intelligence and advisory services for emerging brands.',
    outputs: [
      'Defined the brand concept, target audience and positioning.',
      'Developed three verticals: Weekly Edit, Community and Consulting.',
      'Structured a tiered monetisation model: Content → Intelligence → Advisory.'
    ],
    keyFacts: [
      { label: 'Project Type', value: 'Startup Concept' },
      { label: 'Focus Area', value: 'Brand Strategy' },
      { label: 'Ecosystem', value: 'Content · Intelligence · Advisory' },
      { label: 'Target Sector', value: 'Emerging Fashion & Lifestyle' }
    ]
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    // Smoothly return to the Sutra Edit section
    const el = document.getElementById('project-sutra-edit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article
      id="project-sutra-edit"
      className="group relative pt-4 pb-12 sm:pb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* Top Project Identification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 mb-8 sm:mb-12 font-mono text-xs text-[#8E8278] transition-colors duration-500 group-hover:border-[#722F37]/50">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-bold text-sm transition-transform duration-500 group-hover:scale-105">
            02 /
          </span>
          <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="text-[11px] text-[#8E8278] font-mono tracking-wider">
          <span>{project.type}</span>
        </div>
      </div>

      {/* Large Magazine Editorial Spread Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Narrative & Strategy Column */}
        <div className="lg:col-span-6 space-y-6">
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
              ECOSYSTEM VERTICALS &amp; BUSINESS ARCHITECTURE
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
                <div className="text-xs font-mono font-bold text-[#F4F0E8] mt-0.5">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>

          {/* EXPLORE SUTRA EDIT Action Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#722F37] hover:bg-[#883640] text-[#F4F0E8] font-mono text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-lg hover:shadow-[#722F37]/25 hover:scale-[1.02] cursor-pointer"
              aria-label="Explore Sutra Edit interactive platform"
            >
              <span>EXPLORE SUTRA EDIT</span>
              <ArrowRight className="w-4 h-4 text-[#F4F0E8]" />
            </button>
            <span className="text-[11px] font-mono text-[#8E8278] tracking-wider uppercase">
              • Interactive Intelligence Platform
            </span>
          </div>
        </div>

        {/* Visual Showcase & Live Preview Trigger Column */}
        <div className="lg:col-span-6">
          <div
            onClick={() => setIsOpen(true)}
            className="group/card relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 shadow-2xl transition-all duration-700 hover:border-[#722F37]/70 cursor-pointer overflow-hidden"
          >
            {/* Interactive Preview Container with faux browser / editorial frame */}
            <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-[#0D1A25] flex flex-col justify-between p-6 sm:p-8 border border-[#1A3348]">
              {/* Header inside frame */}
              <div className="flex items-center justify-between border-b border-[#2A4256] pb-3 text-xs font-sans text-[#EAE6DE]">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#EF8557]">
                  <span className="w-2 h-2 rounded-full bg-[#EF8557] animate-pulse" />
                  <span>SUTRA EDIT · INTELLIGENCE PLATFORM</span>
                </div>
                <span className="text-[10px] text-[#97A6B2] uppercase font-mono">Issue 01 &amp; 02 Active</span>
              </div>

              {/* Centered Editorial Masthead */}
              <div className="my-auto py-4 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172B3D] border border-[#2A4256] text-[10px] font-mono text-[#8DBBE0] mb-2">
                  <BookOpen className="w-3 h-3 text-[#EF8557]" />
                  <span>Fashion Business Intelligence for India</span>
                </div>
                <h4 className="font-serif text-3xl sm:text-4xl text-[#EAE6DE] font-normal leading-tight tracking-tight">
                  The business thread connecting India's fashion future.
                </h4>
                <p className="text-xs sm:text-[13px] text-[#97A6B2] font-sans max-w-md leading-relaxed">
                  Interactive newsletter reader, industry archive, curated market metrics, and tiered advisory models.
                </p>
              </div>

              {/* Footer inside frame */}
              <div className="flex items-center justify-between pt-3 border-t border-[#2A4256] text-[11px] font-mono">
                <span className="text-[#97A6B2]">Weekly Edit · Community · Advisory</span>
                <span className="inline-flex items-center gap-1.5 text-[#EF8557] font-semibold group-hover/card:translate-x-1 transition-transform">
                  <span>Open Platform</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#722F37] border border-[#F4F0E8]/20 text-xs font-mono uppercase tracking-[0.16em] text-[#F4F0E8] shadow-2xl">
                  <span>Click to Explore Sutra Edit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8E8278]">
              <span className="text-[#C8BFB2]">02 / Fully Functional Publication Experience</span>
              <span className="text-[#722F37]">LIVE DEMO &amp; READER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Fullscreen Project Detail Experience (Modal/Overlay) */}
      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Sutra Edit Interactive Project Details"
            className="fixed inset-0 z-[100] flex flex-col bg-[#0B0A09]/95 backdrop-blur-md animate-fadeIn"
          >
            {/* Top Editorial Control Header */}
            <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-[#262320] bg-[#141211] text-[#F4F0E8] shrink-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#722F37] font-semibold">
                  PRASHANTHI.B
                </span>
                <span className="text-[#38332F]">•</span>
                <span className="font-serif text-sm sm:text-base text-[#F4F0E8] font-normal tracking-wide">
                  SUTRA EDIT
                </span>
                <span className="hidden md:inline-block text-[#38332F]">•</span>
                <span className="hidden md:inline-block font-sans text-xs text-[#8E8278]">
                  Fashion Business Intelligence for India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E1B19] border border-[#262320] text-[10px] font-mono text-[#C8BFB2] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
                  Internal Project View
                </span>

                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#262320] hover:bg-[#722F37] text-[#F4F0E8] font-mono text-xs uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer shadow-md"
                  aria-label="Close and return to portfolio"
                >
                  <span>BACK TO PORTFOLIO</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Embedded Sutra Edit Viewport */}
            <div className="relative flex-grow w-full h-[calc(100vh-57px)] bg-[#F7F5F0]">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0A09] text-[#F4F0E8] gap-3">
                  <div className="w-6 h-6 border-2 border-[#722F37] border-t-transparent rounded-full animate-spin" />
                  <span className="font-mono text-xs text-[#8E8278] tracking-widest uppercase">
                    Loading Sutra Edit...
                  </span>
                </div>
              )}
              <iframe
                src="/projects/sutra-edit/index.html"
                title="Sutra Edit | Fashion business intelligence for India"
                className="w-full h-full border-0"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </div>,
          document.body
        )}
    </article>
  );
};
