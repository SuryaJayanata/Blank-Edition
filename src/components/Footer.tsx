import React from 'react';
import type { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-950 min-h-[42vh] sm:min-h-[48vh] pt-10 pb-0 px-0 border-t border-zinc-300 overflow-hidden w-full relative select-none flex flex-col justify-between items-center">
      
      {/* Top Center Small 2-Line Slogan */}
      <div className="w-full flex items-center justify-center text-center px-4 relative z-10 pt-2">
        <div className="font-display font-bold text-xs sm:text-sm lg:text-base text-zinc-900 leading-snug tracking-tight max-w-[240px] sm:max-w-xs">
          <span>The ultimate thrift</span><br />
          <span>gallery destination.</span>
        </div>
      </div>

      {/* Display Headline "Next Edition" */}
      <div className="w-full text-center select-none overflow-hidden pt-4 pb-0 -mb-3 sm:-mb-6 lg:-mb-8">
        <h1 className="font-display font-black text-[12.5vw] sm:text-[14vw] leading-[0.72] tracking-tighter text-zinc-950 block w-full text-center whitespace-nowrap px-0">
          Next Edition
        </h1>
      </div>

    </footer>
  );
};
