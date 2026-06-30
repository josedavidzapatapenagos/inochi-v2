import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Animación fluida de altura y opacidad basada en el scroll
  const height = useTransform(scrollY, [0, 50], [80, 64]);
  const smoothHeight = useSpring(height, { stiffness: 300, damping: 30 });
  
  const linkClass = "text-slate-600 dark:text-slate-200 hover:text-inochi-lime transition-all duration-300 font-bold uppercase tracking-widest text-xs";
  
  return (
    <motion.nav 
      style={{ height: smoothHeight }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md px-6 md:px-12 flex justify-between items-center transition-colors duration-500"
    >
      {/* LOGO */}
      <div className="flex flex-col justify-center leading-none select-none cursor-pointer group">
        <span className="text-2xl font-black tracking-tight text-slate-800 dark:text-white uppercase transition-colors duration-500 group-hover:text-inochi-lime">
          INOCHI
        </span>
      </div>
      
      {/* LINKS ESCRITORIO */}
      <div className="hidden md:flex gap-8">
        <a href="#inicio" className={linkClass}>Inicio</a>
        <a href="#ejes" className={linkClass}>Ejes</a>
        <a href="#programas" className={linkClass}>Programas</a>
        <a href="#nosotros" className={linkClass}>Nosotros</a>
      </div>

      {/* ACCIONES */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        {/* BOTÓN HAMBURGUESA */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-[2px] bg-black dark:bg-white mb-1.5 transition-all ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <div className={`w-6 h-[2px] bg-black dark:bg-white ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-[2px] bg-black dark:bg-white mt-1.5 transition-all ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

        <a href="#contacto" className="hidden md:flex bg-inochi-lime text-black font-black uppercase tracking-wider text-xs rounded-full px-6 h-10 items-center hover:scale-105 transition-all duration-300">
          Contacto
        </a>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#inicio" onClick={() => setIsOpen(false)} className={linkClass}>Inicio</a>
            <a href="#ejes" onClick={() => setIsOpen(false)} className={linkClass}>Ejes</a>
            <a href="#programas" onClick={() => setIsOpen(false)} className={linkClass}>Programas</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="bg-inochi-lime text-black font-black uppercase tracking-wider text-xs rounded-full px-6 h-10 flex items-center justify-center">Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};