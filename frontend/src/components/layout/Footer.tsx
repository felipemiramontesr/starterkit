import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BUSINESS_CONFIG } from '../../config/business';

/**
 * Footer Component.
 * Dynamic footer with social/contact links and legal links.
 */
export const Footer = (): ReactElement => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-900 py-12 px-4 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[var(--primary)]" />
            <span className="font-bold text-xl text-white">{t('hero.title')}<span className="text-[var(--primary)]">.</span></span>
          </div>
          <a 
            href={BUSINESS_CONFIG.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--accent)]/80 hover:text-[var(--primary-hover)] transition-all group/address"
          >
            <MapPin className="w-4 h-4 text-[var(--primary)] group-hover/address:scale-110 transition-transform" />
            <span className="border-b border-transparent group-hover/address:border-[var(--primary)]/50">{t('footer.address')}</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm">
          <Link to="/politicas" className="hover:text-[var(--primary)] transition-colors">{t('footer.privacy')}</Link>
          <Link to="/politicas" className="hover:text-[var(--primary)] transition-colors">{t('footer.terms')}</Link>
          <span>&copy; {currentYear} {t('footer.rights')}</span>
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
