import ProductCard from "./ProductCard.jsx";
import "./ProductGrid.css";

export default function ProductGrid({ products, onQuickView }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <p>No products match these filters yet. Try clearing a filter.</p>
      </div>
    );
  }
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard
          key={p.id}
          product={p}
          onQuickView={onQuickView}
          style={{ animationDelay: `${Math.min(i, 8) * 0.06}s` }}
        />
      ))}
    </div>
  );
}
