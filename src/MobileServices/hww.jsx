import React from "react";
import "./hww.css";

const HowWeWork = () => {
  return (
    <div className="howwework-container">
      <h2 className="howwework-heading">How We Can Work With You</h2>
      <div className="howwework-grid">
        {/* Staff Augmentation */}
        <div className="howwework-card" >
          <img src="/Staff images/sa.png" alt="Staff Augmentation" className="howwework-image" />
          
        </div>
        
        {/* Product Development */}
        <div className="howwework-card" >
          <img src="/Staff images/sa2.png" alt="Product Development" className="howwework-image" />
          
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
