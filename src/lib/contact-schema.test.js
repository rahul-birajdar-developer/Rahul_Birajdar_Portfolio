import { describe, expect, it } from "vitest";
import { validateContact } from "./contact-schema";
const valid = {
    name: "Asha Patil",
    email: "asha@example.com",
    subject: "Internship opening",
    message: "Hi Rahul, we'd love to talk about an internship.",
};
describe("contact form validation", () => {
    it("accepts a complete message", () => {
        expect(validateContact(valid)).toEqual({});
    });
    it("requires a name of at least 2 characters", () => {
        expect(validateContact({ ...valid, name: " A " }).name).toBeDefined();
    });
    it("rejects an invalid email address", () => {
        expect(validateContact({ ...valid, email: "not-an-email" }).email).toBe("Please enter a valid email address.");
    });
    it("requires a subject of at least 3 characters", () => {
        expect(validateContact({ ...valid, subject: "Hi" }).subject).toBeDefined();
    });
    it("requires a message of at least 10 characters", () => {
        expect(validateContact({ ...valid, message: "Too short" }).message).toBeDefined();
    });
    it("rejects messages longer than 2000 characters", () => {
        expect(validateContact({ ...valid, message: "a".repeat(2001) }).message).toBeDefined();
    });
});
