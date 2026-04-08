import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { WhatsAppFloating } from './WhatsAppFloating'

// Mock useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

describe('WhatsAppFloating Component', () => {
  it('renders correctly with the correct WhatsApp URL', () => {
    render(<WhatsAppFloating isShifted={false} />)

    const link = screen.getByLabelText('whatsapp.label')
    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toContain('https://wa.me/524481117977')
  })

  it('applies the correct classes for default position', () => {
    render(<WhatsAppFloating isShifted={false} />)
    const link = screen.getByLabelText('whatsapp.label')
    expect(link.className).toContain('bottom-6')
    expect(link.className).toContain('right-6')
  })

  it('applies the shift classes when isShifted is true', () => {
    render(<WhatsAppFloating isShifted={true} />)
    const link = screen.getByLabelText('whatsapp.label')
    expect(link.className).toContain('bottom-[200px]')
  })
})
