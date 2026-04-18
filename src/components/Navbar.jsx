import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart = [], setCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getCartTotal = () => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    if (!cart || cart.length === 0) return;

    let message = `🛒 *NEW ORDER*%0A%0A`;
    message += `*Customer Order Details:*%0A%0A`;

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*%0A`;
      message += `   └ Quantity: ${item.quantity}%0A`;
      message += `   └ Unit Price: ${formatPrice(item.price)}%0A`;
      message += `   └ Subtotal: ${formatPrice(item.price * item.quantity)}%0A%0A`;
    });

    message += `%0A━━━━━━━━━━━━━━━━━━━━%0A`;
    message += `*TOTAL: ${formatPrice(getCartTotal())}*%0A`;
    message += `━━━━━━━━━━━━━━━━━━━━%0A%0A`;
    message += `Please confirm availability and provide delivery cost. Thank you! 🙏`;

    const phoneNumber = "2348166694371";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <nav className="food-navbar">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🌾</span>
            <span className="logo-text">Bhollum</span>
          </Link>

          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </ul>

          <button className="cart-icon-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
            <span>🛒</span>
            {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
          </button>

          <button
            className={`mobile-toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            <li><NavLink to="/faq" onClick={() => setIsOpen(false)}>FAQ</NavLink></li>
          </ul>
        </div>
      </nav>

      {isCartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
          <div className="cart-dropdown">
            <div className="cart-header">
              <h4>
                <span className="me-2">🛒</span>
                Your Cart
                {cart && cart.length > 0 && <span className="cart-badge">{getCartCount()} items</span>}
              </h4>
              <button className="cart-close" onClick={() => setIsCartOpen(false)}>✕</button>
            </div>

            <div className="cart-items">
              {!cart || cart.length === 0 ? (
                <div className="cart-empty">
                  <span className="empty-icon">🛒</span>
                  <p>Your cart is empty</p>
                  <button className="btn-shop" onClick={() => setIsCartOpen(false)}>
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-image">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/60/f0fdf4/16a34a?text=🌾";
                          }}
                        />
                      </div>
                      <div className="cart-item-details">
                        <div className="cart-item-header">
                          <h5>{item.name}</h5>
                          <button className="btn-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                        </div>
                        <p className="cart-item-price">{formatPrice(item.price)}</p>
                        <div className="cart-item-actions">
                          <div className="quantity-control">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                          <p className="cart-item-subtotal">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="cart-footer">
                    <div className="cart-total">
                      <span>Total:</span>
                      <span>{formatPrice(getCartTotal())}</span>
                    </div>
                    <button className="btn-checkout" onClick={handleCheckout}>
                      Checkout via WhatsApp →
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;