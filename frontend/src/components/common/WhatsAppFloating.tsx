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
      className={`group fixed z-[110] w-16 h-16 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 transform hover:scale-110 active:scale-95 ${
        isShifted 
          ? 'bottom-[200px] md:bottom-[160px] right-6 md:right-[40px]' 
          : 'bottom-6 right-6'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute right-full mr-4 px-4 py-2 bg-gray-900/90 backdrop-blur-sm border border-gray-800 text-white text-sm font-medium rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl translate-x-2 group-hover:translate-x-0">
        ¿Podemos ayudarte?
      </span>
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600"></span>
      </span>
    </a>
  );
};
