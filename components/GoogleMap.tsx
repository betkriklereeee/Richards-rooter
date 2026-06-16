"use client";

import { useEffect, useRef, useState } from "react";

interface GoogleMapProps {
  city?: string;
  title?: string;
}

export default function GoogleMap({ city = "Northridge, CA", title = "Richards Rooter and Plumbing location map" }: GoogleMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const q = encodeURIComponent(city === "Northridge, CA" ? "Richards Rooter & Plumbing, Northridge, CA" : city);
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${q}`
    : `https://maps.google.com/maps?q=${q}&output=embed`;

  return (
    <div ref={ref} className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
      {visible ? (
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
          aria-label={title}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          Map loading…
        </div>
      )}
    </div>
  );
}
