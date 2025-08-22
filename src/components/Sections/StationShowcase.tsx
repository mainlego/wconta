import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../contexts/LanguageContext';
// import { isSafari } from '../../utils/browserDetection';
import stationGifWebm from '../../assets/station gif.webm';
// import stationGifMov from '../../assets/station-gif.mov';

const StationShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Temporarily disable MOV for GitHub Pages deployment
  const videoSrc = stationGifWebm;
  const videoType = 'video/webm';

  const stationImages = [
    {
      url: 'https://iimg.su/s/23/UKwzuQF9XLNH5cLswqtCaJsRdqV5GZv3QthofyOC.png',
      title: 'Front View',
      description: 'Modern powerbank rental station'
    },
    {
      url: 'https://iimg.su/s/23/8H52JxHbHaSEgn0BEij5Xj9dQAb5U5RhIssLSFTv.png',
      title: 'Side View', 
      description: 'Compact design for any location'
    },
    {
      url: 'https://iimg.su/s/23/QCTxWWQm9ZxLeUp4vayOpYgEwKKckkDUTw3tro7Q.png',
      title: 'Detail View',
      description: 'Easy-to-use interface'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % stationImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + stationImages.length) % stationImages.length);
  };

  return (
    <section className="py-4 sm:py-8 md:py-6 lg:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 3D Station Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Main Video Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#62C02C]/30">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type={videoType} />
                  Your browser does not support the video tag.
                </video>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t('findUs.title')}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('findUs.description')}
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-6 h-6 bg-[#62C02C] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">✓</span>
                </div>
                <span className="text-gray-300">{t('No app required for rental')}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-6 h-6 bg-[#62C02C] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">✓</span>
                </div>
                <span className="text-gray-300">{t('Multiple cable types included')}</span>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#62C02C]/30 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">zł</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{t('pricing')}</div>
                  <div className="text-gray-400">{t('Same price anywhere in the city')}</div>
                </div>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-left">
                {t('Payment Methods')}
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6 object-contain" />
                </div>
                <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/512px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-6 object-contain" />
                </div>
                <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/512px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 object-contain" />
                </div>
                <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/512px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StationShowcase;