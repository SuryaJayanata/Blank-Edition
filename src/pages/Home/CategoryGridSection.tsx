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
    <section className="bg-zinc-100 text-zinc-950 py-8 px-4 sm:px-8 lg:px-12 w-full overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Category Mosaic 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          
          {/* Left Column: Main Tall Category Card (6 cols) */}
          <div 
            onClick={onShopNow}
            className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[500px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-xl border border-zinc-300/80 rounded-sm"
          >
            <img
              src={showcaseTrioImg}
              alt="Archive Tees Streetwear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Right Typography */}
            <div className="absolute bottom-5 right-5 z-10 text-right">
              <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight group-hover:text-yellow-400 transition-colors drop-shadow-md">
                Archive Tees
              </h3>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Category Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Tile 1: Top Left */}
            <div 
              onClick={onShopNow}
              className="relative h-[180px] sm:h-[230px] lg:h-[242px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-lg border border-zinc-300/80 rounded-sm"
            >
              <img
                src={coganIrengImg}
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 right-3 z-10 text-right">
                <h4 className="font-display font-black text-xl sm:text-2xl text-white leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
                  Accessories
                </h4>
              </div>
            </div>

            {/* Tile 2: Top Right */}
            <div 
              onClick={onShopNow}
              className="relative h-[180px] sm:h-[230px] lg:h-[242px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-lg border border-zinc-300/80 rounded-sm"
            >
              <img
                src={lookbook2}
                alt="Bottoms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 right-3 z-10 text-right">
                <h4 className="font-display font-black text-xl sm:text-2xl text-white leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
                  Bottoms
                </h4>
              </div>
            </div>

            {/* Tile 3: Bottom Left */}
            <div 
              onClick={onShopNow}
              className="relative h-[180px] sm:h-[230px] lg:h-[242px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-lg border border-zinc-300/80 rounded-sm"
            >
              <img
                src={blokmetalImg}
                alt="Wild Sweaters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 right-3 z-10 text-right">
                <h4 className="font-display font-black text-xl sm:text-2xl text-white leading-none tracking-tight group-hover:text-yellow-400 transition-colors leading-tight">
                  Wild Sweaters
                </h4>
              </div>
            </div>

            {/* Tile 4: Bottom Right */}
            <div 
              onClick={onShopNow}
              className="relative h-[180px] sm:h-[230px] lg:h-[242px] overflow-hidden cursor-pointer group bg-zinc-900 shadow-lg border border-zinc-300/80 rounded-sm"
            >
              <img
                src={jaketInkuImg}
                alt="Jackets"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 right-3 z-10 text-right">
                <h4 className="font-display font-black text-xl sm:text-2xl text-white leading-none tracking-tight group-hover:text-yellow-400 transition-colors">
                  Jackets
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
