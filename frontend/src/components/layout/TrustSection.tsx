import { useEffect, useState, type ReactElement } from 'react'
import { Hexagon, Triangle, Circle, Square } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * TrustSection Component.
 * Displays a grid of trust indicators and brand logos with fade-in animation on render.
 *
 * @component
 * @returns {ReactElement} The brand authority section.
 */
export const TrustSection = (): ReactElement => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const trustItems = [
    { name: 'Global Brand', icon: Hexagon },
    { name: 'Tech Innovators', icon: Triangle },
    { name: 'Future Corp', icon: Circle },
    { name: 'Stellar Agency', icon: Square },
  ]

  return (
    <section
      id="trust"
      className="relative flex min-h-[60vh] w-full scroll-mt-20 flex-col justify-center border-t border-b border-gray-800 bg-black py-24 text-gray-300"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-black to-black" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="animate-fade-in-up mb-12 text-lg font-bold tracking-widest text-[var(--primary)] uppercase">
          {t('trust.heading')}
        </h2>

        <div
          className={`grid transform grid-cols-2 items-center justify-center gap-8 transition-all duration-1000 md:grid-cols-4 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          data-testid="trust-grid"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-800 bg-gray-900/50 p-10 shadow-lg transition-all hover:-translate-y-2 hover:bg-gray-800 hover:shadow-[var(--primary-shadow)]"
              >
                <Icon className="mb-6 h-16 w-16 text-gray-500 transition-colors duration-300 group-hover:text-[var(--primary)]" />
                <span className="text-lg font-bold text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
