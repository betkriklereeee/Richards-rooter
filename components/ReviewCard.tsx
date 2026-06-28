"use client";

import { useState } from "react";

interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  time: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="16"
          height="16"
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

export default function ReviewCard({ author, rating, text, time }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const CHAR_LIMIT = 160;
  const isTruncatable = text.length > CHAR_LIMIT;
  const displayed = !expanded && isTruncatable ? text.slice(0, CHAR_LIMIT).trimEnd() + "…" : text;

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm flex flex-col">
      <StarRating rating={rating} />
      <p className="mt-2 text-gray-700 text-sm leading-relaxed flex-1">
        &ldquo;{displayed}&rdquo;
      </p>
      {isTruncatable && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-1 text-xs text-orange hover:underline self-start focus:outline-none focus:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <p className="mt-3 text-xs text-gray-500">
        <span className="font-semibold">{author}</span> &middot; {time}
      </p>
    </div>
  );
}
