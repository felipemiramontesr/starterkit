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
    expect(screen.getByText('cookies.title')).toBeInTheDocument();
    expect(onVisibilityChange).toHaveBeenCalledWith(true);
  });

  it('contains a link to the policies page', async () => {
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={() => {}} />
      </MemoryRouter>
    );

    const link = screen.getByText('cookies.link');
    expect(link).toBeInTheDocument();
  });

  it('contains a "cookies.reject" button that hides the banner', async () => {
    const onVisibilityChange = vi.fn();
    render(
      <MemoryRouter>
        <CookieBanner onVisibilityChange={onVisibilityChange} />
      </MemoryRouter>
    );

    const rejectButton = screen.getByText('cookies.reject');
    expect(rejectButton).toBeInTheDocument();
    
    act(() => {
      rejectButton.click();
    });

    expect(screen.queryByText('cookies.title')).not.toBeInTheDocument();
    expect(onVisibilityChange).toHaveBeenLastCalledWith(false);
  });
});
