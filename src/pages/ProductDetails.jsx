import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiStar, FiHeart, FiTruck, FiRefreshCw } from "react-icons/fi";
import ProductGallery from "../components/ProductGallery.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import Button from "../components/Button.jsx";
import { useCart } from "../context/CartContext.jsx";
import { getProductById, getRelatedProducts, reviews } from "../data/products.js";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, wishlist, toggleWishlist } = useCart();

  const [size, setSize] = useState(product?.sizes[1] || product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) return <Navigate to="/collection" replace />;

  const isWished = wishlist.includes(product.id);
  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addToCart(product, { size, color, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="page product-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/collection">Collection</Link> /{" "}
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          <ProductGallery images={product.gallery} name={product.name} />

          <div className="product-panel">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar
                  key={i}
                  size={15}
                  fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                />
              ))}
              <span>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price-row">
              <span className="price-main">₹{product.price.toLocaleString("en-IN")}</span>
              {product.mrp > product.price && (
                <>
                  <span className="price-mrp">₹{product.mrp.toLocaleString("en-IN")}</span>
                  <span className="badge">
                    -{Math.round(100 - (product.price / product.mrp) * 100)}%
                  </span>
                </>
              )}
            </div>

            <div className="option-group">
              <span className="option-label">Color — {color}</span>
              <div className="color-options">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    className={`color-swatch ${color === c ? "active" : ""}`}
                    onClick={() => setColor(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <div className="option-label-row">
                <span className="option-label">Size — {size}</span>
                <button
                  className="link-underline size-guide-btn"
                  onClick={() => setShowSizeGuide(true)}
                >
                  Size guide
                </button>
              </div>
              <div className="size-options">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`size-swatch ${size === s ? "active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <span className="option-label">Quantity</span>
              <div className="qty-control">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
              </div>
            </div>

            <div className="product-actions">
              <Button variant="secondary" className="btn-block" onClick={handleAddToCart}>
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </Button>
              <Button to="/cart" className="btn-block" onClick={handleAddToCart}>
                Buy Now
              </Button>
              <button
                className={`wishlist-toggle ${isWished ? "active" : ""}`}
                onClick={() => toggleWishlist(product.id)}
                aria-label="Toggle wishlist"
              >
                <FiHeart size={18} />
              </button>
            </div>

            <div className="shipping-info">
              <div>
                <FiTruck size={16} /> Free shipping on orders above ₹1999
              </div>
              <div>
                <FiRefreshCw size={16} /> Easy 7-day returns
              </div>
            </div>

            <div className="product-details-table">
              <h3>Product Details</h3>
              <dl>
                {Object.entries(product.details).map(([label, value]) => (
                  <div key={label} className="detail-row">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="section-head">
            <h2 className="section-title">Customer Reviews</h2>
          </div>
          <div className="review-grid">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="section">
            <div className="section-head">
              <h2 className="section-title">You May Also Like</h2>
            </div>
            <ProductGrid products={related} />
          </section>
        )}
      </div>

      {showSizeGuide && (
        <div className="size-guide-modal" onClick={() => setShowSizeGuide(false)}>
          <div className="size-guide-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="qv-close"
              onClick={() => setShowSizeGuide(false)}
              aria-label="Close size guide"
            >
              &times;
            </button>
            <h3>Size Guide</h3>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Bust (in)</th>
                  <th>Waist (in)</th>
                  <th>Hip (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>XS</td><td>32</td><td>25</td><td>35</td></tr>
                <tr><td>S</td><td>34</td><td>27</td><td>37</td></tr>
                <tr><td>M</td><td>36</td><td>29</td><td>39</td></tr>
                <tr><td>L</td><td>38</td><td>31</td><td>41</td></tr>
                <tr><td>XL</td><td>40</td><td>33</td><td>43</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
