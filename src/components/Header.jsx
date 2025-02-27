import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openServicesModal = () => {
    setServicesModalOpen(true);
    setMenuOpen(false);
  };

  const closeServicesModal = () => {
    setServicesModalOpen(false);
  };

  // Define routes for each service
  const serviceRoutes = {
    "Mobile App Development": "/mobile-app-development",
    "Web App Development": "/web-app-development",
    "UI/UX Design": "/ui-ux-design",
    "DevOps and Cloud": "/devops-and-cloud",
    "Blockchain Development": "/blockchain-development",
    "Artificial Intelligence": "/artificial-intelligence",
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/images/ij.png" alt="Company Logo" className="logo-image" />
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Navigation Menu */}
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/about" className="menu-link">
              About Us
            </Link>
          </li>
          <li className="menu-item">
            <span className="menu-link" onClick={openServicesModal}>
              Services
            </span>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/consultations" className="menu-link">
              Consultations
            </Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/success-stories" className="menu-link">
              Success Stories
            </Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/core-technologies" className="menu-link">
              Technologies
            </Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/industries" className="menu-link">
              App Industries
            </Link>
          </li>
        </ul>

        {/* Request Pricing Button */}
        <button className="request-btn">
          <Link to="/contact" className="menu-link">
            Request Pricing
          </Link>
        </button>

        {/* Services Modal */}
        {servicesModalOpen && (
          <div className="services-modal">
            <div className="services-modal-content">
              <button className="close-button" onClick={closeServicesModal}>
                &times;
              </button>
              <ul>
                {Object.entries(serviceRoutes).map(([serviceName, route]) => (
                  <li key={serviceName}>
                    <Link to={route} className="service-link" onClick={closeServicesModal}>
                      {serviceName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
