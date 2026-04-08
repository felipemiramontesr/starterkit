import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Lightbox } from './Lightbox';

describe('Lightbox Component', () => {
  const mockImages = [
    { image: 'img1.jpg', title: 'Image 1' },
    { image: 'img2.jpg', title: 'Image 2' },
  ];
  const mockOnClose = vi.fn();
  const mockOnPrev = vi.fn();
  const mockOnNext = vi.fn();

  it('renders correctly when active', () => {
    render(
      <Lightbox 
        images={mockImages} 
        currentIndex={0} 
        onClose={mockOnClose} 
        onPrev={mockOnPrev} 
        onNext={mockOnNext} 
      />
    );
    
    expect(screen.getByAltText('Image 1')).toBeDefined();
    expect(screen.getByText('Image 1')).toBeDefined();
    expect(screen.getByText('1 / 2')).toBeDefined();
  });

  it('calls onNext when next button is clicked', () => {
    render(
      <Lightbox 
        images={mockImages} 
        currentIndex={0} 
        onClose={mockOnClose} 
        onPrev={mockOnPrev} 
        onNext={mockOnNext} 
      />
    );
    
    const nextButton = screen.getByLabelText('Next');
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalled();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <Lightbox 
        images={mockImages} 
        currentIndex={0} 
        onClose={mockOnClose} 
        onPrev={mockOnPrev} 
        onNext={mockOnNext} 
      />
    );
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('returns null when currentIndex is -1', () => {
    const { container } = render(
      <Lightbox 
        images={mockImages} 
        currentIndex={-1} 
        onClose={mockOnClose} 
        onPrev={mockOnPrev} 
        onNext={mockOnNext} 
      />
    );
    
    expect(container.firstChild).toBeNull();
  });
});
