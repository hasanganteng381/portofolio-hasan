import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

const FORMSPREE_URL = "https://formspree.io/f/meepnpdb";

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100),
  email: z.string().trim().email('Email tidak valid').max(255),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kodingarsil@gmail.com',
    href: 'mailto:kodingarsil@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 859-5012-4923',
    href: 'https://wa.me/6285950124923', // ✅ FIXED
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed");

      toast({
        title: 'Pesan Terkirim ✨',
        description: 'Masuk ke email aku, santai 😏',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      toast({
        title: 'Gagal Mengirim',
        description: 'error, coba lagi ya.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
      py-20 md:py-32 px-4
      bg-gradient-to-b 
      from-amber-100 via-yellow-50 to-orange-200
      dark:from-stone-900 dark:via-neutral-900 dark:to-zinc-900
    "
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 dark:text-orange-300 font-medium mb-2 block">
            Kontak
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-amber-900 dark:text-orange-200">
            Hubungi Saya
          </h2>

          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <motion.div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900 dark:text-orange-200">
                Mari Berkolaborasi!
              </h3>

              <p className="text-amber-800 dark:text-orange-200/80">
                Punya ide? Gas aja.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="
                    flex items-center gap-4 p-4 rounded-xl
                    bg-white/60 backdrop-blur border border-amber-200
                    hover:shadow-[0_0_15px_rgba(255,180,100,0.3)]
                    hover:scale-[1.02]
                    transition-all
                    dark:bg-zinc-800/60 dark:border-zinc-700
                  "
                >
                  <div className="p-3 rounded-lg bg-amber-200 dark:bg-orange-500/20">
                    <info.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 p-6 rounded-2xl bg-white/60 backdrop-blur border border-amber-200 shadow-md dark:bg-zinc-800/60"
          >
            <input
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              name="subject"
              placeholder="Subjek"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <textarea
              name="message"
              placeholder="Pesan..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/80 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white hover:opacity-90 transition"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Kirim Pesan
                </>
              )}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}