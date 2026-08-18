import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroImg from '../../assets/hero.jpg';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full bg-zinc-100 text-zinc-950 pt-4 pb-8 overflow-hidden select-none">
      
      {/* 1. Giant Headline with Thinner Organic 3D Wrapped Yellow Marker Lines */}
      <div className="w-full px-4 sm:px-8 lg:px-12 text-center mb-4 relative">
        
        {/* Relative Text Container */}
        <div className="relative inline-block w-full">
          
          {/* LAYER 1 (BEHIND TEXT): Top Arc of Thinner Yellow Marker Loop */}
          <svg 
            className="absolute top-0 sm:top-1 left-1/2 -translate-x-1/2 w-[96%] sm:w-[86%] h-[50%] text-yellow-400 pointer-events-none z-[5] opacity-90"
            viewBox="0 0 500 130"
            fill="none"
            stroke="currentColor"
          >
            <path 
              d="M 15 70 C 10 12 490 8 485 70" 
              strokeWidth="4"
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>

          {/* Headline Text */}
          <h1 className="font-display font-black text-[11.5vw] sm:text-[12.5vw] leading-[0.82] tracking-tighter uppercase text-zinc-950 relative z-10">
            BLANK<br />EDITION
          </h1>

          {/* LAYER 2 (IN FRONT OF TEXT): Bottom Arc of Thinner Yellow Marker Loop */}
          <svg 
            className="absolute top-0 sm:top-1 left-1/2 -translate-x-1/2 w-[96%] sm:w-[86%] h-[50%] text-yellow-400 pointer-events-none z-20 opacity-95"
            viewBox="0 0 500 130"
            fill="none"
            stroke="currentColor"
          >
            <path 
              d="M 485 70 C 480 122 20 118 25 70 C 30 35 220 30 460 52" 
              strokeWidth="4"
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>

          {/* Thinner Hand-Drawn Yellow Marker Double Underline Stroke under EDITION */}
          <svg 
            className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[86%] sm:w-[66%] h-6 sm:h-10 text-yellow-400 pointer-events-none z-20 opacity-95"
            viewBox="0 0 500 40" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              d="M 10 16 Q 250 32 490 12 M 35 28 Q 265 38 465 22" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
            />
          </svg>

        </div>

        {/* Sub-headline Bar */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-600 font-bold uppercase tracking-wider mt-3 pt-2.5 border-t border-zinc-300/80 px-2">
          <span>CURATED THRIFT & STREETWEAR</span>
          <div className="hidden sm:flex items-center space-x-2 text-zinc-400">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>EXPLORE COLLECTION</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Image Container (Micro Rounded) */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div 
          onClick={onShopNow}
          className="relative w-full h-[52vh] min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden cursor-pointer shadow-xl border border-zinc-300/80 group"
        >
          {/* Hero Image */}
          <img
            src={heroImg}
            alt="Blank Edition Streetwear Hero"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          {/* Original Graphic Overlay inside Image */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-10 space-y-3 max-w-lg">
            {/* Bold Original Highlight Overlay Title */}
            <div className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-none drop-shadow-lg">
              <span>DEFINE </span>
              <span className="text-yellow-400">YOUR</span>
              <br />
              <span>NEXT EDITION</span>
            </div>

            {/* Outlined Rectangular Button */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onShopNow();
                }}
                className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-extrabold px-5 py-2.5 rounded-sm text-xs tracking-widest transition-all duration-300 shadow-lg active:scale-95"
              >
                EXPLORE NEW DROPS
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
