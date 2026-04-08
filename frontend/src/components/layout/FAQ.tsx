import { useState, type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, HelpCircle } from 'lucide-react'

/**
 * FAQ Component.
 * High-end accordion system to resolve common technical and commercial doubts.
 *
 * @component
 * @returns {ReactElement} The FAQ section.
 */
const FAQ = (): ReactElement => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [{ id: 'time' }, { id: 'support' }, { id: 'seo' }]

  return (
    <section id="faq" className="relative bg-black py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('faq.title')}
          </h2>
          <p className="text-3xl leading-tight font-bold text-white md:text-4xl">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                openIndex === idx
                  ? 'border-[var(--primary)]/30 bg-gray-900'
                  : 'border-gray-800 bg-gray-900/40 hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-xl p-2 transition-colors ${openIndex === idx ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-gray-800 text-gray-400'}`}
                  >
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-white' : 'text-gray-300'}`}
                  >
                    {t(`faq.items.${faq.id}.q`)}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-500 ${openIndex === idx ? 'rotate-180 text-[var(--primary)]' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-14 px-8 pb-6 text-sm leading-relaxed text-gray-400">
                  {t(`faq.items.${faq.id}.a`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
