// City → [lat, lng]. Swap this component for a Google Maps version once an
// API key is available — nothing else in the codebase needs to change.
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

const DEFAULT: [number, number] = [34.2257, -118.5370]; // Northridge

export interface GoogleMapProps {
  city?: string;
  title?: string;
}

export default function GoogleMap({
  city = 'Northridge, CA',
  title = 'Richards Rooter and Plumbing location map',
}: GoogleMapProps) {
  const [lat, lng] = CITY_COORDS[city] ?? DEFAULT;
  const bbox = `${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={src}
        style={{ border: 0 }}
        loading="lazy"
        aria-label={title}
      />
    </div>
  );
}
