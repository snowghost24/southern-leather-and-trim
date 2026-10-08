import Link from "next/link";
import { SeatBuilder } from "@/components/SeatBuilder";
import { Seam } from "@/components/Seam";
import { Steps } from "@/components/Steps";
import { Packages } from "@/components/Packages";
import { VisitBand } from "@/components/VisitBand";
import { PhoneIcon } from "@/components/Icons";
import { detailPackages, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="leather">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20 lg:pt-16">
          <div>
            {site.katzkinAuthorized && (
              <p className="mb-4 font-semibold text-saddle">
                Authorized Katzkin installer
              </p>
            )}
            <h1 className="display text-[clamp(4rem,13vw,7.5rem)] lg:text-[min(6rem,8.6vw)]">
              Cloth seats out.
              <br />
              Leather in.
            </h1>
            <p className="mt-5 max-w-[46ch] text-lg text-thread-dim">
              {site.name} installs Katzkin leather interiors in{" "}
              {site.address.city}, Florida, and details cars, trucks and SUVs
              in the same shop.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/contact?service=leather" className="btn btn-saddle">
                Get a leather quote
              </Link>
              <Link
                href="/contact?service=detailing"
                className="btn btn-thread"
              >
                Request a detail
              </Link>
            </div>
            <p className="mt-6 text-[0.95rem] text-thread-dim">
              Or call{" "}
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-1.5 font-semibold text-thread underline underline-offset-4"
              >
                <PhoneIcon />
                {site.phone.display}
              </a>
            </p>
          </div>

          <SeatBuilder />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Seam className="sew-in text-thread/45" />
        </div>
        <div className="h-10" />
      </section>

      {/* Two trades, one seam */}
      <section
        aria-label="Services"
        className="grid md:grid-cols-2"
      >
        <div className="relative bg-hide">
          <div className="ml-auto max-w-[36rem] px-5 py-14 sm:px-8 md:py-20 md:pr-14">
            <h2 className="display text-6xl sm:text-7xl">Leather interiors</h2>
            <p className="mt-4 max-w-[44ch] text-thread-dim">
              We take the cloth off your seats and fit a Katzkin leather
              interior made for your exact vehicle. It isn&rsquo;t a slip-on
              cover.
            </p>
            <ul className="mt-6 grid gap-2 border-l-2 border-saddle pl-4">
              <li>More than 120 colors and materials</li>
              <li>Two-tone, contrast stitching, perforation and piping</li>
              <li>Katzkin 3-year or 36,000-mile limited warranty</li>
            </ul>
            <Link href="/leather" className="btn btn-saddle mt-8">
              See leather options
            </Link>
          </div>
          {/* this side of the seam */}
          <div
            aria-hidden="true"
            className="stitch-y absolute bottom-0 right-[5px] top-0 hidden text-thread/45 md:block"
          />
          <div
            aria-hidden="true"
            className="stitch-x absolute bottom-[5px] left-0 right-0 text-thread/45 md:hidden"
          />
        </div>

        <div className="rinse on-rinse relative">
          <div className="max-w-[36rem] px-5 py-14 sm:px-8 md:py-20 md:pl-14">
            <h2 className="display text-6xl sm:text-7xl">Auto detailing</h2>
            <p className="mt-4 max-w-[44ch] text-water-soft">
              Inside, outside or both. We clean by hand and spend the time
              where it shows: seats, carpet, paint and glass.
            </p>
            <ul className="mt-6 grid gap-2 border-l-2 border-water pl-4">
              {detailPackages.map((p) => (
                <li key={p.name}>{p.name}</li>
              ))}
            </ul>
            <Link href="/detailing" className="btn btn-water mt-8">
              See detailing packages
            </Link>
          </div>
          {/* the other side of the seam */}
          <div
            aria-hidden="true"
            className="stitch-y absolute bottom-0 left-[5px] top-0 hidden text-water/45 md:block"
          />
          <div
            aria-hidden="true"
            className="stitch-x absolute left-0 right-0 top-[5px] text-water/45 md:hidden"
          />
        </div>
      </section>

      {/* How a leather install goes */}
      <section className="leather">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="display max-w-[14ch] text-5xl sm:text-6xl">
            How a leather install goes
          </h2>
          <div className="mt-12">
            <Steps />
          </div>
        </div>
      </section>

      {/* Detailing packages */}
      <section className="rinse on-rinse">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-5xl sm:text-6xl">
              Detailing packages
            </h2>
            <Link href="/detailing" className="btn btn-water-outline">
              See what each one includes
            </Link>
          </div>
          <div className="mt-10">
            <Packages />
          </div>
        </div>
      </section>

      <VisitBand />
    </>
  );
}
