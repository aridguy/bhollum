import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for reaching out! We will get back to you within 24 hours.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <Navbar />
      <section className="bg-success bg-opacity-10 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
              <p className="lead text-secondary mb-0">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info Cards */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4">
                {/* Card 1 */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className="display-3 mb-3">📞</div>
                    <h5 className="card-title fw-bold mb-3">Call Us</h5>
                    <p className="card-text text-secondary mb-2">
                      Monday - Saturday
                    </p>
                    <p className="card-text text-secondary mb-2">
                      8:00 AM - 6:00 PM
                    </p>
                    <a
                      href="tel:+234XXXXXXXXXX"
                      className="text-success fw-bold text-decoration-none fs-5"
                    >
                      +234 816 6694 371
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className="display-3 mb-3">📧</div>
                    <h5 className="card-title fw-bold mb-3">Email Us</h5>
                    <p className="card-text text-secondary mb-2">
                      We'll respond within 24 hours
                    </p>
                    <a
                      href="mailto:hello@bhollum.com"
                      className="text-success fw-bold text-decoration-none"
                    >
                      bhollumenterprise@gmail.com
                    </a>
                    <p className="card-text text-secondary mt-2">
                      bhollumenterprise@gmail.com
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 text-center">
                    <div className="display-3 mb-3">📍</div>
                    <h5 className="card-title fw-bold mb-3">Visit Us</h5>
                    <p className="card-text text-secondary mb-1">
                      123 Market Street
                    </p>
                    <p className="card-text text-secondary mb-1">
                      Ikeja, Lagos
                    </p>
                    <p className="card-text text-secondary">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="fw-bold mb-2">Send us a Message</h3>
                  <p className="text-secondary mb-4">
                    Fill out the form below and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label
                          htmlFor="name"
                          className="form-label fw-semibold"
                        >
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="email"
                          className="form-label fw-semibold"
                        >
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="phone"
                          className="form-label fw-semibold"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>

                      <div className="col-md-6">
                        <label
                          htmlFor="subject"
                          className="form-label fw-semibold"
                        >
                          Subject <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="order">Order Inquiry</option>
                          <option value="product">Product Question</option>
                          <option value="souvenir">Souvenir Package</option>
                          <option value="delivery">Delivery Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label
                          htmlFor="message"
                          className="form-label fw-semibold"
                        >
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>

                      <div className="col-12 mt-3">
                        <button
                          type="submit"
                          className="btn btn-success btn-lg px-5"
                        >
                          Send Message →
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-bold mb-3">Frequently Asked Questions</h3>
              <p className="text-secondary mb-4">
                Find quick answers to common questions about our products and
                services.
              </p>
              <Link to="/faq" className="btn btn-outline-success btn-lg">
                Visit FAQ Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
