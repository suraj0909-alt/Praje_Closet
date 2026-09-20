import { FiStar } from "react-icons/fi";
import "./ReviewCard.css";

export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={14}
            fill={i < review.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="review-text">"{review.text}"</p>
      <span className="review-name">{review.name}</span>
    </div>
  );
}
