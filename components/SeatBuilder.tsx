"use client";

import Link from "next/link";
import { useId, useState } from "react";

type Swatch = { name: string; hex: string };

/*
  Generic color names on purpose. These are on-screen approximations,
  not Katzkin's catalog. The shop shows real samples in person.
*/
const LEATHERS: Swatch[] = [
  { name: "Black", hex: "#1f1d1c" },
  { name: "Graphite", hex: "#4b4c4f" },
  { name: "Saddle", hex: "#9a5a2c" },
  { name: "Sand", hex: "#c7b08c" },
  { name: "Oxblood", hex: "#6b1f22" },
  { name: "Navy", hex: "#1f2c44" },
];

const THREADS: Swatch[] = [
  { name: "Cream", hex: "#efe6d5" },
  { name: "Red", hex: "#c93a2e" },
  { name: "Tan", hex: "#d09a5b" },
  { name: "Blue", hex: "#4a8fc0" },
  { name: "Black", hex: "#141312" },
];

function SwatchGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: Swatch[];
  value: string;
  onChange: (name: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-[0.95rem]">
        <span className="text-thread-dim">{legend}:</span>{" "}
        <span className="font-semibold text-thread">{value}</span>
      </legend>
      <div className="grid max-w-[19rem] grid-cols-6 gap-2">
        {options.map((o) => {
          const selected = o.name === value;
          return (
            <button
              key={o.name}
              type="button"
              aria-pressed={selected}
              aria-label={o.name}
              title={o.name}
              onClick={() => onChange(o.name)}
              className={`aspect-square w-full rounded-full border border-thread/30 transition-shadow ${
                selected
                  ? "shadow-[0_0_0_2px_var(--color-espresso),0_0_0_4px_var(--color-thread)]"
                  : "hover:shadow-[0_0_0_2px_var(--color-espresso),0_0_0_4px_rgb(239_230_213/0.4)]"
              }`}
              style={{ backgroundColor: o.hex }}
            />
          );
        })}
      </div>
    </fieldset>
  );
}

