import { useCallback, useEffect, useState } from "react";
const STORAGE_KEY = "rb-theme";
/**
 * Keeps the theme in sync between React state, <html data-theme> and
 * localStorage. The initial value is applied before paint by a tiny script
 * in __root.jsx, so there's no flash of the wrong theme.
 */
export function useTheme() {
    const [theme, setTheme] = useState("dark");
    // Read the real value after hydration (the server can't know it).
    useEffect(() => {
        const current = document.documentElement.dataset["theme"] === "light" ? "light" : "dark";
        setTheme(current);
    }, []);
    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === "dark" ? "light" : "dark";
            document.documentElement.dataset["theme"] = next;
            try {
                localStorage.setItem(STORAGE_KEY, next);
            }
            catch {
                // Storage can be blocked (private mode) — theme still switches for this visit.
            }
            return next;
        });
    }, []);
    return { theme, toggleTheme };
}
/** Inline script run in <head> before the page paints. */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'){t='dark'}d.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;
