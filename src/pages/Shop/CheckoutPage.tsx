import React, { useState } from 'react';
import { ArrowLeft, Check, ArrowRight, ShieldCheck, CreditCard, QrCode, Building2, Truck, Copy, ShoppingBag, MapPin, Navigation, Sparkles, Search, Compass } from 'lucide-react';
import type { Product } from '../../types';

interface CheckoutPageProps {
  product: Product | null;
  onBack: () => void;
  onSuccess: (product: Product, qty: number) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  product,
  onBack,
  onSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<string>('Midnight Black');
  
  // Shipping Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [mapSearch, setMapSearch] = useState('');
  const [mapLocation, setMapLocation] = useState<string>('Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan');
  const [isPinningMap, setIsPinningMap] = useState<boolean>(false);

  // Payment Method State
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'bca' | 'mandiri' | 'cod'>('qris');
  const [copied, setCopied] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

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

  const variants = [
    { name: 'Midnight Black', colorHex: '#09090b' },
    { name: 'Washed Charcoal', colorHex: '#27272a' },
    { name: 'Vintage Cream', colorHex: '#f5f5f4' },
    { name: 'Raw Obsidian', colorHex: '#18181b' }
  ];

  const subtotal = product.price * quantity;
  const shippingFee = subtotal >= 350000 ? 0 : 15000;
  const grandTotal = subtotal + shippingFee;
  const orderId = `BE-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleNext = () => {
    if (step === 2) {
      if (!name || !phone || !address) {
        alert('Mohon lengkapi nama, nomor telepon, dan alamat pengiriman.');
        return;
      }
    }
    if (step < 4) {
      setStep((prev) => (prev + 1) as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBack();
    }
  };

  const handleCopyVA = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUseCurrentLocation = () => {
    setIsPinningMap(true);
    setTimeout(() => {
      setMapLocation('Jl. Jend. Sudirman No. 45, SCBD, Kebayoran Baru, Jakarta Selatan');
      setCity('Jakarta Selatan, Kebayoran Baru');
      setAddress('Jl. Jend. Sudirman No. 45, Gedung SCBD Tower Lt. 12');
      setIsPinningMap(false);
    }, 1000);
  };

  const handleSearchMap = () => {
    if (mapSearch.trim()) {
      setMapLocation(mapSearch);
      setAddress(mapSearch);
    }
  };

  const handleConfirmPayment = () => {
    setIsSuccessModalOpen(true);
  };

  const handleFinishModal = () => {
    setIsSuccessModalOpen(false);
    onSuccess(product, quantity);
  };

  return (
    <div className="bg-zinc-100 text-zinc-950 min-h-screen py-8 px-4 sm:px-8 lg:px-12 w-full relative">
      <div className="max-w-[1400px] mx-auto space-y-8">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-300 pb-4">
          <button
            onClick={handleBackStep}
            className="group flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{step === 1 ? 'Kembali ke Detail Produk' : 'Langkah Sebelumnya'}</span>
          </button>

          <span className="text-xs font-mono font-bold text-zinc-500">
            Checkout Transaction #{orderId}
          </span>
        </div>

        {/* Header Title */}
        <div>
          <span className="text-xs font-mono font-bold text-yellow-600 uppercase tracking-widest block mb-1">
            Blank Edition Checkout Processing Page
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 tracking-tight leading-none">
            {step === 1 && '1. Konfirmasi Kuantitas & Varian Warna'}
            {step === 2 && '2. Alamat & Pin Google Maps'}
            {step === 3 && '3. Pilih Metode Pembayaran'}
            {step === 4 && '4. Ringkasan & Konfirmasi Pembayaran'}
          </h1>
        </div>

        {/* 4-Step Progress Wizard Bar */}
        <div className="grid grid-cols-4 bg-white border border-zinc-950 shadow-md text-center text-xs font-mono font-bold uppercase rounded-sm overflow-hidden">
          <div className={`py-3 border-r border-zinc-300 ${step >= 1 ? 'bg-black text-yellow-400' : 'text-zinc-400'}`}>
            1. Varian & Qty
          </div>
          <div className={`py-3 border-r border-zinc-300 ${step >= 2 ? 'bg-black text-yellow-400' : 'text-zinc-400'}`}>
            2. Alamat & Map
          </div>
          <div className={`py-3 border-r border-zinc-300 ${step >= 3 ? 'bg-black text-yellow-400' : 'text-zinc-400'}`}>
            3. Pembayaran
          </div>
          <div className={`py-3 ${step >= 4 ? 'bg-yellow-400 text-black font-extrabold' : 'text-zinc-400'}`}>
            4. Konfirmasi
          </div>
        </div>

        {/* Main Grid Content Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Step Workflow (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-zinc-950 shadow-xl space-y-6 rounded-sm">
            
            {/* STEP 1: QUANTITY & COLOR VARIANT SELECTOR */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Product Card Row */}
                <div className="flex items-center space-x-4 p-4 bg-zinc-50 border border-zinc-300 rounded-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-28 object-cover border border-zinc-400 rounded-sm shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-xs font-mono font-bold text-yellow-700 uppercase tracking-widest block">
                      {product.category} • Size {product.size}
                    </span>
                    <h3 className="font-display font-black text-lg text-zinc-950 truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs font-bold text-zinc-600">
                      Kondisi: {product.condition}
                    </p>
                    <p className="text-base font-black text-zinc-950 font-display pt-1">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                {/* Color Variant Option Selector */}
                <div className="bg-zinc-50 p-5 border border-zinc-300 rounded-sm space-y-3">
                  <label className="block text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider">
                    Pilih Varian Warna / Finish
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {variants.map((v) => {
                      const isActive = selectedVariant === v.name;
                      return (
                        <button
                          key={v.name}
                          onClick={() => setSelectedVariant(v.name)}
                          className={`p-3 text-xs font-extrabold flex flex-col items-center justify-center space-y-2 border transition-all rounded-sm ${
                            isActive
                              ? 'bg-zinc-950 text-white border-zinc-950 shadow-md ring-2 ring-yellow-400'
                              : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500'
                          }`}
                        >
                          <span 
                            className="w-5 h-5 rounded-full border border-zinc-400 shadow-inner" 
                            style={{ backgroundColor: v.colorHex }}
                          />
                          <span className="text-[11px] text-center font-bold truncate">{v.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="bg-zinc-50 p-5 border border-zinc-300 rounded-sm space-y-3">
                  <label className="block text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider">
                    Pilih Jumlah Kuantitas Pembelian
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-zinc-800">Jumlah Beli:</span>
                    <div className="flex items-center border border-zinc-950 rounded-sm bg-white">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-10 h-10 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-black text-lg flex items-center justify-center transition-colors"
                      >
                        -
                      </button>
                      <span className="w-14 text-center font-mono font-black text-base text-zinc-950">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-10 h-10 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-black text-lg flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: SHIPPING ADDRESS & LIGHT CLEAN GOOGLE MAPS CARD */}
            {step === 2 && (
              <div className="space-y-5">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-sm text-xs text-blue-900 font-medium">
                  Tentukan alamat pengiriman secara presisi dengan mencari nama jalan atau menandai titik di Google Maps.
                </div>

                {/* Light Modern Google Maps Address Card */}
                <div className="bg-white border border-zinc-300 p-4 rounded-sm space-y-3 shadow-md">
                  
                  {/* Google Maps Header & Search Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center space-x-2">
                      <Compass className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
                        Google Maps Location Pin
                      </span>
                    </div>

                    <button
                      onClick={handleUseCurrentLocation}
                      disabled={isPinningMap}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-sm flex items-center justify-center space-x-1.5 transition-colors shrink-0 shadow-sm"
                    >
                      <Navigation className={`w-3.5 h-3.5 ${isPinningMap ? 'animate-spin' : ''}`} />
                      <span>{isPinningMap ? 'Mendeteksi GPS...' : 'Lokasi Saya Saat Ini'}</span>
                    </button>
                  </div>

                  {/* Map Search Input */}
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-400" />
                      <input
                        type="text"
                        value={mapSearch}
                        onChange={(e) => setMapSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearchMap()}
                        placeholder="Cari jalan, patokan, atau nama gedung di Google Maps..."
                        className="w-full bg-zinc-50 border border-zinc-300 pl-9 pr-3 py-2 text-xs font-medium text-zinc-950 focus:outline-none focus:border-blue-600 rounded-sm"
                      />
                    </div>
                    <button
                      onClick={handleSearchMap}
                      className="bg-zinc-900 text-white font-bold px-3 py-2 rounded-sm text-xs"
                    >
                      Cari
                    </button>
                  </div>

                  {/* Realistic Light Vector Map Canvas */}
                  <div className="relative h-44 bg-[#e8ecef] border border-zinc-300 rounded-sm overflow-hidden flex items-center justify-center">
                    
                    {/* Light Map Background Vectors (Roads, Green Parks, Rivers) */}
                    <div className="absolute inset-0 bg-[#f4f3f0]">
                      {/* Park Green Areas */}
                      <div className="absolute top-2 left-4 w-28 h-20 bg-[#d7e8d5] rounded-xl opacity-70" />
                      <div className="absolute bottom-3 right-6 w-36 h-16 bg-[#d7e8d5] rounded-lg opacity-70" />
                      
                      {/* Water Blue River */}
                      <div className="absolute -top-4 right-1/4 w-12 h-56 bg-[#c5d8f6] rotate-12 opacity-80" />

                      {/* Main White Roads */}
                      <div className="absolute top-1/2 left-0 right-0 h-7 bg-white -translate-y-1/2 border-y border-zinc-200" />
                      <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white border-x border-zinc-200" />
                      <div className="absolute top-0 bottom-0 right-1/3 w-5 bg-white border-x border-zinc-200" />

                      {/* Yellow Highways */}
                      <div className="absolute top-8 left-0 right-0 h-2 bg-[#fbd59d] shadow-sm" />
                    </div>

                    {/* Centered Red Google Map Pin */}
                    <div className="z-10 text-center space-y-1.5 p-3 bg-white/95 backdrop-blur-sm border border-zinc-300 rounded-sm max-w-sm shadow-xl">
                      <div className="relative inline-block">
                        <MapPin className="w-8 h-8 text-red-600 mx-auto fill-red-500 drop-shadow-md animate-bounce" />
                        <div className="w-3 h-1 bg-black/30 rounded-full mx-auto" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-zinc-950 block leading-tight">
                          {mapLocation}
                        </span>
                        <span className="text-[10px] font-mono text-green-700 font-bold block mt-0.5">
                          ✓ Titik Presisi Google Maps Terverifikasi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-mono font-bold text-zinc-800 mb-1.5 uppercase">
                      Nama Lengkap Penerima *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-zinc-50 border border-zinc-300 p-3 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-zinc-800 mb-1.5 uppercase">
                      Nomor WhatsApp / Telepon *
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full bg-zinc-50 border border-zinc-300 p-3 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-zinc-800 mb-1.5 uppercase">
                      Kota & Kecamatan *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Contoh: Jakarta Selatan, Kebayoran Baru"
                      className="w-full bg-zinc-50 border border-zinc-300 p-3 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-zinc-800 mb-1.5 uppercase">
                      Alamat Lengkap Pengiriman *
                    </label>
                    <textarea
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Jalan, Nomor Rumah, RT/RW, Patokan..."
                      className="w-full bg-zinc-50 border border-zinc-300 p-3 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT METHOD */}
            {step === 3 && (
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider block">
                  PILIH METODE PEMBAYARAN INSTAN
                </span>

                <div className="space-y-3">
                  
                  {/* QRIS */}
                  <div 
                    onClick={() => setPaymentMethod('qris')}
                    className={`p-4 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                      paymentMethod === 'qris' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <QrCode className="w-7 h-7 text-zinc-950" />
                      <div>
                        <h4 className="font-extrabold text-sm text-zinc-950">QRIS Instant Scan</h4>
                        <p className="text-xs text-zinc-500">GoPay, OVO, ShopeePay, Dana, LinkAja, BCA Mobile</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'qris' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                      {paymentMethod === 'qris' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* BCA Virtual Account */}
                  <div 
                    onClick={() => setPaymentMethod('bca')}
                    className={`p-4 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                      paymentMethod === 'bca' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <Building2 className="w-7 h-7 text-blue-700" />
                      <div>
                        <h4 className="font-extrabold text-sm text-zinc-950">BCA Virtual Account</h4>
                        <p className="text-xs text-zinc-500">Verifikasi otomatis 24 jam</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'bca' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                      {paymentMethod === 'bca' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Mandiri VA */}
                  <div 
                    onClick={() => setPaymentMethod('mandiri')}
                    className={`p-4 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                      paymentMethod === 'mandiri' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <CreditCard className="w-7 h-7 text-amber-700" />
                      <div>
                        <h4 className="font-extrabold text-sm text-zinc-950">Bank Mandiri / BNI / BRI VA</h4>
                        <p className="text-xs text-zinc-500">Transfer Virtual Account Resmi</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'mandiri' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                      {paymentMethod === 'mandiri' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* COD */}
                  <div 
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-4 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                      paymentMethod === 'cod' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <Truck className="w-7 h-7 text-zinc-950" />
                      <div>
                        <h4 className="font-extrabold text-sm text-zinc-950">COD (Bayar Di Tempat)</h4>
                        <p className="text-xs text-zinc-500">Bayar tunai ke kurir saat paket sampai</p>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                      {paymentMethod === 'cod' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* STEP 4: ORDER INVOICE REVIEW */}
            {step === 4 && (
              <div className="space-y-6">
                
                <div className="border-b border-zinc-200 pb-3">
                  <span className="text-xs font-mono font-bold text-yellow-600 uppercase tracking-widest block">
                    TINJAUAN RINGKASAN SEBELUM KONFIRMASI
                  </span>
                  <h3 className="font-display font-black text-xl text-zinc-950 mt-1">
                    Konfirmasi Detail Transaksi Pembayaran
                  </h3>
                </div>

                {/* Final Review Card */}
                <div className="bg-zinc-50 border border-zinc-300 p-4 rounded-sm space-y-3 text-xs">
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="text-zinc-500 font-bold">Produk & Varian:</span>
                    <span className="font-extrabold text-zinc-950">{product.name} ({selectedVariant})</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="text-zinc-500 font-bold">Kuantitas:</span>
                    <span className="font-extrabold text-zinc-950">{quantity} Item</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="text-zinc-500 font-bold">Penerima & Telepon:</span>
                    <span className="font-extrabold text-zinc-950">{name || 'Budi'} • {phone || '081234567890'}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-2">
                    <span className="text-zinc-500 font-bold">Google Maps Pin:</span>
                    <span className="font-extrabold text-zinc-950 text-right truncate max-w-xs">{mapLocation}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-zinc-500 font-bold">Metode Pembayaran:</span>
                    <span className="font-extrabold uppercase text-yellow-700">{paymentMethod}</span>
                  </div>
                </div>

                {/* Notice Box */}
                <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-sm text-xs text-yellow-900 font-bold flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-yellow-600 shrink-0" />
                  <span>Klik tombol <strong>Konfirmasi Pembayaran Sekarang</strong> di bawah ini untuk memproses tagihan Anda.</span>
                </div>

              </div>
            )}

            {/* Bottom Action Navigation Buttons */}
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-4">
              {step < 4 ? (
                <>
                  <button
                    onClick={handleBackStep}
                    className="bg-white hover:bg-zinc-100 text-zinc-950 border border-zinc-400 font-extrabold px-5 py-3 rounded-sm text-xs"
                  >
                    Batal
                  </button>

                  <button
                    onClick={handleNext}
                    className="bg-black hover:bg-yellow-400 hover:text-black text-white font-black px-8 py-3 rounded-sm text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md active:scale-95"
                  >
                    <span>Lanjutkan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  onClick={handleConfirmPayment}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 px-6 rounded-sm text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-lg active:scale-95 border border-black"
                >
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>Konfirmasi Pembayaran Sekarang</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Order Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 border border-zinc-950 shadow-xl space-y-5 rounded-sm sticky top-24">
            <div className="flex items-center space-x-2 border-b border-zinc-950 pb-3">
              <ShoppingBag className="w-4 h-4 text-zinc-950" />
              <h3 className="font-display font-black text-sm tracking-wider uppercase text-zinc-950">
                Ringkasan Pesanan
              </h3>
            </div>

            <div className="flex items-center space-x-3.5 p-3 bg-zinc-50 border border-zinc-200 rounded-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-20 object-cover border border-zinc-300 rounded-sm shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono font-bold text-yellow-700 uppercase block">
                  {product.category} • Size {product.size}
                </span>
                <h4 className="font-display font-extrabold text-sm text-zinc-950 truncate">
                  {product.name}
                </h4>
                <p className="text-[11px] font-mono font-bold text-zinc-500">
                  Varian: {selectedVariant}
                </p>
                <span className="text-xs font-mono font-bold text-zinc-600 block mt-0.5">
                  Rp {product.price.toLocaleString('id-ID')} x {quantity}
                </span>
              </div>
            </div>

            <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-zinc-300">
                <span className="text-zinc-600 font-medium">Subtotal Produk:</span>
                <span className="font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-300">
                <span className="text-zinc-600 font-medium">Ongkos Kirim Express:</span>
                <span className="font-bold text-green-700">
                  {shippingFee === 0 ? 'GRATIS' : `Rp ${shippingFee.toLocaleString('id-ID')}`}
                </span>
              </div>
              <div className="flex justify-between py-2 text-sm font-black text-zinc-950 border-t border-zinc-400">
                <span>Total Bayar:</span>
                <span className="text-base text-black font-display">Rp {grandTotal.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-200 text-xs">
              <div className="flex items-center space-x-2 text-zinc-600">
                <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="font-bold text-[11px]">100% Preloved Verified & Steril</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-600">
                <Truck className="w-4 h-4 text-yellow-600 shrink-0" />
                <span className="font-bold text-[11px]">Pengiriman Ekspres Seluruh Indonesia</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* POPUP MODAL SUKSES (Opens ONLY after clicking "Konfirmasi Pembayaran Sekarang") */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-white text-zinc-950 rounded-sm border border-zinc-950 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-center animate-fade-in my-auto">
            
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-green-700 uppercase tracking-widest block">
                PEMBAYARAN BERHASIL DIKONFIRMASI!
              </span>
              <h3 className="font-display font-black text-2xl text-zinc-950 mt-1">
                Terima Kasih, {name || 'Pelanggan'}!
              </h3>
              <p className="text-xs text-zinc-600 mt-1 font-medium">
                Nomor Resi Transaksi: <span className="font-mono font-black text-zinc-950">{orderId}</span>
              </p>
            </div>

            {/* Payment Info in Modal */}
            {paymentMethod === 'qris' && (
              <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 text-center">
                <span className="text-[11px] font-mono font-bold text-zinc-800 uppercase block">SCAN QRIS UNTUK PEMBAYARAN</span>
                <div className="bg-white p-2 border border-zinc-400 inline-block">
                  <QrCode className="w-32 h-32 mx-auto text-zinc-950" />
                </div>
              </div>
            )}

            {paymentMethod === 'bca' && (
              <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 text-center">
                <span className="text-[11px] font-mono font-bold text-zinc-800 uppercase block">NOMOR VIRTUAL ACCOUNT BCA</span>
                <div className="flex items-center justify-center space-x-2 bg-white p-2.5 border border-zinc-400 font-mono font-black text-lg text-zinc-950">
                  <span>8830 8912 3456 7890</span>
                  <button
                    onClick={() => handleCopyVA('8830891234567890')}
                    className="p-1 hover:text-yellow-600"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && <span className="text-[10px] font-bold text-green-700 block">Berhasil disalin!</span>}
              </div>
            )}

            {paymentMethod === 'mandiri' && (
              <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 text-center">
                <span className="text-[11px] font-mono font-bold text-zinc-800 uppercase block">NOMOR VIRTUAL ACCOUNT MANDIRI</span>
                <div className="flex items-center justify-center space-x-2 bg-white p-2.5 border border-zinc-400 font-mono font-black text-lg text-zinc-950">
                  <span>8900 1234 5678 9012</span>
                  <button
                    onClick={() => handleCopyVA('8900123456789012')}
                    className="p-1 hover:text-yellow-600"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && <span className="text-[10px] font-bold text-green-700 block">Berhasil disalin!</span>}
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="bg-yellow-50 p-3 border border-yellow-300 rounded-sm text-xs text-yellow-900 font-bold">
                Paket COD Anda akan dikirim ke <span className="underline">{address || 'Alamat Anda'}</span>. Siapkan tunai <span className="font-mono text-black font-black">Rp {grandTotal.toLocaleString('id-ID')}</span>.
              </div>
            )}

            <button
              onClick={handleFinishModal}
              className="w-full bg-black hover:bg-yellow-400 hover:text-black text-white font-black py-3.5 px-6 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Selesai & Kembali Ke Katalog</span>
            </button>

          </div>
        </div>
      )}
    </div>
  );
};
