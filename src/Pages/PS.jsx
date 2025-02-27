import React from "react";
import "./PS.css"; 

const consultations = [
    { thumbnail: "/Psimages/PS1.png", videoLink: "https://www.youtube.com/watch?v=P1wyFZNtmTg" },
    { thumbnail: "/Psimages/PS2.png", videoLink: "https://www.youtube.com/watch?v=P66Hyek_xeM" },
    { thumbnail: "/Psimages/PS3.png", videoLink: "https://www.youtube.com/watch?v=SUO9alytpd8" },
  ];
  
  const PS = () => {
    return (
      <section className="ps-container">
        {/* Heading */}
        <h2 className="ps-title">Project Diaries</h2>
  
        {/* Paragraph */}
        <p className="ps-description">
          Our comprehensive range of expertise empowers businesses to seize new opportunities and achieve remarkable results.
        </p>
  
        <div className="ps-grid">
          {consultations.map((consult, index) => (
            <article key={index} className="ps-card">
              <img src={consult.thumbnail} alt="Consultation Thumbnail" className="ps-image" />
              {/* Clickable YouTube Icon */}
              <div className="ps-youtube-container">
                <a href={consult.videoLink} target="_blank" rel="noopener noreferrer">
                  <img src="/Psimages/Yt.png" alt="YouTube Icon" className="ps-youtube" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };
  

export default PS;
