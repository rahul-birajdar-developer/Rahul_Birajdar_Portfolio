import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/Button/Button";
import { Logo } from "@/components/Logo/Logo";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.css";
const sectionIds = navLinks.map((link) => link.id);
export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeId = useScrollSpy(sectionIds);
    // Add a glass background once the page has scrolled a little.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // Close the mobile menu with Escape, and stop the page scrolling behind it.
    useEffect(() => {
        if (!menuOpen)
            return;
        const onKey = (event) => {
            if (event.key === "Escape")
                setMenuOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [menuOpen]);
    const closeMenu = () => setMenuOpen(false);
    return (_jsxs("header", { className: [styles.header, scrolled || menuOpen ? styles.scrolled : ""].join(" "), children: [_jsxs("nav", { className: styles.nav, "aria-label": "Main navigation", children: [_jsx(Logo, { onClick: closeMenu }), _jsx("ul", { className: styles.links, children: navLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: `#${link.id}`, className: [styles.link, activeId === link.id ? styles.active : ""].join(" "), "aria-current": activeId === link.id ? "true" : undefined, children: link.label }) }, link.id))) }), _jsxs("div", { className: styles.actions, children: [_jsx(ThemeToggle, {}), _jsx(Button, { href: profile.resumeUrl, download: profile.resumeFileName, size: "sm", icon: _jsx(Download, { size: 16, "aria-hidden": "true" }), className: styles.resume, children: "Resume" }), _jsx("button", { type: "button", className: styles.menuButton, onClick: () => setMenuOpen((open) => !open), "aria-expanded": menuOpen, "aria-controls": "mobile-menu", "aria-label": menuOpen ? "Close menu" : "Open menu", children: menuOpen ? _jsx(X, { size: 20, "aria-hidden": "true" }) : _jsx(Menu, { size: 20, "aria-hidden": "true" }) })] })] }), _jsxs("div", { id: "mobile-menu", className: [styles.mobileMenu, menuOpen ? styles.mobileOpen : ""].join(" "), hidden: !menuOpen, children: [_jsx("ul", { children: navLinks.map((link, index) => (_jsx("li", { style: { "--i": index }, children: _jsx("a", { href: `#${link.id}`, onClick: closeMenu, className: [styles.mobileLink, activeId === link.id ? styles.active : ""].join(" "), "aria-current": activeId === link.id ? "true" : undefined, children: link.label }) }, link.id))) }), _jsx(Button, { href: profile.resumeUrl, download: profile.resumeFileName, icon: _jsx(Download, { size: 18, "aria-hidden": "true" }), onClick: closeMenu, children: "Download Resume" })] })] }));
}
