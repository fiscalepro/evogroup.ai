/**
 * @jest-environment node
 *
 * Tests for /api/chat route — Turnstile verification, rate limits, daily limits
 */

// Mock OpenAI before importing route
jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{ message: { content: 'Test response' } }],
          usage: { total_tokens: 100 },
        }),
      },
    },
  }));
});

// Save original fetch
const originalFetch = global.fetch;

import { NextRequest } from 'next/server';

// Helper to create a NextRequest
function createRequest(
  body: Record<string, unknown>,
  options: {
    origin?: string;
    ip?: string;
    contentType?: string;
  } = {}
) {
  const { origin = 'https://evogroup.ai', ip = '1.2.3.4', contentType = 'application/json' } = options;

  const headers: Record<string, string> = {
    'content-type': contentType,
    'x-forwarded-for': ip,
  };
  if (origin) headers['origin'] = origin;

  return new NextRequest('http://localhost:3000/api/chat', {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
}

describe('/api/chat', () => {
  let POST: (req: NextRequest) => Promise<Response>;

  beforeEach(() => {
    // Reset modules to clear rate limit maps between tests
    jest.resetModules();

    // Reset env
    process.env.NODE_ENV = 'production';
    process.env.OPENCLAW_GATEWAY_TOKEN = 'test-token';
    delete process.env.TURNSTILE_SECRET_KEY;

    // Restore fetch
    global.fetch = originalFetch;
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  async function importRoute() {
    const mod = await import('@/app/api/chat/route');
    POST = mod.POST;
  }

  const validBody = {
    messages: [{ role: 'user', content: 'Hello' }],
  };

  describe('Turnstile verification', () => {
    it('should pass without Turnstile when TURNSTILE_SECRET_KEY is not set', async () => {
      await importRoute();

      const req = createRequest(validBody);
      const res = await POST(req);

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.message).toBe('Test response');
    });

    it('should reject requests without token when TURNSTILE_SECRET_KEY is set', async () => {
      process.env.TURNSTILE_SECRET_KEY = 'test-secret';
      await importRoute();

      const req = createRequest(validBody);
      const res = await POST(req);

      expect(res.status).toBe(403);
      const data = await res.json();
      expect(data.error).toContain('Turnstile');
    });

    it('should reject requests with invalid Turnstile token', async () => {
      process.env.TURNSTILE_SECRET_KEY = 'test-secret';
      await importRoute();

      // Mock Turnstile siteverify to return failure
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ success: false }),
      }) as unknown as typeof fetch;

      const req = createRequest({ ...validBody, turnstileToken: 'invalid-token' });
      const res = await POST(req);

      expect(res.status).toBe(403);
      const data = await res.json();
      expect(data.error).toContain('Turnstile verification failed');
    });

    it('should accept requests with valid Turnstile token', async () => {
      process.env.TURNSTILE_SECRET_KEY = 'test-secret';
      await importRoute();

      // Mock Turnstile siteverify to return success
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ success: true }),
      }) as unknown as typeof fetch;

      const req = createRequest({ ...validBody, turnstileToken: 'valid-token' });
      const res = await POST(req);

      expect(res.status).toBe(200);
    });
  });

  describe('Origin check', () => {
    it('should reject requests from unknown origins in production', async () => {
      await importRoute();

      const req = createRequest(validBody, { origin: 'https://evil.com' });
      const res = await POST(req);

      expect(res.status).toBe(403);
    });

    it('should accept requests from allowed origins', async () => {
      await importRoute();

      const req = createRequest(validBody, { origin: 'https://evogroup.ai' });
      const res = await POST(req);

      expect(res.status).toBe(200);
    });
  });

  describe('Rate limiting', () => {
    it('should allow 3 messages per minute then reject', async () => {
      await importRoute();

      const ip = '10.0.0.1';

      // First 3 should pass
      for (let i = 0; i < 3; i++) {
        const req = createRequest(validBody, { ip });
        const res = await POST(req);
        expect(res.status).toBe(200);
      }

      // 4th should be rate limited
      const req = createRequest(validBody, { ip });
      const res = await POST(req);
      expect(res.status).toBe(429);
      const data = await res.json();
      expect(data.userMessage).toContain('Слишком много сообщений');
    });

    it('should rate limit independently per IP', async () => {
      await importRoute();

      // Exhaust limit for IP A
      for (let i = 0; i < 3; i++) {
        const req = createRequest(validBody, { ip: '10.0.0.2' });
        await POST(req);
      }

      // IP B should still work
      const req = createRequest(validBody, { ip: '10.0.0.3' });
      const res = await POST(req);
      expect(res.status).toBe(200);
    });
  });

  describe('Input validation', () => {
    it('should reject requests without messages array', async () => {
      await importRoute();

      const req = createRequest({ messages: 'not-an-array' });
      const res = await POST(req);
      expect(res.status).toBe(400);
    });

    it('should reject conversations with more than 10 messages', async () => {
      await importRoute();

      const longMessages = Array.from({ length: 11 }, (_, i) => ({
        role: i % 2 === 0 ? 'user' : 'assistant',
        content: `Message ${i}`,
      }));

      const req = createRequest({ messages: longMessages });
      const res = await POST(req);
      expect(res.status).toBe(400);
    });
  });
});
