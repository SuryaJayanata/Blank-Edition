import React, { useState } from 'react';
import { ArrowLeft, Plus, ShieldCheck, Truck, RefreshCw, ShoppingBag, Tag, Check, Store, Star, MapPin, Clock, Award, MessageCircle } from 'lucide-react';
import type { Product } from '../../types';

interface ProductDetailPageProps {
  product: Product | null;
  allProducts: Product[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  onBack,
  onAddToCart,
  onSelectProduct,
  onBuyNow
}) => {
  const [addedToast, setAddedToast] = useState(false);

  if (!product) {
    return (
      <div className="bg-zinc-100 min-h-[70vh] flex flex-col items-center justify-center p-8 text-center text-zinc-950">
        <h2 className="text-2xl font-black font-display mb-4">Produk tidak ditemukan</h2>
        <button
          onClick={onBack}
          className="bg-black text-white px-6 py-2.5 rounded-sm font-bold text-xs flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog</span>
        </button>
      </div>
    );
  }

  const handleAddToCartClick = () => {
    onAddToCart(product);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  // Related products (excluding current)
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 5);

  return (
    <div className="bg-zinc-100 text-zinc-950 min-h-screen py-5 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1700px] mx-auto space-y-5">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-300 pb-2.5">
          <button
            onClick={onBack}
            className="group flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Katalog</span>
          </button>

          <span className="text-xs font-mono font-bold text-zinc-500 hidden sm:block">
            Catalog Item #{product.id}
          </span>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Full Lookbook Image Container */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] max-h-[66vh] bg-white border border-zinc-950 shadow-md overflow-hidden group rounded-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
              />

              {/* Tag Badges Overlay */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                <span className="bg-black text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-sm shadow-md">
                  Size {product.size}
                </span>
                <span className="bg-yellow-400 text-black text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-sm shadow-md border border-black">
                  {product.condition}
                </span>
              </div>
            </div>

            {/* Thumbnail Previews */}
            <div className="grid grid-cols-4 gap-2">
              {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <div 
                  key={idx}
                  className={`h-16 sm:h-20 bg-white border cursor-pointer overflow-hidden rounded-sm ${
                    idx === 0 ? 'border-zinc-950 ring-2 ring-yellow-400' : 'border-zinc-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="preview" className="w-full h-full object-cover rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Specifications, Actions & Seller Info */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Category Tag */}
            <div className="flex items-center space-x-2 text-xs font-mono text-yellow-600 font-bold uppercase tracking-widest">
              <Tag className="w-4 h-4" />
              <span>{product.category} • 1-of-1 Grail</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight leading-none">
              {product.name}
            </h1>

            {/* Price Box */}
            <div className="flex items-baseline space-x-4 pt-2.5 border-t border-zinc-300">
              <span className="text-3xl sm:text-4xl font-black text-zinc-950 font-display">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-mono text-zinc-400 line-through font-bold">
                  Rp {product.originalPrice.toLocaleString('id-ID')}
                </span>
              )}
            </div>

            {/* Description Paragraph */}
            <div className="bg-white p-4 sm:p-5 border border-zinc-950 shadow-sm space-y-2 rounded-sm">
              <h3 className="font-display font-bold text-xs text-zinc-950 uppercase tracking-wider">
                Deskripsi & Detail Kurasi
              </h3>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                {product.description} Pakaian thrifting Blank Edition telah melalui 5 tahap inspeksi kualitas, verifikasi 100% keaslian, serta proses pembersihan & sterilisasi profesional.
              </p>
            </div>

            {/* Size & Spec Measurement Table */}
            <div className="bg-zinc-200/80 p-4 border border-zinc-300 space-y-1.5 text-xs sm:text-sm rounded-sm">
              <div className="flex justify-between py-1 border-b border-zinc-300">
                <span className="font-mono text-zinc-600">Ukuran Label:</span>
                <span className="font-bold text-zinc-950">{product.size} (Boxy Streetwear Fit)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-300">
                <span className="font-mono text-zinc-600">Rating Kondisi:</span>
                <span className="font-bold text-yellow-700">{product.condition}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-mono text-zinc-600">Garansi Layanan:</span>
                <span className="font-bold text-zinc-950">100% Preloved Steril & Original</span>
              </div>
            </div>

            {/* Action Buttons: Beli + (Routes to Checkout Page) & Masukkan Ke Keranjang */}
            <div className="space-y-3 pt-2 border-t border-zinc-300">
              
              {/* Primary Buy Button: Format "Beli +" -> Navigates to Checkout Page */}
              <button
                onClick={() => onBuyNow(product)}
                className="w-full bg-black hover:bg-yellow-400 hover:text-black text-white font-black py-4 px-6 rounded-sm text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Beli</span>
                <Plus className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Secondary Button: Masukkan Ke Keranjang */}
              <button
                onClick={handleAddToCartClick}
                className="w-full bg-white hover:bg-zinc-200 text-zinc-950 border border-zinc-950 font-bold py-3 px-6 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-zinc-950" />
                <span>Masukkan Ke Keranjang</span>
              </button>

              {/* Toast Notification */}
              {addedToast && (
                <div className="bg-yellow-400 text-black p-3 text-center text-xs font-bold font-mono flex items-center justify-center space-x-2 border border-black animate-fade-in rounded-sm">
                  <Check className="w-4 h-4" />
                  <span>Berhasil ditambahkan ke keranjang belanja!</span>
                </div>
              )}

            </div>

            {/* Value Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white p-3 border border-zinc-300 flex items-center space-x-2.5 rounded-sm">
                <Truck className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-xs font-bold text-zinc-800 leading-tight">Pengiriman Cepat ID</span>
              </div>

              <div className="bg-white p-3 border border-zinc-300 flex items-center space-x-2.5 rounded-sm">
                <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-xs font-bold text-zinc-800 leading-tight">Authenticity Verified</span>
              </div>

              <div className="bg-white p-3 border border-zinc-300 flex items-center space-x-2.5 rounded-sm">
                <RefreshCw className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="text-xs font-bold text-zinc-800 leading-tight">Garansi Retur 3 Hari</span>
              </div>
            </div>

            {/* STORE / SELLER INFORMATION CARD */}
            <div className="bg-white border border-zinc-950 p-5 sm:p-6 shadow-lg space-y-4 rounded-sm mt-6">
              
              {/* Header: Store Avatar, Name, Rating & Verified Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-3">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 bg-black text-yellow-400 flex items-center justify-center font-display font-black text-base border border-black shrink-0 rounded-sm">
                    BE
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="font-display font-black text-base sm:text-lg text-zinc-950 leading-tight">
                        Blank Edition Official Store
                      </h4>
                      <span className="text-xs font-mono font-bold text-zinc-500">®</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-zinc-600 font-semibold mt-1">
                      <span className="flex items-center text-yellow-600 font-extrabold">
                        <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-500 mr-1" />
                        4.9 (1.2k+ ulasan)
                      </span>
                      <span>•</span>
                      <span className="flex items-center text-zinc-600 font-bold">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-zinc-400" />
                        Jakarta, Indonesia
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-auto">
                  <span className="bg-green-100 text-green-800 text-xs font-extrabold px-3 py-1 border border-green-300 inline-flex items-center rounded-sm shadow-sm">
                    <Award className="w-3.5 h-3.5 mr-1.5 text-green-700" />
                    Verified Official Store
                  </span>
                </div>
              </div>

              {/* Store Statistics Row */}
              <div className="grid grid-cols-3 gap-3 text-center py-3 px-4 bg-zinc-50 border border-zinc-200 text-xs rounded-sm">
                <div>
                  <span className="block font-black text-sm sm:text-base text-zinc-950 font-display">1.2k+</span>
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Terjual</span>
                </div>
                <div>
                  <span className="block font-black text-sm sm:text-base text-zinc-950 font-display">100%</span>
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Respon Chat</span>
                </div>
                <div>
                  <span className="block font-black text-sm sm:text-base text-zinc-950 font-display flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-yellow-600" />
                    &lt; 15 mnt
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Waktu Balas</span>
                </div>
              </div>

              {/* Seller Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 border border-zinc-300 font-extrabold py-2.5 px-4 text-xs text-center flex items-center justify-center space-x-2 transition-colors rounded-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span>Chat Penjual</span>
                </a>

                <button
                  onClick={onBack}
                  className="w-full sm:flex-1 bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold py-2.5 px-4 text-xs text-center flex items-center justify-center space-x-2 transition-colors rounded-sm shadow-sm"
                >
                  <Store className="w-4 h-4 text-yellow-400" />
                  <span>Kunjungi Toko</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products Recommendation Strip */}
        <div className="pt-8 border-t border-zinc-300 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-black text-xl sm:text-2xl text-zinc-950 tracking-tight">
              You May Also Like
            </h2>
            <button
              onClick={onBack}
              className="text-xs font-mono font-bold text-zinc-600 hover:text-black"
            >
              See All Catalog →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="group bg-white border border-zinc-950 cursor-pointer overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all rounded-sm"
              >
                <div className="aspect-[3/4] overflow-hidden bg-zinc-100 p-2 rounded-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm"
                  />
                </div>
                <div className="p-3 border-t border-zinc-950 bg-white group-hover:bg-yellow-400 transition-colors flex items-center justify-between text-xs font-bold">
                  <span className="truncate pr-1">{item.name}</span>
                  <span className="font-mono shrink-0">Rp {item.price.toLocaleString('id-ID')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
