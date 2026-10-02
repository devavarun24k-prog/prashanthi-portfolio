import React, { useState } from 'react';
import { Feather, Clock, Filter, BookOpen } from 'lucide-react';
import { EDITORIAL_TOPICS } from '../data/portfolioData';

export const EditorialPerspectives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'RETAIL', 'BRANDS', 'CONSUMER', 'MERCHANDISING', 'FASHION'];

  const filteredTopics =
    selectedCategory === 'ALL'
      ? EDITORIAL_TOPICS
      : EDITORIAL_TOPICS.filter((t) => t.category === selectedCategory);

  return (
    <section id="editorial" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262626] bg-[#0D0D0D] text-[#F5F4F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262626]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#96938D] uppercase font-semibold">
            <Feather className="w-4 h-4" />
            <span>05 / PERSPECTIVES</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F4F0] tracking-tight">
            Perspectives
          </h2>
        </div>
        <div className="max-w-md space-y-2">
          <p className="text-sm text-[#96938D] leading-relaxed">
            Upcoming commentary and observations on retail spatial design, luxury brand universes, and merchandise planning.
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#0D0D0D] bg-[#F5F4F0] px-2.5 py-1 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Perspectives coming soon</span>
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="pt-10 pb-8 flex items-center justify-between flex-wrap gap-4 border-b border-[#262626]">
        <div className="flex items-center gap-2 font-mono text-xs text-[#96938D]">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter by Field:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#F5F4F0] text-[#0D0D0D] font-semibold'
                  : 'bg-[#161616] text-[#96938D] hover:text-[#F5F4F0] border border-[#262626]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            className="p-8 bg-[#161616] border border-[#262626] flex flex-col justify-between space-y-6 hover:border-[#666666] transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="font-mono text-xs font-semibold text-[#F5F4F0] tracking-widest">
                  TOPIC {topic.number}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#96938D] uppercase bg-[#0D0D0D] px-2 py-0.5 border border-[#262626]">
                  {topic.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4F0] font-normal leading-snug">
                {topic.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#96938D] leading-relaxed font-sans">
                {topic.theme}
              </p>
            </div>

            <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono text-[#96938D]">
              <span className="tracking-widest uppercase text-[#F5F4F0] flex items-center gap-1.5 font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                In Preparation
              </span>
              <span className="text-[10px] uppercase text-[#96938D]">
                {topic.readEstimate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Framework Banner */}
      <div className="mt-12 p-5 bg-[#161616] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#96938D]">
        <div>
          <span>Editorial publication index ready for future research essays and market commentary.</span>
        </div>
        <span className="font-mono text-[10px] uppercase text-[#F5F4F0] shrink-0 font-semibold">
          PUBLICATION ARCHITECTURE READY
        </span>
      </div>
    </section>
  );
};
