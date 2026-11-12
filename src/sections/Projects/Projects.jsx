import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { projects } from "@/data/portfolio";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Projects.module.css";
export function Projects() {
    return (_jsxs(Section, { id: "projects", tone: "elevated", labelledBy: "projects-title", children: [_jsx(SectionHeading, { id: "projects-title", eyebrow: "Projects", title: "Things I'm building.", description: "Full-stack applications that solve real problems for students and campus communities." }), _jsx("div", { className: styles.list, children: projects.map((project, index) => (_jsx(Reveal, { children: _jsx(ProjectCard, { project: project, reversed: index % 2 === 1 }) }, project.id))) })] }));
}
