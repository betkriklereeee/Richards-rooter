import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocationContent, getAllLocationSlugs } from "@/lib/locationContent";
import { BUSINESS, SERVICES } from "@/lib/constants";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";
import ContactForm from "@/components/ContactForm";

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationContent(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://www.plumbingemergencylosangeles.com/locations/${slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.plumbingemergencylosangeles.com/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocationContent(slug);
  if (!loc) notFound();

  return (
    <>
      {/* Hero */}
      <div className="relative h-56 md:h-72 w-full overflow-hidden bg-navy">
        <img
          src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80"
          alt={`Aerial view of ${loc.name}, Los Angeles — served by Richards Rooter & Plumbing`}
          width={1200}
          height={400}
          fetchPriority="high"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 pb-8 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">{loc.h1}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 mb-4">{loc.body}</p>
        <p className="text-gray-600 mb-10">Serving {loc.landmarks}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Plumbing Services in {loc.name}</h2>
            <ul className="space-y-2 mb-6">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 text-navy hover:text-orange transition-colors"
                  >
                    <span className="text-orange" aria-hidden="true">&#10003;</span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-orange rounded-lg text-white">
              <p className="font-bold">24/7 Emergency Service in {loc.name}</p>
              <a
                href={BUSINESS.phoneTel}
                className="mt-2 block text-white underline font-bold text-lg hover:no-underline"
                aria-label={`Call Richards Rooter at ${BUSINESS.phone}`}
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>
          <div>
            <GoogleMap
              city={`${loc.name}, CA`}
              title={`Plumbing service area map for ${loc.name}, CA`}
            />
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-navy mb-4">Request Service in {loc.name}</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
