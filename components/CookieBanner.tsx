"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  function handleConsent(accepted: boolean) {
    localStorage.setItem("cookie_consent", accepted ? "accepted" : "declined");
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "consent_update",
        analytics_storage: accepted ? "granted" : "denied",
        ad_storage: accepted ? "granted" : "denied",
      });
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-white px-4 py-4 shadow-2xl"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm leading-relaxed flex-1">
          We use cookies to improve your experience and for analytics. As a California resident, you have rights under CCPA.{" "}
          <a href="/privacy-policy" className="underline hover:no-underline">Privacy Policy</a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 border border-white/40 rounded text-sm min-h-[44px] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-4 py-2 bg-orange rounded text-sm font-bold min-h-[44px] hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-navy"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
