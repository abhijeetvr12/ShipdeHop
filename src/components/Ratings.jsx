import { useState } from "react";
import { reviews as mockReviews } from "../mockData";

export default function Ratings() {
  const [ratingFilter, setRatingFilter] = useState(0);

  const filtered = ratingFilter
    ? mockReviews.filter(r => r.rating === ratingFilter)
    : mockReviews;

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Ratings & Reviews</h2>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-gray-700 font-medium">Filter by stars:</span>
        {[0, 5, 4, 3, 2, 1].map(star => (
          <button
            key={star}
            onClick={() => setRatingFilter(star)}
            className={`px-3 py-1 rounded-md text-sm transition ${
              ratingFilter === star
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {star === 0 ? "All" : `${star}★`}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(r => (
          <div
            key={r.id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-gray-800">{r.user}</h4>
              <span className="text-yellow-500 text-sm">{renderStars(r.rating)}</span>
            </div>
            <p className="text-gray-700">{r.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
