import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import TrustBadges from "@/components/TrustBadges";
import GoogleReviews from "@/components/GoogleReviews";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Richard Yazmajian | Richards Rooter & Plumbing",
  description: "Meet Richard Yazmajian — licensed plumber in Los Angeles since 1994. 30+ years of residential plumbing expertise, tankless water heater pioneer.",
  alternates: { canonical: "https://www.plumbingemergencylosangeles.com/about" },
  openGraph: {
    title: "About Richard Yazmajian | Richards Rooter & Plumbing",
    description: "30+ years serving Los Angeles homeowners since 1994.",
    url: "https://www.plumbingemergencylosangeles.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-navy mb-8">About Richard Yazmajian</h1>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div>
          <img
            src="https://placehold.co/400x400/0A1F44/FFFFFF?text=Richard+Yazmajian"
            alt="Richard Yazmajian, owner of Richards Rooter and Plumbing, licensed plumber in Los Angeles"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy mb-3">30 Years. One Plumber. Thousands of Satisfied LA Homeowners.</h2>
          <p className="text-gray-700 mb-3">
            Richard Yazmajian founded Richards Rooter &amp; Plumbing in 1994 with a simple philosophy: show up on time, diagnose accurately, fix it right, and charge a fair price. Over 30 years later, that approach is still what drives every call.
          </p>
          <p className="text-gray-700 mb-3">
            Based in Northridge, Richard serves all of greater Los Angeles — from the San Fernando Valley to the Westside, from Burbank to Santa Monica. Every job is handled personally by Richard. No dispatched subcontractors. No surprises on the invoice.
          </p>
          <p className="text-gray-700 mb-6">
            Richard is a fully licensed, bonded, and insured plumbing contractor in California. He keeps his certifications current and stays up to date with Los Angeles building codes and water efficiency requirements.
          </p>
          <CTAButton variant="primary" sourcePage="/about" />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-4">Tankless Water Heater Pioneer</h2>
        <p className="text-gray-700 mb-3">
          Most plumbers in Los Angeles didn't start installing tankless water heaters until the mid-2000s. Richard was doing it in the early 1990s — when the technology had barely arrived in the US market and the installation manuals were still being translated from Japanese.
        </p>
        <p className="text-gray-700">
          That head start means Richard has more real-world tankless experience than almost anyone in the LA area. He has seen the technology evolve across four generations of products and knows what fails, what lasts, and what's worth the investment for different households.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-navy mb-4">Why Los Angeles Homeowners Choose Richard</h2>
        <TrustBadges />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-navy mb-6">What Customers Say</h2>
        <GoogleReviews />
      </section>
    </div>
  );
}
