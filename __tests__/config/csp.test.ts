/**
 * @jest-environment node
 *
 * Tests for CSP (Content Security Policy) configuration in next.config.ts
 */
import { readFileSync } from 'fs';
import { join } from 'path';

describe('CSP Configuration', () => {
  let cspContent: string;

  beforeAll(() => {
    // Read next.config.ts as text and extract CSP array content
    const configPath = join(__dirname, '..', '..', 'next.config.ts');
    cspContent = readFileSync(configPath, 'utf-8');
  });

  it('should contain frame-src with challenges.cloudflare.com', () => {
    expect(cspContent).toContain("frame-src 'self' https://challenges.cloudflare.com");
  });

  it('should contain script-src with challenges.cloudflare.com', () => {
    expect(cspContent).toContain('script-src');
    expect(cspContent).toContain('https://challenges.cloudflare.com');
  });

  it('should contain connect-src with challenges.cloudflare.com', () => {
    expect(cspContent).toMatch(/connect-src.*https:\/\/challenges\.cloudflare\.com/);
  });
});
