import { useState, lazy, Suspense, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { Features } from './components/layout/Features';
import { TrustSection } from './components/layout/TrustSection';
import { ContactForm } from './components/common/ContactForm';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/common/SEO';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { CookieBanner } from './components/common/CookieBanner';
import { DesignPanel } from './components/common/DesignPanel';
import { PoliciesPage } from './pages/PoliciesPage';
import { BUSINESS_CONFIG } from './config/business';
import { DesignProvider } from './hooks/DesignContext';

// Lazy Loaded Sections
const Stats = lazy(() => import('./components/layout/Stats'));
const Portfolio = lazy(() => import('./components/layout/Portfolio'));
const Process = lazy(() => import('./components/layout/Process'));
const Team = lazy(() => import('./components/layout/Team'));
const Testimonials = lazy(() => import('./components/layout/Testimonials'));
const Gallery = lazy(() => import('./components/layout/Gallery'));
const Pricing = lazy(() => import('./components/layout/Pricing'));
const FAQ = lazy(() => import('./components/layout/FAQ'));

// Loading Fallback
const SectionSkeleton = () => (
  <div className="w-full h-80 bg-gray-900/20 animate-pulse rounded-3xl" />
);

/**
 * LandingPage Component.
 * The primary layout orchestrator for the bento-grid landing page.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.isShifted - Whether the layout is shifted due to banners.
 * @returns {ReactElement} The assembled landing page.
 */
const LandingPage = ({ isShifted }: { isShifted: boolean }): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <SEO />
      <Navbar />
      
      <div id="home" className="scroll-mt-32">
        <Hero 
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          ctaText={t('hero.cta')}
          onCtaClick={() => {
            window.open(BUSINESS_CONFIG.whatsapp.getApiUrl(), '_blank', 'noopener,noreferrer');
          }}
        />
      </div>

      <div id="servicios" className="scroll-mt-32">
        <Features />
      </div>

      <Suspense fallback={<SectionSkeleton />}>
        <div id="stats" className="scroll-mt-32">
          <Stats />
        </div>
        <div id="portfolio" className="scroll-mt-32">
          <Portfolio />
        </div>
        <div id="proceso" className="scroll-mt-32">
          <Process />
        </div>
        <div id="equipo" className="scroll-mt-32">
          <Team />
        </div>
      </Suspense>

      <TrustSection />

      <Suspense fallback={<SectionSkeleton />}>
        <div id="testimonios" className="scroll-mt-32">
          <Testimonials />
        </div>
        <div id="instalaciones" className="scroll-mt-32">
          <Gallery />
        </div>
        <div id="precios" className="scroll-mt-32">
          <Pricing />
        </div>
        <div id="faq" className="scroll-mt-32">
          <FAQ />
        </div>
      </Suspense>

      <section 
        id="contact" 
        className="w-full py-8 md:py-10 bg-[var(--bg-primary)] border-b border-gray-800 relative scroll-mt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--primary)]/20 via-[var(--bg-primary)] to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('contact.section_title')}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t('contact.section_subtitle')}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
      <WhatsAppFloating isShifted={isShifted} />
    </>
  );
};

/**
 * Main Application Entry Point.
 * Sets up routing, global providers, and shared UI overlays.
 * 
 * @component
 * @returns {ReactElement} The root application element.
 */
function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  return (
    <DesignProvider>
      <main className="min-h-screen bg-[var(--bg-primary)] text-gray-200">
        <Routes>
          <Route path="/" element={<LandingPage isShifted={isBannerVisible} />} />
          <Route path="/politicas" element={<PoliciesPage />} />
        </Routes>
        <CookieBanner onVisibilityChange={setIsBannerVisible} />
        <DesignPanel />
      </main>
    </DesignProvider>
  );
}

export default App;
