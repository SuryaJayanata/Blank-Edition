import React from 'react';
import { Eye, Target, Check } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  const missions = [
    'Menghadirkan koleksi preloved yang telah melalui proses kurasi secara selektif.',
    'Memberikan pengalaman berbelanja yang nyaman, modern, dan terpercaya.',
    'Membantu pelanggan menemukan pakaian yang sesuai dengan karakter dan gaya mereka.',
    'Mendorong budaya fashion yang lebih sadar kualitas, berkelanjutan, dan menghargai nilai setiap pakaian.',
    'Membangun komunitas yang percaya bahwa setiap pakaian selalu memiliki kesempatan untuk memulai cerita baru.'
  ];

  return (
    <section className="py-20 bg-zinc-100 text-zinc-900 px-4 sm:px-8 lg:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
        
        {/* Visi Card (5 cols) */}
        <div className="lg:col-span-5 bg-yellow-400 rounded-3xl p-8 sm:p-12 text-black flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-black text-yellow-400 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase bg-black/10 px-3 py-1 rounded-full">
              VISI BRAND
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mt-4">
              Visi Kami
            </h2>
            <p className="text-black font-semibold text-base sm:text-lg leading-relaxed mt-4">
              Menjadi destinasi thrift fashion pilihan yang menghadirkan koleksi berkualitas, membangun gaya yang autentik, serta menginspirasi gaya hidup yang lebih berkelanjutan.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-black/20 text-xs font-bold uppercase tracking-widest">
            BLANK EDITION VISION STATEMENT
          </div>
        </div>

        {/* Misi Card (7 cols) */}
        <div className="lg:col-span-7 bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-yellow-400 flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-yellow-400 uppercase">
              MISI BRAND
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight mt-2">
              Misi Kami
            </h2>

            <ul className="mt-6 space-y-4">
              {missions.map((misi, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-zinc-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{misi}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            5 PILAR UTAMA OPERASIONAL
          </div>
        </div>

      </div>
    </section>
  );
};
