import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../contexts/LanguageContext';

const HowItWorksPreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-[#E6F52C] mb-6">
            {t('howItWorks.subtitle')}
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('howItWorks.description')}
          </p>
          
          <Link 
            to="/how-it-works"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#62C02C]/50 transition-all duration-300 transform hover:scale-105"
          >
            {t('howItWorks.cta')}
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;