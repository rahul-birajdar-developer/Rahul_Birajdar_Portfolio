import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { contactSchema } from "./contact-schema";
/**
 * Runs on the server only. Validates the message again and saves it to the
 * contact_messages table. Visitors can only insert — nobody can read messages
 * from the website.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
    .inputValidator((input) => contactSchema.parse(input))
    .handler(async ({ data }) => {
    // Bots fill the hidden field; pretend success so they don't retry.
    if (data.website && data.website.length > 0) {
        return { ok: true };
    }
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
        throw new Error("The message service is not configured.");
    }
    const supabase = createClient(url, key, {
        auth: { persistSession: false },
        global: {
            fetch: (input, init) => {
                const headers = new Headers(init?.headers);
                if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
                    headers.delete("Authorization");
                }
                headers.set("apikey", key);
                return fetch(input, { ...init, headers });
            },
        },
    });
    const { error } = await supabase.from("contact_messages").insert({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
    });
    if (error) {
        console.error("contact insert failed", error.message);
        throw new Error("We couldn't save your message. Please try again.");
    }
    return { ok: true };
});
