import { useState, useEffect, ReactNode } from 'react';
import { DesignContext, PALETTES, type Palette, type BgType } from './useDesignSystem';

/**
 * DesignProvider - Professional Theme Context Provider.
 * This file ONLY exports a component to satisfy Vite's Fast Refresh rules.
 */
export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [palette, setPalette] = useState<Palette>(() => {
    return (localStorage.getItem('design-palette') as Palette) || 'indigo';
  });
  const [bgType, setBgType] = useState<BgType>(() => {
    return (localStorage.getItem('design-bg-type') as BgType) || 'gradient';
  });
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const colors = PALETTES[palette];

    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-hover', colors.primaryHover);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--bg-primary', colors.bgPrimary);

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
