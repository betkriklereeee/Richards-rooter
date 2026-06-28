import type { Metadata } from "next";
import Image from "next/image";
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

const valueCards = [
  {
    title: "Licensed & Bonded",
    description: "CA licensed plumbing contractor, fully insured. Richard holds all required California state certifications and keeps them current.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Residential Specialist",
    description: "Single-family homes, condos, and multi-unit properties across greater Los Angeles. Richard focuses on residential work where his expertise runs deepest.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Tankless Pioneer",
    description: "Installing and servicing tankless water heaters since before they were mainstream — Richard has been doing it since the early 1990s, longer than almost any plumber in LA.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80"
            alt="Professional plumber at work in a Los Angeles home"
            width={1200}
            height={500}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            30 Years of Trusted Plumbing<br />in Los Angeles
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Richard Yazmajian has been serving LA homeowners since 1994 — one job at a time.
          </p>
        </div>
      </section>

      {/* Richard's story */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              alt="Richard Yazmajian, licensed plumber and owner of Richards Rooter & Plumbing in Northridge, CA"
              width={600}
              height={600}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy mb-5">
              30 Years. One Plumber.<br />Thousands of Satisfied LA Homeowners.
            </h2>
            <p className="text-gray-700 mb-4">
              Richard Yazmajian founded Richards Rooter &amp; Plumbing in 1994 after studying Plumbing Technology at LA Trade Technical College. Based in Northridge, he built his reputation one referral at a time across the San Fernando Valley and greater Los Angeles.
            </p>
            <p className="text-gray-700 mb-4">
              He was an early adopter of tankless water heater technology in the early 1990s and has remained a specialist ever since — long before most LA plumbers had even seen a tankless unit in person.
            </p>
            <p className="text-gray-700 mb-6">
              Today he brings 30+ years of hands-on experience to every job — residential focus, no shortcuts, and no subcontractors. When you call Richards Rooter &amp; Plumbing, Richard picks up the phone and Richard shows up at your door.
            </p>
            <CTAButton variant="primary" sourcePage="/about" />
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">What Sets Richard Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-start gap-4">
                <div className="text-navy">{card.icon}</div>
                <h3 className="text-xl font-bold text-navy">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials / trust photo */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-5">Why Los Angeles Homeowners Choose Richard</h2>
            <p className="text-gray-700 mb-6">
              In a city full of plumbers, Richard stands out for the same reasons he did in 1994: he answers his own phone, arrives when he says he will, and charges what he quoted. No bait-and-switch. No unnecessary upsells. Just honest work.
            </p>
            <TrustBadges />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
              alt="Licensed plumber inspecting water heater installation in a Los Angeles residential home"
              width={600}
              height={450}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">What Customers Say</h2>
          <GoogleReviews />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Richard?</h2>
          <p className="text-white/80 mb-8">
            Available 24/7, 365 days a year. Free estimates on all plumbing work across greater Los Angeles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" sourcePage="/about" />
            <CTAButton variant="secondary" sourcePage="/about" />
          </div>
        </div>
      </section>
    </>
  );
}
