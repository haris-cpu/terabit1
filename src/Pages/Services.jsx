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
          backgroundColor: "#f7fbff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1" }}>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  High-quality apps for iOS</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Boost app visibility</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  User-focused app design</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Apps for any platform</li>
          <li style={{ fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Efficient Android solutions</li>
        </ul>
        <img
          src="/serviceimages/mobile.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'100px' }}
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
          backgroundColor: "#f7fbff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1" }}>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> Powerful web apps</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Custom CMS solutions</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Advanced e-commerce systems</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Scalable web applications</li>
          <li style={{ fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Optimized for performance</li>
        </ul>
        <img
          src="/serviceimages/mobile.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'100px'  }}
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
          backgroundColor: "#f7fbff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1" }}>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> Intuitive UI design</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> Seamless user experience</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Wireframing & prototyping</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Responsive and adaptive design</li>
          <li style={{ fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Interactive and engaging visuals</li>
        </ul>
        <img
          src="/serviceimages/UI.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'100px'  }}
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
          backgroundColor: "#f7fbff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1" }}>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> CI/CD pipeline automation</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Infrastructure as Code (IaC)</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Cloud deployment & management</li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Continuous monitoring & logging
          </li>
          <li style={{ fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Scalable & secure architectures</li>
        </ul>
        <img
          src="/serviceimages/Devops.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'100px'  }}
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
          backgroundColor: "#f7fbff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1" }}>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> Smart contract development
          </li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> Decentralized applications (DApps)
          </li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Blockchain integration & consulting
          </li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Private & public blockchain solutions
          </li>
          <li style={{ fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Optimized for performance</li>
        </ul>
        <img
          src="/serviceimages/blockchain.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'100px'  }}
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
          backgroundColor: "#f7fbff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #007bff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0", flex: "1" }}>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> AI-powered solutions & automation
          </li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Machine learning model development
          </li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img> Natural language processing (NLP)
          </li>
          <li style={{ marginBottom: "10px", fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Scalable web applications</li>
          <li style={{ fontWeight: "500" }}><img src="/serviceimages/arrow.png" style={{width: "16px", height: "16px", marginRight: "5px"}}></img>  Optimized for performance</li>
        </ul>
        <img
          src="/serviceimages/AI.png"
          alt="Hover Content"
          style={{ width: "100px", height: "100px", objectFit: "contain",paddingBottom:'100px'  }}
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
