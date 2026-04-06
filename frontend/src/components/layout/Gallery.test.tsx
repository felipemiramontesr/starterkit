import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Gallery from './Gallery';
import '@testing-library/jest-dom';

describe('Gallery Component', () => {
  it('renders correctly with title and subtitle', () => {
    render(<Gallery />);
    
    // Check main title (using regex for i18n key or text)
    expect(screen.getByText(/facilities\.title/i)).toBeInTheDocument();
    expect(screen.getByText(/facilities\.subtitle/i)).toBeInTheDocument();
  });

  it('contains and renders all facility items with grayscale classes', () => {
    const { container } = render(<Gallery />);
    
    // Check for the 4 facility items (defined in Gallery.tsx)
    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(4);
    
    // Each image should have the grayscale class by default
    images.forEach(img => {
      expect(img).toHaveClass('grayscale');
    });
  });

  it('renders correct labels for facility items', () => {
    render(<Gallery />);
    
    expect(screen.getByText('facilities.hq')).toBeInTheDocument();
    expect(screen.getByText('facilities.lab')).toBeInTheDocument();
    expect(screen.getByText('facilities.hq_detail')).toBeInTheDocument();
  });
});
