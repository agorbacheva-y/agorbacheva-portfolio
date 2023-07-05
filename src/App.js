import { useState, useRef } from "react";
import Top from "./components/Top";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//import FormSent from "./components/FormSent";
import Footer from "./components/Footer";

function App() {
  const [ showNavbar, setShowNavbar ] = useState(false);

  const topRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleShow = () => {
    setShowNavbar(true);
  };

  const handleClose = () => {
    setShowNavbar(false);
  };

  const scrollToTop = () => {
    if(!topRef.current) return;
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    if(!homeRef.current) return;
    homeRef.current?.scrollIntoView({ behavior: "smooth" });

    handleClose();
  };

  const scrollToAbout = () => {
    if(!aboutRef.current) return;
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

    handleClose();
  };

  const scrollToProjects = () => {
    if(!projectsRef.current) return;
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

    handleClose();
  };

  const scrollToContact = () => {
    if(!contactRef.current) return;
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

    handleClose();
  };

  return (
    <>
      <Top ref={topRef} />
      <Navbar 
        showNavbar={showNavbar}
        handleShow={handleShow}
        handleClose={handleClose}
        scrollToContact={scrollToContact} 
        scrollToProjects={scrollToProjects} 
        scrollToAbout={scrollToAbout} 
        scrollToHome={scrollToHome}
        scrollToTop={scrollToTop}
      />
      <Home ref={homeRef} />
      <AboutMe ref={aboutRef} />
      <Skills />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
      {/* <FormSent /> */}
    </>  
  );
}

export default App;