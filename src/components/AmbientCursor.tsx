import React, { useEffect, useRef } from 'react';

export const AmbientCursor: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad) and when reduced motion is not preferred
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (!isFinePointer || !prefersMotion) return;

    const glowEl = glowRef.current;
    if (!glowEl) return;

    let curX = -500;
    let curY = -500;
    let targetX = -500;
    let targetY = -500;
    let curScale = 1;
    let targetScale = 1;
    let isHoveringInteractive = false;
    let rafId: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Check if hovering an interactive element for responsive hover feedback
      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target &&
        (target.closest('a, button, [role="button"], input, textarea, select, [tabindex="0"]') ||
         window.getComputedStyle(target).cursor === 'pointer')
      );

      if (isInteractive !== isHoveringInteractive) {
        isHoveringInteractive = isInteractive;
        targetScale = isInteractive ? 1.18 : 1.0;
        glowEl.style.opacity = isInteractive ? '0.24' : '0.16';
      } else if (glowEl.style.opacity === '0' || !glowEl.style.opacity) {
        glowEl.style.opacity = '0.16';
      }

      if (rafId === null) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const onMouseLeave = () => {
      if (glowEl) {
        glowEl.style.opacity = '0';
      }
    };

    const updatePosition = () => {
      // Smooth lerp following mouse movement
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      curScale += (targetScale - curScale) * 0.12;

      if (glowEl) {
        glowEl.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, 0) translate(-50%, -50%) scale(${curScale.toFixed(2)})`;
      }

      const dist = Math.hypot(targetX - curX, targetY - curY);
      const scaleDiff = Math.abs(targetScale - curScale);

      if (dist > 0.15 || scaleDiff > 0.01) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        rafId = null;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-ambient-glow"
      aria-hidden="true"
    />
  );
};
