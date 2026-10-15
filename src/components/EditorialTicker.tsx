export function EditorialTicker() {
  const items = [
    'BRAND STRATEGY',
    'MARKETING & STORYTELLING',
    'VISUAL MERCHANDISING',
    'BUYING & MERCHANDISING',
  ];

  return (
    <aside 
      aria-label="Core Competencies Marquee"
      className="w-full bg-[#F1E9E1] border-y border-[#E2D8CD] overflow-hidden select-none py-2 sm:py-2.5 relative z-10"
    >
      <div className="flex w-max animate-ticker">
        {/* Render sequence twice for seamless continuous infinite loop */}
        {[0, 1].map((copyIndex) => (
          <div 
            key={copyIndex} 
            className="flex items-center shrink-0" 
            aria-hidden={copyIndex === 1 ? 'true' : undefined}
          >
            {items.map((item, idx) => (
              <span key={`${copyIndex}-${idx}`} className="flex items-center">
                <span className="font-sans font-medium text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#292323] whitespace-nowrap px-4 sm:px-6">
                  {item}
                </span>
                <span className="text-[#71343D] text-[13px] sm:text-sm font-serif select-none px-1" aria-hidden="true">
                  ✳
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
