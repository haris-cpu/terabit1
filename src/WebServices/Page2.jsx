import React, { useState, useEffect } from "react";
import "./Page2.css";

const WebAppServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/wadev/W1.png",
    "/wadev/W2.png",
    "/wadev/W3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="web-services">
      <div className="web-text-container">
        <h2 className="web-title">
          Our Custom Web Application <span>Development Services</span>
        </h2>
        <p className="web-description">
          We provide end-to-end web app development services, including UI/UX design, front-end and back-end development, security integration, and deployment.
        </p>
        <p className="web-highlight">
          Our key Web App development services include:
        </p>

        <div className="web-service-list">
          <div className="web-service-item">
            <span className="web-service-icon"><img src="/webimg/p2.png" alt="W1" /></span>
            <div>
              <h3 className="web-service-title">Full Stack Development</h3>
              <p className="web-service-text">End-to-end development with modern front-end and back-end technologies.</p>
            </div>
          </div>
          <div className="web-service-item">
            <span className="web-service-icon"><img src="/webimg/p22.png" alt="W2" /></span>
            <div>
              <h3 className="web-service-title">Progressive Web Apps (PWAs)</h3>
              <p className="web-service-text">Build high-performance web apps with offline capabilities.</p>
            </div>
          </div>
          <div className="web-service-item">
            <span className="web-service-icon"><img src="/webimg/p23.png" alt="W3" /></span>
            <div>
              <h3 className="web-service-title">E-commerce Solutions</h3>
              <p className="web-service-text">Develop secure and scalable online stores with seamless user experience.</p>
            </div>
          </div>
          <div className="web-service-item">
            <span className="web-service-icon"><img src="/webimg/p23.png" alt="W3" /></span>
            <div>
              <h3 className="web-service-title">E-commerce Solutions</h3>
              <p className="web-service-text">Develop secure and scalable online stores with seamless user experience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="web-image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Web Mockup ${index + 1}`}
            className={`web-mockup ${index === currentIndex ? "visible" : "hidden"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default WebAppServices;
