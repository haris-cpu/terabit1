import React, { useState, useEffect } from "react";
import "./MobileAppServices.css";

const MobileAppServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/madev/M5.png",
    "/madev/moi.png",
    "/madev/bindo.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mobile-services">
      {/* Left Side - Text Content */}
      <div className="text-container">
        <h2 className="title">
          Our Custom Mobile App Development <span>Services</span>
        </h2>
        <p className="description">
          We offer full-cycle custom mobile application development service, from conceptualization and UX design
          to front-end development, back-end programming, testing, and launch.
        </p>
        <p style={{ 
    fontFamily: "Proxima Nova", 
    fontWeight: 700, 
    fontSize: "16px", 
    lineHeight: "24px", 
    letterSpacing: "0%" ,
    marginRight:'250px',
    
}}   className="haris1">
        Our key Mobile App  development services include:
        </p>

        <div className="service-list">
          <div className="service-item">
            <span className="service-icon"><img src="/madev/M1.png" alt="M1" /></span>
            <div>
              <h3 className="service-title">iOS App Development</h3>
              <p className="service-text">Maximize revenue and drive growth with our comprehensive sales solutions.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-icon"><img src="/madev/M2.png" alt="M2" /></span>
            <div>
              <h3 className="service-title">Mobile App Marketing</h3>
              <p className="service-text">Maximize revenue and drive growth with our comprehensive sales solutions.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-icon"><img src="/madev/M1.png" alt="M3" /></span>
            <div>
              <h3 className="service-title">App Design</h3>
              <p className="service-text">Maximize revenue and drive growth with our comprehensive sales solutions.</p>
            </div>
          </div>
          <div className="service-item">
            <span className="service-icon"><img src="/madev/m4.png" alt="M4" /></span>
            <div>
              <h3 className="service-title">Cross-Platform Development</h3>
              <p className="service-text">Maximize revenue and drive growth with our comprehensive sales solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Mobile Mockup with Auto-Scroll */}
      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Mockup ${index + 1}`}
            className={`mobile-mockup ${index === currentIndex ? "visible" : "hidden"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileAppServices;
