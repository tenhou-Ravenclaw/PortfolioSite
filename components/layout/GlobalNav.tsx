"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function GlobalNav() {
    const navToggleRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
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
            {isOpen && <div className="nav-overlay" onClick={closeMenu} />}
            <label htmlFor="nav-toggle" className="nav-hamburger" aria-label="メニューを開く">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="nav-menu">
                <button className="nav-close" aria-label="メニューを閉じる" onClick={closeMenu}>
                    <span>&times;</span>
                </button>
                <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
                <Link href="/about" className="nav-link" onClick={closeMenu}>about me</Link>
                <Link href="/artifacts" className="nav-link" onClick={closeMenu}>Artifacts</Link>
                <Link href="/events" className="nav-link" onClick={closeMenu}>Events</Link>
                <Link href="/#awards-section" className="nav-link" onClick={closeMenu}>Awards</Link>
                <Link href="/#skills-section" className="nav-link" onClick={closeMenu}>Skills</Link>
                <Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            </div>
        </nav>
    );
}
