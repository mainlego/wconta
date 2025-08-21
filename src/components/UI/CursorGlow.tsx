import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем, мобильное ли устройство
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsVisible(true);
      }
    };

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Не показываем на мобильных устройствах
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        opacity: isVisible ? 1 : 0
      }}
      animate={{
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 40,
        mass: 0.1
      }}
    >
      {/* Первый круг - средняя яркость */}
      <div className="w-6 h-6 bg-[#62C02C]/40 rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Второй круг - слабее */}
      <div className="absolute top-0 left-0 w-12 h-12 bg-[#62C02C]/20 rounded-full blur-md transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Третий круг - самый слабый */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-[#62C02C]/10 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2" />
      
      {/* Внешний круг - едва заметный */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#62C02C]/5 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

export default CursorGlow;