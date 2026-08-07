import React from 'react';
import type { PageType } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-950 min-h-[60vh] sm:min-h-[70vh] pt-12 pb-0 px-0 border-t border-zinc-300 overflow-hidden w-full relative select-none flex flex-col justify-between items-center">
      
      {/* Top Center Small 2-Line Slogan */}
      <div className="w-full flex items-center justify-center text-center px-4 relative z-10 pt-4">
        <div className="font-display font-bold text-sm sm:text-base lg:text-lg text-zinc-900 leading-snug tracking-tight max-w-[260px] sm:max-w-sm">
          <span>The ultimate thrift</span><br />
          <span>gallery destination.</span>
        </div>
      </div>

      {/* Humongous Single-Line Display Headline "NEXT EDITION" (Bottom Flush Cropped) */}
      <div className="w-full text-center select-none overflow-hidden pt-6 pb-0 -mb-4 sm:-mb-8 lg:-mb-12">
        <h1 className="font-display font-black text-[14vw] sm:text-[15.5vw] leading-[0.72] tracking-tighter text-zinc-950 block w-full text-center uppercase whitespace-nowrap px-0">
          NEXT EDITION
        </h1>
      </div>

    </footer>
  );
};
