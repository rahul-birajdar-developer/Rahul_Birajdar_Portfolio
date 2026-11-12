import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CircleAlert, CircleCheck, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { sendContactMessage } from "@/lib/contact.functions";
import { validateContact } from "@/lib/contact-schema";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/Button/Button";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";
const emptyForm = { name: "", email: "", subject: "", message: "", website: "" };
const fields = [
    { name: "name", label: "Name", autoComplete: "name", placeholder: "Your full name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@company.com" },
    { name: "subject", label: "Subject", placeholder: "Internship opportunity, collaboration…" },
];
const contactLinks = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { icon: Github, label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, external: true },
    { icon: MapPin, label: "Location", value: profile.location, href: null, external: false },
];
export function Contact() {
    const [values, setValues] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState("idle");
    const [serverError, setServerError] = useState("");
    const submit = useServerFn(sendContactMessage);
    const handleChange = (event) => {
        const { name, value } = event.target;
        const next = { ...values, [name]: value };
        setValues(next);
        // Re-validate a field live once the visitor has already left it once.
        if (touched[name]) {
            setErrors(validateContact(next));
        }
        if (status !== "idle" && status !== "submitting")
            setStatus("idle");
    };
    const handleBlur = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        setErrors(validateContact(values));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const found = validateContact(values);
        setErrors(found);
        setTouched({ name: true, email: true, subject: true, message: true });
        if (Object.keys(found).length > 0) {
            const first = Object.keys(found)[0];
            if (first)
                document.getElementById(`contact-${first}`)?.focus();
            return;
        }
        setStatus("submitting");
        setServerError("");
        try {
            await submit({ data: values });
            setStatus("success");
            setValues(emptyForm);
            setTouched({});
        }
        catch (error) {
            console.error(error);
            setServerError("Your message couldn't be sent. Please try again, or email me directly.");
            setStatus("error");
        }
    };
    const showError = (field) => (touched[field] ? errors[field] : undefined);
    return (_jsxs(Section, { id: "contact", labelledBy: "contact-title", children: [_jsx(SectionHeading, { id: "contact-title", eyebrow: "Contact", title: "Let's work together.", description: "Have an internship, a project or just want to say hi? Send a message and I'll get back to you." }), _jsxs("div", { className: styles.grid, children: [_jsxs(Reveal, { className: styles.info, children: [_jsx("ul", { className: styles.links, children: contactLinks.map(({ icon: Icon, label, value, href, external }) => {
                                    const content = (_jsxs(_Fragment, { children: [_jsx("span", { className: styles.linkIcon, "aria-hidden": "true", children: _jsx(Icon, { size: 18 }) }), _jsxs("span", { children: [_jsx("span", { className: styles.linkLabel, children: label }), _jsx("span", { className: styles.linkValue, children: value })] })] }));
                                    return (_jsx("li", { children: href ? (_jsx("a", { href: href, className: styles.link, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}), children: content })) : (_jsx("div", { className: styles.link, children: content })) }, label));
                                }) }), _jsxs("p", { className: styles.availability, children: [_jsx("span", { "aria-hidden": "true" }), " ", profile.availability] })] }), _jsx(Reveal, { delay: 100, children: _jsxs("form", { className: styles.form, onSubmit: handleSubmit, noValidate: true, "aria-describedby": "contact-status", children: [_jsx("div", { className: styles.row, children: fields.slice(0, 2).map((field) => (_jsx(FieldInput, { field: field, value: values[field.name] ?? "", error: showError(field.name), onChange: handleChange, onBlur: handleBlur }, field.name))) }), fields.slice(2).map((field) => (_jsx(FieldInput, { field: field, value: values[field.name] ?? "", error: showError(field.name), onChange: handleChange, onBlur: handleBlur }, field.name))), _jsxs("div", { className: styles.field, children: [_jsx("label", { htmlFor: "contact-message", children: "Message" }), _jsx("textarea", { id: "contact-message", name: "message", rows: 6, placeholder: "Tell me a little about what you have in mind\u2026", value: values.message, onChange: handleChange, onBlur: () => handleBlur("message"), "aria-invalid": Boolean(showError("message")), "aria-describedby": showError("message") ? "contact-message-error" : undefined, maxLength: 2000, required: true }), showError("message") ? (_jsx("p", { id: "contact-message-error", className: styles.error, children: showError("message") })) : null] }), _jsxs("div", { className: styles.honeypot, "aria-hidden": "true", children: [_jsx("label", { htmlFor: "contact-website", children: "Website" }), _jsx("input", { id: "contact-website", name: "website", tabIndex: -1, autoComplete: "off", value: values.website ?? "", onChange: handleChange })] }), _jsxs("div", { className: styles.footer, children: [_jsx(Button, { type: "submit", loading: status === "submitting", icon: _jsx(Send, { size: 18, "aria-hidden": "true" }), iconPosition: "end", children: status === "submitting" ? "Sending…" : "Send Message" }), _jsxs("div", { id: "contact-status", role: "status", "aria-live": "polite", className: styles.statusArea, children: [status === "success" ? (_jsxs("p", { className: styles.success, children: [_jsx(CircleCheck, { size: 18, "aria-hidden": "true" }), " Thanks! Your message was sent."] })) : null, status === "error" ? (_jsxs("p", { className: styles.failure, children: [_jsx(CircleAlert, { size: 18, "aria-hidden": "true" }), " ", serverError] })) : null] })] })] }) })] })] }));
}
/** A labelled text input with its validation message. */
function FieldInput({ field, value, error, onChange, onBlur }) {
    const id = `contact-${field.name}`;
    return (_jsxs("div", { className: styles.field, children: [_jsx("label", { htmlFor: id, children: field.label }), _jsx("input", { id: id, name: field.name, type: field.type ?? "text", autoComplete: field.autoComplete, placeholder: field.placeholder, value: value, onChange: onChange, onBlur: () => onBlur(field.name), "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined, required: true }), error ? (_jsx("p", { id: `${id}-error`, className: styles.error, children: error })) : null] }));
}
