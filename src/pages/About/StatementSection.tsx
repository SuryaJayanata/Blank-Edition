import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StatementSectionProps {
  onShopNow: () => void;
}

export const StatementSection: React.FC<StatementSectionProps> = ({ onShopNow }) => {
  return (
    <section className="py-20 bg-zinc-950 text-white px-4 sm:px-8 lg:px-12 w-full">
      <div className="w-full text-center space-y-8 bg-gradient-to-b from-zinc-900 to-black p-8 sm:p-16 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        
        <div className="inline-flex items-center space-x-2 text-yellow-400 font-mono text-xs uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/20">
          <Sparkles className="w-4 h-4" />
          <span>BRAND STATEMENT</span>
        </div>

        <blockquote className="font-display font-bold text-xl sm:text-3xl text-zinc-200 leading-relaxed max-w-5xl mx-auto">
          "Blank Edition percaya bahwa setiap pakaian memiliki cerita yang layak untuk diteruskan. Melalui koleksi yang dikurasi dengan cermat, kami menghadirkan kesempatan bagi setiap orang untuk menemukan gaya yang autentik sekaligus memberi kehidupan baru pada setiap helai pakaian."
        </blockquote>

        <div className="pt-4 space-y-2">
          <h3 className="font-display font-black text-3xl sm:text-5xl text-yellow-400 tracking-tight uppercase">
            Wear Your Next Story.
          </h3>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
            Blank Edition — Every Piece, A New Edition.
          </p>
        </div>

        <div className="pt-6">
          <button
            onClick={onShopNow}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold py-4 px-10 rounded-full text-sm uppercase tracking-widest inline-flex items-center space-x-3 transition-transform transform hover:scale-105 shadow-xl shadow-yellow-400/10"
          >
            <span>JELAJAHI KOLEKSI EDISI BARU</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
