import { leatherSteps } from "@/lib/site";

/** Numbered because the install is a real sequence. */
export function Steps() {
  return (
    <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {leatherSteps.map((step, i) => (
        <li key={step.title}>
          <div className="flex items-end gap-3">
            <span className="display text-7xl leading-[0.75] text-saddle">
              {i + 1}
            </span>
            <span
              aria-hidden="true"
              className="stitch-x mb-1 flex-1 text-thread/30"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
          <p className="mt-2 text-thread-dim">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
