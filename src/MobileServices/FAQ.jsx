import React, { useState } from "react";
import "./FAQ.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default active index is 1

  const faqs = [
    { question: "How do I get started with your services?", answer: "To get started, contact our team, and we will guide you through the onboarding process." },
    {
      question: "How can I contact your support team? What are your business hours?",
      answer: "You can reach our support team via email at info@terabit or call us at +44 0000 000000. \n\n We also offer a live chat option on our website. Our business hours are Monday to Friday, 9 AM to 6 PM. For emergency support, we are available 24/7.",
    },
    { question: "What is your response time for support requests?", answer: "Our standard response time is within 24 hours during business days." },
    { question: "Do you offer remote support?", answer: "Yes, we provide remote support through various online channels." },
    { question: "What information do you need from me to start a project? Do you provide training and documentation?", answer: "We need details about your requirements and goals. Yes, we provide documentation and training." },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <p className="faq-subtext">
        Discover the transformative experiences shared by our satisfied customers. Their genuine stories highlight the remarkable results and positive changes they’ve achieved with our services.
      </p>
      <div className="faq-content">
        {/* Left Side (FAQ List) */}
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)} // Clicking changes active index
            >
              <span className="faq-icon" style={{ color: activeIndex === index ? "#007bff" : "black", height: '21px', width: '21px' }}>●</span>
              <p>{item.question}</p>
            </div>
          ))}
        </div>

        {/* Right Side (Answer Box) */}
        <div className="faq-answer-box">
          {faqs[activeIndex].answer ? (
            <div>
              <h3 className="faq-answer-title">You can reach our support</h3> 
              <p
                className="faq-answer-text"
                dangerouslySetInnerHTML={{
                  __html: faqs[activeIndex].answer.replace(/\n/g, "<br/>"),
                }}
              />
            </div>
          ) : (
            <p className="faq-placeholder">Select a question to view details.</p>
          )}
          <p className="faq-brand">
            <img src="/Staff images/logo3.png" alt="logo" style={{ height: '30px', width: '125px', marginTop: '80px', marginLeft: '400px' }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
