import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Stats from './Stats'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Stats Component', () => {
  it('renders correctly with all metrics', () => {
    render(<Stats />)

    expect(screen.getByText('500+')).toBeDefined()
    expect(screen.getByText('stats.projects')).toBeDefined()

    expect(screen.getByText('250+')).toBeDefined()
    expect(screen.getByText('stats.clients')).toBeDefined()

    expect(screen.getByText('10+')).toBeDefined()
    expect(screen.getByText('stats.experience')).toBeDefined()

    expect(screen.getByText('24/7')).toBeDefined()
    expect(screen.getByText('stats.support')).toBeDefined()
  })
})
