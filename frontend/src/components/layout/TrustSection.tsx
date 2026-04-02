import { useEffect, useState, type ReactElement } from 'react';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * TrustSection Component.
 * Displays a grid of trust indicators/logos with fade-in animation on render.
 */
export const TrustSection = (): ReactElement => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const trustItems = [
    { name: 'Global Brand', icon: Hexagon },
    { name: 'Tech Innovators', icon: Triangle },
    { name: 'Future Corp', icon: Circle },
    { name: 'Stellar Agency', icon: Square },
  ];

  return (
    <section id="trust" className="w-full min-h-[60vh] flex flex-col justify-center py-24 bg-black text-gray-300 border-t border-gray-800 border-b scroll-mt-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-black to-black pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h2 className="text-lg font-bold tracking-widest uppercase text-[var(--primary)] mb-12 animate-fade-in-up">
          {t('trust.heading')}
        </h2>
        
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-testid="trust-grid"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-10 border border-gray-800 rounded-2xl bg-gray-900/50 hover:bg-gray-800 transition-all cursor-pointer group shadow-lg hover:shadow-[var(--primary-shadow)] hover:-translate-y-2"
              >
                <Icon className="w-16 h-16 text-gray-500 group-hover:text-[var(--primary)] mb-6 transition-colors duration-300" />
                <span className="font-bold text-lg text-gray-400 group-hover:text-white transition-colors duration-300">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
