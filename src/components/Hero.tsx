import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-32">
      <div className="absolute top-0 left-0 right-0 h-auto min-h-[100px] glass flex flex-col md:flex-row items-center justify-between px-6 py-4 md:px-10 rounded-none z-20 gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-sans uppercase tracking-[3px] text-[10px] md:text-xs opacity-70">April 20, 2026</span>
          <h2 className="text-2xl md:text-3xl text-editorial-accent -mt-1 uppercase tracking-tight font-bold">Nancy's 18th</h2>
        </div>
        <button onClick={onStart} className="editorial-button text-xs md:text-base py-2 px-6 md:py-3 md:px-6">Start Journey</button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 w-full max-w-lg mt-12 md:mt-0"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="inline-block mb-6"
        >
          <Sparkles className="text-editorial-accent w-10 h-10 md:w-12 md:h-12" />
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-editorial-text mb-6 tracking-tight leading-loose md:leading-tight">
          Happy 18th <br className="hidden md:block" />
          <span className="text-editorial-accent italic font-cursive text-glow font-normal text-6xl md:text-8xl"> Nancy ❤️</span>
        </h1>
        
        <p className="text-base md:text-xl text-editorial-text max-w-md mx-auto mb-10 font-light leading-relaxed opacity-80 px-4">
          Celebrating 18 years of your beautiful existence. <br/>
        
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="editorial-button px-8 py-4 md:px-10 md:py-5 text-lg"
        >
          Start Journey
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-editorial-accent/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
