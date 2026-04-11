"use client";

import { motion } from 'framer-motion';
import { Calendar, Trophy, Star, Crown, Globe, Shield, Medal } from 'lucide-react';

const ASSETS = {
  MAIN_IMAGE: "/WhatsApp Image 2026-04-11 at 13.44.38.jpeg", 
};

const madridHonors = [
  { title: 'Champions League', count: '15 Titles', desc: 'The undisputed Kings of Europe.', year: '2024', icon: <Trophy className="w-7 h-7" />, side: 'left' },
  { title: 'La Liga EA Sports', count: '36 Titles', desc: 'Dominating Spanish football history.', year: '2024', icon: <Crown className="w-7 h-7" />, side: 'left' },
  { title: 'Club World Cup', count: '8 Titles', desc: 'Conquering every continent.', year: '2022', icon: <Globe className="w-7 h-7" />, side: 'left' },
  { title: 'Copa del Rey', count: '20 Titles', desc: 'Rich history of cup triumphs.', year: '2023', icon: <Shield className="w-7 h-7" />, side: 'right' },
  { title: 'UEFA Super Cup', count: '6 Titles', desc: 'Supremacy across Europe.', year: '2024', icon: <Medal className="w-7 h-7" />, side: 'right' },
  { title: 'Century Club', count: 'FIFA Award', desc: 'The greatest institution in history.', year: '2000', icon: <Star className="w-7 h-7" />, side: 'right' },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-24 md:py-32 px-6 bg-[#f0f0f0] dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER - BOLDER TYPOGRAPHY */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#c5a059] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block"
          >
            The Ultimate Legacy
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter leading-none">
            ROYAL <span className="text-transparent" style={{ WebkitTextStroke: '1px #c5a059' }}>COLLECTION</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-4">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3 order-2 lg:order-1 items-end">
            {madridHonors.filter(h => h.side === 'left').map((honor, idx) => (
              <HonorCard key={honor.title} honor={honor} index={idx} side="left" />
            ))}
          </div>

          {/* CENTER IMAGE - ROYAL FRAME */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 flex justify-center z-20">
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5 }}
              className="relative p-1 bg-[#c5a059] rounded-[40px] shadow-2xl transition-all duration-500"
            >
               <div className="bg-white dark:bg-zinc-900 rounded-[38px] overflow-hidden p-3 border-4 border-double border-[#c5a059]/30">
                 <img src={ASSETS.MAIN_IMAGE} alt="Real Madrid 15" className="w-full max-w-[320px] md:max-w-[420px] h-auto object-contain rounded-[30px]" />
               </div>
               <div className="absolute -inset-4 bg-[#c5a059]/5 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-10 w-full lg:w-1/3 order-3 items-start">
            {madridHonors.filter(h => h.side === 'right').map((honor, idx) => (
              <HonorCard key={honor.title} honor={honor} index={idx} side="right" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function HonorCard({ honor, index, side }: { honor: any, index: number, side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
      className={`group relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div 
        className={`
          relative z-10 flex bg-white dark:bg-zinc-900 
          rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
          dark:shadow-[15px_15px_30px_#000000,-2px_-2px_15px_#1e1e1e]
          transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
          w-[280px] md:w-[320px] group-hover:w-[400px] 
          h-[90px] group-hover:h-[160px]
          border border-transparent group-hover:border-[#c5a059]/30
          overflow-hidden
        `}
      >
        {/* ICON BOX */}
        <div className="w-[85px] h-full flex-shrink-0 flex items-center justify-center bg-[#1e2b4d] text-[#c5a059] relative overflow-hidden transition-all duration-500 group-hover:bg-[#c5a059] group-hover:text-white">
          <div className="z-10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-[360deg]">
            {honor.icon}
          </div>
          {/* Decorative numbering background */}
          <span className="absolute -bottom-2 -left-2 text-white/5 font-black text-6xl italic select-none">
            0{index + 1}
          </span>
        </div>

        {/* CONTENT AREA */}
        <div className={`relative flex-1 p-6 flex flex-col ${isLeft ? 'items-start' : 'items-end'} justify-center overflow-hidden`}>
          
          {/* DEFAULT STATE CONTENT */}
          <div className="transition-all duration-500 group-hover:translate-y-[-150%] group-hover:opacity-0">
            <h3 className="text-sm md:text-lg font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter">
              {honor.title}
            </h3>
            <div className={`flex items-center gap-2 mt-1 ${!isLeft && 'flex-row-reverse'}`}>
               <span className="w-6 h-[2px] bg-[#c5a059]" />
               <p className="text-[10px] font-black text-[#c5a059] uppercase tracking-widest">{honor.count}</p>
            </div>
          </div>

          {/* HOVER STATE CONTENT (The Aesthetic Reveal) */}
          <div className={`absolute inset-x-6 flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'} opacity-0 translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100`}>
            {/* Animated Title in Hover */}
            <h3 className="text-xs font-black text-[#c5a059] uppercase tracking-[0.2em] mb-2 border-b-2 border-[#c5a059] pb-1">
              {honor.title}
            </h3>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold leading-tight line-clamp-2 italic mb-3">
              "{honor.desc}"
            </p>
            <div className="flex items-center gap-3">
               <div className="flex items-center gap-1.5 text-[9px] font-black text-white bg-[#1e2b4d] px-3 py-1.5 rounded-full shadow-lg">
                 <Calendar size={10} /> {honor.year}
               </div>
               <div className="flex items-center gap-1.5 text-[9px] font-black text-[#c5a059] bg-white dark:bg-zinc-800 border border-[#c5a059] px-3 py-1.5 rounded-full">
                 <Trophy size={10} /> {honor.count.split(' ')[0]}
               </div>
            </div>
          </div>
        </div>

        {/* AMBIENT LIGHTING EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#c5a059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* FLOATING DECORATIVE SHAPE */}
      <div className={`absolute -z-10 w-32 h-32 bg-[#c5a059]/20 rounded-full blur-[60px] transition-all duration-1000 group-hover:scale-150 opacity-0 group-hover:opacity-100 ${isLeft ? 'right-0' : 'left-0'}`} />
    </motion.div>
  );
}