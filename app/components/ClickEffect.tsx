"use client";
import { useEffect } from "react";

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // 波紋要素を作成
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      
      // クリック位置に配置
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      
      document.body.appendChild(ripple);
      
      // アニメーション終了後に削除
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}

