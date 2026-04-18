import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer";

const Home = ({ cart, setCart }) => {
  return (
    <div className="homepage">
      <Navbar cart={cart} setCart={setCart} />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">🍲 Premium Quality</span>
              <h1 className="hero-title">
                Authentic Nigerian <br />
                <span className="text-green">Foodstuffs</span> & More
              </h1>
              <div className="hero-description-wrapper">
                <TypeAnimation
                  sequence={[
                    "Fresh, high-quality flours",
                    1500,
                    "Fresh, high-quality garri",
                    1500,
                    "Fresh, high-quality palm oil",
                    1500,
                    "Fresh, high-quality rice",
                    1500,
                    "Fresh, high-quality beans",
                    1500,
                    "Fresh, high-quality flours, garri, palm oil, and pantry essentials delivered straight to your doorstep. Taste the tradition.",
                    3000,
                    "",
                    200,
                  ]}
                  wrapper="p"
                  speed={40}
                  deletionSpeed={80}
                  className="hero-description"
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
              <div className="hero-buttons">
                <Link to="/shop" className="btn btn-primary">
                  Shop Now →
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Fast Delivery</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-grid">
                <div className="grid-item large">
                  <span className="food-emoji">🌾</span>
                </div>
                <div className="grid-item">
                  <span className="food-emoji">🥘</span>
                </div>
                <div className="grid-item">
                  <span className="food-emoji">🍚</span>
                </div>
                <div className="grid-item">
                  <span className="food-emoji">🫘</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get your favorite foodstuffs in 3 simple steps</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">🛍️</div>
              <h3>Browse & Select</h3>
              <p>Explore our wide range of authentic Nigerian foodstuffs and add your favorites to cart</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">💳</div>
              <h3>Place Your Order</h3>
              <p>Checkout easily via WhatsApp and confirm your delivery details with our team</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Receive your order at your doorstep within 24-48 hours, fresh and ready to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Find everything you need for your kitchen</p>
          </div>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">🌾</div>
              <h3>Flours</h3>
              <p>Bean, Yam, Poundo, Fufu, Oat, Soya</p>
              <Link to="/shop" className="category-link">
                Browse →
              </Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🥘</div>
              <h3>Garri</h3>
              <p>Ijebu Garri, Garri Oyo</p>
              <Link to="/shop" className="category-link">
                Browse →
              </Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🫒</div>
              <h3>Oils & Spices</h3>
              <p>Palm Oil, Chili Pepper, Locust Beans</p>
              <Link to="/shop" className="category-link">
                Browse →
              </Link>
            </div>
            <div className="category-card">
              <div className="category-icon">🍚</div>
              <h3>Grains</h3>
              <p>Premium Quality Rice</p>
              <Link to="/shop" className="category-link">
                Browse →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Popular Products</h2>
            <p>Most loved by our customers</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">🌾</div>
              <h4>Bean Flour</h4>
              <p className="product-price">₦2,500</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image">🥘</div>
              <h4>Ijebu Garri</h4>
              <p className="product-price">₦1,500</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image">🫒</div>
              <h4>Palm Oil</h4>
              <p className="product-price">₦2,500</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image">🍚</div>
              <h4>Premium Rice</h4>
              <p className="product-price">₦4,500</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>
          <div className="view-all">
            <Link to="/shop" className="btn btn-secondary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Souvenir Banner */}
      <section className="souvenir-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-badge">🎁 Special Offer</span>
              <h3>Foodstuff Souvenirs</h3>
              <p>
                Perfect for weddings, birthdays, and corporate events. Custom
                packages available.
              </p>
              <Link to="/contact" className="btn btn-light">
                Inquire Now →
              </Link>
            </div>
            <div className="banner-emoji">🎁🌾🥘🍚</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Bhollum Enterprise?</h2>
            <p>We deliver quality and freshness</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h4>Premium Quality</h4>
              <p>Carefully sourced from trusted local farmers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h4>Fast Delivery</h4>
              <p>Orders delivered within 24-48 hours in Lagos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Best Prices</h4>
              <p>Competitive pricing without compromising quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h4>Customer First</h4>
              <p>Dedicated support for all your questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h3>Ready to stock your pantry?</h3>
            <p>
              Get fresh, authentic Nigerian foodstuffs delivered to your door
            </p>
            <Link to="/shop" className="btn btn-primary btn-large">
              Start Shopping →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;