import React from 'react';
import { Compass, CheckCircle2, Flame, Leaf, BookOpen } from 'lucide-react';

export const BrandValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Awal Baru',
      description: 'Setiap pakaian berhak mendapatkan kesempatan untuk dikenakan kembali dan menjadi bagian dari perjalanan hidup seseorang.',
      icon: Compass
    },
    {
      title: 'Kurasi Berkualitas',
      description: 'Kami memilih setiap koleksi berdasarkan kualitas bahan, kondisi, desain, dan karakter sehingga setiap produk memiliki nilai lebih.',
      icon: CheckCircle2
    },
    {
      title: 'Gaya yang Autentik',
      description: 'Kami percaya bahwa gaya terbaik lahir dari kepribadian, bukan dari mengikuti tren semata.',
      icon: Flame
    },
    {
      title: 'Keberlanjutan',
      description: 'Memilih pakaian preloved adalah langkah sederhana untuk mengurangi limbah tekstil dan mendukung masa depan fashion yang lebih bertanggung jawab.',
      icon: Leaf
    },
    {
      title: 'Cerita di Setiap Helai',
      description: 'Setiap pakaian memiliki perjalanan. Blank Edition menjadi tempat di mana perjalanan tersebut dimulai kembali bersama pemilik yang baru.',
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-zinc-900 text-white px-4 sm:px-8 lg:px-12 border-y border-zinc-800 w-full">
      <div className="w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-yellow-400 uppercase">
            NILAI-NILAI BRAND
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mt-2">
            Prinsip Yang Kami Pegang
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Komitmen Blank Edition dalam setiap koleksi thrifting & streetwear yang kami kurasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div 
                key={index}
                className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-yellow-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-yellow-400 group-hover:text-black text-yellow-400 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-yellow-400 transition-colors uppercase">
                    {val.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900 text-[10px] font-mono text-zinc-600 uppercase">
                  NILAI 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
