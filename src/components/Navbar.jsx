import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="food-navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🌾</span>
          <span className="logo-text">Bhollum</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>

        {/* Cart Icon */}
        <button className="cart-icon-btn">
          <span>🛒</span>
          <span className="cart-count">0</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
