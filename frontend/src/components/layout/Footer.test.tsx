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
    expect(screen.getByText(/hero\.title/i)).toBeInTheDocument();
    
    // Links
    expect(screen.getByText('footer.privacy')).toBeInTheDocument();
    expect(screen.getByText('footer.terms')).toBeInTheDocument();
    
    // Social labels
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('X')).toBeInTheDocument();
    expect(screen.getByLabelText('TikTok')).toBeInTheDocument();
  });
});
