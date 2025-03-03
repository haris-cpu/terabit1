import React, { useState } from "react";
import "./Coretech2.css"; // Renamed CSS file

const newTechnologies2 = { // Renamed data object
  Frontend: [
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Angular", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "Vue.js", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },

    
  ],
  Backend: [
    { name: "Django", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
    { name: "MongoDB", img: "https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png" },
    { name: "Firebase", img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "React Native", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Vue.js", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  ],
  "Testing Tools": [
    { name: "Selenium", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
    { name: "Jest", img: "https://jestjs.io/img/opengraph.png" },
    { name: "Cypress", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Cypress_logo.svg/1200px-Cypress_logo.svg.png" },
    { name: "Postman", img: "https://www.postman.com/downloads/images/postman-logo-orange.png" },
  ],
  "APIs and SDKs": [
    { name: "REST APIs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/REST_logo.svg/1200px-REST_logo.svg.png" },
    { name: "GraphQL", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" },
    { name: "Google Maps API", img: "https://developers.google.com/static/maps/images/branding/layered_content/google-maps-standard.png" },
    { name: "Stripe SDK", img: "https://stripe.com/img/v3/home/social/twitter.png" },
    { name: "Twilio SDK", img: "https://www.twilio.com/docs/static/img/meta/TwilioSocial.png" },
  ],
};

const NewCoreTechnologies2 = () => { // Renamed component
  const [newActiveTab2, setNewActiveTab2] = useState("Frontend"); // Renamed state

  return (
    <div className="new-core-tech-container2"> {/* Renamed class */}
      <h2 className="new-core-tech-title2">Our Core Technologies</h2> {/* Renamed class */}
      <p className="new-core-tech-description2"> {/* Renamed class */}
        Terabit IT works under various modern technologies for effective, scalable, and future-proof custom software development.
      </p>

      <div className="new-core-tech-tabs2"> {/* Renamed class */}
        {Object.keys(newTechnologies2).map((category, index) => (
          <button
            key={category}
            className={`new-core-tech-tab2 ${newActiveTab2 === category ? "new-core-tech-active2" : ""}`} // Renamed classes
            onClick={() => index === 0 && setNewActiveTab2(category)}
            disabled={index !== 0}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="new-core-tech-icons-container2"> {/* Renamed class */}
        {newTechnologies2[newActiveTab2].map((tech) => (
          <div key={tech.name} className="new-core-tech-card2"> {/* Renamed class */}
            <img src={tech.img} alt={tech.name} className="new-core-tech-logo2" /> {/* Renamed class */}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCoreTechnologies2;