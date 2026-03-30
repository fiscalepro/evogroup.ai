/**
 * @jest-environment node
 *
 * Tests for /api/chat route — Turnstile verification, rate limits, daily limits,
 * OpenClaw webhook integration
 */

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

// Mock fetch to simulate OpenClaw webhook responses
function mockFetchForOpenClaw() {
  global.fetch = jest.fn().mockImplementation((url: string) => {
    // Turnstile siteverify
    if (typeof url === 'string' && url.includes('challenges.cloudflare.com')) {
      return Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      });
    }
    // OpenClaw webhook
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        response: 'Test response from OpenClaw',
        session_key: 'agent:demo_bot:test-session-123',
      }),
    });
  }) as unknown as typeof fetch;
}

describe('/api/chat', () => {
  let POST: (req: NextRequest) => Promise<Response>;

  beforeEach(() => {
    jest.resetModules();

    process.env.NODE_ENV = 'production';
    process.env.OPENCLAW_GATEWAY_TOKEN = 'test-token';
    process.env.OPENCLAW_API_URL = 'https://platform2.evogroup.ai/plugins/webhook/chat';
    process.env.OPENCLAW_AGENT_ID = 'demo_bot';
    delete process.env.TURNSTILE_SECRET_KEY;

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

  describe('OpenClaw webhook integration', () => {
    it('should call OpenClaw webhook and return response', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      const req = createRequest(validBody);
      const res = await POST(req);

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.message).toBe('Test response from OpenClaw');
    });

    it('should send agent_id and message to webhook', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      const req = createRequest({ messages: [{ role: 'user', content: 'Привет' }] });
      await POST(req);

      const fetchCalls = (global.fetch as jest.Mock).mock.calls;
      const webhookCall = fetchCalls.find((c: [string]) => c[0].includes('webhook/chat'));
      expect(webhookCall).toBeDefined();

      const body = JSON.parse(webhookCall[1].body);
      expect(body.agent_id).toBe('demo_bot');
      expect(body.message).toBe('Привет');
    });

    it('should send Authorization header with gateway token', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      const req = createRequest(validBody);
      await POST(req);

      const fetchCalls = (global.fetch as jest.Mock).mock.calls;
      const webhookCall = fetchCalls.find((c: [string]) => c[0].includes('webhook/chat'));
      expect(webhookCall[1].headers['Authorization']).toBe('Bearer test-token');
    });

    it('should handle OpenClaw API errors gracefully', async () => {
      await importRoute();
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
        text: () => Promise.resolve('Internal Server Error'),
      }) as unknown as typeof fetch;

      const req = createRequest(validBody);
      const res = await POST(req);

      expect(res.status).toBe(500);
      const data = await res.json();
      expect(data.userMessage).toBeDefined();
    });

    it('should extract last user message from conversation', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      const req = createRequest({
        messages: [
          { role: 'user', content: 'First' },
          { role: 'assistant', content: 'Reply' },
          { role: 'user', content: 'Second question' },
        ],
      });
      await POST(req);

      const fetchCalls = (global.fetch as jest.Mock).mock.calls;
      const webhookCall = fetchCalls.find((c: [string]) => c[0].includes('webhook/chat'));
      const body = JSON.parse(webhookCall[1].body);
      expect(body.message).toBe('Second question');
    });
  });

  describe('Turnstile verification', () => {
    it('should pass without Turnstile when TURNSTILE_SECRET_KEY is not set', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      const req = createRequest(validBody);
      const res = await POST(req);

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.message).toBe('Test response from OpenClaw');
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
      mockFetchForOpenClaw();

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
      mockFetchForOpenClaw();

      const req = createRequest(validBody, { origin: 'https://evogroup.ai' });
      const res = await POST(req);

      expect(res.status).toBe(200);
    });
  });

  describe('Rate limiting', () => {
    it('should allow 3 messages per minute then reject', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      const ip = '10.0.0.1';

      for (let i = 0; i < 3; i++) {
        const req = createRequest(validBody, { ip });
        const res = await POST(req);
        expect(res.status).toBe(200);
      }

      const req = createRequest(validBody, { ip });
      const res = await POST(req);
      expect(res.status).toBe(429);
      const data = await res.json();
      expect(data.userMessage).toContain('Слишком много сообщений');
    });

    it('should rate limit independently per IP', async () => {
      await importRoute();
      mockFetchForOpenClaw();

      for (let i = 0; i < 3; i++) {
        const req = createRequest(validBody, { ip: '10.0.0.2' });
        await POST(req);
      }

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

    it('should reject empty user messages', async () => {
      await importRoute();

      const req = createRequest({ messages: [{ role: 'user', content: '   ' }] });
      const res = await POST(req);
      expect(res.status).toBe(400);
    });
  });
});
