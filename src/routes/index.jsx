import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/sections/Hero/Hero";
import { About } from "@/sections/About/About";
import { Skills } from "@/sections/Skills/Skills";
import { Projects } from "@/sections/Projects/Projects";
import { Education } from "@/sections/Education/Education";
import { Experience } from "@/sections/Experience/Experience";
import { Contact } from "@/sections/Contact/Contact";
const title = `${profile.name} — ${profile.role}`;
const description = "Portfolio of Rahul Birajadar, a B.Sc. Computer Science student and aspiring full-stack developer from Maharashtra, India. Projects, skills and contact.";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title },
            { name: "description", content: description },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
        ],
        scripts: [
            {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: profile.name,
                    jobTitle: profile.role,
                    email: `mailto:${profile.email}`,
                    address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
                    alumniOf: { "@type": "CollegeOrUniversity", name: "Sangameshwar College, Solapur" },
                    sameAs: [profile.github, profile.linkedin],
                }),
            },
        ],
    }),
    component: HomePage,
});
/** The whole one-page portfolio: navbar, every section in order, footer. */
function HomePage() {
    return (_jsxs(_Fragment, { children: [_jsx("a", { href: "#main", className: "skip-link", children: "Skip to content" }), _jsx(Navbar, {}), _jsxs("main", { id: "main", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Education, {}), _jsx(Experience, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
}
