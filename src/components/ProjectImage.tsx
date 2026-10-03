import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  subtitle?: string;
  accentBg?: string;
  accentColor?: string;
  aspectRatio?: string;
  className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  title,
  category,
  subtitle,
  accentBg = '#141211',
  accentColor: _accentColor = '#722F37',
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden bg-[#141211] border border-[#262320] group ${className}`}
      style={{ backgroundColor: hasError ? accentBg : undefined }}
    >
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Fallback Graphic / Editorial Cover if photo is not yet uploaded */}
      {(hasError || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-8 transition-opacity duration-300 ${
            hasError ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: accentBg }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#262320] pb-3 text-xs font-sans text-[#F4F0E8]">
            <span className="font-semibold tracking-wider uppercase text-[11px] text-[#722F37]">{category}</span>
            <span className="text-[10px] text-[#8E8278] uppercase font-mono">Editorial Portfolio</span>
          </div>

          {/* Center Title */}
          <div className="my-auto py-4">
            <div className="w-10 h-10 rounded-full border border-[#262320] flex items-center justify-center mb-4 bg-[#0B0A09] shadow-sm">
              <Layers className="w-4 h-4 text-[#722F37]" />
            </div>
            <h4
              className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal leading-tight"
            >
              {title}
            </h4>
            <p className="text-xs text-[#8E8278] mt-2 font-sans max-w-sm">
              {subtitle || category}
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#262320] pt-3 flex items-center justify-between text-[11px] text-[#8E8278]">
            <span>Prashanthi.B</span>
            <span className="font-semibold text-[#722F37] group-hover:text-[#F4F0E8] transition-colors">View Case Study →</span>
          </div>
        </div>
      )}
    </div>
  );
};
