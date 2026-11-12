import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Education.module.css";
export function Education() {
    return (_jsxs(Section, { id: "education", labelledBy: "education-title", children: [_jsx(SectionHeading, { id: "education-title", eyebrow: "Education", title: "Where I'm learning." }), _jsxs(Reveal, { className: styles.timeline, children: [_jsx("div", { className: styles.marker, "aria-hidden": "true", children: _jsx(GraduationCap, { size: 20 }) }), _jsxs("article", { className: styles.card, children: [_jsxs("div", { className: styles.top, children: [_jsxs("div", { children: [_jsx("h3", { className: styles.degree, children: education.degree }), _jsx("p", { className: styles.institution, children: education.institution })] }), _jsx("span", { className: styles.badge, children: education.status })] }), _jsx("p", { className: styles.note, children: education.note }), _jsxs("dl", { className: styles.facts, children: [_jsxs("div", { children: [_jsxs("dt", { children: [_jsx(CalendarDays, { size: 16, "aria-hidden": "true" }), " Expected graduation"] }), _jsx("dd", { children: education.expectedGraduation })] }), _jsxs("div", { children: [_jsxs("dt", { children: [_jsx(MapPin, { size: 16, "aria-hidden": "true" }), " Location"] }), _jsx("dd", { children: education.location })] })] })] })] })] }));
}
