import { useState, memo } from 'react'
import {
  Settings,
  ChevronLeft,
  Palette as PaletteIcon,
  Image as ImageIcon,
  LayoutGrid,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useDesignSystem, type Palette } from '../../hooks/useDesignSystem'

/**
 * DesignPanel Component.
 * Professional Theme Customizer located on the left side with glassmorphism style.
 * Fully reactive to the dynamic design engine.
 *
 * @component
 * @returns {ReactElement} The design orchestration panel.
 */
export const DesignPanel = memo(() => {
  const { palette, setPalette, bgType, setBgType, palettes } = useDesignSystem()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const paletteColors: Record<Palette, string> = {
    indigo: '#4f46e5',
    emerald: '#10b981',
    amber: '#f59e0b',
    crimson: '#e11d48',
    slate: '#94a3b8',
  }

  return (
    <div className="pointer-events-none fixed top-[80px] bottom-0 left-0 z-[140] flex items-center">
      <div
        className={`pointer-events-auto flex flex-row-reverse items-center transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-[calc(100%-48px)]'
        }`}
      >
        {/* Toggle Button - Now on the right side of the panel */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group rounded-r-2xl border border-l-0 border-[var(--border-primary)] bg-gray-900/80 p-3 text-[var(--primary)] shadow-2xl backdrop-blur-xl transition-colors hover:text-white"
          aria-label="Toggle Design Panel"
        >
          {isOpen ? (
            <ChevronLeft className="h-6 w-6 transition-transform group-hover:scale-110" />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Settings className="animate-spin-slow h-6 w-6" />
              <span className="text-[10px] font-bold tracking-widest uppercase [writing-mode:vertical-lr]">
                {t('design_engine.title')}
              </span>
            </div>
          )}
        </button>

        {/* Main Panel Content */}
        <div className="flex max-h-[calc(100vh-160px)] w-72 flex-col overflow-hidden rounded-r-2xl border border-[var(--border-primary)] bg-gray-900/80 p-6 shadow-2xl backdrop-blur-2xl">
          <div className="custom-scrollbar flex-1 overflow-y-auto pr-2">
            <div className="mb-8 flex items-center gap-3 border-b border-[var(--border-primary)] pb-4">
              <PaletteIcon className="h-5 w-5 text-[var(--primary)]" />
              <h3 className="text-sm font-bold tracking-widest text-white uppercase">
                {t('design_engine.title')}
              </h3>
            </div>

            {/* Palette Selector */}
            <div className="mb-10 space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                <LayoutGrid className="h-3 w-3" />
                {t('design_engine.palette')}
              </label>
              <div className="grid grid-cols-1 gap-2">
                {palettes.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPalette(p)}
                    className={`flex items-center gap-3 rounded-xl border p-2 transition-all ${
                      palette === p
                        ? 'border-[var(--primary)] bg-gray-800 shadow-[var(--primary-shadow)] shadow-lg'
                        : 'border-[var(--border-primary)] bg-transparent hover:border-gray-700'
                    }`}
                  >
                    <div
                      className="h-10 w-10 rounded-full shadow-inner"
                      style={{ backgroundColor: paletteColors[p] }}
                    />
                    <span
                      className={`text-xs font-medium ${palette === p ? 'text-white' : 'text-gray-400'}`}
                    >
                      {t(`design_engine.palettes.${p}`)}
                    </span>
                    {palette === p && (
                      <div className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero Background Selector */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                <ImageIcon className="h-3 w-3" />
                {t('design_engine.background')}
              </label>
              <div className="flex rounded-xl border border-[var(--border-primary)] bg-gray-950 p-1">
                <button
                  onClick={() => setBgType('gradient')}
                  className={`flex flex-1 flex-col items-center gap-2 rounded-lg py-3 text-[10px] font-bold transition-all ${
                    bgType === 'gradient'
                      ? 'border border-gray-700 bg-gray-800 text-[var(--primary)] shadow-lg'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  <span>{t('design_engine.dynamic_gradient')}</span>
                </button>
                <button
                  onClick={() => setBgType('image')}
                  className={`flex flex-1 flex-col items-center gap-2 rounded-lg py-3 text-[10px] font-bold transition-all ${
                    bgType === 'image'
                      ? 'border border-gray-700 bg-gray-800 text-[var(--primary)] shadow-lg'
                      : 'text-gray-500 hover:text-gray-400'
                  }`}
                >
                  <span>{t('design_engine.office_cinematic')}</span>
                </button>
              </div>
            </div>

            {/* Branding hint */}
            <div className="mt-8 border-t border-[var(--border-primary)] pt-4">
              <p className="text-[10px] text-gray-600 italic">
                {t('design_engine.hint')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

DesignPanel.displayName = 'DesignPanel'
