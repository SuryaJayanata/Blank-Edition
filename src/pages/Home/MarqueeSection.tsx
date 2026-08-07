import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeSection: React.FC = () => {
  const items = Array(12).fill('Discount 20%');

  return (
    <section className="bg-yellow-400 py-4 border-y border-black overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {items.map((text, index) => (
          <div key={index} className="flex items-center space-x-6 mx-4">
            <span className="font-display font-extrabold text-2xl sm:text-4xl text-black tracking-tight uppercase">
              {text}
            </span>
            <div className="w-8 h-8 rounded-full bg-black text-yellow-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        ))}

        {/* Duplicate set for seamless continuous marquee */}
        {items.map((text, index) => (
          <div key={`dup-${index}`} className="flex items-center space-x-6 mx-4">
            <span className="font-display font-extrabold text-2xl sm:text-4xl text-black tracking-tight uppercase">
              {text}
            </span>
            <div className="w-8 h-8 rounded-full bg-black text-yellow-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
