import { useState } from 'react';
import { Settings, ChevronLeft, Palette as PaletteIcon, Image as ImageIcon, LayoutGrid } from 'lucide-react';
import { useDesignSystem, type Palette } from '../../hooks/useDesignSystem';

/**
 * DesignPanel Component.
 * Professional Theme Customizer located on the left side with glassmorphism style.
 * Fully reactive to the dynamic design engine.
 * 
 * @component
 * @returns {ReactElement} The design orchestration panel.
 */
export const DesignPanel = () => {
  const { palette, setPalette, bgType, setBgType, palettes } = useDesignSystem();
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1280;
  });

  const paletteNames: Record<Palette, string> = {
    indigo: 'Classic Indigo',
    emerald: 'Cyber Emerald',
    amber: 'Solar Amber',
    crimson: 'Nordic Crimson',
    slate: 'Monochrome Slate',
  };

  const paletteColors: Record<Palette, string> = {
    indigo: '#4f46e5',
    emerald: '#10b981',
    amber: '#f59e0b',
    crimson: '#e11d48',
    slate: '#94a3b8',
  };

  return (
    <div 
      className={`fixed left-0 top-32 xl:top-1/2 xl:-translate-y-1/2 z-[140] transition-all duration-500 ease-in-out flex flex-row-reverse items-center ${
        isOpen ? 'translate-x-0' : '-translate-x-[calc(100%-48px)]'
      }`}
    >
      {/* Toggle Button - Now on the right side of the panel */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900/80 backdrop-blur-xl border border-[var(--border-primary)] border-l-0 p-3 rounded-r-2xl text-[var(--primary)] hover:text-white transition-colors shadow-2xl group"
        aria-label="Toggle Design Panel"
      >
        {isOpen ? (
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-6 h-6 animate-spin-slow" />
            <span className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-widest uppercase">Design</span>
          </div>
        )}
      </button>

      {/* Main Panel Content */}
      <div className="w-72 bg-gray-900/80 backdrop-blur-2xl border border-[var(--border-primary)] p-6 shadow-2xl rounded-r-2xl overflow-hidden max-h-[calc(100vh-160px)] flex flex-col">
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-primary)] pb-4">
            <PaletteIcon className="w-5 h-5 text-[var(--primary)]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Design Engine</h3>
          </div>

          {/* Palette Selector */}
          <div className="space-y-4 mb-10">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <LayoutGrid className="w-3 h-3" />
              Color Palette
            </label>
            <div className="grid grid-cols-1 gap-2">
              {palettes.map((p) => (
                <button
                  key={p}
                  onClick={() => setPalette(p)}
                  className={`flex items-center gap-3 p-2 rounded-xl border transition-all ${
                    palette === p 
                      ? 'bg-gray-800 border-[var(--primary)] shadow-lg shadow-[var(--primary-shadow)]' 
                      : 'bg-transparent border-[var(--border-primary)] hover:border-gray-700'
                  }`}
                >
                  <div 
                    className="w-10 h-10 rounded-full shadow-inner" 
                    style={{ backgroundColor: paletteColors[p] }}
                  />
                  <span className={`text-xs font-medium ${palette === p ? 'text-white' : 'text-gray-400'}`}>
                    {paletteNames[p]}
                  </span>
                  {palette === p && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Background Selector */}
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
              <ImageIcon className="w-3 h-3" />
              Hero Background
            </label>
            <div className="flex p-1 bg-gray-950 rounded-xl border border-[var(--border-primary)]">
              <button
                onClick={() => setBgType('gradient')}
                className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-lg text-[10px] font-bold transition-all ${
                  bgType === 'gradient' 
                    ? 'bg-gray-800 text-[var(--primary)] border border-gray-700 shadow-lg' 
                    : 'text-gray-500 hover:text-gray-400'
                }`}
              >
                <span>Dynamic Gradient</span>
              </button>
              <button
                onClick={() => setBgType('image')}
                className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-lg text-[10px] font-bold transition-all ${
                  bgType === 'image' 
                    ? 'bg-gray-800 text-[var(--primary)] border border-gray-700 shadow-lg' 
                    : 'text-gray-500 hover:text-gray-400'
                }`}
              >
                <span>Office Cinematic</span>
              </button>
            </div>
          </div>

          {/* Branding hint */}
          <div className="mt-8 pt-4 border-t border-[var(--border-primary)]">
            <p className="text-[10px] text-gray-600 italic">
              * Custom-tailored professional patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
