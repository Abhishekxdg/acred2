"use server";

/**
 * Server action for the contact form.
 * TODO (integrator): wire this to your email / CRM of choice
 * — Resend, Postmark, Pipedrive, HubSpot, Airtable, etc.
 *
 * The form POSTs here with FormData; currently it validates and
 * returns a success/error state the client can render.
 */

export type ContactState = {
  ok: boolean;
  message: string;
} | null;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const project = String(formData.get("project") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in your name, email, and a message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "That email doesn't look quite right." };
  }

  // TODO: replace with real send
  // await resend.emails.send({ ... })
  console.log("[ACRED contact]", { name, email, project, message });

  // Simulate small delay
  await new Promise((r) => setTimeout(r, 500));

  return {
    ok: true,
    message: "Thanks — we'll reply within two business days.",
  };
}
