import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, Zap, Shield, Crown } from 'lucide-react'

/**
 * Pricing Component.
 * Displays tiered subscription and service levels with themed highlights.
 *
 * @component
 * @returns {ReactElement} The pricing section.
 */
const Pricing = (): ReactElement => {
  const { t } = useTranslation()

  const tiers = [
    { id: 'starter', icon: Shield, price: '1,500', popular: false },
    { id: 'pro', icon: Zap, price: '3,500', popular: true },
    { id: 'enterprise', icon: Crown, price: '7,000', popular: false },
  ]

  const commonFeatures = ['design', 'whatsapp', 'seo', 'support']

  return (
    <section id="precios" className="relative bg-gray-900/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('pricing.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500 ${
                tier.popular
                  ? 'z-10 scale-105 border-[var(--primary)] bg-gray-900 shadow-[0_0_40px_-15px_var(--primary-shadow)]'
                  : 'border-gray-800 bg-black/50 hover:border-gray-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 rounded-bl-2xl bg-[var(--primary)] px-6 py-1.5 text-[10px] font-black tracking-widest text-black uppercase">
                  {t('pricing.most_popular')}
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`mb-4 inline-flex rounded-2xl p-3 ${tier.popular ? 'bg-[var(--primary)]/10' : 'bg-gray-800/50'}`}
                >
                  <tier.icon
                    className={`h-6 w-6 ${tier.popular ? 'text-[var(--primary)]' : 'text-gray-400'}`}
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {t(`pricing.tiers.${tier.id}.name`)}
                </h3>
                <p className="text-sm text-gray-400">{t(`pricing.tiers.${tier.id}.desc`)}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-lg text-gray-500">$</span>
                <span className="text-5xl font-black text-white">{tier.price}</span>
                <span className="text-sm text-gray-500 italic">/mxn</span>
              </div>

              <ul className="mb-8 space-y-4">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                    <span>{t(`pricing.features.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-2xl border py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  tier.popular
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-black shadow-[var(--primary-shadow)] shadow-lg hover:bg-transparent hover:text-[var(--primary)]'
                    : 'border-white/10 bg-white/5 text-white hover:bg-white hover:text-black'
                }`}
              >
                {t('pricing.cta')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
