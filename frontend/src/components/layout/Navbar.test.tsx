import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText(/Tu Marca/i)).toBeInTheDocument();
    
    // Multiple links because desktop + possible hidden mobile
    const homeLinks = screen.getAllByText('Inicio');
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu on button click', () => {
    render(<Navbar />);
    const button = screen.getByRole('button', { name: /toggle menu/i });
    
    const initialLinkContainers = screen.getAllByText('Inicio');
    const initialCount = initialLinkContainers.length;

    fireEvent.click(button);
    
    // Should render a new set of links in the mobile dropdown
    const updatedLinkContainers = screen.getAllByText('Inicio');
    expect(updatedLinkContainers.length).toBeGreaterThan(initialCount);
  });
});
