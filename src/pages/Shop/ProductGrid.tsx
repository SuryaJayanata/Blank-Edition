import React from 'react';
import { Plus, Eye } from 'lucide-react';
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
      <div className="bg-white border border-zinc-950 rounded-sm p-10 text-center text-zinc-600 shadow-lg">
        <p className="text-sm font-extrabold text-zinc-950 font-display">
          Tidak ada produk yang cocok
        </p>
        <p className="text-xs text-zinc-500 mt-2 font-medium">
          Coba reset kata kunci pencarian atau ganti filter ukuran Anda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {products.map((item) => (
        <div
          key={item.id}
          className="group bg-white rounded-sm border border-zinc-950 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* Image Container (Subtle Micro Rounded Corners) */}
          <div 
            className="relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer p-2 flex items-center justify-center rounded-sm"
            onClick={() => onSelectProduct(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
            />

            {/* Size Badge */}
            <div className="absolute top-2 right-2">
              <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-sm shadow-sm">
                Size {item.size}
              </span>
            </div>

            {/* Quick View Floating Button */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProduct(item);
                }}
                className="w-8 h-8 rounded-sm bg-white text-black hover:bg-yellow-400 flex items-center justify-center shadow-md border border-zinc-400"
                title="Lihat Detail Produk"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Details & Price Bar */}
          <div className="p-3 border-t border-zinc-950 bg-white group-hover:bg-yellow-400 transition-colors duration-300 flex-1 flex flex-col justify-between space-y-3">
            <div>
              <div className="text-[10px] font-medium text-zinc-500 font-bold truncate">
                {item.category} • {item.condition}
              </div>
              <h3 
                onClick={() => onSelectProduct(item)}
                className="font-display font-extrabold text-xs sm:text-sm text-zinc-950 mt-0.5 cursor-pointer truncate"
              >
                {item.name}
              </h3>
            </div>

            <div className="pt-2 border-t border-zinc-950/20 flex items-center justify-between gap-1">
              <div>
                <span className="text-xs sm:text-sm font-black text-zinc-950 font-display">
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
              </div>

              {/* Buy Button with format "Beli +" */}
              <button
                onClick={() => onAddToCart(item)}
                className="bg-black hover:bg-zinc-900 text-white px-3 py-1.5 rounded-sm text-xs font-extrabold flex items-center space-x-1.5 transition-all shadow-sm active:scale-95 shrink-0"
              >
                <span>Beli</span>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
