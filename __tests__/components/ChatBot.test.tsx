/**
 * Tests for ChatBot Turnstile integration.
 */
import React from 'react';
import { render } from '@testing-library/react';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    a: React.forwardRef((props: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLAnchorElement>) => {
      const { whileHover, whileTap, ...rest } = props;
      return <a ref={ref} {...rest}>{props.children}</a>;
    }),
    button: React.forwardRef((props: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLButtonElement>) => {
      const { whileHover, whileTap, ...rest } = props;
      return <button ref={ref} {...rest}>{props.children}</button>;
    }),
    div: React.forwardRef((props: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLDivElement>) => {
      const { initial, animate, exit, ...rest } = props;
      return <div ref={ref} {...rest}>{props.children}</div>;
    }),
    svg: React.forwardRef((props: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<SVGSVGElement>) => {
      const { initial, animate, exit, ...rest } = props;
      return <svg ref={ref} {...rest}>{props.children}</svg>;
    }),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

// Capture Script props
let capturedScriptProps: Record<string, unknown> | null = null;
jest.mock('next/script', () => {
  return function MockScript(props: Record<string, unknown>) {
    capturedScriptProps = props;
    return <script data-testid="turnstile-script" />;
  };
});

import ChatBot from '@/components/ChatBot';

describe('ChatBot - Turnstile integration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    capturedScriptProps = null;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set', () => {
    beforeEach(() => {
      process.env = { ...originalEnv, NEXT_PUBLIC_TURNSTILE_SITE_KEY: 'test-site-key' };
    });

    it('renders Turnstile script with strategy="afterInteractive"', () => {
      render(<ChatBot />);

      expect(capturedScriptProps).not.toBeNull();
      expect(capturedScriptProps!.strategy).toBe('afterInteractive');
      expect(capturedScriptProps!.src).toContain('challenges.cloudflare.com/turnstile');
    });

    it('renders Turnstile container with off-screen positioning and real dimensions', () => {
      const { container } = render(<ChatBot />);

      const turnstileContainer = container.querySelector('[aria-hidden="true"]');
      expect(turnstileContainer).toBeInTheDocument();

      const style = (turnstileContainer as HTMLElement).style;
      expect(style.position).toBe('fixed');
      expect(style.left).toBe('-9999px');
      expect(parseInt(style.width)).toBeGreaterThanOrEqual(300);
      expect(parseInt(style.height)).toBeGreaterThanOrEqual(65);
    });
  });

  describe('when NEXT_PUBLIC_TURNSTILE_SITE_KEY is NOT set', () => {
    beforeEach(() => {
      process.env = { ...originalEnv };
      delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    });

    it('does NOT render Turnstile script', () => {
      render(<ChatBot />);
      expect(capturedScriptProps).toBeNull();
    });

    it('does NOT render Turnstile container', () => {
      const { container } = render(<ChatBot />);
      const turnstileContainer = container.querySelector('[aria-hidden="true"]');
      expect(turnstileContainer).toBeNull();
    });
  });
});
