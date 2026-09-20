import { Link } from "react-router-dom";
import "./CategoryCard.css";

export default function CategoryCard({ category, style }) {
  return (
    <Link
      to={`/collection?filter=${category.id}`}
      className="category-card reveal"
      style={style}
    >
      <img src={category.image} alt={category.name} loading="lazy" />
      <div className="category-overlay" />
      <span className="category-name">{category.name}</span>
    </Link>
  );
}
