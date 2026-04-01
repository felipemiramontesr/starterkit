import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { app } from '../src/server.js';

// Evitamos que las pruebas deterioren el disco fs mockeando su modulo atómicamente.
vi.mock('fs/promises', async () => {
  return {
    default: {
      mkdir: vi.fn(),
      readFile: vi.fn().mockResolvedValue('[]'),
      writeFile: vi.fn()
    }
  };
});

describe('E2E Contact Form Workflow (Zod + FS)', () => {
  it('Should reject invalid or malformed data immediately returning 400 Bad Request', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({ name: 'A', email: 'notanemail' }); 
    
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });

  it('Should accept pristine payloads, mimic logging, and return 200 OK', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({ 
        name: 'John Doe',
        email: 'john@cybersecurity.com',
        subject: 'Inquiry',
        message: 'This is a strictly compliant payload with minimum 10 char limit.'
      });
      
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
