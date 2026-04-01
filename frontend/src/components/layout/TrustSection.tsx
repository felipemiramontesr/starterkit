import { useEffect, useState, type ReactElement } from 'react';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';

/**
 * TrustSection Component.
 * Displays a grid of trust indicators/logos with fade-in animation on render.
 *
 * @returns {JSX.Element}
 */
export const TrustSection = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Basic way to trigger animation after mount
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
    <section id="trust" className="w-full py-20 bg-black text-gray-300 border-t border-gray-800 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-indigo-500 mb-8">
          Empresas que confían en tu visión
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
                className="flex flex-col items-center justify-center p-6 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-800 transition-all cursor-pointer group"
              >
                <Icon className="w-10 h-10 text-gray-500 group-hover:text-indigo-400 mb-4 transition-colors" />
                <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
