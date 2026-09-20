import { Link } from "react-router-dom";
import { FiHeart, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ product, onQuickView, style }) {
  const { wishlist, toggleWishlist } = useCart();
  const isWished = wishlist.includes(product.id);
  const discount =
    product.mrp && product.mrp > product.price
      ? Math.round(100 - (product.price / product.mrp) * 100)
      : null;

  return (
    <div className="product-card reveal" style={style}>
      <div className="product-media">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>

        <div className="product-badges">
          {product.isNew && <span className="badge">New</span>}
          {discount && <span className="badge badge-outline">-{discount}%</span>}
        </div>

        <button
          className={`wishlist-btn ${isWished ? "active" : ""}`}
          aria-label="Toggle wishlist"
          onClick={() => toggleWishlist(product.id)}
        >
          <FiHeart size={16} />
        </button>

        {onQuickView && (
          <button
            className="quick-view-btn"
            onClick={() => onQuickView(product)}
          >
            <FiEye size={14} /> Quick View
          </button>
        )}
      </div>

      <Link to={`/product/${product.id}`} className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-colors">
          {product.colors.slice(0, 4).map((c) => (
            <span key={c} className="color-dot" title={c} />
          ))}
        </div>
        <div className="product-price">
          <span>₹{product.price.toLocaleString("en-IN")}</span>
          {product.mrp && product.mrp > product.price && (
            <span className="mrp">₹{product.mrp.toLocaleString("en-IN")}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
