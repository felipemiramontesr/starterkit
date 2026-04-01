import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactForm } from './ContactForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('ContactForm Component', () => {
  it('renders correctly', () => {
    render(<ContactForm />);
    expect(screen.getByText('Inicia Operaciones')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('validates schema and shows errors for empty inputs on submit', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Submit empty form
    await user.click(screen.getByRole('button', { name: /enviar/i }));
    
    // Check for validation errors via fast async check
    await waitFor(() => {
      expect(screen.getByText('El nombre debe tener al menos 2 caracteres')).toBeInTheDocument();
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
    });
  });

  it('submits correctly with valid inputs', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Fill out the form
    await user.type(screen.getByLabelText(/nombre/i), 'Commander');
    await user.type(screen.getByLabelText(/email/i), 'test@testing.com');
    await user.type(screen.getByLabelText(/asunto/i), 'Secure Access');
    await user.type(screen.getByLabelText(/mensaje/i), 'Need tactical support immediately.');
    
    // Submit
    const button = screen.getByRole('button', { name: /enviar/i });
    await user.click(button);
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/mensaje enviado correctamente/i)).toBeInTheDocument();
    }, { timeout: 2500 });
  });
});
