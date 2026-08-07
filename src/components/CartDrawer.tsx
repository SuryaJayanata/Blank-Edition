import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-900 text-white border-l border-zinc-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-black border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-yellow-400" />
              <h2 className="text-lg font-bold uppercase tracking-wider font-display">
                Keranjang Belanja
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-zinc-500 py-12">
                <ShoppingBag className="w-16 h-16 stroke-[1.5] text-zinc-700 mb-4" />
                <p className="text-sm font-semibold uppercase tracking-wider">
                  Keranjang Anda Masih Kosong
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Temukan koleksi streetwear & thrifting unik kami sekarang.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.product.id}
                  className="flex items-center gap-4 bg-zinc-800/60 p-4 rounded-xl border border-zinc-700/50"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-yellow-400 text-black rounded mb-1">
                      {item.product.tag}
                    </span>
                    <h3 className="text-sm font-bold text-white truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Ukuran: {item.product.size} | {item.product.condition}
                    </p>
                    <p className="text-sm font-black text-yellow-400 mt-1">
                      Rp {item.product.price.toLocaleString('id-ID')}
                    </p>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-zinc-500 hover:text-red-400 p-1"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center border border-zinc-700 rounded bg-zinc-900">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="px-2 py-0.5 text-xs text-zinc-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-yellow-400">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="px-2 py-0.5 text-xs text-zinc-400 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-black border-t border-zinc-800 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400 uppercase tracking-wider">Total</span>
                <span className="text-xl font-extrabold text-yellow-400 font-display">
                  Rp {total.toLocaleString('id-ID')}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold py-3.5 px-6 rounded-xl uppercase tracking-wider flex items-center justify-center space-x-2 transition-all transform active:scale-95 shadow-lg shadow-yellow-400/10"
              >
                <span>Lanjut Ke Pembayaran</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
