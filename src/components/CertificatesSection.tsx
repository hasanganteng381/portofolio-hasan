import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

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
      className="
      py-20 md:py-32 px-4
      bg-gradient-to-b 
      from-orange-200 via-yellow-50 to-amber-100
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
            Kredensial
          </span>

          <h2 className="
            text-3xl md:text-5xl font-bold mb-4
            text-amber-900 dark:text-orange-200
          ">
            Sertifikat & Lisensi
          </h2>

          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
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

                {/* ICON */}
                <div className="
                  w-14 h-14 flex items-center justify-center rounded-xl mb-4
                  bg-gradient-to-br from-amber-300 to-yellow-200
                  dark:from-orange-500/20 dark:to-amber-500/20
                ">
                  <span className="text-2xl">{cert.image}</span>
                </div>

                {/* CONTENT */}
                <div className="space-y-3">

                  {/* TITLE */}
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-amber-600 dark:text-orange-300 mt-1 shrink-0" />

                    <h3 className="
                      text-lg font-bold
                      text-amber-900 dark:text-orange-200
                      group-hover:text-amber-600 dark:group-hover:text-orange-400
                      transition
                    ">
                      {cert.title}
                    </h3>
                  </div>

                  {/* ISSUER */}
                  <p className="
                    text-sm
                    text-amber-800 dark:text-orange-200/80
                  ">
                    {cert.issuer}
                  </p>

                  {/* DATE */}
                  <div className="
                    flex items-center gap-2 text-sm
                    text-amber-700 dark:text-orange-300
                  ">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>

                  {/* ID */}
                  <p className="
                    text-xs font-mono
                    text-amber-600 dark:text-orange-300/70
                  ">
                    ID: {cert.credentialId}
                  </p>

                  {/* BUTTON */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1 text-sm mt-2 px-3 py-1.5 rounded-full
                      bg-amber-200 text-amber-900
                      hover:bg-amber-400
                      dark:bg-zinc-700 dark:text-orange-300 dark:hover:bg-orange-500/30
                      transition
                    "
                  >
                    <ExternalLink className="h-4 w-4" />
                    Verifikasi
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}