import React from 'react';
import { X, Plus } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none">
      {/* Full Black Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-lg transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Top Bar: Close Button & Size Info */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto bg-zinc-900/90 text-white border border-zinc-700 px-4 py-1.5 rounded-sm text-xs font-mono font-bold tracking-wider">
          Size {product.size} • {product.condition}
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto w-10 h-10 rounded-sm bg-zinc-900/90 hover:bg-white hover:text-black text-white flex items-center justify-center border border-zinc-700 transition-colors shadow-lg"
          title="Tutup (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center FULL IMAGE View */}
      <div 
        className="relative z-10 w-full h-full max-w-[92vw] max-h-[85vh] flex items-center justify-center pointer-events-none"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain shadow-2xl rounded-sm pointer-events-auto cursor-default"
        />
      </div>

      {/* Bottom Floating Minimal Bar: Name, Price, and Beli + Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[92vw] max-w-2xl bg-zinc-950/90 text-white border border-zinc-800 p-4 rounded-sm flex items-center justify-between gap-4 shadow-2xl backdrop-blur-md">
        <div className="truncate">
          <h3 className="font-display font-black text-sm sm:text-base text-white truncate">
            {product.name}
          </h3>
          <p className="text-xs font-mono font-bold text-yellow-400 mt-0.5">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
        </div>

        {/* Buy Button with format "Beli +" */}
        <button
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-black px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-md active:scale-95 shrink-0"
        >
          <span>Beli</span>
          <Plus className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

    </div>
  );
};
