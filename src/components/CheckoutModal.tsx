import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, CreditCard, QrCode, Building2, Truck, ShoppingBag, Copy, ArrowLeft } from 'lucide-react';
import type { Product } from '../types';

interface CheckoutModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  product,
  isOpen,
  onClose,
  onSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [quantity, setQuantity] = useState<number>(1);
  
  // Shipping Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  // Payment Method State
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'bca' | 'mandiri' | 'cod'>('qris');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !product) return null;

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
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  const handleCopyVA = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFinish = () => {
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Dialog Box */}
      <div className="relative bg-white text-zinc-950 rounded-sm border border-zinc-950 shadow-2xl max-w-2xl w-full overflow-hidden z-10 my-auto">
        
        {/* Header Bar */}
        <div className="bg-zinc-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center space-x-3">
            {step > 1 && step < 4 && (
              <button 
                onClick={handleBack}
                className="text-zinc-400 hover:text-white p-1"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="text-[10px] font-mono font-bold text-yellow-400 uppercase tracking-widest block">
                CHECKOUT PEMROSESAN • STEP {step} OF 4
              </span>
              <h2 className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                {step === 1 && '1. Konfirmasi Kuantitas & Produk'}
                {step === 2 && '2. Alamat & Kontak Pengiriman'}
                {step === 3 && '3. Pilih Metode Pembayaran'}
                {step === 4 && '4. Konfirmasi Pembayaran Berhasil'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-4 bg-zinc-200 text-center text-[10px] font-mono font-bold uppercase border-b border-zinc-300">
          <div className={`py-2 border-r border-zinc-300 ${step >= 1 ? 'bg-yellow-400 text-black' : 'text-zinc-500'}`}>
            1. Kuantitas
          </div>
          <div className={`py-2 border-r border-zinc-300 ${step >= 2 ? 'bg-yellow-400 text-black' : 'text-zinc-500'}`}>
            2. Alamat
          </div>
          <div className={`py-2 border-r border-zinc-300 ${step >= 3 ? 'bg-yellow-400 text-black' : 'text-zinc-500'}`}>
            3. Pembayaran
          </div>
          <div className={`py-2 ${step >= 4 ? 'bg-yellow-400 text-black' : 'text-zinc-500'}`}>
            4. Selesai
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* STEP 1: QUANTITY & PRODUCT SUMMARY */}
          {step === 1 && (
            <div className="space-y-5">
              
              {/* Product Card Row */}
              <div className="flex items-center space-x-4 p-3 bg-zinc-50 border border-zinc-300 rounded-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover border border-zinc-400 rounded-sm shrink-0"
                />
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-yellow-700 uppercase tracking-widest block">
                    {product.category} • Size {product.size}
                  </span>
                  <h3 className="font-display font-black text-base text-zinc-950 truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-zinc-600">
                    Kondisi: {product.condition}
                  </p>
                  <p className="text-sm font-black text-zinc-950 font-display">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="bg-white p-4 border border-zinc-950 rounded-sm space-y-3">
                <label className="block text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">
                  Tentukan Kuantitas Item
                </label>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-800">Jumlah Beli:</span>
                  <div className="flex items-center border border-zinc-950 rounded-sm">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-black text-base flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-mono font-black text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-black text-base flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Total Calculation Card */}
              <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span className="text-zinc-600">Subtotal Produk ({quantity}x):</span>
                  <span className="font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span className="text-zinc-600">Ongkos Kirim Express:</span>
                  <span className="font-bold text-green-700">
                    {shippingFee === 0 ? 'GRATIS (Promo Order > Rp 350rb)' : `Rp ${shippingFee.toLocaleString('id-ID')}`}
                  </span>
                </div>
                <div className="flex justify-between py-2 text-sm font-black text-zinc-950 border-t border-zinc-400">
                  <span>Total Pembayaran:</span>
                  <span className="text-base text-black font-display">Rp {grandTotal.toLocaleString('id-ID')}</span>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: SHIPPING ADDRESS & CONTACT */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-300 p-3 rounded-sm text-xs text-yellow-900 font-medium">
                Alamat ini digunakan untuk pengiriman barang via ekspedisi express.
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-mono font-bold text-zinc-700 mb-1">
                    NAMA LENGKAP PENERIMA *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-zinc-50 border border-zinc-300 p-2.5 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold text-zinc-700 mb-1">
                    NOMOR WHATSAPP / TELEPON *
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full bg-zinc-50 border border-zinc-300 p-2.5 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold text-zinc-700 mb-1">
                    KOTA & KECAMATAN *
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Contoh: Jakarta Selatan, Kebayoran Baru"
                    className="w-full bg-zinc-50 border border-zinc-300 p-2.5 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold text-zinc-700 mb-1">
                    ALAMAT LENGKAP PENGIRIMAN *
                  </label>
                  <textarea
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Jalan, Nomor Rumah, RT/RW, Patokan..."
                    className="w-full bg-zinc-50 border border-zinc-300 p-2.5 font-bold text-zinc-950 focus:outline-none focus:border-black rounded-sm"
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

              <div className="space-y-2.5">
                
                {/* QRIS */}
                <div 
                  onClick={() => setPaymentMethod('qris')}
                  className={`p-3.5 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                    paymentMethod === 'qris' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <QrCode className="w-6 h-6 text-zinc-950" />
                    <div>
                      <h4 className="font-extrabold text-xs text-zinc-950">QRIS Instant Scan</h4>
                      <p className="text-[10px] text-zinc-500">GoPay, OVO, ShopeePay, Dana, LinkAja, BCA Mobile</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'qris' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                    {paymentMethod === 'qris' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                {/* BCA Virtual Account */}
                <div 
                  onClick={() => setPaymentMethod('bca')}
                  className={`p-3.5 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                    paymentMethod === 'bca' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6 text-blue-700" />
                    <div>
                      <h4 className="font-extrabold text-xs text-zinc-950">BCA Virtual Account</h4>
                      <p className="text-[10px] text-zinc-500">Verifikasi otomatis 24 jam</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'bca' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                    {paymentMethod === 'bca' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                {/* Mandiri / BRI / BNI */}
                <div 
                  onClick={() => setPaymentMethod('mandiri')}
                  className={`p-3.5 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                    paymentMethod === 'mandiri' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-amber-700" />
                    <div>
                      <h4 className="font-extrabold text-xs text-zinc-950">Bank Mandiri / BNI / BRI VA</h4>
                      <p className="text-[10px] text-zinc-500">Transfer Virtual Account Resmi</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'mandiri' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                    {paymentMethod === 'mandiri' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

                {/* COD */}
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 border cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                    paymentMethod === 'cod' ? 'border-zinc-950 bg-yellow-50 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6 text-zinc-950" />
                    <div>
                      <h4 className="font-extrabold text-xs text-zinc-950">COD (Bayar Di Tempat)</h4>
                      <p className="text-[10px] text-zinc-500">Bayar tunai ke kurir saat paket sampai</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-black bg-black text-white' : 'border-zinc-400'}`}>
                    {paymentMethod === 'cod' && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>

              </div>

              {/* Order Amount Summary */}
              <div className="bg-zinc-950 text-white p-4 rounded-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">Total Yang Harus Dibayar</span>
                  <span className="text-lg font-black text-yellow-400 font-display">Rp {grandTotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="text-right text-[11px] font-mono text-zinc-400">
                  {quantity} Item • {shippingFee === 0 ? 'Free Shipping' : 'Express Ship'}
                </div>
              </div>

            </div>
          )}

          {/* STEP 4: ORDER CONFIRMATION & RECEIPT */}
          {step === 4 && (
            <div className="space-y-5 text-center">
              
              <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-green-700 uppercase tracking-widest block">
                  PESANAN DITERIMA & DIPROSES
                </span>
                <h3 className="font-display font-black text-xl text-zinc-950 mt-1">
                  Terima Kasih, {name || 'Pelanggan'}!
                </h3>
                <p className="text-xs text-zinc-600 mt-1 font-medium">
                  Nomor Transaksi: <span className="font-mono font-black text-zinc-950">{orderId}</span>
                </p>
              </div>

              {/* Payment Receipt Box */}
              {paymentMethod === 'qris' && (
                <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-3 max-w-sm mx-auto text-center">
                  <span className="text-xs font-mono font-bold text-zinc-800 uppercase block">SCAN QRIS UNTUK MEMBAYAR</span>
                  <div className="bg-white p-3 border border-zinc-400 inline-block">
                    <QrCode className="w-36 h-36 mx-auto text-zinc-950" />
                  </div>
                  <p className="text-[11px] font-mono text-zinc-500">Scan menggunakan aplikasi e-wallet / mobile banking Anda.</p>
                </div>
              )}

              {paymentMethod === 'bca' && (
                <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 max-w-md mx-auto text-center">
                  <span className="text-xs font-mono font-bold text-zinc-800 uppercase block">NOMOR VIRTUAL ACCOUNT BCA</span>
                  <div className="flex items-center justify-center space-x-2 bg-white p-2.5 border border-zinc-400 font-mono font-black text-lg text-zinc-950">
                    <span>8830 8912 3456 7890</span>
                    <button
                      onClick={() => handleCopyVA('8830891234567890')}
                      className="p-1 hover:text-yellow-600"
                      title="Salin Nomor"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copied && <span className="text-[10px] font-bold text-green-700 block">Berhasil disalin!</span>}
                </div>
              )}

              {paymentMethod === 'mandiri' && (
                <div className="bg-zinc-100 p-4 border border-zinc-300 rounded-sm space-y-2 max-w-md mx-auto text-center">
                  <span className="text-xs font-mono font-bold text-zinc-800 uppercase block">NOMOR VIRTUAL ACCOUNT MANDIRI</span>
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
                <div className="bg-yellow-50 p-4 border border-yellow-300 rounded-sm text-xs text-yellow-900 font-bold max-w-md mx-auto">
                  Paket Anda akan dikirim ke <span className="underline">{address}</span>. Siapkan uang tunai sebesar <span className="font-mono text-black font-black">Rp {grandTotal.toLocaleString('id-ID')}</span> saat kurir sampai.
                </div>
              )}

              {/* Order Detail Summary */}
              <div className="bg-zinc-50 p-4 border border-zinc-300 text-xs text-left space-y-1.5 font-medium max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Produk:</span>
                  <span className="font-bold text-zinc-950">{product.name} ({quantity}x)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Tujuan:</span>
                  <span className="font-bold text-zinc-950">{city || 'Indonesia'}</span>
                </div>
                <div className="flex justify-between border-t border-zinc-200 pt-1.5">
                  <span className="text-zinc-500">Total Biaya:</span>
                  <span className="font-black text-zinc-950 font-display">Rp {grandTotal.toLocaleString('id-ID')}</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Action Buttons */}
        <div className="bg-zinc-100 p-4 border-t border-zinc-300 flex items-center justify-between gap-3">
          {step < 4 ? (
            <>
              <button
                onClick={onClose}
                className="bg-white hover:bg-zinc-200 text-zinc-950 border border-zinc-400 font-bold px-4 py-2.5 rounded-sm text-xs"
              >
                Batal
              </button>

              <button
                onClick={handleNext}
                className="bg-black hover:bg-yellow-400 hover:text-black text-white font-extrabold px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md"
              >
                <span>{step === 3 ? 'Konfirmasi & Bayar' : 'Lanjutkan'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={handleFinish}
              className="w-full bg-black hover:bg-yellow-400 hover:text-black text-white font-extrabold py-3 px-6 rounded-sm text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Selesai & Kembali Ke Katalog</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
