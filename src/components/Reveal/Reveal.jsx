import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
/**
 * Fades its children in the first time they scroll into view.
 * Uses IntersectionObserver — the browser tells us when the element is visible.
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node)
            return;
        if (!("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return (_jsx(Tag, { ref: ref, className: ["reveal", visible ? "reveal-visible" : "", className].filter(Boolean).join(" "), style: { "--reveal-delay": `${delay}ms` }, children: children }));
}
