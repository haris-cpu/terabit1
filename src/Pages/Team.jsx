import React, { useState, useEffect } from "react";
import "./Team.css";

const TeamProfile = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Developers");
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);

  const categories = ["Developers", "Interns", "Designers", "Project Managers", "HR"];
  const visibleCategories = categories.slice(scrollIndex, scrollIndex + 3);

  const teamMembers = [
    { name: "Subhan Ahmed", role: "Project Manager", category: "Project Managers", img: "/images/subhan.png" },
    { name: "Kashan Ashraf", role: "Jr. Flutter Developer", category: "Developers", img: "/images/Kashan.png" },
    { name: "M Basit", role: "Flutter Developer", category: "Developers", img: "/images/basit ali.png" },
    { name: "M Huzaifa", role: "Flutter Developer", category: "Developers", img: "/images/huzaifa.png" },
    { name: "Akash Zaib", role: "Flutter Developer", category: "Developers", img: "/images/Akash.png" },
    { name: "Abdullah Khan", role: "Flutter Developer", category: "Developers", img: "/images/Abdullah.png" },
    { name: "Haris Jabbar", role: "React Intern", category: "Interns", img: "/images/haris.png" },
    { name: "Abdulrehman", role: "Sr UI/UX Designer", category: "Designers", img: "/images/Abdu.png" },
    { name: "Muhammad Umer", role: "UI/UX Designer", category: "Designers", img: "/images/umer.png" },
    { name: "Maham Maqsood", role: "Marketing Manager", category: "Marketing", img: "/images/maham.png" },
    { name: "Mishal Sajid", role: "HR Executive", category: "HR", img: "/images/mishal.png" },
    { name: "Junaid", role: "React Intern", category: "Interns", img: "/images/juniad.png" },
    { name: "Lyba Naeem", role: "Flutter Developer", category: "Developers", img: "/images/lyba.png" }
  ];

  const displayedMembers = selectedCategory === "All" 
  ? teamMembers 
  : teamMembers.filter(member => member.category === selectedCategory);


    const handleShowAll = () => {
      setShowAllMembers(true);
      setShowOverlay(true);
      setSelectedCategory("All");
    };
    

    const handleCategorySelect = (category, event) => {
      event.stopPropagation();
      setSelectedCategory(category);
      setShowAllMembers(category === "All");
    };
    

  const closeOverlay = () => {
    setShowOverlay(false);
    setShowAllMembers(false);
    setSelectedCategory("Developers");
  };

  useEffect(() => {
    if (showOverlay) return;
    const interval = setInterval(() => {
      setSelectedCategory(prevCategory => {
        const currentIndex = categories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [showOverlay, selectedCategory]);

  const handleScrollRight = () => {
    if (scrollIndex < categories.length - 3) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handleScrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  

  return (
    <div className="container">
      <div className="left-section">
        <div className="profile-wrapper">
          <img src="/images/ce.png" alt="CEO" className="profile-image" />
          <div className="text-content">
            <h2 className="ceo">Muhammad Haseeb Shaukat</h2>
            <p className="position">Founder & CEO</p>
            <p className="description">
              Muhammad Haseeb Shaukat, the CEO of Terabit IT, leads the company with a focus on new ideas and excellence.
            </p>
          </div>
        </div>

        <div className="stats">
          <div className="stat-item">
            <img src="/images/Color Icon.png" alt="LinkedIn" className="stat-icon" />
            <div>
              <p className="stat-title">LinkedIn</p>
              <p className="stat-value">9k+ followers</p>
            </div>
          </div>
          <div className="stat-item">
            <img src="/images/Vector.png" alt="Fiverr" className="stat-icon" />
            <div>
              <p className="stat-value">1800+ Orders Completed</p>
            </div>
          </div>
          <div className="stat-item">
            <img src="/images/yui.png" alt="Employee" className="stat-icon" />
            <div>
              <p className="stat-title">Employees</p>
              <p className="stat-value">25+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="tabs">
          <span 
            style={{ paddingTop: '4px', color: '#007BFF', fontWeight: 'bold', fontSize: '24px', cursor: 'pointer' }} 
            onClick={handleScrollLeft}
          >
            &lt;
          </span>

          {visibleCategories.map(category => (
            <button 
              key={category} 
              className={selectedCategory === category ? "active" : ""} 
              onClick={(e) => handleCategorySelect(category, e)}
            >
              {category}
            </button>
          ))}

          <span 
            style={{ paddingTop: '8px', color: '#007BFF', fontWeight: 'bold', fontSize: '24px', cursor: 'pointer' }} 
            onClick={handleScrollRight}
          >
            &gt;
          </span>
        </div>

        <div className="team-members">
          {displayedMembers.slice(0, 9).map((member, index) => (
            <div className="member" key={index}>
              <img src={member.img} alt={member.name} className="avatar" />
              <p style={{ fontWeight: '600' }}>{member.name}</p>
              <p className="role">{member.role}</p>
            </div>
          ))}
        </div>

        <button className="see-all" onClick={handleShowAll}>
          Show All →
        </button>
      </div>

      {showOverlay && (
  <div className="overlay" onClick={closeOverlay} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <div className="overlay-content" onClick={(e) => e.stopPropagation()} style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      width: '80%',
      maxWidth: '1000px', 
      display: 'flex',
      gap: '30px', 
      position: 'relative',
      
    }}>
      {/* Close Button */}
      <button className="close-overlay" onClick={closeOverlay} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '24px',
        cursor: 'pointer'
      }}>✖</button>

      {/* Left Side: Category Buttons */}
      <div className="overlay-tabs" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '30px', 
        width: '220px' ,
        backgroundColor:'transparent',
     
       
        borderRight: '1px solid #ddd',  // Vertical Border
       
        paddingRight: '20px',  // Add some spacing,
        height:'100%'
      }}>
        <button 
          className={selectedCategory === "All" ? "active" : ""} 
          onClick={(e) => handleCategorySelect("All", e)} 
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '16.13px',
            textAlign: 'left',
            backgroundColor: selectedCategory === "All" ? '#ddd' : '#f3f3f3',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
            color:'black',
              fontWeight:'400',

          }}
        >
          Show All
        </button>
        {categories.map(category => (
          <button 
            key={category} 
            className={selectedCategory === category ? "active" : ""} 
            onClick={(e) => handleCategorySelect(category, e)}
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16.13px',
              textAlign: 'left',

              backgroundColor: selectedCategory === category ? '#ddd' : '#f3f3f3',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer',
              color:'black',
              fontWeight:'400',
              
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Side: Team Members (3 per row) */}
      <div className="overlay-members" style={{
        display: 'flex', 
        
        flexWrap: 'wrap',
        gap: '2px', 
       justifyContent: 'flex-start',
        flex: 1,
        maxHeight:'100vh',
        overflow:'hidden'
      }}>
        {displayedMembers.map((member, index) => (
          <div key={index} style={{
          width:"21%",
            textAlign: 'center', 
            padding: '10px',
            borderRadius: '6px',
            backgroundColor: '#fff',
            
            height: '170px' // Reduced height
          }}>
            <img src={member.img} alt={member.name} style={{ 
              width: '97px', // Reduced size
              height: '97px', 
              borderRadius: '50%' ,
              background:'#8f8e8b'
            }} />
            <p style={{ fontWeight: '700', margin: '8px 0 4px', fontSize: '14px' ,fontFamily: '"Objective", sans-serif'}}>{member.name}</p>
            <p style={{ color: 'gray', fontSize: '10px',fontWeight:'400',fontFamily: '"Objective", sans-serif',height:'7px' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}



      
    </div>
  );
};

export default TeamProfile;
