"use client";
import { useEffect } from "react";

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";

      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);

      const cleanup = () => {
        ripple.removeEventListener("animationend", cleanup);
        ripple.remove();
      };
      ripple.addEventListener("animationend", cleanup);
      setTimeout(cleanup, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
