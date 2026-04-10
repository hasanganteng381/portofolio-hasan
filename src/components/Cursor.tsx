"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Koordinat mentah dari mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Konfigurasi Spring untuk membuat efek DELAY
  // stiffness: semakin rendah, semakin lambat mengejar mouse (delay makin terasa)
  // damping: semakin tinggi, semakin sedikit goyangan saat berhenti
  const springConfig = { 
    damping: 35, 
    stiffness: 150, 
    mass: 0.8 
  };

  const edgeX = useSpring(mouseX, springConfig);
  const edgeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    // Menangani hover pada link, button, dan elemen interaktif lainnya
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="w-10 h-10 bg-contain bg-no-repeat bg-center"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: edgeX,
          y: edgeY,
          translateX: "-50%",
          translateY: "-50%",
          /** * GANTI URL DI BAWAH:
           * Masukkan file cursor yang kamu ambil dari website custom cursor ke folder /public
           */
          backgroundImage: isHovered 
            ? "url('/cursor-pointer.png')" 
            : "url('/cursor-normal.png')",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 15 : 0, // Sedikit rotasi saat hover agar lebih dinamis
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};

export default CustomCursor;