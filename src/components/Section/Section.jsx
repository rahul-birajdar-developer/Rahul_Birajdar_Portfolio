import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Section.module.css";
/** Page section wrapper: consistent spacing, max width and anchor id. */
export function Section({ id, children, tone = "default", labelledBy }) {
    return (_jsx("section", { id: id, "aria-labelledby": labelledBy, className: [styles.section, tone === "elevated" ? styles.elevated : ""].join(" "), children: _jsx("div", { className: styles.container, children: children }) }));
}
