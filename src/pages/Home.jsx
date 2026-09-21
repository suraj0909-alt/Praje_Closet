import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Button from "../components/Button.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { categories, products } from "../data/products.js";
import "./Home.css";
import image1 from "../assets/images/image1.jpg"
import images from "../assets/images/homepage-img.jpg"

// const heroImg = "https://www.magnific.com/free-photo/woman-with-shopping-bags-coffee-smiling-camera_5714397.htm#fromView=detail&position=4";
//const trendImg = "https://www.magnific.com/free-photo/top-view-sewing-essentials-with-measuring-tape-scissors_9361865.htm#fromView=keyword&page=1&position=8&uuid=7b43130e-f3de-472d-8522-ceeb17f18baf&track=ais_hybrid&query=Tailor+background";
const instaSeeds = [
  "lunea-insta-1",
  "lunea-insta-2",
  "lunea-insta-3",
  "lunea-insta-4",
  "lunea-insta-5",
  "lunea-insta-6",
];

export default function Home() {
  const [quickView, setQuickView] = useState(null);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 8);

  return (
    <main className="page home-page">
      {/* HERO */}
      <section className="hero">
        <img src={images} alt="Woman wearing a modern PRAJE outfit" className="hero-img" />
        <div className="hero-scrim" />
        <div className="hero-content container fade-in">
          <span className="hero-eyebrow">PRAJE CLOSET</span>
          <h1 className="hero-title">Your Style.<br />Your Statement.</h1>
          <p className="hero-sub">
            Modern, effortless womenswear designed for the woman who moves
            through her day with intention — and looks unmistakably herself
            doing it.
          </p>
          <div className="hero-actions">
            <Button to="/collection" variant="light">
              Shop Collection
            </Button>
            <Button to="/collection?filter=new" variant="ghost">
              Explore New Arrivals
            </Button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-sub">
              Six edits, one wardrobe — built around how you actually get
              dressed.
            </p>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((c, i) => (
            <CategoryCard key={c.id} category={c} style={{ animationDelay: `${i * 0.07}s` }} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="section container">
        <div className="section-head">
          <div>
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-sub">
              Fresh off the design table — the pieces everyone will be asking
              about this month.
            </p>
          </div>
          <Link to="/collection?filter=new" className="link-underline">
            View all
          </Link>
        </div>
        <ProductGrid products={newArrivals} onQuickView={setQuickView} />
      </section>

      {/* TRENDING EDITORIAL */}
      <section className="trend-section">
        <img src={image1} alt="PRAJE trend edit" />
        <div className="trend-overlay">
          <div className="container">
            <p className="trend-eyebrow">The Edit</p>
            <h2 className="trend-title">
              Soft tailoring, quiet luxury, one wardrobe that works twice as
              hard.
            </h2>
            <Button to="/collection" variant="light">
              Shop the Trend
            </Button>
          </div>
        </div>
      </section>

      {/* INSTAGRAM STYLE */}
      <section className="section container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Styled by You</h2>
            <p className="section-sub">
              Tag @praje_closet.style for a chance to be featured here.
            </p>
          </div>
        </div>
        <div className="insta-grid">
          {instaSeeds.map((seed, i) => (
            <a
              href="#"
              className="insta-tile reveal"
              key={seed}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={(e) => e.preventDefault()}
            >
              <img src={`https://picsum.photos/seed/${seed}/600/600`} alt="Customer styled PRAJE look" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <Newsletter />

      {quickView && (
        <div className="quick-view-modal" onClick={() => setQuickView(null)}>
          <div className="quick-view-card" onClick={(e) => e.stopPropagation()}>
            <button className="qv-close" onClick={() => setQuickView(null)} aria-label="Close">
              &times;
            </button>
            <img src={quickView.image} alt={quickView.name} />
            <div className="qv-info">
              <h3>{quickView.name}</h3>
              <p className="qv-price">₹{quickView.price.toLocaleString("en-IN")}</p>
              <p className="qv-desc">{quickView.description}</p>
              <Button to={`/product/${quickView.id}`} className="btn-block">
                View Full Details <FiArrowRight />
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
