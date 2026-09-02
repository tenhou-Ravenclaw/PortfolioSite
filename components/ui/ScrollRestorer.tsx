"use client";

import { useEffect } from "react";

/** ページトップへのスクロールリセットを担う最小クライアントコンポーネント。 */
export default function ScrollRestorer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
