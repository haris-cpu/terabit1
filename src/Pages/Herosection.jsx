import React from "react";
import "./HeroSection.css"; // Import the CSS file for this component
import profilePic from "../assets/Ceo.png"; // Profile image of the CEO
import fiverrLogo from "../assets/fiverlogo.png"; // Fiverr logo
import upworkLogo from "../assets/upq.png"; // Upwork logo
import ioVideo from "../assets/tf.mp4";

const HeroSection = () => {
  return (
   
    <div className="hero-container">
      <div className="text-section">
        {/* Updated profile-info section to include Fiverr logo on the right */}
        <div className="profile-info">
  <img src={profilePic} alt="CEO" className="profile-pic" />
  <div className="profile-text">
    <h4 style={{ position: "relative", right: "28px",left:'1px',fontFamily: "'Objective', sans-serif",fontWeight:'700',fontSize:'16.06px',lineHeight:'22.12px'  }}>Founder & CEO</h4>
    <p style={{ position: "relative", bottom: "20px", left: "32px",fontFamily: "'Objective', sans-serif" ,fontSize:'13.64px',lineHeight:'18.7px' }}>Muhammad Haseeb Shaukat</p>
  </div>
  {/* Fiverr and Upwork Logos Side by Side */}
  <div className="logo-container">
    <img src={fiverrLogo} alt="Fiverr" className="fiverr-logo" />
    <img  style={{height:'50px'}}src={upworkLogo} alt="Upwork" className="upwork-logo" />
  </div>
</div>


        <div style={{ maxWidth: "600px", textAlign: "center", margin: "0 auto", overflowWrap: "break-word", wordWrap: "break-word" }}>
  <h1 style={{ 
  whiteSpace: "normal", 
  wordWrap: "break-word", 
  fontSize: "2.5rem", 
  lineHeight: "1.2", 
  position: "relative", 
  bottom: "50px", 
  right: "60px", 
  fontFamily: "Outfit", /* ✅ No extra quotes */
  paddingTop: "15px" ,
  fontWeight:'400'
}}
>
    Your <span className="highlight">Trusted</span> Mobile App <h1 style={{position:"relative",bottom:'30px', right:'20px',fontFamily:'Outfit',fontWeight :'400',lineHeight:'1.2',paddingTop:'15px',fontSize:'2.5rem'}}>Development Company</h1>
  </h1>

  <p className="description" style={{ whiteSpace: "normal", wordWrap: "break-word", fontSize: "16px", color: "#555", lineHeight: "20.8px", position:"relative",bottom:'60px',fontWeight:'400',fontFamily: "'Objective', sans-serif"  }}>
    TeraBit IT is a flexible platform to vet and hire talent like software developers, designers, and quality assurance engineers that match your time zone and work model.
  </p>
</div>

        <div className="buttons">
          <button className="chat-btn" >💬 Chat with us</button>
          <button className="call-btn">📞 Book A Call</button>
        </div>
      </div>

      <div className="image-section">
      <video src={ioVideo} autoPlay loop muted playsInline width="500"></video>

      </div>
    </div>
  
  );
};

export default HeroSection;
