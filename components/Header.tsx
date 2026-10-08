import Link from "next/link";
import { site } from "@/lib/site";
import { NavLinks, type NavItem } from "@/components/NavLinks";
import { PhoneIcon } from "@/components/Icons";

export function Header() {
  const items: NavItem[] = [
    { href: "/leather", label: "Leather interiors" },
    { href: "/detailing", label: "Detailing" },
    ...(site.gallery.length ? [{ href: "/gallery", label: "Gallery" }] : []),
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-espresso-deep text-thread">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-5 pt-3 sm:px-8 md:flex-nowrap md:py-3">
        <Link
          href="/"
          className="display text-[1.75rem] leading-none tracking-wide sm:text-[2rem]"
          aria-label={`${site.name}, home`}
        >
          <span className="relative top-[0.08em]">{site.name}</span>
        </Link>

        <a
          href={site.phone.href}
          className="btn btn-saddle order-2 hidden min-h-10 px-3 py-2 text-[0.95rem] md:order-3 md:inline-flex"
        >
          <PhoneIcon />
          {site.phone.display}
        </a>

        <nav
          aria-label="Main"
          className="order-3 w-full md:order-2 md:ml-auto md:w-auto"
        >
          <NavLinks items={items} />
        </nav>
      </div>
    </header>
  );
}
