export const BUSINESS = {
  name: "Richards Rooter & Plumbing",
  owner: "Richard Yazmajian",
  phone: "(310) 853-5200",
  phoneTel: "tel:+13108535200",
  email: "info@plumbingemergencylosangeles.com",
  address: {
    street: "Northridge, CA 91324",
    city: "Northridge",
    state: "CA",
    zip: "91324",
  },
  established: 1994,
  license: "CA License #[placeholder]",
  hours: "24/7, 365 days a year",
  googleBusinessUrl: "https://www.google.com/maps/place/Richards+Rooter+%26+Plumbing",
};

export const SERVICES = [
  { slug: "drain-cleaning", name: "Drain Cleaning" },
  { slug: "water-heater-repair", name: "Water Heater Repair" },
  { slug: "water-heater-installation", name: "Water Heater Installation" },
  { slug: "tankless-water-heater", name: "Tankless Water Heater" },
  { slug: "gas-leak-detection", name: "Gas Leak Detection" },
  { slug: "sewer-cleaning", name: "Sewer Cleaning" },
  { slug: "water-leak-detection", name: "Water Leak Detection" },
  { slug: "pipe-repair", name: "Pipe Repair" },
  { slug: "toilet-repair", name: "Toilet Repair" },
];

export const LOCATIONS = [
  { slug: "los-angeles", name: "Los Angeles" },
  { slug: "woodland-hills", name: "Woodland Hills" },
  { slug: "west-hollywood", name: "West Hollywood" },
  { slug: "beverly-hills", name: "Beverly Hills" },
  { slug: "hollywood", name: "Hollywood" },
  { slug: "century-city", name: "Century City" },
  { slug: "santa-monica", name: "Santa Monica" },
  { slug: "burbank", name: "Burbank" },
  { slug: "sherman-oaks", name: "Sherman Oaks" },
  { slug: "encino", name: "Encino" },
  { slug: "northridge", name: "Northridge" },
];

export const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "drain-cleaning": {
    src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&q=80",
    alt: "Plumber clearing a clogged drain in a Los Angeles home",
  },
  "water-heater-repair": {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    alt: "Water heater repair service in Los Angeles",
  },
  "water-heater-installation": {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    alt: "New water heater installation by Richards Rooter & Plumbing",
  },
  "tankless-water-heater": {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    alt: "Tankless water heater installed by Richard Yazmajian in Los Angeles",
  },
  "gas-leak-detection": {
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    alt: "Gas leak detection and repair by licensed plumber in Los Angeles",
  },
  "sewer-cleaning": {
    src: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?w=600&q=80",
    alt: "Sewer cleaning and rooter service in Los Angeles",
  },
  "water-leak-detection": {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    alt: "Water leak detection service by Richards Rooter & Plumbing",
  },
  "pipe-repair": {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    alt: "Pipe repair and replacement in a Los Angeles residential home",
  },
  "toilet-repair": {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    alt: "Toilet repair service by Richards Rooter & Plumbing in Los Angeles",
  },
};

export const SERVICE_TYPES = [
  "Drain Cleaning",
  "Water Heater Repair",
  "Water Heater Installation",
  "Tankless Water Heater",
  "Gas Leak Detection",
  "Sewer Cleaning",
  "Water Leak Detection",
  "Pipe Repair",
  "Toilet Repair",
  "Other",
];
