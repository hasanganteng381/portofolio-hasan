import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    emojis: ['🛒', '💳', '📦'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    emojis: ['📚', '🎥', '📝'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['React', 'Firebase', 'Tailwind'],
    emojis: ['📊', '📈', '💬'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'OpenAI', 'React'],
    emojis: ['🤖', '🧠', '✨'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Premiere Pro', 'YouTube'],
    emojis: ['🎬', '📺', '🔥'],
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Film Pendek',
    description: 'Pembuatan film simpel.',
    tags: ['Premiere Pro', 'YouTube'],
    emojis: ['📷', '📺', '🔥'],
    isContent: true,
    youtube: '#',
  },
];

function EmojiCarousel({ emojis }: { emojis: string[] }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % emojis.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + emojis.length) % emojis.length);
  };

  return (
    <div className="relative flex items-center justify-center h-32 rounded-xl 
    bg-gradient-to-br from-amber-200 to-yellow-100 
    dark:from-zinc-700 dark:to-zinc-800">

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-2 p-1 rounded-full 
        bg-white/70 hover:bg-white 
        dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* EMOJI */}
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-5xl"
      >
        {emojis[index]}
      </motion.span>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-2 p-1 rounded-full 
        bg-white/70 hover:bg-white 
        dark:bg-zinc-800 dark:hover:bg-zinc-700 transition"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
      py-20 md:py-32 px-4
      bg-gradient-to-b 
      from-amber-100 via-yellow-50 to-orange-200
      dark:from-stone-900 dark:via-neutral-900 dark:to-zinc-900
    "
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 dark:text-orange-300 font-medium mb-2 block">
            Portfolio
          </span>

          <h2 className="
            text-3xl md:text-5xl font-bold mb-4
            text-amber-900 dark:text-orange-200
          ">
            Projects & Karya
          </h2>

          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className="
                h-full p-6 rounded-2xl
                bg-white/60 backdrop-blur
                border border-amber-200
                shadow-md hover:shadow-xl
                transition-all duration-300

                dark:bg-zinc-800/60
                dark:border-zinc-700
              "
              >

                {/* 🔥 EMOJI CAROUSEL */}
                <EmojiCarousel emojis={project.emojis} />

                {/* CONTENT */}
                <div className="space-y-3 mt-4">

                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="
                        px-2 py-0.5 text-xs rounded-full
                        bg-orange-200 text-orange-800
                        dark:bg-orange-500/20 dark:text-orange-300
                      ">
                        Content
                      </span>
                    )}

                    <h3 className="
                      text-lg font-bold
                      text-amber-900 dark:text-orange-200
                      group-hover:text-amber-600 dark:group-hover:text-orange-400
                      transition
                    ">
                      {project.title}
                    </h3>
                  </div>

                  <p className="
                    text-sm line-clamp-2
                    text-amber-800 dark:text-orange-200/80
                  ">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-2 py-1 text-xs rounded-md
                          bg-amber-200 text-amber-900
                          dark:bg-zinc-700 dark:text-orange-200
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 flex-wrap">

                    {project.github && (
                      <a href={project.github} className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-amber-200 text-amber-900 hover:bg-amber-400 dark:bg-zinc-700 dark:text-orange-300 dark:hover:bg-orange-500/30 transition">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}

                    {project.demo && (
                      <a href={project.demo} className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white hover:opacity-90 transition">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}

                    {project.youtube && (
                      <a href={project.youtube} className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
                        <Play className="h-4 w-4" />
                        Watch
                      </a>
                    )}

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}