import React from "react";
import "./Guarente.css";

const features = [
  {
    title: "Cost Efficiency",
    description:
      "Access top-tier talent at competitive rates, delivering high-quality solutions while optimizing costs, improving efficiency, and maximizing value.",
    icon: "/Guarente/g1.png", // Update with correct image path
  },
  {
    title: "Compatible Time Zones",
    description:
      "Enable real-time collaboration with the agility needed for rapid software iterations, reducing delays and ensuring quick turnover.",
    icon: "/Guarente/g.png",
  },
  {
    title: "Complimentary 3-Month Support",
    description:
      "Enjoy seamless service with our 3-month free maintenance to ensure everything works perfectly.",
    icon: "/Guarente/g3.png",
  },
  {
    title: "Collaborative Development",
    description:
      "Regular, direct meetings with the team to ensure alignment and quick solutions.",
    icon: "/Guarente/g4.png",
  },
];

const GuaranteedGains = () => {
  return (
    <div className="guaranteed-gains">
      <h2 className="title1">Guaranteed Gains</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} className="icon-img" />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuaranteedGains;