import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";
import { products } from "../data/products.js";
import "./Navbar.css";
import logo from "../assets/logo/logo.jpg"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/collection?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  const suggestions = query
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="announcement-bar">
        FREE SHIPPING ON ORDERS ABOVE &#8377;1999
      </div>
      <div className="navbar container">
        <button
          className="icon-btn nav-hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={20} />
        </button>

        <Link to="/" className="brand-logo">
        <img src={logo} alt="logo" className="logo-img" />
          PRAJE CLOSET
        </Link>
        {/* <div
                className="brand-logo"
            >
                <img
                    src={logo}
                    alt="PRAJE CLOSET Logo"
                />PRAJE CLOSET
            </div> */}

        <nav className="nav-center">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/collection" className="nav-link">
            Collection
          </NavLink>
          <NavLink to="/collection?filter=new" className="nav-link">
            New Arrivals
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </nav>

        <div className="nav-right">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <FiSearch size={19} />
          </button>
          <Link to="/collection" className="icon-btn nav-desktop-only" aria-label="Wishlist">
            <FiHeart size={19} />
          </Link>
          <button className="icon-btn nav-desktop-only" aria-label="Account">
            <FiUser size={19} />
          </button>
          <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
            <FiShoppingBag size={19} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="search-panel">
          <form className="container search-form" onSubmit={handleSearch}>
            <FiSearch size={18} />
            <input
              autoFocus
              type="text"
              placeholder="Search for dresses, tops, co-ords…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="button"
              className="icon-btn"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <FiX size={18} />
            </button>
          </form>
          {suggestions.length > 0 && (
            <div className="container search-suggestions">
              {suggestions.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="search-suggestion"
                  onClick={() => setSearchOpen(false)}
                >
                  <img src={p.image} alt="" />
                  <span>{p.name}</span>
                  <span className="suggestion-price">₹{p.price.toLocaleString("en-IN")}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-head">
          <span className="brand-logo">LUNÉA</span>
          <button
            className="icon-btn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>
        <nav className="mobile-drawer-links">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/collection" onClick={() => setMenuOpen(false)}>Collection</NavLink>
          <NavLink to="/collection?filter=new" onClick={() => setMenuOpen(false)}>New Arrivals</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
      {menuOpen && (
        <button
          className="drawer-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
