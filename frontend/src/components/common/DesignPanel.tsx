import { useState } from 'react';
import { Settings, ChevronRight, Palette as PaletteIcon, Image as ImageIcon, LayoutGrid } from 'lucide-react';
import { useDesignSystem, type Palette } from '../../hooks/useDesignSystem';

/**
 * DesignPanel - Professional Theme Customizer.
 * Floating panel on the right, glassmorphism style.
 */
export const DesignPanel = () => {
  const { palette, setPalette, bgType, setBgType, palettes } = useDesignSystem();
  const [isOpen, setIsOpen] = useState(true);

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
    slate: '#71717a',
  };

  return (
    <div 
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-[60] transition-all duration-500 ease-in-out flex items-center ${
        isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-48px)]'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 border-r-0 p-3 rounded-l-2xl text-indigo-400 hover:text-white transition-colors shadow-2xl group"
        aria-label="Toggle Design Panel"
      >
        {isOpen ? (
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Settings className="w-6 h-6 animate-spin-slow" />
            <span className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-widest uppercase">Design</span>
          </div>
        )}
      </button>

      {/* Main Panel Content */}
      <div className="w-80 bg-gray-900/80 backdrop-blur-2xl border border-gray-800 p-6 shadow-2xl rounded-l-none rounded-r-none md:rounded-l-2xl">
        <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
          <PaletteIcon className="w-5 h-5 text-indigo-500" />
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
                    ? 'bg-gray-800 border-indigo-500 shadow-lg shadow-indigo-500/10' 
                    : 'bg-transparent border-gray-800 hover:border-gray-700'
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
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
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
          <div className="flex p-1 bg-gray-950 rounded-xl border border-gray-800">
            <button
              onClick={() => setBgType('gradient')}
              className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-lg text-[10px] font-bold transition-all ${
                bgType === 'gradient' 
                  ? 'bg-gray-800 text-indigo-400 border border-gray-700 shadow-lg' 
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              <span>Dynamic Gradient</span>
            </button>
            <button
              onClick={() => setBgType('image')}
              className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-lg text-[10px] font-bold transition-all ${
                bgType === 'image' 
                  ? 'bg-gray-800 text-indigo-400 border border-gray-700 shadow-lg' 
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              <span>Office Cinematic</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <p className="text-[10px] text-gray-600 italic">
            * World-class design configurations for professional branding.
          </p>
        </div>
      </div>
    </div>
  );
};
