import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  category: string;
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
  accentBg = '#F7F5F0',
  accentColor = '#171717',
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden bg-[#F0EEE8] border border-[#E8E6DF] group ${className}`}
      style={{ backgroundColor: hasError ? accentBg : undefined }}
    >
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
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
          <div className="flex items-center justify-between border-b border-black/10 pb-3 text-xs font-sans text-[#171717]">
            <span className="font-semibold tracking-wider uppercase text-[11px]">{category}</span>
            <span className="text-[10px] text-[#77736D] uppercase font-mono">Portfolio Work</span>
          </div>

          {/* Center Title */}
          <div className="my-auto py-4">
            <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center mb-4 bg-white/60">
              <Layers className="w-4 h-4 text-[#171717]" />
            </div>
            <h4
              className="font-serif text-3xl sm:text-4xl text-[#171717] font-normal leading-tight"
              style={{ color: accentColor === '#3158D4' ? '#171717' : undefined }}
            >
              {title}
            </h4>
            <p className="text-xs text-[#555555] mt-2 font-sans max-w-sm">
              Visual merchandising, range planning & retail presentation.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-black/10 pt-3 flex items-center justify-between text-[11px] text-[#77736D]">
            <span>Prashanthi B.</span>
            <span className="font-medium text-[#171717]">View Project →</span>
          </div>
        </div>
      )}
    </div>
  );
};
