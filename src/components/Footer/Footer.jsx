import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { Logo } from "@/components/Logo/Logo";
import styles from "./Footer.module.css";
export function Footer() {
    const year = new Date().getFullYear();
    return (_jsxs("footer", { className: styles.footer, children: [_jsxs("div", { className: styles.inner, children: [_jsxs("div", { className: styles.brand, children: [_jsx(Logo, {}), _jsxs("p", { children: [profile.role, " \u00B7 ", profile.location] })] }), _jsx("nav", { "aria-label": "Footer navigation", children: _jsx("ul", { className: styles.links, children: navLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: `#${link.id}`, children: link.label }) }, link.id))) }) }), _jsxs("div", { className: styles.social, children: [_jsx("a", { href: profile.github, target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub profile", children: _jsx(Github, { size: 18, "aria-hidden": "true" }) }), _jsx("a", { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn profile", children: _jsx(Linkedin, { size: 18, "aria-hidden": "true" }) }), _jsx("a", { href: `mailto:${profile.email}`, "aria-label": "Send an email", children: _jsx(Mail, { size: 18, "aria-hidden": "true" }) }), _jsx("a", { href: "#home", "aria-label": "Back to top", className: styles.top, children: _jsx(ArrowUp, { size: 18, "aria-hidden": "true" }) })] })] }), _jsxs("p", { className: styles.copy, children: ["\u00A9 ", year, " ", profile.name, ". Designed & built with React."] })] }));
}
