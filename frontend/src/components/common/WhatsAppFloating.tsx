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
      className={`group fixed z-[110] h-16 flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 ease-in-out transform hover:scale-110 active:scale-95 overflow-hidden w-16 hover:w-auto px-0 hover:px-6 ${
        isShifted 
          ? 'bottom-[200px] md:bottom-[160px] right-6 md:right-[40px]' 
          : 'bottom-6 right-6'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center whitespace-nowrap">
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out font-bold text-sm md:text-base mr-0 group-hover:mr-3">
          ¿Podemos ayudarte?
        </span>
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current shrink-0" />
      </div>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600"></span>
      </span>
    </a>
  );
};
