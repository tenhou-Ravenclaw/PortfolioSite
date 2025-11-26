const OwlGlyph = () => (
  <svg
    viewBox="0 0 540 360"
    role="img"
    aria-label="シグネチャー・フクロウ"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="owlGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.9" />
        <stop offset="100%" stopColor="var(--color-lime)" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="owlStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--color-primary-ink)" />
        <stop offset="100%" stopColor="var(--color-lime-deep)" />
      </linearGradient>
    </defs>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M60 140 C120 40 420 40 480 140"
        stroke="url(#owlStroke)"
        strokeWidth="18"
      />
      <path
        d="M100 200 C150 270 210 300 270 300 C330 300 390 270 440 200"
        stroke="url(#owlStroke)"
        strokeWidth="16"
      />
      <circle
        cx="200"
        cy="190"
        r="60"
        stroke="url(#owlStroke)"
        strokeWidth="12"
      />
      <circle
        cx="340"
        cy="190"
        r="60"
        stroke="url(#owlStroke)"
        strokeWidth="12"
      />
      <circle
        cx="200"
        cy="190"
        r="20"
        fill="url(#owlGlow)"
        opacity="0.9"
      />
      <circle
        cx="340"
        cy="190"
        r="20"
        fill="url(#owlGlow)"
        opacity="0.9"
      />
      <path
        d="M160 120 C200 160 240 160 270 120"
        stroke="url(#owlStroke)"
        strokeWidth="10"
      />
      <path
        d="M320 120 C350 160 390 160 430 120"
        stroke="url(#owlStroke)"
        strokeWidth="10"
      />
      <path
        d="M260 210 L280 230 L300 210"
        stroke="url(#owlGlow)"
        strokeWidth="8"
      />
      <path
        d="M120 90 Q270 10 420 90"
        stroke="rgba(56, 189, 252, 0.4)"
        strokeWidth="8"
      />
      <circle
        cx="60"
        cy="120"
        r="12"
        fill="var(--color-lime)"
        opacity="0.8"
      />
      <circle
        cx="480"
        cy="120"
        r="12"
        fill="var(--color-lime)"
        opacity="0.8"
      />
    </g>
  </svg>
);

export default OwlGlyph;

