import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Rocket, Users, Award, Zap } from 'lucide-react';

/**
 * Stats Component.
 * Immediate authority through metrics - Displays key achievements with an animated, futuristic look.
 * 
 * @component
 * @returns {ReactElement} The impact metrics section.
 */
const Stats = (): ReactElement => {
  const { t } = useTranslation();

  const stats = [
    { icon: Rocket, key: 'projects', value: '500+' },
    { icon: Users, key: 'clients', value: '250+' },
    { icon: Award, key: 'experience', value: '10+' },
    { icon: Zap, key: 'support', value: '24/7' }
  ];

  return (
    <section className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800 group-hover:border-[var(--primary)]/50 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-[var(--primary-shadow)]">
                <stat.icon className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <span className="text-4xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[var(--accent)]/60 uppercase tracking-widest px-2">
                {t(`stats.${stat.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
