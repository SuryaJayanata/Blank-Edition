import React, { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { ProductGrid } from './ProductGrid';
import { ProductModal } from './ProductModal';
import type { Product } from '../../types';

import jaketInkuImg from '../../assets/jaket_inku.jpg';
import blokmetalImg from '../../assets/blokmetal.jpg';
import ceweMambaImg from '../../assets/cewe_mamba.jpg';
import coganIrengImg from '../../assets/cogan_ireng.jpg';
import ctaImg from '../../assets/cta_backview.jpg';

import lookbook1 from '../../assets/lookbook_1.jpg';
import lookbook2 from '../../assets/lookbook_2.jpg';
import lookbook3 from '../../assets/lookbook_3.jpg';
import lookbook4 from '../../assets/lookbook_4.jpg';
import lookbook5 from '../../assets/lookbook_5.jpg';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct?: (product: Product) => void;
  selectedProductFromHome?: Product | null;
  clearSelectedProductFromHome?: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onSelectProduct,
  selectedProductFromHome,
  clearSelectedProductFromHome
}) => {
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

    /* Baju Casual Category Items */
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

  const categories = ['ALL', 'Casual Wear', 'Jackets', 'Sweatshirts', 'Outerwear', 'Hoodies', 'Overcoats'];
  const sizes = ['ALL', 'M', 'L', 'XL'];

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedSize, setSelectedSize] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<Product | null>(selectedProductFromHome || null);

  const handleReset = () => {
    setSelectedCategory('ALL');
    setSelectedSize('ALL');
    setSearchQuery('');
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === 'ALL' || product.category === selectedCategory;
    const matchesSize = selectedSize === 'ALL' || product.size === selectedSize;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSize && matchesSearch;
  });

  const handleItemClick = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      setModalProduct(product);
    }
  };

  return (
    <div className="bg-zinc-100 text-zinc-950 min-h-screen py-8 px-4 sm:px-8 lg:px-12 w-full">
      <div className="max-w-[1700px] mx-auto space-y-6">
        
        {/* Header Title Bar - Compact with no sub-label */}
        <div className="border-b border-zinc-950 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-zinc-950 tracking-tight leading-none">
              Catalog Selection
            </h1>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono font-bold text-zinc-600 tracking-widest">
              Showing {filteredProducts.length} curated items
            </span>
          </div>
        </div>

        {/* Main Grid Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
          <div className="lg:col-span-3">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sizes={sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onReset={handleReset}
            />
          </div>

          <div className="lg:col-span-9">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={onAddToCart}
              onSelectProduct={handleItemClick}
            />
          </div>
        </div>

      </div>

      {/* Modal Detail View */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => {
            setModalProduct(null);
            if (clearSelectedProductFromHome) clearSelectedProductFromHome();
          }}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
};

export default ShopPage;
