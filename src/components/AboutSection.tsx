import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const stats = [
    { icon: Code2, value: '10+', label: 'Projects' },
    { icon: Video, value: '10+', label: 'Content' },
    // { icon: Coffee, value: '1000+', label: 'Coffee' },
    // { icon: Rocket, value: '5+', label: 'Experience' },
  ];

  const accordion = [
    {
      title: 'Siapa Saya?',
      content:
        'Saya adalah Fullstack Developer yang fokus membangun web modern dengan pengalaman UI/UX yang nyaman dan performa tinggi.',
    },
    {
      title: 'Apa yang Saya Kerjakan?',
      content:
        'Saya mengembangkan aplikasi web, UI interaktif, serta membuat konten edukasi seputar teknologi dan programming.',
    },
    {
      title: 'Goals Saya?',
      content:
        'Membangun produk digital yang impactful dan bisa digunakan banyak orang, serta berkembang menjadi developer kelas global.',
    },
    {
      title: 'Apa Hobi Saya?',
      content:
        'Saya sering bermain FF',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 
      bg-gradient-to-b from-amber-50 to-orange-100
      dark:from-zinc-900 dark:to-neutral-900"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-medium mb-2 block">
            About Me
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4
          text-amber-900 dark:text-orange-200">
            Mengenal Lebih Dekat
          </h2>

          <div className="w-20 h-1 mx-auto rounded-full
          bg-amber-400 dark:bg-orange-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO / VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="aspect-square rounded-2xl overflow-hidden
              bg-amber-200 dark:bg-zinc-800
              flex items-center justify-center text-7xl
              shadow-[0_0_40px_rgba(251,191,36,0.3)]
              dark:shadow-[0_0_40px_rgba(251,146,60,0.2)]"
            >
            🌵
            </motion.div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -right-6 p-4 rounded-xl
            bg-amber-300 text-amber-900
            dark:bg-zinc-800 dark:text-orange-300
            shadow-lg">
              <p className="font-bold text-xl">5+ Tahun</p>
              <p className="text-xs opacity-80">Experience</p>
            </div>
          </motion.div>

          {/* TEXT + ACCORDION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold
            text-amber-900 dark:text-orange-200">
              Muhammad Arsil Bisyari
            </h3>

            <p className="text-sm md:text-base leading-relaxed
            text-amber-800 dark:text-orange-200/80">
              Saya membangun aplikasi web modern yang tidak hanya fungsional,
              tapi juga nyaman digunakan. Fokus saya adalah performa, desain,
              dan pengalaman pengguna.
            </p>

            {/* ACCORDION */}
            <div className="space-y-3">
              {accordion.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden
                  bg-amber-200 dark:bg-zinc-800"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="font-medium text-amber-900 dark:text-orange-200">
                      {item.title}
                    </span>

                    <ChevronDown
                      className={`transition-transform ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === i && (
                    <div className="px-4 pb-4 text-sm
                    text-amber-800 dark:text-orange-200/80">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl text-center
                  bg-amber-200 dark:bg-zinc-800
                  hover:scale-105 transition"
                >
                  <stat.icon className="h-5 w-5 mx-auto mb-2
                  text-amber-900 dark:text-orange-300" />

                  <p className="text-xl font-bold
                  text-amber-900 dark:text-orange-200">
                    {stat.value}
                  </p>

                  <p className="text-xs
                  text-amber-800 dark:text-orange-200/70">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}