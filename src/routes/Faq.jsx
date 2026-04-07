import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Faq = () => {
  // const [openIndex, setOpenIndex] = useState(0);

  const faqCategories = [
    {
      category: "Orders & Delivery",
      icon: "🚚",
      questions: [
        {
          question: "How long does delivery take?",
          answer: "Delivery within Lagos takes 24-48 hours. For other states in Nigeria, delivery takes 3-5 business days depending on location."
        },
        {
          question: "How much is delivery?",
          answer: "Delivery within Lagos is ₦1,000 - ₦1,500. Nationwide delivery starts from ₦2,000. Orders over ₦50,000 qualify for free delivery!"
        },
        {
          question: "Do you deliver nationwide?",
          answer: "Yes! We deliver to all 36 states in Nigeria including the FCT."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, once your order is shipped, you'll receive a tracking number via SMS and email to monitor your delivery status."
        }
      ]
    },
    {
      category: "Products & Quality",
      icon: "🌾",
      questions: [
        {
          question: "Are your products fresh?",
          answer: "Absolutely! All our products are sourced directly from trusted local farmers and suppliers. We ensure everything is freshly processed and packaged."
        },
        {
          question: "How should I store the flours and garri?",
          answer: "Store in a cool, dry place in an airtight container. Our products come sealed for freshness and can last 3-6 months when stored properly."
        },
        {
          question: "Are your products organic?",
          answer: "We prioritize quality and work with farmers who use minimal processing. While not certified organic, our products are naturally grown and processed."
        },
        {
          question: "Do you offer souvenir packages?",
          answer: "Yes! We offer customized foodstuff souvenirs for weddings, birthdays, corporate events, and special occasions. Contact us for bulk pricing and customization options."
        }
      ]
    },
    {
      category: "Payments & Returns",
      icon: "💳",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, debit/credit cards, and cash on delivery (Lagos only). All online payments are secure and encrypted."
        },
        {
          question: "Is cash on delivery available?",
          answer: "Yes, cash on delivery is available for orders within Lagos. For nationwide deliveries, we require prepayment via transfer or card."
        },
        {
          question: "What is your return policy?",
          answer: "If you receive damaged or incorrect items, please contact us within 24 hours of delivery with photo evidence. We'll arrange a replacement or refund."
        },
        {
          question: "Can I cancel my order?",
          answer: "Orders can be cancelled within 2 hours of placement. After that, please contact our customer service team for assistance."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-success bg-opacity-10 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">Frequently Asked Questions</h1>
              <p className="lead text-secondary mb-0">
                Everything you need to know about Bhollum Enterprise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-5">
        <div className="container">
          
          {/* Quick Links */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {faqCategories.map((cat, idx) => (
                  <a 
                    key={idx}
                    href={`#category-${idx}`}
                    className="btn btn-outline-success"
                  >
                    <span className="me-2">{cat.icon}</span>
                    {cat.category}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="row g-4">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} id={`category-${catIndex}`} className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0 pt-4 pb-0">
                    <h3 className="fw-bold mb-0">
                      <span className="me-3">{category.icon}</span>
                      {category.category}
                    </h3>
                  </div>
                  <div className="card-body p-4">
                    <div className="accordion" id={`accordion-${catIndex}`}>
                      {category.questions.map((item, qIndex) => {
                        const accordionId = `collapse-${catIndex}-${qIndex}`;
                        const headingId = `heading-${catIndex}-${qIndex}`;
                        
                        return (
                          <div className="accordion-item border-0 mb-3" key={qIndex}>
                            <h2 className="accordion-header" id={headingId}>
                              <button
                                className={`accordion-button ${qIndex === 0 && catIndex === 0 ? '' : 'collapsed'} bg-light rounded-3`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${accordionId}`}
                                aria-expanded={qIndex === 0 && catIndex === 0 ? 'true' : 'false'}
                                aria-controls={accordionId}
                              >
                                <span className="fw-semibold">{item.question}</span>
                              </button>
                            </h2>
                            <div
                              id={accordionId}
                              className={`accordion-collapse collapse ${qIndex === 0 && catIndex === 0 ? 'show' : ''}`}
                              aria-labelledby={headingId}
                              data-bs-parent={`#accordion-${catIndex}`}
                            >
                              <div className="accordion-body text-secondary pt-3">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="card border-0 shadow-sm bg-success bg-opacity-10">
                <div className="card-body p-5">
                  <div className="display-1 mb-3">💬</div>
                  <h3 className="fw-bold mb-3">Still have questions?</h3>
                  <p className="text-secondary mb-4">
                    Can't find the answer you're looking for? We're here to help!
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/contact" className="btn btn-success btn-lg px-4">
                      Contact Us →
                    </Link>
                    <a href="tel:+234 816 6694 371" className="btn btn-outline-success btn-lg px-4">
                      <span className="me-2">📞</span>
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-3">
                <div className="display-6 mb-2">⏰</div>
                <h6 className="fw-bold">Business Hours</h6>
                <p className="text-secondary small mb-0">Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-secondary small">Sunday: Closed</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3">
                <div className="display-6 mb-2">📞</div>
                <h6 className="fw-bold">Customer Support</h6>
                <p className="text-secondary small mb-0">+234 816 6694 371</p>
                <p className="text-secondary small">bhollumenterprise@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3">
                <div className="display-6 mb-2">💬</div>
                <h6 className="fw-bold">Response Time</h6>
                <p className="text-secondary small mb-0">We respond to all inquiries</p>
                <p className="text-secondary small">within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Faq;