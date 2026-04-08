import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Quote, Star } from 'lucide-react'

/**
 * Testimonials Component.
 * Social Proof - Displays client feedback in a glassmorphism grid with star ratings.
 *
 * @component
 * @returns {ReactElement} The client feedback section.
 */
const Testimonials = (): ReactElement => {
  const { t } = useTranslation()

  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO, TechFlow',
      text: 'Realmente transformaron nuestra visión en realidad. El diseño es impecable.',
    },
    {
      name: 'David Smith',
      role: 'CTO, GlobalOps',
      text: 'Una infraestructura sólida y escalable. Superaron todas las expectativas técnicas.',
    },
    {
      name: 'Elena Rossi',
      role: 'Director, DesignLab',
      text: 'La atención al detalle y el enfoque en la conversión son de otro mundo.',
    },
  ]

  return (
    <section id="testimonios" className="relative bg-gray-900/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('testimonials.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 p-8 shadow-xl transition-all duration-500 hover:border-[var(--primary)]/30 hover:shadow-[var(--primary-shadow)]"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rotate-12 text-[var(--primary)]/5 transition-transform duration-700 group-hover:rotate-0">
                <Quote className="h-full w-full" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--primary)] text-[var(--primary)]" />
                ))}
              </div>

              <p className="relative z-10 mb-8 text-lg leading-relaxed text-gray-300 italic">
                "{review.text}"
              </p>

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-sm font-black text-black uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white transition-colors group-hover:text-[var(--primary)]">
                    {review.name}
                  </h4>
                  <p className="text-xs font-medium text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
