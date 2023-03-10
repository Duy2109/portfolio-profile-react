import React, { useState, createContext } from "react";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
// import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import Home from "./Components/Home/HomeSection.js";
// import Navbar from "./Components/Navbar/Navbar";
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from "./Components/Footer";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
  <div>
    <ThemeContext.Provider value={{ theme, changeTheme }}>
    <Sidebar changeTheme={changeTheme} theme={theme} />
      <div id={theme}>
        {/* <Navbar/> */}
        {/* <NavbarMobileView changeTheme={changeTheme} theme={theme} /> */}
        <Home changeTheme={changeTheme} theme={theme}/>
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Project />
        <Testimonial />
        <Contact />
        <div className="footer-styles">
        <Footer />
        </div>
      </div>
      <ScrollToTop
        smooth={true}
        top="20"
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  </div>
  );
};

export default App;
