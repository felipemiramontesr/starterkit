import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/layout/Hero';
import { TrustSection } from './components/layout/TrustSection';
import { ContactForm } from './components/common/ContactForm';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <main className="min-h-screen bg-black text-gray-200">
      <Navbar />
      
      <div id="home">
        <Hero 
          title="Starter Kit Pro"
          subtitle="Arquitectura 'grado militar', código limpio y rendimiento extremo. Todo lo necesario para crear landing pages de conversión."
          ctaText="Iniciar Operación"
          onCtaClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      <TrustSection />

      <section className="w-full py-20 bg-gray-900 border-b border-gray-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Contacto Seguro
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Establece conexión directa a través de nuestro proxy de operaciones encriptadas.
            </p>
          </div>
          <ContactForm submitUrl="https://api.webhooks.dev/submit" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
