import { type ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, FileText, Lock } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Footer } from '../components/layout/Footer';

export const PoliciesPage = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-gray-200 selection:bg-indigo-500/30">
      <SEO 
        title="Políticas y Aviso de Privacidad | LFPDPPP" 
        description="Aviso de Privacidad Integral de acuerdo a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México."
      />

      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-indigo-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Regresar al sitio</span>
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
            <span className="text-white font-bold text-sm tracking-tight">Tu Marca.</span>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Aviso de Privacidad Integral</h1>
          <p className="text-gray-400 text-lg">Última actualización: 01 de Abril de 2026</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-12">
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-indigo-500 mt-1" />
              <h2 className="text-2xl font-bold text-white m-0">1. Identidad y Domicilio del Responsable</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              En cumplimiento con la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**, el titular de este sitio (en adelante "El Responsable") con domicilio en México, es el responsable del uso y protección de sus datos personales.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-indigo-500 mt-1" />
              <h2 className="text-2xl font-bold text-white">2. Finalidades del Tratamiento de Datos</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Responder a sus solicitudes de información a través de nuestro formulario de contacto.</li>
              <li>Establecer comunicación vía WhatsApp para la prestación de servicios profesionales.</li>
              <li>Fines estadísticos y de mejora en la experiencia de usuario dentro de la landing page.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">3. Uso de Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              Le informamos que en nuestra página de internet utilizamos cookies y otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Usted puede deshabilitar el uso de cookies a través de la configuración de su navegador en cualquier momento; sin embargo, esto puede afectar la funcionalidad visual de algunos elementos de este sitio.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">4. Derechos ARCO</h2>
            <p className="text-gray-400 leading-relaxed">
              Usted tiene derecho a conocer qué datos personales tenemos de usted (Acceso), para qué los utilizamos (Rectificación) y las condiciones del uso que les damos (Cancelación). Asimismo, es su derecho solicitar la corrección de su información personal o su eliminación (Oposición).
            </p>
            <p className="text-gray-400 leading-relaxed">
              Para el ejercicio de cualquiera de los derechos **ARCO**, usted deberá presentar la solicitud respectiva a través de nuestro botón oficial de WhatsApp o mediante el formulario de contacto integrado en la página principal.
            </p>
          </div>
        </section>

        <div className="mt-20 pt-10 border-t border-gray-800 text-center">
          <Link to="/" className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition-all">
            Entendido, volver al inicio
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
};
