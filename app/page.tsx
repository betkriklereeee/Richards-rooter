import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, SERVICES, SERVICE_IMAGES } from "@/lib/constants";
import TrustBadges from "@/components/TrustBadges";
import GoogleReviews from "@/components/GoogleReviews";
import FAQAccordion from "@/components/FAQAccordion";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber Los Angeles | Richards Rooter & Plumbing",
  description:
    "Need a plumber now? Richards Rooter & Plumbing — licensed 24/7 emergency plumber in Los Angeles since 1994. Call (310) 853-5200. Free estimates.",
  alternates: { canonical: "https://www.plumbingemergencylosangeles.com/" },
  openGraph: {
    title: "24/7 Emergency Plumber Los Angeles | Richards Rooter & Plumbing",
    description: "Licensed 24/7 emergency plumber in Los Angeles since 1994. Call (310) 853-5200.",
    url: "https://www.plumbingemergencylosangeles.com/",
  },
};

const homeFaqs = [
  { question: "How quickly can you respond to a plumbing emergency in Los Angeles?", answer: "Richard typically responds within 30–60 minutes anywhere in greater Los Angeles, including the San Fernando Valley. He is available 24/7, 365 days a year." },
  { question: "Are you licensed and insured in California?", answer: "Yes. Richards Rooter & Plumbing is a fully licensed, bonded, and insured plumbing contractor in California. Richard has over 30 years of experience serving LA homeowners." },
  { question: "Do you offer free estimates?", answer: "Yes, we offer free estimates on all plumbing work. Richard will assess the problem and provide an honest, upfront price before any work begins." },
  { question: "What areas do you serve in Los Angeles?", answer: "We serve all of greater Los Angeles, including the San Fernando Valley, Woodland Hills, Sherman Oaks, Encino, Northridge, Burbank, Beverly Hills, Santa Monica, West Hollywood, Hollywood, and Century City." },
  { question: "Can you install tankless water heaters?", answer: "Absolutely. Richard was one of the earliest adopters of tankless water heater technology in the LA area, installing them since the early 1990s. He has deep expertise in both installation and repair." },
  { question: "What should I do if I have a gas leak?", answer: "Leave the building immediately, do not use any electrical switches, and call your gas company and 911. Once safe, call Richard at (310) 853-5200. He is available 24/7 for gas leak detection and repair." },
  { question: "Do you handle both residential and commercial plumbing?", answer: "Richards Rooter & Plumbing specializes in residential plumbing, which is where Richard's 30+ years of expertise is focused. Contact us to discuss your specific needs." },
];

const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: BUSINESS.name,
  url: "https://www.plumbingemergencylosangeles.com",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  areaServed: ["Los Angeles", "Woodland Hills", "West Hollywood", "Beverly Hills", "Hollywood", "Century City", "Santa Monica", "Burbank", "Sherman Oaks", "Encino", "Northridge"],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  foundingDate: "1994",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberSchema) }} />

      {/* Hero — full-width, outside main container */}
      <section className="relative w-full overflow-hidden" style={{ height: "560px" }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
          alt="Licensed emergency plumber in Los Angeles"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          fetchPriority="high"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,31,68,0.72)" }} />
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "16px", maxWidth: "800px" }}>
            24/7 Emergency Plumber in Los Angeles
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.125rem", maxWidth: "600px", marginBottom: "32px" }}>
            Richard Yazmajian has been serving LA homeowners since 1994 — over 30 years of licensed, reliable plumbing expertise available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" sourcePage="/" />
            <CTAButton variant="secondary" sourcePage="/" />
          </div>
        </div>
      </section>

      {/* All non-hero content inside constrained main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trust Badges */}
        <section className="py-10">
          <TrustBadges />
        </section>

        {/* Services Grid */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Our Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => {
              const img = SERVICE_IMAGES[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg hover:border-orange transition-all group bg-white"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    {img && (
                      <img
                        src={img.src}
                        alt={`${service.name} in Los Angeles`}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                        className="group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-navy group-hover:text-orange transition-colors">{service.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">Professional service in Los Angeles &rarr;</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* About Richard */}
        <section className="py-16 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Meet Richard Yazmajian</h2>
              <p className="text-gray-700 mb-3">
                Richard has been a licensed plumbing contractor in California since 1994, building Richards Rooter &amp; Plumbing into one of the most trusted names in the San Fernando Valley.
              </p>
              <p className="text-gray-700 mb-3">
                Based in Northridge, Richard specializes in residential plumbing and was one of the first plumbers in Los Angeles to install tankless water heaters — back in the early 1990s when the technology was just emerging.
              </p>
              <p className="text-gray-700 mb-6">
                Every job is handled personally by Richard. No subcontractors. No surprises. Just honest, expert plumbing from a 30-year LA veteran.
              </p>
              <CTAButton variant="secondary" sourcePage="/" />
            </div>
            <div style={{ backgroundColor: "#0A1F44", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", height: "400px", padding: "48px" }}>
              <Image
                src="/richards-rooter-seal-lockup-dark.png"
                alt="Richards Rooter & Plumbing — Est. 1994, Los Angeles"
                width={480}
                height={200}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">What Los Angeles Customers Say</h2>
          <GoogleReviews />
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={homeFaqs} />
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">Serving All of Los Angeles</h2>
          <p className="text-center text-gray-600 mb-8">From the San Fernando Valley to the Westside — Richard comes to you, 24/7.</p>
          <GoogleMap />
        </section>

        {/* Contact Form */}
        <section className="py-16 border-t border-gray-100" id="contact">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-2">Request a Free Quote</h2>
            <p className="text-center text-gray-600 mb-8">
              Or call us directly at <a href={BUSINESS.phoneTel} className="text-orange font-bold hover:underline">{BUSINESS.phone}</a>
            </p>
            <ContactForm />
          </div>
        </section>

      </main>
    </>
  );
}
