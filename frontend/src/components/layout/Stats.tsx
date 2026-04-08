import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Rocket, Users, Award, Zap } from 'lucide-react'

/**
 * Stats Component.
 * Immediate authority through metrics - Displays key achievements with an animated, futuristic look.
 *
 * @component
 * @returns {ReactElement} The impact metrics section.
 */
const Stats = (): ReactElement => {
  const { t } = useTranslation()

  const stats = [
    { icon: Rocket, key: 'projects', value: '500+' },
    { icon: Users, key: 'clients', value: '250+' },
    { icon: Award, key: 'experience', value: '10+' },
    { icon: Zap, key: 'support', value: '24/7' },
  ]

  return (
    <section className="relative overflow-hidden bg-[var(--bg-secondary)] py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="mb-4 rounded-2xl border border-gray-800 bg-gray-900/50 p-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--primary)]/50 group-hover:shadow-[var(--primary-shadow)]">
                <stat.icon className="h-8 w-8 text-[var(--primary)]" />
              </div>
              <span className="mb-2 text-4xl font-black tracking-tight text-white">
                {stat.value}
              </span>
              <span className="px-2 text-sm font-medium tracking-widest text-[var(--accent)]/60 uppercase">
                {t(`stats.${stat.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
