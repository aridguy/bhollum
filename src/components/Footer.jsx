import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          
          {/* Brand Column */}
          <div className="col-md-5">
            <Link to="/" className="d-flex align-items-center gap-2 mb-3 text-decoration-none">
              <span className="fs-3">🌾</span>
              <span className="fs-4 fw-bold text-white">Bhollum Enterprise</span>
            </Link>
            <p className="small mb-0">
              Authentic Nigerian foodstuffs delivered straight to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/shop" className="text-white-50 text-decoration-none small hover-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white-50 text-decoration-none small hover-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white-50 text-decoration-none small hover-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="text-white mb-3">Get in Touch</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li className="small">
                <span className="me-2">📞</span> +234 816 6694 371
              </li>
              <li className="small">
                <span className="me-2">📧</span> bhollumenterprise@gmail.com
              </li>
              <li className="small">
                <span className="me-2">📍</span> Lagos, Nigeria
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-4 bg-secondary" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} Bhollum Enterprise. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Simple hover effect style */}
      <style>{`
        .hover-link:hover {
          color: #48bb78 !important;
          transition: color 0.2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;