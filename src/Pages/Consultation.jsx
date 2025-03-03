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
              <h3  style={{
  fontFamily: "Outfit, sans-serif", 
  fontWeight: 600, 
  fontSize: "25.01px", 
  lineHeight: "31.51px", 
  letterSpacing: "0%",
  height:'18px',
  width:'311px',
  position:'relative',
  bottom:'15px'
}}>{consult.title }</h3>
              <p >
                <strong style={{position:'relative',bottom:'10px', fontFamily: "Proxima Nova, sans-serif",fontWeight:'700',fontSize:'16.67px',lineHeight:'27.1px',letterSpacing:'0%',width:"124px",height:"11px",color:'#424242'}}>Target Audience</strong> <br />
                <img src="/Consultationimages/flag.png" alt="USA Flag" className="flag-icon" />
                <span className="target-text">{consult.target}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Consultations;
