import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../contexts/LanguageContext';

const PartnersCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-3xl p-12 lg:p-16 border border-[#62C02C]/30 overflow-hidden shadow-xl"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E6F52C]/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#62C02C]/20 to-transparent rounded-full translate-y-20 -translate-x-20" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {t('partners.title')}
            </h2>
            
            <Link
              to="/become-partner"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#62C02C]/50 transition-all duration-300 transform hover:scale-105"
            >
              {t('partners.cta')}
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCTA;