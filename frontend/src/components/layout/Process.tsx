import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Brain, Code, Rocket } from 'lucide-react'

/**
 * Process Component.
 * Operational Transparency - Shows the methodology from consultancy to launch with a high-end stepper.
 *
 * @component
 * @returns {ReactElement} The operational process section.
 */
const Process = (): ReactElement => {
  const { t } = useTranslation()

  const steps = [
    { icon: Search, id: 'one' },
    { icon: Brain, id: 'two' },
    { icon: Code, id: 'three' },
    { icon: Rocket, id: 'four' },
  ]

  return (
    <section id="proceso" className="relative overflow-hidden bg-gray-900/50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('process.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[2.5rem] left-0 hidden h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent md:block" />

          {steps.map((step, idx) => (
            <div key={idx} className="group relative flex flex-col items-center text-center">
              {/* Step Circle */}
              <div className="relative z-20 mb-6 flex h-20 w-20 scale-100 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-900 transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                <step.icon className="h-8 w-8 text-[var(--primary)]" />
                <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-black text-black">
                  0{idx + 1}
                </span>
              </div>

              {/* Step Content */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[var(--primary)]">
                {t(`process.steps.${step.id}.title`)}
              </h3>
              <p className="px-4 text-sm leading-relaxed text-gray-400">
                {t(`process.steps.${step.id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
    </section>
  )
}

export default Process
