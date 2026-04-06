import { useState, useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CookieBannerProps {
  onVisibilityChange: (visible: boolean) => void;
}

export const CookieBanner = ({ onVisibilityChange }: CookieBannerProps): ReactElement | null => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookies-accepted');
  });

  useEffect(() => {
    onVisibilityChange(isVisible);
  }, [isVisible, onVisibilityChange]);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 md:px-[40px] pb-4 animate-fade-in-up">
      <div className="w-full bg-gray-900/90 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left">
          <div className="bg-[var(--primary)]/20 p-3 rounded-full shrink-0">
            <Cookie className="w-6 h-6 text-[var(--primary)]" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">{t('cookies.title')}</h4>
            <p className="text-gray-400 text-sm leading-relaxed md:whitespace-nowrap">
              {t('cookies.text')}{' '}
              <Link to="/politicas" className="text-[var(--primary)]">{t('cookies.link')}</Link>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-xl transition-all shadow-lg shadow-[var(--primary-shadow)] active:scale-95"
          >
            {t('cookies.accept')}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 md:flex-none px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold rounded-xl transition-all active:scale-95"
          >
            {t('cookies.reject')}
          </button>
        </div>
      </div>
    </div>
  );
};
