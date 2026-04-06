import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Portfolio from './Portfolio';
import '@testing-library/jest-dom';

describe('Portfolio Component', () => {
  it('renders correctly with title and subtitle', () => {
    render(<Portfolio />);
    
    expect(screen.getByText(/portfolio\.title/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio\.subtitle/i)).toBeInTheDocument();
  });

  it('renders all projects with their specific dynamic titles', () => {
    render(<Portfolio />);
    
    // Check for the new dynamic titles from V0.11.9
    expect(screen.getByText('Global Commerce')).toBeInTheDocument();
    expect(screen.getByText('Mobility Protocol')).toBeInTheDocument();
    expect(screen.getByText('Intelligence Hub')).toBeInTheDocument();
    expect(screen.getByText('Brand DNA')).toBeInTheDocument();
  });

  it('contains and renders all item categories with i18n keys', () => {
    render(<Portfolio />);
    
    // Each of the 4 items has a category label
    expect(screen.getByText(/portfolio\.items\.web/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio\.items\.app/i)).toBeInTheDocument();
    expect(screen.getAllByText(/portfolio\.items\.ux/i)).toHaveLength(1);
  });
});
