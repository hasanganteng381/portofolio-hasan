import { motion } from "framer-motion";
import { Code, Palette, Database } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: [
      { name: "React", level: 85 },
      { name: "Tailwind", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "UI/UX",
    icon: Palette,
    items: [
      { name: "Figma", level: 80 },
      { name: "Design System", level: 75 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
      py-20 px-4
      bg-gradient-to-b 
      from-orange-200 via-yellow-50 to-amber-100
      dark:from-stone-900 dark:via-neutral-900 dark:to-zinc-900
    "
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-900 dark:text-orange-200">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="
                rounded-2xl p-6 text-left
                bg-white/60 backdrop-blur
                border border-amber-200
                shadow-md hover:shadow-xl

                dark:bg-zinc-800/60
                dark:border-zinc-700
              "
              >
                {/* ICON */}
                <div className="
                  w-12 h-12 flex items-center justify-center rounded-full mb-4
                  bg-amber-300 text-amber-900
                  dark:bg-orange-500/20 dark:text-orange-300
                ">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-4 text-amber-900 dark:text-orange-200">
                  {skill.title}
                </h3>

                {/* SKILL LIST */}
                <div className="space-y-4">
                  {skill.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-amber-800 dark:text-orange-200/80">
                          {item.name}
                        </span>
                        <span className="text-amber-700 dark:text-orange-300">
                          {item.level}%
                        </span>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="w-full h-2 rounded-full bg-amber-200 dark:bg-zinc-700 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1 }}
                          className="
                            h-full rounded-full
                            bg-gradient-to-r from-amber-400 to-yellow-500
                            dark:from-orange-400 dark:to-amber-500
                          "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}