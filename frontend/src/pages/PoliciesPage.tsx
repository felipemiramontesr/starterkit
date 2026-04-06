import { type ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Lock, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/common/SEO';
import { Footer } from '../components/layout/Footer';

export const PoliciesPage = (): ReactElement => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-gray-200 selection:bg-[var(--primary)]/30">
      <SEO 
        title={`${t('footer.privacy')} | LFPDPPP`} 
        description={t('cookies.text')}
      />

      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[var(--accent)] hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">{t('policies.back')}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-500" />
            <span className="text-white font-bold text-sm tracking-tight">{t('hero.title')}.</span>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-display">
            {t('policies.title')}
          </h1>
          <p className="text-gray-400 text-lg">{t('policies.last_updated')}</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-12">
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-indigo-500 mt-1" />
              <h2 className="text-2xl font-bold text-white m-0">
                {t('policies.sections.identity.title')}
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              {t('policies.sections.identity.content')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-indigo-500 mt-1" />
              <h2 className="text-2xl font-bold text-white">
                {t('policies.sections.purpose.title')}
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              {t('policies.sections.purpose.content')}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {t('policies.sections.cookies.title')}
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              {t('policies.sections.cookies.content')}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {t('policies.sections.rights.title')}
            </h2>
            <p className="text-gray-400 leading-relaxed font-light">
              {t('policies.sections.rights.content')}
            </p>
          </div>
        </section>

        <div className="mt-20 pt-10 border-t border-gray-800 text-center">
          <Link to="/" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-xl transition-all shadow-lg shadow-[var(--primary-shadow)] active:scale-95">
            {t('policies.back')}
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
};
