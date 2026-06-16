"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { fireCallClick } from "@/lib/gtm";
import { usePathname } from "next/navigation";

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  if (dismissed) return null;

  return (
    <div
      className="bg-orange text-white px-4 py-2 flex items-center justify-between gap-4"
      role="banner"
    >
      <p className="text-sm font-semibold flex-1 text-center">
        24/7 Plumbing Emergency in Los Angeles —{" "}
        <a
          href={BUSINESS.phoneTel}
          className="underline font-bold hover:no-underline"
          onClick={() => fireCallClick(pathname)}
          aria-label={`Call Richards Rooter at ${BUSINESS.phone}`}
        >
          Call {BUSINESS.phone} Now
        </a>
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:bg-white/20 rounded"
        aria-label="Dismiss emergency banner"
      >
        ✕
      </button>
    </div>
  );
}
