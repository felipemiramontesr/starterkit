import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Layers, Smartphone, Palette, Code2 } from 'lucide-react';

/**
 * Portfolio component - Bento Grid showcase.
 * Displays disruptive implementations with tilt and overlay effects.
 * Optimized with native lazy loading for images.
 */
const Portfolio = (): ReactElement => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      category: 'web',
      icon: Code2,
      span: 'md:col-span-2 md:row-span-2',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'app',
      icon: Smartphone,
      span: 'md:col-span-1 md:row-span-1',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      category: 'ux',
      icon: Layers,
      span: 'md:col-span-1 md:row-span-1',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      category: 'brand',
      icon: Palette,
      span: 'md:col-span-2 md:row-span-1',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-[var(--primary)]/40 hover:shadow-[0_0_50px_-12px_var(--primary-shadow)] ${project.span}`}
            >
              {/* Image with Lazy Loading */}
              <img
                src={project.image}
                alt={t(`portfolio.items.${project.category}`)}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[var(--primary)]">
                      <project.icon className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest bg-[var(--primary)]/10 px-2 py-0.5 rounded backdrop-blur-sm">
                        {t(`portfolio.items.${project.category}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                      Project Alpha {project.id}
                    </h3>
                  </div>
                  
                  <button className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all transform group-hover:rotate-12">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
