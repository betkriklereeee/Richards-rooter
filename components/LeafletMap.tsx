"use client";

import { useEffect, useId } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon paths broken by webpack/Next.js bundling
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export interface LeafletMapProps {
  lat: number;
  lng: number;
  title: string;
  popupText: string;
}

// Recenter when props change (e.g. different location page without full remount)
function RecenterOnChange({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);
  return null;
}

// Calls map.remove() when the component unmounts, preventing the
// "Map container is already initialized" error on client-side navigation.
function MapCleanup() {
  const map = useMap();
  useEffect(() => {
    return () => {
      map.remove();
    };
  }, [map]);
  return null;
}

export default function LeafletMap({ lat, lng, title, popupText }: LeafletMapProps) {
  // Unique id per instance so Leaflet never tries to reuse a stale container
  const uid = useId().replace(/:/g, "");
  const containerId = `leaflet-map-${uid}`;

  return (
    <MapContainer
      key={`${lat}-${lng}`}
      id={containerId}
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      aria-label={title}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{popupText}</Popup>
      </Marker>
      <RecenterOnChange lat={lat} lng={lng} />
      <MapCleanup />
    </MapContainer>
  );
}
