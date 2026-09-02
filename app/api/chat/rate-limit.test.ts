import { beforeEach, describe, expect, it } from "vitest";
import {
  consumeRateLimit,
  getClientIdentifier,
  RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_WINDOW_MS,
  resetRateLimitStore,
} from "./rate-limit";

describe("chat rate limiter", () => {
  beforeEach(resetRateLimitStore);

  it("uses the trusted real IP before the forwarded chain", () => {
    const headers = new Headers({ "x-real-ip": "192.0.2.1", "x-forwarded-for": "198.51.100.1, 203.0.113.1" });
    expect(getClientIdentifier(headers)).toBe("192.0.2.1");
  });

  it("allows requests up to the limit and then blocks", () => {
    for (let index = 0; index < RATE_LIMIT_MAX_REQUESTS; index += 1) {
      expect(consumeRateLimit("client", 1_000).allowed).toBe(true);
    }
    expect(consumeRateLimit("client", 1_000)).toMatchObject({ allowed: false, remaining: 0 });
  });

  it("starts a new window after reset", () => {
    consumeRateLimit("client", 1_000);
    expect(consumeRateLimit("client", 1_000 + RATE_LIMIT_WINDOW_MS)).toMatchObject({
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
    });
  });
});
