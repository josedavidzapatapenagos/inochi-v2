import { Card } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const EjesTransversales = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const ejes = [
    { id: 0, title: "Salud Mental", subtitle: "(El Equilibrio Interior)", description: "Significa el cultivo proactivo de la resiliencia, la autorregulación emocional y el autoconocimiento. No se limita a la atención de la crisis o la patología, sino al entrenamiento consciente en habilidades que permiten a la persona habitar su mente con compasión y claridad." },
    { id: 1, title: "Naturaleza", subtitle: "(El Vínculo Animal)", description: "En Inochi, la naturaleza no es un escenario, es un agente terapéutico activo. Reconocemos los animales como parte de nuestra realidad humana, pues actúan como espejos emocionales incondicionales." },
    { id: 2, title: "Comunidad", subtitle: "(El Tejido Solidario)", description: "Significa la certeza de que nadie sana ni florece en el aislamiento. Representa la construcción de entornos seguros, colaborativos y sinérgicos donde la vulnerabilidad es acogida, el servicio es mutuo y el bienestar individual se expande para convertirse en bienestar colectivo." },
    { id: 3, title: "Espiritualidad", subtitle: "(La Energía y el Sentido)", description: "La espiritualidad en Inochi es el hálito que anima todo lo que existe. Es la conexión con lo más propio de la existencia, es la invitación a explorar las preguntas esenciales del ser, a conectar con un propósito superior, a cultivar la paz interior y a actuar desde el amor universal y la ética del cuidado." },
  ];

  return (
    <section id="ejes" className="py-20 px-6 bg-slate-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-900 dark:text-white uppercase tracking-tighter">
          Ejes Transversales
        </h2>
        
        {/* Usamos items-start para que la altura de cada celda del grid no fuerce a las otras a estirarse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {ejes.map((eje) => (
            <motion.div
              key={eje.id}
              // El hover solo afecta a la tarjeta seleccionada o a todas de forma independiente
              whileHover={{ y: -8 }}
              className="cursor-pointer"
            >
              <Card 
                onClick={() => setSelectedId(selectedId === eje.id ? null : eje.id)}
                className="border-t-[12px] border-inochi-lime shadow-xl rounded-t-none bg-white dark:bg-slate-900 p-8 transition-all duration-500"
              >
                <div className="flex flex-col">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-2">
                    {eje.title}
                  </h3>
                  <span className="text-inochi-lime font-bold text-sm tracking-widest uppercase mb-6 block">
                    {eje.subtitle}
                  </span>
                  
                  <AnimatePresence mode="wait">
                    {(selectedId === eje.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="relative pl-4 border-l-4 border-inochi-lime/30 mb-6">
                          <p className="text-slate-700 dark:text-slate-200 text-base font-medium leading-relaxed italic">
                            "{eje.description}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="mt-auto pt-4 opacity-60">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {selectedId === eje.id ? "— Ocultar detalles" : "— Ver significado"}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};