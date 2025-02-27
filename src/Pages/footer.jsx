import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f9fa', // Light gray background
              
    textAlign: 'center',        
    borderTop: '1px solid #dee2e6', // Subtle top border
    width: '100%',           
    position: 'relative', /* ✅ Remove 'fixed' and set 'relative' */
    
   
 
    
  };

  
  

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Space items evenly
    alignItems: 'center',        // Vertically align items
    maxWidth: '960px',         // Set a maximum width for larger screens
    margin: '0 auto',            // Center the containe
  }

  const linkStyle = {
    color: ' #97A3B6',         
    textDecoration: 'none',      // Remove underlines from links
    margin: '0 10px',           // Space between links
    position:'relative',
    top:'20px'
   

  };

  const socialStyle = {
    display: 'flex',
    gap: '10px',
    position:'relative',
    top:'1px'
    
    
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
  };
  const logoStyle = {
    position: 'absolute',      // Absolute position within the footer
    bottom:'2px'     ,         // Space from the top of the footer
    right: '50px',             // Space from the right of the footer
    width: '50px',             // Adjust size as needed
    height: 'auto',            // Maintain aspect ratio of logo
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
      <img src="footer/4.png" alt="Logo" style={logoStyle} />

        <div>
          <a href="/terms" style={linkStyle}>Terms & Conditions</a>
          <a href="/privacy" style={linkStyle}>Privacy policy</a>
        </div>

        <div style={socialStyle}>
          <a href="https://www.instagram.com/terabitit/" style={linkStyle}><img src="footer/insta.png" alt="Instagram" style={iconStyle} /></a> {/* Replace with your icon path */}
          <a href="https://twitter.com/terabitit" style={linkStyle}><img src="footer/twitter.png" alt="Twitter" style={iconStyle} /></a> {/* Replace with your icon path */}
          <a href="https://www.facebook.com/terabitit" style={linkStyle}><img src="footer/fb.png" alt="Facebook" style={iconStyle} /></a> {/* Replace with your icon path */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;