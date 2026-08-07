import React from 'react';
import { X, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import type { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-zinc-950 text-white rounded-3xl border border-zinc-800 shadow-2xl max-w-3xl w-full overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="relative aspect-square md:aspect-auto bg-[#EFECE6] p-4 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-black text-white text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
              SIZE {product.size}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-zinc-950">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-yellow-400 uppercase tracking-widest font-bold">
              <Tag className="w-3.5 h-3.5" />
              <span>{product.category}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-2">
              {product.name}
            </h2>

            <div className="mt-4 flex items-baseline space-x-3">
              <span className="text-3xl font-black text-yellow-400 font-display">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="mt-6 space-y-2 pt-4 border-t border-zinc-800 text-xs">
              <div className="flex justify-between py-1">
                <span className="text-zinc-500 uppercase font-mono">Ukuran:</span>
                <span className="font-bold text-white uppercase">{product.size}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500 uppercase font-mono">Kondisi:</span>
                <span className="font-bold text-yellow-400">{product.condition}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500 uppercase font-mono">Jaminan:</span>
                <span className="font-bold text-zinc-300">100% Authentic Preloved</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-900">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold py-4 px-6 rounded-2xl uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xl shadow-yellow-400/10"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Tambah Ke Keranjang</span>
            </button>
            <div className="flex items-center justify-center space-x-1.5 text-[11px] text-zinc-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-yellow-400" />
              <span>Telah steril & lolos inspeksi kurasi Blank Edition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
