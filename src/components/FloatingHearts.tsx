import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeartProps {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartProps = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: '110vh', opacity: 0, x: `${heart.x}vw` }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 0.6, 0.6, 0],
              x: `${heart.x + (Math.random() * 10 - 5)}vw`
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.duration, 
              ease: 'linear',
              delay: heart.delay
            }}
            className="absolute text-pink-300/40"
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
