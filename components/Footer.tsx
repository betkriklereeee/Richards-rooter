import Link from "next/link";
import Image from "next/image";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src="/richards-rooter-seal-lockup-dark.png"
            alt="Richards Rooter & Plumbing"
            width={220}
            height={50}
            className="mb-2"
          />
          <address className="not-italic text-sm text-gray-300 space-y-1">
            <p>{BUSINESS.address.street}</p>
            <p>
              <a href={BUSINESS.phoneTel} className="hover:text-orange transition-colors">{BUSINESS.phone}</a>
            </p>
            <p>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-orange transition-colors">{BUSINESS.email}</a>
            </p>
            <p>Available 24/7, 365 days a year</p>
          </address>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            {BUSINESS.license}, Licensed &amp; Bonded
          </p>
        </div>

        <div>
          <p className="font-bold mb-3 text-orange">Services</p>
          <ul className="space-y-1 text-sm" role="list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-gray-300 hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold mb-3 text-orange">Service Areas</p>
          <ul className="space-y-1 text-sm" role="list">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="text-gray-300 hover:text-white transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold mb-3 text-orange">Company</p>
          <ul className="space-y-1 text-sm" role="list">
            {[
              { href: "/about", label: "About Richard" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy-policy", label: "Privacy Policy" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Richards Rooter & Plumbing. All rights reserved.</p>
      </div>
    </footer>
  );
}
