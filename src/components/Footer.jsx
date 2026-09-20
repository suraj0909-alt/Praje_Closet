import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <span className="brand-logo">PRAJE CLOSET</span>
          <p>
            Modern womenswear designed for confidence, individuality and
            effortless style.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><FiInstagram size={17} /></a>
            <a href="#" aria-label="Pinterest">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.62 7.87 6.32 9.36-.09-.79-.16-2.01.03-2.88.18-.79 1.16-5.01 1.16-5.01s-.3-.6-.3-1.48c0-1.39.8-2.42 1.8-2.42.85 0 1.26.64 1.26 1.4 0 .85-.55 2.13-.83 3.31-.24 1 .5 1.81 1.48 1.81 1.78 0 3.15-1.87 3.15-4.58 0-2.39-1.72-4.06-4.18-4.06-2.85 0-4.52 2.14-4.52 4.34 0 .86.33 1.79.75 2.29a.3.3 0 0 1 .07.29c-.08.31-.25 1-.29 1.14-.04.2-.15.24-.35.14-1.3-.6-2.11-2.5-2.11-4.02 0-3.27 2.38-6.28 6.86-6.28 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.04-.55-2.38-1.19l-.65 2.47c-.23.9-.87 2.03-1.29 2.72A10 10 0 1 0 12 2Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook"><FiFacebook size={17} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/about">Sustainability</Link>
          <Link to="/contact">Careers</Link>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/collection">All Collection</Link>
          <Link to="/collection?filter=new">New Arrivals</Link>
          <Link to="/collection?filter=party">Party Wear</Link>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Shipping & Returns</Link>
          <Link to="/contact">Size Guide</Link>
          <Link to="/contact">FAQs</Link>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms & Conditions</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} PRAJE CLOSET. All rights reserved.</span>
        <span>Designed as a client prototype — demo content only.</span>
      </div>
    </footer>
  );
}
