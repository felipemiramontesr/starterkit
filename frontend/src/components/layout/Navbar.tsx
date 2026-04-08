import { useState, useEffect, type ReactElement } from 'react'
import {
  Menu,
  X,
  Shield,
  Globe,
  Home,
  Briefcase,
  Rocket,
  LayoutGrid,
  Zap,
  Users,
  MessageSquare,
  Building2,
  CreditCard,
  HelpCircle,
  Send,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Navbar Component.
 * High-end navigation bar featuring fluid glassmorphism,
 * adaptive scroll behavior, and a premium liquid mobile menu.
 *
 * @component
 * @returns {ReactElement} The responsive navigation hub.
 */
export const Navbar = (): ReactElement => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentLang = i18n.language.split('-')[0] // Handle cases like 'es-MX'

  const toggleLanguage = () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es'
    i18n.changeLanguage(nextLang)
  }

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('navbar.home'), href: '#home', icon: Home },
    { name: t('navbar.services'), href: '#servicios', icon: Briefcase },
    { name: t('navbar.stats'), href: '#stats', icon: Rocket },
    { name: t('navbar.portfolio'), href: '#portfolio', icon: LayoutGrid },
    { name: t('navbar.process'), href: '#proceso', icon: Zap },
    { name: t('navbar.team'), href: '#equipo', icon: Users },
    { name: t('navbar.testimonials'), href: '#testimonios', icon: MessageSquare },
    { name: t('navbar.facilities'), href: '#instalaciones', icon: Building2 },
    { name: t('navbar.pricing'), href: '#precios', icon: CreditCard },
    { name: t('navbar.faq'), href: '#faq', icon: HelpCircle },
    { name: t('navbar.contact'), href: '#contact', icon: Send },
  ]

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-[150] transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="group flex flex-shrink-0 cursor-pointer items-center gap-2">
            <Shield className="h-8 w-8 text-[var(--primary)] transition-transform group-hover:rotate-12" />
            <span className="text-2xl font-bold tracking-tight text-white">
              {t('hero.title')}
              <span className="text-[var(--primary)] leading-none">.</span>
            </span>
          </div>

          <div className="hidden items-center space-x-8 xl:flex">
            {/* Nav Links */}
            <div className="flex space-x-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium tracking-wide whitespace-nowrap text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="group flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/50 px-3 py-1.5 text-xs font-bold text-gray-300 outline-none transition-all hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary)]"
            >
              <Globe className="h-3.5 w-3.5 text-[var(--primary)] transition-transform duration-500 group-hover:rotate-180" />
              <span>{currentLang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 xl:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-md border border-gray-800 px-2 py-1 text-xs font-bold text-gray-300 focus:outline-none"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{currentLang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-gray-300 transition-colors hover:text-white focus:outline-none"
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
        <div className="animate-fade-in fixed inset-x-0 h-screen overflow-y-auto border-t border-gray-800/50 bg-gray-950/95 backdrop-blur-3xl xl:hidden">
          <div className="space-y-2 px-6 py-10">
            {navLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group animate-fade-in-premium flex items-center gap-4 rounded-xl border border-transparent px-4 py-4 text-lg font-semibold text-gray-300 opacity-0 transition-all hover:border-[var(--primary)]/20 hover:bg-[var(--primary)]/10 hover:text-white"
                  style={{ animationDelay: `${idx * 120}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="rounded-lg border border-gray-800 bg-gray-900 p-2 transition-colors group-hover:border-[var(--primary)]/50">
                    <Icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <span className="tracking-wide">{link.name}</span>
                </a>
              )
            })}
          </div>

          <div className="mt-8 px-10 pb-20 opacity-40">
            <div className="mb-4 h-1 w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <p className="text-center text-xs font-bold tracking-widest text-gray-500 uppercase">
              {t('hero.title')} • 2026
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}
