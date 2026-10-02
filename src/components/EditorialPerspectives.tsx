import React, { useState } from 'react';
import { Feather, Sparkles, Clock, Filter, BookOpen } from 'lucide-react';
import { EDITORIAL_TOPICS } from '../data/portfolioData';

export const EditorialPerspectives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'RETAIL', 'BRANDS', 'CONSUMER', 'MERCHANDISING', 'FASHION'];

  const filteredTopics =
    selectedCategory === 'ALL'
      ? EDITORIAL_TOPICS
      : EDITORIAL_TOPICS.filter((t) => t.category === selectedCategory);

  return (
    <section id="editorial" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#2E2520] bg-[#17120F] text-[#F3EFE7]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2E2520]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#5A2028] uppercase font-semibold">
            <Feather className="w-4 h-4" />
            <span>05 / PERSPECTIVES</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F3EFE7] tracking-tight">
            Perspectives
          </h2>
        </div>
        <div className="max-w-md space-y-2">
          <p className="text-sm text-[#C8C0B5]/70 leading-relaxed">
            Upcoming commentary and observations on retail spatial design, luxury brand universes, and merchandise planning.
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#F3EFE7] bg-[#5A2028] px-2.5 py-1 rounded-none font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#F3EFE7]" />
            <span>Perspectives coming soon</span>
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="pt-10 pb-8 flex items-center justify-between flex-wrap gap-4 border-b border-[#2E2520]">
        <div className="flex items-center gap-2 font-mono text-xs text-[#C8C0B5]/60">
          <Filter className="w-3.5 h-3.5 text-[#5A2028]" />
          <span>Filter by Field:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-all rounded-none ${
                selectedCategory === cat
                  ? 'bg-[#5A2028] text-[#F3EFE7] font-semibold'
                  : 'bg-[#221B17] text-[#C8C0B5]/70 hover:text-[#F3EFE7] border border-[#2E2520]'
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
            className="p-8 bg-[#221B17] border border-[#2E2520] rounded-none flex flex-col justify-between space-y-6 hover:border-[#5A2028] transition-all duration-300 shadow-md"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2E2520]">
                <span className="font-mono text-xs font-semibold text-[#5A2028] tracking-widest">
                  TOPIC {topic.number}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#C8C0B5] uppercase bg-[#17120F] px-2 py-0.5 rounded-none border border-[#2E2520]">
                  {topic.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE7] font-normal leading-snug">
                {topic.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#C8C0B5]/70 leading-relaxed font-sans">
                {topic.theme}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2E2520] flex items-center justify-between text-xs font-mono text-[#C8C0B5]/60">
              <span className="tracking-widest uppercase text-[#5A2028] flex items-center gap-1.5 font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                In Preparation
              </span>
              <span className="text-[10px] uppercase text-[#C8C0B5]/40">
                {topic.readEstimate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Framework Banner */}
      <div className="mt-12 p-5 bg-[#221B17] border border-[#2E2520] rounded-none flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C8C0B5]/70">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-[#5A2028] shrink-0" />
          <span>Editorial publication index ready for future research essays and market commentary.</span>
        </div>
        <span className="font-mono text-[10px] uppercase text-[#5A2028] shrink-0 font-semibold">
          PUBLICATION ARCHITECTURE READY
        </span>
      </div>
    </section>
  );
};
