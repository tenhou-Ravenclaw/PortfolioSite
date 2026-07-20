export const RATE_LIMIT_MAX_REQUESTS = 10;
export const RATE_LIMIT_WINDOW_MS = 60_000;

const MAX_TRACKED_CLIENTS = 10_000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  chatRateLimitStore?: Map<string, RateLimitEntry>;
};

const store = globalForRateLimit.chatRateLimitStore ?? new Map<string, RateLimitEntry>();
globalForRateLimit.chatRateLimitStore = store;

function removeExpiredEntries(now: number) {
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key);
  }
}

export function getClientIdentifier(headers: Headers): string {
  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  const forwardedIp = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedIp || "unknown";
}

export function consumeRateLimit(key: string, now = Date.now()): RateLimitResult {
  const current = store.get(key);
  if (!current || current.resetAt <= now) {
    if (store.size >= MAX_TRACKED_CLIENTS) removeExpiredEntries(now);
    if (store.size >= MAX_TRACKED_CLIENTS) {
      return { allowed: false, limit: RATE_LIMIT_MAX_REQUESTS, remaining: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    }

    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    store.set(key, { count: 1, resetAt });
    return { allowed: true, limit: RATE_LIMIT_MAX_REQUESTS, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, limit: RATE_LIMIT_MAX_REQUESTS, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  return {
    allowed: true,
    limit: RATE_LIMIT_MAX_REQUESTS,
    remaining: RATE_LIMIT_MAX_REQUESTS - current.count,
    resetAt: current.resetAt,
  };
}

export function resetRateLimitStore() {
  store.clear();
}
