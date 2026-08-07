import React from 'react';
import { Filter, RotateCcw, Search } from 'lucide-react';

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
  return (
    <aside className="bg-white text-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-950 shadow-xl space-y-8 sticky top-24">
      {/* Header & Reset */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-black text-yellow-400 flex items-center justify-center">
            <Filter className="w-4 h-4" />
          </div>
          <h3 className="font-display font-extrabold text-base uppercase tracking-wider text-zinc-950">
            FILTER KATALOG
          </h3>
        </div>

        <button
          onClick={onReset}
          className="text-xs text-zinc-500 hover:text-black font-mono font-bold uppercase tracking-wider flex items-center space-x-1"
          title="Reset Filter"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RESET</span>
        </button>
      </div>

      {/* Search Input */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">
          PENCARIAN
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari jacket, hoodie, tee..."
            className="w-full bg-zinc-100 border border-zinc-300 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-zinc-950 placeholder-zinc-500 focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
          KATEGORI
        </label>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-black text-yellow-400 shadow-md'
                  : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter Pills */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-3">
          UKURAN
        </label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((sz) => (
            <button
              key={sz}
              onClick={() => setSelectedSize(sz)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                selectedSize === sz
                  ? 'bg-yellow-400 border-black text-black shadow-md'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:border-black'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
