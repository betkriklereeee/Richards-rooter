'use client';

import dynamic from 'next/dynamic';

// City → [lat, lng] lookup. Expand as new location pages are added.
const CITY_COORDS: Record<string, [number, number]> = {
  'Northridge, CA':     [34.2257, -118.5370],
  'Los Angeles, CA':    [34.0522, -118.2437],
  'Woodland Hills, CA': [34.1684, -118.6058],
  'West Hollywood, CA': [34.0900, -118.3617],
  'Beverly Hills, CA':  [34.0736, -118.4004],
  'Hollywood, CA':      [34.0928, -118.3287],
  'Century City, CA':   [34.0559, -118.4163],
  'Santa Monica, CA':   [34.0195, -118.4912],
  'Burbank, CA':        [34.1808, -118.3090],
  'Sherman Oaks, CA':   [34.1508, -118.4496],
  'Encino, CA':         [34.1595, -118.5011],
};

const DEFAULT_COORDS: [number, number] = [34.2257, -118.5370]; // Northridge

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gray-100">
      Map loading…
    </div>
  ),
});

export interface GoogleMapProps {
  city?: string;
  title?: string;
}

export default function GoogleMap({
  city = 'Northridge, CA',
  title = 'Richards Rooter and Plumbing location map',
}: GoogleMapProps) {
  const coords = CITY_COORDS[city] ?? DEFAULT_COORDS;
  const popupLabel =
    city === 'Northridge, CA'
      ? 'Richards Rooter & Plumbing — Northridge, CA'
      : `Plumbing service area: ${city}`;

  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
      {/* key forces a full remount on city change, giving vanilla Leaflet a fresh DOM node */}
      <LeafletMap key={`${coords[0]}-${coords[1]}`} lat={coords[0]} lng={coords[1]} title={popupLabel} />
    </div>
  );
}
