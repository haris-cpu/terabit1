import React from "react";
import "./Tailored.css";

const CustomFeaturesSection = () => {
  const features = [
    {
      image: "/tailored/t1.png",
      title: "Tailored Solutions",
      points: [
        "Goal-driven design",
        "In-depth business analysis",
        "Industry-specific solutions",
      ],
    },
    {
      image: "/tailored/t2.png",
      title: "Timely Delivery",
      points: [
        "Streamlined planning",
        "Adherence to deadlines",
        "Resource optimization",
      ],
    },
    {
      image: "/tailored/t3.png",
      title: "Ongoing Support",
      points: [
        "3-month post-launch maintenance",
        "Regular updates & issue resolution",
        "Clear communication across time zones",
      ],
    },
  ];

  return (
    <div className="custom-features-container">
      {features.map((feature, index) => (
        <div className="custom-feature-card" key={index}>
          {/* Show arrow only for the center card */}
          {index === 1 && (
            <img
              src="/tailored/arrow.png"
              alt="Arrow"
              className="custom-arrow-image"
            />
          )}

          {/* Feature image */}
          <img
            src={feature.image}
            alt={feature.title}
            className="custom-feature-image"
          />

          {/* A2 image below each icon */}
          <img
            src="/tailored/a2.png"
            alt="A2"
            className="custom-a2-image"
          />

          <h3 className="custom-feature-title">{feature.title}</h3>
          <ul className="custom-feature-list">
            {feature.points.map((point, i) => (
              <li key={i} className="custom-feature-point">
              <img src="/tailored/s1.png" alt="Checkmark" className="custom-checkmark" />
              {point}
            </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CustomFeaturesSection;
