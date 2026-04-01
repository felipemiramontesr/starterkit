import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactForm } from './ContactForm';
import { BUSINESS_CONFIG } from '../../config/business';

describe('ContactForm Direct CTA Static Model', () => {
  it('Renders beautifully and points strictly to WhatsApp API with target _blank', () => {
    render(<ContactForm />);
    
    // Títulos correctos
    expect(screen.getByText(/¿Quieres una página web así\?/i)).toBeInTheDocument();
    
    // Localiza el nuevo botón ancla
    const linkElement = screen.getByRole('link', { name: /Quiero mi propia Landing Page/i });
    
    // Confirma la URL generada globalmente
    expect(linkElement).toHaveAttribute('href', BUSINESS_CONFIG.whatsapp.getApiUrl());
    
    // Confirma su comportamiento UX
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});
