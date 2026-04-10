import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'TACTICAL FRONTEND',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway Stripe dan inventory management.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Creative Content Series',
    category: 'VISUAL & CREATIVE',
    description: 'Seri dokumenter budaya dan street photography yang menangkap esensi kearifan lokal Aceh.',
    tags: ['Photography', 'Editing', 'Culture'],
    youtube: '#',
  },
  {
    title: 'Learning Management System',
    category: 'TACTICAL FRONTEND',
    description: 'Platform edukasi interaktif dengan sistem tracking progres belajar dan video streaming terintegrasi.',
    tags: ['React', 'TypeScript', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    category: 'VISUAL & CREATIVE',
    description: 'Dashboard analytics dengan visualisasi data real-time untuk manajemen konten media sosial.',
    tags: ['Figma', 'Tailwind', 'Firebase'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    category: 'TACTICAL FRONTEND',
    description: 'Tool otomasi konten menggunakan integrasi OpenAI API untuk meningkatkan produktivitas kreator.',
    tags: ['Python', 'OpenAI', 'React'],
    github: '#',
    demo: '#',
  },
];

export default function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const projectVariants = {
    active: { scale: 1, filter: 'blur(0px)', opacity: 1, zIndex: 10, x: '0%', rotateY: 0 },
    prev: { scale: 0.75, filter: 'blur(8px)', opacity: 0.3, zIndex: 0, x: '-60%', rotateY: 15 },
    next: { scale: 0.75, filter: 'blur(8px)', opacity: 0.3, zIndex: 0, x: '60%', rotateY: -15 },
  };

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[#ebeae6] dark:bg-zinc-950 overflow-hidden min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#c5a059] font-black uppercase tracking-[0.4em] text-xs italic mb-4 block">
            The Trophy Room
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter">
            SELECTED <span className="text-[#c5a059]">WORKS</span>
          </h2>
          <div className="mt-6 flex justify-center gap-1">
            <div className="w-16 h-1.5 bg-[#1e2b4d] dark:bg-white" />
            <div className="w-4 h-1.5 bg-[#c5a059]" />
          </div>
        </motion.div>

        {/* MAIN CAROUSEL DISPLAY */}
        <div className="relative flex justify-center items-center h-[450px] md:h-[500px] overflow-visible perspective-1000">
          
          {/* Navigation Controls */}
          <button onClick={prevProject} className="absolute left-0 md:left-10 z-50 p-4 group transition-transform active:scale-95">
            <ChevronLeft size={32} className="text-[#1e2b4d] dark:text-[#c5a059] group-hover:scale-125 transition-transform" strokeWidth={3} />
          </button>
          
          <button onClick={nextProject} className="absolute right-0 md:right-10 z-50 p-4 group transition-transform active:scale-95">
            <ChevronRight size={32} className="text-[#1e2b4d] dark:text-[#c5a059] group-hover:scale-125 transition-transform" strokeWidth={3} />
          </button>

          <AnimatePresence initial={false} mode="popLayout">
            {[-1, 0, 1].map((offset) => {
              const index = (activeProjectIndex + offset + projects.length) % projects.length;
              const project = projects[index];
              const variant = offset === 0 ? 'active' : offset === -1 ? 'prev' : 'next';

              return (
                <motion.div
                  key={`${project.title}-${offset}`}
                  initial={{ opacity: 0 }}
                  animate={variant}
                  variants={projectVariants}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-full max-w-[320px] md:max-w-[420px] group"
                >
                  {/* GALACTICO SHAPE (Shadow Offset) */}
                  <div className="absolute inset-0 bg-[#1e2b4d] dark:bg-[#c5a059] translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl z-10">
                    
                    {/* Large Background Number */}
                    <span className="absolute -right-8 -top-12 text-[15rem] md:text-[20rem] font-black italic text-[#c5a059]/5 dark:text-[#c5a059]/10 select-none pointer-events-none tracking-tighter transition-colors group-hover:text-[#c5a059]/20">
                      {index + 1}
                    </span>

                    <div className="p-8 md:p-10 space-y-6 relative z-10">
                      <div className="flex justify-between items-center border-l-4 border-[#c5a059] pl-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2b4d] dark:text-[#c5a059]">
                          {project.category}
                        </span>
                        <Trophy size={16} className="text-[#c5a059]" />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter leading-[0.9] group-hover:text-[#c5a059] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium italic line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-[8px] font-black uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-transparent group-hover:border-[#c5a059]/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-6 pt-6 border-t border-zinc-100 dark:border-white/5">
                        {project.github && (
                          <a href={project.github} className="text-[#1e2b4d] dark:text-white hover:text-[#c5a059] transition-all hover:scale-110">
                            <Github size={22} />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} className="flex items-center gap-2 text-[#1e2b4d] dark:text-white hover:text-[#c5a059] transition-all group/link">
                            <ExternalLink size={22} />
                            <span className="text-[10px] font-black uppercase italic tracking-widest border-b border-transparent group-hover/link:border-[#c5a059]">Live Demo</span>
                          </a>
                        )}
                        {project.youtube && (
                          <a href={project.youtube} className="flex items-center gap-2 text-[#1e2b4d] dark:text-white hover:text-[#c5a059] transition-all group/link">
                            <Play size={22} />
                            <span className="text-[10px] font-black uppercase italic tracking-widest border-b border-transparent group-hover/link:border-[#c5a059]">Watch Work</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* BOTTOM PAGINATION INDICATORS */}
        <div className="flex justify-center items-center gap-4 mt-20">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveProjectIndex(i)}
              className="group relative h-4 flex items-center"
              whileHover={{ scale: 1.2 }}
            >
              <div 
                className={`transition-all duration-500 rounded-none ${
                  i === activeProjectIndex 
                  ? 'w-12 bg-[#c5a059] h-1.5' 
                  : 'w-3 bg-[#1e2b4d]/20 dark:bg-zinc-800 h-1 hover:bg-[#c5a059]/50'
                }`}
              />
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}