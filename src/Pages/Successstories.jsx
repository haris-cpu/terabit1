import React, { useRef, useEffect } from "react";

import "./Successstories.css";



const SuccessStories = () => {
  
  return (
    
      <div className="success-stories">
        <div className="heading" >
          <h2 style={{fontFamily:'"Outfit", sans-serif',fontSize:'40px',width:'237',height:'45',fontWeight:'600',lineHeight:'45px',letterSpacing:'-2%',position:'relative',bottom:'70px',left:'30px'}}>Success Stories</h2>
          <p style={{fontFamily:'Proxima Nova, sans-serif',fontWeight:'400',fontSize:'16px',lineHeight:'24px',position:'relative',bottom:'70px',left:'30px'}}>
            Our comprehensive range of expertise empowers businesses to seize new
            opportunities and achieve remarkable results.
          </p>
        </div>

        <div className="success-container" >
          <div className="projects"  >
            <div className="project-card brown-bg" style={{width:' 343px',
height: '285.4259033203125px',
borderradius: '9.44px'
}}>
              <img src="/Successimages/mizdo.png" alt="MIDZO" style={{ width: "210.59px", height: "127.47px",position:'relative',top:'70px',left:'50px' }} />
              <img src="/Successimages/logo.png" alt="logo" style={{width:'107px',height:'23.35px',borderradius:'9.44px',gap:'5px',position:'relative',left:'100px',bottom:'110px'}}/>
              <img src="/Successimages/logo2.png" alt="logo" style={{width:'47.21px',height:'102.35px',borderradius:'9.44px',gap:'5px',position:'relative',left:'130px',bottom:'85px'}}/>
              <img src="/Successimages/icons.png" alt="icons"  style={{width: 195.9259033203125,
height: '30.074071884155273px',
top: '180.86px',
left: '71.78px',
gap: '6.3px',
borderradius: '9.44px',
paddingLeft:'60px'
}} />
            </div>

            <div className="project-card blue-bg" style={{width:' 343px',
height: '285.4259033203125px',
borderradius: '9.44px'

}}>
              <img src="/Successimages/Bi.png" alt="Budget App" style={{ width: "183px", height: "149.47px",position:'relative',top:'10.79px',left:'170px' }} />
              <img src="/Successimages/B.png" alt="brandname"  style={{height:"40px",width:'41px',position:'relative',top:'-140px',left:'1px',borderRadius:'8px'}} />
              <p
    style={{
      fontSize: "10px",
      fontWeight:'400',
      lineHeight: "1.4",
      textAlign: "left",
      width: "50%",
      position: "relative",
      top: "-135px",
      left: "-5px",
      color: 'black', // Adjust color as needed
    }}
  >
    Bundy APP is an innovative, user-centric solution designed to streamline
    [specific function or purpose of the app]. Built with ease of use and
    efficiency in mind, the app empowers users to [key benefit or functionality,
    e.g., track time, manage tasks, monitor health, etc.].
  </p>
              <img src="/Successimages/icons.png" alt="icons"  style={{width: 195.9259033203125,
height: '30.074071884155273px',
position:'relative',
top:'-55px',
gap: '6.3px',
borderradius: '9.44px',
paddingLeft:'60px'
}} />
            </div>

            <div className="project-card purple-bg" style={{width:' 343px',
height: '285.4259033203125px',
borderradius: '9.44px'
}}>
              <img src="/Successimages/em.png" alt="EM Analytics" style={{ width: "175px", height: "165.48px",position:'relative',left:'200px',top:'10px' }} />
              <img src="/Successimages/emlogo.png" alt="emlogo" style={{width:'40px',height:'40.14px',borderradius:'2.62px',position:'relative',bottom:'140px'}} />
              <img src="/Successimages/dot.png" alt="dot"  style={{width:'5px',height:'5px',opacity:50,position:'relative',bottom:'200px',left:'100px'}} />
              <img src="/Successimages/dot.png" alt="dot"  style={{width:'5px',height:'5px',opacity:50,position:'relative',bottom:'200px',left:'130px'}}/>
              <img src="/Successimages/dot.png" alt="dot"  style={{width:'5px',height:'5px',opacity:50,position:'relative',bottom:'175px',left:'150px'}}/>
              <img src="/Successimages/icons.png" alt="icons"  style={{width: 195.9259033203125,
height: '30.074071884155273px',
position:'relative',
top:'40px',
gap: '6.3px',
borderradius: '9.44px',
paddingLeft:'60px'
}} />
<div style={{
  width: '218px', 
  height: '73.78px', 
  display: 'grid', 
  gridTemplateColumns: 'repeat(2, 1fr)', /* Two columns */
  gap: '3.17px', /* Space between images */
  position:'relative',
  bottom:'120px'
}}>
  <img src="/Successimages/Frame 317.png" alt="icons" style={{ width: '55.18px', height: '21.77px' }} />
  <img src="/Successimages/Frame 318.png" alt="icons" style={{ width: '55.18px', height: '21.77px' }} />
  <img src="/Successimages/Frame 319.png" alt="icons" style={{ width: '55.18px', height: '21.77px' }} />
  <img src="/Successimages/Frame 320.png" alt="icons" style={{ width: '55.18px', height: '21.77px' }} />
  <img src="/Successimages/Frame 321.png" alt="icons" style={{ width: '55.18px', height: '21.77px' }} />
</div>

            </div>

            <div className="project-card gray-bg" style={{width:' 343px',
height: '285.4259033203125px',
borderradius: '9.44px'
}}>
              <img src="/Successimages/beauty.png" alt="Beauty App" style={{ width: "186px", height: "156.47px",position:'relative',top:'19.79px',left:'170px' }} />
              <img src="/Successimages/malik.png" alt="brandname"  style={{height:"40px",width:'41px',position:'relative',top:'-140px',left:'1px',borderRadius:'8px'}} />
              <p
    style={{
      fontSize: "10px",
      fontWeight:'400',
      lineHeight: "1.4",
      textAlign: "left",
      width: "50%",
      position: "relative",
      top: "-135px",
      left: "-5px",
      color: 'black', // Adjust color as needed
    }}
  >
    The Beauty Routine App is an all-in-one beauty management platform designed to help users organize, optimize, and elevate their skincare, makeup, and beauty practices. Whether you're a beauty novice or a skincare enthusiast, this app allows users to track their daily routines, get personalized recommendations
  </p>
  <img src="/Successimages/icons.png" alt="icons"  style={{width: 195.9259033203125,
height: '30.074071884155273px',
position:'relative',
top:'-63px',
gap: '6.3px',
borderradius: '9.44px',
paddingLeft:'60px'
}} />
            </div>
          </div>

          <div className="reviews">
            <div className="review-card">
              <img src="Successimages/p1.png"  style={{height:'35px',width:'35px',position:'relative',top:'15px'}}></img>
              <h4>Jenny Wilson</h4>
              <p className="country"><img src="Successimages/us.png" alt="US"  style={{height:'15px',width:'23px'}}/>United States</p>
              <p className="review-text">"Working with Terabit IT on developing our all-in-one, on-demand platform has been an outstanding experience! From the initial concept to the final launch, the team truly understood our vision."</p>
              <div className="stars">★★★★★</div>
              <p className="platform fiverr">Fiverr Review</p>
            </div>
          
            <div className="review-card">
            <img src="Successimages/p2.png"  style={{height:'35px',width:'35px',position:'relative',top:'15px'}}></img>
              <h4>Jerome Bell</h4>
              <p className="country"><img src="Successimages/us.png" alt="US"  style={{height:'15px',width:'23px'}}/>United States</p>
              <p className="review-text">"Working with Terabit IT on developing our all-in-one, on-demand platform has been an outstanding experience! From the initial concept to the final launch, the team truly understood our vision."</p>
              <div className="stars">★★★★★</div>
              <p className="platform upwork">Upwork Review</p>
            </div>

            <div className="review-card">
            <img src="Successimages/p3.png"  style={{height:'35px',width:'35px',position:'relative',top:'15px'}}></img>
              <h4>Esther Howard</h4>
              <p className="country"><img src="Successimages/us.png" alt="US"  style={{height:'15px',width:'23px'}}/>United States</p>
              <p className="review-text">"Working with Terabit IT on developing our all-in-one, on-demand platform has been an outstanding experience! From the initial concept to the final launch, the team truly understood our vision."</p>
              <div className="stars">★★★★★</div>
              <p className="platform upwork">Upwork Review</p>
            </div>
          </div>
        </div>
        <div className="consultation-button">
  <img src="Successimages/up.png" alt="" />
</div>

<div style={{
  width: "100%",  // Ensures responsiveness
  maxWidth: "1438px", 
  height: "90px", 
  border:'none',
  display: "flex", 
  justifyContent: "center", // Centers the button
  alignItems: "center", 
  overflow: "hidden" // Prevents overflow
}}>
  <button style={{
    width: "100%",  // Makes button responsive within div
    maxWidth: "483px", 
    height: "48px", 
     border:'none',
    borderRadius: "10px", 
    padding: "12px 30px",
    whiteSpace: "nowrap", // Prevents text from wrapping
    background: '#008DF3',
    color:'white'

  }}>
    Book free Consultation
  </button>
</div>

      </div>

  );
};

export default SuccessStories;