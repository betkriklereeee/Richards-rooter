import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceContent, getAllServiceSlugs } from "@/lib/serviceContent";
import { BUSINESS, SERVICES, SERVICE_IMAGES } from "@/lib/constants";
import TrustBadges from "@/components/TrustBadges";
import FAQAccordion from "@/components/FAQAccordion";
import CallbackForm from "@/components/CallbackForm";

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "drain-cleaning":           "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&q=80",
  "water-heater-repair":      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
  "water-heater-installation":"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
  "tankless-water-heater":    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
  "gas-leak-detection":       "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80",
  "sewer-cleaning":           "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?w=1200&q=80",
  "water-leak-detection":     "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80",
  "pipe-repair":              "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
  "toilet-repair":            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
};

const FALLBACK_HERO = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://www.plumbingemergencylosangeles.com/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.plumbingemergencylosangeles.com/services/${slug}`,
      images: SERVICE_IMAGES[slug] ? [{ url: SERVICE_IMAGES[slug].src }] : [],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) notFound();

  const heroSrc = SERVICE_HERO_IMAGES[slug] ?? FALLBACK_HERO;
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero — full-width, outside main container */}
      <section className="relative w-full overflow-hidden" style={{ height: "400px" }}>
        <img
          src={heroSrc}
          alt={`${service.name} in Los Angeles — Richards Rooter & Plumbing`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          fetchPriority="high"
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,31,68,0.72)" }} />
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "16px", maxWidth: "800px" }}>
            {service.name} in Los Angeles
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.125rem", maxWidth: "600px" }}>
            Available 24/7 — Call {BUSINESS.phone}
          </p>
        </div>
      </section>

      {/* All non-hero content inside constrained main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-4">{service.intro}</p>
            <p className="text-gray-700 mb-8">{service.body}</p>

            <div className="mb-8">
              <TrustBadges />
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4">Common Questions About {service.name}</h2>
            <FAQAccordion faqs={service.faqs} />

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Related Services</h2>
              <div className="grid grid-cols-2 gap-3">
                {related.map((s) => {
                  const img = SERVICE_IMAGES[s.slug];
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded overflow-hidden border border-gray-200 hover:border-orange transition-colors group bg-light-gray"
                    >
                      <div className="relative h-24 w-full overflow-hidden">
                        {img && (
                          <img
                            src={img.src}
                            alt={`${s.name} in Los Angeles`}
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                            className="group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <p className="p-3 text-sm font-medium text-navy group-hover:text-orange transition-colors">
                        {s.name} &rarr;
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 space-y-4">
              <div className="bg-orange text-white rounded-lg p-5 text-center">
                <p className="font-bold text-lg mb-2">24/7 Emergency Service</p>
                <p className="text-sm mb-4">Call Richard directly — any time, any day.</p>
                <a
                  href={BUSINESS.phoneTel}
                  className="block bg-white text-orange font-bold py-3 px-4 rounded min-h-[44px] flex items-center justify-center hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <CallbackForm />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
