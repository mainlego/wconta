import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import FAQSection from '../components/Sections/FAQSection';
import PartnersCTA from '../components/Sections/PartnersCTA';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

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
            {t('contact.title')}
          </motion.h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gray-700 hover:border-[#62C02C]/50 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#62C02C]/20 rounded-2xl flex items-center justify-center mb-6">
                <EnvelopeIcon className="w-8 h-8 text-[#62C02C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('contact.email')}</h3>
              <a 
                href="mailto:wkontakcie.pl@gmail.com"
                className="text-[#E6F52C] hover:text-[#FEFB4C] transition-colors text-lg"
              >
                wkontakcie.pl@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gray-700 hover:border-[#E6F52C]/50 transition-all duration-300 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#E6F52C]/20 rounded-2xl flex items-center justify-center mb-6">
                <PhoneIcon className="w-8 h-8 text-[#E6F52C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('contact.phone')}</h3>
              <a 
                href="tel:+48515800334"
                className="text-[#62C02C] hover:text-[#D0F2BC] transition-colors text-lg"
              >
                +48 515 800 334
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-3xl p-12 lg:p-16 border border-green-500/30 text-center shadow-xl"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('Need immediate help?')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('Chat with our support team on WhatsApp for instant assistance')}
            </p>
            <a
              href={`https://wa.me/48515800334`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
              </svg>
              {t('Chat on WhatsApp')}
            </a>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      <PartnersCTA />
    </div>
  );
};

export default ContactPage;