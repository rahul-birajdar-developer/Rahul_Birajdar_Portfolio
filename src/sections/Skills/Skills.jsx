import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { skillCategories } from "@/data/portfolio";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SkillCard } from "@/components/SkillCard/SkillCard";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Skills.module.css";
export function Skills() {
    return (_jsxs(Section, { id: "skills", labelledBy: "skills-title", children: [_jsx(SectionHeading, { id: "skills-title", eyebrow: "Technical skills", title: "Tools I build with.", description: "The languages and technologies I use across the stack \u2014 from fundamentals to full-stack and mobile." }), _jsx("div", { className: styles.grid, children: skillCategories.map((category, index) => (_jsx(Reveal, { delay: index * 80, className: styles.item, children: _jsx(SkillCard, { category: category }) }, category.id))) })] }));
}
