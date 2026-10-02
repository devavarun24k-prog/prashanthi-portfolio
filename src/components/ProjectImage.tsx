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
  accentBg = '#E8DCC6',
  accentColor: _accentColor = '#722F37',
  aspectRatio = 'aspect-[16/10]',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden bg-[#E8DCC6] border border-[#E2D5C3] group ${className}`}
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
          <div className="flex items-center justify-between border-b border-[#2C2421]/15 pb-3 text-xs font-sans text-[#2C2421]">
            <span className="font-semibold tracking-wider uppercase text-[11px] text-[#722F37]">{category}</span>
            <span className="text-[10px] text-[#8F8177] uppercase font-mono">Portfolio Work</span>
          </div>

          {/* Center Title */}
          <div className="my-auto py-4">
            <div className="w-10 h-10 rounded-full border border-[#2C2421]/15 flex items-center justify-center mb-4 bg-[#FAF6EE]/80 shadow-sm">
              <Layers className="w-4 h-4 text-[#722F37]" />
            </div>
            <h4
              className="font-serif text-3xl sm:text-4xl text-[#2C2421] font-normal leading-tight"
            >
              {title}
            </h4>
            <p className="text-xs text-[#554E48] mt-2 font-sans max-w-sm">
              Visual merchandising, range planning & retail presentation.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#2C2421]/15 pt-3 flex items-center justify-between text-[11px] text-[#8F8177]">
            <span>Prashanthi B.</span>
            <span className="font-semibold text-[#722F37]">View Project →</span>
          </div>
        </div>
      )}
    </div>
  );
};
