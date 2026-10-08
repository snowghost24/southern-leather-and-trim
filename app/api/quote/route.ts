import { site } from "@/lib/site";

/**
 * Receives the quote form and emails it to the shop through Resend.
 *
 * Set these in Vercel > Project > Settings > Environment Variables:
 *   RESEND_API_KEY    required. Create one at https://resend.com
 *   QUOTE_TO_EMAIL    optional. Defaults to the email in lib/site.ts
 *   QUOTE_FROM_EMAIL  optional. Needs a domain verified in Resend,
 *                     e.g. "Website <quotes@yourdomain.com>"
 *
 * Until RESEND_API_KEY is set this route answers 501 and the form
 * falls back to opening the visitor's email app instead.
 */

const SERVICE_LABELS: Record<string, string> = {
  leather: "Leather interior",
  detailing: "Detailing",
  both: "Leather interior and detailing",
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "The form data was unreadable." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in.
  if (clean(payload.company, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 40);
  const email = clean(payload.email, 160);
  const vehicle = clean(payload.vehicle, 120);
  const message = clean(payload.message, 2000);
  const service = SERVICE_LABELS[clean(payload.service, 20)];

  if (!name || !phone || !vehicle || !service) {
    return Response.json(
      { error: "Add your name, phone number and vehicle." },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email is not set up yet." }, { status: 501 });
  }

  const text = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Service: ${service}`,
    `Vehicle: ${vehicle}`,
    "",
    message || "(No message)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.QUOTE_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`,
      to: [process.env.QUOTE_TO_EMAIL ?? site.email],
      subject: `Quote request: ${service} for ${vehicle}`,
      text,
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json(
      { error: "The request didn't go through." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
