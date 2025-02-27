import React from "react";
import "./Page.css";

const WebAppSection = () => {
  return (
    <div className="webapp-container">
      {/* Left Section */}
      <div className="webapp-text-section">
        <h1 className="iu">Web App Development Services</h1>
        <p>
          Foster scalability, efficiency, and productivity by integrating
          top-tier custom software development services within your organization.
        </p>
        <button className="webapp-button">Talk to Us <img src="/webimg/w8.png" alt="arrow"  style={{width:'8px',height:'8.77px'}}/></button>
      </div>

      {/* Right Section */}
      <div className="webapp-image-section">
        {/* Three Line1 Images (Above, Middle, Below) */}
        <div className="webapp-left-image top">
          <img src="/webimg/line1.png" alt="Top Line Decoration" />
        </div>

        <div className="webapp-left-image middle">
          <img src="/webimg/line1.png" alt="Middle Line Decoration" />
        </div>

        <div className="webapp-left-image bottom">
          <img src="/webimg/line1.png" alt="Bottom Line Decoration" />
        </div>

        {/* Other Images */}
        <img src="/webimg/w3.png" alt="Behind Image" className="webapp-behind-image" />
        <img src="/webimg/w2.png" alt="Web App Design" className="webapp-main-image" />
      </div>

      {/* People Section */}
      <div className="webapp-team">
        <img src="/webimg/b1.png" alt="Development Team" className="webapp-team-image" />
      </div>
    </div>
  );
};

export default WebAppSection;
