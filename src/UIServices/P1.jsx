import React from "react";
import "./P1.css";

const WebAppSectionNew = () => {
  return (
    <div className="new-webapp-container">
      {/* Left Section */}
      <div className="new-webapp-text-section">
        <h1 className="new-heading">Web App Development Services</h1>
        <p>
          Foster scalability, efficiency, and productivity by integrating
          top-tier custom software development services within your organization.
        </p>
        <button className="new-webapp-button">Talk to Us <img src="/webimg/w8.png" alt="arrow"  style={{width:'8px',height:'8.77px'}}/></button>
      </div>

      {/* Right Section */}
      <div className="new-webapp-image-section">
        {/* Three Line1 Images (Above, Middle, Below) */}
        <div className="new-webapp-left-image new-top">
          <img src="/webimg/line1.png" alt="Top Line Decoration" />
        </div>

        <div className="new-webapp-left-image new-middle">
          <img src="/webimg/line1.png" alt="Middle Line Decoration" />
        </div>

        <div className="new-webapp-left-image new-bottom">
          <img src="/webimg/line1.png" alt="Bottom Line Decoration" />
        </div>

        {/* Other Images */}
        <img src="/webimg/w3.png" alt="Behind Image" className="new-webapp-behind-image" />
        <img src="/webimg/w2.png" alt="Web App Design" className="new-webapp-main-image" />
      </div>

      {/* People Section */}
      <div className="new-webapp-team">
        <img src="/webimg/b1.png" alt="Development Team" className="new-webapp-team-image" />
      </div>
    </div>
  );
};

export default WebAppSectionNew;
