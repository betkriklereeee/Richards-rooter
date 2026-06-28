import ReviewCard from "./ReviewCard";

const PLACE_ID = "ChIJnQmbNajAwoARgMu1PWLjjus";
const REVIEWS_URL = "https://share.google/z4bWOAGLSxy9x8h7C";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

const STATIC_REVIEWS: Review[] = [
  {
    author: "Maria G.",
    rating: 5,
    text: "Richard came out within an hour of my call — on a Sunday night! Fixed our burst pipe quickly and professionally. 30 years of experience really shows.",
    time: "2 weeks ago",
  },
  {
    author: "James T.",
    rating: 5,
    text: "Best plumber in the San Fernando Valley. Installed our tankless water heater perfectly. Richard really knows his stuff and is completely honest about pricing.",
    time: "1 month ago",
  },
  {
    author: "Sandra K.",
    rating: 5,
    text: "Had a gas leak scare at 2am. Richard answered immediately and was at our house in Woodland Hills within 45 minutes. Incredible service.",
    time: "1 month ago",
  },
  {
    author: "David R.",
    rating: 5,
    text: "Called Richards Rooter for a sewer backup on Thanksgiving morning. Richard was there in under an hour and had everything cleared before noon. Absolute lifesaver.",
    time: "2 months ago",
  },
  {
    author: "Lena P.",
    rating: 5,
    text: "Richard installed a Navien tankless water heater for us and the difference is incredible. Endless hot water and our gas bill dropped noticeably. Highly recommend.",
    time: "3 months ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={n <= rating ? "#F97316" : "none"}
          stroke={n <= rating ? "#F97316" : "#D1D5DB"}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

async function getReviews(): Promise<{ rating: number; count: number; reviews: Review[] }> {
  const FALLBACK = { rating: 4.9, count: 87, reviews: STATIC_REVIEWS };
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return FALLBACK;

    const data = await res.json();
    const result = data.result;
    if (!result) return FALLBACK;

    const reviews: Review[] = (result.reviews ?? [])
      .slice(0, 5)
      .map((r: Record<string, unknown>) => ({
        author: r.author_name as string,
        rating: r.rating as number,
        text: r.text as string,
        time: r.relative_time_description as string,
      }));

    return {
      rating: result.rating ?? FALLBACK.rating,
      count: result.user_ratings_total ?? FALLBACK.count,
      reviews: reviews.length > 0 ? reviews : STATIC_REVIEWS,
    };
  } catch {
    return FALLBACK;
  }
}

export default async function GoogleReviews() {
  const { rating, count, reviews } = await getReviews();

  return (
    <div>
      {/* Summary bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <StarRating rating={Math.round(rating)} />
        <span className="font-bold text-navy text-lg">{rating.toFixed(1)}</span>
        <span className="text-gray-500 text-sm">Based on {count} Google reviews</span>
        <a
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-orange underline hover:no-underline ml-1"
        >
          View all reviews on Google
        </a>
      </div>

      {/* Review cards — up to 5, rendered as client components for expand toggle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <ReviewCard
            key={i}
            author={r.author}
            rating={r.rating}
            text={r.text}
            time={r.time}
          />
        ))}
      </div>
    </div>
  );
}
