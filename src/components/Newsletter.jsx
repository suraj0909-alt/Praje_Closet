import { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <h2 className="section-title">Be the first to know.</h2>
        <p>
          New drops, exclusive offers and style inspiration — straight to
          your inbox.
        </p>

        {submitted ? (
          <p className="newsletter-success">
            You're on the list — welcome to PRAJE CLOSET.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-light">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
