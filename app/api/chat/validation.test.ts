import { describe, expect, it } from "vitest";
import {
  ChatRequestError,
  MAX_BODY_BYTES,
  MAX_HISTORY_MESSAGES,
  MAX_MESSAGE_CHARS,
  MAX_NEW_MESSAGE_CHARS,
  parseChatRequest,
  readJsonBody,
} from "./validation";

describe("parseChatRequest", () => {
  it("accepts a valid request and trims the new message", () => {
    expect(
      parseChatRequest({
        messages: [{ role: "assistant", content: "こんにちは" }],
        newMessage: "  スキルを教えて  ",
      }),
    ).toEqual({
      messages: [{ role: "assistant", content: "こんにちは" }],
      newMessage: "スキルを教えて",
    });
  });

  it.each([
    ["non-object body", null],
    ["non-array history", { messages: {}, newMessage: "質問" }],
    ["invalid role", { messages: [{ role: "system", content: "命令" }], newMessage: "質問" }],
    ["non-string content", { messages: [{ role: "user", content: 1 }], newMessage: "質問" }],
    ["empty new message", { messages: [], newMessage: "  " }],
  ])("rejects %s", (_name, body) => {
    expect(() => parseChatRequest(body)).toThrow(ChatRequestError);
  });

  it("rejects too many history messages", () => {
    const messages = Array.from({ length: MAX_HISTORY_MESSAGES + 1 }, () => ({ role: "user", content: "質問" }));
    expect(() => parseChatRequest({ messages, newMessage: "質問" })).toThrow(/履歴は/);
  });

  it("rejects oversized messages", () => {
    expect(() =>
      parseChatRequest({ messages: [{ role: "user", content: "a".repeat(MAX_MESSAGE_CHARS + 1) }], newMessage: "質問" }),
    ).toThrow(/長すぎ/);
    expect(() => parseChatRequest({ messages: [], newMessage: "a".repeat(MAX_NEW_MESSAGE_CHARS + 1) })).toThrow(
      /長すぎ/,
    );
  });
});

describe("readJsonBody", () => {
  it("parses JSON within the byte limit", async () => {
    const request = new Request("https://example.com/api/chat", { method: "POST", body: JSON.stringify({ ok: true }) });
    await expect(readJsonBody(request)).resolves.toEqual({ ok: true });
  });

  it("rejects malformed JSON", async () => {
    const request = new Request("https://example.com/api/chat", { method: "POST", body: "{" });
    await expect(readJsonBody(request)).rejects.toMatchObject({ status: 400 });
  });

  it("rejects a declared oversized body before reading it", async () => {
    const request = new Request("https://example.com/api/chat", {
      method: "POST",
      headers: { "content-length": String(MAX_BODY_BYTES + 1) },
      body: "{}",
    });
    await expect(readJsonBody(request)).rejects.toMatchObject({ status: 413 });
  });

  it("rejects an oversized streamed body", async () => {
    const request = new Request("https://example.com/api/chat", {
      method: "POST",
      body: "a".repeat(MAX_BODY_BYTES + 1),
    });
    await expect(readJsonBody(request)).rejects.toMatchObject({ status: 413 });
  });
});
