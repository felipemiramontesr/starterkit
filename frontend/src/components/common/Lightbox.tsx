import { useEffect, type ReactElement } from 'react'
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
 *
 * @component
 * @param {object} props - Component properties.
 * @param {Array<{image: string, title?: string}>} props.images - Array of image objects to display.
 * @param {number} props.currentIndex - Index of the currently active image.
 * @param {Function} props.onClose - Triggered to close the lightbox.
 * @param {Function} props.onPrev - Triggered to go to the previous image.
 * @param {Function} props.onNext - Triggered to go to the next image.
 * @returns {ReactElement | null} The full-screen lightbox overlay.
 */
export const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps): ReactElement | null => {
  useEffect(() => {
    if (currentIndex === -1) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    // Atomic body scroll lock
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalStyle
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, onClose, onPrev, onNext])

  if (currentIndex === -1) return null

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[200] flex items-center justify-center bg-gray-950/90 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Controls: Close */}
      <button
        onClick={onClose}
        className="group absolute top-6 right-6 z-50 p-3 text-white/50 transition-colors hover:text-white"
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
        className="absolute top-1/2 left-6 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-4 text-white/30 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
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
        className="absolute top-1/2 right-6 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-4 text-white/30 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
        aria-label="Next"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Image Container */}
      <div
        className="relative flex max-h-[80vh] max-w-[90vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].title || 'Gallery image'}
          className="animate-fade-in-up md:animate-scale-in max-h-full max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
        />

        {/* Caption */}
        {images[currentIndex].title && (
          <div className="mt-6 text-center">
            <p className="text-lg font-bold tracking-tight text-white">
              {images[currentIndex].title}
            </p>
            <p className="mt-1 text-sm font-black tracking-widest text-white/40 uppercase">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
