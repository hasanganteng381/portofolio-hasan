import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Trophy, ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const FORMSPREE_URL = "https://formspree.io/f/mgopjyka";

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100),
  email: z.string().trim().email('Email tidak valid').max(255),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000),
});

const contactInfo = [
  { icon: Mail, label: 'COMM CHANNEL', value: 'hasancoding381@gmail.com', href: 'mailto:hasancoding381@gmail.com' },
  { icon: Phone, label: 'TACTICAL LINE', value: '+62 853-3933-0842', href: 'https://wa.me/6285339330842' },
  { icon: MapPin, label: 'BASE OPS', value: 'Banda Aceh, Indonesia', href: '#' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Failed");
      toast({ title: 'STRATEGY RECEIVED ✨', description: 'Pesan sudah masuk ke markas, segera diproses.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({ title: 'TRANSMISSION ERROR', description: 'Gagal mengirim pesan, coba lagi.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#ebeae6] dark:bg-zinc-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
          <span className="text-[#c5a059] font-black uppercase tracking-[0.4em] text-xs italic mb-4 block">Direct Comms</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter">
            JOIN THE <span className="text-[#c5a059]">FIRST TEAM</span>
          </h2>
          <div className="mt-6 flex justify-center gap-1">
            <div className="w-16 h-1.5 bg-[#1e2b4d] dark:bg-white" />
            <div className="w-4 h-1.5 bg-[#c5a059]" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* LEFT: INFO */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-3xl font-black text-[#1e2b4d] dark:text-white uppercase italic tracking-tighter mb-4">
                READY FOR <br/> <span className="text-[#c5a059]">NEW CHALLENGES?</span>
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium italic">
                Punya proyek ambisius? Mari kita bangun mahakarya digital bersama dengan presisi taktis.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a 
                  key={info.label} 
                  href={info.href} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ delay: index * 0.1 }}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-[#1e2b4d] dark:bg-[#c5a059] translate-x-2 translate-y-2 z-0 opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative flex items-center gap-6 p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <div className="p-3 bg-[#1e2b4d] text-[#c5a059]">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-[#c5a059] mb-1">{info.label}</p>
                      <p className="text-sm font-bold text-[#1e2b4d] dark:text-white uppercase tracking-tight">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT: TACTICAL FORM */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="lg:col-span-3 space-y-8 p-8 md:p-12 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 relative overflow-hidden"
          >
            {/* Background Decor */}
            <Trophy className="absolute -right-8 -bottom-8 w-48 h-48 text-black/[0.02] dark:text-white/[0.02] -rotate-12 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="relative">
                <span className="absolute -top-3 left-4 text-[10px] font-black text-[#c5a059] bg-white dark:bg-zinc-900 px-2 z-20">01 / NAME</span>
                <input 
                  name="name" value={formData.name} onChange={handleChange}
                  className="w-full bg-transparent border-2 border-zinc-100 dark:border-zinc-800 p-4 text-sm font-bold uppercase tracking-tighter focus:border-[#c5a059] outline-none transition-colors"
                />
                {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase italic">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <span className="absolute -top-3 left-4 text-[10px] font-black text-[#c5a059] bg-white dark:bg-zinc-900 px-2 z-20">02 / EMAIL</span>
                <input 
                  name="email" value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-2 border-zinc-100 dark:border-zinc-800 p-4 text-sm font-bold uppercase tracking-tighter focus:border-[#c5a059] outline-none transition-colors"
                />
                {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 uppercase italic">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div className="relative">
              <span className="absolute -top-3 left-4 text-[10px] font-black text-[#c5a059] bg-white dark:bg-zinc-900 px-2 z-20">03 / OBJECTIVE</span>
              <input 
                name="subject" value={formData.subject} onChange={handleChange}
                className="w-full bg-transparent border-2 border-zinc-100 dark:border-zinc-800 p-4 text-sm font-bold uppercase tracking-tighter focus:border-[#c5a059] outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <span className="absolute -top-3 left-4 text-[10px] font-black text-[#c5a059] bg-white dark:bg-zinc-900 px-2 z-20">04 / INTEL BRIEF</span>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows={5}
                className="w-full bg-transparent border-2 border-zinc-100 dark:border-zinc-800 p-4 text-sm font-bold uppercase tracking-tighter focus:border-[#c5a059] outline-none transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" disabled={isSubmitting}
              className="group relative w-full bg-[#1e2b4d] dark:bg-[#c5a059] text-white dark:text-[#1e2b4d] p-5 font-black uppercase italic tracking-[0.3em] overflow-hidden transition-all active:scale-95"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <><Send size={18} strokeWidth={3}/> SEND TRANSMISSION</>}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}