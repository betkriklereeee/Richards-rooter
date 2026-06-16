import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceContent, getAllServiceSlugs } from "@/lib/serviceContent";
import { BUSINESS, SERVICES } from "@/lib/constants";
import TrustBadges from "@/components/TrustBadges";
import FAQAccordion from "@/components/FAQAccordion";
import CallbackForm from "@/components/CallbackForm";
import CTAButton from "@/components/CTAButton";

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
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-navy mb-4">{service.h1}</h1>
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
              {related.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block p-3 bg-light-gray rounded border border-gray-200 hover:border-orange hover:text-orange transition-colors text-sm font-medium text-navy">
                  {s.name} &rarr;
                </Link>
              ))}
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
  );
}
