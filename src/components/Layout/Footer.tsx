import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  // PDF files - temporarily using external links
  // Replace these with actual PDF files when available
  const regulaminPDF = '#';
  const politykaPrivPDF = '#';

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://s.iimg.su/s/25/kM0SKdygx4B9nZov6KmyoncxSycz1AqOtpULOyhp.png" 
                alt="W KONTAKCIE" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#E6F52C] transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-[#E6F52C] transition-colors">{t('nav.howItWorks')}</Link></li>
              <li><Link to="/become-partner" className="text-gray-400 hover:text-[#E6F52C] transition-colors">{t('nav.becomePartner')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#E6F52C] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contact.title')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block text-sm">{t('contact.email')}:</span>
                <a href="mailto:wkontakcie.pl@gmail.com" className="text-[#E6F52C] hover:text-[#FEFB4C]">
                  wkontakcie.pl@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">{t('contact.phone')}:</span>
                <a href="tel:+48515800334" className="text-[#E6F52C] hover:text-[#FEFB4C]">
                  +48 515 800 334
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Documents Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a
                href={regulaminPDF}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-[#62C02C]/20 border border-gray-700 hover:border-[#62C02C]/50 rounded-lg transition-all duration-300 group cursor-pointer"
                onClick={(e) => {
                  if (regulaminPDF === '#') {
                    e.preventDefault();
                    alert('PDF file will be available soon');
                  }
                }}
              >
                <DocumentTextIcon className="w-5 h-5 text-[#62C02C] group-hover:text-[#E6F52C] transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  Regulamin świadczenia usług
                </span>
              </a>
              <a
                href={politykaPrivPDF}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-[#62C02C]/20 border border-gray-700 hover:border-[#62C02C]/50 rounded-lg transition-all duration-300 group cursor-pointer"
                onClick={(e) => {
                  if (politykaPrivPDF === '#') {
                    e.preventDefault();
                    alert('PDF file will be available soon');
                  }
                }}
              >
                <DocumentTextIcon className="w-5 h-5 text-[#62C02C] group-hover:text-[#E6F52C] transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  Polityka Prywatności
                </span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2025 W KONTAKCIE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;