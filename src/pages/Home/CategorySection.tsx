import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import jaketInkuImg from '../../assets/jaket_inku.jpg';
import blokmetalImg from '../../assets/blokmetal.jpg';
import ceweMambaImg from '../../assets/cewe_mamba.jpg';
import coganIrengImg from '../../assets/cogan_ireng.jpg';
import type { Product } from '../../types';

interface CategorySectionProps {
  onSelectProduct: (product: Product) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectProduct }) => {
  // Transisi tombol menggunakan curve halus
  const commonBtnStyle = 'bg-transparent text-zinc-950 border border-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]';

  const items: (Product & { offsetClass: string; btnStyle: string; tag: string })[] = [
    {
      id: 'prod-1',
      name: 'Tokyo Tech Windbreaker',
      tag: 'BLACK EDITION',
      category: 'Jackets',
      price: 349000,
      size: 'L',
      condition: '9.5/10 Like New',
      image: jaketInkuImg,
      description: 'Jaket windbreaker vintage hitam dengan detail zipper metalik dan potongan streetwear boxy fit.',
      offsetClass: 'mt-0 lg:mt-8',
      btnStyle: commonBtnStyle
    },
    {
      id: 'prod-2',
      name: 'Oversized Acid Crewneck',
      tag: 'PRE-OWNED GRAIL',
      category: 'Sweatshirts',
      price: 289000,
      size: 'XL',
      condition: '9.0/10 Excellent',
      image: blokmetalImg,
      description: 'Sweatshirt washed black gaya blokecore metalik dengan karakter vintage yang kuat.',
      offsetClass: 'mt-8 sm:mt-16 lg:mt-32',
      btnStyle: commonBtnStyle
    },
    {
      id: 'prod-3',
      name: 'Biker Leather Crop',
      tag: 'CURATED DROP',
      category: 'Outerwear',
      price: 420000,
      size: 'M',
      condition: '9.8/10 Pristine',
      image: ceweMambaImg,
      description: 'Jaket kulit sintetis hitam premium edisi serba hitam (mamba style) dengan potong cropped modern.',
      offsetClass: 'mt-12 sm:mt-24 lg:mt-52',
      btnStyle: commonBtnStyle
    },
    {
      id: 'prod-4',
      name: 'Urban Tactical Outer',
      tag: 'RAW STREETWEAR',
      category: 'Jackets',
      price: 399000,
      size: 'L',
      condition: '9.2/10 Great',
      image: coganIrengImg,
      description: 'Longsleeve jacket serba hitam berkarakter edgy dan berkelas untuk tampilan maskulin minimalist.',
      offsetClass: 'mt-4 sm:mt-8 lg:mt-12',
      btnStyle: commonBtnStyle
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-zinc-100 text-zinc-900 px-6 sm:px-12 lg:px-16 w-full overflow-hidden">
      {/* SVG Clip-Path */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <clipPath id="card-notch-clip" clipPathUnits="objectBoundingBox">
            <path d="
              M 0.08,0
              H 0.69
              C 0.71,0 0.73,0.02 0.73,0.05
              V 0.16
              C 0.73,0.20 0.76,0.22 0.80,0.22
              H 0.95
              C 0.98,0.22 1,0.24 1,0.27
              V 0.92
              C 1,0.96 0.96,1 0.92,1
              H 0.08
              C 0.04,1 0,0.96 0,0.92
              V 0.08
              C 0,0.04 0.04,0 0.08,0
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Top Bar Header */}
      <div className="flex justify-between items-center text-xs font-mono font-bold text-zinc-900 mb-12 border-b border-zinc-200/60 pb-4">
        <span>2026 EDITION</span>
        <span className="tracking-widest uppercase">CURATED STREETWEAR</span>
      </div>

      {/* Main Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
        <div className="lg:col-span-6">
          <h1 className="font-sans font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-zinc-950 leading-[1.05]">
            Wear Bold,<br />Own Your Story
          </h1>
        </div>

        {/* Deskripsi & Panah Pengarah - Flush Right (mepet samping kanan) */}
        <div className="lg:col-span-6 flex items-center justify-start lg:justify-end gap-4 sm:gap-6 lg:pb-2 ml-auto w-full">
          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xs text-left lg:text-right">
            Step into a curated realm of preloved classics, vintage grails, and timeless streetwear. Every piece has a past, and every story is ready for its next edition.
          </p>

          <div className="shrink-0 text-zinc-950">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 stroke-current stroke-[2.5] fill-none" viewBox="0 0 50 50">
              <path d="M 12 12 L 38 38 M 38 38 L 18 38 M 38 38 L 38 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start pb-16">
        {items.map((item) => (
          <div
            key={item.id}
            className={`group relative ${item.offsetClass} transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-2`}
          >
            {/* Kartu Utama */}
            <div 
              onClick={() => onSelectProduct(item)}
              className="relative bg-zinc-900 text-white h-[440px] sm:h-[500px] flex flex-col justify-between p-6 cursor-pointer overflow-hidden"
              style={{
                clipPath: 'url(#card-notch-clip)',
                WebkitClipPath: 'url(#card-notch-clip)'
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Konten Bagian Bawah Kartu */}
              <div className="relative z-10 mt-auto space-y-2">
                <div>
                  <span className="inline-block bg-white text-zinc-900 text-xs font-medium px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white leading-snug">
                  {item.name}
                </h3>
              </div>
            </div>

            {/* Tombol Circle Arrow dengan Micro-bounce Effect */}
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 pointer-events-auto">
              <button
                onClick={() => onSelectProduct(item)}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${item.btnStyle}`}
              >
                <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.2] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-45 group-hover:scale-110" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};