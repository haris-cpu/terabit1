import React, { useEffect, useState } from "react";
import "./Devprocess.css"; // Importing the external CSS file

const DevelopmentProcess = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Project Planning & Strategy",
      points: ["Defining a roadmap", "Assigning roles and responsibilities", "Setting up environment"],
      img: "/Devprocess/img1.png",
    },
    {
      id: "02",
      title: "Analysis & Documentation",
      points: ["Gathering requirements", "Generating backlog", "Preparing architecture"],
      img: "/Devprocess/img2.png",
    },
    {
      id: "03",
      title: "Design & Prototyping",
      points: ["Creating user flows", "Low fidelity designs", "High fidelity prototypes"],
      img: "/Devprocess/img3.png",
    },
    {
      id: "04",
      title: "Implementation",
      points: ["Front end", "Back end", "API integration"],
      img: "/Devprocess/img1.png",
    },
    {
      id: "05",
      title: "Testing & QA",
      points: ["Unit testing", "Integration testing", "Bug fixes"],
      img: "/Devprocess/qa.png",
    },
    {
      id: "06",
      title: "Deployment",
      points: ["CI/CD setup", "Production release", "Monitoring"],
      img: "/Devprocess/dep.png",
    },
    {
      id: "07",
      title: "Maintenance & Support",
      points: ["Performance monitoring", "Feature updates", "User feedback"],
      img: "/Devprocess/dep.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000); // Delay visibility after 2 seconds
  }, []);

  return (
    <div className="development-process">
      <h2 className="heading">
        Our Development <span>Process</span>
      </h2>
      <div className="scroll-wrapper">
        <div className="scroll-container">
          {[...steps, ...steps].map((step, index) => ( // Duplicate steps for infinite scroll
            <div key={index} className={`process-step ${index >= 4 && !visible ? "hidden" : ""}`}>
              <h3 className="step-number">{step.id}</h3>
              <h4 className="step-title">{step.title}</h4>
              <ul className="step-points">
                {step.points.map((point, i) => (
                  <li key={i} className="point">🔹 {point}</li>
                ))}
              </ul>
              <img src={step.img} alt={step.title} className="step-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
