import React from 'react';
import { Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

interface PlaceholderCanvasProps {
  title: string;
  category: string;
  tag?: string;
  theme?: string;
  aspectRatio?: string;
  className?: string;
}

export const PlaceholderCanvas: React.FC<PlaceholderCanvasProps> = ({
  title,
  category,
  tag,
  theme,
  aspectRatio = 'aspect-[16/10]',
  className = ''
}) => {
  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-sm bg-[#161616] text-[#FAF9F6] border border-[#2D2D2D] transition-all duration-500 group-hover:border-[#9C7A4A]/60 ${className}`}
    >
      {/* Editorial geometric grid texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#9C7A4A_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Subtle diagonal ambient light */}
      <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-[#9C7A4A]/10 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

      {/* Decorative top & bottom hairline rules */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between border-b border-[#FAF9F6]/10 pb-2.5">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FAF9F6]/60 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A] inline-block animate-pulse"></span>
          {tag || 'PORTFOLIO ASSET'}
        </span>
        <span className="font-mono text-[10px] tracking-widest text-[#FAF9F6]/40 uppercase">
          ASSET PLACEHOLDER
        </span>
      </div>

      {/* Centerpiece editorial text & motif */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full border border-[#FAF9F6]/15 flex items-center justify-center mb-3 text-[#9C7A4A] bg-[#1F1F1F]/60 backdrop-blur-sm group-hover:scale-105 group-hover:border-[#9C7A4A]/50 transition-all duration-500">
          <Layers className="w-5 h-5 stroke-[1.5]" />
        </div>
        
        <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF9F6] tracking-wide max-w-xs">
          {title}
        </h4>
        
        <p className="text-xs uppercase tracking-[0.2em] text-[#9C7A4A] mt-1.5 font-medium">
          {category}
        </p>

        {theme && (
          <p className="text-[11px] text-[#FAF9F6]/50 mt-2 max-w-xs italic font-serif">
            {theme}
          </p>
        )}
      </div>

      {/* Bottom corner coordinates & image replacement note */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#FAF9F6]/40 border-t border-[#FAF9F6]/10 pt-2">
        <div className="flex items-center gap-1">
          <ImageIcon className="w-3 h-3 text-[#9C7A4A]" />
          <span>ASSET READY</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#9C7A4A]" />
          <span>PB • ARCHIVE</span>
        </div>
      </div>
    </div>
  );
};
