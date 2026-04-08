import { type ReactElement } from 'react'
import { Rocket, Target, Headphones } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Features Component.
 * Showcases the core capabilities and value propositions of the platform.
 *
 * @component
 * @returns {ReactElement} The features section.
 */
export const Features = (): ReactElement => {
  const { t } = useTranslation()

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
  ]

  return (
    <section
      className="relative w-full scroll-mt-20 border-b border-gray-800 bg-gray-900 py-28 shadow-2xl"
      id="servicios"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--bg-primary)] to-black" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t('features.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-light text-gray-400">
            {t('hero.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group rounded-2xl border border-gray-700/50 bg-gray-800/50 p-8 backdrop-blur-sm transition-colors hover:bg-gray-800"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
