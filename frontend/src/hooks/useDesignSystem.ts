/**
 * @module useDesignSystem
 * @description Type definitions and the primary hook for accessing the Design System state.
 * This module defines the available palettes and the background behavior.
 */
import { createContext, useContext } from 'react';

export type Palette = 'indigo' | 'emerald' | 'amber' | 'crimson' | 'slate';
export type BgType = 'gradient' | 'image';

export interface PaletteColors {
  primary: string;
  primaryHover: string;
  accent: string;
  bgPrimary: string;
  bgSecondary: string;
  border: string;
  shadow: string;
}

export const PALETTES: Record<Palette, PaletteColors> = {
  indigo: {
    primary: '#4f46e5',
    primaryHover: '#6366f1',
    accent: '#818cf8',
    bgPrimary: '#030712',
    bgSecondary: '#111827',
    border: '#1f2937',
    shadow: 'rgba(79, 70, 229, 0.2)',
  },
  emerald: {
    primary: '#10b981',
    primaryHover: '#34d399',
    accent: '#6ee7b7',
    bgPrimary: '#022c22', // Deeper emerald dark
    bgSecondary: '#064e3b',
    border: '#065f46',
    shadow: 'rgba(16, 185, 129, 0.2)',
  },
  amber: {
    primary: '#f59e0b',
    primaryHover: '#fbbf24',
    accent: '#fcd34d',
    bgPrimary: '#1c1917', // Stone dark with amber hint
    bgSecondary: '#292524',
    border: '#44403c',
    shadow: 'rgba(245, 158, 11, 0.2)',
  },
  crimson: {
    primary: '#e11d48',
    primaryHover: '#fb7185',
    accent: '#fda4af',
    bgPrimary: '#18181b', // Zinc dark
    bgSecondary: '#27272a',
    border: '#3f3f46',
    shadow: 'rgba(225, 29, 72, 0.2)',
  },
  slate: {
    primary: '#94a3b8',
    primaryHover: '#cbd5e1',
    accent: '#f1f5f9',
    bgPrimary: '#020617', // Midnight slate
    bgSecondary: '#0f172a',
    border: '#1e293b',
    shadow: 'rgba(148, 163, 184, 0.1)',
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
 * useDesignSystem Hook.
 * Primary hook for accessing and manipulating the global design state.
 * 
 * @returns {DesignContextType} The current design system context value.
 * @throws {Error} If used outside of a DesignProvider.
 */
export const useDesignSystem = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesignSystem must be used within a DesignProvider');
  }
  return context;
};
