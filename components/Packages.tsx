import { detailPackages } from "@/lib/site";

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-[0.3em] shrink-0 text-water-soft"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function Packages({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-md bg-water/20 md:grid-cols-3">
      {detailPackages.map((p) => (
        <article key={p.name} className="flex flex-col bg-rinse-bright p-6 sm:p-8">
          <h3 className="display text-4xl">{p.name}</h3>
          <p className="mt-2 text-water-soft">{p.summary}</p>

          {detailed && (
            <ul className="mt-5 grid gap-2.5">
              {p.includes.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <Check />
                  {line}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-auto pt-6 font-semibold">
            {p.price ?? "Call for a quote"}
          </p>
          {p.duration && <p className="text-water-soft">{p.duration}</p>}
        </article>
      ))}
    </div>
  );
}
