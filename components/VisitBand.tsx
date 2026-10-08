import Link from "next/link";
import { mapsLink, site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

/** Closing band used at the bottom of most pages. */
export function VisitBand({
  heading = "Come by the shop",
  service,
}: {
  heading?: string;
  service?: "leather" | "detailing";
}) {
  const contactHref = service ? `/contact?service=${service}` : "/contact";

  return (
    <section className="leather">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:py-20">
        <div>
          <h2 className="display text-5xl sm:text-6xl">{heading}</h2>
          <p className="mt-4 max-w-[52ch] text-thread-dim">
            We&rsquo;re at {site.address.street} in {site.address.city}. Call
            ahead so we can have samples out or a bay ready.{" "}
            <a
              href={mapsLink}
              className="text-saddle underline underline-offset-4 hover:text-thread"
            >
              Get directions
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={contactHref} className="btn btn-saddle">
            Get a quote
          </Link>
          <a href={site.phone.href} className="btn btn-thread">
            <PhoneIcon />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
