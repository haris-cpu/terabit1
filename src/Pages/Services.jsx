import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "Mobile App Development",
    icon: "/serviceimages/mobile.png",
    items: [
      "IOS App Development",
      "Mobile App Marketing",
      "App Design",
      "Cross-Platform Development",
      "Android App Development",
    ],
    hoverContent: (
      <div
        className="hover-content"
        style={{
          backgroundColor: "#008DF30D",
          borderRadius: "10px",
          
          
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:'259px',
          width:'315px',
          position:'relative',
          bottom:'20px',
          right:'20px'
        }}
      >
      <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1", textAlign: "left" }}>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    High-quality apps for iOS
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Boost app visibility
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    User-focused app design
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Apps for any platform
  </li>
  <li style={{ fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Efficient Android solutions
  </li>
</ul>

        <img
          src="/serviceimages/o3.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'10px' }}
        />
      </div>
    ),
  },
  {
    title: "Web App Development",
    icon: "/serviceimages/mobile.png",
    items: [
      "Custom Website Development",
      "CMS Development",
      "E-Commerce Development",
      "Web Application Development",
      "Android App Development",
    ],
    hoverContent: (
      <div
        className="hover-content"
        style={{
          backgroundColor: "#008DF30D",
          borderRadius: "10px",
          
          
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:'259px',
          width:'315px',
          position:'relative',
          bottom:'20px',
          right:'20px'
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1", textAlign: "left" }}>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Powerful web apps
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Custom CMS solutions
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Advanced e-commerce systems
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Scalable web applications
  </li>
  <li style={{ fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Optimized for performance
  </li>
</ul>

        <img
          src="/serviceimages/05.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'14px'  }}
        />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    icon: "/serviceimages/UI.png",
    items: [
      "User Research",
      "Wireframing and Prototyping",
      "Visual Design",
      "Interaction Design",
      "Design System Development",
    ],
    hoverContent: (
      <div
        className="hover-content"
        style={{
          backgroundColor: "#008DF30D",
          borderRadius: "10px",
          
          
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:'259px',
          width:'315px',
          position:'relative',
          bottom:'20px',
          right:'20px'
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1", textAlign: "left" }}>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Intuitive UI design
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Seamless user experience
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Wireframing & prototyping
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Responsive and adaptive design
  </li>
  <li style={{ fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Interactive and engaging visuals
  </li>
</ul>

        <img
          src="/serviceimages/o3.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'14px'  }}
        />
      </div>
    ),
  },
  {
    title: "DevOps and Cloud",
    icon: "/serviceimages/Devops.png",
    items: [
      "Continuous Integration and Deployment",
      "Cloud Infrastructure Setup",
      "Monitoring and Automation",
      "Kubernetes and Docker",
      "Cloud Migration",
    ],
    hoverContent: (
      <div
        className="hover-content"
        style={{
          backgroundColor: "#008DF30D",
          borderRadius: "10px",
          
          
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:'259px',
          width:'315px',
          position:'relative',
          bottom:'20px',
          right:'20px'
        }}
      >
       <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1", textAlign: "left" }}>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    CI/CD pipeline automation
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Infrastructure as Code (IaC)
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Cloud deployment & management
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Continuous monitoring & logging
  </li>
  <li style={{ fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Scalable & secure architectures
  </li>
</ul>

        <img
          src="/serviceimages/02.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'14px'  }}
        />
      </div>
    ),
  },
  {
    title: "Blockchain Development",
    icon: "/serviceimages/blockchain.png",
    items: [
      "Smart Contract Development",
      "DApps Development",
      "Private Blockchain Solutions",
      "Blockchain Consulting",
      "Cryptocurrency Wallets",
    ],
    hoverContent: (
      <div
        className="hover-content"
        style={{
          backgroundColor: "#008DF30D",
          borderRadius: "10px",
          
          
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:'259px',
          width:'315px',
          position:'relative',
          bottom:'20px',
          right:'20px'
        }}
      >
       <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1", textAlign: "left" }}>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Smart contract development
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Decentralized applications (DApps)
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Blockchain integration & consulting
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Private & public blockchain solutions
  </li>
  <li style={{ fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Optimized for performance
  </li>
</ul>

        <img
          src="/serviceimages/o1.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'14px'  }}
        />
      </div>
    ),
  },
  {
    title: "Artificial Intelligence",
    icon: "/serviceimages/AI.png",
    items: [
      "Machine Learning Models",
      "AI-Powered Chatbots",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
    ],
    hoverContent: (
      <div
        className="hover-content"
        style={{
          backgroundColor: "#008DF30D",
          borderRadius: "10px",
          
          
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:'259px',
          width:'315px',
          position:'relative',
          bottom:'20px',
          right:'20px'
        }}
      >
       <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1", textAlign: "left" }}>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    AI-powered solutions & automation
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Machine learning model development
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Natural language processing (NLP)
  </li>
  <li style={{ marginBottom: "10px", fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Scalable web applications
  </li>
  <li style={{ fontWeight: "500", display: "flex", alignItems: "center" }}>
    <img src="/serviceimages/arrow.png" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
    Optimized for performance
  </li>
</ul>

        <img
          src="/serviceimages/o4.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'14px'  }}
        />
      </div>
    ),
  },
  
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="services-container">
      <header className="services-header">
        <h2 className="services-title">
          Services We <span className="highlight">Provide</span>
        </h2>
        <button className="pricing-button">
          <span className="green-dot"></span> Request Pricing
        </button>
      </header>
      <p className="services-description">
        We at Terabit IT provide you with a team of experts who will help you integrate unmatched software solutions for your business.
      </p>
      <section className="services-grid">
        {services.map((service, index) => (
          <article
            key={index}
            className="service-card"
            onMouseEnter={() => setHoveredService(service.title)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {hoveredService === service.title && service.hoverContent ? (
              <div className="hover-only-content">{service.hoverContent}</div>
            ) : (
              <>
                <h3 className="service-title">
                  <img src={service.icon} alt="" className="service-icon" />
                  {service.title}
                </h3>
                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="service-item">
                      <img src="/serviceimages/arrow.png" alt="Arrow" className="service-arrow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>
        ))}
      </section>
    </section>
  );
};

export default Services;
