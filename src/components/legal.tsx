import { FileText } from "lucide-react";

export const Legal = () => {
  const documentos = [
    { title: "ESTADOS FINANCIEROS 2024", file: "/estados-financieros-2024.pdf" },
    { title: "INFORME DE GESTIÓN 2024", file: "/informe-gestion-2024.pdf" },
  ];

  return (
    <section id="legal" className="py-20 px-6 bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Legal
          </h2>
        </div>

        {/* Bloques estilo Ejes Transversales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {documentos.map((doc, index) => (
            <a
              key={index}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-[#111111] p-8 border-t-4 border-inochi-lime shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <FileText className="w-8 h-8 text-inochi-lime mb-6" />
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                {doc.title}
              </h3>
              <p className="text-sm font-bold text-slate-400 group-hover:text-inochi-lime transition-colors">
                — VER DOCUMENTO
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};