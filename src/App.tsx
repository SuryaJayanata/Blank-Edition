import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ShopPage from './pages/Shop';
import { ProductDetailPage } from './pages/Shop/ProductDetailPage';
import { CheckoutPage } from './pages/Shop/CheckoutPage';
import { CartPage } from './pages/Shop/CartPage';
import type { PageType, CartItem, Product } from './types';
import { Search, X, Check } from 'lucide-react';

import jaketInkuImg from './assets/jaket_inku.jpg';
import blokmetalImg from './assets/blokmetal.jpg';
import ceweMambaImg from './assets/cewe_mamba.jpg';
import coganIrengImg from './assets/cogan_ireng.jpg';
import ctaImg from './assets/cta_backview.jpg';

import lookbook1 from './assets/lookbook_1.jpg';
import lookbook2 from './assets/lookbook_2.jpg';
import lookbook3 from './assets/lookbook_3.jpg';
import lookbook4 from './assets/lookbook_4.jpg';
import lookbook5 from './assets/lookbook_5.jpg';

export function App() {
  const allProducts: Product[] = [
    {
      id: 'prod-1',
      name: 'Tokyo Tech Windbreaker',
      tag: 'BLACK EDITION',
      category: 'Jackets',
      price: 349000,
      originalPrice: 450000,
      size: 'L',
      condition: '9.5/10 Like New',
      image: jaketInkuImg,
      description: 'Jaket windbreaker vintage hitam dengan detail zipper metalik dan potongan streetwear boxy fit.'
    },
    {
      id: 'prod-2',
      name: 'Oversized Acid Crewneck',
      tag: 'PRE-OWNED GRAIL',
      category: 'Sweatshirts',
      price: 289000,
      originalPrice: 380000,
      size: 'XL',
      condition: '9.0/10 Excellent',
      image: blokmetalImg,
      description: 'Sweatshirt washed black gaya blokecore metalik dengan karakter vintage yang kuat.'
    },
    {
      id: 'prod-3',
      name: 'Biker Leather Crop',
      tag: 'CURATED DROP',
      category: 'Outerwear',
      price: 420000,
      originalPrice: 550000,
      size: 'M',
      condition: '9.8/10 Pristine',
      image: ceweMambaImg,
      description: 'Jaket kulit sintetis hitam premium edisi serba hitam (mamba style) dengan potong cropped modern.'
    },
    {
      id: 'prod-4',
      name: 'Urban Tactical Outer',
      tag: 'RAW STREETWEAR',
      category: 'Jackets',
      price: 399000,
      originalPrice: 500000,
      size: 'L',
      condition: '9.2/10 Great',
      image: coganIrengImg,
      description: 'Longsleeve jacket serba hitam berkarakter edgy dan berkelas untuk tampilan maskulin minimalist.'
    },
    {
      id: 'prod-5',
      name: 'Flame Graphic Back Hoodie',
      tag: 'HOT DROP',
      category: 'Hoodies',
      price: 410000,
      originalPrice: 520000,
      size: 'XL',
      condition: '9.6/10 Like New',
      image: ctaImg,
      description: 'Oversized black hoodie dengan sablon api warna kuning & merah pada bagian punggung.'
    },
    {
      id: 'prod-casual-1',
      name: 'Casual Cream Knit Polo',
      tag: 'CASUAL WEAR',
      category: 'Casual Wear',
      price: 275000,
      originalPrice: 360000,
      size: 'M',
      condition: '9.5/10 Like New',
      image: lookbook1,
      description: 'Baju casual rajut polo warna cream santai dengan potongan minimalist boxy fit.'
    },
    {
      id: 'prod-casual-2',
      name: 'Casual Vintage Linen Shirt',
      tag: 'CASUAL WEAR',
      category: 'Casual Wear',
      price: 295000,
      originalPrice: 390000,
      size: 'L',
      condition: '9.8/10 Pristine',
      image: lookbook4,
      description: 'Kemeja casual linen vintage yang nyaman dan cocok untuk tampilan harian berkelas.'
    },
    {
      id: 'prod-casual-3',
      name: 'Casual Retro Fleece Polo',
      tag: 'CASUAL WEAR',
      category: 'Casual Wear',
      price: 320000,
      originalPrice: 420000,
      size: 'L',
      condition: '9.2/10 Great',
      image: lookbook2,
      description: 'Atasan casual retro zip polo berbahan fleece lembut untuk gaya santai dan hangat.'
    },
    {
      id: 'prod-6',
      name: 'Urban Tracksuit Set',
      tag: 'STREETWEAR SET',
      category: 'Tracksuits',
      price: 350000,
      originalPrice: 480000,
      size: 'L',
      condition: '9.5/10 Like New',
      image: lookbook1,
      description: 'Oversized beige streetwear tracksuit set dengan boxy fit.'
    },
    {
      id: 'prod-7',
      name: 'Vintage Fleece Layer',
      tag: 'RETRO FLEECE',
      category: 'Fleece Outer',
      price: 385000,
      originalPrice: 500000,
      size: 'XL',
      condition: '9.2/10 Great',
      image: lookbook2,
      description: 'Vintage fleece zip jacket dipadukan dengan wide denim jeans.'
    },
    {
      id: 'prod-8',
      name: 'Archive Wool Coat',
      tag: 'VINTAGE TRENCH',
      category: 'Overcoats',
      price: 450000,
      originalPrice: 600000,
      size: 'M',
      condition: '9.8/10 Pristine',
      image: lookbook3,
      description: 'Classic grey wool trench coat dengan siluet lapel terstruktur.'
    },
    {
      id: 'prod-9',
      name: 'Soft Trench Coat',
      tag: 'PRELOVED TRENCH',
      category: 'Overcoats',
      price: 420000,
      originalPrice: 560000,
      size: 'M',
      condition: '9.0/10 Excellent',
      image: lookbook4,
      description: 'Soft beige trench coat bergaya vintage khas thrifting.'
    },
    {
      id: 'prod-10',
      name: 'Winter City Overcoat',
      tag: 'URBAN OVERCOAT',
      category: 'Overcoats',
      price: 490000,
      originalPrice: 650000,
      size: 'L',
      condition: '9.6/10 Pristine',
      image: lookbook5,
      description: 'Full-length grey winter coat layered for urban lifestyle.'
    }
  ];

  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state with browser location URL (supports back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Helper for navigating to any browser URL path
  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Map browser path to PageType for Navbar active links
  const getPageTypeFromPath = (path: string): PageType => {
    if (path.startsWith('/shop')) return 'shop';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/product/')) return 'product-detail';
    if (path.startsWith('/checkout')) return 'checkout';
    if (path.startsWith('/cart')) return 'cart';
    return 'home';
  };

  const handleNavPageChange = (page: PageType) => {
    if (page === 'home') navigateTo('/');
    else if (page === 'shop') navigateTo('/shop');
    else if (page === 'about') navigateTo('/about');
    else if (page === 'cart') navigateTo('/cart');
  };

  // Derive active product for product-detail or checkout URLs
  let activeProduct: Product | null = null;
  if (currentPath.startsWith('/product/')) {
    const prodId = currentPath.replace('/product/', '');
    activeProduct = allProducts.find((p) => p.id === prodId) || allProducts[0];
  } else if (currentPath.startsWith('/checkout/')) {
    const prodId = currentPath.replace('/checkout/', '');
    activeProduct = allProducts.find((p) => p.id === prodId) || allProducts[0];
  } else if (currentPath === '/checkout' && cartItems.length > 0) {
    activeProduct = cartItems[0].product;
  }

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
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

  const handleOpenProductDetail = (product: Product) => {
    navigateTo(`/product/${product.id}`);
  };

  const handleOpenCheckout = (product: Product) => {
    navigateTo(`/checkout/${product.id}`);
  };

  const currentPageType = getPageTypeFromPath(currentPath);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-5 py-3 rounded-sm shadow-2xl font-bold text-xs uppercase tracking-wider flex items-center space-x-2 border border-black">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 w-full max-w-xl shadow-2xl space-y-4">
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
                className="w-full bg-black border border-zinc-700 rounded-sm pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400"
                autoFocus
              />
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  navigateTo('/shop');
                }}
                className="bg-yellow-400 text-black font-extrabold px-5 py-2 rounded-sm text-xs uppercase tracking-wider hover:bg-yellow-300 transition-colors"
              >
                Lihat di Shop
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPageType}
        setCurrentPage={handleNavPageChange}
        cartCount={totalCartCount}
        onOpenCart={() => navigateTo('/cart')}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content URL Router */}
      <main className="flex-1">
        {currentPageType === 'home' && (
          <HomePage
            onShopNow={() => navigateTo('/shop')}
            onSelectProduct={handleOpenProductDetail}
          />
        )}
        {currentPageType === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onSelectProduct={handleOpenProductDetail}
          />
        )}
        {currentPageType === 'product-detail' && (
          <ProductDetailPage
            product={activeProduct}
            allProducts={allProducts}
            onBack={() => navigateTo('/shop')}
            onAddToCart={handleAddToCart}
            onSelectProduct={handleOpenProductDetail}
            onBuyNow={handleOpenCheckout}
          />
        )}
        {currentPageType === 'checkout' && (
          <CheckoutPage
            product={activeProduct}
            onBack={() => navigateTo(`/product/${activeProduct?.id || 'prod-1'}`)}
            onSuccess={(product, qty) => {
              handleAddToCart(product, qty);
              navigateTo('/shop');
            }}
          />
        )}
        {currentPageType === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigateToShop={() => navigateTo('/shop')}
            onCheckoutProduct={(product) => handleOpenCheckout(product)}
          />
        )}
        {currentPageType === 'about' && (
          <AboutPage onShopNow={() => navigateTo('/shop')} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={handleNavPageChange} />

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
};

export default App;
