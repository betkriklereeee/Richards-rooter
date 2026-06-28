'use client';

import { useEffect, useRef } from 'react';

export interface LeafletMapProps {
  lat: number;
  lng: number;
  title: string;
}

export default function LeafletMap({ lat, lng, title }: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    import('leaflet').then((L) => {
      // Guard against React Strict Mode double-invocation or race conditions
      if (!containerRef.current || mapRef.current) return;

      // Fix default marker icons broken by webpack asset hashing
      const DefaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      mapRef.current = L.map(containerRef.current).setView([lat, lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      L.marker([lat, lng], { icon: DefaultIcon })
        .addTo(mapRef.current)
        .bindPopup(title);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Empty deps: we only ever initialise once. The container ref is stable
  // and lat/lng/title are captured at mount — navigation triggers a full
  // remount via the key prop on the parent, not a re-run of this effect.

  return (
    <div
      ref={containerRef}
      style={{ height: '100%', width: '100%' }}
      aria-label={title}
      role="application"
    />
  );
}
