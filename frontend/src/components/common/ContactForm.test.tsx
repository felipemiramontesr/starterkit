import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm Multi-Field Architecture', () => {
  it('Renders all form fields and submit button', () => {
    render(<ContactForm />)

    // Títulos correctos
    expect(screen.getByText('contact.form_title')).toBeInTheDocument()

    // Inputs existentes
    expect(screen.getByPlaceholderText('contact.name_placeholder')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contact.email_placeholder')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contact.phone_placeholder')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('contact.message_placeholder')).toBeInTheDocument()

    // Botón de envío
    expect(screen.getByText('contact.submit')).toBeInTheDocument()
  })
})
