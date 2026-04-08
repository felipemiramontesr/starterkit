import { type ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Lock, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../components/common/SEO'
import { Footer } from '../components/layout/Footer'

/**
 * PoliciesPage Component.
 * Professional compliance page displaying the Privacy Policy and Legal Terms.
 * Features specialized SEO metadata for legal relevance (LFPDPPP).
 *
 * @component
 * @returns {ReactElement} The legal policies page.
 */
export const PoliciesPage = (): ReactElement => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-gray-200 selection:bg-[var(--primary)]/30">
      <SEO title={`${t('footer.privacy')} | LFPDPPP`} description={t('cookies.text')} />

      {/* Header / Nav */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-800 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link
            to="/"
            className="group flex items-center gap-2 text-[var(--accent)] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">{t('policies.back')}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-indigo-500" />
            <span className="text-sm font-bold tracking-tight text-white">{t('hero.title')}.</span>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="font-display mb-6 text-4xl font-extrabold text-white md:text-5xl">
            {t('policies.title')}
          </h1>
          <p className="text-lg text-gray-400">{t('policies.last_updated')}</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-12">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <div className="mb-4 flex items-start gap-4">
              <FileText className="mt-1 h-6 w-6 text-indigo-500" />
              <h2 className="m-0 text-2xl font-bold text-white">
                {t('policies.sections.identity.title')}
              </h2>
            </div>
            <p className="leading-relaxed font-light text-gray-400">
              {t('policies.sections.identity.content')}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Lock className="mt-1 h-6 w-6 text-indigo-500" />
              <h2 className="text-2xl font-bold text-white">
                {t('policies.sections.purpose.title')}
              </h2>
            </div>
            <p className="leading-relaxed font-light text-gray-400">
              {t('policies.sections.purpose.content')}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {t('policies.sections.cookies.title')}
            </h2>
            <p className="leading-relaxed font-light text-gray-400">
              {t('policies.sections.cookies.content')}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">{t('policies.sections.rights.title')}</h2>
            <p className="leading-relaxed font-light text-gray-400">
              {t('policies.sections.rights.content')}
            </p>
          </div>
        </section>

        <div className="mt-20 border-t border-gray-800 pt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-4 font-bold text-white shadow-[var(--primary-shadow)] shadow-lg transition-all hover:bg-[var(--primary-hover)] active:scale-95"
          >
            {t('policies.back')}
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
