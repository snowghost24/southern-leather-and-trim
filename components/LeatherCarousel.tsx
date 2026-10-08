"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Slide = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/*
  Scroll-snap does the sliding, so swipe and trackpad work natively.
  The buttons and dots just scroll the track.
*/
export function LeatherCarousel({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { root: el, threshold: 0.6 },
    );
    for (const child of el.children) observer.observe(child);
    return () => observer.disconnect();
  }, []);

  function go(index: number) {
    const el = track.current;
    if (!el) return;
    const next = (index + slides.length) % slides.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: next * el.clientWidth,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Leather interiors we've installed"
    >
      <ul
        ref={track}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(active + 1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(active - 1);
          }
        }}
        tabIndex={0}
      >
        {slides.map((slide, i) => (
          <li
            key={slide.src}
            data-index={i}
            className="w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            <figure>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                sizes="(min-width: 1152px) 1088px, 100vw"
                loading={i === 0 ? "eager" : "lazy"}
                className="aspect-[16/9] h-auto w-full rounded-md object-cover"
              />
              <figcaption className="mt-3 text-[0.95rem] text-thread-dim">
                {slide.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-saddle"
                  : "w-2.5 bg-thread-dim/40 hover:bg-thread-dim"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <ArrowButton label="Previous photo" onClick={() => go(active - 1)} flip />
          <ArrowButton label="Next photo" onClick={() => go(active + 1)} />
        </div>
      </div>
    </div>
  );
}

function ArrowButton({
  label,
  onClick,
  flip,
}: {
  label: string;
  onClick: () => void;
  flip?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="btn btn-thread size-12 p-0"
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={flip ? "rotate-180" : undefined}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
