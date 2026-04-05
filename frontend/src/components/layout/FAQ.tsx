import { useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * FAQ component - Friction Reduction.
 * High-end accordion system to resolve common technical and commercial doubts.
 */
const FAQ = (): ReactElement => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { id: 'time' },
    { id: 'support' },
    { id: 'seo' }
  ];

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                openIndex === idx 
                  ? 'bg-gray-900 border-[var(--primary)]/30' 
                  : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl transition-colors ${openIndex === idx ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-gray-800 text-gray-400'}`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-white' : 'text-gray-300'}`}>
                    {t(`faq.items.${faq.id}.q`)}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-500 ${openIndex === idx ? 'rotate-180 text-[var(--primary)]' : ''}`} />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 ml-14 text-gray-400 leading-relaxed text-sm">
                  {t(`faq.items.${faq.id}.a`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
