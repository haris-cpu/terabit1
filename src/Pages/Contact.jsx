import React from "react";
import "./Contact.css";

const RequestPricing = () => {
  return (
    <div className="request-pricing-wrapper">
      <div className="pricing-form-container">
        <div className="pricing-header-container">
          <h2 style={{
    fontFamily:"'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "45px",
    letterSpacing: "-2%"
  }}>REQUEST PRICING</h2>
          <p>We look forward to doing business with you. If you require any further information, feel free to contact us.</p>
        </div>

        <form   style={{width: 421.6622009277344,
height: 458.39886474609375,
gap: '22px',marginLeft:'25px'
}}>
          <input type="text" placeholder="Name" required  style={{width: 421.6622009277344,
height: 43.00348663330078,
gap: '9px'
}}/>
          <input type="text" placeholder="Company Name" required   style={{width: 421.6622009277344,
height: 43.00348663330078,
gap: '9px'
}}/>
          <input type="tel" placeholder="Phone (optional)"  style={{width: 421.6622009277344,
height: 43.00348663330078,
gap: '9px'
}}/>
          <textarea placeholder="Message" rows="4"  style={{width: 421.6622009277344,
height: 105.00348663330078,
gap: '9px'
}}></textarea>
          <button type="submit"   style={{
    width: "159.52828979492188px",
    height: "40.27240753173828px",
    gap: "5.43px",
    borderRadius: "5.09px",
    paddingTop: "8.14px",
    paddingRight: "24.41px",
    paddingBottom: "8.14px",
    paddingLeft: "23.12px",
    position:'relative',
    top:'17px'
    
  }}>Request Pricing</button>
        </form>
      </div>
      <div className="pricing-info-container">
        <img
          src="/Contactimages/1.png"
          alt="Illustration"
          style={{ width: "242.130859375px", height: "242.130859375" ,marginRight:'380px',marginTop:'40px' }}
        />
        <h3 style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        fontSize: "34px",
        lineHeight: "32.98px",
        letterSpacing: "-0.02em", 
        width:'436px',
        height:'57px',
        textAlign:'justify'
      }}>Discuss your idea with our live Agent</h3>
        <p style={{
        fontFamily: "'Proxima Nova', sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "0em", 
        textAlign:'justify'
      }}
>
          Whether you are a business owner or interested in exploring,{" "}
          <strong>Terabit IT</strong> Agent will help you understand how mobile apps can be designed to meet your needs.
        </p>
        <div className="chat-container">
      <button className="chat-now-btn">
        Chat Now
        <span className="blinking-dot"></span>
      </button>
    </div>
      </div>
    </div>
  );
};

export default RequestPricing;
