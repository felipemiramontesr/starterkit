import { useState, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { TrustSection } from './components/layout/TrustSection';
import { Features } from './components/layout/Features';
import { ContactForm } from './components/common/ContactForm';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/common/SEO';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { CookieBanner } from './components/common/CookieBanner';
import { DesignPanel } from './components/common/DesignPanel';
import { PoliciesPage } from './pages/PoliciesPage';
import { BUSINESS_CONFIG } from './config/business';
import { DesignProvider } from './hooks/DesignContext';

const LandingPage = ({ isShifted }: { isShifted: boolean }): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <SEO />
      <Navbar />
      
      <div id="home">
        <Hero 
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          ctaText={t('hero.cta')}
          onCtaClick={() => {
            window.open(BUSINESS_CONFIG.whatsapp.getApiUrl(), '_blank', 'noopener,noreferrer');
          }}
        />
      </div>

      <Features />

      <TrustSection />

      <section 
        id="contact" 
        className="w-full py-8 md:py-10 bg-[var(--bg-primary)] border-b border-gray-800 relative scroll-mt-24"
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
