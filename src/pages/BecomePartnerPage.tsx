import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { 
  UserGroupIcon, 
  TrophyIcon, 
  BuildingStorefrontIcon 
} from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import StationCard from '../components/UI/StationCard';
import smallStation from '../assets/small station.png';
import mediumStation from '../assets/medium station.png';
import bigStation from '../assets/big station.png';

const BecomePartnerPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    city: '',
    customCity: '',
    name: '',
    phone: '',
    email: '',
    request: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const benefits = [
    {
      icon: UserGroupIcon,
      title: t('partners.benefit1.title'),
      description: t('partners.benefit1.description'),
      color: '#62C02C'
    },
    {
      icon: TrophyIcon,
      title: t('partners.benefit2.title'),
      description: t('partners.benefit2.description'),
      color: '#E6F52C'
    }
  ];

  const stationTypes = [
    {
      id: 'mini',
      title: t('stations.mini.title'),
      description: t('stations.mini.description'),
      image: smallStation
    },
    {
      id: 'standard',
      title: t('stations.standard.title'),
      description: t('stations.standard.description'),
      image: mediumStation
    },
    {
      id: 'max',
      title: t('stations.max.title'),
      description: t('stations.max.description'),
      image: bigStation
    }
  ];

  const cities = ['Krakow', 'Warsaw', 'Gdansk', 'Wroclaw', 'Poznan'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Подготавливаем данные для отправки
      const templateParams = {
        to_email: 'wkontakcie.pl@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        city: formData.city || formData.customCity,
        message: formData.request,
        subject: 'Новая заявка на партнерство - W KONTAKCIE'
      };

      // Отправляем email через EmailJS
      await emailjs.send(
        'service_wkontakcie', // Service ID (нужно будет настроить в EmailJS)
        'template_partner', // Template ID (нужно будет создать шаблон)
        templateParams,
        'your_public_key' // Public Key (нужно будет получить в EmailJS)
      );

      setSubmitStatus('success');
      // Очищаем форму после успешной отправки
      setFormData({
        city: '',
        customCity: '',
        name: '',
        phone: '',
        email: '',
        request: ''
      });
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            {t('partners.cta')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#E6F52C] mb-8"
          >
            {t('partners.mainTitle')}
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-20"
          >
            {t('What are the benefits?')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gray-700 hover:border-[#62C02C]/50 transition-all duration-300 shadow-lg"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon 
                    className="w-8 h-8"
                    style={{ color: benefit.color }}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Station Types */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-6"
          >
            {t('Choose the station you want to install:')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stationTypes.map((station, index) => (
              <StationCard
                key={station.id}
                title={station.title}
                description={station.description}
                image={station.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-gray-700 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {t('Partner Application Form')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('form.city')}
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#62C02C] transition-colors"
                  >
                    <option value="">{t('Select city...')}</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('form.customCity')}
                  </label>
                  <input
                    type="text"
                    name="customCity"
                    value={formData.customCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#62C02C] transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#62C02C] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#62C02C] transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#62C02C] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  {t('form.request')}
                </label>
                <textarea
                  name="request"
                  value={formData.request}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#62C02C] transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 font-bold rounded-full transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black hover:shadow-lg hover:shadow-[#62C02C]/50 hover:scale-105'
                }`}
              >
                {isSubmitting ? t('Отправка...') : t('form.submit')}
              </button>
              
              {/* Статус отправки */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
                >
                  <p className="text-green-400 font-semibold">
                    {t('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')}
                  </p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center"
                >
                  <p className="text-red-400 font-semibold">
                    {t('Ошибка отправки. Попробуйте еще раз или свяжитесь с нами напрямую.')}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BecomePartnerPage;