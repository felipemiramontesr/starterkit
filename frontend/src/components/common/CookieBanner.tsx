import { useState, useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onVisibilityChange: (visible: boolean) => void;
}

export const CookieBanner = ({ onVisibilityChange }: CookieBannerProps): ReactElement | null => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    onVisibilityChange(isVisible);
  }, [isVisible, onVisibilityChange]);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto bg-gray-900/90 backdrop-blur-xl border border-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left">
          <div className="bg-indigo-500/20 p-3 rounded-full">
            <Cookie className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Privacidad y Cookies</h4>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia y analizar el tráfico de acuerdo a las leyes mexicanas (LFPDPPP). Al continuar, aceptas nuestro{' '}
              <Link to="/politicas" className="text-indigo-400 hover:underline">Aviso de Privacidad</Link>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Aceptar
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-3 text-gray-500 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
