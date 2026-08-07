import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import heroImg from '../../assets/hero.jpg';

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative bg-zinc-950 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img src={heroImg} alt="Blank Edition About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TENTANG BLANK EDITION</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-yellow-400 tracking-tight leading-tight uppercase">
          Setiap Pakaian Layak Memulai Edisi Baru.
        </h1>

        <p className="text-zinc-300 text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Fashion bukan hanya tentang apa yang dikenakan, tetapi juga tentang cerita, karakter, dan cara setiap orang mengekspresikan dirinya.
        </p>

        <div className="pt-8 flex justify-center">
          <a href="#filosofi" className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
