import React from 'react';
import { motion } from 'framer-motion';

interface PhoneAnimationProps {
  className?: string;
}

const PhoneAnimation: React.FC<PhoneAnimationProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main phone */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="w-48 h-80 bg-gray-800 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-gray-900 rounded-2xl relative overflow-hidden">
            {/* Screen content */}
            <div className="absolute inset-4">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-white text-xs">9:41</div>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-[#62C02C] rounded-sm" />
                </div>
              </div>
              
              {/* App content */}
              <div className="space-y-4">
                <div className="w-full h-12 bg-gradient-to-r from-[#62C02C] to-[#E6F52C] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">W KONTAKCIE</span>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full h-3 bg-gray-700 rounded" />
                  <div className="w-3/4 h-3 bg-gray-700 rounded" />
                  <div className="w-1/2 h-3 bg-gray-700 rounded" />
                </div>
                
                {/* Battery animation */}
                <motion.div
                  initial={{ width: '20%' }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  className="h-2 bg-gradient-to-r from-[#E6F52C] to-[#62C02C] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanding phones */}
      <motion.div
        initial={{ x: 0, opacity: 0.7 }}
        animate={{ x: -60, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-4 left-4 z-5"
      >
        <div className="w-40 h-72 bg-gray-700 rounded-3xl p-2 shadow-lg">
          <div className="w-full h-full bg-gray-800 rounded-2xl" />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0.7 }}
        animate={{ x: 60, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-4 right-4 z-5"
      >
        <div className="w-40 h-72 bg-gray-700 rounded-3xl p-2 shadow-lg">
          <div className="w-full h-full bg-gray-800 rounded-2xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneAnimation;