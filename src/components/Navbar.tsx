import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, ArrowRight } from 'lucide-react';
import type { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  cartCount,
  onOpenCart,
  onOpenSearch
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: PageType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Shop', value: 'shop' },
    { label: 'About', value: 'about' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 text-zinc-950 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm' 
          : 'bg-zinc-100 border-b border-zinc-300/40'
      }`}
    >
      {/* Top Announcement Bar - Exact same bg-zinc-100 background */}
      <div className="bg-zinc-100 text-zinc-950 py-1.5 text-center text-[10px] sm:text-xs tracking-wider uppercase font-extrabold px-4 flex items-center justify-center gap-2 border-b border-zinc-300/40">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
        <span>Free shipping on orders over Rp 350.000 | February 2026 Edition</span>
      </div>

      {/* Main Navbar Bar */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Logo & Oval Pill Navigation Menu */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            {/* Logo */}
            <button 
              onClick={() => setCurrentPage('home')}
              className="font-display text-xl sm:text-2xl font-black tracking-tight text-zinc-950 uppercase flex items-baseline space-x-0.5 focus:outline-none"
            >
              <span>Blank Edition</span>
              <span className="text-[10px] font-mono font-bold text-zinc-500">®</span>
            </button>

            {/* Desktop Oval Pill Links */}
            <nav className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.value;
                return (
                  <button
                    key={link.value}
                    onClick={() => setCurrentPage(link.value)}
                    className={`text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'border border-zinc-950 px-4 py-1.5 rounded-full text-zinc-950 shadow-sm bg-white'
                        : 'text-zinc-700 hover:text-zinc-950 px-2 py-1.5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: Rounded Pill Search Box & Icons (User, Heart, Cart) */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            
            {/* Pill Search Bar */}
            <div 
              onClick={onOpenSearch}
              className="relative hidden sm:flex items-center cursor-pointer"
            >
              <input
                type="text"
                readOnly
                placeholder="Search..."
                className="w-40 sm:w-56 md:w-64 bg-white border border-zinc-300 rounded-full pl-4 pr-9 py-1.5 text-xs text-zinc-950 placeholder-zinc-500 focus:outline-none hover:border-zinc-950 transition-colors cursor-pointer shadow-sm"
              />
              <Search className="w-4 h-4 text-zinc-500 absolute right-3 pointer-events-none" />
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={onOpenSearch}
              className="sm:hidden p-1.5 text-zinc-950 hover:text-yellow-600 transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* User Account Icon */}
            <button
              onClick={() => setCurrentPage('shop')}
              className="p-1.5 text-zinc-950 hover:text-yellow-600 transition-colors"
              title="Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Heart Wishlist Icon with Counter */}
            <button
              onClick={() => setCurrentPage('shop')}
              className="p-1.5 text-zinc-950 hover:text-yellow-600 transition-colors relative"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1 -right-1 text-[9px] font-mono font-bold bg-zinc-200 text-zinc-950 w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>

            {/* Cart Bag Icon with Counter */}
            <button
              onClick={onOpenCart}
              className="p-1.5 text-zinc-950 hover:text-yellow-600 transition-colors relative"
              title="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1 -right-1 text-[9px] font-mono font-bold bg-black text-white w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-950"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                setCurrentPage(link.value);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                currentPage === link.value
                  ? 'bg-black text-white'
                  : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
