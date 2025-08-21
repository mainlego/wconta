import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import StationShowcase from '../components/Sections/StationShowcase';
import HowItWorksPreview from '../components/Sections/HowItWorksPreview';
import MapSection from '../components/Sections/MapSection';
import FAQSection from '../components/Sections/FAQSection';
import PartnersCTA from '../components/Sections/PartnersCTA';

const HomePage: React.FC = () => {
  return (
    <div className="relative pt-20 md:pt-4 lg:pt-24">
      <HeroSection />
      <StationShowcase />
      <HowItWorksPreview />
      <MapSection />
      <FAQSection />
      <PartnersCTA />
    </div>
  );
};

export default HomePage;