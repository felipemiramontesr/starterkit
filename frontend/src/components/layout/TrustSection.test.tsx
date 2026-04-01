import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TrustSection } from './TrustSection';
import '@testing-library/jest-dom';

describe('TrustSection Component', () => {
  it('renders title and trust items', () => {
    render(<TrustSection />);
    expect(screen.getByText(/Confianza y Seguridad/i)).toBeInTheDocument();
    
    expect(screen.getByText('Data Secured')).toBeInTheDocument();
    expect(screen.getByText('Verified Identity')).toBeInTheDocument();
    expect(screen.getByText('Threat Blocked')).toBeInTheDocument();
  });

  it('triggers fade-in animation slightly after mount', () => {
    vi.useFakeTimers();
    render(<TrustSection />);
    
    const grid = screen.getByTestId('trust-grid');
    // Initially hidden
    expect(grid).toHaveClass('opacity-0');
    
    // Fast-forward timer
    act(() => {
      vi.advanceTimersByTime(150);
    });
    
    // Now visible
    expect(grid).toHaveClass('opacity-100');
    vi.useRealTimers();
  });
});
