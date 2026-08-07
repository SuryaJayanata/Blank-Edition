import React from 'react';
import showcaseTrioImg from '../../assets/showcase_trio.jpg';
import coganIrengImg from '../../assets/cogan_ireng.jpg';
import lookbook2 from '../../assets/lookbook_2.jpg';
import blokmetalImg from '../../assets/blokmetal.jpg';
import jaketInkuImg from '../../assets/jaket_inku.jpg';

interface CategoryGridSectionProps {
  onShopNow: () => void;
}

export const CategoryGridSection: React.FC<CategoryGridSectionProps> = ({ onShopNow }) => {
  return (
    <section className="bg-zinc-100 text-zinc-950 py-12 px-4 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Category Mosaic 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Left Column: Main Tall Category Card (6 cols) */}
          <div 
            onClick={onShopNow}
            className="lg:col-span-6 relative h-[480px] sm:h-[580px] lg:h-[620px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-2xl border border-zinc-300/80"
          >
            <img
              src={showcaseTrioImg}
              alt="Archive Tees Streetwear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Right Giant Typography */}
            <div className="absolute bottom-6 right-6 z-10 text-right">
              <h3 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight group-hover:text-yellow-400 transition-colors drop-shadow-md">
                ARCHIVE TEE'S
              </h3>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Category Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tile 1: Top Left */}
            <div 
              onClick={onShopNow}
              className="relative h-[230px] sm:h-[280px] lg:h-[300px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-xl border border-zinc-300/80"
            >
              <img
                src={coganIrengImg}
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 right-4 z-10 text-right">
                <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
                  ACCESSORIES
                </h4>
              </div>
            </div>

            {/* Tile 2: Top Right */}
            <div 
              onClick={onShopNow}
              className="relative h-[230px] sm:h-[280px] lg:h-[300px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-xl border border-zinc-300/80"
            >
              <img
                src={lookbook2}
                alt="Bottoms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 right-4 z-10 text-right">
                <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
                  BOTTOMS
                </h4>
              </div>
            </div>

            {/* Tile 3: Bottom Left */}
            <div 
              onClick={onShopNow}
              className="relative h-[230px] sm:h-[280px] lg:h-[300px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-xl border border-zinc-300/80"
            >
              <img
                src={blokmetalImg}
                alt="Wild Sweaters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 right-4 z-10 text-right">
                <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none tracking-tight group-hover:text-yellow-400 transition-colors leading-tight">
                  WILD SWEATERS
                </h4>
              </div>
            </div>

            {/* Tile 4: Bottom Right */}
            <div 
              onClick={onShopNow}
              className="relative h-[230px] sm:h-[280px] lg:h-[300px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-xl border border-zinc-300/80"
            >
              <img
                src={jaketInkuImg}
                alt="Jackets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 right-4 z-10 text-right">
                <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
                  JACKETS
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
