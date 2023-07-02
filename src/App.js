import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FormSent from "./components/FormSent";
import Footer from "./components/Footer";
import { AddBoxOutlined } from "@mui/icons-material";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () => {
    if(!homeRef.current) return;
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    if(!aboutRef.current) return;
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    if(!projectsRef.current) return;
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    if(!contactRef.current) return;
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToContact={scrollToContact} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToHome={scrollToHome} />
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

{/* <BrowserRouter>
      <Navbar contactRef={contactRef} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/aboutme' element={<AboutMe />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact contactRef={contactRef}/>} />
      </Routes>
      <Footer />
      {/* <FormSent />
    </BrowserRouter> */}