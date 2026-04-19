import React from 'react';
import { motion } from 'motion/react';
import { Heart, Stars, MessageCircle, Calendar } from 'lucide-react';

const events = [
  {
    icon: Stars,
    title: "How It Started",
    text: "From strangers to my favorite person 💖",
    date: "A year ago...",
  },
  {
    icon: MessageCircle,
    title: "The First Message",
    text: "The day our world changed without us even knowing it.",
    date: "Online Connection",
  },
  {
    icon: Heart,
    title: "Pure Happiness",
    text: "You became my happiness without even trying. Every word felt like magic.",
    date: "Everyday Moments",
  },
  {
    icon: Calendar,
    title: "The Big 18",
    text: "April 20th — the day my favorite notification was born.",
    date: "Today",
  }
];

export const FriendshipTimeline: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative">
      <h2 className="text-3xl md:text-5xl text-center mb-20 text-editorial-text uppercase tracking-widest border-b border-editorial-pink pb-6">Our Story</h2>
      
      <div className="absolute left-1/2 -translate-x-1/2 top-48 bottom-24 w-0.5 bg-editorial-pink hidden md:block" />

      <div className="space-y-24">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
          >
            <div className="w-full md:w-1/2 flex flex-col glass p-8 rounded-[20px] items-center md:items-start text-center md:text-left transition-transform hover:scale-105">
              <span className="text-xs font-bold text-editorial-accent mb-2 uppercase tracking-[3px] font-sans opacity-70">{event.date}</span>
              <h3 className="text-2xl font-bold text-editorial-text mb-4 underline decoration-editorial-pink">Day {index + 1}: {event.title}</h3>
              <p className="text-lg text-editorial-text italic leading-relaxed font-light opacity-80">{event.text}</p>
            </div>

            <div className="relative z-10 w-16 h-16 rounded-full bg-editorial-sky flex items-center justify-center text-editorial-accent shadow-xl border-2 border-dashed border-editorial-accent shrink-0">
              <event.icon size={28} />
            </div>

            <div className="w-0 md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
