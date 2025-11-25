"use client";

import { useEffect, useState } from "react";

const DISPLAY_DURATION = 2100;
const EXIT_DURATION = 500;

const owlPalette = {
  line: "#7dd2ff",
  accent: "#b6ff6d",
  base: "#51b3ff",
  deep: "#1f76c7",
};

type OwlSplashProps = {
  onFinish?: () => void;
};

export default function OwlSplash({ onFinish }: OwlSplashProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, DISPLAY_DURATION);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
      body.style.overflow = originalOverflow;
      onFinish?.();
    }, DISPLAY_DURATION + EXIT_DURATION);

    return () => {
      body.style.overflow = originalOverflow;
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, [onFinish]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`owl-splash ${isLeaving ? "owl-splash--leaving" : ""}`}>
      <div className="owl-splash__glow" />
      <div className="owl-splash__symbol" aria-hidden="true">
        <svg
          className="owl-symbol"
          viewBox="0 0 320 220"
          fill="none"
          role="img"
        >
          <desc>Geometric owl motif loading animation</desc>
          <defs>
            <linearGradient id="owl-swoosh" x1="40" y1="0" x2="280" y2="220">
              <stop offset="0%" stopColor={owlPalette.base} stopOpacity="0" />
              <stop offset="40%" stopColor={owlPalette.accent} />
              <stop offset="80%" stopColor={owlPalette.base} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            className="owl-line owl-line--brow"
            d="M30 86 Q160 10 290 86"
            stroke={owlPalette.line}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle
            className="owl-eye"
            cx="110"
            cy="120"
            r="52"
            stroke={owlPalette.line}
            strokeWidth="6"
          />
          <circle
            className="owl-eye"
            cx="210"
            cy="120"
            r="52"
            stroke={owlPalette.line}
            strokeWidth="6"
          />
          <circle
            className="owl-eye owl-eye--inner"
            cx="110"
            cy="120"
            r="32"
            stroke={owlPalette.deep}
            strokeWidth="5"
          />
          <circle
            className="owl-eye owl-eye--inner"
            cx="210"
            cy="120"
            r="32"
            stroke={owlPalette.deep}
            strokeWidth="5"
          />
          <path
            className="owl-line owl-line--mask"
            d="M60 150 Q160 60 260 150"
            stroke={owlPalette.base}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            className="owl-beak"
            d="M160 128 L176 168 L144 168 Z"
            fill={owlPalette.accent}
          />
          <circle
            className="owl-node"
            cx="80"
            cy="62"
            r="6"
            fill={owlPalette.accent}
          />
          <circle
            className="owl-node"
            cx="240"
            cy="62"
            r="6"
            fill={owlPalette.accent}
          />
          <path
            className="owl-swoosh"
            d="M60 200 Q150 120 260 40"
            stroke="url(#owl-swoosh)"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>
        <div className="scan-line" />
        <div className="dots dots--left" />
        <div className="dots dots--right" />
      </div>
      <p className="owl-splash__caption">Tenhou’s Portfolio</p>
    </div>
  );
}

