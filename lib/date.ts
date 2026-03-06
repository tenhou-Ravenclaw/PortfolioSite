/**
 * "YYYY/MM/DD" 形式の文字列を Date に変換する。
 * パースできない場合は null を返す。
 */
export function parseDateString(dateString: string): Date | null {
  const trimmed = dateString.trim();
  const match = trimmed.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (!match) return null;
  return new Date(parseInt(match[1], 10), parseInt(match[2], 10) - 1, parseInt(match[3], 10));
}

/**
 * イベントの date フィールド（"YYYY/MM/DD" または "YYYY/MM/DD~YYYY/MM/DD"）から
 * 開始日の Date を返す。
 */
export function parseEventDate(dateString: string): Date {
  const startPart = dateString.split("~")[0];
  return parseDateString(startPart) ?? new Date(0);
}

/**
 * プロジェクトの endDate フィールドを Date に変換する。
 * "進行中" または空文字の場合は現在時刻を返す。
 */
export function parseProjectDate(dateString: string): Date {
  if (dateString === "進行中" || dateString === "") return new Date();
  return parseDateString(dateString) ?? new Date(0);
}

/**
 * Date を "YYYY.MM" 形式の文字列に変換する。
 */
export function formatYearMonth(date: Date): string {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}`;
}
