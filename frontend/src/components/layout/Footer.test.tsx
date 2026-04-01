import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders branding, legal links, and social icons', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    // Branding
    expect(screen.getByText(/Tu Marca/i)).toBeInTheDocument();
    
    // Links
    expect(screen.getByText('Aviso de Privacidad')).toBeInTheDocument();
    expect(screen.getByText('Términos de Servicio')).toBeInTheDocument();
    
    // Social labels
    expect(screen.getByLabelText('Website')).toBeInTheDocument();
    expect(screen.getByLabelText('Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Chat')).toBeInTheDocument();
  });
});
