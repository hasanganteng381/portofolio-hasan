import { motion } from "framer-motion";
import { Code, Palette, Database, Camera, Zap, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Tactical Frontend",
    icon: Code,
    description: "Membangun antarmuka yang presisi dan responsif.",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Visual & Creative",
    icon: Camera,
    description: "Eksekusi konten visual dan dokumenter budaya.",
    items: [
      { name: "Photography", level: 90 },
      { name: "UI/UX Design", level: 85 },
      { name: "Video Editing", level: 75 },
      { name: "Figma", level: 80 },
    ],
  },
  {
    title: "Engine & Backend",
    icon: Database,
    description: "Struktur data dan performa sistem yang tangguh.",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "PostgreSQL / Mongo", level: 65 },
      { name: "Zod Validation", level: 85 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-[#ebeae6] dark:bg-zinc-950 overflow-hidden"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <Zap size={400} className="text-[#1e2b4d] dark:text-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Shield className="text-[#c5a059] w-5 h-5" />
            <span className="text-[#c5a059] font-black uppercase tracking-[0.4em] text-xs italic">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter">
            THE <span className="text-[#c5a059]">SKILLS</span> SET
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            Mastering the art of digital performance
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background dengan Border Emas Tipis */}
              <div className="absolute inset-0 bg-white dark:bg-zinc-900 border-b-4 border-[#1e2b4d] dark:border-[#c5a059] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
              
              <div className="relative p-8 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 h-full">
                {/* ICON & TITLE */}
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 bg-[#1e2b4d] dark:bg-[#c5a059] text-white dark:text-[#1e2b4d]">
                    <category.icon size={24} />
                  </div>
                  <span className="text-4xl font-black text-[#1e2b4d]/5 dark:text-white/5 italic">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-8 font-medium italic">
                  {category.description}
                </p>

                {/* SKILL ITEMS */}
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-black uppercase tracking-wider text-[#1e2b4d] dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-black text-[#c5a059]">
                          {item.level}%
                        </span>
                      </div>
                      
                      {/* Custom Progress Bar */}
                      <div className="h-[6px] w-full bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#1e2b4d] to-[#c5a059] dark:from-[#c5a059] dark:to-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center items-center gap-4 opacity-20"
        >
          <div className="h-px w-20 bg-[#1e2b4d] dark:bg-white" />
          <span className="text-[10px] font-black uppercase tracking-[1em] text-[#1e2b4d] dark:text-white">
            Excellence
          </span>
          <div className="h-px w-20 bg-[#1e2b4d] dark:bg-white" />
        </motion.div>
      </div>
    </section>
  );
}