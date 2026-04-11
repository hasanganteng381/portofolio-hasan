import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react'; // ShieldCheck tetap dihapus
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, link: 'https://github.com/hasanganteng381' },
    { icon: Instagram, link: 'https://instagram.com/mhdhasan_42' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-[#ebeae6] dark:bg-zinc-950"
    >
      {/* BACKGROUND GRADIENT & TEXTURE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(197,160,89,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(30,43,77,0.1),transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/concrete-wall-2.png')` }}
        />
      </div>

      {/* WATERMARK BACKGROUND */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden select-none opacity-[0.07] hidden lg:block">
        <h2 className="text-[22vw] font-black text-blue-950 leading-none uppercase italic tracking-tighter">
          MADRID
        </h2>
      </div>

      {/* FLOATING SOCIAL BAR */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0, y: ["-50%", "-52%", "-50%"] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          x: { delay: 1, duration: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 p-5 rounded-full 
        bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-700/50 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
      >
        <div className="w-px h-10 bg-[#c5a059]/40 mb-2" />
        {socialLinks.map((item, i) => (
          <motion.a 
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, color: '#c5a059' }}
            className="text-[#1e2b4d] dark:text-gray-300 transition-colors"
          >
            <item.icon size={20} strokeWidth={2.5} />
          </motion.a>
        ))}
        <div className="w-px h-10 bg-[#c5a059]/40 mt-2" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 mt-32 md:mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* FOTO SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Corner Borders Emas (Dibiarkan untuk estetika, tapi bisa dihapus jika perlu) */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-32 h-32 border-t-[12px] border-r-[12px] border-[#c5a059]/40 z-0" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 border-b-[12px] border-l-[12px] border-[#c5a059]/40 z-0" 
            />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 group cursor-pointer"
            >
              {/* KONTEN FOTO - Tanpa Border */}
              <div className="w-64 h-80 md:w-[350px] md:h-[450px] overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.15)] relative">
                {/* Efek Shine hover tetap ada */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />
                <img
                  src="/profile.jpg" 
                  alt="Hero Profile"
                  className="w-full h-full object-cover grayscale-[5%] contrast-110 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* LOGO MADRID TANPA FRAME/BORDER */}
              <motion.div 
                animate={{ y: [0, 5, 0], rotate: [-5, -2, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 z-30 pointer-events-none" // Menghapus p-2, rounded-full, border, background
              >
                {/* Pastikan file logo-madrid.png ada di folder public */}
                <img 
                  src="/cursor-normal.png" 
                  alt="Real Madrid Logo" 
                  className="w-20 h-20 object-contain drop-shadow-2xl" // Memberikan bayangan agar logo tetap terlihat jelas di BG terang
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TEXT CONTENT SECTION */}
          <div className="w-full md:w-[550px] text-left z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[3px] w-12 bg-[#1e2b4d] dark:bg-yellow-500" />
              <span className="text-sm font-black tracking-[0.2em] text-[#c5a059] uppercase italic">
                The New Galactico
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl md:text-8xl font-black leading-[0.85] text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter"
            >
              HASAN <br />
              <span className="text-[#c5a059] drop-shadow-sm">KHALIS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight my-8 leading-tight max-w-md"
            >
              Web Developer & Visual Creator. <br />
              Membangun Mahakarya digital dengan semangat <span className="text-[#1e2b4d] dark:text-blue-400 underline underline-offset-4 decoration-[#c5a059] decoration-4 font-black">MADRID</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#1e2b4d] hover:bg-[#c5a059] text-white rounded-none px-10 py-7 text-xl font-black italic uppercase transition-all shadow-[6px_6px_0px_#c5a059] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                View Works
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[3px] border-[#1e2b4d] dark:border-white text-[#1e2b4d] dark:text-white rounded-none px-10 py-7 text-xl font-black italic uppercase hover:bg-[#1e2b4d] hover:text-white transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.1)]"
              >
                Contact
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-[#c5a059]" strokeWidth={3} />
      </motion.button>
    </section>
  );
}