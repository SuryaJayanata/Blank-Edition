import React from 'react';
import { ArrowRight } from 'lucide-react';
import jaketInkuImg from '../../assets/jaket_inku.jpg';
import blokmetalImg from '../../assets/blokmetal.jpg';
import ceweMambaImg from '../../assets/cewe_mamba.jpg';
import coganIrengImg from '../../assets/cogan_ireng.jpg';
import ctaImg from '../../assets/cta_backview.jpg';

import lookbook1 from '../../assets/lookbook_1.jpg';
import lookbook2 from '../../assets/lookbook_2.jpg';
import lookbook3 from '../../assets/lookbook_3.jpg';
import lookbook4 from '../../assets/lookbook_4.jpg';
import lookbook5 from '../../assets/lookbook_5.jpg';
import type { Product } from '../../types';

interface ShowcaseSectionProps {
  onShopNow: () => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onShopNow }) => {
  const row1Items: (Product & { label: string })[] = [
    {
      id: 'rtw-1',
      name: 'Inku Windbreaker',
      label: 'Inku Windbreaker',
      tag: '',
      category: 'Jackets',
      price: 349000,
      size: 'L',
      condition: '9.5/10 Like New',
      image: jaketInkuImg,
      description: 'Jaket windbreaker vintage hitam dengan detail zipper metalik.'
    },
    {
      id: 'rtw-2',
      name: 'Blokmetal Sweatshirt',
      label: 'Blokmetal Sweatshirt',
      tag: '',
      category: 'Sweatshirts',
      price: 289000,
      size: 'XL',
      condition: '9.0/10 Excellent',
      image: blokmetalImg,
      description: 'Sweatshirt washed black gaya blokecore metalik vintage.'
    },
    {
      id: 'rtw-3',
      name: 'Mamba Leather Jacket',
      label: 'Mamba Leather Jacket',
      tag: '',
      category: 'Outerwear',
      price: 420000,
      size: 'M',
      condition: '9.8/10 Pristine',
      image: ceweMambaImg,
      description: 'Jaket kulit sintetis hitam premium edisi mamba style.'
    },
    {
      id: 'rtw-4',
      name: 'Cogan Ireng Outer',
      label: 'Cogan Ireng Outer',
      tag: '',
      category: 'Jackets',
      price: 399000,
      size: 'L',
      condition: '9.2/10 Great',
      image: coganIrengImg,
      description: 'Longsleeve jacket serba hitam berkarakter edgy minimalist.'
    },
    {
      id: 'rtw-5',
      name: 'Flame Back Hoodie',
      label: 'Flame Back Hoodie',
      tag: '',
      category: 'Hoodies',
      price: 410000,
      size: 'XL',
      condition: '9.6/10 Like New',
      image: ctaImg,
      description: 'Oversized black hoodie dengan sablon api warna kuning & merah.'
    }
  ];

  const row2Items: (Product & { label: string })[] = [
    {
      id: 'rtw-6',
      name: 'Urban Tracksuit Set',
      label: 'Urban Tracksuit Set',
      tag: '',
      category: 'Tracksuits',
      price: 350000,
      size: 'L',
      condition: '9.5/10 Like New',
      image: lookbook1,
      description: 'Oversized beige streetwear tracksuit set dengan boxy fit.'
    },
    {
      id: 'rtw-7',
      name: 'Vintage Fleece Layer',
      label: 'Vintage Fleece Layer',
      tag: '',
      category: 'Fleece Outer',
      price: 385000,
      size: 'XL',
      condition: '9.2/10 Great',
      image: lookbook2,
      description: 'Vintage fleece zip jacket dipadukan dengan wide denim jeans.'
    },
    {
      id: 'rtw-8',
      name: 'Archive Wool Coat',
      label: 'Archive Wool Coat',
      tag: '',
      category: 'Overcoats',
      price: 450000,
      size: 'M',
      condition: '9.8/10 Pristine',
      image: lookbook3,
      description: 'Classic grey wool trench coat dengan siluet lapel terstruktur.'
    },
    {
      id: 'rtw-9',
      name: 'Soft Trench Coat',
      label: 'Soft Trench Coat',
      tag: '',
      category: 'Overcoats',
      price: 420000,
      size: 'M',
      condition: '9.0/10 Excellent',
      image: lookbook4,
      description: 'Soft beige trench coat bergaya vintage khas thrifting.'
    },
    {
      id: 'rtw-10',
      name: 'Winter City Overcoat',
      label: 'Winter City Overcoat',
      tag: '',
      category: 'Overcoats',
      price: 490000,
      size: 'L',
      condition: '9.6/10 Pristine',
      image: lookbook5,
      description: 'Full-length grey winter coat layered for urban lifestyle.'
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-zinc-100 text-zinc-950 px-4 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto space-y-4">
        
        {/* Header Row: Ready-To-Wear & Button */}
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-950 leading-none">
            Ready-To-Wear
          </h2>

          <button
            onClick={onShopNow}
            className="bg-black hover:bg-yellow-400 hover:text-black text-white font-extrabold px-5 py-2 rounded-sm text-xs flex items-center space-x-2 transition-all duration-300 shadow-md group"
          >
            <span>See All Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Outer 2-Row Stacked Grid Box Container (Micro Rounded) */}
        <div className="border border-zinc-950 bg-white shadow-xl overflow-hidden rounded-sm">
          
          {/* ROW 1: 5-Column Grid Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-zinc-950">
            {row1Items.map((item, idx) => (
              <div
                key={item.id}
                onClick={onShopNow}
                className={`group flex flex-col justify-between cursor-pointer border-b lg:border-b-0 border-zinc-950 lg:border-r border-zinc-950 ${
                  idx === row1Items.length - 1 ? 'lg:border-r-0' : ''
                } bg-zinc-100 hover:bg-white transition-colors duration-300`}
              >
                {/* Full-Body Fashion Model Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
                  />
                </div>

                {/* Bottom Info Bar: Name on Left, Price on Right */}
                <div className="border-t border-zinc-950 p-3 bg-white group-hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-between text-xs font-bold tracking-tight text-zinc-950">
                  <span className="truncate pr-2 font-display">
                    {item.label}
                  </span>
                  <span className="shrink-0 font-mono font-extrabold">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2: 5-Column Grid Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {row2Items.map((item, idx) => (
              <div
                key={item.id}
                onClick={onShopNow}
                className={`group flex flex-col justify-between cursor-pointer border-b lg:border-b-0 border-zinc-950 lg:border-r border-zinc-950 ${
                  idx === row2Items.length - 1 ? 'lg:border-r-0' : ''
                } bg-zinc-100 hover:bg-white transition-colors duration-300`}
              >
                {/* Full-Body Fashion Model Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
                  />
                </div>

                {/* Bottom Info Bar: Name on Left, Price on Right */}
                <div className="border-t border-zinc-950 p-3 bg-white group-hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-between text-xs font-bold tracking-tight text-zinc-950">
                  <span className="truncate pr-2 font-display">
                    {item.label}
                  </span>
                  <span className="shrink-0 font-mono font-extrabold">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};