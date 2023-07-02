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
  const ref = useRef(null);

  const scrollTo = (e) => {
    if(!ref.current) return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact ref={ref} />
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