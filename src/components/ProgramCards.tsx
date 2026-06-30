import { motion } from "framer-motion";


// 1. Importamos las imágenes desde la carpeta assets
import imgSattva from "../assets/programa 1.jpeg"
import imgKaruna from "../assets/programa2.png";
import imgDharma from "../assets/programa3.jpg";
import imgSantosha from "../assets/programa4.jpeg";

const programs = [
  {
    title: "SATTVA",
    desc: "Acciones psicosociales, psicoeducativas y psicoterapéuticas que promueven la salud mental y el bienestar emocional.",
    img: imgSattva,
    link: "/programa/sattva"
  },
  {
    title: "KARUNA",
    desc: "Programas de intervención enfocados en la compasión y la mitigación del sufrimiento en la interacción humano-animal-ambiente.",
    img: imgKaruna,
    link: "/programa/karuna"
  },
  {
    title: "DHARMA",
    desc: "Programa transversal enfocado en el servicio, la creación de sostenibilidad y el apoyo logístico permanente para todas las actividades.",
    img: imgDharma,
    link: "/programa/dharma"
  },
  {
    title: "SANTOSHA",
    desc: "Programa transversal para la creación, implementación y gestión de sistemas de información, calidad y control de datos.",
    img: imgSantosha,
    link: "/programa/santosha"
  }
];

export const ProgramCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
      {programs.map((prog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group relative h-[450px] w-full overflow-hidden rounded-3xl cursor-pointer shadow-xl border border-white/10"
        >
          {/* Imagen de fondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${prog.img})` }}
          />
          
          {/* Degradado para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Contenido */}
          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
            <span className="inline-block px-3 py-1 mb-3 w-fit text-[9px] font-black tracking-widest uppercase bg-inochi-lime text-black rounded-full shadow-lg">
              PILAR INOCHI
            </span>
            <h3 className="text-xl font-black text-white uppercase mb-3 leading-tight text-inochi-lime">
              {prog.title}
            </h3>
            <p className="text-slate-300 text-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
              {prog.desc}
            </p>
            
            
          </div>
        </motion.div>
      ))}
    </div>
  );
};