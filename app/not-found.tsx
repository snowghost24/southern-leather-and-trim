import Link from "next/link";

export default function NotFound() {
  return (
    <section className="leather">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <h1 className="display text-6xl sm:text-7xl">
          That page isn&rsquo;t here
        </h1>
        <p className="mt-4 max-w-[48ch] text-thread-dim">
          The link may be old or mistyped. Start again from the home page.
        </p>
        <Link href="/" className="btn btn-saddle mt-8">
          Go to the home page
        </Link>
      </div>
    </section>
  );
}
