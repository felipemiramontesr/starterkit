import { useState, type ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { TrustSection } from './components/layout/TrustSection';
import { Features } from './components/layout/Features';
import { ContactForm } from './components/common/ContactForm';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/common/SEO';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { CookieBanner } from './components/common/CookieBanner';
import { PoliciesPage } from './pages/PoliciesPage';
import { BUSINESS_CONFIG } from './config/business';

const LandingPage = ({ isShifted }: { isShifted: boolean }): ReactElement => {
  return (
    <>
      <SEO />
      <Navbar />
      
      <div id="home">
        <Hero 
          title="Tu Marca"
          subtitle="Imagina tu producto o servicio descrito con una redacción persuasiva justo en este espacio. Un diseño de alto rendimiento construido exclusivamente para captar la atención de tus prospectos."
          ctaText="Ver Demostración en Vivo"
          onCtaClick={() => {
            window.open(BUSINESS_CONFIG.whatsapp.getApiUrl(), '_blank', 'noopener,noreferrer');
          }}
        />
      </div>

      <Features />

      <TrustSection />

      <section 
        id="contact" 
        className="w-full py-12 md:py-16 bg-gray-900 border-b border-gray-800 relative scroll-mt-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contacto Operativo
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              ¿Listo para dar el siguiente paso comercial?
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
    <main className="min-h-screen bg-black text-gray-200">
      <Routes>
        <Route path="/" element={<LandingPage isShifted={isBannerVisible} />} />
        <Route path="/politicas" element={<PoliciesPage />} />
      </Routes>
      <CookieBanner onVisibilityChange={setIsBannerVisible} />
    </main>
  );
}

export default App;
