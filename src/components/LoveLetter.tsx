import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const letterText = `Dearest Nancy,

I wanted to take this moment, your 18th birthday, to tell you something from the bottom of my heart. 

I know sometimes I'm not the best at expressing it, and I'm truly sorry for any time I've let you down or wasn't there when you needed me most. You have been more than just a friend; you've been my happiness without even trying. 

Our journey from being strangers to you becoming my favorite person has been the most magical experience. I am so deeply grateful for your existence, for your kindness, and for the way you make the world feel lighter just by being in it. 

Thank you for everything. You deserve all the magic the universe has to offer. 

With all my love and gratitude,
Your Best Friend ❤️`;

export const LoveLetter: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + letterText[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="py-24 px-6 bg-magical">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-16 text-editorial-text uppercase tracking-widest font-bold">A Heartfelt Letter</h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="letter-paper letter-lines p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-6 -right-6 text-editorial-accent animate-pulse opacity-20">
            <Heart size={120} fill="currentColor" />
          </div>

          <h3 className="font-cursive text-4xl mb-6 text-slate-600">Dearest Nancy,</h3>

          <div className="font-serif text-lg md:text-xl leading-[2] text-editorial-text whitespace-pre-wrap relative z-10">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block w-1.5 h-6 bg-editorial-accent ml-1 translate-y-1"
            />
          </div>

          <div className="mt-12 flex justify-end">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="font-cursive text-3xl text-editorial-accent"
            >
              Forever Yours ❤️
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
