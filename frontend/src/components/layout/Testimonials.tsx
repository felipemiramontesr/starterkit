import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

/**
 * Testimonials component - Social Proof.
 * Displays client feedback in a glassmorphism grid with star ratings.
 */
const Testimonials = (): ReactElement => {
  const { t } = useTranslation();

  const reviews = [
    { name: 'Sarah Jenkins', role: 'CEO, TechFlow', text: 'Realmente transformaron nuestra visión en realidad. El diseño es impecable.' },
    { name: 'David Smith', role: 'CTO, GlobalOps', text: 'Una infraestructura sólida y escalable. Superaron todas las expectativas técnicas.' },
    { name: 'Elena Rossi', role: 'Director, DesignLab', text: 'La atención al detalle y el enfoque en la conversión son de otro mundo.' }
  ];

  return (
    <section id="testimonios" className="py-24 bg-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="group relative p-8 rounded-3xl bg-gray-900 border border-gray-800 hover:border-[var(--primary)]/30 transition-all duration-500 shadow-xl overflow-hidden hover:shadow-[var(--primary-shadow)]">
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-24 h-24 text-[var(--primary)]/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Quote className="w-full h-full" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--primary)] text-[var(--primary)]" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] flex items-center justify-center text-black font-black uppercase text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-[var(--primary)] transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
