import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VisitBand } from "@/components/VisitBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Leather interiors and details finished by ${site.name} in Ocoee, Florida.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="leather">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 md:pt-20">
          <h1 className="display text-[clamp(3.75rem,11vw,6.5rem)]">
            Recent work
          </h1>

          {site.gallery.length === 0 ? (
            <div className="mt-8 max-w-[52ch]">
              <p className="text-lg text-thread-dim">
                Photos are on the way. Until then, come by the shop to see
                finished interiors and leather samples in person.
              </p>
              <Link href="/contact" className="btn btn-saddle mt-6">
                Get a quote
              </Link>
            </div>
          ) : (
            <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {site.gallery.map((photo) => (
                <li key={photo.file} className="mb-5 break-inside-avoid">
                  <figure>
                    <Image
                      src={`/gallery/${photo.file}`}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full rounded-md"
                    />
                    {photo.caption && (
                      <figcaption className="mt-2 text-[0.95rem] text-thread-dim">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <VisitBand />
    </>
  );
}
