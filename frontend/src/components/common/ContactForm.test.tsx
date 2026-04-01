import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactForm } from './ContactForm';

describe('ContactForm Multi-Field Architecture', () => {
  it('Renders all form fields and submit button', () => {
    render(<ContactForm />);
    
    // Títulos correctos
    expect(screen.getByText(/¿Quieres una página web así\?/i)).toBeInTheDocument();
    
    // Inputs existentes
    expect(screen.getByPlaceholderText(/Juan Pérez/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/juan@ejemplo.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/5512345678/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Me gustaría una landing page/i)).toBeInTheDocument();
    
    // Botón de envío
    expect(screen.getByRole('button', { name: /Solicitar Presupuesto/i })).toBeInTheDocument();
  });
});
