import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Zap, Shield, Crown } from 'lucide-react';

/**
 * Pricing component - Commercial Clarity.
 * Displays tiered subscription/service levels with themed highlights.
 */
const Pricing = (): ReactElement => {
  const { t } = useTranslation();

  const tiers = [
    { id: 'starter', icon: Shield, price: '1,500', popular: false },
    { id: 'pro', icon: Zap, price: '3,500', popular: true },
    { id: 'enterprise', icon: Crown, price: '7,000', popular: false }
  ];

  const commonFeatures = [
    'Diseño Responsive UI/UX',
    'Integración WhatsApp Direct',
    'Optimización SEO Core',
    'Soporte Técnico 24/7'
  ];

  return (
    <section id="precios" className="py-24 bg-gray-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                tier.popular 
                  ? 'bg-gray-900 border-[var(--primary)] shadow-[0_0_40px_-15px_var(--primary-shadow)] scale-105 z-10' 
                  : 'bg-black/50 border-gray-800 hover:border-gray-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 px-6 py-1.5 bg-[var(--primary)] text-black text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                  {t('pricing.most_popular')}
                </div>
              )}

              <div className="mb-8">
                <div className={`p-3 rounded-2xl inline-flex mb-4 ${tier.popular ? 'bg-[var(--primary)]/10' : 'bg-gray-800/50'}`}>
                  <tier.icon className={`w-6 h-6 ${tier.popular ? 'text-[var(--primary)]' : 'text-gray-400'}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(`pricing.tiers.${tier.id}.name`)}
                </h3>
                <p className="text-sm text-gray-400">
                  {t(`pricing.tiers.${tier.id}.desc`)}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-gray-500 text-lg">$</span>
                <span className="text-5xl font-black text-white">{tier.price}</span>
                <span className="text-gray-500 text-sm italic">/mxn</span>
              </div>

              <ul className="space-y-4 mb-8">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border ${
                  tier.popular
                    ? 'bg-[var(--primary)] border-[var(--primary)] text-black hover:bg-transparent hover:text-[var(--primary)] shadow-lg shadow-[var(--primary-shadow)]'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white hover:text-black'
                }`}
              >
                {t('pricing.cta')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
