import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 120) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
    useEffect(() => {
        const update = () => {
            let current = sectionIds[0] ?? "";
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top - offset <= 0)
                    current = id;
            }
            // At the very bottom of the page, the last section is active.
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
                current = sectionIds[sectionIds.length - 1] ?? current;
            }
            setActiveId(current);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [sectionIds, offset]);
    return activeId;
}
