/**
 * @module Server
 * @description Primary entry point for the Sentinel Backend.
 * Orchestrates security middleware, lead capture logic, and system health checks.
 */
import express, { type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

export const app = express();
const PORT = process.env.PORT || 3000;

// Defensive Middleware Stack
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * HealthCheck Request Schema.
 * @interface
 */
interface HealthCheckBody {
  /** The destination URL for connectivity validation */
  targetUrl: string;
}

/**
 * HealthCheck Orchestration Results.
 * @interface
 */
interface HealthCheckResponse {
  /** The validated target destination */
  targetUrl: string;
  /** Cryptographic SSL status of the target */
  isSslActive: boolean;
  /** Latency measurements in milliseconds */
  responseTimeMs: number;
  /** Standard HTTP response code */
  status: number;
}

/**
 * System Health Check Diagnostic.
 * Performs real-time connectivity and SSL validation for specified targets.
 * 
 * @route POST /api/health-check
 * @param {Request} req - The Express request object containing the targetUrl.
 * @param {Response} res - The Express response object.
 * @returns {Promise<Response>} The diagnostic payload.
 */
app.post('/api/health-check', async (req: Request, res: Response): Promise<Response> => {
  const body = req.body as HealthCheckBody;
  
  if (!body || !body.targetUrl || typeof body.targetUrl !== 'string') {
    return res.status(400).json({ error: 'targetUrl es requerido y debe ser un entorno string' }) as unknown as Response;
  }

  const url = body.targetUrl;
  const startTime = performance.now();
  
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const endTime = performance.now();
    const isSslActive = new URL(url).protocol === 'https:';

    const payload: HealthCheckResponse = {
      targetUrl: url,
      isSslActive,
      responseTimeMs: Math.round(endTime - startTime),
      status: response.status
    };

    return res.status(200).json(payload) as unknown as Response;
    
  } catch {
    const endTime = performance.now();
    return res.status(500).json({
      targetUrl: url,
      isSslActive: false,
      responseTimeMs: Math.round(endTime - startTime),
      error: 'Host inalcanzable, latencia rebasada o escudo SSL inválido / expilado.'
    }) as unknown as Response;
  }
});

// ========================
// E2E Contact Logic
// ========================

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10)
});

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

app.post('/api/contact', async (req: Request, res: Response): Promise<Response> => {
  try {
    // 1. Zod Zero Trust Validation
    const payload = contactSchema.parse(req.body);
    const newLead = { ...payload, timestamp: new Date().toISOString() };

    // 2. Persistencia Segura (I/O)
    try { await fs.mkdir(DATA_DIR, { recursive: true }); } catch { /* skip */ }
    
    let currentLeads = [];
    try {
      const fileData = await fs.readFile(LEADS_FILE, 'utf-8');
      if (fileData) currentLeads = JSON.parse(fileData);
    } catch { /* skip */ }
    
    currentLeads.push(newLead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(currentLeads, null, 2), 'utf-8');

    // 3. Webhook Alert via Native Fetch (Fire & Forget logic)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('http')) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🚀 **Nuevo Lead** en StarterKit\n> **${payload.name}** as ${payload.email}\n> Asunto: ${payload.subject}`
        })
      }).catch(err => console.error('Webhook notification falló silenciamente: ', err));
    } else {
      console.log('Ningun WEBHOOK_URL fue provisto. Lead capturado y aislado en memoria disco.');
    }

    return res.status(200).json({ success: true, message: 'Operación confirmada' }) as unknown as Response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, error: error.issues }) as unknown as Response;
    }
    return res.status(500).json({ success: false, error: 'Internal Server Error' }) as unknown as Response;
  }
});

// Ignite Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, (): void => {
    console.log(`\n🛡️ [Sentinel Backend] Operando en puerto ${PORT}`);
    console.log(`🛡️ Persistencia activa. Cabeceras estrictas. Vite proxy linkable.`);
  });
}
