import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceContent, getAllServiceSlugs } from "@/lib/serviceContent";
import { BUSINESS, SERVICES, SERVICE_IMAGES } from "@/lib/constants";
import TrustBadges from "@/components/TrustBadges";
import FAQAccordion from "@/components/FAQAccordion";
import CallbackForm from "@/components/CallbackForm";

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

  const heroImg = SERVICE_IMAGES[slug];
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      {heroImg && (
        <section className="relative bg-navy">
          <div className="relative h-[400px] w-full overflow-hidden">
            <Image
              src={heroImg.src}
              alt={heroImg.alt}
              fill
              className="object-cover object-center opacity-60"
              fetchPriority="high"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 pb-8 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">{service.h1}</h1>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {!heroImg && <h1 className="text-4xl font-bold text-navy mb-4">{service.h1}</h1>}
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
                      className="block bg-light-gray rounded border border-gray-200 hover:border-orange transition-colors group overflow-hidden"
                    >
                      {img && (
                        <div className="relative h-24 w-full overflow-hidden">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
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
      </div>
    </>
  );
}
