import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookOpen, Rocket, Sparkles, Terminal } from "lucide-react";
import { journey } from "@/data/portfolio";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Experience.module.css";
const icons = {
    rocket: Rocket,
    terminal: Terminal,
    book: BookOpen,
    sparkles: Sparkles,
};
export function Experience() {
    return (_jsxs(Section, { id: "experience", tone: "elevated", labelledBy: "experience-title", children: [_jsx(SectionHeading, { id: "experience-title", eyebrow: "Experience & learning journey", title: "How I'm growing as a developer.", description: "I'm a fresher, so my experience comes from building, shipping and learning on my own projects." }), _jsx("ol", { className: styles.grid, children: journey.map((item, index) => {
                    const Icon = icons[item.icon];
                    return (_jsxs(Reveal, { as: "li", delay: index * 90, className: styles.card, children: [_jsxs("div", { className: styles.top, children: [_jsx("span", { className: styles.icon, "aria-hidden": "true", children: _jsx(Icon, { size: 20 }) }), _jsx("span", { className: styles.label, children: item.label })] }), _jsx("h3", { className: styles.title, children: item.title }), _jsx("p", { className: styles.description, children: item.description }), _jsx("ul", { className: styles.points, children: item.points.map((point) => (_jsx("li", { children: point }, point))) })] }, item.id));
                }) })] }));
}
