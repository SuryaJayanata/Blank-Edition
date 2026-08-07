import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ShopPage from './pages/Shop';
import type { PageType, CartItem, Product } from './types';
import { Search, X, Check } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductFromHome, setSelectedProductFromHome] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`${product.name} telah ditambahkan ke keranjang`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckout = () => {
    alert('Terima kasih telah berbelanja di Blank Edition! Pesanan Anda sedang diproses.');
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSelectProductFromHome = (product: Product) => {
    setSelectedProductFromHome(product);
    setCurrentPage('shop');
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-5 py-3 rounded-2xl shadow-2xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border border-black/10">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest">
                PENCARIAN BLANK EDITION
              </span>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari jaket, hoodie, vintage tee..."
                className="w-full bg-black border border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400"
                autoFocus
              />
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setCurrentPage('shop');
                }}
                className="bg-yellow-400 text-black font-extrabold px-5 py-2 rounded-xl text-xs uppercase tracking-wider hover:bg-yellow-300 transition-colors"
              >
                Lihat di Shop
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onShopNow={() => setCurrentPage('shop')}
            onSelectProduct={handleSelectProductFromHome}
          />
        )}
        {currentPage === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            selectedProductFromHome={selectedProductFromHome}
            clearSelectedProductFromHome={() => setSelectedProductFromHome(null)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onShopNow={() => setCurrentPage('shop')} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Sliding Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
