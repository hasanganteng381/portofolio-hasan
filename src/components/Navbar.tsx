import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? isDark
            ? 'bg-zinc-950/90 border-b border-white/10 backdrop-blur-xl shadow-2xl py-2'
            : 'bg-white/90 border-b border-[#c5a059]/20 backdrop-blur-xl shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* LOGO SECTION - Ganti Kaktus ke Logo Madrid Style */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className={`flex items-center gap-3 font-black text-xl md:text-2xl cursor-pointer uppercase italic tracking-tighter ${
              isDark ? 'text-white' : 'text-[#1e2b4d]'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Trophy className={`w-8 h-8 ${isDark ? 'text-[#c5a059]' : 'text-[#c5a059]'}`} strokeWidth={2.5} />
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#c5a059]/20 blur-xl rounded-full"
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-black tracking-[0.3em] text-[#c5a059] not-italic">portofolio</span>
              <span>HASAN</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-sm font-black uppercase italic tracking-widest transition-all relative group cursor-pointer ${
                  isDark
                    ? 'text-gray-300 hover:text-[#c5a059]'
                    : 'text-[#1e2b4d] hover:text-[#c5a059]'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c5a059] transition-all group-hover:w-full" />
              </motion.a>
            ))}
            
            <div className="h-6 w-[1px] bg-[#c5a059]/30 mx-2" />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-none border-2 border-transparent hover:border-[#c5a059] transition-all ${
                isDark ? 'text-white hover:bg-white/5' : 'text-[#1e2b4d] hover:bg-[#1e2b4d]/5'
              }`}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5 text-[#c5a059]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-none ${isDark ? 'text-[#c5a059]' : 'text-[#1e2b4d]'}`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isDark ? 'text-white' : 'text-[#1e2b4d]'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-y-0 right-0 w-3/4 z-[110] shadow-2xl flex flex-col p-8 ${
              isDark
                ? 'bg-[#1e2b4d] text-white'
                : 'bg-white text-[#1e2b4d]'
            }`}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-black italic text-[#c5a059]">MENU</span>
              <X className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-2xl font-black uppercase italic tracking-tighter transition-colors ${
                    isDark ? 'hover:text-[#c5a059]' : 'hover:text-[#c5a059]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="mt-auto border-t border-[#c5a059]/20 pt-6">
              <p className="text-[10px] font-black tracking-widest uppercase opacity-50">
                Created for the Galacticos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}