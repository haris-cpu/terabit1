import React, { useState, useEffect } from "react";

const Qadev = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/madev/madev.png";
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "125%",
        height: "500px",
        position: "relative",
        transition: "opacity 0.8s ease-in-out",
        opacity: isLoaded ? 1 : 0, // Smooth fade-in
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right:'135px'

      
      }}
    >
      <img
        src="/madev/madev.png"
        alt="Madev"
        className="responsive-img" // Added a class to target it easily in CSS
        style={{
          width: "100%",
          maxWidth: "1340px",
          height: "auto", // Default height
          borderWidth: "1px",
          position: "relative",
          
        }}
      />
      <style>
        {`
          @media (max-width: 1200px) {
            .responsive-img {
              width: 95%;
            }
          }

          @media (max-width: 992px) {
            .responsive-img {
              width: 90%;
            }
          }

          @media (max-width: 768px) {
            .responsive-img {
              width: 85%;
              height: 500px; /* Increase height at 768px */
              object-fit: cover; /* Ensures image fills the space without distortion */
            }
          }

          @media (max-width: 576px) {
            .responsive-img {
              width: 100%;
              height: 400px; /* Adjust for smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Qadev;
