import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Arsil203', // ← ISI DI SINI
      label: 'GitHub',
      active: true,
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/mhd_arsll', // ← ISI DI SINI
      label: 'Instagram',
      active: true,
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      active: false, // masih disimpan
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube',
      active: false, // masih disimpan
    },
  ];

  return (
    <footer
      className="
      py-10

      dark:from-zinc-900 dark:via-neutral-900 dark:to-stone-900
      dark:border-zinc-700
    "
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              flex items-center gap-2 text-sm
              text-amber-800
              dark:text-orange-200/80
            "
          >
            <span>© {currentYear} Made with</span>

            <Heart className="
              h-4 w-4
              text-red-500 fill-red-500
              animate-pulse
            " />

            <span>by Arsil</span>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.active ? social.href : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={social.active ? { scale: 1.15, y: -3 } : {}}
                  className={`
                    p-2 rounded-full transition-all

                    ${social.active
                      ? `
                        bg-amber-200 text-amber-900 hover:bg-amber-400
                        dark:bg-zinc-800 dark:text-orange-300 dark:hover:bg-orange-500/30
                      `
                      : `
                        bg-amber-100 text-amber-400 cursor-not-allowed opacity-50
                        dark:bg-zinc-800 dark:text-zinc-500
                      `
                    }
                  `}
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}