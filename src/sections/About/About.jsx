import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrainCircuit, GraduationCap, Layers } from "lucide-react";
import { aboutHighlights, aboutParagraphs } from "@/data/portfolio";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./About.module.css";
const highlightIcons = [GraduationCap, Layers, BrainCircuit];
export function About() {
    return (_jsxs(Section, { id: "about", tone: "elevated", labelledBy: "about-title", children: [_jsx(SectionHeading, { id: "about-title", eyebrow: "About me", title: "Learning by building real things." }), _jsxs("div", { className: styles.grid, children: [_jsx(Reveal, { className: styles.text, children: aboutParagraphs.map((paragraph) => (_jsx("p", { children: paragraph }, paragraph.slice(0, 24)))) }), _jsx("ul", { className: styles.highlights, children: aboutHighlights.map((item, index) => {
                            const Icon = highlightIcons[index] ?? Layers;
                            return (_jsxs(Reveal, { as: "li", delay: index * 90, className: styles.highlight, children: [_jsx("span", { className: styles.icon, "aria-hidden": "true", children: _jsx(Icon, { size: 20 }) }), _jsxs("div", { children: [_jsx("p", { className: styles.label, children: item.title }), _jsx("p", { className: styles.value, children: item.value }), _jsx("p", { className: styles.detail, children: item.detail })] })] }, item.title));
                        }) })] })] }));
}
