import React from "react";
import "./Casestudies.css";

const caseStudiesData = [
  {
    image: "/webimg/fr2.png",
    title: "Traveltrend Web Case Study",
 
  },
  {
    image: "/webimg/fr.png",
    title: "Traveltrend Web Case Study",
  
  },
  {
    image: "/webimg/fr3.png",
    title: "Traveltrend Web Case Study",
   
  },
];

const CaseStudies = () => {
  return (
    <div className="case-studies-section">
      <h2 className="case-studies-heading">Case Studies</h2>
      <div className="case-studies-container">
        {caseStudiesData.map((item, index) => (
          <div className="case-study-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="case-study-image"
            />
            <h3 className="case-study-title">{item.title}</h3>
          
            <button className="case-study-button">Learn More   <img src="/webimg/w6.png" alt="arrow" style={{width:'18.73px',height:'11.41px',position:'relative',left:'50px',bottom:'20px'}}/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
