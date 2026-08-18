import React, { useState } from 'react';
import { ArrowLeft, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, Truck, Tag, Check, Sparkles } from 'lucide-react';
import type { CartItem, Product } from '../../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onNavigateToShop: () => void;
  onCheckoutProduct: (product: Product) => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onNavigateToShop,
  onCheckoutProduct
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [appliedPromoMsg, setAppliedPromoMsg] = useState<string | null>(null);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const isFreeShipping = subtotal >= 350000;
  const shippingFee = cartItems.length === 0 ? 0 : isFreeShipping ? 0 : 15000;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'BLANK10') {
      setDiscountPercent(10);
      setAppliedPromoMsg('Voucher BLANK10 berhasil digunakan! Hemat 10%');
    } else if (code === 'FREESHIP') {
      setDiscountPercent(5);
      setAppliedPromoMsg('Voucher FREESHIP aktif! Diskon ekstra 5%');
    } else {
      alert('Kode voucher tidak valid. Coba gunakan: BLANK10');
    }
  };

  const handleProceedCheckout = () => {
    if (cartItems.length === 0) return;
    onCheckoutProduct(cartItems[0].product);
  };

  return (
    <div className="bg-zinc-100 text-zinc-950 min-h-screen py-8 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1400px] mx-auto space-y-8">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-300 pb-4">
          <button
            onClick={onNavigateToShop}
            className="group flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Katalog</span>
          </button>

          <span className="text-xs font-mono font-bold text-zinc-500">
            Shopping Cart • {cartItems.reduce((s, i) => s + i.quantity, 0)} Items
          </span>
        </div>

        {/* Page Title */}
        <div>
          <span className="text-xs font-mono font-bold text-yellow-600 uppercase tracking-widest block mb-1">
            Your Selected Vintage & Streetwear Items
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 tracking-tight leading-none">
            Keranjang Belanja
          </h1>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart View */
          <div className="bg-white border border-zinc-950 rounded-sm p-12 text-center max-w-2xl mx-auto space-y-5 shadow-xl">
            <div className="w-20 h-20 bg-zinc-100 border border-zinc-300 rounded-full flex items-center justify-center mx-auto text-zinc-400">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h2 className="font-display font-black text-2xl text-zinc-950">
                Keranjang Belanja Anda Masih Kosong
              </h2>
              <p className="text-xs text-zinc-500 font-medium max-w-md mx-auto">
                Anda belum memilih item thrifting. Jelajahi katalog kami untuk menemukan pakaian streetwear 1-of-1 favorit Anda.
              </p>
            </div>
            <button
              onClick={onNavigateToShop}
              className="bg-black hover:bg-yellow-400 hover:text-black text-white font-extrabold px-8 py-3.5 rounded-sm text-xs uppercase tracking-wider inline-flex items-center space-x-2 transition-all shadow-md active:scale-95"
            >
              <span>Jelajahi Katalog Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Filled Cart 2-Column Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items List (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white border border-zinc-950 shadow-xl rounded-sm divide-y divide-zinc-200">
                
                {/* List Header */}
                <div className="p-4 bg-zinc-950 text-white flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Daftar Produk ({cartItems.length} Jenis)
                  </span>
                  <span className="text-xs font-mono font-bold text-yellow-400">
                    Boxy Streetwear Fit
                  </span>
                </div>

                {cartItems.map((item) => (
                  <div 
                    key={item.product.id}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white hover:bg-zinc-50/80 transition-colors"
                  >
                    {/* Image & Main Info */}
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-24 sm:w-24 sm:h-28 object-cover border border-zinc-300 rounded-sm shrink-0"
                      />
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="bg-black text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-sm">
                            Size {item.product.size}
                          </span>
                          <span className="bg-yellow-400 text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded-sm border border-black">
                            {item.product.condition}
                          </span>
                        </div>

                        <h3 className="font-display font-black text-sm sm:text-base text-zinc-950 truncate">
                          {item.product.name}
                        </h3>

                        <p className="text-xs font-mono text-zinc-500 font-bold">
                          {item.product.category}
                        </p>

                        <p className="text-sm font-black text-zinc-950 font-display pt-1">
                          Rp {item.product.price.toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls & Delete Action */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200">
                      
                      {/* Quantity Buttons */}
                      <div className="flex items-center border border-zinc-950 rounded-sm bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-8 h-8 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-black text-sm flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 text-center font-mono font-black text-xs text-zinc-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-8 h-8 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-black text-sm flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Subtotal Item & Delete Button */}
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono font-black text-zinc-950">
                          Total: Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-zinc-400 hover:text-red-600 p-1 transition-colors"
                          title="Hapus Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* Right Column: Order Summary & Voucher Box (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-6 border border-zinc-950 shadow-xl space-y-6 rounded-sm sticky top-24">
              
              <div className="flex items-center space-x-2 border-b border-zinc-950 pb-3">
                <ShoppingBag className="w-4 h-4 text-zinc-950" />
                <h3 className="font-display font-black text-sm tracking-wider uppercase text-zinc-950">
                  Ringkasan Keranjang
                </h3>
              </div>

              {/* Promo Code Input Box */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">
                  Voucher / Kode Promo Diskon
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 absolute left-3 top-2.5 text-zinc-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Coba: BLANK10"
                      className="w-full bg-zinc-50 border border-zinc-300 pl-9 pr-3 py-2 text-xs font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm uppercase"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="bg-black hover:bg-zinc-800 text-white font-extrabold px-4 py-2 text-xs rounded-sm transition-colors shrink-0"
                  >
                    Gunakan
                  </button>
                </div>

                {appliedPromoMsg && (
                  <div className="bg-yellow-100 border border-yellow-300 p-2 rounded-sm text-[11px] font-bold text-yellow-900 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                    <span>{appliedPromoMsg}</span>
                  </div>
                )}
              </div>

              {/* Price Calculation Summary Box */}
              <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span className="text-zinc-600 font-medium">Subtotal Produk:</span>
                  <span className="font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between py-1 border-b border-zinc-300 text-yellow-700 font-bold">
                    <span>Diskon Promo ({discountPercent}%):</span>
                    <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                  </div>
                )}

                <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span className="text-zinc-600 font-medium">Ongkos Kirim Express:</span>
                  <span className="font-bold text-green-700">
                    {isFreeShipping ? 'GRATIS (Order > Rp 350rb)' : `Rp ${shippingFee.toLocaleString('id-ID')}`}
                  </span>
                </div>

                <div className="flex justify-between py-2 text-sm font-black text-zinc-950 border-t border-zinc-400">
                  <span>Total Tagihan:</span>
                  <span className="text-base text-black font-display">Rp {grandTotal.toLocaleString('id-ID')}</span>
                </div>
              </div>

              {/* Primary Action Button: Proceed to Checkout */}
              <button
                onClick={handleProceedCheckout}
                className="w-full bg-black hover:bg-yellow-400 hover:text-black text-white font-black py-4 px-6 rounded-sm text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl active:scale-95 border border-black"
              >
                <span>Lanjut Ke Pemrosesan Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Trust Value Badges */}
              <div className="space-y-2 pt-2 border-t border-zinc-200 text-xs">
                <div className="flex items-center space-x-2 text-zinc-600">
                  <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span className="font-bold text-[11px]">Authenticity 100% Verified & Steril</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-600">
                  <Truck className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span className="font-bold text-[11px]">Pengiriman Ekspres Seluruh Indonesia</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
