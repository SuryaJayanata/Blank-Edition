import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onSelectProduct
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-white border border-zinc-950 rounded-3xl p-12 text-center text-zinc-600 shadow-xl">
        <p className="text-base font-extrabold uppercase tracking-wider text-zinc-950 font-display">
          TIDAK ADA PRODUK YANG COCOK
        </p>
        <p className="text-xs text-zinc-500 mt-2 font-medium">
          Coba reset kata kunci pencarian atau ganti filter ukuran Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="group bg-white rounded-3xl border border-zinc-950 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          {/* Image Container */}
          <div 
            className="relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer p-3 flex items-center justify-center"
            onClick={() => onSelectProduct(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Size Badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-black text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                SIZE {item.size}
              </span>
            </div>

            {/* Quick View Floating Button */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProduct(item);
                }}
                className="w-10 h-10 rounded-full bg-white text-black hover:bg-yellow-400 flex items-center justify-center shadow-lg border border-zinc-300"
                title="Lihat Detail"
              >
                <Eye className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Details & Price Bar */}
          <div className="p-5 border-t border-zinc-950 bg-white group-hover:bg-yellow-400 transition-colors duration-300 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                {item.category} • {item.condition}
              </div>
              <h3 
                onClick={() => onSelectProduct(item)}
                className="font-display font-extrabold text-xl text-zinc-950 uppercase mt-1 cursor-pointer truncate"
              >
                {item.name}
              </h3>
            </div>

            <div className="pt-2 border-t border-zinc-950/20 flex items-center justify-between">
              <div>
                <span className="text-lg font-black text-zinc-950 font-display">
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                onClick={() => onAddToCart(item)}
                className="bg-black hover:bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-md active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>+ BELI</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
