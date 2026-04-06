import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BUSINESS_CONFIG } from '../../config/business';

/**
 * Footer Component.
 * Dynamic footer with social/contact links and legal links.
 */
/**
 * Footer Component.
 * Professional footer with social links, legal information, and branding.
 * 
 * @component
 * @returns {ReactElement} The site footer.
 */
export const Footer = (): ReactElement => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: '#', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      name: 'X', 
      href: '#', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      ) 
    },
    { 
      name: 'TikTok', 
      href: '#', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V14.6c-.02 1.94-.48 3.94-1.85 5.31-1.62 1.66-4.24 2.22-6.44 1.51-3.23-1.03-5.23-4.52-4.42-7.57.51-2.02 2.22-3.76 4.35-4.14 1-.18 2.02-.12 3-.1v4.01c-.96-.06-1.95.12-2.73.74-.78.62-1.2 1.73-1.01 2.69.21 1.11 1.18 1.94 2.3 2.02 1.12.08 2.22-.5 2.71-1.51.27-.56.36-1.19.34-1.81V.02z"/>
        </svg>
      ) 
    }
  ];

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
            <span>{t('footer.address')}</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm">
          <Link to="/politicas" className="hover:text-[var(--primary)] transition-colors">{t('footer.privacy')}</Link>
          <Link to="/politicas" className="hover:text-[var(--primary)] transition-colors">{t('footer.terms')}</Link>
          <span>&copy; {currentYear} {t('footer.rights')}</span>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[var(--primary)] transition-all transform hover:scale-110" 
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
