import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/', icon: '🏠' },
    { name: t('nav.howItWorks'), href: '/how-it-works', icon: '⚡' },
    { name: t('nav.becomePartner'), href: '/become-partner', icon: '🤝' },
    { name: t('nav.contact'), href: '/contact', icon: '📞' },
    { name: t('nav.returnPowerbank'), href: '/return-powerbank', icon: '🔄' }
  ];

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'pl' as const, name: 'Polski', flag: '🇵🇱' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`mx-4 mt-4 transition-all duration-700 rounded-3xl overflow-hidden ${
        scrolled 
          ? 'backdrop-blur-xl bg-gray-900/90 border-2 border-[#62C02C] shadow-lg shadow-[#62C02C]/30' 
          : 'backdrop-blur-lg bg-gray-900/70 border border-[#62C02C]/50'
      }`}
      style={{ overflow: 'visible' }}
    >
        <nav className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo with 3D effect */}
          <Link to="/" className="flex items-center group relative">
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 15,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="relative transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://iimg.su/s/23/6IFcouOsVQemYtNkPhAx9VIWYOc6Vov1rWVtOiyL.png" 
                  alt="W KONTAKCIE" 
                  className="h-12 sm:h-16 w-auto transition-all duration-700 group-hover:brightness-125 group-hover:drop-shadow-2xl filter drop-shadow-lg"
                />
                {/* 3D shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#62C02C]/30 to-[#E6F52C]/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 transform translate-x-2 translate-y-2" />
                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#62C02C]/0 group-hover:border-[#62C02C]/50"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation with floating effect */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-bold transition-all duration-500 group overflow-hidden rounded-xl ${
                      location.pathname === item.href
                        ? 'text-black bg-gradient-to-r from-[#62C02C] to-[#E6F52C] shadow-lg shadow-[#62C02C]/50'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Floating icon */}
                    <motion.span
                      className="inline-block mr-2 text-lg"
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        y: [-2, -4, -2]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.span>
                    
                    {item.name}
                    
                    {/* Animated background for non-active items */}
                    {location.pathname !== item.href && (
                      <>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-xl opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      </>
                    )}
                    
                    {/* Glowing border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-[#62C02C]/0 group-hover:border-[#62C02C]/60"
                      whileHover={{ 
                        boxShadow: '0 0 20px rgba(98, 192, 44, 0.5)' 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
            {/* Ultra-modern Language Switcher */}
              <div className="relative ml-4" style={{ zIndex: 9999 }}>
                <motion.button
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center space-x-3 px-5 py-3 rounded-xl transition-all duration-500 group relative overflow-hidden ${
                    isLangMenuOpen 
                      ? 'bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black shadow-lg shadow-[#62C02C]/50' 
                      : 'text-gray-300 hover:text-white bg-gray-800/30 hover:bg-gray-700/50 border border-gray-600/30 hover:border-[#62C02C]/50'
                  }`}
                >
                  <motion.div
                    animate={{ rotate: isLangMenuOpen ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                  </motion.div>
                  
                  <span className="text-sm font-bold">{language.toUpperCase()}</span>
                  
                  <motion.div
                    animate={{ rotate: isLangMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-4 h-4"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                  
                  {/* Animated background */}
                  {!isLangMenuOpen && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9, rotateX: -15 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="absolute right-0 mt-4 w-48 bg-gray-800/98 backdrop-blur-3xl rounded-xl shadow-2xl border-2 border-[#62C02C]/40 overflow-hidden"
                      style={{ 
                        zIndex: 99999,
                        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.98) 0%, rgba(17, 24, 39, 0.95) 100%)'
                      }}
                    >
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(98, 192, 44, 0.2)'
                          }}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-6 py-4 text-left text-base transition-all duration-400 group relative overflow-hidden ${
                            language === lang.code 
                              ? 'text-[#62C02C] bg-[#62C02C]/10 font-bold' 
                              : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                          }`}
                        >
                          <motion.span 
                            className="mr-3 text-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            {lang.flag}
                          </motion.span>
                          {lang.name}
                          
                          {/* Hover effect */}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Compact Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-2 py-2 text-xs font-bold transition-all duration-300 group overflow-hidden rounded-lg ${
                      location.pathname === item.href
                        ? 'text-black bg-gradient-to-r from-[#62C02C] to-[#E6F52C] shadow-md'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    title={item.name}
                  >
                    <motion.span
                      className="text-base"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    
                    {/* Full text for iPad */}
                    <span className="ml-1 hidden sm:inline">
                      {item.name === t('nav.home') ? 'Home' : 
                       item.name === t('nav.howItWorks') ? 'How it works?' :
                       item.name === t('nav.becomePartner') ? 'Partnership' :
                       item.name === t('nav.contact') ? 'Contact' :
                       item.name === t('nav.returnPowerbank') ? 'Return' : item.name}
                    </span>
                    
                    {/* Hover background */}
                    {location.pathname !== item.href && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Compact Language Switcher */}
              <div className="relative ml-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center space-x-1 px-2 py-2 rounded-lg transition-all duration-300 ${
                    isLangMenuOpen 
                      ? 'bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black' 
                      : 'text-gray-300 hover:text-white bg-gray-800/30 hover:bg-gray-700/50'
                  }`}
                >
                  <GlobeAltIcon className="h-4 w-4" />
                  <span className="text-xs font-bold">{language.toUpperCase()}</span>
                </motion.button>
                
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 mt-2 w-32 bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-xl border border-[#62C02C]/30 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm transition-all duration-200 ${
                            language === lang.code 
                              ? 'text-[#62C02C] bg-[#62C02C]/10 font-bold' 
                              : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                          }`}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Ultra-modern Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative p-4 rounded-xl transition-all duration-500 overflow-hidden ${
                  isMenuOpen 
                    ? 'text-black bg-gradient-to-r from-[#62C02C] to-[#E6F52C] shadow-lg shadow-[#62C02C]/50' 
                    : 'text-gray-300 hover:text-white bg-gray-800/30 hover:bg-gray-700/50 border border-gray-600/30 hover:border-[#62C02C]/50'
                }`}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </motion.div>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-[#62C02C]/50 opacity-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </motion.button>
              </div>
            </div>
        </nav>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-[#62C02C]/30 mt-4 pt-4 pb-4"
            >
              <div className="flex flex-col space-y-2 px-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-black bg-gradient-to-r from-[#62C02C] to-[#E6F52C]'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex space-x-2 pt-4 border-t border-[#62C02C]/20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                        language === lang.code 
                          ? 'text-black bg-gradient-to-r from-[#62C02C] to-[#E6F52C]' 
                          : 'text-gray-300 hover:text-white bg-gray-800/30'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;