import React from 'react';
import { motion } from 'motion/react';
import ho from "../assets/images/wh.jpeg";
import ni from "../assets/images/spi.jpeg";
import niji from "../assets/images/snap.jpeg";
import red from "../assets/images/red.jpeg";
import snap from "../assets/images/ho.jpeg";
import wh from "../assets/images/yel.jpeg";

const memories = [
  { id: 1, title: "Beautiful", img: red, pos: "center 20%" },
  { id: 2, title: "Pretty", img: ni, pos: "center 20%" },
  { id: 3, title: "Gorgeous", img: niji, pos: "center 30%" },
  { id: 4, title: "Lovely", img: snap, pos: "center 20%" },
  { id: 5, title: "Cute", img: ho, pos: "center 20%" },
  { id: 6, title: "Charming", img: wh, pos: "center 25%" },
];

export const MemoryGallery: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-editorial-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-4 text-editorial-text uppercase tracking-widest font-bold">Beautiful Girl</h2>
        <p className="text-center text-editorial-text/60 mb-16 italic text-sm">Every picture tells a story of you...</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="photo-card group relative cursor-pointer aspect-[3/4]"
            >
              <img 
                src={memory.img} 
                alt={memory.title}
                referrerPolicy="no-referrer"
                style={{ objectPosition: memory.pos }}
                className="w-full h-full object-cover transition-transform duration-700 photo-sepia group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-md px-4 py-3 border-l-4 border-editorial-accent">
                  <p className="text-editorial-text text-sm font-bold uppercase tracking-widest">{memory.title}</p>
                  <p className="text-[10px] text-editorial-accent font-bold mt-1">NANCY'S MEMORIES Vol. 18</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
