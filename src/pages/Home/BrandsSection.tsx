import React from 'react';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-12 bg-zinc-100 border-t border-dashed border-zinc-300 overflow-hidden w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-around sm:justify-between gap-8 md:gap-12 opacity-90">
          
          {/* Maternal Gothic Logo */}
          <div className="flex items-center space-x-2 select-none">
            <span className="font-serif italic font-black tracking-tight text-3xl sm:text-4xl text-zinc-950">
              maternal
            </span>
          </div>

          {/* Volcom Logo */}
          <div className="flex flex-col items-center space-y-1 select-none">
            <svg className="w-10 h-10 fill-zinc-950" viewBox="0 0 24 24">
              <path d="M12 2L4 12l8 10 8-10L12 2zm0 4.5l4.5 5.5L12 18.5 7.5 12 12 6.5z" />
            </svg>
            <span className="font-display font-black text-xs tracking-widest text-zinc-950 uppercase">
              VOLCOM
            </span>
          </div>

          {/* Stone Island Compass Emblem */}
          <div className="flex items-center space-x-2 select-none">
            <div className="w-12 h-12 rounded-full border-2 border-zinc-950 p-1 flex items-center justify-center">
              <svg className="w-full h-full fill-none stroke-zinc-950 stroke-[2]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" />
                <path d="M50 5 L50 95 M5 50 L95 50 M20 20 L80 80 M20 80 L80 20" />
                <circle cx="50" cy="50" r="15" fill="currentColor" />
              </svg>
            </div>
            <div className="font-display font-black text-[9px] leading-tight tracking-widest text-zinc-950 uppercase">
              STONE<br />ISLAND
            </div>
          </div>

          {/* DC Shoes Logo */}
          <div className="flex flex-col items-center select-none">
            <div className="flex items-center space-x-1 font-display font-black text-2xl text-zinc-950">
              <span className="text-3xl tracking-tighter">DC</span>
              <svg className="w-5 h-5 fill-zinc-950" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-[9px] font-black tracking-widest text-zinc-950 uppercase -mt-1">
              DCSHOECOUSA
            </span>
          </div>

          {/* Patagonia Typography Logo */}
          <div className="flex items-center select-none">
            <span className="font-serif italic font-bold tracking-tight text-3xl sm:text-4xl text-zinc-950">
              patagonia
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
