import React from "react";
import "./Whychoose.css"; // Import the CSS file

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <div className="why-content">
        
        {/* Left Section */}
        <div className="why-text-section">
        <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: "23px",lineHeight:'28px' }}>
  Why Choose Terabit IT as Your Mobile App Development Company
</h2>
          <p>
            Enhance your efficiency with productivity tools. Achieve more in less time with smart solutions.
          </p>
          <button className="why-pricing-btn">Request Pricing</button>
        </div>

        {/* Right Section */}
        <div className="why-features">
          <Feature imgSrc="/whychoseus/wc1.png" number="25+" text="Talented Squad" />
          <Feature imgSrc="/whychoseus/wc2.png" number="100+" text="Projects Delivered" />
          <Feature imgSrc="/whychoseus/wc3.png" number="100%" text="Client Satisfaction" />
        </div>

      </div>
    </div>
  );
};

const Feature = ({ imgSrc, number, text }) => (
  <div className="why-feature-item">
    <div className="why-icon">
      <img src={imgSrc} alt={text} />
    </div>
    <h3>{number}</h3>
    <p>{text}</p>
  </div>
);

export default WhyChooseUs;
