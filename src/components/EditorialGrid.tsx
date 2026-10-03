import React from 'react';

export const EditorialGrid: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-4 md:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full border-r border-[#F4F0E8]/[0.03] ${
              i === 0 ? 'border-l border-[#F4F0E8]/[0.03]' : ''
            } ${i >= 4 ? 'hidden md:block' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
