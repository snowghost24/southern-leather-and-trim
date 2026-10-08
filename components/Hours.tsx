import { site } from "@/lib/site";

export function Hours() {
  if (!site.hours.length) {
    return (
      <p>
        Call{" "}
        <a href={site.phone.href} className="underline underline-offset-4">
          {site.phone.display}
        </a>{" "}
        for hours.
      </p>
    );
  }

  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
      {site.hours.map((h) => (
        <div key={h.days} className="contents">
          <dt>{h.days}</dt>
          <dd>{h.time}</dd>
        </div>
      ))}
    </dl>
  );
}
