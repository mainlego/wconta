import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MapSection from '../components/Sections/MapSection';

const ReturnPowerbankPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 relative min-h-screen">
      {/* Hero Section with App Download */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-3xl p-12 lg:p-20 border border-[#62C02C]/30 text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              {t('returnPowerbank.title')}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* App Store Button */}
              <motion.a
                href="https://apps.apple.com/ru/app/chargenow/id1584957676"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#62C02C] transition-all duration-300"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.gzzbjkj.chargenow&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#E6F52C] transition-all duration-300"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </motion.a>
            </div>
            
            {/* Pricing info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#D0F2BC]/20 rounded-2xl p-6 inline-block"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">zł</span>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">{t('pricing')}</div>
                  <div className="text-gray-300">{t('pricingDescription')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {t('How to return your powerbank')}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#62C02C] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('Choose a station in the app')}</h3>
                  <p className="text-gray-300">{t('Use our app to find the nearest available station and navigate to it.')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#E6F52C] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('Prepare the powerbank')}</h3>
                  <p className="text-gray-300">{t('Make sure the wire is hidden inside the powerbank.')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#D0F2BC] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('Insert the powerbank')}</h3>
                  <p className="text-gray-300">{t('Insert the powerbank with the wire side facing inward until it clicks.')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FEFB4C] rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('Confirm return')}</h3>
                  <p className="text-gray-300">{t('Check the app for a successful return message and payment confirmation.')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MapSection />
    </div>
  );
};

export default ReturnPowerbankPage;