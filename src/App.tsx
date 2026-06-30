import { Navbar } from "./components/Navbar";
import { ProgramCards } from "./components/ProgramCards";
import { Identidad } from "./components/Identidad";
import { EjesTransversales } from "./components/EjesTransversales";
import { Contacto } from "./components/Contacto";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { BlogManager } from "./components/BlogManager"; 
import { Link } from "@heroui/react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react"; // Importamos el icono
import isotipoHoja from "./assets/imagen_2026-05-20_193826631-removebg-preview.png";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 antialiased overflow-x-hidden selection:bg-inochi-lime selection:text-black">
      <Navbar />
      
      {/* SECCIÓN HERO */}
      <section id="inicio" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-inochi-lime/5 dark:bg-inochi-lime/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-inochi-slate/5 dark:bg-inochi-slate/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="opacity-0 animate-fade-in-up flex flex-col items-center justify-center mb-10 select-none pointer-events-none">
          <img 
            src={isotipoHoja} 
            className="w-40 h-40 mb-8 object-contain dark:drop-shadow-[0_0_20px_rgba(154,190,45,0.3)] transition-all duration-500" 
            alt="Inochi" 
          />
          <span className="text-5xl font-black tracking-[0.2em] text-slate-800 dark:text-white uppercase transition-colors duration-500">
            INOCHI
          </span>
          <div className="h-[3px] w-24 bg-inochi-lime my-4 transition-all duration-500" />
        </div>

        <h1 className="opacity-0 animate-fade-in-up animation-delay-400 text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight transition-colors duration-500">
          CULTIVANDO SALUD MENTAL,<br /> 
          <span className="text-inochi-lime">FORTALECIENDO COMUNIDADES</span>
        </h1>
        
        <div className="opacity-0 animate-fade-in-up animation-delay-800 flex flex-col sm:flex-row gap-4 z-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#programas" className="bg-inochi-lime text-black font-bold h-12 px-8 rounded-full text-sm uppercase tracking-wider flex items-center justify-center">
              Explorar Programas
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#nosotros" className="border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-bold h-12 px-8 rounded-full text-sm uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center">
              Nuestra Misión
            </Link>
          </motion.div>
        </div>
      </section>

      <Identidad />
      <EjesTransversales />
      
      <section id="programas" className="py-20">
        <ProgramCards />
      </section>

      {/* SECCIÓN DE ADMINISTRACIÓN DE PÍLDORAS */}
      <section id="blog" className="py-20 bg-slate-100 dark:bg-black/20">
        <BlogManager />
      </section>

      {/* SECCIÓN LEGAL INTEGRADA */}
      <section id="legal" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Legal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "ESTADOS FINANCIEROS 2024", url: "/estados-financieros-2024.pdf" },
              { title: "INFORME DE GESTIÓN 2024", url: "/informe-gestion-2024.pdf" }
            ].map((doc, i) => (
              <a 
                key={i}
                href={doc.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-slate-50 dark:bg-[#111111] p-8 border-t-4 border-inochi-lime shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <FileText className="w-8 h-8 text-inochi-lime mb-6" />
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{doc.title}</h3>
                <p className="text-sm font-bold text-slate-400 group-hover:text-inochi-lime transition-colors">— VER DOCUMENTO</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contacto />
      <WhatsAppFloat />
      
      <footer className="py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest border-t border-slate-100 dark:border-white/5">
        © 2026 Fundación Inochi - 901627164-1
      </footer>
    </div>
  );
}

export default App;