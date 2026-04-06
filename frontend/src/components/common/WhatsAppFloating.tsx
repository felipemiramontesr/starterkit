import { type ReactElement } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BUSINESS_CONFIG } from '../../config/business';

interface WhatsAppFloatingProps {
  isShifted: boolean;
}

export const WhatsAppFloating = ({ isShifted }: WhatsAppFloatingProps): ReactElement => {
  const { t } = useTranslation();
  const whatsappUrl = BUSINESS_CONFIG.whatsapp.getApiUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group fixed z-[100] h-16 flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_0_30px_var(--primary-shadow)] transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 overflow-hidden w-16 hover:w-[240px] px-0 hover:px-8 ${
        isShifted 
          ? 'bottom-[200px] md:bottom-[160px] right-6 md:right-[40px]' 
          : 'bottom-6 right-6'
      }`}
      aria-label={t('whatsapp.label')}
    >
      <div className="flex items-center justify-center whitespace-nowrap">
        {/* Texto que se revela */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out font-bold text-base pointer-events-none group-hover:mr-3">
          {t('whatsapp.help')}
        </span>
        
        {/* Icono a la derecha */}
        <MessageCircle className="w-8 h-8 fill-current shrink-0" />
      </div>
    </a>
  );
};
