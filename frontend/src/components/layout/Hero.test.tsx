import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Hero from './Hero'
import userEvent from '@testing-library/user-event'

vi.mock('../../hooks/useDesignSystem', () => ({
  useDesignSystem: () => ({
    bgType: 'gradient',
  }),
}))

describe('Hero Component', () => {
  it('renders correctly and displays the main text', () => {
    const testTitle = 'Prueba Starter Kit Pro'
    const testSubtitle = 'Subtítulo increíble de alto rendimiento.'
    const testCtaText = 'Empezar ahora'

    render(<Hero title={testTitle} subtitle={testSubtitle} ctaText={testCtaText} />)

    const titleElement = screen.getByText(testTitle)
    const subtitleElement = screen.getByText(testSubtitle)
    const ctaButton = screen.getByRole('button', { name: testCtaText })

    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
    expect(ctaButton).toBeInTheDocument()
  })

  it('triggers onCtaClick when button is clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Hero title="Test" subtitle="Test Sub" ctaText="Click Me" onCtaClick={handleClick} />)

    await user.click(screen.getByRole('button', { name: 'Click Me' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
