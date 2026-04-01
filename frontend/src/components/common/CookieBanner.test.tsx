import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { CookieBanner } from './CookieBanner';
import '@testing-library/jest-dom';

describe('CookieBanner Component', () => {
  it('renders immediately when no cookie is set', async () => {
    const onVisibilityChange = vi.fn();
    
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={onVisibilityChange} />
      </MemoryRouter>
    );

    // Should be visible now
    expect(screen.getByText(/Privacidad y Cookies/i)).toBeInTheDocument();
    expect(onVisibilityChange).toHaveBeenCalledWith(true);
  });

  it('contains a link to the policies page', async () => {
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={() => {}} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /Aviso de Privacidad/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/politicas');
  });

  it('contains a "Rechazar" button that hides the banner', async () => {
    const onVisibilityChange = vi.fn();
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={onVisibilityChange} />
      </MemoryRouter>
    );

    const rejectButton = screen.getByRole('button', { name: /Rechazar/i });
    expect(rejectButton).toBeInTheDocument();
    
    act(() => {
      rejectButton.click();
    });

    expect(screen.queryByText(/Privacidad y Cookies/i)).not.toBeInTheDocument();
    expect(onVisibilityChange).toHaveBeenLastCalledWith(false);
  });
});
