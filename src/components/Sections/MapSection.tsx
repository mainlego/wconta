import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useLanguage } from '../../contexts/LanguageContext';
import 'leaflet/dist/leaflet.css';

const MapSection: React.FC = () => {
  const { t } = useLanguage();
  const [showAllStations, setShowAllStations] = useState(false);

  // Реальные локации станций W KONTAKCIE в Кракове
  const locations = [
    { id: 1, name: 'Galeria Krakowska', address: 'ul. Pawia 5, 31-154 Kraków', lat: 50.0677, lng: 19.9445 },
    { id: 2, name: 'Main Square (Rynek Główny)', address: 'Rynek Główny, 30-062 Kraków', lat: 50.0616, lng: 19.9366 },
    { id: 3, name: 'Kazimierz District', address: 'ul. Szeroka, 31-053 Kraków', lat: 50.0515, lng: 19.9461 },
    { id: 4, name: 'Nowa Huta Center', address: 'os. Centrum C, 31-924 Kraków', lat: 50.0771, lng: 20.0334 },
    { id: 5, name: 'Podgórze', address: 'ul. Kalwaryjska, 30-504 Kraków', lat: 50.0395, lng: 19.9493 },
    { id: 6, name: 'Krowodrza', address: 'ul. Krowoderska, 31-142 Kraków', lat: 50.0748, lng: 19.9178 },
    { id: 7, name: 'Wawel Castle Area', address: 'Wawel 5, 31-001 Kraków', lat: 50.0544, lng: 19.9356 },
    { id: 8, name: 'AGH University', address: 'al. Mickiewicza 30, 30-059 Kraków', lat: 50.0648, lng: 19.9237 },
    { id: 9, name: 'Jagiellonian University', address: 'ul. Gołębia 24, 31-007 Kraków', lat: 50.0614, lng: 19.9320 },
    { id: 10, name: 'Bonarka City Center', address: 'ul. Kamieńskiego 11, 30-644 Kraków', lat: 50.0264, lng: 19.9633 },
    { id: 11, name: 'Krakow Airport', address: 'Balice, 32-083 Kraków', lat: 50.0777, lng: 19.7848 },
    { id: 12, name: 'ICE Krakow Congress Centre', address: 'ul. Marii Konopnickiej 17, 30-302 Kraków', lat: 50.0505, lng: 19.9447 },
  ];

  // Создаем кастомную иконку для маркеров
  const customIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#62C02C" stroke="#E6F52C" stroke-width="4"/>
        <text x="20" y="26" text-anchor="middle" fill="black" font-family="Arial, sans-serif" font-size="16" font-weight="bold">W</text>
      </svg>
    `),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <section id="map-section" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('whereToFind.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('whereToFind.description')}
          </p>
        </motion.div>

        {/* Интерактивная карта с Leaflet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700 overflow-hidden"
        >
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <MapContainer
              center={[50.0616, 19.9366]}
              zoom={12}
              style={{ height: '100%', width: '100%' }}
              className="rounded-2xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
                  icon={customIcon}
                >
                  <Popup className="custom-popup">
                    <div className="p-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-xs">W</span>
                        </div>
                        <h3 className="font-bold text-gray-900">{location.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          {/* Список локаций под картой */}
          <div className="mt-6 text-center">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 transition-all duration-500 ${showAllStations ? 'max-h-none' : 'max-h-96 overflow-hidden'}`}>
              {(showAllStations ? locations : locations.slice(0, 6)).map((location) => (
                <div
                  key={location.id}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-[#62C02C]/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">W</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold text-sm">{location.name}</h3>
                      <p className="text-gray-400 text-xs">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setShowAllStations(!showAllStations)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] text-black font-bold rounded-full hover:shadow-lg hover:shadow-[#62C02C]/50 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllStations ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
              {showAllStations ? t('Show Less') : t('View All Stations')}
            </button>
          </div>
          
          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-r from-[#62C02C]/20 to-[#E6F52C]/20 rounded-2xl p-6 border border-[#62C02C]/30 text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-white">{locations.length}+</span>
              </div>
              <div className="text-gray-300">{t('Active Stations')}</div>
            </div>
            <div className="bg-gradient-to-r from-[#E6F52C]/20 to-[#FEFB4C]/20 rounded-2xl p-6 border border-[#E6F52C]/30 text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <div className="text-gray-300">{t('Availability')}</div>
            </div>
            <div className="bg-gradient-to-r from-[#D0F2BC]/20 to-[#62C02C]/20 rounded-2xl p-6 border border-[#D0F2BC]/30 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-full flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-sm">zł</span>
                </div>
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <div className="text-gray-300">{t('Starting Price')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;