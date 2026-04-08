import { useState, useMemo, useCallback, type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Layers, Smartphone, Palette, Code2, Maximize2 } from 'lucide-react'
import { Lightbox } from '../common/Lightbox'

/**
 * Portfolio Component.
 * Bento Grid showcase displaying disruptive implementations with tilt and overlay effects.
 * Optimized with native lazy loading for high-performance image rendering.
 *
 * @component
 * @returns {ReactElement} The portfolio bento-grid section.
 */
const Portfolio = (): ReactElement => {
  const { t } = useTranslation()
  const [activeImageIndex, setActiveImageIndex] = useState<number>(-1)

  const projects = useMemo(
    () => [
      {
        id: 1,
        category: 'web',
        title: 'Global Commerce',
        icon: Code2,
        span: 'md:col-span-2 md:row-span-2',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 2,
        category: 'app',
        title: 'Mobility Protocol',
        icon: Smartphone,
        span: 'md:col-span-1 md:row-span-1',
        image:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400',
      },
      {
        id: 3,
        category: 'ux',
        title: 'Intelligence Hub',
        icon: Layers,
        span: 'md:col-span-1 md:row-span-1',
        image: '/assets/portfolio/ux-strategy.png',
      },
      {
        id: 4,
        category: 'brand',
        title: 'Brand DNA',
        icon: Palette,
        span: 'md:col-span-2 md:row-span-1',
        image:
          'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
      },
    ],
    []
  )

  const lightboxImages = useMemo(() => projects.map((p) => ({ image: p.image, title: p.title })), [projects])

  const handleClose = useCallback(() => setActiveImageIndex(-1), [])
  const handlePrev = useCallback(
    () => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1)),
    [projects.length]
  )
  const handleNext = useCallback(
    () => setActiveImageIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0)),
    [projects.length]
  )

  return (
    <section id="portfolio" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('portfolio.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-white md:text-4xl">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveImageIndex(project.id - 1)}
              className={`group relative cursor-zoom-in overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 transition-all duration-500 hover:border-[var(--primary)]/40 hover:shadow-[0_0_50px_-12px_var(--primary-shadow)] ${project.span}`}
            >
              {/* Image with Lazy Loading */}
              <img
                src={project.image}
                alt={t(`portfolio.items.${project.category}`)}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-[var(--primary)]">
                      <project.icon className="h-5 w-5" />
                      <span className="rounded bg-[var(--primary)]/10 px-2 py-0.5 text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
                        {t(`portfolio.items.${project.category}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:translate-x-2">
                      {project.title}
                    </h3>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImageIndex(project.id - 1)
                    }}
                    className="transform rounded-full border border-white/20 bg-white/10 p-3 text-white transition-all group-hover:rotate-12 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        currentIndex={activeImageIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}

export default Portfolio
