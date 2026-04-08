import { type ReactElement } from 'react'
import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { BUSINESS_CONFIG } from '../../config/business'

interface WhatsAppFloatingProps {
  isShifted: boolean
}

/**
 * WhatsAppFloating Component.
 * Responsive floating action button for direct WhatsApp communication.
 * Adapts its position based on the presence of other UI banners.
 *
 * @component
 * @param {WhatsAppFloatingProps} props - Component properties.
 * @param {boolean} props.isShifted - Shift state for layout synchronization.
 * @returns {ReactElement} The floating communication hub.
 */
export const WhatsAppFloating = ({ isShifted }: WhatsAppFloatingProps): ReactElement => {
  const { t } = useTranslation()
  const whatsappUrl = BUSINESS_CONFIG.whatsapp.getApiUrl()

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group fixed z-[100] flex h-16 w-16 transform items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-0 text-white shadow-[0_0_30px_var(--primary-shadow)] transition-all duration-500 ease-in-out hover:w-[240px] hover:scale-105 hover:bg-emerald-400 hover:px-8 active:scale-95 ${
        isShifted ? 'right-6 bottom-[200px] md:right-[40px] md:bottom-[160px]' : 'right-6 bottom-6'
      }`}
      aria-label={t('whatsapp.label')}
    >
      <div className="flex items-center justify-center whitespace-nowrap">
        {/* Texto que se revela */}
        <span className="pointer-events-none max-w-0 overflow-hidden text-base font-bold opacity-0 transition-all duration-500 ease-in-out group-hover:mr-3 group-hover:max-w-xs group-hover:opacity-100">
          {t('whatsapp.help')}
        </span>

        {/* Icono a la derecha */}
        <MessageCircle className="h-8 w-8 shrink-0 fill-current" />
      </div>
    </a>
  )
}
