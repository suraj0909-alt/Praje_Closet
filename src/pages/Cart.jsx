import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import CartItem from "../components/CartItem.jsx";
import Button from "../components/Button.jsx";
import { useCart } from "../context/CartContext.jsx";
import "./Cart.css";

export default function Cart() {
  const { items, subtotal, clearCart } = useCart();
  const [promo, setPromo] = useState("");
  const [checkedOut, setCheckedOut] = useState(false);

  const discount = subtotal > 5000 ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 1999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  const handleCheckout = () => {
    setCheckedOut(true);
    clearCart();
  };

  if (checkedOut) {
    return (
      <main className="page cart-page">
        <div className="container empty-cart fade-in">
          <div className="empty-icon">✓</div>
          <h2>This is a demo checkout</h2>
          <p>
            In the live site, this step would hand off to payment. Your cart
            has been cleared to simulate a completed order.
          </p>
          <Button to="/collection">Continue Shopping</Button>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="page cart-page">
        <div className="container empty-cart fade-in">
          <FiShoppingBag size={40} />
          <h2>Your bag is empty</h2>
          <p>Looks like you haven't added anything to your bag yet.</p>
          <Button to="/collection">Continue Shopping</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="page cart-page">
      <div className="container">
        <h1 className="section-title" style={{ marginBottom: 32 }}>
          Shopping Bag
        </h1>

        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.lineId} item={item} />
            ))}
            <Link to="/collection" className="link-underline continue-link">
              ← Continue Shopping
            </Link>
          </div>

          <aside className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            {discount > 0 && (
              <div className="summary-row discount-row">
                <span>Discount (10%)</span>
                <span>−₹{discount.toLocaleString("en-IN")}</span>
              </div>
            )}
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>

            <div className="promo-row">
              <input
                type="text"
                placeholder="Promo code"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
              <button className="btn btn-secondary">Apply</button>
            </div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>

            <Button className="btn-block" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </aside>
        </div>
      </div>
    </main>
  );
}
