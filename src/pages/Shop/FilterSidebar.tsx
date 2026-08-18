import React from 'react';
import { RotateCcw, Search, SlidersHorizontal, Check } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onReset: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sizes,
  selectedSize,
  setSelectedSize,
  searchQuery,
  setSearchQuery,
  onReset
}) => {
  const isFiltered = selectedCategory !== 'ALL' || selectedSize !== 'ALL' || searchQuery.trim() !== '';

  return (
    <aside className="bg-white text-zinc-950 p-5 rounded-sm border border-zinc-950 shadow-xl space-y-6 sticky top-24 z-30">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-950 pb-3">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
          <h3 className="font-display font-black text-sm tracking-wider uppercase text-zinc-950">
            Filter Katalog
          </h3>
        </div>

        {isFiltered && (
          <button
            onClick={onReset}
            className="text-[11px] font-mono font-bold text-yellow-600 hover:text-black flex items-center space-x-1 transition-colors"
            title="Reset Filter"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600">
          <span>Search Keyword</span>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search catalog..."
            className="w-full bg-zinc-100 border border-zinc-300 focus:border-zinc-950 rounded-sm pl-9 pr-3 py-2 text-xs font-bold text-zinc-950 placeholder-zinc-400 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Categories Filter List */}
      <div className="space-y-2 pt-2 border-t border-zinc-200">
        <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600">
          <span>Categories</span>
        </div>

        <div className="space-y-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-extrabold rounded-sm transition-all duration-200 border ${
                  isActive
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                    : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:bg-zinc-200 hover:border-zinc-400'
                }`}
              >
                <span>{cat === 'ALL' ? 'All Categories' : cat}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-yellow-400 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Filter Options */}
      <div className="space-y-2 pt-2 border-t border-zinc-200">
        <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-600">
          <span>Available Size</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {sizes.map((sz) => {
            const isActive = selectedSize === sz;
            return (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`py-2 text-xs font-black rounded-sm transition-all text-center border ${
                  isActive
                    ? 'bg-yellow-400 text-black border-zinc-950 shadow-sm'
                    : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-950'
                }`}
              >
                {sz === 'ALL' ? 'ALL' : sz}
              </button>
            );
          })}
        </div>
      </div>

    </aside>
  );
};
