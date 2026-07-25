import { createServerFn } from "@tanstack/react-start";

interface Payload {
  name: string;
  email: string;
  message: string;
  at: string;
}

export const sendShortNote = createServerFn({ method: "POST" })
  .validator((raw: unknown): Payload => {
    const d = raw as Payload;
    if (!d.name || !d.email || !d.message) throw new Error("Missing required fields");
    return d;
  })
  .handler(async ({ data }) => {
    const { Resend } = await import("resend");
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("Email service is not configured (RESEND_API_KEY missing).");

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "akancha.jobmail@gmail.com",
      subject: `Portfolio note from ${data.name}`,
      text: `From: ${data.name} <${data.email}>\nSubmitted: ${new Date(data.at).toUTCString()}\n\n${data.message}`,
    });

    if (error) throw new Error(error.message);
    return { ok: true };
  });
