import { type ReactElement } from 'react';
import { Rocket, Target, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Features Component.
 * Showcases the core capabilities and value propositions of the platform.
 * 
 * @component
 * @returns {ReactElement} The features section.
 */
export const Features = (): ReactElement => {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t('features.strategy.title'),
      description: t('features.strategy.desc'),
      icon: Rocket,
    },
    {
      title: t('features.design.title'),
      description: t('features.design.desc'),
      icon: Target,
    },
    {
      title: t('features.conversion.title'),
      description: t('features.conversion.desc'),
      icon: Headphones,
    },
  ];

  return (
    <section className="w-full py-28 relative bg-gray-900 border-b border-gray-800 scroll-mt-20 shadow-2xl" id="servicios">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--bg-primary)] to-black pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('features.title')}
            </h2>
            <p className="mt-4 text-xl text-gray-400 font-light max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 transition-colors group">
                  <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};
