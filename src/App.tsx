/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/Hero';
import { FriendshipTimeline } from './components/FriendshipTimeline';
import { MemoryGallery } from './components/MemoryGallery';
import { BirthdayGames } from './components/BirthdayGames';
import { LoveLetter } from './components/LoveLetter';
import { ReasonsToLove } from './components/ReasonsToLove';
import { FloatingHearts } from './components/FloatingHearts';
import { SoundControls } from './components/SoundControls';

export default function App() {
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [gamesCompleted, setGamesCompleted] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);
  const surpriseRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const startJourney = () => {
    setJourneyStarted(true);
    setTimeout(() => {
      journeyRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const unlockSurprise = () => {
    setGamesCompleted(true);
    setTimeout(() => {
      surpriseRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-editorial-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Global Elements */}
      <FloatingHearts />
      <SoundControls />

      <main>
        <Hero onStart={startJourney} />

        {journeyStarted && (
          <div ref={journeyRef} className="animate-in fade-in duration-1000">
            <FriendshipTimeline />
            <MemoryGallery />
            <BirthdayGames onAllComplete={unlockSurprise} />
            <LoveLetter />
            
            {gamesCompleted && (
              <div ref={surpriseRef} className="animate-in slide-in-from-bottom duration-1000">
                <ReasonsToLove />
              </div>
            )}

            {/* Ending Section - Always visible now */}
            <section className="py-20 md:py-32 px-6 text-center bg-magical border-t border-editorial-pink">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-editorial-accent rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-editorial-pink">
                  <span className="text-2xl md:text-3xl font-bold italic font-cursive">N</span>
                </div>
                <h2 className="text-3xl md:text-5xl mb-6 md:mb-8 text-editorial-text leading-tight px-2">No matter distance, you are always close to my heart ❤️</h2>
                <p className="text-lg md:text-xl text-editorial-text/70 font-light italic leading-relaxed px-4">
                  Wishing you the most magical 18th year ahead. <br/>
                  May all your dreams come true, today and always.
                </p>
                <div className="mt-12 md:mt-16 text-editorial-accent flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, delay: i * 0.2, duration: 2 }}
                    >
                      ❤️
                    </motion.div>
                  ))}
                </div>
                <div className="mt-16 md:mt-20 text-[10px] md:text-xs uppercase tracking-widest text-editorial-text/40 font-semibold font-sans">
                  Made with love for Nancy
                </div>
              </motion.div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
