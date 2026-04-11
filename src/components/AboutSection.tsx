import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Camera, Trophy, ChevronDown, User, Target, Heart } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const stats = [
    { icon: Code2, value: '15+', label: 'Web Projects' },
    { icon: Camera, value: '50+', label: 'Photo Series' },
  ];

  const accordion = [
    {
      title: 'Siapa Saya?',
      icon: User,
      content:
        'Saya adalah seorang Web Developer dan Visual Creator berbasis di Aceh. Seperti filosofi permainan menyerang, saya fokus membangun produk digital yang cepat, tangguh, dan memiliki estetika tinggi.',
    },
    {
      title: 'Apa yang Saya Kerjakan?',
      icon: Target,
      content:
        'Mengembangkan ekosistem web menggunakan React/Next.js serta menangkap momen melalui lensa street photography. Saya percaya bahwa kode dan visual adalah dua bahasa yang saling melengkapi.',
    },
    {
      title: 'Visi & Goals?',
      icon: Trophy,
      content:
        'Menjadi developer kelas global yang mampu menghadirkan solusi digital impactful. Selalu haus akan tantangan baru, layaknya semangat pantang menyerah di menit-menit akhir pertandingan.',
    },
    {
      title: 'Di Luar Coding?',
      icon: Heart,
      content:
        'Selain berkutat dengan syntax, saya aktif dalam eksplorasi berbagai game, terutama Mobile Legend. Dan ya, saya adalah pendukung setia Real Madrid.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#f4f4f2] dark:bg-zinc-950 overflow-hidden"
    >
      {/* Top Border Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#c5a059] font-black uppercase tracking-[0.3em] text-xs italic mb-4 block">
            Inside the Player
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter">
            MENGENAL <span className="text-[#c5a059]">LEBIH DEKAT</span>
          </h2>
          <div className="mt-4 flex justify-center gap-1">
            <div className="w-12 h-1.5 bg-[#1e2b4d] dark:bg-white" />
            <div className="w-4 h-1.5 bg-[#c5a059]" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* FOTO / VISUAL SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Background Decorative Text (RM) */}
            <div className="absolute -top-20 -left-20 w-[120%] h-[120%] italic font-black text-[15rem] text-[#c5a059]/10 select-none pointer-events-none flex items-center justify-center z-0">
              RM
            </div>

            <div className="relative z-10 w-full max-w-[450px]">
              {/* Frame Foto Utama */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden border-[12px] border-white dark:border-zinc-900 shadow-[30px_30px_60px_rgba(0,0,0,0.12)] skew-y-1"
              >
                <img 
                  src="/about.jpg" 
                  alt="About Visual" 
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-110"
                />
                <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none" />
              </motion.div>

              {/* LOGO REAL MADRID TERAPUNG - Tambahan Baru */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [5, -5, 5]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-10 -right-10 z-30 pointer-events-none opacity-80"
              >
                {/* Ganti '/logo-madrid.png' dengan path logo Madrid kamu */}
                <img 
                  src="/cursor-normal.png" 
                  alt="Real Madrid Logo" 
                  className="w-24 h-24 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
                />
              </motion.div>

              {/* Floating Badge (Galactico) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                initial={{ rotate: -2 }}
                className="absolute -bottom-8 -right-4 md:-right-12 p-6 bg-[#1e2b4d] text-white shadow-2xl z-20 min-w-[180px]"
              >
                <div className="relative">
                  <Trophy className="text-[#c5a059] w-8 h-8 mb-2" />
                  <p className="font-black text-2xl italic leading-none tracking-tighter">GALACTICO</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-[#c5a059] font-bold">
                    Spirit of Excellence
                  </p>
                </div>
              </motion.div>

              {/* Decorative Corner Line */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#c5a059] z-0 opacity-50" />
            </div>
          </motion.div>

          {/* TEXT + ACCORDION SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter mb-4">
                Hasan Khalis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic border-l-4 border-[#c5a059] pl-4">
                "Membangun mahakarya digital bukan hanya soal baris kode, tapi soal bagaimana memberikan dampak dan emosi pada setiap pengguna."
              </p>
            </div>

            {/* Accordion Improved */}
            <div className="space-y-3">
              {accordion.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`group border border-[#1e2b4d]/5 dark:border-white/5 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-white dark:bg-zinc-900 shadow-md border-l-[6px] border-l-[#c5a059]' 
                        : 'bg-transparent hover:bg-white/40 dark:hover:bg-white/5 border-l-[6px] border-l-transparent'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 transition-colors duration-300 ${isOpen ? 'bg-[#c5a059] text-white' : 'bg-gray-200 dark:bg-zinc-800 text-gray-500'}`}>
                           <item.icon size={18} strokeWidth={2.5} />
                        </div>
                        <span className={`font-black uppercase italic tracking-wider text-sm md:text-base transition-colors duration-300 ${
                          isOpen ? 'text-[#1e2b4d] dark:text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                        }`}>
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-500 ${
                          isOpen ? 'rotate-180 text-[#c5a059]' : 'text-gray-400 opacity-50'
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 ml-11 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            <div className="h-px w-full bg-gray-100 dark:bg-zinc-800 mb-4" />
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Stats Badges */}
            <div className="flex gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 p-5 border-2 border-[#1e2b4d]/5 dark:border-white/5 bg-white dark:bg-zinc-900 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <stat.icon className="h-5 w-5 mb-2 text-[#c5a059]" />
                  <p className="text-2xl font-black text-[#1e2b4d] dark:text-white italic tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}