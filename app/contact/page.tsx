import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import { Hours } from "@/components/Hours";
import { fullAddress, mapsEmbed, mapsLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a quote",
  description: `Request a quote for a Katzkin leather interior or a detail from ${site.name}, ${fullAddress}. Call ${site.phone.display}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="rinse on-rinse">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 md:pt-20">
        <h1 className="display text-[clamp(3.75rem,11vw,6.5rem)]">
          Get a quote
        </h1>
        <p className="mt-4 max-w-[52ch] text-lg text-water-soft">
          Tell us what you drive and what you&rsquo;d like done. We&rsquo;ll
          get back to you with a price.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          {/* The form reads ?service= and ?design= from the address bar. */}
          <Suspense fallback={<div className="min-h-[32rem]" />}>
            <QuoteForm />
          </Suspense>

          <aside className="grid content-start gap-8">
            <div>
              <h2 className="text-lg font-semibold">Call</h2>
              <a
                href={site.phone.href}
                className="display text-5xl underline-offset-4 hover:underline"
              >
                {site.phone.display}
              </a>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4 [overflow-wrap:anywhere]"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Hours</h2>
              <Hours />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Shop</h2>
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <a
                href={mapsLink}
                className="mt-1 inline-block underline underline-offset-4"
              >
                Get directions
              </a>
              <iframe
                title={`Map showing ${site.name}`}
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 aspect-[4/3] w-full rounded-md border border-water/25"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
