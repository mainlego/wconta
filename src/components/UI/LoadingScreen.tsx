import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="relative">
            <img 
              src="https://iimg.su/s/23/6IFcouOsVQemYtNkPhAx9VIWYOc6Vov1rWVtOiyL.png" 
              alt="W KONTAKCIE" 
              className="h-32 w-auto mx-auto mb-4 relative z-10"
            />
            {/* Glowing effect that appears gradually */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#62C02C]/40 to-[#E6F52C]/40 rounded-2xl blur-2xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.8, scale: 1.4 }}
              transition={{ duration: 3, delay: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#E6F52C]/20 to-[#62C02C]/20 rounded-3xl blur-3xl -z-20"
            />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-[#62C02C] to-[#E6F52C]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-gray-400 mt-4">{progress}%</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;