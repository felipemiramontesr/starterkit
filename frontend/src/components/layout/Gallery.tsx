import { useState, useMemo, useCallback, type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Maximize2, Building2, Microchip, Coffee } from 'lucide-react'
import { Lightbox } from '../common/Lightbox'

/**
 * Gallery Component.
 * Cinematic showcase of facilities with high-end hover effects.
 * Optimized with native lazy loading for high-performance image rendering.
 *
 * @component
 * @returns {ReactElement} The facility gallery section.
 */
const Gallery = (): ReactElement => {
  const { t } = useTranslation()
  const [activeImageIndex, setActiveImageIndex] = useState<number>(-1)

  const items = useMemo(
    () => [
      {
        title: 'hq',
        icon: Building2,
        span: 'md:col-span-2 md:row-span-1',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'lab',
        icon: Microchip,
        span: 'md:col-span-1 md:row-span-1',
        image:
          'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400',
      },
      {
        title: 'lounge',
        icon: Coffee,
        span: 'md:col-span-1 md:row-span-1',
        image:
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
      },
      {
        title: 'hq_detail',
        icon: Maximize2,
        span: 'md:col-span-2 md:row-span-1',
        image:
          'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800',
      },
    ],
    []
  )

  const lightboxImages = useMemo(
    () => items.map((item) => ({ image: item.image, title: t(`facilities.${item.title}`) })),
    [items, t]
  )

  const handleClose = useCallback(() => setActiveImageIndex(-1), [])
  const handlePrev = useCallback(
    () => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1)),
    [items.length]
  )
  const handleNext = useCallback(
    () => setActiveImageIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0)),
    [items.length]
  )

  return (
    <section id="instalaciones" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('facilities.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-white md:text-4xl">
            {t('facilities.subtitle')}
          </p>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-4 md:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`group relative cursor-zoom-in overflow-hidden rounded-[2rem] border border-gray-900 transition-all duration-700 ${item.span}`}
            >
              {/* Image with Tilt/Scale Hover */}
              <img
                src={item.image}
                alt={t(`facilities.${item.title}`)}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1 group-hover:grayscale-0"
              />

              {/* Advanced Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />

              {/* Floating Content */}
              <div className="absolute inset-0 flex translate-y-4 flex-col items-start justify-between p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 p-3 shadow-lg backdrop-blur-md">
                  <item.icon className="h-5 w-5 text-[var(--primary)]" />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-white">
                    {t(`facilities.${item.title}`)}
                  </h3>
                  <div className="h-1 w-12 origin-left scale-x-0 transform rounded-full bg-[var(--primary)] transition-transform duration-700 group-hover:scale-x-100" />
                </div>
              </div>

              {/* Cinematic Vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/10 transition-all duration-700 ring-inset group-hover:ring-[var(--primary)]/30" />
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

export default Gallery
