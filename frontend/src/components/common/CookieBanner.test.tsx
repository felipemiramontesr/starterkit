import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { CookieBanner } from './CookieBanner';
import '@testing-library/jest-dom';

describe('CookieBanner Component', () => {
  it('renders after delay when no cookie is set', async () => {
    vi.useFakeTimers();
    const onVisibilityChange = vi.fn();
    
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={onVisibilityChange} />
      </MemoryRouter>
    );

    // Should not be visible immediately
    expect(screen.queryByText(/Privacidad y Cookies/i)).not.toBeInTheDocument();

    // Advance timer
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // Should be visible now
    expect(screen.getByText(/Privacidad y Cookies/i)).toBeInTheDocument();
    expect(onVisibilityChange).toHaveBeenCalledWith(true);
    
    vi.useRealTimers();
  });

  it('contains a link to the policies page', async () => {
    vi.useFakeTimers();
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={() => {}} />
      </MemoryRouter>
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const link = screen.getByRole('link', { name: /Aviso de Privacidad/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/politicas');
    
    vi.useRealTimers();
  });

  it('contains a "Rechazar" button that hides the banner', async () => {
    vi.useFakeTimers();
    const onVisibilityChange = vi.fn();
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={onVisibilityChange} />
      </MemoryRouter>
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const rejectButton = screen.getByRole('button', { name: /Rechazar/i });
    expect(rejectButton).toBeInTheDocument();
    
    act(() => {
      rejectButton.click();
    });

    expect(screen.queryByText(/Privacidad y Cookies/i)).not.toBeInTheDocument();
    expect(onVisibilityChange).toHaveBeenLastCalledWith(false);
    
    vi.useRealTimers();
  });
});
