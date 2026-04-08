import { useEffect, type ReactElement } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: { image: string; title?: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

/**
 * Lightbox Component.
 * Premium full-screen image viewer with backdrop blur,
 * intuitive navigation, and high-end animations.
 * Utilizes React Portals for maximum render performance.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {Array<{image: string, title?: string}>} props.images - Array of image objects to display.
 * @param {number} props.currentIndex - Index of the currently active image.
 * @param {() => void} props.onClose - Triggered to close the lightbox.
 * @param {() => void} props.onPrev - Triggered to go to the previous image.
 * @param {() => void} props.onNext - Triggered to go to the next image.
 * @returns {ReactElement | null} The full-screen lightbox overlay.
 */
export const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps): ReactElement | null => {
  const { t } = useTranslation()

  useEffect(() => {
    if (currentIndex === -1) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    // Atomic body scroll lock via inline style for maximum compatibility
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, onClose, onPrev, onNext])

  if (currentIndex === -1) return null

  // Use Portal to render outside the main bento-grid hierarchy
  return createPortal(
    <div
      className="animate-fade-in fixed inset-0 z-[1000] flex items-center justify-center bg-gray-950/95 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Controls: Close */}
      <button
        onClick={onClose}
        className="group absolute top-6 right-6 z-[1010] p-3 text-white/50 transition-colors hover:text-white"
        aria-label="Close"
      >
        <X className="h-8 w-8 transition-transform duration-300 group-hover:rotate-90" />
      </button>

      {/* Controls: Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute top-1/2 left-6 z-[1010] -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-4 text-white/30 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
        aria-label="Previous"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      {/* Controls: Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute top-1/2 right-6 z-[1010] -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-4 text-white/30 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
        aria-label="Next"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Image Container */}
      <div
        className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].title || 'Gallery image'}
          className="animate-fade-in-up md:animate-scale-in max-h-full max-w-full rounded-2xl border border-white/10 object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)]"
        />

        {/* Caption Container */}
        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <h4 className="animate-fade-in px-4 text-xl font-bold tracking-tight text-white drop-shadow-md">
            {images[currentIndex].title || t('portfolio.view_details')}
          </h4>
          <span className="rounded-full bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>,
    document.body
  )
}
