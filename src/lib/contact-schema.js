import { z } from "zod";
/**
 * One validation schema shared by the browser (instant feedback) and the
 * server (the real safety check). Never trust the browser alone.
 */
export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, { message: "Please enter your name (at least 2 characters)." })
        .max(100, { message: "Name must be under 100 characters." }),
    email: z
        .string()
        .trim()
        .min(1, { message: "Please enter your email address." })
        .email({ message: "Please enter a valid email address." })
        .max(255, { message: "Email must be under 255 characters." }),
    subject: z
        .string()
        .trim()
        .min(3, { message: "Please add a subject (at least 3 characters)." })
        .max(150, { message: "Subject must be under 150 characters." }),
    message: z
        .string()
        .trim()
        .min(10, { message: "Your message should be at least 10 characters." })
        .max(2000, { message: "Message must be under 2000 characters." }),
    /** Hidden "honeypot" field: real visitors never fill it, spam bots usually do. */
    website: z.string().max(200).optional(),
});
/** Turns zod's error list into { field: "first message" } for the form. */
export function validateContact(values) {
    const result = contactSchema.safeParse(values);
    if (result.success)
        return {};
    const errors = {};
    for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field && field !== "website" && !errors[field]) {
            errors[field] = issue.message;
        }
    }
    return errors;
}
