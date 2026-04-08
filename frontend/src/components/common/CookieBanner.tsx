import { useState, useEffect, memo, type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Cookie } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface CookieBannerProps {
  onVisibilityChange: (visible: boolean) => void
}

/**
 * CookieBanner Component.
 * Displays a professional GDPR-compliant cookie consent banner.
 * Communicates its visibility state to parent components for layout adjustments.
 *
 * @component
 * @param {CookieBannerProps} props - Component properties.
 * @param {(visible: boolean) => void} props.onVisibilityChange - Callback to notify parent of visibility state.
 * @returns {ReactElement | null} The rendered banner or null if already accepted.
 */
export const CookieBanner = memo(
  ({ onVisibilityChange }: CookieBannerProps): ReactElement | null => {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(() => {
      if (typeof window === 'undefined') return false
      return !localStorage.getItem('cookies-accepted')
    })

    useEffect(() => {
      onVisibilityChange(isVisible)
    }, [isVisible, onVisibilityChange])

    const handleAccept = () => {
      localStorage.setItem('cookies-accepted', 'true')
      setIsVisible(false)
    }

    if (!isVisible) return null

    return (
      <div className="animate-fade-in-up fixed right-0 bottom-0 left-0 z-[130] px-4 pb-4 md:px-[40px]">
        <div className="flex w-full flex-col items-center justify-between gap-6 rounded-2xl border border-gray-800 bg-gray-900/90 p-6 shadow-2xl backdrop-blur-xl md:flex-row">
          <div className="flex items-center gap-4 text-left">
            <div className="shrink-0 rounded-full bg-[var(--primary)]/20 p-3">
              <Cookie className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{t('cookies.title')}</h4>
              <p className="text-left text-sm leading-relaxed whitespace-normal text-gray-400">
                {t('cookies.text')}{' '}
                <Link to="/politicas" className="text-[var(--primary)]">
                  {t('cookies.link')}
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex w-full shrink-0 items-center gap-3 md:w-auto">
            <button
              onClick={handleAccept}
              className="flex-1 rounded-xl bg-[var(--primary)] px-8 py-3 font-bold text-white shadow-[var(--primary-shadow)] shadow-lg transition-all hover:bg-[var(--primary-hover)] active:scale-95 md:flex-none"
            >
              {t('cookies.accept')}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="flex-1 rounded-xl bg-gray-800 px-8 py-3 font-bold text-gray-300 transition-all hover:bg-gray-700 active:scale-95 md:flex-none"
            >
              {t('cookies.reject')}
            </button>
          </div>
        </div>
      </div>
    )
  }
)

CookieBanner.displayName = 'CookieBanner'
