import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DesignPanel } from './DesignPanel'
import { useDesignSystem } from '../../hooks/useDesignSystem'

// Mock useDesignSystem hook
vi.mock('../../hooks/useDesignSystem', () => ({
  useDesignSystem: vi.fn(),
}))

describe('DesignPanel Component', () => {
  const mockSetPalette = vi.fn()
  const mockSetBgType = vi.fn()

  beforeEach(() => {
    vi.mocked(useDesignSystem).mockReturnValue({
      palette: 'indigo',
      setPalette: mockSetPalette,
      bgType: 'gradient',
      setBgType: mockSetBgType,
      palettes: ['indigo', 'emerald', 'amber', 'crimson', 'slate'],
      isPanelOpen: false,
      setIsPanelOpen: vi.fn(),
    })
  })

  it('is collapsed by default', () => {
    render(<DesignPanel />)
    const panelContainer = screen.getByLabelText('Toggle Design Panel').parentElement
    // Check for the translate class when collapsed
    expect(panelContainer?.className).toContain('-translate-x-')
  })

  it('expands when the toggle button is clicked', () => {
    render(<DesignPanel />)
    const toggleButton = screen.getByLabelText('Toggle Design Panel')

    fireEvent.click(toggleButton)

    const panelContainer = toggleButton.parentElement
    expect(panelContainer?.className).toContain('translate-x-0')
  })

  it('calls setPalette when a color option is clicked', () => {
    render(<DesignPanel />)
    // Open the panel first
    fireEvent.click(screen.getByLabelText('Toggle Design Panel'))

    const emeraldButton = screen.getByText('design_engine.palettes.emerald')
    fireEvent.click(emeraldButton)

    expect(mockSetPalette).toHaveBeenCalledWith('emerald')
  })

  it('calls setBgType when background options are clicked', () => {
    render(<DesignPanel />)
    fireEvent.click(screen.getByLabelText('Toggle Design Panel'))

    const imageButton = screen.getByText('design_engine.office_cinematic')
    fireEvent.click(imageButton)

    expect(mockSetBgType).toHaveBeenCalledWith('image')
  })
})
