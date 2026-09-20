import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-meta">
          Size: {item.size} &nbsp;•&nbsp; Color: {item.color}
        </p>
        <p className="cart-item-price">₹{item.price.toLocaleString("en-IN")}</p>

        <div className="cart-item-row">
          <div className="qty-control">
            <button
              onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
              aria-label="Decrease quantity"
              disabled={item.quantity <= 1}
            >
              <FiMinus size={13} />
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <FiPlus size={13} />
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.lineId)}
          >
            <FiTrash2 size={14} /> Remove
          </button>
        </div>
      </div>

      <div className="cart-item-total">
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </div>
    </div>
  );
}
