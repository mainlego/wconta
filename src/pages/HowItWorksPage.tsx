import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  CreditCardIcon, 
  DevicePhoneMobileIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import PartnersCTA from '../components/Sections/PartnersCTA';

const HowItWorksPage: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MapPinIcon,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: '#62C02C'
    },
    {
      icon: CreditCardIcon,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: '#E6F52C'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: '#D0F2BC'
    },
    {
      icon: ArrowPathIcon,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      color: '#FEFB4C'
    }
  ];

  return (
    <div className="pt-24 relative min-h-screen">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            {t('howItWorks.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#E6F52C] mb-8"
          >
            {t('howItWorks.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number */}
                <div 
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl z-10"
                  style={{ backgroundColor: step.color }}
                >
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#62C02C]/50 transition-all duration-300 h-full">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon 
                      className="w-8 h-8"
                      style={{ color: step.color }}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-gray-700"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
              {t('Detailed Process')}
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('howItWorks.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-900/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#E6F52C] mb-4">{t('Pricing')}</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-full flex items-center justify-center mr-3">
                      <span className="text-black font-bold">zł</span>
                    </div>
                    <span className="text-3xl font-bold text-white">
                      {t('pricing')}
                    </span>
                  </div>
                  <p className="text-gray-400">
                    {t('pricingDescription')}
                  </p>
                </div>
                
                <div className="bg-gray-900/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#62C02C] mb-4">{t('Availability')}</h3>
                  <p className="text-white text-lg mb-2">{t('24/7 Access')}</p>
                  <p className="text-gray-400">
                    {t('Available throughout Krakow at all times')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersCTA />
    </div>
  );
};

export default HowItWorksPage;