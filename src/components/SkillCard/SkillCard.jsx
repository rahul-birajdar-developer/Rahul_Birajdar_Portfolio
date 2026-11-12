import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Code2, Database, LayoutTemplate, Server, Smartphone } from "lucide-react";
import styles from "./SkillCard.module.css";
const icons = {
    code: Code2,
    layout: LayoutTemplate,
    server: Server,
    database: Database,
    smartphone: Smartphone,
};
/** Shows one skill category (e.g. "Frontend") and its skills as badges. */
export function SkillCard({ category }) {
    const Icon = icons[category.icon];
    return (_jsxs("article", { className: styles.card, children: [_jsxs("div", { className: styles.header, children: [_jsx("span", { className: styles.icon, "aria-hidden": "true", children: _jsx(Icon, { size: 22 }) }), _jsx("h3", { children: category.title })] }), _jsx("p", { className: styles.description, children: category.description }), _jsx("ul", { className: styles.badges, "aria-label": `${category.title} skills`, children: category.skills.map((skill) => (_jsx("li", { className: styles.badge, children: skill }, skill))) })] }));
}
