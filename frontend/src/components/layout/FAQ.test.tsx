import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import FAQ from './FAQ'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('FAQ Component', () => {
  it('renders correctly with all questions', () => {
    render(<FAQ />)

    expect(screen.getByText('faq.title')).toBeDefined()
    expect(screen.getByText('faq.items.time.q')).toBeDefined()
    expect(screen.getByText('faq.items.support.q')).toBeDefined()
    expect(screen.getByText('faq.items.seo.q')).toBeDefined()
  })

  it('toggles accordion when clicking on a question', () => {
    render(<FAQ />)

    const question = screen.getByText('faq.items.time.q')
    const button = question.closest('button')

    if (!button) throw new Error('Button not found')

    // Click to close (since first one is open by default)
    fireEvent.click(button)

    // The answer should be hidden (max-h-0)
    const answer = screen.getByText('faq.items.time.a')
    expect(answer.parentElement?.className).toContain('max-h-0')

    // Click again to open
    fireEvent.click(button)
    expect(answer.parentElement?.className).toContain('max-h-96')
  })
})
