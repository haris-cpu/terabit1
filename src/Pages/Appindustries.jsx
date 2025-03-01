import React, { useState } from "react";
import "./AppIndustries.css"; // Import the updated CSS

const industries = ["E-Commerce", "EdTech", "Manufacturing", "Healthcare", "Education"];

const apps = {
  "E-Commerce": [
    { name: "Bunndy Mobile App", image: "Appindustry/A1.png", link: "#" },
    { name: "Midza App", image: "Appindustry/A2.png", link: "#"  },
    { name: "A.A Beauty App", image: "Appindustry/A3.png", link: "#" },
  ],
  "EdTech": [
    { name: "EduPro App", image: "Appindustry/A1.png", link: "#" },
    { name: "LearnMate App", image: "Appindustry/A1.png", link: "#" },
  ],
};

const disabledIndustries = ["Manufacturing", "Healthcare", "Education"];

const AppIndustries = () => {
  const [activeTab, setActiveTab] = useState("E-Commerce");
  const [selectedApp, setSelectedApp] = useState(null);

  const openOverlay = (app) => {
    setSelectedApp(app);
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  };
  
  const closeOverlay = () => {
    setSelectedApp(null);
    document.documentElement.style.overflowX = "auto";
    document.body.style.overflowX = "auto";
  };
  
  


  return (
    <div className="industries-container">
      <h2 className="industries-title">App Industries</h2>

      {/* Tabs Section */}
      <div className="industries-tabs">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`industries-tab ${activeTab === industry ? "active" : ""} ${
              disabledIndustries.includes(industry) ? "disabled" : ""
            }`}
            onClick={() => !disabledIndustries.includes(industry) && setActiveTab(industry)}
            disabled={disabledIndustries.includes(industry)}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Display Apps Based on Active Tab */}
      <div className="industries-apps">
        {apps[activeTab]?.map((app, index) => (
          <div key={index} className="app-card">
            <img src={app.image} alt={app.name} className="app-image" />
            <h3 className="app-name">{app.name}</h3>
            <button className="learn-more" onClick={() => openOverlay(app)}>Learn More →</button>
          </div>
        ))}
      </div>

     {/* Overlay for displaying app details */}
     {selectedApp && (
  <div className="app-overlay" style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowX:'hidden'
  }}>
    <div className="app-overlay-content" style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "900px",
      width: "90%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "20px",
      height: '340px',
      position: "relative"
    }}>
      <span className="app-overlay-close" onClick={closeOverlay} style={{
        position: "absolute",
        top: "10px",
        right: "20px",
        fontSize: "24px",
        cursor: "pointer",
        color: "black"
      }}>&times;</span>

      {/* Left Side Image & Details */}
      <div className="features-image" style={{
        width: "55%",
        position: "relative",
        top:'4px',
        right:'15px'
      }}>
        <img src={selectedApp.image} alt={selectedApp.name} style={{
          width: "100%",
          height: "290px",
          objectFit: "cover",
          borderRadius: "8px"
        }} />
        <h3 className="app-name" style={{ textAlign: "center", marginTop: "6px" }}>{selectedApp.name}</h3>
        <button className="learn-more">Learn More →</button>
      </div>

      {/* Right Side Features with PNG */}
      <div className="features-text" style={{
        width: "50%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "left",
        paddingRight: "50px", // Ensuring text doesn’t overflow
        position: "relative",
        bottom:'35px'
      }}>
        {/* PNG at top-right */}
        <img src="/Appindustry/34.png" alt="Icon" style={{
          position: "absolute",
          top: "160px",
          left:'269px',
          width: "190px",
          height: "120px"
        }} />

        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#333",
          fontFamily: "'Poppins', sans-serif",
          lineHeight:'27.6px'
        }}>
          We Developed {selectedApp.name} with these <span style={{ color: "#007bff" }}>Features:</span>
        </h2>

        <p style={{
          fontSize: "14px",
          color: "#555",
          fontWeight:'400',
          fontFamily: "'Poppins', sans-serif",
          width: '307px',
height: '58px',
top: '89px',
left: '427px'

        }}>
          This app is an <strong  style={{fontWeight:'600'}}>all-in-one</strong>, on-demand platform designed to simplify daily tasks by offering multiple services in one place.
        </p>

        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          gap:'21px',
         
        }}>
        <li style={{ fontSize: "14px", color: "#333", marginBottom: "5px" ,fontWeight:'600',fontFamily: "'Proxima Nova', sans-serif",display:'flex'}}>
  <img src="/Appindustry/i2.png" alt="icon" style={{ width: "9px", marginRight: "5px",height:'9.77px' }} />
  Consolidated Platform
</li>
<li style={{ fontSize: "14px", color: "#333", marginBottom: "5px" ,fontWeight:'600',fontFamily: "'Proxima Nova', sans-serif"}}>
<img src="/Appindustry/i2.png" alt="icon" style={{ width: "9px", marginRight: "5px",height:'9.77px' }} />
  Seamless User Experience
</li>
<li style={{ fontSize: "14px", color: "#333", marginBottom: "5px" ,fontWeight:'600',fontFamily: "'Proxima Nova', sans-serif"}}>
<img src="/Appindustry/i2.png" alt="icon" style={{ width: "9px", marginRight: "5px",height:'9.77px' }}/>
  Driver/Service Provider Integration
</li>
<li style={{ fontSize: "14px", color: "#333", marginBottom: "5px" ,fontWeight:'600',fontFamily: "'Proxima Nova', sans-serif"}}>
<img src="/Appindustry/i2.png" alt="icon" style={{ width: "9px", marginRight: "5px",height:'9.77px' }}/>
  Real-Time Tracking & Communication
</li>
<li style={{ fontSize: "14px", color: "#333", marginBottom: "5px" ,fontWeight:'600',fontFamily: "'Proxima Nova', sans-serif"}}>
<img src="/Appindustry/i2.png" alt="icon" style={{ width: "9px", marginRight: "5px",height:'9.77px' }} />
  Payment Gateway & Wallet Integration
</li>

        </ul>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default AppIndustries;
