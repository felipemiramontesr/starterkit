import express, { type Request, type Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

export const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Defensivo
app.use(helmet());
app.use(cors());
app.use(express.json());

interface HealthCheckBody {
  targetUrl: string;
}

interface HealthCheckResponse {
  targetUrl: string;
  isSslActive: boolean;
  responseTimeMs: number;
  status: number;
}

/**
 * Health Check API Endpoint.
 * Ingesta una URL destino ('targetUrl') usando Node.js 18+ nativo Fetch.
 * Mide la velocidad de ida/vuelta y el escudo criptográfico (SSL).
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
app.post('/api/health-check', async (req: Request, res: Response): Promise<Response> => {
  const body = req.body as HealthCheckBody;
  
  if (!body || !body.targetUrl || typeof body.targetUrl !== 'string') {
    return res.status(400).json({ error: 'targetUrl es requerido y debe ser un entorno string' }) as unknown as Response;
  }

  const url = body.targetUrl;
  const startTime = performance.now();
  
  try {
    // Si la máquina tiene Node < 18 y carece de fetch esto puede reventar,
    // pero nuestro GitHub Action estipuló Setup Node v24 explícitamente.
    const response = await fetch(url, { method: 'HEAD' });
    const endTime = performance.now();
    
    // Asumimos SSL limpio si es HTTPS y no arroja error CERT_INVALID interno.
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

// Ignite Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, (): void => {
    console.log(`\n🛡️ [Sentinel Backend] Operando en puerto ${PORT}`);
    console.log(`🛡️ Cabeceras dinámicas x-powered-by eliminadas. Strict-Transport-Security inyectado vía Helmet.\n`);
  });
}