export function SeatBuilder() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [leather, setLeather] = useState("Saddle");
  const [insert, setInsert] = useState("Saddle");
  const [thread, setThread] = useState("Cream");
  const [perforated, setPerforated] = useState(true);

  const body = LEATHERS.find((l) => l.name === leather)!.hex;
  const panel = LEATHERS.find((l) => l.name === insert)!.hex;
  const stitch = THREADS.find((t) => t.name === thread)!.hex;

  const twoTone = insert !== leather;
  const summary = [
    twoTone
      ? `${leather} leather with ${insert.toLowerCase()} inserts`
      : `${leather} leather`,
    `${thread.toLowerCase()} stitching`,
    perforated ? "perforated inserts" : "smooth inserts",
  ].join(", ");

  const quoteHref = `/contact?service=leather&design=${encodeURIComponent(summary)}`;

  const ease = { transition: "fill 220ms ease, stroke 220ms ease" };

  return (
    <div className="rounded-md bg-espresso-deep/70 p-5 ring-1 ring-thread/10 sm:p-7">
      <h2 className="display text-[2rem] text-thread">Try a combination</h2>

      <div className="mt-2 grid items-center gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <svg
          viewBox="0 0 420 500"
          role="img"
          aria-label={`Car seat preview: ${summary}`}
          className="mx-auto w-full max-w-[280px] sm:max-w-none"
        >
          <defs>
            <linearGradient id={`${uid}-round`} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#000" stopOpacity="0.45" />
              <stop offset="0.14" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="0.3" stopColor="#000" stopOpacity="0.12" />
              <stop offset="0.5" stopColor="#000" stopOpacity="0" />
              <stop offset="0.7" stopColor="#000" stopOpacity="0.12" />
              <stop offset="0.86" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="1" stopColor="#000" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id={`${uid}-fall`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
              <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
              <stop offset="1" stopColor="#000" stopOpacity="0.28" />
            </linearGradient>
            <pattern
              id={`${uid}-perf`}
              width="9"
              height="9"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <circle cx="4.5" cy="4.5" r="1.25" fill="#000" opacity="0.42" />
            </pattern>
            <path
              id={`${uid}-back`}
              d="M122 118 Q210 100 298 118 Q324 122 329 152 L347 316 Q349 340 327 340 L93 340 Q71 340 73 316 L91 152 Q96 122 122 118 Z"
            />
            <path
              id={`${uid}-backIn`}
              d="M156 142 Q210 132 264 142 Q270 143 271 150 L281 316 Q281 322 275 322 L145 322 Q139 322 139 316 L149 150 Q150 143 156 142 Z"
            />
            <path
              id={`${uid}-seat`}
              d="M72 352 L348 352 Q372 353 378 376 L397 446 Q402 476 372 476 L48 476 Q18 476 23 446 L42 376 Q48 353 72 352 Z"
            />
            <path
              id={`${uid}-seatIn`}
              d="M138 362 L282 362 Q288 362 289 368 L303 456 Q304 464 296 464 L124 464 Q116 464 117 456 L131 368 Q132 362 138 362 Z"
            />
            <path
              id={`${uid}-head`}
              d="M160 32 Q160 12 180 12 L240 12 Q260 12 260 32 L256 80 Q254 96 238 96 L182 96 Q166 96 164 80 Z"
            />
          </defs>

          {/* floor shadow */}
          <ellipse cx="210" cy="482" rx="188" ry="12" fill="#000" opacity="0.35" />

          {/* headrest posts */}
          <rect x="187" y="92" width="7" height="26" rx="2" fill="#8d8f92" />
          <rect x="226" y="92" width="7" height="26" rx="2" fill="#8d8f92" />

          {/* headrest */}
          <use href={`#${uid}-head`} fill={body} style={ease} />
          <use href={`#${uid}-head`} fill={`url(#${uid}-round)`} />
          <use href={`#${uid}-head`} fill={`url(#${uid}-fall)`} />
          <path
            d="M172 34 Q210 27 248 34"
            fill="none"
            stroke={stitch}
            strokeWidth="1.6"
            strokeDasharray="5 3.5"
            strokeLinecap="round"
            style={ease}
          />

          {/* backrest */}
          <use href={`#${uid}-back`} fill={body} style={ease} />
          <use href={`#${uid}-back`} fill={`url(#${uid}-round)`} />
          <use href={`#${uid}-back`} fill={`url(#${uid}-fall)`} />
          <use href={`#${uid}-backIn`} fill={panel} style={ease} />
          {perforated && (
            <use href={`#${uid}-backIn`} fill={`url(#${uid}-perf)`} />
          )}
          <use href={`#${uid}-backIn`} fill={`url(#${uid}-fall)`} opacity="0.7" />
          <use
            href={`#${uid}-backIn`}
            fill="none"
            stroke="#000"
            strokeOpacity="0.4"
            strokeWidth="2.5"
          />
          {/* pleat seams */}
          <g stroke="#000" strokeOpacity="0.32" strokeWidth="2">
            <path d="M146 188 L274 188" />
            <path d="M144 232 L276 232" />
            <path d="M141 276 L279 276" />
          </g>

          {/* seat cushion */}
          <use href={`#${uid}-seat`} fill={body} style={ease} />
          <use href={`#${uid}-seat`} fill={`url(#${uid}-round)`} />
          <use href={`#${uid}-seat`} fill={`url(#${uid}-fall)`} />
          <use href={`#${uid}-seatIn`} fill={panel} style={ease} />
          {perforated && (
            <use href={`#${uid}-seatIn`} fill={`url(#${uid}-perf)`} />
          )}
          <use href={`#${uid}-seatIn`} fill={`url(#${uid}-fall)`} opacity="0.7" />
          <use
            href={`#${uid}-seatIn`}
            fill="none"
            stroke="#000"
            strokeOpacity="0.4"
            strokeWidth="2.5"
          />
          <g stroke="#000" strokeOpacity="0.32" strokeWidth="2">
            <path d="M126 398 L294 398" />
            <path d="M121 432 L299 432" />
          </g>

          {/* stitching: a row either side of each seam */}
          <g
            fill="none"
            stroke={stitch}
            strokeWidth="1.6"
            strokeDasharray="5 3.5"
            strokeLinecap="round"
            style={ease}
          >
            <path d="M150 140 Q210 126 270 140 Q276 141 277 150 L287 318 Q288 328 277 328 L143 328 Q132 328 133 318 L143 150 Q144 141 150 140 Z" />
            <path d="M145 193 L275 193" />
            <path d="M143 237 L277 237" />
            <path d="M140 281 L280 281" />
            <path d="M134 356 L286 356 Q293 356 295 366 L309 456 Q311 470 298 470 L122 470 Q109 470 111 456 L125 366 Q127 356 134 356 Z" />
            <path d="M125 403 L295 403" />
            <path d="M120 437 L300 437" />
          </g>
        </svg>

        <div className="grid gap-5">
          <SwatchGroup
            legend="Leather"
            options={LEATHERS}
            value={leather}
            onChange={(name) => {
              // Keep a one-color seat one-color until the insert is picked.
              if (insert === leather) setInsert(name);
              setLeather(name);
            }}
          />
          <SwatchGroup
            legend="Inserts"
            options={LEATHERS}
            value={insert}
            onChange={setInsert}
          />
          <SwatchGroup
            legend="Stitching"
            options={THREADS}
            value={thread}
            onChange={setThread}
          />
          <label className="flex min-h-10 cursor-pointer items-center gap-3 text-[0.95rem]">
            <input
              type="checkbox"
              checked={perforated}
              onChange={(e) => setPerforated(e.target.checked)}
              className="h-5 w-5 accent-saddle"
            />
            Perforated inserts
          </label>
        </div>
      </div>

      <div className="stitch-x mt-6 text-thread/25" aria-hidden="true" />

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-thread-dim" aria-live="polite">
          {summary.charAt(0).toUpperCase() + summary.slice(1)}. Screen colors
          are a guide. See real samples at the shop.
        </p>
        <Link href={quoteHref} className="btn btn-saddle shrink-0">
          Quote this combination
        </Link>
      </div>
    </div>
  );
}
