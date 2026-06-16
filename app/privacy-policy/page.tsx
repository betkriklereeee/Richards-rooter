import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Richards Rooter & Plumbing",
  description: "Privacy Policy for Richards Rooter & Plumbing. CCPA-compliant. Learn how we collect and use your data.",
  alternates: { canonical: "https://www.plumbingemergencylosangeles.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-headings:text-navy">
      <h1 className="text-4xl font-bold text-navy mb-4">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-6">Last updated: June 2026</p>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Introduction</h2>
      <p className="text-gray-700 mb-4">
        Richards Rooter &amp; Plumbing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates this website. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us for plumbing services.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Information We Collect</h2>
      <p className="text-gray-700 mb-2">We collect the following types of information:</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
        <li><strong>Contact information</strong> you provide: name, phone number, email address, and service request details when you submit a form.</li>
        <li><strong>Call tracking data</strong>: phone numbers and call duration when you call our tracked phone numbers.</li>
        <li><strong>Analytics data</strong>: pages visited, time on site, and general location (city/region) via Google Analytics 4.</li>
        <li><strong>Cookie data</strong>: session identifiers and preferences stored in browser cookies.</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">How We Use Your Information</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
        <li>To respond to your plumbing service requests</li>
        <li>To schedule appointments and follow up on inquiries</li>
        <li>To improve our website and services through analytics</li>
        <li>To measure the effectiveness of our advertising</li>
      </ul>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Google Analytics and Google Tag Manager</h2>
      <p className="text-gray-700 mb-4">
        We use Google Tag Manager (GTM) to manage tracking scripts on this website, including Google Analytics 4 (GA4) and Google Ads conversion tracking. These tools use cookies to collect anonymous usage data. We do not enable these tracking cookies until you accept cookies via our cookie consent banner.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Call Tracking</h2>
      <p className="text-gray-700 mb-4">
        We may use call tracking technology that assigns a unique phone number to this website to measure which marketing channels drive calls. Call tracking data is used solely for marketing attribution and service improvement.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Cookies</h2>
      <p className="text-gray-700 mb-4">
        We use essential cookies necessary for the website to function (no consent required) and optional analytics and advertising cookies that require your consent. You can accept or decline non-essential cookies via our cookie banner. You can also clear cookies at any time through your browser settings.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">California Privacy Rights (CCPA)</h2>
      <p className="text-gray-700 mb-2">
        As a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
        <li><strong>Right to Know</strong>: Request disclosure of the personal information we have collected about you.</li>
        <li><strong>Right to Delete</strong>: Request deletion of your personal information, subject to certain exceptions.</li>
        <li><strong>Right to Opt-Out</strong>: We do not sell your personal information to third parties.</li>
        <li><strong>Right to Non-Discrimination</strong>: We will not discriminate against you for exercising your privacy rights.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        To exercise your CCPA rights, contact us at:
      </p>
      <address className="not-italic text-gray-700 mb-4">
        <strong>Richards Rooter &amp; Plumbing</strong><br />
        Northridge, CA 91324<br />
        Email: <a href={`mailto:${BUSINESS.email}`} className="text-orange hover:underline">{BUSINESS.email}</a><br />
        Phone: <a href={BUSINESS.phoneTel} className="text-orange hover:underline">{BUSINESS.phone}</a>
      </address>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. Contact form submissions use encrypted HTTPS connections.
      </p>

      <h2 className="text-2xl font-bold text-navy mt-8 mb-3">Contact Us</h2>
      <p className="text-gray-700">
        If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${BUSINESS.email}`} className="text-orange hover:underline">{BUSINESS.email}</a> or call <a href={BUSINESS.phoneTel} className="text-orange hover:underline">{BUSINESS.phone}</a>.
      </p>
    </div>
  );
}
