import React, { useState } from "react";
import "./Casestudies.css";

const caseStudiesData = [
  {
    image: "/webimg/fr2.png",
    title: "Traveltrend Web Case Study",
    pdf: "/webimg/Food.pdf",
  },
  {
    image: "/webimg/fr.png",
    title: "Traveltrend Web Case Study",
    pdf: "/webimg/Food2.pdf",
  },
  {
    image: "/webimg/fr3.png",
    title: "Traveltrend Web Case Study",
    pdf: "/webimg/Food3.pdf",
  },
];

const CaseStudies = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const closePDF = () => setSelectedPDF(null);

  return (
    <div className="case-studies-section">
      <h2 className="case-studies-heading">Case Studies</h2>
      <div className="case-studies-container">
        {caseStudiesData.map((item, index) => (
          <div className="case-study-card" key={index}>
            <img src={item.image} alt={item.title} className="case-study-image" />
            <h3 className="case-study-title">{item.title}</h3>
            <button className="case-study-button" onClick={() => setSelectedPDF(item.pdf)}>
              Learn More{" "}
              <img
                src="/webimg/w6.png"
                alt="arrow"
                style={{
                  width: "18.73px",
                  height: "11.41px",
                  position: "relative",
                  left: "50px",
                  bottom: "20px",
                }}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Overlay PDF Viewer */}
      {selectedPDF && (
        <div
          className="pdf-overlay"
          onClick={closePDF} // Close when clicking anywhere
        >
        <iframe
  src={selectedPDF + "#toolbar=0&scrollbar=0"}
  title="PDF Viewer"
  className="pdf-viewer"
/>

        </div>
      )}
    </div>
  );
};

export default CaseStudies;
