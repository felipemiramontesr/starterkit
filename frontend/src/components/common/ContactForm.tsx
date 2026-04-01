import { type ReactElement } from 'react';
import { Send } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const ContactForm = (): ReactElement => {
  const whatsappUrl = BUSINESS_CONFIG.whatsapp.getApiUrl();

  return (
    <div className="w-full max-w-2xl mx-auto p-12 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 shadow-2xl relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-600" />
      
      <div className="text-center">
        <h3 className="text-3xl font-extrabold text-white mb-4">Línea Directa</h3>
        <p className="text-gray-400 mb-10 text-lg max-w-lg mx-auto font-light leading-relaxed">
          Hemos optimizado nuestra comunicación. Haz clic a continuación para abrir un canal seguro de WhatsApp e iniciar operaciones inmediatas de forma ágil y encriptada.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95 ring-1 ring-emerald-400/50"
        >
          <Send className="w-6 h-6" />
          Conectar WhatsApp Seguro
        </a>
      </div>
    </div>
  );
};
