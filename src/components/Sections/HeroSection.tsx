import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
// import { isSafari } from '../../utils/browserDetection';
import powerbankGifWebm from '../../assets/powerbank gif.webm';
// import powerbankGifMov from '../../assets/powerbank-gif.mov';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const controls = useAnimation();
  // Temporarily disable MOV for GitHub Pages deployment
  const videoSrc = powerbankGifWebm;
  const videoType = 'video/webm';

  const handleProductClick = () => {
    controls.start({
      rotate: 360,
      transition: { duration: 1, ease: "easeInOut" }
    }).then(() => {
      controls.set({ rotate: 0 });
    });
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-4 md:pt-20 md:pb-16 lg:pt-20 lg:pb-20" style={{ overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout: Text -> Image -> Buttons */}
        <div className="lg:hidden text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-6 lg:mb-6 leading-tight"
          >
            {t('hero.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62C02C] to-[#E6F52C] whitespace-nowrap">
              {t('hero.titleHighlight')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-8 lg:mb-8 px-2 sm:px-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Mobile Powerbank Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative" style={{ zIndex: 10 }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain drop-shadow-2xl cursor-pointer block relative z-20"
                style={{ 
                  maxWidth: '1000px',
                  width: '90vw'
                }}
              >
                <source src={videoSrc} type={videoType} />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-2xl blur-3xl scale-110" style={{ zIndex: 5 }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-3 lg:gap-6 justify-center lg:justify-start px-2 sm:px-0"
          >
            <button
              onClick={() => {
                const mapSection = document.getElementById('map-section');
                mapSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#62C02C]/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              {t('hero.cta')}
            </button>
            <Link
              to="/return-powerbank"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#62C02C] text-[#62C02C] font-bold rounded-full hover:bg-[#62C02C] hover:text-black transition-all duration-300 text-sm sm:text-base text-center"
            >
              {t('downloadApp')}
            </Link>
          </motion.div>
        </div>
        
        {/* Desktop Layout: Text + Image side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t('hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62C02C] to-[#E6F52C] whitespace-nowrap">
                {t('hero.titleHighlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-6 justify-start"
            >
              <button
                onClick={() => {
                  const mapSection = document.getElementById('map-section');
                  mapSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#62C02C]/50 transition-all duration-300 transform hover:scale-105"
              >
                {t('hero.cta')}
              </button>
              <Link
                to="/return-powerbank"
                className="px-8 py-4 border-2 border-[#62C02C] text-[#62C02C] font-bold rounded-full hover:bg-[#62C02C] hover:text-black transition-all duration-300 text-center"
              >
                {t('downloadApp')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Desktop Powerbank Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ zIndex: 10 }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain drop-shadow-2xl cursor-pointer block relative z-20"
                style={{ 
                  maxWidth: '1000px',
                  width: '80vw'
                }}
              >
                <source src={videoSrc} type={videoType} />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-2xl blur-3xl scale-110" style={{ zIndex: 5 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;