import React from "react";
import "./Consultation.css";

const consultations = [
  {
    title: "Rides & delivery Mobile App",
    target: "United State",
    thumbnail: "/Consultationimages/pg.png",
  },
  {
    title: "Rides & delivery Mobile App",
    target: "United State",
    thumbnail: "/Consultationimages/pg.png",
  },
  {
    title: "Rides & delivery Mobile App",
    target: "United State",
    thumbnail: "/Consultationimages/pg.png",
  },
];

const Consultations = () => {
  return (
    <section className="consultations-container">
      <h2 className="consultations-title">Watch Our App Consultations</h2>
      <div className="consultations-grid">
        {consultations.map((consult, index) => (
          <article key={index} className="consultation-card">
            <img src={consult.thumbnail} alt="Consultation Thumbnail" className="consultation-image" />
            <div className="consultation-content">
              <h3  className="haris">{consult.title }</h3>
              <p className="target-text">
                <strong style={{position:'relative',bottom:'10px'}}>Target Audience</strong> <br />
                <img src="/Consultationimages/flag.png" alt="USA Flag" className="flag-icon" /> {consult.target}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Consultations;
