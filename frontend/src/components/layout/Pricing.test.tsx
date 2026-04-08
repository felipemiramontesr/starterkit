import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Pricing from './Pricing'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Pricing Component', () => {
  it('renders correctly with all tiers', () => {
    render(<Pricing />)

    expect(screen.getByText('pricing.title')).toBeDefined()
    expect(screen.getByText('pricing.tiers.starter.name')).toBeDefined()
    expect(screen.getByText('pricing.tiers.pro.name')).toBeDefined()
    expect(screen.getByText('pricing.tiers.enterprise.name')).toBeDefined()
  })

  it('highlights the popular tier', () => {
    render(<Pricing />)

    expect(screen.getByText('pricing.most_popular')).toBeDefined()
    // The most popular badge should be near the 'Pro' tier
    const popularBadge = screen.getByText('pricing.most_popular')
    expect(popularBadge).toBeDefined()
  })
})
