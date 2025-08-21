import React from 'react';
import { motion } from 'framer-motion';

interface StationCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const StationCard: React.FC<StationCardProps> = ({ title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#62C02C] transition-all duration-300 hover:shadow-xl hover:shadow-[#62C02C]/20"
    >
      <div className="bg-white rounded-lg mb-4 overflow-hidden p-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-contain"
          style={{ maxHeight: '300px' }}
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default StationCard;