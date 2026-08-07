import React from 'react';
import { Bookmark, ShieldCheck, RefreshCw } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofi" className="py-20 bg-zinc-100 text-zinc-900 px-4 sm:px-8 lg:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Brand Story & Meaning */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            FILOSOFI & MAKNA BRAND
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-zinc-950 uppercase tracking-tight">
            Makna Di Balik Nama <span className="text-yellow-500">Blank Edition</span>
          </h2>

          <div className="prose prose-zinc max-w-none text-zinc-700 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>Blank Edition</strong> hadir dengan keyakinan bahwa setiap pakaian memiliki kesempatan untuk memulai perjalanan baru. Kami menghadirkan koleksi pakaian preloved, vintage, dan streetwear yang dipilih secara selektif berdasarkan kualitas, karakter, dan nilai estetikanya—bukan sekadar karena mengikuti tren.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-black text-yellow-400 flex items-center justify-center mb-3">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-900 uppercase">BLANK</h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Berarti <em>lembaran kosong</em> atau <em>awal yang baru</em>. Setiap pakaian tidak berhenti pada pemilik sebelumnya, melainkan siap memulai cerita baru bersama Anda.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-black text-yellow-400 flex items-center justify-center mb-3">
                  <Bookmark className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-900 uppercase">EDITION</h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Berarti <em>edisi</em> atau <em>koleksi pilihan</em>. Mencerminkan setiap pakaian yang dikurasi dengan cermat, eksklusif, dan memiliki karakter tersendiri.
                </p>
              </div>
            </div>

            <p>
              Bagi kami, pakaian bukan sekadar barang bekas. Setiap helai memiliki cerita, perjalanan, dan nilai yang layak untuk diteruskan kepada pemilik berikutnya.
            </p>
          </div>
        </div>

        {/* Right Column: Highlight Card */}
        <div className="lg:col-span-5">
          <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-2xl space-y-6 relative">
            <div className="w-12 h-12 rounded-xl bg-yellow-400 text-black flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-yellow-400 uppercase tracking-tight">
              Filosofi Utama
            </h3>

            <p className="text-zinc-300 text-sm leading-relaxed">
              Di tengah industri fashion yang bergerak begitu cepat, banyak pakaian berkualitas kehilangan nilainya hanya karena berganti musim. Kami percaya bahwa kualitas, karakter, dan desain tidak memiliki tanggal kedaluwarsa.
            </p>

            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
              <blockquote className="font-display font-bold text-lg text-white">
                "Awal baru bagi setiap pakaian, dan awal baru bagi setiap gaya."
              </blockquote>
            </div>

            <p className="text-xs text-zinc-400 font-medium">
              Blank Edition ditujukan bagi mereka yang menghargai orisinalitas, kualitas, dan gaya yang tak lekang oleh waktu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
