import { LOCATIONS } from "./constants";

interface LocationContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  body: string;
  landmarks: string;
}

const content: Record<string, Omit<LocationContent, "slug" | "name">> = {
  "los-angeles": {
    metaTitle: "Emergency Plumber in Los Angeles, CA | Richards Rooter & Plumbing",
    metaDescription: "24/7 emergency plumber in Los Angeles. Richard Yazmajian — licensed, 30+ years serving LA. Call (310) 853-5200 for fast service.",
    h1: "Emergency Plumber in Los Angeles, CA",
    body: "Richards Rooter & Plumbing serves all of Los Angeles, from Downtown LA and the Eastside to the Westside neighborhoods. Richard Yazmajian responds to plumbing emergencies across the city 24 hours a day, 7 days a week.",
    landmarks: "Los Angeles, including neighborhoods from Silver Lake to Brentwood, Echo Park to Culver City.",
  },
  "woodland-hills": {
    metaTitle: "Plumber in Woodland Hills, CA | Richards Rooter & Plumbing",
    metaDescription: "Licensed 24/7 plumber in Woodland Hills. Richard Yazmajian — 30+ years in the West Valley. Call (310) 853-5200.",
    h1: "Plumber in Woodland Hills, CA",
    body: "Woodland Hills is one of Richard's most frequently served communities in the West San Fernando Valley. From the Warner Center area to the hillside homes near Topanga, Richard knows Woodland Hills plumbing inside and out.",
    landmarks: "Woodland Hills, including Warner Center, Canoga Park adjacent areas, and the hillside communities near Topanga State Park.",
  },
  "west-hollywood": {
    metaTitle: "Plumber in West Hollywood, CA | Richards Rooter & Plumbing",
    metaDescription: "24/7 emergency plumber in West Hollywood. Licensed, bonded, 30+ years experience. Call Richards Rooter at (310) 853-5200.",
    h1: "Emergency Plumber in West Hollywood, CA",
    body: "West Hollywood homes and condos require a plumber with experience in both older bungalows and modern high-density construction. Richard Yazmajian serves WeHo residents around the clock.",
    landmarks: "West Hollywood, including the Sunset Strip corridor, Santa Monica Boulevard, and the Design District.",
  },
  "beverly-hills": {
    metaTitle: "Plumber in Beverly Hills, CA | Richards Rooter & Plumbing",
    metaDescription: "Licensed plumber in Beverly Hills. High-end residential plumbing by Richard Yazmajian — 30+ years experience. Call (310) 853-5200.",
    h1: "Plumber in Beverly Hills, CA",
    body: "Beverly Hills residences demand careful, detail-oriented work. Richard Yazmajian brings 30 years of experience working in some of LA's finest homes, providing discreet and expert service to Beverly Hills homeowners.",
    landmarks: "Beverly Hills, including the flats, Trousdale Estates, and the 90210 zip code communities.",
  },
  "hollywood": {
    metaTitle: "Plumber in Hollywood, CA | Richards Rooter & Plumbing",
    metaDescription: "24/7 plumber in Hollywood, CA. Richards Rooter & Plumbing — licensed, 30+ years. Call (310) 853-5200 for emergency service.",
    h1: "Plumber in Hollywood, CA",
    body: "Hollywood's mix of older Craftsman bungalows, apartment buildings, and newer construction keeps Richard busy year-round. He handles everything from aging cast iron drain lines to modern fixture installations.",
    landmarks: "Hollywood, including Hollywood Hills, Franklin Village, and the Thai Town and Little Armenia neighborhoods.",
  },
  "century-city": {
    metaTitle: "Plumber in Century City, CA | Richards Rooter & Plumbing",
    metaDescription: "Emergency plumber in Century City. Richard Yazmajian — licensed, 30+ years serving West LA. Call (310) 853-5200 anytime.",
    h1: "Plumber in Century City, CA",
    body: "Century City's high-rise condominiums and corporate towers require plumbers with experience in complex multi-unit systems. Richard has the expertise to handle Century City's unique plumbing challenges.",
    landmarks: "Century City, adjacent to Westwood, Cheviot Hills, and the Fox Studios lot.",
  },
  "santa-monica": {
    metaTitle: "Plumber in Santa Monica, CA | Richards Rooter & Plumbing",
    metaDescription: "24/7 plumber in Santa Monica. Richard Yazmajian — licensed, bonded, 30+ years in LA. Call (310) 853-5200 for fast response.",
    h1: "Emergency Plumber in Santa Monica, CA",
    body: "Santa Monica's coastal location means specific plumbing challenges including salt air corrosion, sand and silt in outdoor lines, and aging infrastructure in the city's historic neighborhoods. Richard serves Santa Monica residents around the clock.",
    landmarks: "Santa Monica, from Montana Avenue to Ocean Park, and the Pico neighborhood to Wilshire Corridor.",
  },
  "burbank": {
    metaTitle: "Plumber in Burbank, CA | Richards Rooter & Plumbing",
    metaDescription: "Licensed 24/7 plumber in Burbank, CA. Richard Yazmajian — 30+ years serving the San Fernando Valley. Call (310) 853-5200.",
    h1: "Plumber in Burbank, CA",
    body: "Burbank is home to many of LA's entertainment industry workers and their families. Richard provides fast, reliable plumbing service to Burbank homeowners, from the flatlands near the studios to the hillside homes in the Verdugo Mountains foothills.",
    landmarks: "Burbank, including the Media District, Downtown Burbank, and the Rancho neighborhood.",
  },
  "sherman-oaks": {
    metaTitle: "Plumber in Sherman Oaks, CA | Richards Rooter & Plumbing",
    metaDescription: "24/7 plumber in Sherman Oaks. Richard Yazmajian, licensed & bonded, 30+ years in the Valley. Call (310) 853-5200.",
    h1: "Plumber in Sherman Oaks, CA",
    body: "Sherman Oaks sits at the heart of the San Fernando Valley, and Richard Yazmajian has served its homeowners and residents for decades. From the hillside homes above Ventura Boulevard to the Sepulveda Basin adjacent neighborhoods, Richard is your local plumber.",
    landmarks: "Sherman Oaks, including the Ventura Boulevard corridor, Fashion Square area, and hillside communities near Mulholland Drive.",
  },
  "encino": {
    metaTitle: "Plumber in Encino, CA | Richards Rooter & Plumbing",
    metaDescription: "Licensed plumber in Encino, CA. Richard Yazmajian — 30+ years in the Valley. Free estimates. Call (310) 853-5200.",
    h1: "Plumber in Encino, CA",
    body: "Encino's established residential neighborhoods feature many large homes with complex plumbing systems. Richard Yazmajian has the experience and equipment to handle everything from simple faucet repairs to whole-home repipes in Encino.",
    landmarks: "Encino, including Amestoy Estates, the White Oak corridor, and the Balboa area near the LA River.",
  },
  "northridge": {
    metaTitle: "Plumber in Northridge, CA | Richards Rooter & Plumbing",
    metaDescription: "Richard Yazmajian is your local plumber in Northridge. Based here since 1994. Call (310) 853-5200 — 24/7 service.",
    h1: "Your Local Plumber in Northridge, CA",
    body: "Northridge is home base for Richards Rooter & Plumbing. Richard Yazmajian has been serving Northridge homeowners from his base here since he founded the company in 1994. When you call for plumbing help in Northridge, you get the fastest possible response.",
    landmarks: "Northridge, including CSUN adjacent neighborhoods, Reseda Boulevard, and Tampa Avenue corridors.",
  },
};

export function getLocationContent(slug: string): LocationContent | null {
  const base = LOCATIONS.find((l) => l.slug === slug);
  if (!base || !content[slug]) return null;
  return { slug, name: base.name, ...content[slug] };
}

export function getAllLocationSlugs() {
  return LOCATIONS.map((l) => l.slug);
}
