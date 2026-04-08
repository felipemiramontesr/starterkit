import { useState, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Maximize2, Building2, Microchip, Coffee } from 'lucide-react';
import { Lightbox } from '../common/Lightbox';

/**
 * Gallery Component.
 * Cinematic showcase of facilities with high-end hover effects.
 * Optimized with native lazy loading for high-performance image rendering.
 * 
 * @component
 * @returns {ReactElement} The facility gallery section.
 */
const Gallery = (): ReactElement => {
  const { t } = useTranslation();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(-1);

  const items = [
    { title: 'hq', icon: Building2, span: 'md:col-span-2 md:row-span-1', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
    { title: 'lab', icon: Microchip, span: 'md:col-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400' },
    { title: 'lounge', icon: Coffee, span: 'md:col-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400' },
    { title: 'hq_detail', icon: Maximize2, span: 'md:col-span-2 md:row-span-1', image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section id="instalaciones" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('facilities.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            {t('facilities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`group relative overflow-hidden rounded-[2rem] border border-gray-900 transition-all duration-700 cursor-zoom-in ${item.span}`}
            >
              {/* Image with Tilt/Scale Hover */}
              <img
                src={item.image}
                alt={t(`facilities.${item.title}`)}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Advanced Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Floating Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="p-3 rounded-full bg-[var(--primary)]/10 backdrop-blur-md border border-[var(--primary)]/20 shadow-lg">
                  <item.icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {t(`facilities.${item.title}`)}
                  </h3>
                  <div className="h-1 w-12 bg-[var(--primary)] rounded-full transform origin-left transition-transform duration-700 scale-x-0 group-hover:scale-x-100" />
                </div>
              </div>

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[var(--primary)]/30 transition-all duration-700 pointer-events-none rounded-[2rem]" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox 
        images={items.map(item => ({ image: item.image, title: t(`facilities.${item.title}`) }))}
        currentIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(-1)}
        onPrev={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))}
        onNext={() => setActiveImageIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
};

export default Gallery;
