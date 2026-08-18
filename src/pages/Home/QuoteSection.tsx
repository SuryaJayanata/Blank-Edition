import React from 'react';
import ceoImg from '../../assets/ceo_portrait.jpg';
import lookbook1 from '../../assets/lookbook_1.jpg';
import lookbook2 from '../../assets/lookbook_2.jpg';
import lookbook3 from '../../assets/lookbook_3.jpg';
import lookbook4 from '../../assets/lookbook_4.jpg';
import lookbook5 from '../../assets/lookbook_5.jpg';
import jaketInkuImg from '../../assets/jaket_inku.jpg';
import blokmetalImg from '../../assets/blokmetal.jpg';
import ceweMambaImg from '../../assets/cewe_mamba.jpg';
import coganIrengImg from '../../assets/cogan_ireng.jpg';

export const QuoteSection: React.FC = () => {
  const testimonialsTrack1 = [
    { avatar: ceoImg, text: "100% authentic preloved grails!", name: "Naufal" },
    { avatar: lookbook1, text: "The oversized fit is incredible!", name: "Daffa" },
    { avatar: lookbook2, text: "Fast shipping & sterile condition.", name: "Rian" },
    { avatar: lookbook3, text: "Best vintage shop in Indonesia!", name: "Sarah" },
    { avatar: lookbook4, text: "Def my go-to thrift store now!", name: "Clarissa" },
  ];

  const testimonialsTrack2 = [
    { avatar: lookbook5, text: "Quality is 100% as described.", name: "Bagas" },
    { avatar: jaketInkuImg, text: "Zipper details are insane!", name: "Reza" },
    { avatar: blokmetalImg, text: "Washed black aesthetic is on point!", name: "Andi" },
    { avatar: ceweMambaImg, text: "Obsessed with the leather jacket!", name: "Maya" },
    { avatar: coganIrengImg, text: "Super clean packaging & fast service.", name: "Dimas" },
  ];

  return (
    <section className="py-10 sm:py-16 bg-zinc-100 text-zinc-950 px-0 w-full overflow-hidden">
      <div className="w-full space-y-6">
        
        {/* Clean Header */}
        <div className="text-center px-4">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 tracking-tight leading-none">
            What Our Community Says
          </h2>
        </div>

        {/* Slow Running Marquee Track 1 (Left Direction) */}
        <div className="overflow-hidden select-none py-1.5">
          <div className="animate-marquee-slow space-x-3 sm:space-x-5">
            {[...testimonialsTrack1, ...testimonialsTrack1].map((item, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-2.5 rounded-full border border-zinc-300 flex items-center space-x-3 shrink-0 shadow-sm"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0"
                />
                <span className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight">
                  "{item.text}"
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slow Running Marquee Track 2 (Right Direction) */}
        <div className="overflow-hidden select-none py-1.5">
          <div className="animate-marquee-reverse-slow space-x-3 sm:space-x-5">
            {[...testimonialsTrack2, ...testimonialsTrack2].map((item, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-2.5 rounded-full border border-zinc-300 flex items-center space-x-3 shrink-0 shadow-sm"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0"
                />
                <span className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight">
                  "{item.text}"
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
