import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Bean Flour",
      category: "flour",
      price: 2500,
      image:
        "https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Bestseller",
      description:
        "Premium quality bean flour, stone-ground for authentic taste. Perfect for moi moi and akara. Rich in protein and fiber.",
    },
    {
      id: 2,
      name: "Yam Flour",
      category: "flour",
      price: 3000,
      image:
        "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: null,
      description:
        "Finely processed yam flour for smooth, lump-free amala. Made from premium white yams, sun-dried and milled to perfection.",
    },
    {
      id: 3,
      name: "Poundo Yam Flour",
      category: "flour",
      price: 3500,
      image:
        "https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Premium",
      description:
        "Premium poundo yam flour that gives you smooth, stretchy pounded yam in minutes. No lumps, just perfect consistency every time.",
    },
    {
      id: 4,
      name: "Fufu Flour",
      category: "flour",
      price: 2800,
      image:
        "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: null,
      description:
        "Authentic fermented fufu flour. Smooth texture and traditional taste that pairs perfectly with any Nigerian soup.",
    },
    {
      id: 5,
      name: "Oat Meal Flour",
      category: "flour",
      price: 3200,
      image:
        "https://images.pexels.com/photos/1295752/pexels-photo-1295752.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Healthy",
      description:
        "100% whole grain oat flour, perfect for healthy baking and swallow. High in fiber and naturally gluten-friendly.",
    },
    {
      id: 6,
      name: "Soya Flour",
      category: "flour",
      price: 2000,
      image:
        "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: null,
      description:
        "Protein-rich soya bean flour, great for adding nutrition to your meals. Perfect for soya milk and baking.",
    },
    {
      id: 7,
      name: "Ijebu Garri",
      category: "garri",
      price: 1500,
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Bestseller",
      description:
        "Premium Ijebu garri with that signature sour taste. Crispy, fine grains perfect for drinking or eba.",
    },
    {
      id: 8,
      name: "Garri Oyo",
      category: "garri",
      price: 1200,
      image:
        "https://images.pexels.com/photos/1435909/pexels-photo-1435909.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: null,
      description:
        "Smooth Oyo garri with mild taste. Perfect for those who prefer less sour garri. Great for eba and drinking.",
    },
    {
      id: 9,
      name: "Palm Oil",
      category: "oil",
      price: 2500,
      image:
        "https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Pure",
      description:
        "100% pure red palm oil, traditionally processed. Rich in Vitamin A and perfect for all Nigerian soups and stews.",
    },
    {
      id: 10,
      name: "Chili Pepper Powder",
      category: "spice",
      price: 800,
      image:
        "https://images.pexels.com/photos/1437590/pexels-photo-1437590.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Spicy",
      description:
        "Hot and flavorful dried chili pepper powder. Perfect for adding that authentic Nigerian heat to your dishes.",
    },
    {
      id: 11,
      name: "Dried Locust Beans",
      category: "spice",
      price: 600,
      image:
        "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: null,
      description:
        "Fermented locust beans (Iru) for that authentic umami flavor. Essential for traditional Nigerian soups.",
    },
    {
      id: 12,
      name: "Premium Rice",
      category: "grain",
      price: 4500,
      image:
        "https://images.pexels.com/photos/4110258/pexels-photo-4110258.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Premium",
      description:
        "Long grain premium rice, stone-free and perfectly polished. Ideal for jollof, fried rice, and white rice.",
    },
  ];

  const categories = [
    { value: "all", label: "All Products", icon: "🛍️" },
    { value: "flour", label: "Flours", icon: "🌾" },
    { value: "garri", label: "Garri", icon: "🥘" },
    { value: "oil", label: "Oils", icon: "🫒" },
    { value: "spice", label: "Spices", icon: "🌶️" },
    { value: "grain", label: "Grains", icon: "🍚" },
  ];

  const sortOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" },
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBuyNow = (product) => {
    const message =
      `Hello, I want to buy ${product.name}%0A%0A` +
      `Price: ${formatPrice(product.price)}%0A` +
      `Category: ${product.category}%0A%0A` +
      `Please confirm availability and total cost including delivery.`;

    const phoneNumber = "2348166694371"; // Your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-page">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-success bg-opacity-10 py-4 py-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">Our Products</h1>
              <p className="lead text-secondary mb-0">
                Fresh, authentic Nigerian foodstuffs for your kitchen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-4 py-md-5">
        <div className="container">
          {/* Filters Bar */}
          <div className="row g-3 mb-4">
            {/* Search */}
            <div className="col-12 col-md-5 col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  🔍
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-12 col-md-7 col-lg-5">
              <div className="d-flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    className={`btn btn-sm ${
                      selectedCategory === cat.value
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    <span className="me-1">{cat.icon}</span>
                    <span className="d-none d-sm-inline">{cat.label}</span>
                    <span className="d-inline d-sm-none">{cat.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="col-12 col-lg-3">
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="row mb-4">
            <div className="col-12">
              <p className="text-secondary mb-0">
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
                {selectedCategory !== "all" &&
                  ` in ${categories.find((c) => c.value === selectedCategory)?.label}`}
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-6 col-md-4 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm product-card">
                    {product.badge && (
                      <span className="badge bg-warning position-absolute top-0 start-0 m-3">
                        {product.badge}
                      </span>
                    )}
                    <div className="product-image-wrapper">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x300/f0fdf4/16a34a?text=🌾";
                        }}
                      />
                    </div>
                    <div className="card-body text-center p-3 p-md-4">
                      <h5 className="card-title fw-bold mb-2">
                        {product.name}
                      </h5>
                      <p className="text-secondary small text-capitalize mb-2">
                        {product.category}
                      </p>
                      <p className="text-success fw-bold fs-5 mb-3">
                        {formatPrice(product.price)}
                      </p>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-outline-success flex-grow-1"
                          onClick={() => handleViewProduct(product)}
                        >
                          <span className="me-1">👁️</span>
                          View
                        </button>
                        <button
                          className="btn btn-success flex-grow-1"
                          onClick={() => handleBuyNow(product)}
                        >
                          <span className="me-1">🛒</span>
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="text-center py-5">
                  <div className="display-1 mb-3">🔍</div>
                  <h4>No products found</h4>
                  <p className="text-secondary mb-4">
                    Try adjusting your search or filter to find what you're
                    looking for.
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchTerm("");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header border-0 pb-0">
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body pt-0 pb-4 px-4">
                <div className="text-center">
                  <div className="modal-image-wrapper mb-3">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="modal-image"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300/f0fdf4/16a34a?text=🌾";
                      }}
                    />
                  </div>
                  {selectedProduct.badge && (
                    <span className="badge bg-warning mb-2">
                      {selectedProduct.badge}
                    </span>
                  )}
                  <h3 className="fw-bold mb-2">{selectedProduct.name}</h3>
                  <p className="text-secondary text-capitalize mb-2">
                    {selectedProduct.category}
                  </p>
                  <p className="text-success fw-bold fs-3 mb-3">
                    {formatPrice(selectedProduct.price)}
                  </p>
                  <p className="text-secondary mb-4">
                    {selectedProduct.description}
                  </p>
                  <button
                    className="btn btn-success btn-lg w-100"
                    onClick={() => {
                      handleBuyNow(selectedProduct);
                      closeModal();
                    }}
                  >
                    <span className="me-2">🛒</span>
                    Buy Now via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Order Banner */}
      <section className="bg-light py-4 py-md-5 mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 text-center text-md-start mb-3 mb-md-0">
              <h3 className="fw-bold mb-2">
                <span className="me-2">📦</span>
                Need Bulk Orders?
              </h3>
              <p className="text-secondary mb-0">
                Perfect for events, restaurants, or stocking up. Get special
                pricing on large quantities.
              </p>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <button
                className="btn btn-success btn-lg"
                onClick={() => {
                  const message = `Hello, I'm interested in bulk ordering. Please send me more information about bulk pricing and minimum order quantities.`;
                  const phoneNumber = "2348166694371";
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${message}`,
                    "_blank",
                  );
                }}
              >
                Contact for Bulk Pricing →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .product-card {
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .product-image-wrapper {
          height: 180px;
          overflow: hidden;
          background: #f8f9fa;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .modal-image-wrapper {
          height: 250px;
          overflow: hidden;
          border-radius: 12px;
          background: #f8f9fa;
        }
        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .badge {
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.35rem 0.65rem;
          z-index: 1;
        }
        .modal.show {
          display: block;
        }
        @media (max-width: 576px) {
          .product-card .card-body {
            padding: 1rem !important;
          }
          .product-image-wrapper {
            height: 140px;
          }
          .modal-image-wrapper {
            height: 200px;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Shop;
