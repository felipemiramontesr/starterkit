import { render, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DesignProvider } from './DesignContext'
import { useDesignSystem, PALETTES } from './useDesignSystem'

// Helper component to consume the context
const TestComponent = () => {
  const { palette, setPalette } = useDesignSystem()
  return (
    <div>
      <span data-testid="palette-name">{palette}</span>
      <button onClick={() => setPalette('emerald')}>Change to Emerald</button>
    </div>
  )
}

describe('DesignProvider & DesignContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    // Clear root styles
    document.documentElement.removeAttribute('style')
  })

  it('provides default indigo palette and sets CSS variables', () => {
    const { getByTestId } = render(
      <DesignProvider>
        <TestComponent />
      </DesignProvider>
    )

    expect(getByTestId('palette-name').textContent).toBe('indigo')

    // Check if CSS variables were injected into documentElement
    const root = document.documentElement
    expect(root.style.getPropertyValue('--primary')).toBe(PALETTES.indigo.primary)
    expect(root.style.getPropertyValue('--bg-primary')).toBe(PALETTES.indigo.bgPrimary)
  })

  it('updates palette and CSS variables when setPalette is called', () => {
    const { getByTestId, getByText } = render(
      <DesignProvider>
        <TestComponent />
      </DesignProvider>
    )

    const button = getByText('Change to Emerald')

    act(() => {
      button.click()
    })

    expect(getByTestId('palette-name').textContent).toBe('emerald')

    const root = document.documentElement
    expect(root.style.getPropertyValue('--primary')).toBe(PALETTES.emerald.primary)
    expect(root.style.getPropertyValue('--bg-primary')).toBe(PALETTES.emerald.bgPrimary)

    // Verify localStorage persistence
    expect(localStorage.getItem('design-palette')).toBe('emerald')
  })

  it('loads initial palette from localStorage if available', () => {
    localStorage.setItem('design-palette', 'crimson')

    const { getByTestId } = render(
      <DesignProvider>
        <TestComponent />
      </DesignProvider>
    )

    expect(getByTestId('palette-name').textContent).toBe('crimson')
    expect(document.documentElement.style.getPropertyValue('--primary')).toBe(
      PALETTES.crimson.primary
    )
  })
})
