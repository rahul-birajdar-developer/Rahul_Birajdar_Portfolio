import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./SectionHeading.module.css";
/** The small label + big title + intro line used at the top of every section. */
export function SectionHeading({ eyebrow, title, description, id }) {
    return (_jsxs(Reveal, { className: styles.heading, children: [_jsxs("p", { className: styles.eyebrow, children: [_jsx("span", { "aria-hidden": "true", children: "//" }), " ", eyebrow] }), _jsx("h2", { id: id, className: styles.title, children: title }), description ? _jsx("p", { className: styles.description, children: description }) : null] }));
}
