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
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-none border transition-colors duration-300 group ${
        isDark
          ? 'bg-[#161616] text-[#F5F4F0] border-[#262626] hover:border-[#666666]'
          : 'bg-[#E8E7E3] text-[#0D0D0D] border-[#D9D7D2] hover:border-[#96938D]'
      } ${className}`}
    >
      {/* Top Bar */}
      <div
        className={`absolute top-4 left-4 right-4 flex items-center justify-between border-b pb-2.5 z-10 ${
          isDark ? 'border-[#262626]' : 'border-[#D9D7D2]'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B2737] inline-block" />
          <span className={`font-mono text-[9px] tracking-[0.25em] uppercase font-medium ${isDark ? 'text-[#96938D]' : 'text-[#666666]'}`}>
            {tag}
          </span>
        </div>
        <span className={`font-mono text-[9px] tracking-widest uppercase font-medium ${isDark ? 'text-[#96938D]' : 'text-[#666666]'}`}>
          VISUAL PLACEHOLDER
        </span>
      </div>

      {/* Centerpiece Typographic Treatment */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div
          className={`w-10 h-10 border flex items-center justify-center mb-3 transition-colors ${
            isDark
              ? 'border-[#262626] text-[#96938D] bg-[#0D0D0D] group-hover:border-[#96938D] group-hover:text-[#F5F4F0]'
              : 'border-[#D9D7D2] text-[#666666] bg-[#F5F4F0] group-hover:border-[#0D0D0D] group-hover:text-[#0D0D0D]'
          }`}
        >
          <Layers className="w-4 h-4 stroke-[1.5]" />
        </div>

        <h4 className="font-serif text-xl sm:text-2xl font-normal tracking-wide max-w-sm leading-tight">
          {title}
        </h4>

        {category && (
          <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mt-2 font-medium ${isDark ? 'text-[#96938D]' : 'text-[#666666]'}`}>
            {category}
          </p>
        )}

        {theme && (
          <p className={`text-xs mt-2 max-w-xs italic font-serif ${isDark ? 'text-[#96938D]' : 'text-[#666666]'}`}>
            {theme}
          </p>
        )}
      </div>

      {/* Bottom Corner Bar */}
      <div
        className={`absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono border-t pt-2 z-10 ${
          isDark ? 'border-[#262626] text-[#96938D]' : 'border-[#D9D7D2] text-[#666666]'
        }`}
      >
        <span>EDITORIAL ARCHIVE</span>
        <span className="tracking-wider uppercase">
          PROJECT VISUALS
        </span>
      </div>
    </div>
  );
};
