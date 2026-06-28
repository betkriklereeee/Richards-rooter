import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import CallbackForm from "@/components/CallbackForm";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Richards Rooter & Plumbing | Los Angeles",
  description: "Contact Richard Yazmajian — 24/7 emergency plumber in Los Angeles. Call (310) 853-5200 or submit a request online. Free estimates.",
  alternates: { canonical: "https://www.plumbingemergencylosangeles.com/contact" },
  openGraph: {
    title: "Contact Richards Rooter & Plumbing | Los Angeles",
    description: "24/7 emergency plumber in Los Angeles. Call (310) 853-5200.",
    url: "https://www.plumbingemergencylosangeles.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — full-width, outside main container */}
      <section className="relative w-full overflow-hidden" style={{ height: "360px" }}>
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
          alt="Plumber on the phone providing 24/7 emergency plumbing service in Los Angeles"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          fetchPriority="high"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,31,68,0.72)" }} />
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "16px", maxWidth: "800px" }}>
            Contact Us
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.125rem", maxWidth: "600px" }}>
            Available 24/7 — {BUSINESS.phone}
          </p>
        </div>
      </section>

      {/* All non-hero content inside constrained main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-10">
          For plumbing emergencies in Los Angeles, call Richard directly at{" "}
          <a href={BUSINESS.phoneTel} className="text-orange font-bold hover:underline">{BUSINESS.phone}</a>.
          For non-urgent requests, use the form below.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Send a Message</h2>
            <ContactForm />
          </div>
          <aside>
            <div className="space-y-6">
              <CallbackForm />
              <div className="bg-light-gray rounded-lg p-5">
                <h2 className="text-xl font-bold text-navy mb-3">Contact Information</h2>
                <address className="not-italic space-y-2 text-sm text-gray-700">
                  <p><strong>Phone:</strong> <a href={BUSINESS.phoneTel} className="text-orange hover:underline">{BUSINESS.phone}</a></p>
                  <p><strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`} className="text-orange hover:underline">{BUSINESS.email}</a></p>
                  <p><strong>Address:</strong> {BUSINESS.address.street}</p>
                  <p><strong>Hours:</strong> {BUSINESS.hours}</p>
                </address>
              </div>
            </div>
          </aside>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-4">Find Us</h2>
          <GoogleMap />
        </div>
      </main>
    </>
  );
}
