"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "mail" | "error";

const SERVICES = [
  { value: "leather", label: "Leather interior" },
  { value: "detailing", label: "Detailing" },
  { value: "both", label: "Both" },
];

const field =
  "mt-1.5 block w-full rounded-[4px] border border-water/35 bg-white px-3.5 py-2.5 text-water placeholder:text-water-soft/70 focus:border-water";

export function QuoteForm() {
  const params = useSearchParams();
  const presetService = params.get("service");
  const presetDesign = params.get("design");

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      // Email sending isn't set up on the server yet: hand the request
      // to the visitor's own email app so it still reaches the shop.
      if (res.status === 501) {
        const serviceLabel =
          SERVICES.find((s) => s.value === data.service)?.label ?? "";
        const body = [
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          data.email ? `Email: ${data.email}` : null,
          `Service: ${serviceLabel}`,
          `Vehicle: ${data.vehicle}`,
          "",
          data.message,
        ]
          .filter((line) => line !== null)
          .join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          `Quote request: ${serviceLabel} for ${data.vehicle}`,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("mail");
        return;
      }

      const json = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      setError(json?.error ?? "The request didn't go through.");
      setStatus("error");
    } catch {
      setError("The request didn't go through. Check your connection.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-md bg-white p-6 sm:p-8">
        <h2 className="display text-4xl">Request sent</h2>
        <p className="mt-3 max-w-[50ch]">
          We&rsquo;ll call or email you back with a price. If it&rsquo;s
          urgent, call{" "}
          <a href={site.phone.href} className="font-semibold underline">
            {site.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-water-outline mt-6"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid content-start gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-medium">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={120}
            className={field}
          />
        </label>
        <label className="block font-medium">
          Phone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            className={field}
          />
        </label>
      </div>

      <label className="block font-medium">
        Email <span className="font-normal text-water-soft">(optional)</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={160}
          className={field}
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-medium">
          Service
          <select
            name="service"
            required
            defaultValue={
              SERVICES.some((s) => s.value === presetService)
                ? presetService!
                : "leather"
            }
            className={field}
          >
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block font-medium">
          Vehicle
          <input
            name="vehicle"
            required
            placeholder="2022 Ford F-150 XLT"
            maxLength={120}
            className={field}
          />
        </label>
      </div>

      <label className="block font-medium">
        What would you like done?
        <textarea
          name="message"
          rows={5}
          maxLength={2000}
          defaultValue={
            presetDesign ? `Leather design: ${presetDesign}.\n` : undefined
          }
          className={field}
        />
      </label>

      {/* Bots fill this in; people never see it. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Leave this empty
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-[4px] bg-white p-4 font-medium">
          {error} Try again, or call{" "}
          <a href={site.phone.href} className="underline">
            {site.phone.display}
          </a>
          .
        </p>
      )}

      {status === "mail" && (
        <p role="status" className="rounded-[4px] bg-white p-4 font-medium">
          Your email app should open with the request filled in. Press send
          there to finish. If nothing opened, call{" "}
          <a href={site.phone.href} className="underline">
            {site.phone.display}
          </a>
          .
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-water w-full disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending request" : "Send request"}
        </button>
      </div>
    </form>
  );
}
