import { useState, useEffect, type ReactElement } from 'react';
import { 
  Menu, X, Shield, Globe, 
  Home, Briefcase, Zap, LayoutGrid, Users, 
  MessageSquare, Building2, CreditCard, HelpCircle, Send 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Navbar Component.
 * High-end navigation bar featuring fluid glassmorphism, 
 * adaptive scroll behavior, and a premium liquid mobile menu.
 * 
 * @component
 * @returns {ReactElement} The responsive navigation hub.
 */
export const Navbar = (): ReactElement => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLang = i18n.language.split('-')[0]; // Handle cases like 'es-MX'
  
  const toggleLanguage = () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.home'), href: '#home', icon: Home },
    { name: t('navbar.services'), href: '#servicios', icon: Briefcase },
    { name: t('navbar.process'), href: '#proceso', icon: Zap },
    { name: t('navbar.portfolio'), href: '#portfolio', icon: LayoutGrid },
    { name: t('navbar.team'), href: '#equipo', icon: Users },
    { name: t('navbar.testimonials'), href: '#testimonios', icon: MessageSquare },
    { name: t('navbar.facilities'), href: '#instalaciones', icon: Building2 },
    { name: t('navbar.pricing'), href: '#precios', icon: CreditCard },
    { name: t('navbar.faq'), href: '#faq', icon: HelpCircle },
    { name: t('navbar.contact'), href: '#contact', icon: Send },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <Shield className="w-8 h-8 text-[var(--primary)] group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-2xl tracking-tight text-white">{t('hero.title')}<span className="text-[var(--primary)]">.</span></span>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            {/* Nav Links */}
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-xs font-medium tracking-wide whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 hover:bg-gray-800 transition-all text-xs font-bold text-gray-300 hover:text-white group"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--primary)] group-hover:rotate-180 transition-transform duration-500" />
              <span>{currentLang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-gray-800 text-xs font-bold text-gray-300"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[var(--primary)]" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Premium Overhaul */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 h-screen bg-gray-950/95 backdrop-blur-3xl overflow-y-auto animate-fade-in border-t border-gray-800/50">
          <div className="px-6 py-10 space-y-2">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-semibold text-gray-300 hover:text-white hover:bg-[var(--primary)]/10 border border-transparent hover:border-[var(--primary)]/20 transition-all group animate-fade-in-premium opacity-0"
                  style={{ animationDelay: `${idx * 120}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="bg-gray-900 border border-gray-800 p-2 rounded-lg group-hover:border-[var(--primary)]/50 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <span className="tracking-wide">{link.name}</span>
                </a>
              );
            })}
          </div>
          
          <div className="mt-8 px-10 pb-20 opacity-40">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />
            <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-500">
              {t('hero.title')} • 2026
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};
