import type { Metadata } from "next";
import Link from "next/link";
import { Packages } from "@/components/Packages";
import { Faq } from "@/components/Faq";
import { VisitBand } from "@/components/VisitBand";
import { PhoneIcon } from "@/components/Icons";
import { detailAddOns, detailFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Auto detailing in Ocoee, FL",
  description: `Interior, exterior and full auto detailing by hand at ${site.name} in Ocoee, Florida. Call ${site.phone.display} to book.`,
  alternates: { canonical: "/detailing" },
};

export default function DetailingPage() {
  return (
    <>
      <section className="rinse on-rinse">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-20">
          <h1 className="display text-[clamp(3.75rem,11vw,6.5rem)]">
            Auto detailing
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-water-soft">
            A proper clean, done by hand in our {site.address.city} shop. Pick
            the inside, the outside or both, and add extras for the things an
            ordinary wash leaves behind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?service=detailing" className="btn btn-water">
              Request a detail
            </Link>
            <a href={site.phone.href} className="btn btn-water-outline">
              <PhoneIcon />
              {site.phone.display}
            </a>
          </div>

          <h2 className="display mt-16 text-5xl sm:text-6xl">Packages</h2>
          <div className="mt-8">
            <Packages detailed />
          </div>

          {detailAddOns.length > 0 && (
            <div className="mt-14 grid gap-6 md:grid-cols-[1fr_2fr]">
              <h2 className="display text-4xl sm:text-5xl">Add to any detail</h2>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {detailAddOns.map((name) => (
                  <li
                    key={name}
                    className="border-b border-water/25 pb-3 text-lg font-medium"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="bg-hide">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-20">
          <h2 className="display text-5xl sm:text-6xl">
            Leather seats are our day job
          </h2>
          <div>
            <p className="max-w-[48ch] text-thread-dim">
              We install leather interiors, so we know what keeps them soft
              and what dries them out. Every interior detail includes a proper
              leather clean and condition.
            </p>
            <Link href="/leather" className="btn btn-thread mt-6">
              See leather interiors
            </Link>
          </div>
        </div>
      </section>

      <section className="rinse on-rinse">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.6fr] md:py-24">
          <h2 className="display text-5xl sm:text-6xl">
            Questions about detailing
          </h2>
          <Faq items={detailFaqs} />
        </div>
      </section>

      <VisitBand heading="Book your detail" service="detailing" />
    </>
  );
}
