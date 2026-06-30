import { motion } from "framer-motion";
import { Globe, ShieldCheck, Heart, Users, Sprout } from "lucide-react";

export const Identidad = () => {
  // Definición de la constante de valores para que el map funcione
  const valores = [
    { icon: Heart, title: "Compasión", desc: "Empatía como base de toda acción." },
    { icon: Users, title: "Comunidad", desc: "Fortalecemos el tejido social juntos." },
    { icon: Sprout, title: "Bienestar", desc: "Crecimiento integral y sostenible." },
  ];

  return (
    <section id="nosotros" className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-inochi-lime font-bold uppercase tracking-widest text-xs mb-4">Nuestra Esencia</p>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase mb-8">¿Qué es Inochi?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Somos una organización con propósito, dedicada a transformar la salud mental en comunidades y organizaciones.</p>
          </motion.div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" className="w-full h-full object-cover" alt="Equipo" />
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <div className="p-12 rounded-[3rem] bg-slate-50 dark:bg-[#0f0f0f] border border-white/5">
            <Globe className="w-8 h-8 text-inochi-lime mb-6" />
            <h3 className="text-3xl font-black text-inochi-lime uppercase mb-6">Misión</h3>
            <p className="text-slate-600 dark:text-slate-400">Promover el bienestar integral de las personas y comunidades a través de servicios que fomenten la salud mental y la armonía con la naturaleza.</p>
          </div>
          <div className="p-12 rounded-[3rem] bg-slate-50 dark:bg-[#0f0f0f] border border-white/5">
            <ShieldCheck className="w-8 h-8 text-inochi-lime mb-6" />
            <h3 className="text-3xl font-black text-inochi-lime uppercase mb-6">Visión</h3>
            <p className="text-slate-600 dark:text-slate-400">Ser la organización líder en transformación psicosocial, reconocida por nuestra excelencia y compromiso con un futuro sostenible.</p>
          </div>
        </div>
        
        {/* Valores */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Nuestros Valores</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-[#0f0f0f] rounded-3xl">
              <item.icon className="w-12 h-12 text-inochi-lime mb-4" />
              <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};