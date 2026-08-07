import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ctaImg from '../../assets/cta_backview.jpg';

interface CtaSectionProps {
  onShopNow: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onShopNow }) => {
  return (
    <section className="py-12 sm:py-20 bg-zinc-950 px-4 sm:px-8 lg:px-12 w-full">
      <div className="w-full relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-12 shadow-2xl border border-zinc-800">
        
        {/* Background Image */}
        <img
          src={ctaImg}
          alt="Blank Edition Call To Action"
          className="absolute inset-0 w-full h-full object-cover opacity-75 filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

        {/* Top Floating Info Row */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <button
            onClick={onShopNow}
            className="bg-black/90 hover:bg-yellow-400 hover:text-black text-white font-extrabold text-xs uppercase tracking-widest py-3 px-8 rounded-full border border-white/20 transition-all duration-300 flex items-center space-x-2 group shadow-xl"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="max-w-xs text-right hidden sm:block">
            <p className="text-xs text-zinc-300 font-medium leading-relaxed">
              Join our community of style enthusiasts and get access to exclusive offers, sneak peeks, & upcoming collections.
            </p>
          </div>
        </div>

        {/* Bottom Giant Yellow Typography Banner */}
        <div className="relative z-10 pt-16">
          <div className="flex items-center space-x-2 text-yellow-400 text-xs font-mono uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4 fill-yellow-400" />
            <span>BLANK EDITION — EVERY PIECE, A NEW EDITION</span>
          </div>

          <h2 
            onClick={onShopNow}
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-none text-yellow-400 tracking-tighter uppercase cursor-pointer hover:text-yellow-300 transition-colors select-none"
          >
            SHOP NOW
          </h2>
        </div>

      </div>
    </section>
  );
};
