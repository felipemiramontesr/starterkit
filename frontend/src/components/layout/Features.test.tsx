import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Features } from './Features'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Features Component', () => {
  it('renders correctly with all pillars', () => {
    render(<Features />)

    expect(screen.getByText('features.title')).toBeDefined()
    expect(screen.getByText('features.strategy.title')).toBeDefined()
    expect(screen.getByText('features.design.title')).toBeDefined()
    expect(screen.getByText('features.conversion.title')).toBeDefined()
  })

  it('contains the correct section ID for navigation', () => {
    const { container } = render(<Features />)
    const section = container.querySelector('#servicios')
    expect(section).toBeDefined()
  })
})
