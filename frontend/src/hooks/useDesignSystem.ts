import { createContext, useContext } from 'react';

export type Palette = 'indigo' | 'emerald' | 'amber' | 'crimson' | 'slate';
export type BgType = 'gradient' | 'image';

export interface PaletteColors {
  primary: string;
  primaryHover: string;
  accent: string;
  bgPrimary: string;
}

export const PALETTES: Record<Palette, PaletteColors> = {
  indigo: {
    primary: '#4f46e5',
    primaryHover: '#6366f1',
    accent: '#818cf8',
    bgPrimary: '#030712',
  },
  emerald: {
    primary: '#10b981',
    primaryHover: '#34d399',
    accent: '#6ee7b7',
    bgPrimary: '#000000',
  },
  amber: {
    primary: '#f59e0b',
    primaryHover: '#fbbf24',
    accent: '#fcd34d',
    bgPrimary: '#0c0a09',
  },
  crimson: {
    primary: '#e11d48',
    primaryHover: '#fb7185',
    accent: '#fda4af',
    bgPrimary: '#09090b',
  },
  slate: {
    primary: '#71717a',
    primaryHover: '#a1a1aa',
    accent: '#d4d4d8',
    bgPrimary: '#000000',
  },
};

export interface DesignContextType {
  palette: Palette;
  setPalette: (p: Palette) => void;
  bgType: BgType;
  setBgType: (b: BgType) => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (o: boolean) => void;
  palettes: Palette[];
}

export const DesignContext = createContext<DesignContextType | undefined>(undefined);

/**
 * Hook for using the design system.
 * This is exported from a non-JSX file to satisfy Vite's Fast Refresh rules.
 */
export const useDesignSystem = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesignSystem must be used within a DesignProvider');
  }
  return context;
};
