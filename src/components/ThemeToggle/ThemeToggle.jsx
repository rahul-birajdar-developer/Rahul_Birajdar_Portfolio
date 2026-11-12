import { jsx as _jsx } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.css";
/** Switches between dark and light themes. */
export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("button", { type: "button", className: styles.toggle, onClick: toggleTheme, "aria-label": isDark ? "Switch to light theme" : "Switch to dark theme", title: isDark ? "Light theme" : "Dark theme", children: isDark ? _jsx(Sun, { size: 18, "aria-hidden": "true" }) : _jsx(Moon, { size: 18, "aria-hidden": "true" }) }));
}
