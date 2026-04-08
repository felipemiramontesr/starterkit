import { useEffect, type ReactElement } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { image: string, title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Lightbox Component.
 * Premium full-screen image viewer with backdrop blur, 
 * intuitive navigation, and high-end animations.
 * 
 * @component
 */
export const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps): ReactElement | null => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (currentIndex === -1) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-gray-950/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Controls: Close */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-white/50 hover:text-white transition-colors z-50 group"
        aria-label="Close"
      >
        <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Controls: Prev */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-all z-50 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 active:scale-95"
        aria-label="Previous"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Controls: Next */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-all z-50 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 active:scale-95"
        aria-label="Next"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image Container */}
      <div 
        className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={images[currentIndex].image} 
          alt={images[currentIndex].title || 'Gallery image'}
          className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10 animate-fade-in-up md:animate-scale-in"
        />
        
        {/* Caption */}
        {images[currentIndex].title && (
          <div className="mt-6 text-center">
            <p className="text-white text-lg font-bold tracking-tight">
              {images[currentIndex].title}
            </p>
            <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-black">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
