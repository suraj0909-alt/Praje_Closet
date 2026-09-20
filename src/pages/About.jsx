import Button from "../components/Button.jsx";
import "./About.css";

export default function About() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <img src="https://picsum.photos/seed/lunea-about-hero/1600/1000" alt="PRAJE CLOSET" />
        <div className="about-hero-content container">
          <h1>Fashion that feels like you.</h1>
        </div>
      </section>

      <section className="section container about-story">
        <div className="about-story-grid">
          <div className="about-copy">
            <p className="about-eyebrow">Our Story</p>
            <h2>Built around real women, not runway abstractions.</h2>
            <p>
              PRAJE CLOSET began with a simple frustration: most "modern" fashion
              still asked women to choose between comfort and looking
              considered. We started designing pieces that do both — cut to
              move with a real day, made in fabrics that hold their shape,
              and priced so getting dressed well doesn't mean saving for it.
            </p>
            <p>
              Every collection is built around a woman with somewhere to
              be — a first meeting, a friend's wedding, a Tuesday that
              somehow needs its own outfit. We design for her wardrobe as a
              whole, not just the next single "statement piece."
            </p>
          </div>
          <img src="https://picsum.photos/seed/lunea-about-1/800/1000" alt="PRAJE CLOSET design detail" className="about-img" />
        </div>
      </section>

      <section className="about-values">
        <div className="container about-values-grid">
          <div className="reveal">
            <h3>Confidence</h3>
            <p>Silhouettes that flatter without asking you to shrink.</p>
          </div>
          <div className="reveal" style={{ animationDelay: "0.08s" }}>
            <h3>Individuality</h3>
            <p>Considered basics and statement pieces that layer into your own style, not a uniform.</p>
          </div>
          <div className="reveal" style={{ animationDelay: "0.16s" }}>
            <h3>Effortless Style</h3>
            <p>Fabrics chosen for how they wear at 9am and how they photograph at 9pm.</p>
          </div>
        </div>
      </section>

      <section className="section container about-cta">
        <h2>Ready to build your wardrobe?</h2>
        <Button to="/collection">Shop the Collection</Button>
      </section>
    </main>
  );
}
