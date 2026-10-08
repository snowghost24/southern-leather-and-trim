/**
 * A French seam: two parallel rows of stitches.
 * Drawn in the current text color, so set a text color on it.
 */
export function Seam({
  direction = "x",
  className = "",
}: {
  direction?: "x" | "y";
  className?: string;
}) {
  if (direction === "y") {
    return (
      <div aria-hidden="true" className={`flex gap-[7px] ${className}`}>
        <div className="stitch-y h-full" />
        <div className="stitch-y h-full" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className={`grid gap-[7px] ${className}`}>
      <div className="stitch-x" />
      <div className="stitch-x" />
    </div>
  );
}
