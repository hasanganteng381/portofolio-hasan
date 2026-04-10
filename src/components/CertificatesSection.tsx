import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Trophy } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
    link: '#',
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
    link: '#',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
    link: '#',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
    link: '#',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-24 md:py-32 px-6 bg-[#ebeae6] dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER - GALACTICO STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#c5a059] font-black uppercase tracking-[0.4em] text-xs italic mb-4 block">
            Official Credentials
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter">
            HONORS & <span className="text-[#c5a059]">AWARDS</span>
          </h2>

          <div className="mt-6 flex justify-center gap-1">
            <div className="w-16 h-1.5 bg-[#1e2b4d] dark:bg-white" />
            <div className="w-4 h-1.5 bg-[#c5a059]" />
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* GALACTICO SHAPE (Shadow Offset) */}
              <div className="absolute inset-0 bg-[#1e2b4d] dark:bg-[#c5a059] translate-x-3 translate-y-3 z-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />

              <div className="relative h-full p-8 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm z-10 overflow-hidden">
                
                {/* BACKGROUND WATERMARK */}
                <Trophy className="absolute -right-4 -bottom-4 w-24 h-24 text-black/[0.03] dark:text-white/[0.03] -rotate-12" />

                {/* ICON BOX */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#1e2b4d] dark:bg-zinc-800 border border-[#c5a059]/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]">
                    {cert.image}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="space-y-4 relative z-10">

                  {/* TITLE */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-[#c5a059]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#c5a059]">
                        Verified License
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter leading-tight group-hover:text-[#c5a059] transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  {/* ISSUER */}
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-l-2 border-[#c5a059] pl-3">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    {/* DATE */}
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-400 dark:text-zinc-500">
                      <Calendar size={12} />
                      <span>Class of {cert.date}</span>
                    </div>

                    {/* ID */}
                    <p className="text-[10px] font-mono text-[#c5a059]/70">
                      #{cert.credentialId.split('-').pop()}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="pt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] py-2 px-4 bg-[#1e2b4d] text-white dark:bg-zinc-800 dark:text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-all duration-300 italic"
                    >
                      <ExternalLink size={12} strokeWidth={3} />
                      Validation
                    </a>
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