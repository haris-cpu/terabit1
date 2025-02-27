import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Header";
import AppIndustries from "./Pages/Appindustries";
import Consultations from "./Pages/Consultation";
import RequestPricing from "./Pages/Contact";
import CoreTechnologies from "./Pages/Coretechnologies";
import Footer from "./Pages/footer";
import HeroSection from "./Pages/Herosection";
import PS from "./Pages/PS";
import Services from "./Pages/Services";
import SuccessStories from "./Pages/Successstories";
import TeamProfile from "./Pages/Team";
import Qadev from "./MobileServices/Qadev"; // import Qadev correctly
import MobileAppServices from "./MobileServices/MobileAppServices";
import DevelopmentProcess from "./MobileServices/Devprocess";
import WhyChooseUs from "./MobileServices/Whychoose";
import GuaranteedGains from "./MobileServices/Guarente";
import FeaturesSection from "./MobileServices/Tailored";
import HowWeWork from "./MobileServices/hww";
import FAQSection from "./MobileServices/FAQ";
import WebAppSection from "./WebServices/page";
import WebAppServices from "./WebServices/Page2";

// Scroll to section when navigating
const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    // Determine the section ID based on the route
    const sectionId =
      location.pathname === "/" ? "home" : location.pathname.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return null;
};

// Layout component, always visible
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ScrollToSection />
      {children ? (
        children
      ) : (
        <>
          <div id="home">
            <HeroSection />
          </div>
          <div id="about">
            <TeamProfile />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="consultations">
            <Consultations />
          </div>
          <div id="success-stories">
            <SuccessStories />
          </div>
          <div id="core-technologies">
            <CoreTechnologies />
          </div>
          <div id="industries">
            <AppIndustries />
          </div>
          <div id="ps">
            <PS />
          </div>
          <div id="contact">
            <RequestPricing />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<Layout />} />
        <Route path="/services" element={<Layout />} />
        <Route path="/consultations" element={<Layout />} />
        <Route path="/success-stories" element={<Layout />} />
        <Route path="/core-technologies" element={<Layout />} />
        <Route path="/industries" element={<Layout />} />
        <Route path="/ps" element={<Layout />} />
        <Route path="/contact" element={<Layout />} />

        {/* Update the route to use Qadev component */}
        <Route
          path="/mobile-app-development"
          element={
            <Layout>
              <Qadev />
              <MobileAppServices />
              <DevelopmentProcess />
              <WhyChooseUs />
              <CoreTechnologies />
              <GuaranteedGains />
              <FeaturesSection />
              <HowWeWork />
              <SuccessStories />
              <AppIndustries/>
              <TeamProfile/>
              <PS/>
              <FAQSection/>
              <RequestPricing/>
            </Layout>
          }
        />


<Route
  path="/web-app-development"
  element={
    <Layout>
      <WebAppSection/>
      <WebAppServices/>
    </Layout>
  }
/>


      </Routes>

   

      
    </Router>
  );
}

export default App;
