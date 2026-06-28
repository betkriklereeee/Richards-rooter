import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing FAQ Los Angeles | Richards Rooter & Plumbing",
  description: "Answers to common plumbing questions from LA homeowners. Emergency service, pricing, water heaters, service areas — answered by Richard Yazmajian.",
  alternates: { canonical: "https://www.plumbingemergencylosangeles.com/faq" },
  openGraph: {
    title: "Plumbing FAQ Los Angeles | Richards Rooter & Plumbing",
    description: "Common plumbing questions answered by Richard Yazmajian — 30+ years in LA.",
    url: "https://www.plumbingemergencylosangeles.com/faq",
  },
};

const faqs = [
  { question: "How quickly can you respond to a plumbing emergency in Los Angeles?", answer: "Richard typically arrives within 30–60 minutes anywhere in greater Los Angeles, including the San Fernando Valley, Westside, and Hollywood. He is available 24 hours a day, 7 days a week, 365 days a year." },
  { question: "Are you licensed and insured in California?", answer: "Yes. Richards Rooter & Plumbing is a fully licensed, bonded, and insured plumbing contractor in California. Richard has held his California contractor's license since 1994." },
  { question: "Do you offer free estimates?", answer: "Yes, we provide free estimates on all plumbing work. Richard will assess your situation and give you an honest, upfront price before any work begins — no pressure, no hidden fees." },
  { question: "What areas of Los Angeles do you serve?", answer: "We serve all of greater Los Angeles, including the San Fernando Valley (Northridge, Woodland Hills, Sherman Oaks, Encino, Burbank), the Westside (Santa Monica, Beverly Hills, Century City, West Hollywood), and Hollywood. Call (310) 853-5200 to confirm service to your area." },
  { question: "How much does emergency plumbing cost?", answer: "Pricing varies by the type and complexity of the job. Richard provides honest, upfront pricing before starting work — there are no additional emergency premiums for after-hours calls." },
  { question: "Do you work on both gas and water lines?", answer: "Yes. Richard is certified to work on both water supply lines and gas lines in California. This includes gas leak detection and repair, gas line sizing for appliances, and all water supply and drain work." },
  { question: "Can you install a tankless water heater in my LA home?", answer: "Absolutely. Richard was one of LA's first plumbers to install tankless water heaters, going back to the early 1990s. He installs Navien, Noritz, Rinnai, Rheem, and Bosch units and handles all gas line and venting requirements." },
  { question: "How long does water heater installation take?", answer: "Standard tank water heater replacement typically takes 2–3 hours. Tankless water heater installation takes 4–6 hours depending on venting and gas line requirements. Richard handles all permitting." },
  { question: "What causes a slab leak and how do you fix it?", answer: "Slab leaks occur when water supply lines embedded in your concrete foundation corrode or break. Richard uses acoustic detection and pressure testing to locate them accurately, then repairs with minimal concrete cutting." },
  { question: "How do I know if I have a gas leak?", answer: "The most common sign is a sulfur or rotten egg smell. You may also hear a hissing sound near gas appliances or see dying vegetation above a buried gas line. Leave immediately and call 911 — then call Richard at (310) 853-5200 once you are safely away from the building." },
  { question: "Do you offer senior or military discounts?", answer: "Richard offers discounts for senior homeowners and military veterans. Please mention this when you call." },
  { question: "What payment methods do you accept?", answer: "Richards Rooter & Plumbing accepts cash, check, and all major credit cards. Payment is due upon job completion." },
];

export default function FAQPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-4">Plumbing FAQ — Los Angeles</h1>
        <p className="text-lg text-gray-700 mb-8">
          Questions from LA homeowners, answered by Richard Yazmajian — licensed plumber with 30+ years in Los Angeles.
          For urgent help, call <a href={BUSINESS.phoneTel} className="text-orange font-bold hover:underline">{BUSINESS.phone}</a>.
        </p>
        <FAQAccordion faqs={faqs} headingLevel="h2" />
      </div>
    </main>
  );
}
