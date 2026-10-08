import Link from "next/link";
import { mapsLink, site } from "@/lib/site";
import { Hours } from "@/components/Hours";

export function Footer() {
  const social = [
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
    { label: "Google reviews", href: site.social.google },
  ].filter((s) => s.href);

  return (
    <footer className="bg-espresso-deep text-thread-dim">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1.3fr_1fr]">
          <div>
            <p className="display text-3xl text-thread">{site.name}</p>
            <p className="mt-2 max-w-xs text-[0.95rem]">
              Katzkin leather interiors and auto detailing for{" "}
              {site.serviceArea.slice(0, -1).join(", ")} and{" "}
              {site.serviceArea.at(-1)}.
            </p>
          </div>

          <div className="text-[0.95rem]">
            <h2 className="mb-2 font-semibold text-thread">Visit</h2>
            <address className="not-italic">
              <a href={mapsLink} className="hover:text-thread">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </address>
          </div>

          <div className="text-[0.95rem]">
            <h2 className="mb-2 font-semibold text-thread">Contact</h2>
            <p>
              <a href={site.phone.href} className="hover:text-thread">
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="[overflow-wrap:anywhere] hover:text-thread"
              >
                {site.email}
              </a>
            </p>
            {social.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-4">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="underline underline-offset-4 hover:text-thread"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="text-[0.95rem]">
            <h2 className="mb-2 font-semibold text-thread">Hours</h2>
            <Hours />
          </div>
        </div>

        <div className="stitch-x mt-10 text-thread/25" aria-hidden="true" />

        <div className="mt-6 flex flex-col gap-3 text-sm md:flex-row md:items-baseline md:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <Link href="/leather" className="hover:text-thread">
                Leather interiors
              </Link>
            </li>
            <li>
              <Link href="/detailing" className="hover:text-thread">
                Detailing
              </Link>
            </li>
            {site.gallery.length > 0 && (
              <li>
                <Link href="/gallery" className="hover:text-thread">
                  Gallery
                </Link>
              </li>
            )}
            <li>
              <Link href="/contact" className="hover:text-thread">
                Contact
              </Link>
            </li>
          </ul>
          <p className="max-w-xl md:text-right">
            © {site.name}. Katzkin is a registered trademark of Katzkin
            Leather, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
