import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection } from './HeroSection';
import { CategoryGridSection } from './CategoryGridSection';
import { ShowcaseSection } from './ShowcaseSection';
import { BrandsSection } from './BrandsSection';
import { QuoteSection } from './QuoteSection';
import { FaqSection } from './FaqSection';
import type { Product } from '../../types';

interface HomePageProps {
  onShopNow: () => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onShopNow }) => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for landing page
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full">
      <HeroSection onShopNow={onShopNow} />
      <CategoryGridSection onShopNow={onShopNow} />
      <ShowcaseSection onShopNow={onShopNow} />
      <BrandsSection />
      <QuoteSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
