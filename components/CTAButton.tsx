"use client";

import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/constants";
import { fireCallClick } from "@/lib/gtm";

interface CTAButtonProps {
  variant: "primary" | "secondary";
  sourcePage?: string;
  className?: string;
  onSecondaryClick?: () => void;
}

export default function CTAButton({ variant, sourcePage, className = "", onSecondaryClick }: CTAButtonProps) {
  const pathname = usePathname();
  const page = sourcePage ?? pathname;

  if (variant === "primary") {
    return (
      <a
        href={BUSINESS.phoneTel}
        onClick={() => fireCallClick(page)}
        className={`inline-flex items-center justify-center min-h-[44px] px-5 py-2 bg-orange text-white font-bold rounded hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${className}`}
        aria-label={`Call Richards Rooter now at ${BUSINESS.phone}`}
      >
        Call Now: {BUSINESS.phone}
      </a>
    );
  }

  return (
    <button
      onClick={onSecondaryClick}
      className={`inline-flex items-center justify-center min-h-[44px] px-5 py-2 bg-navy text-white font-bold rounded hover:bg-navy/90 transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ${className}`}
    >
      Get a Free Quote
    </button>
  );
}
