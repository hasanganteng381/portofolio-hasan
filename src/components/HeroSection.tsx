import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Arsil203' },
    // { icon: Linkedin, link: 'https://linkedin.com/in/username' },
    // { icon: Youtube, link: 'https://youtube.com/@username' },
    { icon: Instagram, link: 'https://instagram.com/mhd_arsll' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-200
      dark:from-zinc-900 dark:via-neutral-900 dark:to-stone-900"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          {/* FOTO (LEBIH BESAR) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4
              border-amber-400 shadow-[0_0_60px_rgba(251,191,36,0.35)]
              dark:border-orange-400 dark:shadow-[0_0_60px_rgba(251,146,60,0.35)]"
            >
              <img
                src="/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs
            bg-amber-300 text-amber-900 opacity-0 group-hover:opacity-100 transition
            dark:bg-zinc-800 dark:text-orange-300">
              👀 
            </div>
          </motion.div>

          {/* TEXT */}
          <div className="flex-1 text-left md:pl-6">

            <motion.span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4
              bg-amber-200 text-amber-900
              dark:bg-zinc-800 dark:text-orange-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Selamat Datang
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl font-bold mb-4
              text-amber-900 dark:text-orange-200"
            >
              Muhammad Arsil Bisyari
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg mb-6 max-w-lg
              text-amber-800 dark:text-orange-200/80"
            >
              Saya membangun aplikasi web yang indah dan fungsional,
              serta membagikan pengetahuan melalui konten inspiratif.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Button
                size="sm"
                className="rounded-full px-6
                bg-amber-500 hover:bg-amber-600 text-white
                dark:bg-orange-500 dark:hover:bg-orange-600"
              >
                Projects
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-6
                border-amber-500 text-amber-800
                hover:bg-amber-500 hover:text-white
                dark:border-orange-400 dark:text-orange-300
                dark:hover:bg-orange-500 dark:hover:text-white"
              >
                Contact
              </Button>
            </motion.div>

            {/* SOCIAL ICON (SUDAH ADA LINK) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all
                  bg-amber-200 hover:bg-amber-400
                  dark:bg-zinc-800 dark:hover:bg-orange-500"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <item.icon className="h-4 w-4 text-amber-900 dark:text-orange-300" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full
        bg-amber-200 dark:bg-zinc-800"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-amber-900 dark:text-orange-300" />
      </motion.button>
    </section>
  );
}