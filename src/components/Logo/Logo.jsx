import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { profile } from "@/data/portfolio";
import styles from "./Logo.module.css";
/** "RB" monogram that links back to the top of the page. */
export function Logo({ onClick }) {
    return (_jsxs("a", { href: "#home", className: styles.logo, onClick: onClick, "aria-label": `${profile.name} — back to top`, children: [_jsx("span", { className: styles.mark, "aria-hidden": "true", children: profile.initials }), _jsxs("span", { className: styles.name, children: [profile.firstName, _jsx("span", { className: styles.dot, children: "." })] })] }));
}
