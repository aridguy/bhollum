import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createClient } from "contentful";

const Shop = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // Fetch products from Contentful
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const client = createClient({
          space: "qn7x3jiwb3kl",
          accessToken: "8R8SvvkJkEpQgEu8u6ci6rR4uJs2_dx8IMlbmbQ3jyo",
        });

        const response = await client.getEntries({
          content_type: "product",
        });

        const fetchedProducts = response.items.map((item) => ({
          id: item.sys.id,
          name: item.fields.names || "No Name",
          category: item.fields.category || "flour",
          price: item.fields.price || 0,
          image: item.fields.image?.fields?.file?.url || "https://via.placeholder.com/400x300/f0fdf4/16a34a?text=🌾",
          badge: item.fields.badge || null,
          description: item.fields.description || "No description available.",
        }));

        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const name = String(product.name || "").toLowerCase();
      const search = searchTerm.toLowerCase();
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = name.includes(search);
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "name") return String(a.name).localeCompare(String(b.name));
      if (sortBy === "price-asc") return (a.price || 0) - (b.price || 0);
      if (sortBy === "price-desc") return (b.price || 0) - (a.price || 0);
      return 0;
    });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price || 0);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getImageUrl = (url) => {
    if (!url) return "https://via.placeholder.com/400x300/f0fdf4/16a34a?text=🌾";
    return url.startsWith("//") ? `https:${url}` : url;
  };

  if (loading) {
    return (
      <div className="shop-page">
        <Navbar cart={cart} setCart={setCart} />
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
          <div className="text-center">
            <div className="spinner-border text-success mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-secondary">Loading fresh products...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="shop-page">
      <Navbar cart={cart} setCart={setCart} />

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
          {/* Error Message */}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          {/* Filters Bar */}
          <div className="row g-3 mb-4">
            {/* Search */}
            <div className="col-12 col-md-5 col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">🔍</span>
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
                    className={`btn btn-sm ${selectedCategory === cat.value ? "btn-success" : "btn-outline-success"}`}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    <span className="me-1">{cat.icon}</span>
                    <span className="d-none d-sm-inline">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="col-12 col-lg-3">
              <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="row mb-4">
            <div className="col-12">
              <p className="text-secondary mb-0">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
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
                        src={getImageUrl(product.image)}
                        alt={product.name}
                        className="product-image"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x300/f0fdf4/16a34a?text=🌾";
                        }}
                      />
                    </div>
                    <div className="card-body text-center p-3 p-md-4">
                      <h5 className="card-title fw-bold mb-2">{product.name}</h5>
                      <p className="text-secondary small text-capitalize mb-2">{product.category}</p>
                      <p className="text-success fw-bold fs-5 mb-3">{formatPrice(product.price)}</p>
                      <div className="d-flex gap-2">
                        <button 
                          className="btn btn-outline-success flex-grow-1" 
                          onClick={() => handleViewProduct(product)}
                        >
                          <span className="me-1">👁️</span>View
                        </button>
                        <button 
                          className="btn btn-success flex-grow-1" 
                          onClick={() => addToCart(product)}
                        >
                          <span className="me-1">🛒</span>Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="display-1 mb-3">🔍</div>
                <h4>No products found</h4>
                <button className="btn btn-success" onClick={() => { setSelectedCategory("all"); setSearchTerm(""); }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header border-0 pb-0">
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body pt-0 pb-4 px-4 text-center">
                <div className="modal-image-wrapper mb-3">
                  <img src={getImageUrl(selectedProduct.image)} alt={selectedProduct.name} className="modal-image" />
                </div>
                {selectedProduct.badge && <span className="badge bg-warning mb-2">{selectedProduct.badge}</span>}
                <h3 className="fw-bold mb-2">{selectedProduct.name}</h3>
                <p className="text-secondary text-capitalize mb-2">{selectedProduct.category}</p>
                <p className="text-success fw-bold fs-3 mb-3">{formatPrice(selectedProduct.price)}</p>
                <p className="text-secondary mb-4">{selectedProduct.description}</p>
                <button 
                  className="btn btn-success btn-lg w-100" 
                  onClick={() => { addToCart(selectedProduct); closeModal(); }}
                >
                  <span className="me-2">🛒</span>Add to Cart
                </button>
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
              <h3 className="fw-bold mb-2"><span className="me-2">📦</span>Need Bulk Orders?</h3>
              <p className="text-secondary mb-0">Perfect for events, restaurants, or stocking up.</p>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <button className="btn btn-success btn-lg" onClick={() => {
                window.open(`https://wa.me/2348166694371?text=Hello, I'm interested in bulk ordering.`, "_blank");
              }}>
                Contact for Bulk Pricing →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .product-card { transition: all 0.3s ease; overflow: hidden; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important; }
        .product-image-wrapper { height: 180px; overflow: hidden; background: #f8f9fa; }
        .product-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .product-card:hover .product-image { transform: scale(1.05); }
        .modal-image-wrapper { height: 250px; overflow: hidden; border-radius: 12px; background: #f8f9fa; }
        .modal-image { width: 100%; height: 100%; object-fit: cover; }
        .badge { font-size: 0.7rem; font-weight: 500; padding: 0.35rem 0.65rem; z-index: 1; }
        .modal.show { display: block; }
        @media (max-width: 576px) {
          .product-image-wrapper { height: 140px; }
          .modal-image-wrapper { height: 200px; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Shop;