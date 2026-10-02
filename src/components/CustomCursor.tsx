import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [renderedPos, setRenderedPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animFrame = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isVisible]);

  useEffect(() => {
    const loop = () => {
      setRenderedPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animFrame.current = requestAnimationFrame(loop);
    };
    animFrame.current = requestAnimationFrame(loop);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [position]);

  if (!isVisible) return null;

  const hasText = cursorText.length > 0;

  return (
    <>
      {/* Outer Follower */}
      <div
        className={`fixed top-0 left-0 pointer-events-none select-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out ${
          hasText
            ? 'w-16 h-16 bg-[#17120F] text-[#F3EFE7] border border-[#5A2028] shadow-2xl scale-100'
            : isHovered
            ? 'w-8 h-8 border border-[#5A2028] bg-[#5A2028]/10'
            : 'w-3.5 h-3.5 border border-[#A99578]/50 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${renderedPos.x}px, ${renderedPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {hasText && (
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#C8C0B5] font-semibold text-center px-1">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Point */}
      <div
        className="fixed top-0 left-0 pointer-events-none select-none z-[10000] w-1.5 h-1.5 rounded-full bg-[#A99578] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
