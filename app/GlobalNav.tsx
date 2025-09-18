"use client";
import { useRef, useState, useEffect } from "react";

export default function GlobalNav() {
    const navToggleRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    // メニューを閉じる
    const closeMenu = () => {
        if (navToggleRef.current) navToggleRef.current.checked = false;
        setIsOpen(false);
    };
    useEffect(() => {
        const input = navToggleRef.current;
        if (!input) return;
        const handler = () => setIsOpen(input.checked);
        input.addEventListener("change", handler);
        return () => input.removeEventListener("change", handler);
    }, []);
    return (
        <nav className="global-nav">
            <input type="checkbox" id="nav-toggle" className="nav-toggle" ref={navToggleRef} />
            {/* オーバーレイ */}
            {isOpen && <div className="nav-overlay" onClick={closeMenu} />}
            <label htmlFor="nav-toggle" className="nav-hamburger" aria-label="メニューを開く">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="nav-menu">
                {/* ×ボタン */}
                <button className="nav-close" aria-label="メニューを閉じる" onClick={closeMenu}>
                    <span>&times;</span>
                </button>
                <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
                <a href="/about" className="nav-link" onClick={closeMenu}>About</a>
                <a href="/works" className="nav-link" onClick={closeMenu}>Works</a>
                <a href="/events" className="nav-link" onClick={closeMenu}>Events</a>
                <a
                    href="/#skills-section"
                    className="nav-link"
                >
                    Skills
                </a>
                <a href="https://forms.gle/mgff1SAhDBBkF4AG8" target="_blank" rel="noopener noreferrer" className="nav-link">Contact</a>
            </div>
        </nav>
    );
}
