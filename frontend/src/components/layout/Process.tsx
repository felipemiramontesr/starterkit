import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Brain, Code, Rocket } from 'lucide-react';

/**
 * Process component - Operational Transparency.
 * Shows the methodology from consultancy to launch with a high-end stepper.
 */
const Process = (): ReactElement => {
  const { t } = useTranslation();

  const steps = [
    { icon: Search, id: 'one' },
    { icon: Brain, id: 'two' },
    { icon: Code, id: 'three' },
    { icon: Rocket, id: 'four' }
  ];

  return (
    <section id="proceso" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('process.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full bg-gray-900 border-2 border-gray-800 flex items-center justify-center mb-6 relative z-20 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 scale-100 group-hover:scale-110">
                <step.icon className="w-8 h-8 text-[var(--primary)]" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--primary)] text-black text-xs font-black flex items-center justify-center">
                  0{idx + 1}
                </span>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                {t(`process.steps.${step.id}.title`)}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed px-4">
                {t(`process.steps.${step.id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
    </section>
  );
};

export default Process;
