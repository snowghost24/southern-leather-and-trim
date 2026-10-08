import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

/** Phone-sized screens only: keeps Call and Quote within thumb reach. */
export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-thread/15 bg-espresso-deep p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <a href={site.phone.href} className="btn btn-thread min-h-11 py-2">
        <PhoneIcon />
        Call the shop
      </a>
      <Link href="/contact" className="btn btn-saddle min-h-11 py-2">
        Get a quote
      </Link>
    </div>
  );
}
