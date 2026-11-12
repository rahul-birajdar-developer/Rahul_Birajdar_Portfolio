import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { LoaderCircle } from "lucide-react";
import styles from "./Button.module.css";
/**
 * One button component for the whole site.
 * Pass `href` and it renders a link (<a>); otherwise it renders a <button>.
 */
export function Button(props) {
    const { children, variant = "primary", size = "md", icon, iconPosition = "start", className } = props;
    const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");
    const content = (_jsxs(_Fragment, { children: [iconPosition === "start" && icon, _jsx("span", { children: children }), iconPosition === "end" && icon] }));
    if (props.href !== undefined) {
        const { href, external, download, onClick } = props;
        return (_jsx("a", { href: href, className: classes, onClick: onClick, "aria-label": props["aria-label"], ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}), ...(download !== undefined ? { download } : {}), children: content }));
    }
    const { type = "button", disabled, loading, onClick } = props;
    return (_jsxs("button", { type: type, className: classes, disabled: disabled || loading, "aria-busy": loading || undefined, "aria-label": props["aria-label"], onClick: onClick, children: [loading ? _jsx(LoaderCircle, { className: styles.spinner, size: 18, "aria-hidden": "true" }) : null, loading ? _jsx("span", { children: children }) : content] }));
}
