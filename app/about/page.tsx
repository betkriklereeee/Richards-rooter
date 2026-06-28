import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, LOCATIONS } from "@/lib/constants";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "About Richard Yazmajian | Richards Rooter & Plumbing Los Angeles",
  description:
    "Meet Richard Yazmajian — licensed LA plumber since 1994. 30+ years experience, no subcontractors, available 24/7. Serving all of greater Los Angeles.",
  alternates: { canonical: "https://www.plumbingemergencylosangeles.com/about" },
  openGraph: {
    title: "About Richard Yazmajian | Richards Rooter & Plumbing Los Angeles",
    description: "Licensed LA plumber since 1994. 30+ years, no subcontractors, 24/7.",
    url: "https://www.plumbingemergencylosangeles.com/about",
  },
};

const valueCards = [
  {
    title: "Licensed & Bonded Since 1994",
    body: "California licensed plumbing contractor with 30+ years of continuous operation. Fully insured on every job.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "No Subcontractors. Ever.",
    body: "Richard personally handles every service call. The person you speak to on the phone is the same person who shows up.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Tankless Pioneer",
    body: "Installing tankless water heaters in LA since the early 1990s — before most plumbers had heard of them.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "24/7 Emergency Response",
    body: "Burst pipe at 2am? Water heater out on a Sunday? Richard is available around the clock across greater Los Angeles.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — full-width, outside main container */}
      <section className="relative w-full overflow-hidden" style={{ height: "480px" }}>
        <img
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80"
          alt="Richards Rooter and Plumbing — Licensed plumber in Los Angeles"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          fetchPriority="high"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,31,68,0.72)" }} />
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "16px", maxWidth: "800px" }}>
            About Richards Rooter &amp; Plumbing
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.125rem", maxWidth: "600px" }}>
            Serving Los Angeles homeowners with honesty, expertise, and urgency since 1994.
          </p>
        </div>
      </section>

      {/* All non-hero content inside constrained main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Meet Richard — two-column, text left / portrait right */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1F44] mb-6">Meet Richard Yazmajian</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Richard Yazmajian founded Richards Rooter &amp; Plumbing in 1994 after studying Plumbing Technology at Los Angeles Trade Technical College. What started as a one-man operation in Northridge has grown into one of the most trusted residential plumbing services across the greater Los Angeles area — built entirely on referrals and repeat customers.
                </p>
                <p>
                  With over 30 years of hands-on experience, Richard personally handles every job. No subcontractors. No surprises. When you call Richards Rooter &amp; Plumbing, Richard answers, Richard shows up, and Richard does the work.
                </p>
                <p>
                  He was one of the earliest adopters of tankless water heater technology in Los Angeles — installing and servicing tankless systems since the early 1990s, long before they became mainstream. That same forward-thinking approach applies to everything he does: accurate diagnosis, clean workmanship, and honest pricing every time.
                </p>
              </div>
            </div>
            <div style={{ position: "relative", height: "500px", width: "100%", overflow: "hidden", borderRadius: "8px" }}>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
                alt="Richard Yazmajian, owner and master plumber at Richards Rooter and Plumbing"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-xl italic text-gray-700 leading-relaxed">
              &ldquo;To provide every Los Angeles homeowner with fast, honest, and expert plumbing service — available 24 hours a day, 7 days a week, 365 days a year. No shortcuts. No unnecessary upsells. Just reliable work from a licensed professional who takes pride in every job.&rdquo;
            </p>
          </div>
        </section>

        {/* Why Choose Richard */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Why LA Homeowners Choose Richard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                <div className="text-navy">{card.icon}</div>
                <h3 className="font-bold text-navy text-base">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">Proudly Serving Greater Los Angeles</h2>
          <p className="text-center text-gray-700 mb-8">
            Based in Northridge, Richard serves homeowners across the entire LA area including Woodland Hills, West Hollywood, Beverly Hills, Hollywood, Century City, Santa Monica, Burbank, Sherman Oaks, Encino, and beyond.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-2xl mx-auto">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center gap-2 text-gray-700 hover:text-orange transition-colors py-1"
              >
                <span className="text-orange font-bold" aria-hidden="true">&#10003;</span>
                {loc.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">What Customers Say</h2>
          <GoogleReviews />
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-gray-100">
          <div className="rounded-2xl bg-navy text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-3">Ready to Work With Richard?</h2>
            <p className="text-white/90 mb-8 text-lg">Call now for same-day service or fill out the form for a free quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-orange text-white font-bold rounded hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-white text-navy font-bold rounded hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
