export const MAX_BODY_BYTES = 16 * 1024;
export const MAX_HISTORY_MESSAGES = 6;
export const MAX_MESSAGE_CHARS = 2_000;
export const MAX_NEW_MESSAGE_CHARS = 1_000;

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatRequest = {
  messages: ChatMessage[];
  newMessage: string;
};

export class ChatRequestError extends Error {
  constructor(
    message: string,
    readonly status: 400 | 413 = 400,
  ) {
    super(message);
    this.name = "ChatRequestError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseMessage(value: unknown): ChatMessage {
  if (!isRecord(value)) {
    throw new ChatRequestError("履歴の形式が不正です");
  }

  if (value.role !== "user" && value.role !== "assistant") {
    throw new ChatRequestError("履歴に許可されていないroleが含まれています");
  }

  if (typeof value.content !== "string" || !value.content.trim()) {
    throw new ChatRequestError("履歴のメッセージが不正です");
  }

  if (value.content.length > MAX_MESSAGE_CHARS) {
    throw new ChatRequestError("履歴のメッセージが長すぎます", 413);
  }

  return { role: value.role, content: value.content };
}

export function parseChatRequest(value: unknown): ChatRequest {
  if (!isRecord(value)) {
    throw new ChatRequestError("リクエストの形式が不正です");
  }

  const messages = value.messages ?? [];
  if (!Array.isArray(messages)) {
    throw new ChatRequestError("messagesは配列で指定してください");
  }

  if (messages.length > MAX_HISTORY_MESSAGES) {
    throw new ChatRequestError(`履歴は${MAX_HISTORY_MESSAGES}件以内にしてください`, 413);
  }

  if (typeof value.newMessage !== "string" || !value.newMessage.trim()) {
    throw new ChatRequestError("メッセージが空です");
  }

  if (value.newMessage.length > MAX_NEW_MESSAGE_CHARS) {
    throw new ChatRequestError("メッセージが長すぎます", 413);
  }

  return {
    messages: messages.map(parseMessage),
    newMessage: value.newMessage.trim(),
  };
}

export async function readJsonBody(request: Request): Promise<unknown> {
  const declaredLength = request.headers.get("content-length");
  if (declaredLength) {
    const byteLength = Number(declaredLength);
    if (!Number.isFinite(byteLength) || byteLength < 0) {
      throw new ChatRequestError("Content-Lengthが不正です");
    }
    if (byteLength > MAX_BODY_BYTES) {
      throw new ChatRequestError("リクエストが大きすぎます", 413);
    }
  }

  if (!request.body) {
    throw new ChatRequestError("リクエストbodyが必要です");
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytesRead = 0;
  let text = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      bytesRead += value.byteLength;
      if (bytesRead > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new ChatRequestError("リクエストが大きすぎます", 413);
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } finally {
    reader.releaseLock();
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new ChatRequestError("JSONの形式が不正です");
  }
}
