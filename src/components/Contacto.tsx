
import { Mail, MapPin, Phone } from "lucide-react";

export const Contacto = () => {
  const whatsappNumber = "573000000000"; // Cambia por tu número
  const whatsappMessage = "Hola, me gustaría información sobre los programas de Inochi.";

  return (
    <section id="contacto" className="py-24 px-6 bg-slate-50 dark:bg-[#0f0f0f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase mb-16 text-center">
          Conecta con <span className="text-inochi-lime">Nosotros</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-[#111] p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 space-y-8">
            <div className="flex items-center gap-6">
              <Mail className="text-inochi-lime" size={30} />
              <p className="text-lg font-bold">Inochifundacion@gmail.com</p>
            </div>
            <div className="flex items-center gap-6">
              <Phone className="text-inochi-lime" size={30} />
              <p className="text-lg font-bold">+57 3162292756</p>
            </div>
            <div className="flex items-center gap-6">
              <MapPin className="text-inochi-lime" size={30} />
              <p className="text-lg font-bold">Envigado, Colombia</p>
            </div>
          </div>
          
          <div className="bg-inochi-lime p-12 rounded-[3.5rem] flex flex-col items-center justify-center text-center text-black">
            <h3 className="text-4xl font-black uppercase mb-6">Chatea con nosotros</h3>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all"
            >
              Iniciar Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};