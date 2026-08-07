import React from 'react';
import { AboutHeroSection } from './AboutHeroSection';
import { PhilosophySection } from './PhilosophySection';
import { BrandValuesSection } from './BrandValuesSection';
import { VisionMissionSection } from './VisionMissionSection';
import { StatementSection } from './StatementSection';

interface AboutPageProps {
  onShopNow: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onShopNow }) => {
  return (
    <div className="w-full bg-zinc-950 text-white">
      <AboutHeroSection />
      <PhilosophySection />
      <BrandValuesSection />
      <VisionMissionSection />
      <StatementSection onShopNow={onShopNow} />
    </div>
  );
};

export default AboutPage;
