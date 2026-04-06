/**
 * @module DesignContext
 * @description Core engine for the dynamic design system.
 * Manages global CSS variables and theme persistence.
 */
import { useState, useEffect, ReactNode } from 'react';
import { DesignContext, PALETTES, type Palette, type BgType } from './useDesignSystem';

/**
 * DesignProvider Component.
 * Orchestrates the injection of CSS variables into the document root
 * and provides state management for themes and UI panels.
 * 
 * @param {object} props - Component properties.
 * @param {ReactNode} props.children - Child components to be wrapped.
 * @returns {ReactElement} The design orchestration provider.
 */
export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [palette, setPalette] = useState<Palette>(() => {
    return (localStorage.getItem('design-palette') as Palette) || 'indigo';
  });
  const [bgType, setBgType] = useState<BgType>(() => {
    return (localStorage.getItem('design-bg-type') as BgType) || 'image';
  });
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const colors = PALETTES[palette];

    // Inject CSS variables for the global design system
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-hover', colors.primaryHover);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--bg-primary', colors.bgPrimary);
    root.style.setProperty('--bg-secondary', colors.bgSecondary);
    root.style.setProperty('--border-primary', colors.border);
    root.style.setProperty('--primary-shadow', colors.shadow);

    localStorage.setItem('design-palette', palette);
    localStorage.setItem('design-bg-type', bgType);
  }, [palette, bgType]);

  const value = {
    palette,
    setPalette,
    bgType,
    setBgType,
    isPanelOpen,
    setIsPanelOpen,
    palettes: Object.keys(PALETTES) as Palette[],
  };

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
};
