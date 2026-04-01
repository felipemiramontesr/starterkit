import { type ReactElement } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

interface WhatsAppFloatingProps {
  isShifted: boolean;
}

export const WhatsAppFloating = ({ isShifted }: WhatsAppFloatingProps): ReactElement => {
  const whatsappUrl = BUSINESS_CONFIG.whatsapp.getApiUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group fixed z-[110] h-16 flex flex-row-reverse items-center bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 overflow-hidden w-16 hover:w-[240px] px-0 ${
        isShifted 
          ? 'bottom-[200px] md:bottom-[160px] right-6 md:right-[40px]' 
          : 'bottom-6 right-6'
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* Icono anclado a la derecha (estacionario) */}
      <div className="w-16 h-16 flex items-center justify-center shrink-0 relative z-20">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute top-4 right-4 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
        </span>
      </div>

      {/* Texto que se revela hacia la izquierda */}
      <span className="grow opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap font-bold text-base pr-0 group-hover:pr-2 pl-6 pointer-events-none">
        ¿Podemos ayudarte?
      </span>
    </a>
  );
};
