import { useEffect, useState } from "react";
import { sendAccessRequest } from "@/lib/send-access-request";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  resourceKey: string;
};

const DOCUMENT_OPTIONS = [
  "MSc Transcript",
  "BBA Transcript",
  "Internship Certificates",
  "Letters of Recommendation (LORs)",
  "Competition Certificates",
];

export function AccessRequestModal({ open, onClose, title, subtitle, resourceKey }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [docError, setDocError] = useState(false);

  const isEvidence = resourceKey.includes("evidence");

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    setSubmitError(null);
    setSelectedDocs([]);
    setDocError(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  function toggleDoc(doc: string) {
    setSelectedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
    setDocError(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isEvidence && selectedDocs.length === 0) {
      setDocError(true);
      return;
    }

    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) ?? "";
    const company = (data.get("company") as string) ?? "";
    const email = (data.get("email") as string) ?? "";

    setSubmitting(true);
    setSubmitError(null);
    try {
      if (isEvidence) {
        const notes = (data.get("notes") as string) ?? "";
        await sendAccessRequest({
          data: {
            name,
            company,
            email,
            resource: resourceKey,
            at: new Date().toISOString(),
            documents: selectedDocs,
            notes: notes || undefined,
          },
        });
      } else {
        const reason = (data.get("reason") as string) ?? "";
        await sendAccessRequest({
          data: {
            name,
            company,
            email,
            resource: resourceKey,
            reason,
            at: new Date().toISOString(),
          },
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email me directly at akancha.jobmail@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-background border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-5 border-b border-border flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-accent">
              {isEvidence ? "Supporting Documents" : "Access request"}
            </div>
            <h3 className="font-serif text-2xl text-primary mt-1">{title}</h3>
            {isEvidence ? (
              <p className="mt-1 text-sm text-muted-foreground">
                Select the documents you'd like to review and I'll send the relevant files directly.
              </p>
            ) : (
              subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-primary hover:text-accent text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div className="p-6 space-y-4">
            <p className="font-serif text-xl text-primary">Request sent.</p>
            <p className="text-sm text-muted-foreground">
              Thank you. Your request has been sent successfully. I'll get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 grid gap-4">
            <label className="grid gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Name</span>
              <input
                required
                name="name"
                maxLength={100}
                className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Company</span>
              <input
                required
                name="company"
                maxLength={120}
                className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
              />
            </label>
            <label className="grid gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Work email</span>
              <input
                required
                type="email"
                name="email"
                maxLength={200}
                className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
              />
            </label>

            {isEvidence ? (
              <>
                <div className="grid gap-2">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    What would you like to review?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {DOCUMENT_OPTIONS.map((doc) => {
                      const active = selectedDocs.includes(doc);
                      return (
                        <button
                          key={doc}
                          type="button"
                          onClick={() => toggleDoc(doc)}
                          aria-pressed={active}
                          className={`text-[11px] uppercase tracking-[0.14em] border px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                            active
                              ? "border-accent bg-accent text-accent-foreground"
                              : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                          }`}
                        >
                          {doc}
                        </button>
                      );
                    })}
                  </div>
                  {docError && (
                    <p className="text-sm text-destructive">
                      Please select at least one document before submitting.
                    </p>
                  )}
                </div>

                <label className="grid gap-1">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Additional Notes <span className="normal-case tracking-normal">(optional)</span>
                  </span>
                  <textarea
                    name="notes"
                    rows={3}
                    maxLength={500}
                    placeholder="Tell me if you're looking for anything specific (optional)."
                    className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
                  />
                </label>
              </>
            ) : (
              <label className="grid gap-1">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Reason for access <span className="normal-case tracking-normal">(optional)</span>
                </span>
                <textarea
                  name="reason"
                  rows={3}
                  maxLength={500}
                  className="border border-border bg-background px-4 py-3 focus:outline-none focus:border-accent"
                />
              </label>
            )}

            {submitError && (
              <p className="text-sm text-destructive">{submitError}</p>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : isEvidence ? "Request Documents →" : "Request access →"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="border border-border px-5 py-3 text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors"
              >
                Cancel
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Details are used only to send access to the requested file.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
