import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles: React.FC = () => {
  // Создаем массив частиц с разными размерами и позициями
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // размер от 4 до 12px
    initialX: Math.random() * 100, // начальная позиция X в %
    initialY: Math.random() * 100, // начальная позиция Y в %
    duration: Math.random() * 20 + 15, // длительность анимации 15-35 сек
    delay: Math.random() * 10, // задержка до 10 сек
    opacity: Math.random() * 0.3 + 0.1, // прозрачность 0.1-0.4
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#62C02C]/40 to-[#E6F52C]/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Дополнительные более крупные частицы */}
      {Array.from({ length: 8 }, (_, i) => {
        const largePart = {
          id: i + 100,
          size: Math.random() * 15 + 10, // размер от 10 до 25px
          initialX: Math.random() * 100,
          initialY: Math.random() * 100,
          duration: Math.random() * 30 + 25, // более медленные 25-55 сек
          delay: Math.random() * 15,
          opacity: Math.random() * 0.2 + 0.05, // более прозрачные
        };
        
        return (
          <motion.div
            key={largePart.id}
            className="absolute rounded-full bg-gradient-to-br from-[#62C02C]/20 to-[#E6F52C]/20 blur-sm"
            style={{
              width: largePart.size,
              height: largePart.size,
              left: `${largePart.initialX}%`,
              top: `${largePart.initialY}%`,
              opacity: largePart.opacity,
            }}
            animate={{
              x: [0, -80, 120, 0],
              y: [0, 80, -60, 0],
              scale: [1, 0.7, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: largePart.duration,
              delay: largePart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;