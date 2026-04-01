import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders branding, legal links, and social icons', () => {
    render(<Footer />);
    
    // Branding
    expect(screen.getByText(/StarterPro/i)).toBeInTheDocument();
    
    // Links
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    
    // Social labels
    expect(screen.getByLabelText('Website')).toBeInTheDocument();
    expect(screen.getByLabelText('Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Chat')).toBeInTheDocument();
  });
});
