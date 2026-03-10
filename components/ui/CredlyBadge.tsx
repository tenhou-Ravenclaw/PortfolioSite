"use client";

import { useEffect } from "react";
import type { Certification } from "@/types";

const CREDLY_EMBED_URL = "https://cdn.credly.com/assets/utilities/embed.js";

type CredlyBadgeProps = {
  certifications: Certification[];
  /** 埋め込み幅（px）。指定しない場合は 300 */
  iframeWidth?: number;
  /** ラッパーのスタイル（flex で中央寄せなど） */
  style?: React.CSSProperties;
};

/**
 * Credly バッジ埋め込みコンポーネント。
 * SPA 遷移時にバッジが消える問題を回避するため、
 * マウント時にスクリプトを動的に読み込み、アンマウント時に削除する。
 */
export default function CredlyBadge({ certifications, iframeWidth = 300, style }: CredlyBadgeProps) {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CREDLY_EMBED_URL}"]`
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = CREDLY_EMBED_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => { script.remove(); };
  }, []);

  return (
    <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", ...style }}>
      {certifications.map((cert) => (
        <div
          key={cert.id}
          data-iframe-width={iframeWidth}
          data-iframe-height="270"
          data-share-badge-id={cert.id}
          data-share-badge-host="https://www.credly.com"
        />
      ))}
    </div>
  );
}
