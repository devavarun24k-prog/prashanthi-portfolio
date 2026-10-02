import React from 'react';
import { Layers } from 'lucide-react';

interface EditorialPlaceholderProps {
  title: string;
  category?: string;
  tag?: string;
  theme?: string;
  aspectRatio?: string;
  className?: string;
  themeMode?: 'dark' | 'light';
}

export const EditorialPlaceholder: React.FC<EditorialPlaceholderProps> = ({
  title,
  category,
  tag = 'ASSET PLACEHOLDER',
  theme,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  themeMode = 'dark',
}) => {
  const isDark = themeMode === 'dark';

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-none border transition-all duration-300 group ${
        isDark
          ? 'bg-[#1C1C1C] text-[#FAF9F6] border-[#282828] hover:border-[#77736D]'
          : 'bg-[#F4F1EB] text-[#151515] border-[#E5E1D8] hover:border-[#B7B1A8]'
      } ${className}`}
    >
      {/* Top Bar */}
      <div
        className={`absolute top-4 left-4 right-4 flex items-center justify-between border-b pb-2.5 z-10 ${
          isDark ? 'border-[#282828]' : 'border-[#E5E1D8]'
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Subtle rare Oxblood marker dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427] inline-block" />
          <span className={`font-mono text-[9px] tracking-[0.25em] uppercase font-medium ${isDark ? 'text-[#B7B1A8]' : 'text-[#77736D]'}`}>
            {tag}
          </span>
        </div>
        <span className={`font-mono text-[9px] tracking-widest uppercase font-medium ${isDark ? 'text-[#77736D]' : 'text-[#B7B1A8]'}`}>
          EDITORIAL ARCHIVE
        </span>
      </div>

      {/* Centerpiece Typographic Treatment */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div
          className={`w-10 h-10 border flex items-center justify-center mb-3 transition-colors ${
            isDark
              ? 'border-[#282828] text-[#B7B1A8] bg-[#151515] group-hover:border-[#FAF9F6] group-hover:text-[#FAF9F6]'
              : 'border-[#E5E1D8] text-[#77736D] bg-[#FAF9F6] group-hover:border-[#151515] group-hover:text-[#151515]'
          }`}
        >
          <Layers className="w-4 h-4 stroke-[1.5]" />
        </div>

        <h4 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide max-w-sm leading-tight">
          {title}
        </h4>

        {category && (
          <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mt-2 font-medium ${isDark ? 'text-[#B7B1A8]' : 'text-[#77736D]'}`}>
            {category}
          </p>
        )}

        {theme && (
          <p className={`text-xs mt-2 max-w-xs italic font-serif ${isDark ? 'text-[#B7B1A8]' : 'text-[#77736D]'}`}>
            {theme}
          </p>
        )}
      </div>

      {/* Bottom Corner Bar */}
      <div
        className={`absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono border-t pt-2 z-10 ${
          isDark ? 'border-[#282828] text-[#77736D]' : 'border-[#E5E1D8] text-[#77736D]'
        }`}
      >
        <span>PRASHANTHI B // CURATION</span>
        <span className="tracking-wider uppercase">
          ORIGINAL MATERIAL PENDING
        </span>
      </div>
    </div>
  );
};
