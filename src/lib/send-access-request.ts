import { createServerFn } from "@tanstack/react-start";

interface Payload {
  name: string;
  company: string;
  email: string;
  resource: string;
  at: string;
  // CV request
  reason?: string;
  // Evidence request
  documents?: string[];
  notes?: string;
}

export const sendAccessRequest = createServerFn({ method: "POST" })
  .validator((raw: unknown): Payload => {
    const d = raw as Payload;
    if (!d.name || !d.company || !d.email) throw new Error("Missing required fields");
    return d;
  })
  .handler(async ({ data }) => {
    const { Resend } = await import("resend");
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("Email service is not configured (RESEND_API_KEY missing).");

    const resend = new Resend(apiKey);

    const isEvidence = Array.isArray(data.documents);

    let body: string;
    if (isEvidence) {
      const docList = (data.documents ?? []).map((d) => `- ${d}`).join("\n");
      const lines = [
        "Supporting Document Request",
        "",
        "Requested Documents:",
        docList,
        ...(data.notes ? ["", "Additional Notes:", data.notes] : []),
        "",
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Submitted: ${new Date(data.at).toUTCString()}`,
      ];
      body = lines.join("\n");
    } else {
      const lines = [
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Request type: ${data.resource}`,
        `Submitted: ${new Date(data.at).toUTCString()}`,
        ...(data.reason ? ["", "Message:", data.reason] : []),
      ];
      body = lines.join("\n");
    }

    const subject = isEvidence
      ? "Supporting Document Request"
      : `Portfolio Access Request — ${data.resource}`;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "akancha.jobmail@gmail.com",
      subject,
      text: body,
    });

    if (error) throw new Error(error.message);
    return { ok: true };
  });
