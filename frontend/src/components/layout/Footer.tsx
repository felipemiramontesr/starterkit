import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Mail, MessageCircle } from 'lucide-react';

/**
 * Footer Component.
 * Dynamic footer with social/contact links and legal links.
 *
 * @returns {ReactElement}
 */
export const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-900 py-12 px-4 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-indigo-500" />
          <span className="font-bold text-xl text-white">Tu Marca<span className="text-indigo-500">.</span></span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm">
          <Link to="/politicas" className="hover:text-indigo-400 transition-colors">Aviso de Privacidad</Link>
          <Link to="/politicas" className="hover:text-indigo-400 transition-colors">Términos de Servicio</Link>
          <span>&copy; {currentYear} Todos los Derechos Reservados.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://ejemplo.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Website">
            <Globe className="w-5 h-5" />
          </a>
          <a href="mailto:contact@ejemplo.com" className="hover:text-cyan-400 transition-colors" aria-label="Mail">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#chat" className="hover:text-blue-500 transition-colors" aria-label="Chat">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
