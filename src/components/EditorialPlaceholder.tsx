import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

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
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-none border transition-all duration-700 group ${
        isDark
          ? 'bg-[#1A1411] text-[#F3EFE7] border-[#2E2520] hover:border-[#5A2028]'
          : 'bg-[#EAE4DC] text-[#24201D] border-[#C8C0B5] hover:border-[#5A2028]'
      } ${className}`}
    >
      {/* Background radial noise & subtle geometric grid */}
      <div
        className={`absolute inset-0 opacity-15 [background-size:24px_24px] ${
          isDark
            ? 'bg-[radial-gradient(#A99578_1px,transparent_1px)]'
            : 'bg-[radial-gradient(#24201D_1px,transparent_1px)]'
        }`}
      />
      
      {/* Top Hairline Bar */}
      <div
        className={`absolute top-4 left-4 right-4 flex items-center justify-between border-b pb-2.5 z-10 ${
          isDark ? 'border-[#F3EFE7]/10' : 'border-[#24201D]/10'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5A2028] inline-block" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-70 font-medium">
            {tag}
          </span>
        </div>
        <span className="font-mono text-[9px] tracking-widest text-[#5A2028] uppercase font-semibold">
          VISUAL — TO BE ADDED
        </span>
      </div>

      {/* Centerpiece Typographic Treatment */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div
          className={`w-10 h-10 border flex items-center justify-center mb-3 transition-all duration-500 ${
            isDark
              ? 'border-[#F3EFE7]/15 text-[#C8C0B5] bg-[#221B17] group-hover:border-[#5A2028] group-hover:text-[#F3EFE7]'
              : 'border-[#24201D]/20 text-[#24201D] bg-[#F3EFE7] group-hover:border-[#5A2028] group-hover:text-[#5A2028]'
          }`}
        >
          <Layers className="w-4 h-4 stroke-[1.5]" />
        </div>

        <h4 className="font-serif text-xl sm:text-2xl font-normal tracking-wide max-w-sm leading-tight">
          {title}
        </h4>

        {category && (
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A2028] mt-2 font-medium">
            {category}
          </p>
        )}

        {theme && (
          <p className="text-xs opacity-50 mt-2 max-w-xs italic font-serif">
            {theme}
          </p>
        )}
      </div>

      {/* Bottom Corner Bar */}
      <div
        className={`absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono opacity-50 border-t pt-2 z-10 ${
          isDark ? 'border-[#F3EFE7]/10' : 'border-[#24201D]/10'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#5A2028]" />
          <span>FASHION ARCHIVE</span>
        </div>
        <span className="tracking-wider uppercase">
          ORIGINAL MATERIAL
        </span>
      </div>
    </div>
  );
};
