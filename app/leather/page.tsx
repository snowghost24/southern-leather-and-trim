import type { Metadata } from "next";
import Link from "next/link";
import { SeatBuilder } from "@/components/SeatBuilder";
import { Seam } from "@/components/Seam";
import { Steps } from "@/components/Steps";
import { Faq } from "@/components/Faq";
import { VisitBand } from "@/components/VisitBand";
import { PhoneIcon } from "@/components/Icons";
import { LeatherCarousel, type Slide } from "@/components/LeatherCarousel";
import { leatherFaqs, leatherOptions, site } from "@/lib/site";

const leatherWork: Slide[] = [
  {
    src: "/leather/work-1.jpg",
    alt: "Black leather truck seats with red bolsters, diamond quilting and red stitching",
    caption: "Black with red bolsters, diamond quilting and red stitching.",
    width: 2000,
    height: 1116,
  },
  {
    src: "/leather/work-2.jpg",
    alt: "Saddle tan perforated leather front seats and console lid in a pickup",
    caption: "Saddle tan with perforated inserts, console lid to match.",
    width: 2000,
    height: 1116,
  },
  {
    src: "/leather/work-3.jpg",
    alt: "Two-tone red and black leather sport seats in a sedan",
    caption: "Two-tone red and black sport seats.",
    width: 2000,
    height: 1116,
  },
  {
    src: "/leather/work-4.jpg",
    alt: "Bright red leather seats with diamond quilting and embroidered headrests",
    caption: "Full red with diamond quilting and embroidered headrests.",
    width: 2000,
    height: 1116,
  },
];

export const metadata: Metadata = {
  title: "Katzkin leather interiors in Ocoee, FL",
  description: `${site.name} replaces cloth seats with custom Katzkin leather interiors. More than 120 colors and materials, most installs done in a day or two. Call ${site.phone.display}.`,
  alternates: { canonical: "/leather" },
};

export default function LeatherPage() {
  return (
    <>
      <section className="leather">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-20">
          {site.katzkinAuthorized && (
            <p className="mb-4 font-semibold text-saddle">
              Authorized Katzkin installer
            </p>
          )}
          <h1 className="display max-w-[12ch] text-[clamp(3.75rem,11vw,6.5rem)]">
            Katzkin leather interiors
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-14">
            <p className="max-w-[48ch] text-lg text-thread-dim">
              If your car, truck or SUV came with cloth, we can give it the
              leather interior it didn&rsquo;t leave the factory with. Each
              Katzkin kit is cut and sewn for one specific vehicle, then fitted
              to your seats here in {site.address.city}.
            </p>
            <div>
              <h2 className="text-xl font-semibold">
                It replaces the cloth. It isn&rsquo;t a cover.
              </h2>
              <p className="mt-2 max-w-[48ch] text-thread-dim">
                We remove the seats, strip the factory upholstery and fit the
                leather straight onto the original foam and frames. Nothing
                slips, bunches or hides what&rsquo;s underneath.
              </p>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact?service=leather" className="btn btn-saddle">
              Get a leather quote
            </Link>
            <a href={site.phone.href} className="btn btn-thread">
              <PhoneIcon />
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      <section className="leather">
        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 md:pb-24">
          <h2 className="display text-5xl sm:text-6xl">Leather we&rsquo;ve done</h2>
          <div className="mt-10">
            <LeatherCarousel slides={leatherWork} />
          </div>
        </div>
      </section>

      <section className="bg-hide">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="display text-5xl sm:text-6xl">What you can choose</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {leatherOptions.map((o) => (
              <div key={o.name} className="border-t-2 border-saddle pt-4">
                <dt className="text-xl font-semibold">{o.name}</dt>
                <dd className="mt-2 text-thread-dim">{o.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="leather">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
          <SeatBuilder />
        </div>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Seam className="text-thread/40" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="display max-w-[14ch] text-5xl sm:text-6xl">
            How a leather install goes
          </h2>
          <div className="mt-12">
            <Steps />
          </div>
        </div>
      </section>

      <section className="bg-hide">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.6fr] md:py-24">
          <h2 className="display text-5xl sm:text-6xl">
            Questions about leather
          </h2>
          <Faq items={leatherFaqs} />
        </div>
      </section>

      <VisitBand heading="See the samples in person" service="leather" />
    </>
  );
}
