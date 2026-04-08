import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Testimonials from './Testimonials'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('Testimonials Component', () => {
  it('renders correctly with all reviews', () => {
    render(<Testimonials />)

    expect(screen.getByText('testimonials.title')).toBeDefined()

    expect(screen.getByText('Sarah Jenkins')).toBeDefined()
    expect(screen.getByText(/Realmente transformaron nuestra visión en realidad/)).toBeDefined()

    expect(screen.getByText('David Smith')).toBeDefined()
    expect(screen.getByText(/Una infraestructura sólida y escalable/)).toBeDefined()

    expect(screen.getByText('Elena Rossi')).toBeDefined()
    expect(screen.getByText(/La atención al detalle/)).toBeDefined()
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    // Each review has 5 stars, 3 reviews = 15 stars total
    const stars = container.querySelectorAll('svg.lucide-star')
    expect(stars.length).toBe(15)
  })
})
