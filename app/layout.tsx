import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GTMScript from "@/components/GTMScript";
import EmergencyBanner from "@/components/EmergencyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preconnect: true,
} as Parameters<typeof Inter>[0]);

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plumbingemergencylosangeles.com"),
  title: {
    default: "24/7 Emergency Plumber in Los Angeles | Richards Rooter & Plumbing",
    template: "%s | Richards Rooter & Plumbing",
  },
  description:
    "Richards Rooter & Plumbing — licensed 24/7 emergency plumber in Los Angeles. 30+ years serving LA since 1994. Call (310) 853-5200 now.",
  openGraph: {
    type: "website",
    siteName: "Richards Rooter & Plumbing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-orange focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <GTMScript />
        <EmergencyBanner />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
