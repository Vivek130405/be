import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reasons = [
  "Your kindness is literally magical",
  "The way you handle challenges",
  "Your beautiful, contagious soul",
  "You're the best listener I've ever met",
  "Your sense of humor is unmatched",
  "How you care for people around you",
  "Your 18 years of being pure sunshine",
  "Our late-night virtual talks",
  "The way you make me feel understood",
  "Your aesthetic choice in everything",
  "How you stay true to yourself",
  "Your quiet strength",
  "The happiness you bring to my life",
  "You are a literal angel on earth",
  "Your resilience and bravery",
  "The small details you notice",
  "Our friendship that feels destined",
  "Just because you are NANCY ❤️"
];

export const ReasonsToLove: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-editorial-accent text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl text-center mb-4 text-white font-serif uppercase tracking-widest decoration-white underline underline-offset-8 leading-tight">18 Reasons Why...</h2>
        <p className="text-center text-white/70 mb-20 italic">Unlocked after your journey...</p>

        <div className="flex flex-wrap justify-center gap-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-5 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-bold tracking-wide hover:bg-white/40 transition-colors cursor-default"
            >
              {reason}
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-[10px] mt-16 opacity-80 uppercase tracking-widest font-bold">No matter distance, you are always close to my heart.</p>
      </div>
    </section>
  );
};
