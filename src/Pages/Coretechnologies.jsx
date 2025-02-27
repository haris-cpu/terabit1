import React, { useState } from "react";
import "./CoreTechnologies.css";

const technologies = {
  Frontend: [
    { name: "Flutter", img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Angular", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: ".NET Core", img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" }
  ],
  Backend: [
    { name: "Vue.js", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "Django", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
    { name: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Swift", img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
    { name: "MongoDB", img: "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png" }
  ],
  Mobile: [
    { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Android", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
    { name: "React Native", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Ionic", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" },
    
  ]
};

const CoreTechnologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="core-tech-container">
      <h2 className="core-tech-title">Our Core Technologies</h2>

      {/* ✅ Description stays constant */}
      <p className="core-tech-description">
        Terabit IT works under various modern technologies for effective, scalable, and future-proof custom software development.
      </p>

      {/* Category Tabs */}
      <div className="core-tech-tabs">
        {Object.keys(technologies).map((category) => (
          <button
            key={category}
            className={`core-tech-tab ${activeTab === category ? "core-tech-active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Content: Only this part updates */}
      <div className="core-tech-icons-container">
        {technologies[activeTab].map((tech) => (
          <div key={tech.name} className="core-tech-card">
            <img src={tech.img} alt={tech.name} className="core-tech-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTechnologies;
