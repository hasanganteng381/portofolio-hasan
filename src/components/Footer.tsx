import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart, Trophy, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/hasanganteng381',
      label: 'GitHub',
      active: true,
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/mhdhasan_42',
      label: 'Instagram',
      active: true,
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      active: false,
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube',
      active: false,
    },
  ];

  return (
    <footer className="relative bg-[#1e2b4d] dark:bg-zinc-950 pt-20 pb-10 overflow-hidden border-t-4 border-[#c5a059]">
      {/* Background Decor: Watermark Tekstur */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 text-[10rem] font-black italic uppercase leading-none select-none">
          Galactico
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          
          {/* TOP SECTION: BRANDING */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#c5a059]">
              <Trophy size={24} />
              <span className="text-xs font-black uppercase tracking-[0.5em] italic">Tactical Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              HASAN <span className="text-[#c5a059]">PORTFOLIO</span>
            </h2>
          </div>

          {/* MIDDLE SECTION: SOCIAL LINKS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.active ? social.href : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={social.active ? { y: -5, scale: 1.1 } : {}}
                  className={`
                    relative group flex items-center gap-3 px-6 py-3 border-2 transition-all
                    ${social.active 
                      ? 'border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#1e2b4d]' 
                      : 'border-zinc-700 text-zinc-600 cursor-not-allowed grayscale'
                    }
                  `}
                >
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="text-[10px] font-black uppercase tracking-widest italic leading-none">
                    {social.label}
                  </span>
                  {social.active && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white animate-pulse" />
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          {/* BOTTOM SECTION: CREDITS */}
          <div className="w-full pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Status System */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black text-white uppercase italic tracking-widest">System Active</span>
              </div>
              <div className="h-4 w-[1px] bg-white/20" />
              <div className="flex items-center gap-2">
                <Zap size={12} className="text-[#c5a059]" />
                <span className="text-[10px] font-black text-zinc-400 uppercase italic tracking-widest">v2026.1.0</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-[10px] font-black uppercase italic tracking-tighter text-zinc-400">
              <span>© {currentYear} Handcrafted with</span>
              <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
              <span>by <span className="text-white underline decoration-[#c5a059] underline-offset-4">Hasan</span></span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}